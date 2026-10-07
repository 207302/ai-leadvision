/**
 * Role titles from the redesign brief. Descriptions and live openings are not confirmed.
 */

export const careersPage = {
  path: "/careers",
  eyebrow: "Careers",
  title: "Build the Future with AI Lead Vision",
  description:
    "Engineering roles across AI, computer vision, robotics, and software. Confirm which of these are open before applying.",
  note: "Hiring is a separate practice from the product line. Applications go to the HR address.",
} as const;

export const careerHighlights = [
  { title: "Real Projects", text: "Work on systems meant to run in a business, a lab, or on a line." },
  { title: "Learning & Development", text: "The company also runs training programmes. TODO: confirm with client — what learning support employees receive." },
  { title: "Growth Opportunities", text: "TODO: confirm with client — career paths are not published yet." },
  { title: "Innovative Work Culture", text: "TODO: confirm with client — culture details are not published yet." },
] as const;

export const openRoles = [
  { id: "ai-ml-engineer", title: "AI/ML Engineer", note: "TODO: confirm with client — description, location, and whether this role is open." },
  { id: "computer-vision-engineer", title: "Computer Vision Engineer", note: "TODO: confirm with client — description, location, and whether this role is open." },
  { id: "robotics-engineer", title: "Robotics Engineer", note: "TODO: confirm with client — description, location, and whether this role is open." },
  { id: "python-developer", title: "Python Developer", note: "TODO: confirm with client — description, location, and whether this role is open." },
  { id: "embedded-engineer", title: "Embedded Engineer", note: "TODO: confirm with client — description, location, and whether this role is open." },
  { id: "software-test-engineer", title: "Software Test Engineer", note: "TODO: confirm with client — description, location, and whether this role is open." },
] as const;
