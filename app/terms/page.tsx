import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { termsPage } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | AI Lead Vision",
  description: termsPage.description,
  alternates: { canonical: termsPage.path },
  openGraph: {
    title: "Terms & Conditions | AI Lead Vision",
    description: termsPage.description,
    url: termsPage.path,
  },
};

export default function TermsPage() {
  return <LegalDocument page={termsPage} />;
}
