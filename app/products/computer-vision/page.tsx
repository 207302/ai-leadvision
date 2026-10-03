import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { MediaGrid, MediaPlaceholder } from "@/components/products/media-placeholder";
import { ProductSection } from "@/components/products/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { visionPage, visionShowcase } from "@/lib/content/product-pages";
import { getProduct } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Computer Vision and Industrial AI | AI Lead Vision",
  description: visionPage.description,
  alternates: { canonical: visionPage.path },
  openGraph: {
    title: "Computer Vision and Industrial AI | AI Lead Vision",
    description: visionPage.description,
    url: visionPage.path,
  },
};

export default function ComputerVisionPage() {
  const vision = getProduct("computer-vision");
  const inspection = getProduct("machine-vision");
  if (!vision || !inspection) notFound();

  return (
    <>
      <PageHero
        eyebrow={visionPage.eyebrow}
        title={visionPage.title}
        description={visionPage.description}
      />
      <section className="bg-paper">
        <Container className="flex flex-col gap-16 py-16 sm:py-20">
          <section aria-labelledby="vision-capabilities">
            <h2 id="vision-capabilities" className="max-w-2xl text-3xl text-ink sm:text-4xl">
              Detection, inspection, and the line.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Camera events from the computer vision product, inspection from machine vision, and production monitoring from industrial automation. The full write-ups stay below and on the products page.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {visionShowcase.map((item) => (
                <li key={item.id} id={item.id} className="scroll-mt-28 rounded-xl border border-line bg-white px-4 py-4">
                  <h3 className="text-base text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="vision-projects">
            <h2 id="vision-projects" className="text-3xl text-ink sm:text-4xl">
              Project photos and videos
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Real project photos and videos will go here once they are confirmed. Client names stay unpublished until then.
            </p>
            <div className="mt-6">
              <MediaGrid items={visionPage.projects} framed />
            </div>
          </section>

          <section aria-labelledby="before-after">
            <h2 id="before-after" className="text-3xl text-ink sm:text-4xl">
              Before and after inspection
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Example frames from an inspection, before and after. The images are not published yet.
            </p>
            <div className="mt-6">
              <MediaGrid items={visionPage.beforeAfter} framed />
            </div>
          </section>

          <section aria-labelledby="vision-architecture" className="max-w-xl">
            <h2 id="vision-architecture" className="text-3xl text-ink sm:text-4xl">
              Architecture
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Camera feed, vision model, detection, then an alert or a pass-fail decision.
            </p>
            <div className="mt-6">
              <MediaPlaceholder
                title={visionPage.architecture.title}
                note={visionPage.architecture.note}
                framed
              />
            </div>
          </section>

          <div className="flex flex-col gap-8">
            <ProductSection product={vision} index={0} showMedia={false} showPageLink={false} />
            <ProductSection product={inspection} index={1} showMedia={false} showPageLink={false} />
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted">
            Production-line monitoring, PLC integration, and robot integration are written up with{" "}
            <Link href="/products/robotics#industrial-robotics" className="font-medium text-ink">
              industrial robotics
            </Link>{" "}
            and on the{" "}
            <Link href="/products#industrial-automation" className="font-medium text-ink">
              industrial automation product
            </Link>
            .
          </p>
        </Container>
      </section>
      <FinalCta
        title="Bring the camera feed or the line."
        body="Tell us the event, the defect, or the station. We will say whether it is a vision alert, an inspection station, or both."
      />
    </>
  );
}
