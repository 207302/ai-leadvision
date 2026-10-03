import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { ServiceCategory } from "@/components/services/service-category";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { serviceCategories } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "AI Development Services | AI Lead Vision",
  description:
    "Robotics, machine learning, and software development for intelligent operations — scoped as engineering work, not a catalogue of slogans. Twelve service categories, from AI and computer vision to generative AI, industrial AI, analytics, integration, and training.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Development Services | AI Lead Vision",
    description:
      "Robotics, machine learning, and software development for systems that have to run. Twelve service categories sit alongside those write-ups.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Services | AI Lead Vision",
    description: "Robotics, machine learning, and software development.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering services for intelligent operations."
        description="Robotics, machine learning, and software development. Each engagement starts from the problem, then the system required to change it."
      />
      <section className="bg-paper" aria-labelledby="service-categories">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Service categories</Eyebrow>
          <h2 id="service-categories" className="mt-4 max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            Twelve service categories.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Robotics, machine learning, and software development stay on this page, under the matching category.
          </p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="flex h-full items-baseline gap-3 rounded-xl border border-line bg-white px-4 py-4 text-ink transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-snug">{category.title}</span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            {serviceCategories.map((category, index) => (
              <ServiceCategory key={category.id} category={category} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCta
        title="Bring the operation, not a feature list."
        body="Describe the work that is slow, manual, or blind today. We will tell you which discipline — robotics, machine learning, or software — should lead."
      />
    </>
  );
}
