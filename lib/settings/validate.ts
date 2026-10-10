import { socialPlatforms, type SettingsInput, type SiteSettings, type SocialKey } from "@/lib/settings/types";

const maxNumbers = 6;
const maxAddressLines = 8;

export type SettingsErrors = Partial<Record<"phones" | "whatsapp" | "address" | SocialKey | "form", string>>;

function digitCount(value: string) {
  return value.replace(/\D/g, "").length;
}

function cleanPhone(value: string) {
  const display = value.trim().replace(/\s+/g, " ");
  if (!display) return null;
  if (!/^[+0-9][0-9\s().-]{6,22}$/.test(display) || digitCount(display) < 8 || digitCount(display) > 15) {
    return { error: "Enter a phone number with 8 to 15 digits." as const };
  }
  return { display, tel: `+${display.replace(/\D/g, "")}` };
}

function cleanList(values: string[], label: "phones" | "whatsapp"): { numbers: SiteSettings["phones"]; error?: string } {
  if (!Array.isArray(values)) return { numbers: [], error: `Enter ${label} as a list.` };
  if (values.length > maxNumbers) return { numbers: [], error: `Add at most ${maxNumbers} ${label}.` };

  const numbers: SiteSettings["phones"] = [];
  for (const value of values) {
    if (typeof value !== "string") return { numbers: [], error: "Enter each number as text." };
    const cleaned = cleanPhone(value);
    if (!cleaned) continue;
    if ("error" in cleaned) return { numbers: [], error: cleaned.error };
    if (!numbers.some((item) => item.tel === cleaned.tel)) numbers.push(cleaned);
  }
  return { numbers };
}

function cleanAddress(value: string): { ok: true; lines: string[] } | { ok: false; error: string } {
  const lines = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length > maxAddressLines) return { ok: false, error: `Use at most ${maxAddressLines} address lines.` };
  if (lines.some((line) => line.length > 120)) return { ok: false, error: "Keep each address line under 120 characters." };
  return { ok: true, lines };
}

function cleanUrl(value: string): { ok: true; href: string | null } | { ok: false; error: string } {
  const trimmed = value.trim();
  if (!trimmed) return { ok: true, href: null };
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return { ok: false, error: "Enter a full URL starting with https://." };
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    return { ok: false, error: "Enter a full URL starting with https://." };
  }
  return { ok: true, href: url.toString() };
}

export function validateSettings(input: unknown): { ok: true; settings: SiteSettings } | { ok: false; errors: SettingsErrors } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Submit the settings form to save." } };
  }

  const body = input as Partial<SettingsInput>;
  const errors: SettingsErrors = {};
  const phones = cleanList(body.phones ?? [], "phones");
  const whatsapp = cleanList(body.whatsapp ?? [], "whatsapp");
  const address = cleanAddress(typeof body.address === "string" ? body.address : "");

  if (phones.error) errors.phones = phones.error;
  if (whatsapp.error) errors.whatsapp = whatsapp.error;
  if (!address.ok) errors.address = address.error;

  const social = {
    linkedin: null,
    youtube: null,
    instagram: null,
    facebook: null,
  } as SiteSettings["social"];

  for (const platform of socialPlatforms) {
    const raw = body.social?.[platform.key];
    if (typeof raw !== "string") {
      errors[platform.key] = "Enter a URL or leave this blank.";
      continue;
    }
    const cleaned = cleanUrl(raw);
    if (!cleaned.ok) errors[platform.key] = cleaned.error;
    else social[platform.key] = cleaned.href;
  }

  if (Object.keys(errors).length > 0 || !address.ok) return { ok: false, errors };

  return {
    ok: true,
    settings: {
      phones: phones.numbers,
      whatsapp: whatsapp.numbers,
      addressLines: address.lines,
      social,
    },
  };
}
