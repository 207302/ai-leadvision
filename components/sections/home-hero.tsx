import { homeHero } from "@/lib/content/home";
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
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-10 pt-24 sm:px-10 sm:pb-12 sm:pt-28 lg:px-12">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <Eyebrow tone="dark">{homeHero.eyebrow}</Eyebrow>
            <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[3.25rem]">
              {homeHero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/80 sm:text-xl">
              {homeHero.support}
            </p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-white/65">
              {homeHero.audience}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={siteConfig.cta.primary.href} className="h-12 w-full px-5 sm:w-auto">
                {siteConfig.cta.primary.label}
              </Button>
              <Button href={siteConfig.cta.secondary.href} variant="secondary" className="h-12 w-full px-5 sm:w-auto">
                {siteConfig.cta.secondary.label}
              </Button>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {signals.map((item) => (
                <li
                  key={item.label}
                  className="enter-box rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 shadow-[0_0_24px_rgba(26,95,212,0.12)]"
                >
                  <p className="text-sm text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/55">{item.detail}</p>
                </li>
              ))}
            </ul>
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
