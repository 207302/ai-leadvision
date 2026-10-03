import { getProduct, type FlowStep, type Product } from "@/lib/content/products";

export type MediaSlot = {
  id: string;
  title: string;
  note: string;
};

export type ProductSupplement = {
  technology: string[];
  deployment: string[];
  integration: string[];
  media: MediaSlot[];
  page?: { href: string; label: string };
};

/**
 * Extra product fields. Existing problem, solution, capabilities, and use cases
 * stay on the product record. Technology names here are already used in that copy.
 * Unpublished deployment or integration specifics stay in brackets.
 */
export const productSupplements: Record<string, ProductSupplement> = {
  "face-attendance": {
    technology: [
      "Real-time face detection",
      "Anti-spoofing that blocks photo and video attempts",
      "Match against the enrolled record",
    ],
    deployment: [
      "Cloud or on-premise",
      "Multi-location support",
      "GPS-based and mobile attendance",
    ],
    integration: [
      "HRMS and payroll integration",
      "Leave, shift, and visitor management",
      "[Integration details]",
    ],
    media: [
      { id: "shot", title: "Product screenshot", note: "[Screenshot here]" },
      { id: "video", title: "Product video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
    page: { href: "/products/attendance", label: "Attendance page" },
  },
  "voice-bot": {
    technology: [
      "Natural speech-to-text and text-to-speech",
      "Built-in AI knowledge base",
    ],
    deployment: ["[Deployment options]"],
    integration: [
      "WhatsApp and phone call integration",
      "CRM integration and appointment booking",
    ],
    media: [
      { id: "shot", title: "Product screenshot", note: "[Screenshot here]" },
      { id: "video", title: "Product video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
  },
  "chat-bot": {
    technology: ["Intent understanding with LLM and NLP integration"],
    deployment: ["[Deployment options]"],
    integration: [
      "Website widget, app, WhatsApp, and Messenger",
      "Support ticketing",
    ],
    media: [
      { id: "shot", title: "Product screenshot", note: "[Screenshot here]" },
      { id: "video", title: "Product video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
  },
  "computer-vision": {
    technology: ["Vision models on the live feed"],
    deployment: ["Existing or new cameras", "[Deployment options]"],
    integration: ["Dashboard or notification", "[Integration options]"],
    media: [
      { id: "shot", title: "Product screenshot", note: "[Screenshot here]" },
      { id: "video", title: "Product video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
    page: { href: "/products/computer-vision", label: "Vision and industrial AI" },
  },
  "educational-robot": {
    technology: [
      "AI camera with object detection and face recognition",
      "ROS2 compatible, with a Python programming environment",
      "Raspberry Pi and Arduino support",
      "IoT, with Wi-Fi and mobile app control",
    ],
    deployment: ["Wi-Fi and mobile app control", "[Deployment options]"],
    integration: ["ROS2 compatible", "Wi-Fi and mobile app control"],
    media: [
      { id: "shot", title: "Product screenshot", note: "[Screenshot here]" },
      { id: "video", title: "Product video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
    page: { href: "/products/robotics#educational-robotics", label: "Educational robotics" },
  },
  "industrial-automation": {
    technology: [
      "Machine vision inspection",
      "PLC automation and robot integration",
      "Machine vision, PLC, robotics, and IoT on one line",
    ],
    deployment: ["[Deployment options]"],
    integration: [
      "PLC automation and robot integration",
      "MES integration",
      "OEE dashboard",
    ],
    media: [
      { id: "shot", title: "Line photo", note: "[Screenshot here]" },
      { id: "video", title: "Line video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
    page: { href: "/products/robotics#industrial-robotics", label: "Industrial robotics" },
  },
  "machine-vision": {
    technology: ["Industrial cameras and deep learning"],
    deployment: ["On the moving line", "[Deployment options]"],
    integration: ["[Integration options]"],
    media: [
      { id: "shot", title: "Inspection screenshot", note: "[Screenshot here]" },
      { id: "video", title: "Inspection video", note: "[Video here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
    page: { href: "/products/computer-vision#machine-vision", label: "On the vision page" },
  },
  "predictive-analytics": {
    technology: ["Forecast or segment models", "Interactive dashboards"],
    deployment: ["[Deployment options]"],
    integration: ["Systems you already run", "[Integration options]"],
    media: [
      { id: "shot", title: "Dashboard screenshot", note: "[Screenshot here]" },
      { id: "diagram", title: "Architecture diagram", note: "[Architecture diagram here]" },
    ],
  },
};

export function getProductSupplement(id: string) {
  return productSupplements[id];
}

export const productGroups = [
  {
    id: "ready",
    title: "Ready Products",
    description:
      "Attendance, voice, chat, and the educational robot. Each already has a defined workflow. The attendance system and the lab robot also have their own pages.",
    productIds: ["face-attendance", "voice-bot", "chat-bot", "educational-robot"],
    empty: "",
  },
  {
    id: "custom",
    title: "Custom AI Solutions",
    description:
      "Computer vision on a live feed, and predictive analytics on data a business already collects. Both are scoped to the operation. In-line inspection and the factory line are grouped under Industrial Solutions. The vision page covers camera events and inspection together.",
    productIds: ["computer-vision", "predictive-analytics"],
    empty: "",
  },
  {
    id: "industrial",
    title: "Industrial Solutions",
    description:
      "Factory automation and in-line inspection. Educational robotics stays separate, under Ready Products and on the robotics page.",
    productIds: ["industrial-automation", "machine-vision"],
    empty: "",
  },
  {
    id: "research",
    title: "Under Development / R&D",
    description:
      "This group is for work that is not listed as a product yet. Nothing is confirmed here.",
    productIds: [] as string[],
    empty:
      "[R&D product]. Names and descriptions will be added when a product is confirmed as in development.",
  },
] as const;

export function productsInGroup(ids: readonly string[]): Product[] {
  return ids.flatMap((id) => {
    const product = getProduct(id);
    return product ? [product] : [];
  });
}

export const productGuides = [
  { href: "/products/attendance", label: "Attendance system" },
  { href: "/products/computer-vision", label: "Computer vision" },
  { href: "/products/robotics", label: "Robotics" },
] as const;

export const attendancePage = {
  path: "/products/attendance",
  eyebrow: "Attendance",
  title: "AI Face Recognition Attendance System",
  description:
    "Smart. Secure. Contactless. Face detection, anti-spoofing, contactless attendance, dashboards, leave and shift management, and HRMS or payroll integration.",
  media: [
    { id: "screenshots", title: "Product screenshots", note: "[Screenshot here]" },
    { id: "camera", title: "Camera setup", note: "[Screenshot here]" },
    { id: "dashboard", title: "Attendance dashboard", note: "[Screenshot here]" },
    { id: "antispoof", title: "Anti-spoofing demo", note: "[Video here]" },
    { id: "registration-shot", title: "Employee registration", note: "[Screenshot here]" },
    { id: "architecture", title: "Cloud vs on-premise architecture", note: "[Architecture diagram here]" },
  ] satisfies MediaSlot[],
  registration: {
    title: "Employee registration workflow",
    intro:
      "Check-in matches a live face to an enrolled record. The registration screens are not published yet.",
    steps: [
      { label: "[Registration step]", detail: "[Employee registration workflow]" },
      {
        label: "Enrolled record",
        detail: "The record verification checks against. How a person is enrolled is not published yet.",
      },
      { label: "[Confirm]", detail: "[Employee registration workflow]" },
    ] satisfies FlowStep[],
  },
  recognition: {
    title: "Face recognition workflow",
    intro: "Camera, face detection, verification with anti-spoofing, then the dashboard.",
  },
  antiSpoof: {
    title: "Anti-spoofing",
    body: "Real-time face detection with anti-spoofing that blocks photo and video attempts.",
  },
  hardware: {
    title: "Hardware requirements",
    body: "[Hardware requirements]. Camera, compute, and network requirements are not published yet.",
  },
  architecture: {
    title: "Cloud vs on-premise architecture",
    body: "Multi-location support, cloud or on-premise. The diagram is not published yet.",
  },
  integration: {
    title: "Integration details",
    intro:
      "HRMS and payroll integration is part of the product. Leave, shift, and visitor management sit on the same system. Connection specifics are not published yet.",
    items: [
      "HRMS and payroll integration",
      "Leave, shift, and visitor management",
      "[Integration details]",
    ],
  },
  deployment: {
    title: "Approximate deployment process",
    intro:
      "A sequence taken from what the product already includes. Durations and site-specific steps are not published.",
    steps: [
      { label: "Camera", detail: "Entrance or mobile capture. [Deployment process]" },
      { label: "Enrollment", detail: "People need an enrolled record before a live face can be matched." },
      { label: "Cloud or on-premise", detail: "Cloud or on-premise, with multi-location support." },
      {
        label: "HRMS and payroll",
        detail: "HRMS and payroll integration, where that connection is required.",
      },
      { label: "[Go-live]", detail: "[Deployment process]" },
    ] satisfies FlowStep[],
  },
  sales: {
    label: "Contact Sales",
    href: "/contact?interest=products&product=face-attendance",
  },
};

/** Requested vision and industrial capabilities, plus detection already published on the products. */
export const visionShowcase = [
  {
    id: "defect-detection",
    title: "Defect detection",
    text: "Machine vision inspection and defect detection. Surface defect detection on the unit as it moves.",
  },
  {
    id: "ocr",
    title: "OCR",
    text: "OCR reading.",
  },
  {
    id: "object-counting",
    title: "Object counting",
    text: "Object counting on the line, and vehicle counting on a camera feed.",
  },
  {
    id: "ppe",
    title: "PPE detection",
    text: "PPE compliance detection.",
  },
  {
    id: "fire-smoke",
    title: "Fire and smoke detection",
    text: "Fire and smoke detection, with an alert from the live feed.",
  },
  {
    id: "anpr",
    title: "Number plate recognition",
    text: "ANPR — number plate recognition.",
  },
  {
    id: "worker-safety",
    title: "Worker safety monitoring",
    text: "PPE compliance detection, fall detection, and suspicious-activity alerts on the camera feed.",
  },
  {
    id: "product-inspection",
    title: "Product inspection",
    text: "Industrial cameras and deep learning inspect each unit as it moves, so a defect is caught before it leaves the line.",
  },
  {
    id: "packaging",
    title: "Packaging inspection",
    text: "Missing-part and packaging inspection.",
  },
  {
    id: "dimension",
    title: "Dimension measurement",
    text: "Dimension measurement.",
  },
  {
    id: "line-monitoring",
    title: "Production-line monitoring",
    text: "Production monitoring, an OEE dashboard, and MES integration.",
  },
  {
    id: "intrusion",
    title: "Intrusion detection",
    text: "Intrusion detection on a live camera feed.",
  },
  {
    id: "crowd",
    title: "Crowd monitoring",
    text: "Crowd monitoring.",
  },
  {
    id: "fall",
    title: "Fall detection",
    text: "Fall detection.",
  },
  {
    id: "suspicious",
    title: "Suspicious-activity alerts",
    text: "Suspicious-activity alerts.",
  },
  {
    id: "barcode",
    title: "Barcode and QR verification",
    text: "Barcode verification on the unit, and barcode and QR verification on the line.",
  },
  {
    id: "predictive-maintenance",
    title: "Predictive maintenance signals",
    text: "Predictive maintenance signals from the automation layer.",
  },
] as const;

export const visionPage = {
  path: "/products/computer-vision",
  eyebrow: "Computer vision",
  title: "Computer vision and industrial AI.",
  description:
    "Detection on a live camera feed, and inspection on the line. Defects, codes, counts, safety events, plates, and a view of production.",
  projects: [
    { id: "photo-1", title: "Project photo", note: "[Screenshot here]" },
    { id: "photo-2", title: "Project photo", note: "[Screenshot here]" },
    { id: "video-1", title: "Project video", note: "[Video here]" },
    { id: "video-2", title: "Project video", note: "[Video here]" },
  ] satisfies MediaSlot[],
  beforeAfter: [
    { id: "before", title: "Before inspection", note: "[Screenshot here]" },
    { id: "after", title: "After inspection", note: "[Screenshot here]" },
  ] satisfies MediaSlot[],
  architecture: {
    id: "architecture",
    title: "Architecture diagram",
    note: "[Architecture diagram here]",
  } satisfies MediaSlot,
};

export const educationalFocus = [
  {
    title: "AI Robot",
    text: "A robot for schools, colleges, and STEM labs. Students practice on hardware they can program.",
  },
  {
    title: "ROS2",
    text: "ROS2 compatible, with a Python programming environment.",
  },
  {
    title: "Computer Vision",
    text: "AI camera with object detection and face recognition.",
  },
  {
    title: "Python",
    text: "Python programming environment on the robot.",
  },
  {
    title: "IoT",
    text: "Computer vision, voice, IoT, and robotics. Wi-Fi and mobile app control, with Raspberry Pi and Arduino support.",
  },
  {
    title: "Voice and gesture control",
    text: "Voice control, gesture recognition, obstacle avoidance, and line following.",
  },
  {
    title: "Engineering college and STEM",
    text: "Schools, engineering colleges, STEM labs, robotics clubs, and AI training institutes.",
  },
] as const;

export const industrialFocus = [
  {
    title: "Machine vision",
    text: "Machine vision inspection and defect detection.",
  },
  {
    title: "PLC integration",
    text: "PLC automation and robot integration.",
  },
  {
    title: "Robot integration",
    text: "Integration of robotic cells with PLC, IoT, and production software.",
  },
  {
    title: "Factory automation",
    text: "Automation designed around the factory floor: inspection, control, robot integration, and a view of production.",
  },
  {
    title: "Production monitoring",
    text: "Production monitoring, OEE dashboard, and MES integration.",
  },
  {
    title: "Inspection systems",
    text: "A vision inspection station that reads the unit — surface, mark, code, dimension, count — and flags what fails while the line is still running.",
  },
] as const;

export const roboticsPage = {
  path: "/products/robotics",
  eyebrow: "Robotics",
  title: "Educational robotics and industrial robotics.",
  description:
    "Two separate lines of work. A programmable robot for labs and STEM, and factory automation with machine vision, PLC, and inspection.",
};
