import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { getInsight, insights } from "@/lib/content/insights";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <PageHero eyebrow="Draft" title={insight.title} description={insight.summary} />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <p className="text-base leading-7 text-muted">
            TODO: confirm with client — this page is a placeholder. The article has not been written.
          </p>
          <Link href="/insights" className="mt-8 inline-flex text-sm font-medium text-ink">
            All insights
          </Link>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
