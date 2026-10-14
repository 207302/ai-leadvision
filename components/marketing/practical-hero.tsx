"use client";

import { ArrowRight } from "lucide-react";
import { InsightPanel } from "@/components/marketing/insight-panel";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { scrollToConsultation } from "@/lib/callback/scroll";
import { practicalAiPage } from "@/lib/content/practical-ai";
import { trackEvent } from "@/lib/analytics";

export function PracticalHero() {
  function book() {
    trackEvent("cta_click", { cta_label: practicalAiPage.bookLabel, cta_location: "practical_hero" });
    scrollToConsultation();
  }

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-10 pb-28 pt-32 sm:pt-36 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:pb-32">
        <div className="min-w-0">
          <Eyebrow tone="dark">{practicalAiPage.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            <span className="text-cyan">{practicalAiPage.titleLead}</span> {practicalAiPage.titleRest}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">{practicalAiPage.summary}</p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <Button onClick={book} className="h-auto min-h-12 w-full px-4 py-3 sm:w-auto">
              {practicalAiPage.bookLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Button
                href={practicalAiPage.exploreSolutions.href}
                variant="ghost"
                tone="dark"
                className="min-h-12"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_label: practicalAiPage.exploreSolutions.label,
                    cta_location: "practical_hero",
                  })
                }
              >
                {practicalAiPage.exploreSolutions.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button
                href={practicalAiPage.exploreProducts.href}
                variant="ghost"
                tone="dark"
                className="min-h-12"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_label: practicalAiPage.exploreProducts.label,
                    cta_location: "practical_hero",
                  })
                }
              >
                {practicalAiPage.exploreProducts.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm text-cyan sm:text-base">{practicalAiPage.visualCaption}</p>
          <InsightPanel />
        </div>
      </Container>
    </section>
  );
}
