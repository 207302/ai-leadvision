import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { privacyPolicy } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Lead Vision",
  description: privacyPolicy.description,
  alternates: { canonical: privacyPolicy.path },
  openGraph: {
    title: "Privacy Policy | AI Lead Vision",
    description: privacyPolicy.description,
    url: privacyPolicy.path,
  },
};

export default function PrivacyPage() {
  return <LegalDocument page={privacyPolicy} />;
}
