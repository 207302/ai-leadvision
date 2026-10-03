import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { IndustryCard } from "@/components/sections/industry-card";
import { Container } from "@/components/ui/container";
import { industries, industriesPage } from "@/lib/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industrial AI Solutions",
  description:
    "Industrial AI solutions for automotive, manufacturing, healthcare, logistics, and other sectors. AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India.",
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
          <h2 id="industry-list" className="sr-only">
            Industries we serve
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <li key={industry.id} id={industry.id} className="scroll-mt-28">
                <IndustryCard industry={industry} index={index} />
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
