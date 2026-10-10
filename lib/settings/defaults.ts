import { officeAddressLines, siteConfig } from "@/lib/content/site";
import { socialPlatforms, type SiteSettings, type SocialKey } from "@/lib/settings/types";

function toPhone(display: string) {
  return { display, tel: `+${display.replace(/\D/g, "")}` };
}

export function defaultSiteSettings(): SiteSettings {
  const social = Object.fromEntries(socialPlatforms.map((item) => [item.key, null])) as SiteSettings["social"];
  (Object.keys(siteConfig.social) as SocialKey[]).forEach((key) => {
    const href = siteConfig.social[key];
    social[key] = typeof href === "string" && href.startsWith("http") ? href : null;
  });

  return {
    phones: siteConfig.phones.map((phone) => ({ display: phone.display, tel: phone.tel })),
    whatsapp: [toPhone(siteConfig.whatsapp.display)],
    addressLines: officeAddressLines(),
    social,
  };
}
