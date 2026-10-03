/** Technologies the owner has listed. Do not add items that are not in this file. */

export const technologyStack = {
  eyebrow: "Technology stack",
  title: "Technology stack",
  support: "Languages, libraries, and methods used across AI, vision, robotics, software, and automotive work.",
  groups: [
    {
      id: "ai-ml",
      title: "AI/ML",
      items: ["Python", "PyTorch", "TensorFlow", "OpenCV", "YOLO"],
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      items: ["OCR", "Object Detection", "Image Processing", "Video Analytics"],
    },
    {
      id: "robotics",
      title: "Robotics",
      items: ["ROS2", "Raspberry Pi", "Arduino", "IoT", "Sensors"],
    },
    {
      id: "software",
      title: "Software",
      items: ["Python", "C/C++", "Web Applications", "APIs"],
    },
    {
      id: "automotive",
      title: "Automotive",
      items: ["AUTOSAR", "CAN", "CAN FD", "UDS", "DoIP", "Embedded Software Testing"],
    },
  ],
} as const;
