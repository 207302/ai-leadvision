import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { FinalCta } from "@/components/sections/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Technology",
  description:
    "AI and machine learning, computer vision, robotics and embedded systems, and enterprise software used by AI Lead Vision.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Technology."
        description="Grouped by the work it supports: models, vision, robots and embedded software, and the applications around them."
      />
      <TechnologyStack />
      <section className="bg-paper">
        <div className="mx-auto flex max-w-[1160px] flex-wrap gap-x-6 gap-y-3 px-5 py-10 sm:px-8">
          <Link href="/solutions" className="text-sm font-medium text-ink">
            Solutions
          </Link>
          <Link href="/products" className="text-sm font-medium text-ink">
            Products
          </Link>
          <Link href="/projects" className="text-sm font-medium text-ink">
            Projects
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
