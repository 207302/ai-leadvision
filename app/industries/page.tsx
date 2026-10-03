import type { Metadata } from "next";
import { PlaceholderBody } from "@/components/layout/placeholder-page";
import { placeholderPages } from "@/lib/content/placeholders";

const page = placeholderPages.industries;

export const metadata: Metadata = {
  title: "Industries | AI Lead Vision",
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: "Industries | AI Lead Vision",
    description: page.description,
    url: page.path,
  },
};

export default function IndustriesPage() {
  return <PlaceholderBody page={page} />;
}
