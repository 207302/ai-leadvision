import type { LegalPage } from "@/lib/content/legal";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";

export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.16em] text-faint">Updated {page.updated}</p>
          <div className="mt-10 space-y-10">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}
