export const callbackStatuses = ["new", "contacted", "closed"] as const;

export type CallbackStatus = (typeof callbackStatuses)[number];

export type CallbackInput = {
  name: string;
  email: string;
  phone: string;
};

export type CallbackErrors = Partial<Record<keyof CallbackInput | "form", string>>;

const emailPattern =
  /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const phonePattern = /^\+?[0-9][0-9\s-]*$/;

const gmailDomains = new Set(["gmail.com", "googlemail.com"]);

function isYahooDomain(domain: string) {
  if (domain === "ymail.com" || domain === "rocketmail.com") return true;
  return /^yahoo(?:\.[a-z]{2,3}){1,2}$/.test(domain);
}

/** Drop control characters, trim, and collapse whitespace. */
export function sanitizeText(value: unknown) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[\u2018\u2019\u2032]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .trim()
    .replace(/\s+/g, " ");
}

function parseName(value: unknown): { name: string } | { error: string } {
  const name = sanitizeText(value);
  if (!name) return { error: "Enter your name." };
  if (name.length < 2) return { error: "Enter at least 2 characters." };
  if (name.length > 60) return { error: "Keep your name to 60 characters." };
  if (!/^[\p{L} .'-]+$/u.test(name) || !/\p{L}/u.test(name)) {
    return { error: "Use letters, spaces, and . ' - only." };
  }
  return { name };
}

function parseEmail(value: unknown): { email: string } | { error: string } {
  const email = sanitizeText(value).toLowerCase();
  if (!email || email.length > 254 || email.includes("..") || !emailPattern.test(email)) {
    return { error: "Enter a valid email address." };
  }
  const domain = email.slice(email.lastIndexOf("@") + 1);
  if (!gmailDomains.has(domain) && !isYahooDomain(domain)) {
    return { error: "Use a Gmail or Yahoo email address." };
  }
  return { email };
}

/**
 * A phone number is 10 digits, with an optional 1–3 digit country code.
 * Spaces and dashes are allowed in what the visitor types.
 */
function parsePhone(value: unknown): { phone: string } | { error: string } {
  const raw = sanitizeText(value);
  const invalid = { error: "Enter a 10-digit phone number. A country code is optional." };
  if (!raw || raw.length > 20 || !phonePattern.test(raw)) return invalid;

  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return { phone: digits };
  if (digits.length < 11 || digits.length > 13) return invalid;

  const country = digits.slice(0, digits.length - 10);
  if (country.startsWith("0")) return invalid;
  return { phone: `+${country} ${digits.slice(-10)}` };
}

export function parseCallback(input: unknown):
  | { ok: true; spam: boolean; data: CallbackInput }
  | { ok: false; errors: CallbackErrors } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Submit the form to request a call back." } };
  }

  const body = input as Record<string, unknown>;
  const honeypot = sanitizeText(body.company_website);
  const nameResult = parseName(body.name);
  const emailResult = parseEmail(body.email);
  const phoneResult = parsePhone(body.phone);

  if (honeypot) {
    return {
      ok: true,
      spam: true,
      data: {
        name: "name" in nameResult ? nameResult.name : "",
        email: "email" in emailResult ? emailResult.email : "",
        phone: "phone" in phoneResult ? phoneResult.phone : "",
      },
    };
  }

  const errors: CallbackErrors = {};
  if ("error" in nameResult) errors.name = nameResult.error;
  if ("error" in emailResult) errors.email = emailResult.error;
  if ("error" in phoneResult) errors.phone = phoneResult.error;
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    spam: false,
    data: {
      name: (nameResult as { name: string }).name,
      email: (emailResult as { email: string }).email,
      phone: (phoneResult as { phone: string }).phone,
    },
  };
}

export function isCallbackStatus(value: unknown): value is CallbackStatus {
  return typeof value === "string" && (callbackStatuses as readonly string[]).includes(value);
}
