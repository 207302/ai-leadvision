import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/settings/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const { settings } = await getSiteSettings();
  return NextResponse.json(
    { ok: true, settings },
    { headers: { "Cache-Control": "no-store" } },
  );
}
