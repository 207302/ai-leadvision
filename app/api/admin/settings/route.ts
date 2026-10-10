import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { jsonError, sameOrigin } from "@/lib/http";
import { getSiteSettings, saveSiteSettings } from "@/lib/settings/store";
import { validateSettings } from "@/lib/settings/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return jsonError("Sign in required.", 401);
  const { settings, source } = await getSiteSettings();
  return NextResponse.json({ ok: true, settings, source });
}

export async function PUT(request: Request) {
  if (!sameOrigin(request)) return jsonError("Save the form from this site.", 403);
  const session = await getAdminSession();
  if (!session) return jsonError("Sign in required.", 401);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Submit the settings form to save.", 400);
  }

  const parsed = validateSettings(body);
  if (!parsed.ok) return jsonError("Check the highlighted fields.", 400, { errors: parsed.errors });

  try {
    await saveSiteSettings(parsed.settings);
  } catch (error) {
    console.error("Saving site settings failed", error);
    return jsonError("The settings could not be saved.", 503);
  }

  return NextResponse.json({ ok: true, settings: parsed.settings });
}
