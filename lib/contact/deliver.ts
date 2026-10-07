import nodemailer from "nodemailer";
import { contactEmail } from "@/lib/content/contact-email";
import { siteConfig } from "@/lib/content/site";
import type { Inquiry } from "@/lib/contact/parse";

export type DeliveryResult =
  | { ok: true; mode: "smtp" | "webhook" | "log" }
  | { ok: false; code: "DELIVERY_NOT_CONFIGURED" | "DELIVERY_FAILED" };

/**
 * Delivery order:
 * 1. SMTP, when SMTP_HOST, SMTP_USER and SMTP_PASS are set (for example the Hostinger
 *    mailbox: smtp.hostinger.com, port 465). Sends the inquiry to CONTACT_TO_EMAIL,
 *    or the general address, and a confirmation to the visitor.
 * 2. CONTACT_WEBHOOK_URL, an endpoint that accepts a JSON inquiry (Formspree or similar).
 * In development, inquiries are logged and treated as delivered so the form
 * can be exercised. Production without either does not pretend to send.
 */
export async function deliverInquiry(
  inquiry: Inquiry,
  { confirm = true }: { confirm?: boolean } = {},
): Promise<DeliveryResult> {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return sendWithSmtp(inquiry, SMTP_HOST, SMTP_USER, SMTP_PASS, confirm);
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...inquiry,
          submittedAt: new Date().toISOString(),
          source: "aileadvision.com",
        }),
      });

      if (!response.ok) return { ok: false, code: "DELIVERY_FAILED" };
      return { ok: true, mode: "webhook" };
    } catch {
      return { ok: false, code: "DELIVERY_FAILED" };
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[contact] inquiry received (log only)", inquiry);
    return { ok: true, mode: "log" };
  }

  return { ok: false, code: "DELIVERY_NOT_CONFIGURED" };
}

async function sendWithSmtp(
  inquiry: Inquiry,
  host: string,
  user: string,
  pass: string,
  confirm: boolean,
): Promise<DeliveryResult> {
  const port = Number(process.env.SMTP_PORT) || 465;
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  const from = { name: contactEmail.fromName, address: user };
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.emails.general;

  try {
    await transport.sendMail({
      from,
      to,
      replyTo: { name: singleLine(inquiry.name), address: inquiry.email },
      subject: singleLine(contactEmail.notification.subject(inquiry.name, inquiry.company)),
      text: notificationText(inquiry),
    });
  } catch (error) {
    console.error("[contact] SMTP delivery failed", error);
    return { ok: false, code: "DELIVERY_FAILED" };
  }

  if (!confirm) return { ok: true, mode: "smtp" };

  // The team already has the inquiry, so a failed confirmation must not fail the request.
  try {
    await transport.sendMail({
      from,
      to: inquiry.email,
      replyTo: to,
      subject: contactEmail.confirmation.subject,
      text: confirmationText(inquiry),
    });
  } catch (error) {
    console.error("[contact] confirmation email failed", error);
  }

  return { ok: true, mode: "smtp" };
}

function notificationText(inquiry: Inquiry) {
  const rows: [string, string][] = [
    ["Name", inquiry.name],
    ["Company", inquiry.company],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Looking to build", inquiry.build],
    ["Product page", inquiry.product],
    ["Submitted", new Date().toISOString()],
  ];

  return [
    contactEmail.notification.intro,
    "",
    ...rows.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    inquiry.message,
  ].join("\n");
}

function confirmationText(inquiry: Inquiry) {
  const { greeting, genericGreeting, body, signOff } = contactEmail.confirmation;
  const name = singleLine(inquiry.name);
  // The confirmation goes to an address anyone can type in, so never echo link-like text.
  const opening = /https?:|www\.|[@/\\]|\.[a-z]{2,}\b/i.test(name) ? genericGreeting : greeting(name);
  return [opening, "", ...body.flatMap((line) => [line, ""]), ...signOff].join("\n");
}

function singleLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
