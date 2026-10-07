/**
 * Portfolio entries. Outcomes are not published until the owner supplies them.
 * These describe systems the company builds. They are not named client results.
 */

export const projectsPage = {
  path: "/projects",
  eyebrow: "Projects",
  title: "Projects",
  description:
    "Systems AI Lead Vision has built: attendance, vision, robotics, analytics, and automotive software. Client names and measured results stay unpublished.",
} as const;

export type Project = {
  slug: string;
  title: string;
  outcome: string;
  summary: string;
  tags: readonly string[];
  href: string;
  imageNote: string;
};

export const projects: readonly Project[] = [
  {
    slug: "ai-attendance-system",
    title: "AI Attendance System",
    outcome: "TODO: confirm with client — measured outcome is not published.",
    summary:
      "A contactless attendance system that matches a live face, blocks photo and video attempts, and writes the result to a dashboard with leave, shift, and payroll workflows.",
    tags: ["Python", "OpenCV", "Object Detection"],
    href: "/products/attendance",
    imageNote: "TODO: confirm with client — project image. A product demo video exists on the attendance page.",
  },
  {
    slug: "industrial-vision-ocr",
    title: "Industrial Vision & OCR",
    outcome: "TODO: confirm with client — measured outcome is not published.",
    summary:
      "Industrial cameras read a unit on the line: surface, mark, code, dimension, and count, including OCR and barcode or QR verification.",
    tags: ["OpenCV", "YOLO", "OCR", "Object Detection"],
    href: "/products/computer-vision",
    imageNote: "TODO: confirm with client — project image.",
  },
  {
    slug: "autonomous-mobile-robot",
    title: "Autonomous Mobile Robot",
    outcome: "TODO: confirm with client — measured outcome is not published.",
    summary:
      "The published robotics system is the educational robot: ROS2 compatible, with sensors, obstacle avoidance, and line following. TODO: confirm with client — whether a separate autonomous mobile robot project can be named.",
    tags: ["ROS2", "Sensors", "Python"],
    href: "/products/robotics",
    imageNote: "TODO: confirm with client — project image.",
  },
  {
    slug: "ai-video-analytics",
    title: "AI Video Analytics",
    outcome: "TODO: confirm with client — measured outcome is not published.",
    summary:
      "Vision on a live camera feed for defined events — intrusion, PPE, fire and smoke, crowds, vehicles, plates, and falls — with an alert on a dashboard.",
    tags: ["Object Detection", "Video Analytics"],
    href: "/products/computer-vision",
    imageNote: "TODO: confirm with client — project image.",
  },
  {
    slug: "ai-quality-inspection",
    title: "AI Quality Inspection",
    outcome: "TODO: confirm with client — measured outcome is not published.",
    summary:
      "A vision inspection station flags surface defects, missing parts, and packaging issues while the line is still running.",
    tags: ["Object Detection", "Deep Learning", "Inspection"],
    href: "/products/computer-vision#machine-vision",
    imageNote: "TODO: confirm with client — project image.",
  },
  {
    slug: "predictive-analytics-dashboard",
    title: "Predictive Analytics Dashboard",
    outcome: "TODO: confirm with client — measured outcome is not published.",
    summary:
      "Dashboards and forecasts on demand, inventory, customer behavior, and the KPIs a team already reviews.",
    tags: ["Python", "PyTorch", "TensorFlow"],
    href: "/products#predictive-analytics",
    imageNote: "TODO: confirm with client — project image.",
  },
  {
    slug: "custom-ai-application",
    title: "Custom AI Application",
    outcome: "TODO: confirm with client — no specific custom application is cleared to publish.",
    summary:
      "Custom AI development covers the model and the application around it when a ready product does not fit the operation. TODO: confirm with client — a named project is not published.",
    tags: ["Python", "APIs", "Web Applications"],
    href: "/solutions#software-engineering",
    imageNote: "TODO: confirm with client — project image.",
  },
  {
    slug: "automotive-embedded",
    title: "Automotive / Embedded Engineering",
    outcome: "TODO: confirm with client — publishable project results are not supplied.",
    summary:
      "Embedded software, in-vehicle networks, and diagnostics: AUTOSAR, CAN and CAN FD, UDS, DoIP, software testing, verification and validation, ASPICE, and ISO 26262. Named client programmes stay unpublished.",
    tags: ["C/C++", "AUTOSAR", "CAN", "UDS", "ISO 26262"],
    href: "/solutions#automotive-engineering",
    imageNote: "TODO: confirm with client — project image.",
  },
];

export const featuredProjects = projects.slice(0, 6);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
