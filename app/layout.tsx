import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { SiteFrame } from "@/components/layout/site-frame";
import { siteConfig } from "@/lib/content/site";
import { searchConsolePlaceholder } from "@/lib/seo";
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
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
