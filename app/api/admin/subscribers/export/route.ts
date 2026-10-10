import { getAdminSession } from "@/lib/admin/session";
import { jsonError } from "@/lib/http";
import { subscribersToCsv } from "@/lib/newsletter/csv";
import { listSubscribersForExport } from "@/lib/newsletter/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return jsonError("Sign in required.", 401);

  try {
    const subscribers = await listSubscribersForExport();
    return new Response(subscribersToCsv(subscribers), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="newsletter-subscribers.csv"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Exporting subscribers failed", error);
    return jsonError("The export is unavailable.", 503);
  }
}
