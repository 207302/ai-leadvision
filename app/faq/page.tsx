import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/accordion";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { faqs } from "@/lib/content/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Buyer questions about custom AI, integration, edge deployment, computer vision, ROS2, proof of concept, support, and training at AI Lead Vision.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Short answers for a team deciding whether to talk. If yours is not here, send it from the contact page."
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <FaqAccordion items={faqs} />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
