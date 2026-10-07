import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { projects, projectsPage } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: projectsPage.description,
  path: projectsPage.path,
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow={projectsPage.eyebrow}
        title={projectsPage.title}
        description={projectsPage.description}
      />
      <section className="bg-paper" aria-labelledby="project-list">
        <Container className="py-16 sm:py-20">
          <h2 id="project-list" className="max-w-2xl text-3xl leading-tight text-ink sm:text-5xl">
            What has been built.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Products are listed on{" "}
            <Link href="/products" className="font-medium text-ink">
              Products
            </Link>
            . Custom capabilities are on{" "}
            <Link href="/solutions" className="font-medium text-ink">
              Solutions
            </Link>
            . Sectors are on{" "}
            <Link href="/industries" className="font-medium text-ink">
              Industries
            </Link>
            .
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug} id={project.slug} className="scroll-mt-28">
                <article className="enter-box flex h-full flex-col rounded-xl border border-line bg-white p-6">
                  <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-line bg-paper px-4 text-center text-xs leading-5 text-muted">
                    {project.imageNote}
                  </div>
                  <h3 className="mt-5 text-xl text-ink">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{project.outcome}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                  >
                    View Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <FinalCta
        title="Have a project in mind?"
        body="Tell us the operation. We will say whether a product or a custom system is the right path."
      />
    </>
  );
}
