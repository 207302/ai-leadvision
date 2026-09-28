import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProducts } from "@/lib/content/products";
import { homepageFaqs } from "@/lib/content/faqs";
import { capabilities, outcomes, services } from "@/lib/content/services";
import { statistics } from "@/lib/content/site";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FaqAccordion } from "@/components/faq/accordion";

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

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 60}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan/40 sm:p-7">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-white/40">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{product.kicker}</span>
                </div>
                <h3 className="mt-6 text-2xl leading-tight text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan">{product.positioning}</p>
                <p className="mt-4 text-sm leading-6 text-white/68">{product.summary}</p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {product.highlights.map((item) => (
                    <li key={item} className="text-sm leading-6 text-white/75">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products#${product.id}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white"
                >
                  Explore product
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section className="bg-white">
      <Container className="py-24 sm:py-28 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Technology</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
            The disciplines behind the products.
          </h2>
        </Reveal>
        <div className="mt-14 grid border-t border-line sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6 sm:px-6 sm:odd:pl-0 sm:even:border-l"
            >
              <span className="font-mono text-[11px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl text-ink">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
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
            <div className="rounded-xl border border-line bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">Technology</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                AI products, machine learning, computer vision, robotics, and the software required to deploy them.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
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
      <Container className="grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Questions worth asking first.</h2>
          <Link
            href="/faq"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            View all FAQs
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion items={homepageFaqs} />
        </div>
      </Container>
    </section>
  );
}
