import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import { AutomotiveEngineering } from "@/components/sections/automotive-engineering";
import {
  BusinessOutcome,
  GenerativeAiSection,
  HomeContact,
  HowItWorks,
  IndustriesWeServe,
  WhatWeBuild,
  WhoWeServe,
  WhySection,
} from "@/components/sections/home-sections";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { homeHero } from "@/lib/content/home";
import { siteConfig } from "@/lib/content/site";

const title = "AI, Computer Vision & Robotics Solutions for Business | AI Lead Vision";

export const metadata: Metadata = {
  title,
  description: `${homeHero.audience} ${homeHero.support}`,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: siteConfig.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapabilityStrip />
      <GenerativeAiSection />
      <WhatWeBuild />
      <TechnologyStack />
      <AutomotiveEngineering />
      <WhoWeServe />
      <IndustriesWeServe />
      <HowItWorks />
      <WhySection />
      <BusinessOutcome />
      <HomeContact />
    </>
  );
}
