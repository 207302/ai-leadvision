import type { Inquiry } from "@/lib/contact/parse";

export type DeliveryResult =
  | { ok: true; mode: "webhook" | "log" }
  | { ok: false; code: "DELIVERY_NOT_CONFIGURED" | "DELIVERY_FAILED" };

/**
 * Connect delivery by setting CONTACT_WEBHOOK_URL to an endpoint that accepts
 * a JSON inquiry (Resend, Formspree, an internal mail service, or similar).
 * In development, inquiries are logged and treated as delivered so the form
 * can be exercised. Production without a webhook does not pretend to send.
 */
export async function deliverInquiry(inquiry: Inquiry): Promise<DeliveryResult> {
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
