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
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Company in Bangalore",
  description:
    "AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India is an AI company in Bangalore for industrial AI, computer vision, robotics, and custom software.",
  path: "/",
});

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
