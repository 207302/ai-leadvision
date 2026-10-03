import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ProductSection } from "@/components/products/product-showcase";
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
      <section className="bg-paper">
        <Container className="flex flex-col gap-8 py-16 sm:py-20">
          {products.map((product, index) => (
            <ProductSection key={product.id} product={product} index={index} />
          ))}
        </Container>
      </section>
      <FinalCta
        title="See a product against your operation."
        body="Tell us the site, the channel, or the line. We will show you which system fits, and what would have to be built around it."
      />
    </>
  );
}
