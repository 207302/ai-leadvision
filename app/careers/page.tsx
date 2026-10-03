import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { careersPage } from "@/lib/content/careers";
import { siteConfig } from "@/lib/content/site";
import { trainingPractice } from "@/lib/content/training";

export const metadata: Metadata = {
  title: "Careers / Hiring Solutions | AI Lead Vision",
  description: careersPage.description,
  alternates: { canonical: careersPage.path },
  openGraph: {
    title: "Careers / Hiring Solutions | AI Lead Vision",
    description: careersPage.description,
    url: careersPage.path,
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers / Hiring Solutions | AI Lead Vision",
    description: careersPage.description,
  },
};

const roleFields = [
  { label: "Role", value: careersPage.role.title },
  { label: "Team", value: careersPage.role.team },
  { label: "Location", value: careersPage.role.location },
  { label: "Experience", value: careersPage.role.experience },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow={careersPage.eyebrow} title={careersPage.title} description={careersPage.description} />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <p className="max-w-3xl text-base leading-7 text-muted">{trainingPractice}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${siteConfig.emails.hr}`} className="text-sm font-medium text-accent">
              {siteConfig.emails.hr}
            </a>
            <Link href="/training" className="text-sm font-medium text-accent">
              Training
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-white" aria-labelledby="open-roles">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Open roles</Eyebrow>
          <h2 id="open-roles" className="mt-4 max-w-2xl text-3xl leading-tight text-ink sm:text-4xl">
            Role template.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Confirmed openings are unpublished. Use this template until a role is ready to list.
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {roleFields.map((field) => (
              <div key={field.label} className="bg-paper p-6">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-accent">{field.label}</dt>
                <dd className="mt-2 text-lg text-ink">{field.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <FinalCta
        title="Write to HR."
        body="Send the role you want to discuss to hr@aileadvision.com."
      />
    </>
  );
}
