import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "We Build Intelligence That Works in the Real World",
  description:
    "AI Lead Vision Pvt Ltd is an AI engineering company in Bengaluru focused on AI, computer vision, robotics, and intelligent automation.",
  path: "/about",
});

const values = [
  {
    title: "Innovation",
    text: "Apply the technique that fits the operation. Leave the rest.",
  },
  {
    title: "Engineering Excellence",
    text: "A system has to be buildable, deployable, and maintainable.",
  },
  {
    title: "Real-World Impact",
    text: "The work is judged by the operation it changes, not by a demo.",
  },
  {
    title: "Continuous Learning",
    text: "The useful technique changes. The practice is to keep learning what the problem needs.",
  },
];

const why = [
  {
    title: "Business first",
    text: "Start from the check, the conversation, the inspection, or the decision that is slow or manual today.",
  },
  {
    title: "AI + engineering",
    text: "The model and the application around it are one system.",
  },
  {
    title: "Prototype to production",
    text: "Handover includes the people who will run the system.",
  },
  {
    title: "Real environments",
    text: "Cameras, lines, labs, and the software already on site.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We Build Intelligence That Works in the Real World."
        description="An AI engineering company. Not a training catalogue and not a generic IT shop."
      />

      <section className="bg-paper">
        <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">An AI engineering company.</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted lg:col-span-8">
            <p>
              AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India focuses on AI, computer vision, robotics, and intelligent automation for real business environments.
            </p>
            <p>
              The company builds systems a team can run: attendance, conversation, inspection, forecasting, robotics, and the software around them. Training and hiring are a separate practice.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-2">
          <article>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-ink">Make advanced AI practical, accessible, and deployable.</h2>
          </article>
          <article>
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-ink">Build intelligent systems that augment human capability.</h2>
          </article>
        </Container>
      </section>

      <section className="bg-paper">
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

      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Journey</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">Milestones.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            TODO: confirm with client — no verified company milestones are published on the site. Statistics stay unpublished until there is one confirmed source.
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Why AI Lead Vision</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">Why teams ask us to build.</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/solutions" className="text-sm font-medium text-ink">
              Solutions
            </Link>
            <Link href="/products" className="text-sm font-medium text-ink">
              Products
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta
        title="Let's Build Something Intelligent."
        body="Tell us the operation you want to change. We will say whether a product or a custom system is the right path."
      />
    </>
  );
}
