import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { termsPage } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description: termsPage.description,
  path: termsPage.path,
});

export default function TermsPage() {
  return <LegalDocument page={termsPage} />;
}
