import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AI Lead Vision",
  description: "Frequently asked questions for teams evaluating AI Lead Vision.",
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
        description="A place for the questions a team asks before a first conversation."
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
