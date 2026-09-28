import type { InquiryInterest } from "@/lib/content/site";

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: InquiryInterest;
  message: string;
  product: string;
};

export type InquiryErrors = Partial<Record<keyof Inquiry | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d][\d\s()-]{7,}$/;

export function parseInquiry(input: unknown):
  | { ok: true; data: Inquiry; spam?: boolean }
  | { ok: false; errors: InquiryErrors } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Submit the form to send an inquiry." } };
  }

  const raw = input as Record<string, unknown>;
  const name = clean(raw.name, 100);
  const email = clean(raw.email, 200);
  const company = clean(raw.company, 150);
  const phone = clean(raw.phone, 30);
  const interest = clean(raw.interest, 40);
  const message = clean(raw.message, 5000);
  const product = clean(raw.product, 120);
  const honeypot = clean(raw.website, 200);

  if (honeypot) {
    return {
      ok: true,
      spam: true,
      data: { name, email, company, phone, interest: "other", message, product },
    };
  }

  const errors: InquiryErrors = {};

  if (name.length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid work email.";
  if (company.length < 2) errors.company = "Enter your company name.";
  if (phone && !phonePattern.test(phone)) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }

  const allowed = new Set([
    "products",
    "ai-development",
    "machine-learning",
    "computer-vision",
    "robotics",
    "software-development",
    "training",
    "other",
  ]);

  if (!allowed.has(interest)) {
    errors.interest = "Choose what you are interested in.";
  }

  if (message.length < 20) {
    errors.message = "Add a short note — at least a sentence — about what you want to solve.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      phone,
      interest: interest as InquiryInterest,
      message,
      product,
    },
  };
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}
