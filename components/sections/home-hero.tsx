import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SystemSchematic } from "@/components/visuals/system-schematic";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid grid-drift pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:pb-28 lg:pt-40">
        <div className="rise-in min-w-0 max-w-xl">
          <Eyebrow tone="dark">Artificial intelligence · Bengaluru</Eyebrow>
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] text-white sm:text-6xl lg:text-[4.25rem]">
            AI systems built for <span className="text-cyan">real</span> business.
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.cta.primary.href} className="h-12 w-full px-5 sm:w-auto">
              {siteConfig.cta.primary.label}
            </Button>
            <Button href={siteConfig.cta.secondary.href} variant="secondary" className="h-12 w-full px-5 sm:w-auto">
              {siteConfig.cta.secondary.label}
            </Button>
          </div>
          <dl className="mt-10 grid min-w-0 grid-cols-3 gap-3 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.12em] text-white/55 sm:gap-4 sm:tracking-[0.14em]">
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
        <div className="min-w-0 lg:pl-4">
          <SystemSchematic />
        </div>
      </Container>
    </section>
  );
}
