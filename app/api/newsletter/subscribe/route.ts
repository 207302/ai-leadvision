import { NextResponse } from "next/server";
import { HOUR, clientIp, takeToken } from "@/lib/contact/rate-limit";
import { jsonError, sameOrigin } from "@/lib/http";
import { subscribeNewsletter } from "@/lib/newsletter/store";
import { parseSubscription } from "@/lib/newsletter/validate";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Submit the form from this site.", 403);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Enter an email address to subscribe.", 400);
  }

  const parsed = parseSubscription(body);
  if (!parsed.ok) return jsonError(parsed.error, 400);
  if (parsed.spam) return NextResponse.json({ ok: true, message: "You are subscribed." });

  if (!takeToken(`newsletter:${clientIp(request)}`, 5, HOUR)) {
    return jsonError("Too many attempts. Try again in a little while.", 429);
  }

  try {
    const result = await subscribeNewsletter(parsed);
    if (!result.ok) return jsonError("This email is already subscribed.", 409);
  } catch (error) {
    console.error("Newsletter subscribe failed", error);
    return jsonError("The list is unavailable right now. Try again shortly.", 503);
  }

  return NextResponse.json({ ok: true, message: "You are subscribed." });
}
