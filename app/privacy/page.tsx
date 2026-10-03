import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { privacyPolicy } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: privacyPolicy.description,
  path: privacyPolicy.path,
});

export default function PrivacyPage() {
  return <LegalDocument page={privacyPolicy} />;
}
