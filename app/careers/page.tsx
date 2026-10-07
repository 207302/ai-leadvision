import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { careerHighlights, careersPage, openRoles } from "@/lib/content/careers";
import { siteConfig } from "@/lib/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Build the Future with AI Lead Vision",
  description:
    "Careers at AI Lead Vision Pvt Ltd, Bengaluru. AI, computer vision, robotics, and software roles. Confirm which openings are live before applying.",
  path: careersPage.path,
});

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow={careersPage.eyebrow} title={careersPage.title} description={careersPage.description} />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <p className="max-w-3xl text-base leading-7 text-muted">{careersPage.note}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerHighlights.map((item) => (
              <li key={item.title} className="rounded-xl border border-line bg-white p-6">
                <h2 className="text-xl text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white" aria-labelledby="open-roles">
        <Container className="py-16 sm:py-20">
          <h2 id="open-roles" className="text-3xl text-ink sm:text-4xl">
            Roles
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These titles are listed for the careers page. Treat each as unconfirmed until the note is replaced.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {openRoles.map((role) => (
              <li key={role.id} id={role.id} className="scroll-mt-28 rounded-xl border border-line bg-paper p-6">
                <h3 className="text-xl text-ink">{role.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{role.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-6 text-muted">
            Write to{" "}
            <a href={`mailto:${siteConfig.emails.hr}`} className="font-medium text-accent">
              {siteConfig.emails.hr}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
