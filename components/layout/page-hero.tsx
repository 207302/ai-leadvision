import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHero({
  eyebrow,
  title,
  description,
  trace,
}: {
  eyebrow: string;
  title: string;
  description: string;
  trace?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container
        className={`relative items-end gap-12 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40 ${
          trace && trace.length > 0 ? "grid lg:grid-cols-[1.3fr_0.7fr]" : ""
        }`}
      >
        <div>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">{description}</p>
        </div>
        {trace && trace.length > 0 && (
          <ol className="border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-8">
            {trace.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-4 border-b border-white/10 py-3 last:border-b-0"
              >
                <span className="font-mono text-[11px] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm tracking-tight text-white/80">{item}</span>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
