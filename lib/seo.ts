import type { Metadata, MetadataRoute } from "next";
import { insights } from "@/lib/content/insights";
import { projects } from "@/lib/content/projects";
import { siteConfig, socialProfiles } from "@/lib/content/site";

/** Shown until Search Console HTML-tag verification is pasted into the environment. */
export const searchConsolePlaceholder = "REPLACE_WITH_SEARCH_CONSOLE_VERIFICATION_CODE";

/** Shown until a GA4 measurement ID is set. Analytics does not load while this value is in use. */
export const analyticsPlaceholder = "G-XXXXXXXXXX";

export const contentUpdated = new Date("2026-10-07");

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India — AI, computer vision, and robotics",
} as const;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const branded = `${title} | AI Lead Vision`;
  return {
    title: path === "/" ? { absolute: branded } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.legalName,
      title: branded,
      description,
      url: path,
      locale: siteConfig.locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [ogImage.url],
    },
  };
}

function sameAs() {
  const urls: string[] = [];
  for (const item of socialProfiles) {
    if (item.href?.startsWith("http")) urls.push(item.href);
  }
  return urls;
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: "IN",
  };
}

/**
 * Organization, LocalBusiness, and ContactPoint.
 * Street address, geo, and opening hours stay off until address.confirmed is set.
 * The WhatsApp placeholder number is not published here.
 */
export function siteJsonLd() {
  const orgId = `${siteConfig.url}/#organization`;
  const localId = `${siteConfig.url}/#localbusiness`;
  const [primary, ...morePhones] = siteConfig.phones;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.legalName,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo/logo.png`,
        },
        image: `${siteConfig.url}/opengraph-image`,
        email: siteConfig.emails.general,
        telephone: primary?.tel,
        address: postalAddress(),
        sameAs: sameAs(),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: siteConfig.emails.general,
            telephone: primary?.tel,
            areaServed: "IN",
            availableLanguage: ["English"],
          },
          ...morePhones.map((phone) => ({
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: phone.tel,
            areaServed: "IN",
            availableLanguage: ["English"],
          })),
          {
            "@type": "ContactPoint",
            contactType: "human resources",
            email: siteConfig.emails.hr,
            areaServed: "IN",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": localId,
        name: siteConfig.legalName,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        email: siteConfig.emails.general,
        telephone: primary?.tel,
        address: postalAddress(),
        parentOrganization: { "@id": orgId },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        sameAs: sameAs(),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.legalName,
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#webpage`,
    url: `${siteConfig.url}/contact`,
    name: "Contact AI Lead Vision Pvt Ltd",
    mainEntity: { "@id": `${siteConfig.url}/#organization` },
    about: { "@id": `${siteConfig.url}/#localbusiness` },
  };
}

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/products/attendance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/computer-vision", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/robotics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.7 },
  { path: "/technology", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/training", changeFrequency: "monthly", priority: 0.4 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.5 },
  { path: "/testimonials", changeFrequency: "monthly", priority: 0.3 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];

export function sitemapEntries(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: contentUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const insightRoutes = insights.map((item) => ({
    url: `${siteConfig.url}/insights/${item.slug}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
