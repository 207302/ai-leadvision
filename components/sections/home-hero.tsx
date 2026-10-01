import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroGlow } from "@/components/visuals/hero-glow";
import { SystemSchematic } from "@/components/visuals/system-schematic";

const signals = [
  { label: "Attendance", detail: "Contactless check-in" },
  { label: "Conversation", detail: "Voice and chat" },
  { label: "Vision", detail: "Cameras that raise an alert" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid grid-drift pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <HeroGlow />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-12 pt-28 sm:px-10 sm:pb-14 sm:pt-32 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <Eyebrow tone="dark">Artificial intelligence · Bengaluru</Eyebrow>
            <h1 className="mt-3 max-w-4xl text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              AI systems built for <span className="text-cyan">real</span> business.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={siteConfig.cta.primary.href} className="h-12 w-full px-5 sm:w-auto">
                {siteConfig.cta.primary.label}
              </Button>
              <Button href={siteConfig.cta.secondary.href} variant="secondary" className="h-12 w-full px-5 sm:w-auto">
                {siteConfig.cta.secondary.label}
              </Button>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {signals.map((item) => (
                <li
                  key={item.label}
                  className="enter-box rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_0_24px_rgba(26,95,212,0.12)]"
                >
                  <p className="text-sm text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/55">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[520px] shrink-0 lg:mx-0 lg:w-[520px]">
            <div className="rounded-2xl shadow-[0_0_80px_rgba(26,95,212,0.18)]">
              <SystemSchematic />
            </div>
          </div>
        </div>
        <dl className="mt-6 grid min-w-0 grid-cols-3 gap-8 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.14em] text-white/55 sm:mt-8 sm:gap-16">
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
