import type { Metadata } from "next";
import { PlaceholderBody } from "@/components/layout/placeholder-page";
import { placeholderPages } from "@/lib/content/placeholders";

const page = placeholderPages.training;

export const metadata: Metadata = {
  title: "Training | AI Lead Vision",
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: "Training | AI Lead Vision",
    description: page.description,
    url: page.path,
  },
};

export default function TrainingPage() {
  return <PlaceholderBody page={page} />;
}
