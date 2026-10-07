/**
 * Technologies the owner has listed, grouped the way the redesign brief asks.
 * Items already published (automotive protocols, boards, image processing, web applications)
 * stay inside the closest cluster.
 */

export const technologyStack = {
  eyebrow: "Technology",
  title: "Technology",
  support:
    "The stack behind the products and the custom systems: models, vision, robots and embedded software, and the applications around them.",
  groups: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      items: ["Python", "PyTorch", "TensorFlow", "YOLO", "ML", "Deep Learning", "Generative AI"],
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      items: [
        "OpenCV",
        "OCR",
        "Object Detection",
        "Classification",
        "Segmentation",
        "Tracking",
        "Video Analytics",
        "Image Processing",
      ],
    },
    {
      id: "robotics-embedded",
      title: "Robotics & Embedded",
      items: [
        "ROS2",
        "Sensors",
        "Navigation",
        "Edge AI",
        "Control systems",
        "Embedded C/C++",
        "Raspberry Pi",
        "Arduino",
        "IoT",
        "AUTOSAR",
        "CAN",
        "CAN FD",
        "UDS",
        "DoIP",
        "Embedded Software Testing",
      ],
    },
    {
      id: "enterprise-software",
      title: "Enterprise & Software",
      items: ["APIs", "Databases", "Dashboards", "Cloud", "Automation", "Custom applications", "Web Applications"],
    },
  ],
} as const;
