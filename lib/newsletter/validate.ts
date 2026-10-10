const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseSubscription(input: unknown):
  | { ok: true; spam: boolean; email: string; name: string | null }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Enter an email address to subscribe." };
  }

  const body = input as { email?: unknown; name?: unknown; company_website?: unknown };
  if (typeof body.company_website === "string" && body.company_website.trim()) {
    return { ok: true, spam: true, email: "", name: null };
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  const rawName = typeof body.name === "string" ? body.name.trim().replace(/\s+/g, " ") : "";
  if (rawName.length > 80) return { ok: false, error: "Keep the name under 80 characters." };

  return { ok: true, spam: false, email, name: rawName || null };
}
