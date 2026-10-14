import { NextResponse } from "next/server";
import { insertCallbackRequest } from "@/lib/callback/store";
import { parseCallback } from "@/lib/callback/validate";
import { DAY, HOUR, clientIp, takeToken } from "@/lib/contact/rate-limit";
import { sameOrigin } from "@/lib/http";

export const runtime = "nodejs";

const attemptsPerIpPerHour = 20;
const savedPerIpPerHour = 5;
const savedPerEmailPerDay = 3;

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, errors: { form: "Submit the form from this site." } }, { status: 403 });
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > 10_000) {
    return NextResponse.json({ ok: false, errors: { form: "Submit the form to request a call back." } }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Submit the form to request a call back." } },
      { status: 400 },
    );
  }

  const parsed = parseCallback(body);
  if (parsed.ok && parsed.spam) {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(request);
  if (!takeToken(`callback:attempt:${ip}`, attemptsPerIpPerHour, HOUR)) {
    return NextResponse.json(
      { ok: false, errors: { form: "Too many requests from this connection. Please try again later." } },
      { status: 429 },
    );
  }

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 400 });
  }

  if (!takeToken(`callback:saved:${ip}`, savedPerIpPerHour, HOUR)) {
    return NextResponse.json(
      { ok: false, errors: { form: "Too many requests from this connection. Please try again later." } },
      { status: 429 },
    );
  }

  if (!takeToken(`callback:email:${parsed.data.email}`, savedPerEmailPerDay, DAY)) {
    return NextResponse.json(
      { ok: false, errors: { form: "This email has already requested a call back recently. Please try again tomorrow." } },
      { status: 429 },
    );
  }

  try {
    await insertCallbackRequest(parsed.data);
  } catch (error) {
    console.error("Saving callback request failed", error);
    return NextResponse.json(
      { ok: false, errors: { form: "We could not save your request. Please try again in a moment." } },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
