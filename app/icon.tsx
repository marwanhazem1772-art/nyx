import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eff1f4",
          position: "relative",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: 430,
            height: 430,
            borderRadius: 999,
            border: "6px solid #1f33d6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
          }}
        >
          <div style={{ fontSize: 132, fontWeight: 600, color: "#050507", letterSpacing: "0.02em" }}>nyx</div>
          <div style={{ fontSize: 44, color: "#1f33d6", letterSpacing: "0.35em", textTransform: "lowercase" }}>
            studio
          </div>
        </div>
      </div>
    ),
    size
  );
}
