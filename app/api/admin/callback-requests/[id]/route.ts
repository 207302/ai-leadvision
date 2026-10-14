import { getAdminSession } from "@/lib/admin/session";
import { updateCallbackStatus } from "@/lib/callback/store";
import { isCallbackStatus } from "@/lib/callback/validate";
import { jsonError, sameOrigin } from "@/lib/http";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  if (!sameOrigin(request)) return jsonError("Update the status from this site.", 403);
  const session = await getAdminSession();
  if (!session) return jsonError("Sign in required.", 401);

  const { id } = await context.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return jsonError("That request was not found.", 404);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Choose a status.", 400);
  }

  const status = body && typeof body === "object" ? (body as { status?: unknown }).status : undefined;
  if (!isCallbackStatus(status)) return jsonError("Choose new, contacted, or closed.", 400);

  try {
    const updated = await updateCallbackStatus(id, status);
    if (!updated) return jsonError("That request was not found.", 404);
    return Response.json({ ok: true, request: updated });
  } catch (error) {
    console.error("Updating callback status failed", error);
    return jsonError("The status could not be updated.", 503);
  }
}
