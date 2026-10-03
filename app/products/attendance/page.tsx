import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { DemoLinks } from "@/components/products/demo-links";
import { FlowDiagram } from "@/components/products/flow-diagram";
import { ProductSection } from "@/components/products/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { attendancePage } from "@/lib/content/product-pages";
import { getProduct } from "@/lib/content/products";
import { pageMetadata } from "@/lib/seo";

const product = getProduct("face-attendance");

export const metadata: Metadata = pageMetadata({
  title: "AI Attendance System",
  description:
    "Face-recognition AI attendance system with anti-spoofing, dashboards, and HRMS integration. AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India.",
  path: attendancePage.path,
});

export default function AttendancePage() {
  if (!product) notFound();

  return (
    <>
      <PageHero
        eyebrow={attendancePage.eyebrow}
        title={attendancePage.title}
        description={attendancePage.description}
      />
      <section className="bg-paper">
        <Container className="flex flex-col gap-16 py-16 sm:py-20">
          <ProductSection product={product} index={0} showPageLink={false} />

          <div className="grid gap-8 lg:grid-cols-2">
            <section aria-labelledby="registration-workflow">
              <h2 id="registration-workflow" className="text-3xl text-ink sm:text-4xl">
                {attendancePage.registration.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{attendancePage.registration.intro}</p>
              <div className="mt-6">
                <FlowDiagram steps={attendancePage.registration.steps} title="Registration" />
              </div>
            </section>
            <section aria-labelledby="recognition-workflow">
              <h2 id="recognition-workflow" className="text-3xl text-ink sm:text-4xl">
                {attendancePage.recognition.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{attendancePage.recognition.intro}</p>
              <div className="mt-6">
                <FlowDiagram steps={product.workflow} title="Attendance" />
              </div>
            </section>
          </div>

          <section aria-labelledby="anti-spoofing" className="max-w-2xl">
            <h2 id="anti-spoofing" className="text-3xl text-ink sm:text-4xl">
              {attendancePage.antiSpoof.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">{attendancePage.antiSpoof.body}</p>
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-2xl border border-line bg-white p-6" aria-labelledby="hardware">
              <h2 id="hardware" className="text-2xl text-ink">
                {attendancePage.hardware.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{attendancePage.hardware.body}</p>
            </section>
            <section className="rounded-2xl border border-line bg-white p-6" aria-labelledby="architecture">
              <h2 id="architecture" className="text-2xl text-ink">
                {attendancePage.architecture.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{attendancePage.architecture.body}</p>
            </section>
          </div>

          <section aria-labelledby="integration-details">
            <h2 id="integration-details" className="text-3xl text-ink sm:text-4xl">
              {attendancePage.integration.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{attendancePage.integration.intro}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {attendancePage.integration.items.map((item) => (
                <li key={item} className="rounded-xl border border-line bg-white px-4 py-4 text-sm leading-6 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="deployment-process" className="max-w-xl">
            <h2 id="deployment-process" className="text-3xl text-ink sm:text-4xl">
              {attendancePage.deployment.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">{attendancePage.deployment.intro}</p>
            <div className="mt-6">
              <FlowDiagram steps={attendancePage.deployment.steps} title="Deployment" />
            </div>
          </section>

          <DemoLinks
            productId={product.id}
            salesHref={attendancePage.sales.href}
            salesLabel={attendancePage.sales.label}
          />
        </Container>
      </section>
      <FinalCta
        title="See attendance on your entrances."
        body="Tell us the sites, and whether you need cloud or on-premise. We will walk through detection, the dashboard, and HRMS or payroll."
      />
    </>
  );
}
