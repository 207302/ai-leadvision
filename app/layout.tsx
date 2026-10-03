import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteLoader } from "@/components/layout/site-loader";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/content/site";
import { searchConsolePlaceholder, siteJsonLd } from "@/lib/seo";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Company in Bangalore | AI Lead Vision",
    template: "%s | AI Lead Vision",
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "technology",
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || searchConsolePlaceholder,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.legalName,
    title: "AI Company in Bangalore | AI Lead Vision",
    description: siteConfig.description,
    locale: "en_IN",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Company in Bangalore | AI Lead Vision",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
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
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics />
        <JsonLd data={siteJsonLd()} />
      </body>
    </html>
  );
}
