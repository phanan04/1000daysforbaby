import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";
export const alt = "1000 Ngày Đầu Đời — Cẩm Nang Chăm Sóc Mẹ & Bé";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#eae6e1",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -80, left: -80,
          width: 320, height: 320, borderRadius: "50%",
          background: "rgba(212,160,167,0.15)", display: "flex",
        }} />
        <div style={{
          position: "absolute", bottom: -100, right: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(200,175,188,0.12)", display: "flex",
        }} />
        <div style={{
          position: "absolute", top: 40, right: 80,
          width: 160, height: 160, borderRadius: "50%",
          background: "rgba(245,197,163,0.18)", display: "flex",
        }} />

        {/* Card */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#eae6e1",
          borderRadius: 40,
          padding: "60px 80px",
          boxShadow: "20px 20px 48px rgba(180,170,155,0.75), -20px -20px 48px rgba(255,255,255,0.95)",
          gap: 0,
        }}>
          {/* Emoji logo */}
          <div style={{
            fontSize: 96,
            marginBottom: 24,
            display: "flex",
          }}>🌸</div>

          {/* Title */}
          <div style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#3a3028",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: 16,
            display: "flex",
          }}>
            1000 Ngày Đầu Đời
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 32,
            color: "#c08890",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 36,
            display: "flex",
          }}>
            Cẩm nang chăm sóc mẹ &amp; bé từ thai kỳ đến 2 tuổi
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {["🤰 Thai Kỳ", "👶 Sơ Sinh", "🍽️ Ăn Dặm", "😴 Giấc Ngủ", "💉 Tiêm Chủng"].map((tag) => (
              <div key={tag} style={{
                background: "#eae6e1",
                borderRadius: 30,
                padding: "10px 24px",
                fontSize: 24,
                fontWeight: 700,
                color: "#8c7b6e",
                boxShadow: "6px 6px 14px rgba(180,170,155,0.6), -6px -6px 14px rgba(255,255,255,0.85)",
                display: "flex",
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Domain */}
        <div style={{
          position: "absolute",
          bottom: 32,
          fontSize: 24,
          color: "#b0a090",
          fontWeight: 600,
          display: "flex",
        }}>
          1000daysforbabies.io.vn
        </div>
      </div>
    ),
    { ...size }
  );
}
