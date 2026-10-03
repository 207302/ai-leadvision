import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { ProductSection } from "@/components/products/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { educationalFocus, industrialFocus, roboticsPage } from "@/lib/content/product-pages";
import { getProduct } from "@/lib/content/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Robotics Company Bangalore",
  description:
    "Educational and industrial robotics from AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India, including machine vision and factory automation.",
  path: roboticsPage.path,
});

export default function RoboticsPage() {
  const educational = getProduct("educational-robot");
  const industrial = getProduct("industrial-automation");
  const inspection = getProduct("machine-vision");
  if (!educational || !industrial || !inspection) notFound();

  return (
    <>
      <PageHero
        eyebrow={roboticsPage.eyebrow}
        title={roboticsPage.title}
        description={roboticsPage.description}
      />
      <section className="bg-paper">
        <Container className="flex flex-col gap-20 py-16 sm:py-20">
          <section id="educational-robotics" className="scroll-mt-28" aria-labelledby="educational-heading">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">01</p>
            <h2 id="educational-heading" className="mt-3 text-3xl text-ink sm:text-5xl">
              Educational Robotics
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              The lab robot for schools, engineering colleges, and STEM. This section is separate from factory automation.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {educationalFocus.map((item) => (
                <li key={item.title} className="rounded-xl border border-line bg-white px-4 py-4">
                  <h3 className="text-base text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ProductSection product={educational} index={0} />
            </div>
          </section>

          <section id="industrial-robotics" className="scroll-mt-28" aria-labelledby="industrial-heading">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">02</p>
            <h2 id="industrial-heading" className="mt-3 text-3xl text-ink sm:text-5xl">
              Industrial Robotics / Automation
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Machine vision, PLC integration, robot integration, factory automation, production monitoring, and inspection. This section is separate from the educational robot.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {industrialFocus.map((item) => (
                <li key={item.title} className="rounded-xl border border-line bg-white px-4 py-4">
                  <h3 className="text-base text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-8">
              <ProductSection product={industrial} index={1} />
              <ProductSection product={inspection} index={0} />
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
              Camera events such as PPE, fire and smoke, and number plates are on the{" "}
              <Link href="/products/computer-vision" className="font-medium text-ink">
                computer vision page
              </Link>
              .
            </p>
          </section>
        </Container>
      </section>
      <FinalCta
        title="Say whether this is a lab or a line."
        body="Educational robotics and industrial automation are scoped separately. Tell us which one you need."
      />
    </>
  );
}
