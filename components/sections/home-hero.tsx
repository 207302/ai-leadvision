"use client";

import { homeHero } from "@/lib/content/home";
import { siteConfig } from "@/lib/content/site";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroGlow } from "@/components/visuals/hero-glow";
import { SystemSchematic } from "@/components/visuals/system-schematic";

const heroCtas = [
  { ...siteConfig.cta.explore, variant: "primary" as const },
  { ...siteConfig.cta.expert, variant: "secondary" as const },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid grid-drift pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <HeroGlow />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-10 pt-24 sm:px-10 sm:pb-12 sm:pt-28 lg:px-12">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <Eyebrow tone="dark">{homeHero.eyebrow}</Eyebrow>
            <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[3.25rem]">
              {homeHero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/80 sm:text-xl">{homeHero.subheadline}</p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-white/65">{homeHero.support}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroCtas.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  variant={item.variant}
                  tone="dark"
                  className="h-auto min-h-12 w-full whitespace-normal px-4 py-3 text-center sm:w-auto"
                  onClick={() =>
                    trackEvent("cta_click", { cta_label: item.label, cta_location: "home_hero" })
                  }
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[480px] shrink-0 lg:mx-0 lg:w-[480px]">
            <div className="rounded-2xl shadow-[0_0_80px_rgba(26,95,212,0.18)]">
              <SystemSchematic />
            </div>
          </div>
        </div>
        <dl className="mt-5 grid min-w-0 grid-cols-3 gap-8 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.14em] text-white/55 sm:mt-6 sm:gap-16">
          <div>
            <dt className="text-cyan">01</dt>
            <dd className="mt-1 text-white/70">Products</dd>
          </div>
          <div>
            <dt className="text-cyan">02</dt>
            <dd className="mt-1 text-white/70">Engineering</dd>
          </div>
          <div>
            <dt className="text-cyan">03</dt>
            <dd className="mt-1 text-white/70">Deployment</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
