/**
 * Training programmes named by the owner.
 * Duration, cohort, and programme detail stay as placeholders until confirmed.
 * The practice sentence is the wording previously published on About.
 */

export const trainingPractice =
  "A separate practice trains working professionals in aviation and automotive domains, and recruits for software development and testing — including people early in their careers. It is not part of the AI product line.";

export const trainingPage = {
  path: "/training",
  eyebrow: "Training",
  title: "Training",
  programmes: [
    { id: "ai-ml", title: "AI/ML Training", detail: "[Programme details]" },
    { id: "automotive", title: "Automotive Training", detail: "[Programme details]" },
    { id: "embedded-testing", title: "Embedded Software Testing", detail: "[Programme details]" },
    { id: "computer-vision", title: "Computer Vision", detail: "[Programme details]" },
    { id: "robotics", title: "Robotics", detail: "[Programme details]" },
    { id: "corporate", title: "Corporate Training", detail: "[Programme details]" },
    { id: "faculty", title: "Faculty Development Programs", detail: "[Programme details]" },
  ],
} as const;
