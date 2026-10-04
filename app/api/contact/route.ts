import { NextResponse } from "next/server";
import { deliverInquiry } from "@/lib/contact/deliver";
import { parseInquiry } from "@/lib/contact/parse";
import { DAY, HOUR, clientIp, takeToken } from "@/lib/contact/rate-limit";

const inquiriesPerIpPerHour = 5;
const confirmationsPerAddressPerDay = 2;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Submit the form to send an inquiry." } },
      { status: 400 },
    );
  }

  const parsed = parseInquiry(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 400 });
  }

  if (parsed.spam) {
    return NextResponse.json({ ok: true });
  }

  if (!takeToken(`ip:${clientIp(request)}`, inquiriesPerIpPerHour, HOUR)) {
    return NextResponse.json({ ok: false, code: "RATE_LIMITED" }, { status: 429 });
  }

  const confirm = takeToken(
    `confirm:${parsed.data.email.toLowerCase()}`,
    confirmationsPerAddressPerDay,
    DAY,
  );

  const delivery = await deliverInquiry(parsed.data, { confirm });
  if (!delivery.ok) {
    return NextResponse.json({ ok: false, code: delivery.code }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
