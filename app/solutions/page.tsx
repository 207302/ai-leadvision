import type { Metadata } from "next";
import { PlaceholderBody } from "@/components/layout/placeholder-page";
import { placeholderPages } from "@/lib/content/placeholders";

const page = placeholderPages.solutions;

export const metadata: Metadata = {
  title: "Solutions | AI Lead Vision",
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: "Solutions | AI Lead Vision",
    description: page.description,
    url: page.path,
  },
};

export default function SolutionsPage() {
  return <PlaceholderBody page={page} />;
}
