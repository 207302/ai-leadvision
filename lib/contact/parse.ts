import { inquiryBuilds } from "@/lib/content/site";

export type Inquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  build: string;
  message: string;
  product: string;
};

export type InquiryErrors = Partial<Record<keyof Inquiry | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d][\d\s()-]{7,}$/;

type Option = { value: string; label: string };

export function parseInquiry(input: unknown):
  | { ok: true; data: Inquiry; spam?: boolean }
  | { ok: false; errors: InquiryErrors } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Submit the form to send an inquiry." } };
  }

  const raw = input as Record<string, unknown>;
  const name = clean(raw.name, 100);
  const company = clean(raw.company, 150);
  const email = clean(raw.email, 200);
  const phone = clean(raw.phone, 30);
  const build = clean(raw.build, 40);
  const message = clean(raw.message, 5000);
  const product = clean(raw.product, 120);
  const honeypot = clean(raw.website, 200);

  const blank: Inquiry = {
    name,
    company,
    email,
    phone,
    build: labelFor(inquiryBuilds, build) ?? build,
    message,
    product,
  };

  if (honeypot) {
    return { ok: true, spam: true, data: blank };
  }

  const errors: InquiryErrors = {};

  if (name.length < 2) errors.name = "Enter your name.";
  if (company.length < 2) errors.company = "Enter your company name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid business email.";
  if (!phone) errors.phone = "Enter a phone number.";
  else if (!phonePattern.test(phone)) errors.phone = "Enter a valid phone number.";
  if (!labelFor(inquiryBuilds, build)) errors.build = "Choose what you are looking to build.";
  if (message.length < 20) {
    errors.message = "Add a short project description — at least a sentence.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data: blank };
}

function labelFor(options: readonly Option[], value: string) {
  return options.find((item) => item.value === value)?.label;
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}
