import { getAdminSession } from "@/lib/admin/session";
import { jsonError, sameOrigin } from "@/lib/http";
import { deleteSubscriber } from "@/lib/newsletter/store";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function DELETE(request: Request, context: Context) {
  if (!sameOrigin(request)) return jsonError("Delete from this site.", 403);
  const session = await getAdminSession();
  if (!session) return jsonError("Sign in required.", 401);

  const { id } = await context.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return jsonError("That subscriber was not found.", 404);

  try {
    const removed = await deleteSubscriber(id);
    if (!removed) return jsonError("That subscriber was not found.", 404);
  } catch (error) {
    console.error("Deleting subscriber failed", error);
    return jsonError("The subscriber could not be removed.", 503);
  }

  return Response.json({ ok: true });
}
