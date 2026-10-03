import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { ProductSection } from "@/components/products/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { productGroups, productsInGroup } from "@/lib/content/product-pages";

export const metadata: Metadata = {
  title: "AI Products | AI Lead Vision",
  description:
    "AI-powered products for attendance, voice, chat, computer vision, inspection, industrial automation, analytics, and educational robotics.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "AI Products | AI Lead Vision",
    description:
      "AI-powered products for attendance, voice, chat, computer vision, inspection, industrial automation, analytics, and educational robotics.",
    url: "/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Products | AI Lead Vision",
    description: "AI-powered solutions for smart businesses.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="AI-powered solutions for smart businesses."
        description="Intelligent products that combine artificial intelligence, machine learning, computer vision, and automation."
      />
      <section className="bg-paper" aria-labelledby="product-groups">
        <Container className="py-16 sm:py-20">
          <h2 id="product-groups" className="max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            Four product groups.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            The same products, grouped as ready products, custom AI solutions, industrial solutions, and research.
          </p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2">
            {productGroups.map((group, index) => (
              <li key={group.id}>
                <Link
                  href={`#${group.id}`}
                  className="flex h-full items-baseline gap-3 rounded-xl border border-line bg-white px-4 py-4 text-ink transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-snug">{group.title}</span>
                </Link>
              </li>
            ))}
          </ol>

          {productGroups.map((group) => {
            const items = productsInGroup(group.productIds);
            return (
              <section key={group.id} id={group.id} className="mt-16 scroll-mt-28">
                <h2 className="text-3xl text-ink sm:text-4xl">{group.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{group.description}</p>
                {items.length === 0 ? (
                  <p className="mt-6 rounded-xl border border-dashed border-accent/35 bg-white px-5 py-6 text-sm leading-7 text-muted">
                    {group.empty}
                  </p>
                ) : (
                  <div className="mt-8 flex flex-col gap-8">
                    {items.map((product, index) => (
                      <ProductSection key={product.id} product={product} index={index} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </Container>
      </section>
      <FinalCta
        title="See a product against your operation."
        body="Tell us the site, the channel, or the line. We will show you which system fits, and what would have to be built around it."
      />
    </>
  );
}
