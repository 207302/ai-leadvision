import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { IndustryCard } from "@/components/sections/industry-card";
import { Container } from "@/components/ui/container";
import { industriesPage, moreIndustries, primaryIndustries } from "@/lib/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description: industriesPage.description,
  path: industriesPage.path,
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        description={industriesPage.description}
      />
      <section className="bg-paper" aria-labelledby="industry-list">
        <Container className="py-16 sm:py-20">
          <h2 id="industry-list" className="max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            Primary industries.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Related work is on{" "}
            <Link href="/solutions" className="font-medium text-ink">
              Solutions
            </Link>
            {" "}and{" "}
            <Link href="/products" className="font-medium text-ink">
              Products
            </Link>
            .
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primaryIndustries.map((industry, index) => (
              <li key={industry.id} id={industry.id} className="scroll-mt-28">
                <IndustryCard industry={industry} index={index} href={industry.href} />
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <a href="#more-industries" className="text-sm font-medium text-ink">
              View all
            </a>
          </p>
          <h2 id="more-industries" className="mt-16 scroll-mt-28 text-3xl text-ink">
            More industries
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreIndustries.map((industry, index) => (
              <li key={industry.id} id={industry.id} className="scroll-mt-28">
                <IndustryCard industry={industry} index={index} href={industry.href} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <FinalCta
        title="If your industry is listed, start with the operation."
        body="Tell us the check, the conversation, the inspection, or the decision you want to change."
      />
    </>
  );
}
