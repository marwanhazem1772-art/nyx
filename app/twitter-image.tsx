import { ImageResponse } from "next/og";

export const alt = "NYX Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 85% 86%, rgba(37, 72, 255, 0.34), transparent 30%), linear-gradient(150deg, #050507, #101423)",
          color: "#ffffff",
          padding: "72px 86px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "58%" }}>
          <div style={{ fontSize: 22, letterSpacing: "0.28em", color: "#91a4ff" }}>NYX STUDIO</div>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600 }}>Creative systems built for attention.</div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "#d4dbf4" }}>
            Paid ads, AI visuals, websites, and automation for modern growth.
          </div>
        </div>
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 999,
            border: "4px solid #2344ff",
            background: "#f0f2f6",
            color: "#050507",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 106, fontWeight: 600, letterSpacing: "0.02em" }}>nyx</div>
          <div style={{ fontSize: 32, letterSpacing: "0.34em", color: "#2040e0", textTransform: "lowercase" }}>
            studio
          </div>
        </div>
      </div>
    ),
    size
  );
}
