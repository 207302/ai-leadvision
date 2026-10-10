import { SettingsForm } from "@/components/admin/settings-form";
import { getSiteSettings } from "@/lib/settings/store";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const { settings, source } = await getSiteSettings();

  return (
    <div className="rounded-xl border border-line bg-white p-5 sm:p-8">
      <h1 className="text-2xl text-ink">Footer</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        Phone numbers, WhatsApp numbers, the Bengaluru office address, and social links. Empty social links stay off the public footer.
      </p>
      {source === "fallback" && (
        <p role="status" className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
          The database has no saved footer yet, so this form shows the current site copy. Saving stores it.
        </p>
      )}
      <div className="mt-8">
        <SettingsForm initial={settings} />
      </div>
    </div>
  );
}
