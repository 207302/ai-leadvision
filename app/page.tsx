import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import {
  CompanyHighlight,
  HomeContact,
  HomeIndustries,
  HomeSolutions,
  SelectedProjects,
  WhatWeDo,
  WhySection,
} from "@/components/sections/home-sections";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Engineering Intelligence for the Real World",
  description:
    "We build production-ready AI, computer vision, machine learning, robotics and automation solutions that help businesses solve real-world problems.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapabilityStrip />
      <WhatWeDo />
      <HomeSolutions />
      <HomeIndustries />
      <SelectedProjects />
      <TechnologyStack />
      <WhySection />
      <CompanyHighlight />
      <HomeContact />
    </>
  );
}
