import { automotiveEngineering } from "@/lib/content/automotive";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AutomotiveEngineering() {
  return (
    <section
      id={automotiveEngineering.id}
      className="scroll-mt-28 bg-white"
      aria-labelledby="automotive-engineering-title"
    >
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <Eyebrow>{automotiveEngineering.eyebrow}</Eyebrow>
          <h2 id="automotive-engineering-title" className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            {automotiveEngineering.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{automotiveEngineering.support}</p>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {automotiveEngineering.items.map((item, index) => (
            <li key={item} className="flex items-baseline gap-3 bg-paper px-5 py-5">
              <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-base text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
