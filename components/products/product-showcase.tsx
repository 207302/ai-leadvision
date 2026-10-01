import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/content/products";
import { siteConfig } from "@/lib/content/site";
import { FlowDiagram } from "@/components/products/flow-diagram";
import { ProductDemo } from "@/components/products/product-demo";
import { DetailGroup } from "@/components/ui/detail-group";

export function ProductSection({ product, index }: { product: Product; index: number }) {
  const glow =
    index % 2 === 0
      ? "bg-[radial-gradient(ellipse_at_top_right,rgba(26,95,212,0.16),transparent_52%)]"
      : "bg-[radial-gradient(ellipse_at_top_left,rgba(143,216,234,0.22),transparent_48%)]";

  return (
    <article
      id={product.id}
      className="relative scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className={`pointer-events-none absolute inset-0 ${glow}`} aria-hidden="true" />
      <div className="relative grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          {product.demo ? (
            <div className="overflow-hidden rounded-xl border border-line shadow-[0_0_40px_rgba(26,95,212,0.12)]">
              <ProductDemo src={product.demo} title={product.name} />
            </div>
          ) : (
            <FlowDiagram steps={product.workflow} title={product.kicker} />
          )}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent">{product.kicker}</p>
          <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">{product.name}</h2>
          <p className="mt-4 text-base text-accent">{product.positioning}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{product.summary}</p>
          <Link
            href={`${siteConfig.cta.demo.href}&product=${product.id}`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            {siteConfig.cta.demo.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="relative border-t border-line/80 px-5 py-5 sm:px-8 lg:px-10">
        <DetailGroup
          items={[
            { title: "Problem", body: product.problem },
            { title: "Solution", body: product.solution },
            { title: "Capabilities", list: product.capabilities },
            { title: "Use cases", list: product.useCases },
          ]}
        />
      </div>
    </article>
  );
}
