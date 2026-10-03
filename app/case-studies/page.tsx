import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { caseStudiesIntro, caseStudyTemplates } from "@/lib/content/case-studies";
import { pageMetadata } from "@/lib/seo";

const stages = ["Client Problem", "AI Solution", "Technology", "Implementation"] as const;

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Case study outlines for an AI attendance system, machine vision inspection, robotics, and predictive analytics. Client names stay unpublished until confirmed.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow={caseStudiesIntro.eyebrow}
        title={caseStudiesIntro.title}
        description={caseStudiesIntro.description}
        trace={[...stages]}
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <p className="max-w-3xl text-base leading-7 text-muted">{caseStudiesIntro.note}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{caseStudiesIntro.stackNote}</p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2">
            {caseStudyTemplates.map((study, index) => (
              <li key={study.id}>
                <Link
                  href={`#${study.id}`}
                  className="flex h-full items-baseline gap-3 rounded-xl border border-line bg-white px-4 py-4 text-ink transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-base leading-snug">{study.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <div className="bg-white">
        <Container className="pb-8">
          {caseStudyTemplates.map((study, index) => (
            <article key={study.id} id={study.id} className="scroll-mt-28 border-t border-line py-16 sm:py-20">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-accent">{caseStudiesIntro.label}</p>
                  <h2 className="mt-3 text-3xl leading-tight text-ink">{study.title}</h2>
                  <p className="mt-4 text-sm text-muted">Client: {study.client}</p>
                  {study.related && (
                    <Link href={study.related.href} className="mt-6 inline-flex text-sm font-medium text-ink">
                      {study.related.label}
                    </Link>
                  )}
                </div>
                <ol className="space-y-8 lg:col-span-8">
                  <li>
                    <h3 className="text-[11px] uppercase tracking-[0.16em] text-accent">Client Problem</h3>
                    <p className="mt-2 text-sm leading-7 text-ink">{study.problem}</p>
                  </li>
                  <li>
                    <h3 className="text-[11px] uppercase tracking-[0.16em] text-accent">AI Solution</h3>
                    <p className="mt-2 text-sm leading-7 text-ink">{study.solution}</p>
                  </li>
                  <li>
                    <h3 className="text-[11px] uppercase tracking-[0.16em] text-accent">Technology</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {study.technology.map((item) => (
                        <li key={item} className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-[11px] uppercase tracking-[0.16em] text-accent">Implementation</h3>
                    <p className="mt-2 text-sm leading-7 text-ink">{study.implementation}</p>
                  </li>
                </ol>
              </div>
            </article>
          ))}
        </Container>
      </div>
      <FinalCta
        title="Have a project to talk through?"
        body="Tell us the operation. Client names on this page stay unpublished until confirmed."
      />
    </>
  );
}
