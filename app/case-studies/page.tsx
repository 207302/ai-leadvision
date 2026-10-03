import type { Metadata } from "next";
import { PlaceholderBody } from "@/components/layout/placeholder-page";
import { placeholderPages } from "@/lib/content/placeholders";

const page = placeholderPages.caseStudies;

export const metadata: Metadata = {
  title: "Case Studies | AI Lead Vision",
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: "Case Studies | AI Lead Vision",
    description: page.description,
    url: page.path,
  },
};

export default function CaseStudiesPage() {
  return <PlaceholderBody page={page} />;
}
