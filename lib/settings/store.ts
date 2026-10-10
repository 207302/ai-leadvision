import { getPool } from "@/lib/db/pool";
import { defaultSiteSettings } from "@/lib/settings/defaults";
import { socialPlatforms, type SiteSettings, type SocialKey } from "@/lib/settings/types";

type SettingsRow = {
  phones: unknown;
  whatsapp_numbers: unknown;
  address_lines: unknown;
  social: unknown;
};

function asStringList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function asPhones(value: unknown): SiteSettings["phones"] {
  return asStringList(value).map((display) => ({
    display,
    tel: `+${display.replace(/\D/g, "")}`,
  }));
}

function asSocial(value: unknown): SiteSettings["social"] {
  const record = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const social = Object.fromEntries(socialPlatforms.map((item) => [item.key, null])) as SiteSettings["social"];
  for (const platform of socialPlatforms) {
    const href = record[platform.key];
    social[platform.key] = typeof href === "string" && href.startsWith("http") ? href : null;
  }
  return social;
}

function fromRow(row: SettingsRow): SiteSettings {
  return {
    phones: asPhones(row.phones),
    whatsapp: asPhones(row.whatsapp_numbers),
    addressLines: asStringList(row.address_lines),
    social: asSocial(row.social),
  };
}

export async function getSiteSettings(): Promise<{ settings: SiteSettings; source: "database" | "fallback" }> {
  try {
    const result = await getPool().query<SettingsRow>(
      "SELECT phones, whatsapp_numbers, address_lines, social FROM site_settings WHERE id = 1",
    );
    const row = result.rows[0];
    if (!row) return { settings: defaultSiteSettings(), source: "fallback" };
    return { settings: fromRow(row), source: "database" };
  } catch (error) {
    console.error("Unable to read site settings", error);
    return { settings: defaultSiteSettings(), source: "fallback" };
  }
}

export async function saveSiteSettings(settings: SiteSettings) {
  const social = Object.fromEntries(
    socialPlatforms.map((item) => [item.key, settings.social[item.key as SocialKey]]),
  );
  await getPool().query(
    `INSERT INTO site_settings (id, phones, whatsapp_numbers, address_lines, social, updated_at)
     VALUES (1, $1::jsonb, $2::jsonb, $3::jsonb, $4::jsonb, now())
     ON CONFLICT (id) DO UPDATE SET
       phones = EXCLUDED.phones,
       whatsapp_numbers = EXCLUDED.whatsapp_numbers,
       address_lines = EXCLUDED.address_lines,
       social = EXCLUDED.social,
       updated_at = now()`,
    [
      JSON.stringify(settings.phones.map((phone) => phone.display)),
      JSON.stringify(settings.whatsapp.map((phone) => phone.display)),
      JSON.stringify(settings.addressLines),
      JSON.stringify(social),
    ],
  );
}
