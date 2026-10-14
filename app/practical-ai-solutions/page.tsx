import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, Eye, Lightbulb, MessageCircle, Rocket, Workflow, type LucideIcon } from "lucide-react";
import { CallbackForm } from "@/components/marketing/callback-form";
import { PracticalHero } from "@/components/marketing/practical-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { consultationSectionId, practicalAiPage } from "@/lib/content/practical-ai";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: practicalAiPage.metaTitle,
  description: practicalAiPage.metaDescription,
  path: practicalAiPage.path,
});

const cardIcons: Record<(typeof practicalAiPage.cards)[number]["icon"], LucideIcon> = {
  automation: Workflow,
  vision: Eye,
  robotics: Bot,
};

const stepIcons: Record<(typeof practicalAiPage.steps)[number]["icon"], LucideIcon> = {
  discuss: MessageCircle,
  build: Lightbulb,
  deploy: Rocket,
};

export default function PracticalAiPage() {
  return (
    <>
      <PracticalHero />
      <section className="bg-paper" aria-labelledby="practical-solutions">
        <Container className="-mt-16 pb-16 sm:pb-20">
          <h2 id="practical-solutions" className="sr-only">
            Solutions
          </h2>
          <ul className="grid gap-4 lg:grid-cols-3">
            {practicalAiPage.cards.map((card) => {
              const Icon = cardIcons[card.icon];
              return (
                <li key={card.title}>
                  <Link
                    href={card.href}
                    className="enter-box flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-accent/40"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl text-ink">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">{card.text}</p>
                    <ArrowUpRight className="mt-5 text-ink" size={18} aria-hidden="true" />
                    <span className="sr-only">Open {card.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-white" aria-labelledby="idea-to-deployment">
        <Container className="py-16 sm:py-20">
          <h2 id="idea-to-deployment" className="text-center text-3xl text-accent sm:text-4xl">
            {practicalAiPage.stepsTitle}
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {practicalAiPage.steps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              return (
                <li key={step.title} className="enter-box relative">
                  {index < practicalAiPage.steps.length - 1 && (
                    <span
                      className="absolute left-[4.5rem] top-5 hidden h-px w-[calc(100%-3rem)] bg-line md:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-medium text-white">
                      {index + 1}
                    </span>
                    <Icon className="text-accent" size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section id={consultationSectionId} className="scroll-mt-28 bg-paper" aria-labelledby="consultation-heading">
        <Container className="py-16 sm:py-20">
          <div className="enter-box rounded-2xl border border-accent/15 bg-accent/[0.04] px-5 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
              <div>
                <Eyebrow>{practicalAiPage.form.eyebrow}</Eyebrow>
                <h2 id="consultation-heading" className="mt-3 text-3xl text-ink sm:text-4xl">
                  {practicalAiPage.form.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:text-base">{practicalAiPage.form.body}</p>
              </div>
              <CallbackForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
