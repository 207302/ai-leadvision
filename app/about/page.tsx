import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "About AI Lead Vision",
  description:
    "AI Lead Vision engineers intelligent systems for real-world businesses, with a separate practice in professional training and software hiring.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AI Lead Vision",
    description:
      "Engineering intelligent systems for real-world businesses.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AI Lead Vision",
    description: "Engineering intelligent systems for real-world businesses.",
  },
};

const builds = [
  {
    title: "AI products",
    text: "Attendance, voice, chat, vision, inspection, and analytics systems meant to be deployed.",
  },
  {
    title: "Intelligent automation",
    text: "Inspection, control, and monitoring designed as one operational layer.",
  },
  {
    title: "Computer vision systems",
    text: "Detection on camera feeds and production lines, with an alert or a decision at the end.",
  },
  {
    title: "Voice and conversational AI",
    text: "Spoken and written assistants connected to the channels and records a business already uses.",
  },
  {
    title: "Software platforms",
    text: "Web applications, dashboards, and integrations that make the system usable.",
  },
  {
    title: "Robotics solutions",
    text: "Educational robots and automation concepts that join perception with control.",
  },
];

const values = [
  {
    title: "Engineering first",
    text: "A system has to be buildable, deployable, and maintainable. That constraint comes before the pitch.",
  },
  {
    title: "Business outcomes",
    text: "A model that never leaves a demo is not a finished product. The work is judged by the operation it changes.",
  },
  {
    title: "Continuous innovation",
    text: "The useful technique changes. The practice is to apply what fits the problem, and leave the rest.",
  },
  {
    title: "Long-term partnerships",
    text: "Deployment starts the relationship: integration, the people who run it, and the next version.",
  },
];

const perspectives = [
  {
    name: "Chandresh Chahar",
    quote:
      "Good company for freshers to learn and explore about latest technologies and management is very nice. Seniors are very helpful.",
  },
  {
    name: "Ashish Kumar",
    quote: "Very good company to work with good clients and scale up the skills.",
  },
  {
    name: "Sara Tran",
    quote: "Very good working environment and work-life balance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About AI Lead Vision"
        description="Engineering intelligent systems for real-world businesses."
        trace={["Ideas", "Systems", "Deployment", "Support"]}
      />

      <section className="bg-paper">
        <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              A product and engineering company in Bengaluru.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted lg:col-span-8">
            <p>
              AI Lead Vision designs intelligent products and the custom software around them. The technology work covers artificial intelligence, machine learning, computer vision, robotics, data, and the applications required to run those systems in a business.
            </p>
            <p>
              The company builds for an outcome: fewer manual checks, a conversation that resolves, a camera that raises the right alert, a forecast someone can use.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
            Six kinds of systems. One standard: it has to run.
          </h2>
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {builds.map((item, index) => (
              <div key={item.title} className="border-b border-line py-6 sm:px-6 sm:odd:pl-0 lg:[&:nth-child(3n+1)]:pl-0">
                <p className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="training" className="scroll-mt-28 bg-paper">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Business areas</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Two practices. They are not the same story.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="border border-line bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">Technology</p>
              <h3 className="mt-4 text-2xl text-ink">Products and engineering</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                AI products, machine learning, computer vision, robotics, and software development for organizations that need a system in production. This is the work described across Products and Services.
              </p>
            </article>
            <article className="border border-line bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Training & professional development
              </p>
              <h3 className="mt-4 text-2xl text-ink">Training and software hiring</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                A separate practice trains working professionals in aviation and automotive domains, and recruits for software development and testing — including people early in their careers. It is not part of the AI product line.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/training" className="text-sm font-medium text-accent">
                  Training
                </Link>
                <a href="mailto:hr@aileadvision.com" className="text-sm font-medium text-accent">
                  hr@aileadvision.com
                </a>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Values</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">How the work is judged.</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Team perspectives</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
            Notes from people who have worked here.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These are workplace comments. They are not customer testimonials and they are not case studies.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {perspectives.map((item) => (
              <figure key={item.name} className="border border-line bg-white p-6">
                <blockquote className="text-sm leading-7 text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Have a technology challenge?"
        body="Tell us the operation you want to change. We will say whether a product or a custom system is the right path."
      />
    </>
  );
}
