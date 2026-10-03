import Link from "next/link";
import type { Service } from "@/lib/content/services";
import { siteConfig } from "@/lib/content/site";
import { DetailGroup } from "@/components/ui/detail-group";

export function ServiceBlock({
  service,
  index,
  anchor = true,
}: {
  service: Service;
  index: number;
  anchor?: boolean;
}) {
  const glow =
    index % 2 === 0
      ? "bg-[radial-gradient(ellipse_at_top_right,rgba(26,95,212,0.14),transparent_55%)]"
      : "bg-[radial-gradient(ellipse_at_bottom_left,rgba(143,216,234,0.2),transparent_50%)]";

  return (
    <article
      id={anchor ? service.id : undefined}
      className="enter-box relative mt-8 overflow-hidden rounded-2xl border border-line bg-white first:mt-0"
    >
      <div className={`pointer-events-none absolute inset-0 ${glow}`} aria-hidden="true" />
      <div className="relative p-6 sm:p-8 lg:p-10">
        <h2 className="text-3xl text-ink sm:text-4xl">{service.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{service.summary}</p>
        <div className="mt-8">
          <DetailGroup
            items={[
              { title: "Problem", body: service.problem },
              { title: "Approach", body: service.approach },
              { title: "Capabilities", list: service.capabilities },
              { title: "Deliverables", list: service.deliverables },
              { title: "Use cases", list: service.useCases },
            ]}
          />
        </div>
        <Link
          href={`/contact?requirement=consultation&interest=${service.interest}`}
          className="mt-6 inline-flex text-sm font-medium text-accent hover:text-accent-strong"
        >
          {siteConfig.cta.consultation.label}
        </Link>
      </div>
    </article>
  );
}
