import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { jsonError } from "@/lib/http";
import { listSubscribers, parseSubscriberQuery } from "@/lib/newsletter/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) return jsonError("Sign in required.", 401);

  try {
    const query = parseSubscriberQuery(new URL(request.url).searchParams);
    const result = await listSubscribers(query);
    return NextResponse.json({ ok: true, ...result, query });
  } catch (error) {
    console.error("Listing subscribers failed", error);
    return jsonError("The subscriber list is unavailable.", 503);
  }
}
