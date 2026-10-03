import { homeHero } from "@/lib/content/home";
import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroGlow } from "@/components/visuals/hero-glow";
import { SystemSchematic } from "@/components/visuals/system-schematic";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid grid-drift pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <HeroGlow />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,440px)] lg:gap-14">
          <div className="min-w-0">
            <Eyebrow tone="dark">{homeHero.eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[3.25rem]">
              {homeHero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {homeHero.support}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/65">
              {homeHero.audience}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={siteConfig.cta.primary.href} className="h-12 w-full px-5 sm:w-auto">
                {siteConfig.cta.primary.label}
              </Button>
              <Button href={siteConfig.cta.secondary.href} variant="secondary" className="h-12 w-full px-5 sm:w-auto">
                {siteConfig.cta.secondary.label}
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[440px] shrink-0 lg:mx-0">
            <div className="rounded-2xl shadow-[0_0_80px_rgba(26,95,212,0.18)]">
              <SystemSchematic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
