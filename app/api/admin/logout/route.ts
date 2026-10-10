import { NextResponse } from "next/server";
import { adminCookieName, adminCookieOptions } from "@/lib/admin/session";
import { sameOrigin, jsonError } from "@/lib/http";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Sign out from this site.", 403);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, "", { ...adminCookieOptions(), maxAge: 0 });
  return response;
}
