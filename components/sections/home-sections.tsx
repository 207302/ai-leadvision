import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  homeContact,
  howItWorks,
  whatWeBuild,
  whoWeServe,
  whyAiLeadVision,
} from "@/lib/content/home";
import { outcomes } from "@/lib/content/services";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/sections/final-cta";

export function WhatWeBuild() {
  return (
    <section className="bg-paper" aria-labelledby="what-we-build">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we build</Eyebrow>
          <h2 id="what-we-build" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            Five kinds of systems.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Enterprise AI, industrial automation, computer vision, robotics, and custom software development.
          </p>
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {whatWeBuild.map((item, index) => (
            <article key={item.title} className="grid gap-3 py-7 md:grid-cols-12 md:items-start md:gap-8">
              <p className="font-mono text-[11px] text-accent md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl text-ink md:col-span-4">{item.title}</h3>
              <p className="text-sm leading-6 text-muted md:col-span-5">{item.text}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink md:col-span-2 md:justify-end"
              >
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

export function WhoWeServe() {
  return (
    <section className="bg-white" aria-labelledby="who-we-serve">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 id="who-we-serve" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            Enterprises, industries, educational institutions, and businesses.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {whoWeServe.map((item) => (
            <article key={item.title} className="enter-box rounded-xl border border-line bg-paper p-6">
              <h3 className="text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-navy text-white" aria-labelledby="how-it-works">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">How it works</Eyebrow>
          <h2 id="how-it-works" className="mt-4 text-3xl leading-tight sm:text-5xl">
            From the operation to a system in use.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <li key={item.title}>
              <p className="font-mono text-[11px] text-cyan">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl leading-snug text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="bg-paper" aria-labelledby="why-ai-lead-vision">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Evidence</Eyebrow>
          <h2 id="why-ai-lead-vision" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            Why AI Lead Vision
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Experience, the work we take on, and where the company is based. Figures in brackets are placeholders until confirmed.
          </p>
        </Reveal>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {whyAiLeadVision.map((item) => (
            <div key={item.title} className="bg-white p-6">
              <dt className="font-heading text-2xl leading-tight text-ink">{item.value}</dt>
              <dd className="mt-3 text-sm leading-6 text-muted">
                <span className="block font-medium text-ink">{item.title}</span>
                {item.text}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
          Case studies will be published when client names and results are confirmed.{" "}
          <Link href="/case-studies" className="font-medium text-ink">
            Case Studies
          </Link>
        </p>
      </Container>
    </section>
  );
}

export function BusinessOutcome() {
  return (
    <section className="bg-white" aria-labelledby="business-outcome">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Business outcome</Eyebrow>
          <h2 id="business-outcome" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            Technology should solve a business problem.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, index) => (
            <div key={item.title}>
              <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeContact() {
  return <FinalCta title={homeContact.title} body={homeContact.body} />;
}
