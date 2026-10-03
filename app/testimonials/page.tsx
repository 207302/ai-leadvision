import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { customerTestimonials, employeeExperience, testimonialsPage } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | AI Lead Vision",
  description: testimonialsPage.description,
  alternates: { canonical: testimonialsPage.path },
  openGraph: {
    title: "Testimonials | AI Lead Vision",
    description: testimonialsPage.description,
    url: testimonialsPage.path,
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | AI Lead Vision",
    description: testimonialsPage.description,
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow={testimonialsPage.eyebrow}
        title={testimonialsPage.title}
        description={testimonialsPage.description}
      />
      <section className="bg-paper" aria-labelledby="customer-testimonials">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Customers</Eyebrow>
          <h2 id="customer-testimonials" className="mt-4 max-w-xl text-3xl leading-tight text-ink sm:text-4xl">
            Customer Testimonials
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Customer name, designation, company, project or use case, and permission to publish stay as placeholders until confirmed.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {customerTestimonials.map((item, index) => (
              <figure key={item.id} className="flex flex-col border border-line bg-white p-6">
                <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
                <blockquote className="mt-4 text-sm leading-7 text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-6 space-y-2 text-sm leading-6 text-muted">
                  <p className="text-ink">{item.name}</p>
                  <p>{item.designation}</p>
                  <p>{item.company}</p>
                  <p>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-faint">Project / use case</span>
                    <span className="mt-1 block">{item.project}</span>
                  </p>
                  <p>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-faint">Permission to publish</span>
                    <span className="mt-1 block">{item.permission}</span>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white" aria-labelledby="employee-experience">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Team</Eyebrow>
          <h2 id="employee-experience" className="mt-4 max-w-xl text-3xl leading-tight text-ink sm:text-4xl">
            {employeeExperience.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">{employeeExperience.note}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {employeeExperience.items.map((item) => (
              <figure key={item.name} className="border border-line bg-paper p-6">
                <blockquote className="text-sm leading-7 text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta
        title="Have a technology challenge?"
        body="Tell us the operation you want to change. We will say whether a product or a custom system is the right path."
      />
    </>
  );
}
