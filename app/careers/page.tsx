import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { careersPage } from "@/lib/content/careers";
import { siteConfig } from "@/lib/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Careers at AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India. Recruitment for software development and testing.",
  path: careersPage.path,
});

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow={careersPage.eyebrow} title={careersPage.title} description={careersPage.description} />
      <section className="bg-paper">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="max-w-xl text-base leading-7 text-muted">{careersPage.note}</p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Write to{" "}
              <a href={`mailto:${siteConfig.emails.hr}`} className="font-medium text-accent">
                {siteConfig.emails.hr}
              </a>
              , or send a note with the form.
            </p>
          </div>
          <Suspense fallback={<div className="h-96 rounded-xl border border-line bg-white" />}>
            <ContactForm defaultRequirement="careers" />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
