import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import type { PlaceholderPage } from "@/lib/content/placeholders";

export function PlaceholderBody({ page }: { page: PlaceholderPage }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <p className="max-w-3xl text-base leading-7 text-muted">{page.note}</p>
          {page.links && page.links.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {page.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("mailto:") ? (
                    <a href={link.href} className="text-sm font-medium text-ink">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm font-medium text-ink">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
