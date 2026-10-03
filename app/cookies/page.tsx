import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { cookiePolicy } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | AI Lead Vision",
  description: cookiePolicy.description,
  alternates: { canonical: cookiePolicy.path },
  openGraph: {
    title: "Cookie Policy | AI Lead Vision",
    description: cookiePolicy.description,
    url: cookiePolicy.path,
  },
};

export default function CookiePolicyPage() {
  return <LegalDocument page={cookiePolicy} />;
}