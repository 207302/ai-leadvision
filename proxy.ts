import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const cookieName = "alv_admin_session";

function signingKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) return null;
  return new TextEncoder().encode(secret);
}

async function hasSession(request: NextRequest) {
  const token = request.cookies.get(cookieName)?.value;
  const key = signingKey();
  if (!token || !key) return false;
  try {
    await jwtVerify(token, key);
    return true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const adminPage = pathname === "/admin" || pathname.startsWith("/admin/");
  const adminApi = pathname.startsWith("/api/admin");
  const loginPage = pathname === "/admin/login";

  const loginApi = pathname === "/api/admin/login";

  if (adminPage || adminApi) {
    const signedIn = await hasSession(request);
    if (!signedIn && adminApi && !loginApi) {
      return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
    }
    if (!signedIn && adminPage && !loginPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
    if (signedIn && loginPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/settings";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
