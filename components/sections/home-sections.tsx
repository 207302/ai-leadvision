import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  companyHighlight,
  homeContact,
  homeIndustries,
  homeSolutions,
  whatWeDo,
  whyAiLeadVision,
} from "@/lib/content/home";
import { featuredProjects } from "@/lib/content/projects";
import { IndustryCard } from "@/components/sections/industry-card";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function WhatWeDo() {
  return (
    <section className="bg-paper" aria-labelledby="what-we-do">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 id="what-we-do" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            See. Think. Act.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {whatWeDo.map((item) => (
            <article key={item.title} className="enter-box rounded-xl border border-line bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">{item.kicker}</p>
              <h3 className="mt-3 text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              <Link href={item.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                View
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeSolutions() {
  return (
    <section className="bg-white" aria-labelledby="ai-solutions">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>AI Solutions</Eyebrow>
            <h2 id="ai-solutions" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
              What we can build.
            </h2>
          </div>
          <Link href="/solutions" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink">
            All solutions
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeSolutions.map((item) => (
            <article key={item.title} className="enter-box rounded-xl border border-line bg-paper p-6">
              <h3 className="text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              <Link href={item.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Explore
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeIndustries() {
  return (
    <section className="bg-paper" aria-labelledby="home-industries">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Industries</Eyebrow>
            <h2 id="home-industries" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
              Where the systems run.
            </h2>
          </div>
          <Link href="/industries" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink">
            All industries
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeIndustries.map((industry, index) => (
            <li key={industry.id}>
              <IndustryCard industry={industry} index={index} href={industry.href} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SelectedProjects() {
  return (
    <section className="bg-white" aria-labelledby="selected-projects">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Selected projects</Eyebrow>
            <h2 id="selected-projects" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
              Systems already built.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Client names and measured results stay unpublished until they are confirmed.
            </p>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <article className="enter-box flex h-full flex-col rounded-xl border border-line bg-paper p-6">
                <div className="flex h-28 items-center justify-center rounded-lg border border-dashed border-line bg-white px-4 text-center text-xs leading-5 text-muted">
                  {project.imageNote}
                </div>
                <h3 className="mt-5 text-xl text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{project.outcome}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="bg-paper" aria-labelledby="why-ai-lead-vision">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why AI Lead Vision</Eyebrow>
          <h2 id="why-ai-lead-vision" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            Why AI Lead Vision
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyAiLeadVision.map((item) => (
            <article key={item.title} className="rounded-xl border border-line bg-white p-6">
              <h3 className="text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CompanyHighlight() {
  return (
    <section className="bg-white" aria-labelledby="company-highlight">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Company</Eyebrow>
          <h2 id="company-highlight" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            {companyHighlight.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{companyHighlight.text}</p>
          <Link
            href={companyHighlight.href}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            {companyHighlight.link}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export function HomeContact() {
  return <FinalCta title={homeContact.title} body={homeContact.body} />;
}
