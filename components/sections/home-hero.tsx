import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SystemSchematic } from "@/components/visuals/system-schematic";

const signals = [
  { label: "Attendance", detail: "Contactless check-in" },
  { label: "Conversation", detail: "Voice and chat" },
  { label: "Vision", detail: "Cameras that raise an alert" },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-white">
      <div className="tech-grid grid-drift pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-1 flex-col justify-center pb-10 pt-28 sm:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="min-w-0">
            <Eyebrow tone="dark">Artificial intelligence · Bengaluru</Eyebrow>
            <h1 className="mt-5 max-w-xl text-[2.7rem] leading-[1.02] text-white sm:text-6xl lg:text-[4.4rem]">
              AI systems built for <span className="text-cyan">real</span> business.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/72 sm:text-lg">
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
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {signals.map((item) => (
                <li
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_0_24px_rgba(26,95,212,0.12)]"
                >
                  <p className="text-sm text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/55">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 lg:pl-2">
            <div className="rounded-2xl shadow-[0_0_80px_rgba(26,95,212,0.18)]">
              <SystemSchematic />
            </div>
          </div>
        </div>
        <dl className="mt-10 grid min-w-0 grid-cols-3 gap-3 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.12em] text-white/55 sm:mt-14 sm:tracking-[0.14em]">
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
      </Container>
    </section>
  );
}
