import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2f3f6",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: 154,
            height: 154,
            borderRadius: 999,
            border: "3px solid #1f33d6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 50, fontWeight: 600, color: "#050507", letterSpacing: "0.02em" }}>nyx</div>
          <div style={{ fontSize: 16, color: "#1f33d6", letterSpacing: "0.34em", textTransform: "lowercase" }}>
            studio
          </div>
        </div>
      </div>
    ),
    size
  );
}
