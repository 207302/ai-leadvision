import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { ServiceCategory } from "@/components/services/service-category";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { serviceCategories } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Engineering & Technology Services",
  description:
    "From proof of concept to production, AI Lead Vision designs and builds intelligent systems around real business requirements.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="AI Engineering & Technology Services."
        description="From proof of concept to production, we design and build intelligent systems around real business requirements."
      />
      <section className="bg-paper" aria-labelledby="solution-areas">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 id="solution-areas" className="mt-4 max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            What we can build for you.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Products already built are on{" "}
            <Link href="/products" className="font-medium text-ink">
              Products
            </Link>
            . Industries are on{" "}
            <Link href="/industries" className="font-medium text-ink">
              Industries
            </Link>
            .
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="flex h-full items-center rounded-xl border border-line bg-white px-4 py-4 text-ink transition-colors hover:border-accent/40"
                >
                  <span className="text-base leading-snug">{category.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            {serviceCategories.map((category, index) => (
              <ServiceCategory key={category.id} category={category} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCta
        title="Bring the operation, not a feature list."
        body="Describe the work that is slow, manual, or blind today. We will tell you which capability should lead."
      />
    </>
  );
}
