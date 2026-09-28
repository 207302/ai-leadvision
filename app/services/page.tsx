import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { ServiceBlock } from "@/components/services/service-block";
import { Container } from "@/components/ui/container";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "AI Development Services | AI Lead Vision",
  description:
    "Robotics, machine learning, and software development for intelligent operations — scoped as engineering work, not a catalogue of slogans.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Development Services | AI Lead Vision",
    description:
      "Robotics, machine learning, and software development for systems that have to run.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Services | AI Lead Vision",
    description: "Robotics, machine learning, and software development.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering services for intelligent operations."
        description="Robotics, machine learning, and software development. Each engagement starts from the problem, then the system required to change it."
        trace={["Robotics", "Machine Learning", "Software Development"]}
      />
      <section className="bg-paper">
        <Container className="pb-8">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </Container>
      </section>
      <FinalCta
        title="Bring the operation, not a feature list."
        body="Describe the work that is slow, manual, or blind today. We will tell you which discipline — robotics, machine learning, or software — should lead."
      />
    </>
  );
}
