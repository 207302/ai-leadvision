import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import {
  AboutPreview,
  FaqPreview,
  HomeIntro,
  OutcomesSection,
  ProductPreview,
  ServicesPreview,
  TechnologySection,
} from "@/components/sections/home-sections";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "AI Lead Vision | AI Solutions & Intelligent Systems",
  description:
    "AI Lead Vision builds intelligent products and enterprise systems across artificial intelligence, machine learning, computer vision, robotics, and software engineering.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Lead Vision | AI Solutions & Intelligent Systems",
    description:
      "AI Lead Vision builds intelligent products and enterprise systems across artificial intelligence, machine learning, computer vision, robotics, and software engineering.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapabilityStrip />
      <HomeIntro />
      <ProductPreview />
      <TechnologySection />
      <OutcomesSection />
      <ServicesPreview />
      <AboutPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
