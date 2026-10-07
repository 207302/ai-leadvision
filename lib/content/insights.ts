/**
 * Draft insight topics. Bodies are not articles until the owner writes them.
 */

export const insightsPage = {
  path: "/insights",
  eyebrow: "Insights",
  title: "Insights",
  description:
    "Draft topics on computer vision, inspection, edge AI, automotive testing, robotics, and how a business can start with AI.",
} as const;

export type Insight = {
  slug: string;
  title: string;
  summary: string;
};

export const insights: readonly Insight[] = [
  {
    slug: "computer-vision-in-manufacturing",
    title: "Computer Vision in Manufacturing",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "ai-based-quality-inspection",
    title: "AI-based Quality Inspection",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "edge-ai",
    title: "Edge AI",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "ai-in-automotive-testing",
    title: "AI in Automotive Testing",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "ros2-and-autonomous-robotics",
    title: "ROS2 and Autonomous Robotics",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "ocr-and-industrial-identification",
    title: "OCR and Industrial Identification",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "how-businesses-can-start-with-ai",
    title: "How Businesses Can Start with AI",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
  {
    slug: "ai-trends-in-industrial-automation",
    title: "AI Trends in Industrial Automation",
    summary: "TODO: confirm with client — draft topic. Article body is not written yet.",
  },
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}
