import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { technologyStack } from "@/lib/content/technology-stack";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function TechnologyStack({ showPageLink = false }: { showPageLink?: boolean }) {
  return (
    <section id="technology-stack" className="scroll-mt-28 bg-navy text-white" aria-labelledby="technology-stack-title">
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">{technologyStack.eyebrow}</Eyebrow>
            <h2 id="technology-stack-title" className="mt-4 text-3xl leading-tight sm:text-5xl">
              {technologyStack.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">{technologyStack.support}</p>
          </div>
          {showPageLink && (
            <Link href="/technology" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-white">
              Technology page
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {technologyStack.groups.map((group) => (
            <article key={group.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cyan/40 px-3 py-1 text-xs tracking-tight text-cyan"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
