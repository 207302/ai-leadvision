import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/content/products";
import { siteConfig } from "@/lib/content/site";
import { FlowDiagram } from "@/components/products/flow-diagram";
import { ProductDemo } from "@/components/products/product-demo";

export function ProductShowcase({ product, index }: { product: Product; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <article id={product.id} className="scroll-mt-28 border-t border-line py-20 sm:py-24">
      <div className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "" : ""}`}>
        <div className={reversed ? "lg:order-2" : ""}>
          {product.demo ? (
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-faint">Demo</p>
              <div className="overflow-hidden rounded-xl border border-line">
                <ProductDemo src={product.demo} title={product.name} />
              </div>
            </div>
          ) : (
            <FlowDiagram steps={product.workflow} title={product.kicker} />
          )}
        </div>
        <div className={reversed ? "lg:order-1" : ""}>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {String(index + 1).padStart(2, "0")} · {product.kicker}
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">{product.name}</h2>
          <p className="mt-4 text-base text-accent">{product.positioning}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{product.summary}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Problem</h3>
          <p className="mt-3 text-sm leading-7 text-ink">{product.problem}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Solution</h3>
          <p className="mt-3 text-sm leading-7 text-ink">{product.solution}</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Capabilities</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {product.capabilities.map((item) => (
            <li key={item} className="border-t border-line pt-3 text-sm leading-6 text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-sm uppercase tracking-[0.16em] text-faint">Use cases</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{product.useCases.join(" · ")}</p>
        </div>
        <Link
          href={`${siteConfig.cta.demo.href}&product=${product.id}`}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink"
        >
          {siteConfig.cta.demo.label}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ProductCompact({ product }: { product: Product }) {
  return (
    <article id={product.id} className="scroll-mt-28 flex h-full flex-col overflow-hidden border border-line bg-white">
      {product.demo && (
        <div className="border-b border-line">
          <ProductDemo src={product.demo} title={product.name} />
        </div>
      )}
      <div className="flex h-full flex-col p-6">
      <p className="text-[11px] uppercase tracking-[0.16em] text-accent">{product.kicker}</p>
      <h3 className="mt-3 text-2xl leading-tight text-ink">{product.name}</h3>
      <p className="mt-2 text-sm text-accent">{product.positioning}</p>
      <p className="mt-4 text-sm leading-6 text-muted">{product.summary}</p>
      <ul className="mt-5 space-y-2">
        {product.capabilities.slice(0, 4).map((item) => (
          <li key={item} className="text-sm leading-6 text-ink">
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={`${siteConfig.cta.demo.href}&product=${product.id}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
      >
        {siteConfig.cta.demo.label}
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
      </div>
    </article>
  );
}
