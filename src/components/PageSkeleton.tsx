import React from "react";

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};

export default function PageSkeleton() {
  return (
    <div style={{ padding: "48px 20px 64px" }}>
      <div className="max-w-4xl mx-auto">
        {/* Title shimmer */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%", margin: "0 auto 14px",
            background: "linear-gradient(90deg, #e2ded9 25%, #eae6e1 50%, #e2ded9 75%)",
            backgroundSize: "400% 100%",
            animation: "shimmer 1.4s ease infinite",
          }} />
          <div style={{
            width: "60%", height: 24, borderRadius: 12, margin: "0 auto 10px",
            background: "linear-gradient(90deg, #e2ded9 25%, #eae6e1 50%, #e2ded9 75%)",
            backgroundSize: "400% 100%",
            animation: "shimmer 1.4s ease infinite",
          }} />
          <div style={{
            width: "40%", height: 14, borderRadius: 8, margin: "0 auto",
            background: "linear-gradient(90deg, #e2ded9 25%, #eae6e1 50%, #e2ded9 75%)",
            backgroundSize: "400% 100%",
            animation: "shimmer 1.4s ease infinite",
          }} />
        </div>
        {/* Cards shimmer */}
        <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 20 }}>
          {[1, 2].map(i => (
            <div key={i} style={{
              ...neu, height: 80,
              background: "linear-gradient(90deg, #e2ded9 25%, #eae6e1 50%, #e2ded9 75%)",
              backgroundSize: "400% 100%",
              animation: "shimmer 1.4s ease infinite",
            }} />
          ))}
        </div>
        {/* Main body shimmer */}
        <div style={{
          ...neu, height: 300,
          background: "linear-gradient(90deg, #e2ded9 25%, #eae6e1 50%, #e2ded9 75%)",
          backgroundSize: "400% 100%",
          animation: "shimmer 1.4s ease infinite",
        }} />
        <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      </div>
    </div>
  );
}
