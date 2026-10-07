import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { getProject, projects } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero eyebrow="Project" title={project.title} description={project.outcome} />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-line bg-white px-6 text-center text-sm leading-6 text-muted">
            {project.imageNote}
          </div>
          <h2 className="mt-10 text-3xl text-ink">What this system is</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{project.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line bg-white px-3 py-1 text-xs text-ink">
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <Link href={project.href} className="text-sm font-medium text-accent">
              Related product or solution
            </Link>
            <Link href="/projects" className="text-sm font-medium text-ink">
              All projects
            </Link>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
