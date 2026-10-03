import { ImageResponse } from "next/og";

export const alt =
  "AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India — AI, computer vision, and robotics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090f",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#8fd8ea" }}>
          AI LEAD VISION
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 52, lineHeight: 1.08, letterSpacing: -1.5 }}>
          <span>AI, Computer Vision &</span>
          <span>Robotics Solutions</span>
          <span>for Business.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
          AI Lead Vision Pvt Ltd · Bengaluru, Karnataka, India
        </div>
      </div>
    ),
    { ...size },
  );
}
