import Link from "next/link";
import type { Service } from "@/lib/content/services";

export function ServiceBlock({ service, index }: { service: Service; index: number }) {
  return (
    <article id={service.id} className="scroll-mt-28 border-t border-line py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">{service.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted">{service.summary}</p>
        </div>
        <div className="space-y-10 lg:col-span-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Problem</h3>
              <p className="mt-3 text-sm leading-7 text-ink">{service.problem}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Approach</h3>
              <p className="mt-3 text-sm leading-7 text-ink">{service.approach}</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Capabilities</h3>
              <ul className="mt-3 space-y-2">
                {service.capabilities.map((item) => (
                  <li key={item} className="text-sm leading-6 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Deliverables</h3>
              <ul className="mt-3 space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-sm leading-6 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Use cases</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{service.useCases.join(" · ")}</p>
            </div>
            <Link
              href={`/contact?interest=${service.interest}`}
              className="inline-flex shrink-0 text-sm font-medium text-accent hover:text-accent-strong"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
