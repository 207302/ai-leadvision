import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ProductSection } from "@/components/products/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { productCards, products } from "@/lib/content/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Products Built for the Real World",
  description:
    "Ready-to-deploy intelligent systems from AI Lead Vision: attendance, voice, chat, vision, inspection, robotics, and analytics.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="AI Products Built for the Real World."
        description="Ready-to-deploy intelligent systems designed for specific business and operational problems."
      />
      <section className="bg-paper" aria-labelledby="product-cards">
        <Container className="py-16 sm:py-20">
          <h2 id="product-cards" className="max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            What AI Lead Vision has already built.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            These are products. Custom work sits on{" "}
            <Link href="/solutions" className="font-medium text-ink">
              Solutions
            </Link>
            .
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {productCards.map((card) => (
              <li key={card.id}>
                <article className="enter-box flex h-full flex-col rounded-xl border border-line bg-white p-6">
                  <h3 className="text-xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.line}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    View Product
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col gap-8">
            {products.map((product, index) => (
              <ProductSection key={product.id} product={product} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCta
        title="See a product against your operation."
        body="Tell us the site, the channel, or the line. We will show you which system fits, and what would have to be built around it."
      />
    </>
  );
}
