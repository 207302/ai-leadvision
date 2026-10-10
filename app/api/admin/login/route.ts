import { NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/admin/authenticate";
import { adminCookieName, adminCookieOptions, signAdminToken } from "@/lib/admin/session";
import { HOUR, clientIp, takeToken } from "@/lib/contact/rate-limit";
import { jsonError, sameOrigin } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Sign in from this site.", 403);
  if (!takeToken(`admin-login:${clientIp(request)}`, 10, HOUR)) {
    return jsonError("Too many attempts. Try again in a little while.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Enter your email and password.", 400);
  }

  const record = body && typeof body === "object" ? (body as { email?: unknown; password?: unknown }) : {};
  const email = typeof record.email === "string" ? record.email : "";
  const password = typeof record.password === "string" ? record.password : "";
  if (!email || !password) return jsonError("Enter your email and password.", 400);

  try {
    const result = await authenticateAdmin(email, password);
    if (!result.ok) return jsonError(result.error, 401);

    const token = await signAdminToken(result.admin);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookieName, token, adminCookieOptions());
    return response;
  } catch (error) {
    console.error("Admin login failed", error);
    return jsonError("Sign-in is unavailable right now.", 503);
  }
}
