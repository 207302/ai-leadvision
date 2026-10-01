import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProducts } from "@/lib/content/products";
import { outcomes, services } from "@/lib/content/services";
import { statistics } from "@/lib/content/site";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { TechnologyPanel } from "@/components/sections/technology-panel";

export function HomeIntro() {
  return (
    <section className="bg-paper">
      <Container className="grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <Reveal className="lg:col-span-5">
          <Eyebrow>AI engineering & innovation</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-5xl">
            From intelligent ideas to deployed systems.
          </h2>
        </Reveal>
        <Reveal className="space-y-5 text-base leading-7 text-muted lg:col-span-7" delay={80}>
          <p>
            AI Lead Vision is an engineering company. We design products and custom systems that run inside real operations — attendance, customer conversations, visual inspection, and the software around them.
          </p>
          <p>
            The work spans artificial intelligence, machine learning, computer vision, robotics, and software engineering. A system is finished when it is integrated, used, and measurable. A demo is not the deliverable.
          </p>
          <p>
            AILVIN Pvt Ltd also trains professionals in aviation and automotive domains, and recruits for software roles. That practice is described on its own, separate from the product work.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function ProductPreview() {
  return (
    <section className="bg-navy text-white">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow tone="dark">Products</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              AI products built for the real world.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-cyan hover:text-white"
          >
            View all products
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products#${product.id}`}
              className="enter-box group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 transition-colors hover:border-cyan/40 hover:shadow-[0_0_28px_rgba(143,216,234,0.08)]"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-cyan">{product.kicker}</p>
              <h3 className="mt-2 text-xl leading-tight text-white">{product.name}</h3>
              <p className="mt-2 text-sm text-white/60">{product.positioning}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/80 group-hover:text-white">
                Explore product
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">Technology</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
            The disciplines behind the products.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/65">
            The line keeps turning. The card in front carries the discipline, and the ones just passed stay visible behind it.
          </p>
        </div>
        <TechnologyPanel />
      </Container>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="bg-paper">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
            Technology should solve a business problem.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, index) => (
            <div key={item.title}>
              <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        {statistics.publish && statistics.items.length > 0 && (
          <dl className="mt-16 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {statistics.items.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="mt-1 font-heading text-3xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="bg-white">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
            Engineering, scoped to the operation.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <article key={service.id} className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:gap-8">
              <p className="font-mono text-[11px] text-accent md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl text-ink md:col-span-3">{service.title}</h3>
              <p className="text-sm leading-6 text-muted md:col-span-6">{service.summary}</p>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink md:col-span-2 md:justify-end"
              >
                View approach
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="bg-paper">
      <Container className="grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <Eyebrow>Company</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
            An engineering firm with a second, separate practice.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="enter-box rounded-xl border border-line bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">Technology</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                AI products, machine learning, computer vision, robotics, and the software required to deploy them.
              </p>
            </div>
            <div className="enter-box rounded-xl border border-line bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Training & hiring
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Professional training for aviation and automotive domains, and recruitment for software development and testing.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            About the company
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function FaqPreview() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-20 sm:flex-row sm:items-end sm:py-24">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          View all FAQs
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
