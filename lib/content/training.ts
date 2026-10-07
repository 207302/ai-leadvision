/**
 * Training is a secondary practice. Duration and cohort stay unpublished.
 */

export const trainingPractice =
  "Training sits beside the engineering work. It is not the main offer. The practice trains working professionals in aviation and automotive domains, and covers the topics below. Programme length and cohort size are not published yet.";

export const trainingPage = {
  path: "/training",
  eyebrow: "Training",
  title: "Training",
  description:
    "A secondary practice: AI and machine learning, computer vision, robotics, automotive software and testing, embedded systems, corporate training, and faculty development.",
  programmes: [
    { id: "ai-ml", title: "AI / ML Training", detail: "TODO: confirm with client — programme details." },
    { id: "computer-vision", title: "Computer Vision", detail: "TODO: confirm with client — programme details." },
    { id: "robotics", title: "Robotics", detail: "TODO: confirm with client — programme details." },
    { id: "automotive", title: "Automotive Software & Testing", detail: "TODO: confirm with client — programme details." },
    { id: "embedded", title: "Embedded Systems", detail: "TODO: confirm with client — programme details." },
    { id: "corporate", title: "Corporate Training", detail: "TODO: confirm with client — programme details." },
    { id: "faculty", title: "Faculty Development Programmes", detail: "TODO: confirm with client — programme details." },
  ],
} as const;
