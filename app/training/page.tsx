import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { trainingPage, trainingPractice } from "@/lib/content/training";
import { siteConfig } from "@/lib/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Training",
  description: trainingPage.description,
  path: trainingPage.path,
});

export default function TrainingPage() {
  return (
    <>
      <PageHero eyebrow={trainingPage.eyebrow} title={trainingPage.title} description={trainingPage.description} />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <p className="max-w-3xl text-base leading-7 text-muted">{trainingPractice}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${siteConfig.emails.hr}`} className="text-sm font-medium text-accent">
              {siteConfig.emails.hr}
            </a>
            <Link href="/careers" className="text-sm font-medium text-accent">
              Careers
            </Link>
            <Link href="/contact?build=training" className="text-sm font-medium text-ink">
              Discuss training
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-paper" aria-labelledby="training-programmes">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Topics</Eyebrow>
          <h2 id="training-programmes" className="mt-4 max-w-2xl text-3xl leading-tight text-ink sm:text-4xl">
            Training topics.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingPage.programmes.map((programme) => (
              <article key={programme.id} id={programme.id} className="scroll-mt-28 rounded-xl border border-line bg-white p-6">
                <h3 className="text-xl text-ink">{programme.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{programme.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta
        title="Ask about a training programme."
        body="Write to the HR address with the topic, the audience, and the dates you have in mind."
      />
    </>
  );
}
