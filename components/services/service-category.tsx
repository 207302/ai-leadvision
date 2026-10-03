import Link from "next/link";
import { getService, type ServiceCategory } from "@/lib/content/services";
import { siteConfig } from "@/lib/content/site";
import { GenerativeOfferingList } from "@/components/sections/generative-offerings";
import { ServiceBlock } from "@/components/services/service-block";

export function ServiceCategory({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const service = category.serviceId ? getService(category.serviceId) : undefined;

  return (
    <section id={category.id} className="scroll-mt-28 border-t border-line pt-12 mt-12">
      <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
      <h2 className="mt-3 text-3xl text-ink sm:text-4xl">{category.title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{category.summary}</p>

      {category.id === "generative-ai" && <GenerativeOfferingList />}

      {category.points && category.points.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {category.points.map((point) => (
            <li key={point} className="rounded-lg border border-line bg-white px-4 py-3 text-sm leading-6 text-ink">
              {point}
            </li>
          ))}
        </ul>
      )}

      {category.note && <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">{category.note}</p>}

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        {category.related && (
          <Link href={category.related.href} className="text-sm font-medium text-ink">
            {category.related.label}
          </Link>
        )}
        {!service && (
          <Link
            href={`/contact?requirement=consultation&interest=${category.interest}`}
            className="text-sm font-medium text-accent hover:text-accent-strong"
          >
            {siteConfig.cta.consultation.label}
          </Link>
        )}
      </div>

      {service && <ServiceBlock service={service} index={index} anchor={false} />}
    </section>
  );
}
