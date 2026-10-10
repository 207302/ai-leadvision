import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

export const adminCookieName = "alv_admin_session";
const maxAgeSeconds = 60 * 60 * 12;

export type AdminSession = {
  id: string;
  email: string;
};

function signingKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) return null;
  return new TextEncoder().encode(secret);
}

export async function signAdminToken(admin: AdminSession) {
  const key = signingKey();
  if (!key) throw new Error("AUTH_SECRET must be at least 32 characters.");
  return new SignJWT({ email: admin.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(admin.id)
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(key);
}

export async function readAdminToken(token: string): Promise<AdminSession | null> {
  const key = signingKey();
  if (!key) return null;
  try {
    const { payload } = await jwtVerify(token, key);
    if (!payload.sub || typeof payload.email !== "string") return null;
    return { id: payload.sub, email: payload.email };
  } catch {
    return null;
  }
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export async function getAdminSession() {
  const token = (await cookies()).get(adminCookieName)?.value;
  if (!token) return null;
  return readAdminToken(token);
}
