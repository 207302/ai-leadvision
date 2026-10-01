import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/accordion";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AI Lead Vision",
  description:
    "Answers for teams evaluating AI Lead Vision: what we build, custom work, integrations, demos, and how a project starts.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | AI Lead Vision",
    description: "Practical answers before a first conversation.",
    url: "/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AI Lead Vision",
    description: "Practical answers before a first conversation.",
  },
};

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
