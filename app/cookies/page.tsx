import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { cookiePolicy } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: cookiePolicy.description,
  path: cookiePolicy.path,
});

export default function CookiePolicyPage() {
  return <LegalDocument page={cookiePolicy} />;
}