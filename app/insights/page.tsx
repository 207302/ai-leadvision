import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { insights, insightsPage } from "@/lib/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description: insightsPage.description,
  path: insightsPage.path,
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow={insightsPage.eyebrow}
        title={insightsPage.title}
        description="Draft topics. These are not published articles yet."
      />
      <section className="bg-paper" aria-labelledby="insight-list">
        <Container className="py-16 sm:py-20">
          <h2 id="insight-list" className="max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            Topics
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {insights.map((item) => (
              <li key={item.slug}>
                <article className="enter-box flex h-full flex-col rounded-xl border border-line bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accent">Draft</p>
                  <h3 className="mt-3 text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                  >
                    Read draft
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
