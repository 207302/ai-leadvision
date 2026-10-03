import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solutions",
    "/products",
    "/products/attendance",
    "/products/computer-vision",
    "/products/robotics",
    "/services",
    "/industries",
    "/case-studies",
    "/about",
    "/training",
    "/careers",
    "/testimonials",
    "/faq",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
