import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import {
  BusinessOutcome,
  HomeContact,
  HowItWorks,
  WhatWeBuild,
  WhoWeServe,
  WhySection,
} from "@/components/sections/home-sections";
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
      <WhatWeBuild />
      <WhoWeServe />
      <HowItWorks />
      <WhySection />
      <BusinessOutcome />
      <HomeContact />
    </>
  );
}
