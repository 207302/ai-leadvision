import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/layout/social-links";
import { locationLine, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact AI Lead Vision",
  description:
    "Tell AI Lead Vision what you are trying to solve. Email info@aileadvision.com or hr@aileadvision.com, or send an inquiry from Bengaluru.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AI Lead Vision",
    description: "Tell us what you're trying to solve.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AI Lead Vision",
    description: "Tell us what you're trying to solve.",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string; product?: string }>;
}) {
  const params = await searchParams;
  const formKey = `${params.interest ?? ""}-${params.product ?? ""}`;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build something intelligent."
        description="Tell us what you're trying to solve."
      />
      <section className="bg-paper">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <Suspense fallback={<div className="h-96 rounded-xl border border-line bg-white" />}>
            <ContactForm key={formKey} />
          </Suspense>
          <aside className="lg:pt-2">
            <h2 className="text-xl text-ink">Corporate Contact</h2>
            <div className="mt-4">
              <SocialLinks tone="light" />
            </div>
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-faint">Email</dt>
                <dd className="mt-2">
                  <a className="text-ink hover:text-accent" href={`mailto:${siteConfig.emails.general}`}>
                    {siteConfig.emails.general}
                  </a>
                </dd>
                <dd className="mt-1">
                  <a className="text-ink hover:text-accent" href={`mailto:${siteConfig.emails.hr}`}>
                    {siteConfig.emails.hr}
                  </a>
                  <span className="text-muted"> · training and hiring</span>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-faint">Phone</dt>
                <dd className="mt-2 space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <a key={phone.tel} className="block text-ink hover:text-accent" href={`tel:${phone.tel}`}>
                      {phone.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-faint">Location</dt>
                <dd className="mt-2 text-ink">{locationLine()}</dd>
                <dd className="mt-1 text-muted">Visiting details are shared when you write to us.</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>
    </>
  );
}
