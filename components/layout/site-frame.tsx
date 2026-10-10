import { headers } from "next/headers";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteLoader } from "@/components/layout/site-loader";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { siteJsonLd } from "@/lib/seo";
import { getSiteSettings } from "@/lib/settings/store";

export async function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  if (pathname.startsWith("/admin")) return children;

  const { settings } = await getSiteSettings();
  const phone = settings.phones[0]?.tel ?? null;
  const whatsapp = settings.whatsapp[0]?.tel.replace(/\D/g, "") ?? null;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteLoader />
      <Header />
      <main id="main">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer settings={settings} />
      <WhatsAppButton phoneTel={phone} whatsappTel={whatsapp} />
      <GoogleAnalytics />
      <JsonLd data={siteJsonLd()} />
    </>
  );
}
