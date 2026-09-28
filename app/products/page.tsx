import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ProductCompact, ProductShowcase } from "@/components/products/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { products } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "AI Products | AI Lead Vision",
  description:
    "AI-powered products for attendance, voice, chat, computer vision, inspection, industrial automation, analytics, and educational robotics.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "AI Products | AI Lead Vision",
    description:
      "AI-powered solutions for smart businesses — built for real outcomes, not demos.",
    url: "/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Products | AI Lead Vision",
    description: "AI-powered solutions for smart businesses.",
  },
};

export default function ProductsPage() {
  const featured = products.filter((product) => product.featured);
  const additional = products.filter((product) => !product.featured);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="AI-powered solutions for smart businesses."
        description="Intelligent products that combine artificial intelligence, machine learning, computer vision, and automation — built for real business outcomes, not demos."
        trace={["Attendance", "Voice", "Chat", "Vision"]}
      />
      <section className="bg-paper">
        <Container>
          {featured.map((product, index) => (
            <ProductShowcase key={product.id} product={product} index={index} />
          ))}
        </Container>
      </section>
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <h2 className="text-3xl text-ink sm:text-4xl">More systems in the portfolio.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Educational robotics, factory automation, in-line inspection, and predictive analytics sit alongside the four product lines above.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {additional.map((product) => (
              <ProductCompact key={product.id} product={product} />
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
