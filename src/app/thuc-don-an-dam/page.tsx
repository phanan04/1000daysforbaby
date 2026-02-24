"use client";

import { useState } from "react";
import { weaningMenus } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedPages from "@/components/RelatedPages";

const neu: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius:"20px",
};
const inset: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius:"16px",
};

const tabColors = ["#d4a0a7","#c8836a","#b89a5e","#6b9bd2"];

export default function WeaningPage() {
  const [activeTab, setActiveTab] = useState(0);
  const menu = weaningMenus[activeTab];
  const color = tabColors[activeTab];

  return (
    <div>
      <Breadcrumb items={[{ label: "Thực Đơn Ăn Dặm" }]} />

      {/* Hero */}
      <section style={{ padding:"48px 20px 32px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ fontSize:"3rem", marginBottom:"12px" }}>🍽️</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.5rem,4vw,2.2rem)", color:"#3a3028", marginBottom:"10px" }}>
            Thực Đơn Ăn Dặm Mẫu
          </h1>
          <p style={{ color:"#8c7b6e", maxWidth:"480px", margin:"0 auto", lineHeight:1.65, fontSize:"0.9rem" }}>
            Gợi ý thực đơn theo tuần cho bé từ 6 đến 24 tháng, phù hợp khẩu vị Việt Nam.
          </p>
        </div>
      </section>

      {/* Age tabs */}
      <section style={{ padding:"0 20px 20px" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {weaningMenus.map((m, i) => (
            <button key={m.ageRange} onClick={() => setActiveTab(i)}
              style={{
                ...(i === activeTab ? inset : neu),
                padding:"8px 18px", border:"none", cursor:"pointer",
                borderRadius:"30px", fontWeight:700, fontSize:"0.8rem",
                color: i === activeTab ? tabColors[i] : "#8c7b6e",
              }}>
              {m.emoji} {m.ageRange}
            </button>
          ))}
        </div>
      </section>

      {/* Menu content */}
      <section style={{ padding:"0 20px 40px" }}>
        <div className="max-w-4xl mx-auto">
          {/* Title + principle */}
          <div style={{ ...neu, padding:"20px 18px", marginBottom:"16px", borderTop:`3px solid ${color}` }}>
            <h2 style={{ fontWeight:800, fontSize:"1.1rem", color:"#3a3028", marginBottom:"6px" }}>
              {menu.emoji} {menu.title}
            </h2>
            <p style={{ fontSize:"0.83rem", color:"#5a4a3c", lineHeight:1.6, margin:0 }}>
              <strong style={{ color }}>Nguyên tắc:</strong> {menu.principle}
            </p>
          </div>

          {/* Sample days */}
          <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"20px" }}>
            {menu.sampleDays.map(day => (
              <div key={day.day} style={{ ...neu, padding:"16px", borderLeft:`3px solid ${color}` }}>
                <h3 style={{ fontWeight:800, fontSize:"0.88rem", color, marginBottom:"10px" }}>
                  📅 {day.day}
                </h3>
                <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                  {day.meals.map((meal, j) => (
                    <div key={j} style={{ ...inset, padding:"8px 12px", display:"flex", gap:"10px", alignItems:"center" }}>
                      <span style={{ fontWeight:800, fontSize:"0.7rem", color, minWidth:"50px" }}>{meal.time}</span>
                      <span style={{ fontSize:"0.8rem", color:"#5a4a3c", lineHeight:1.5 }}>{meal.menu}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div style={{ ...neu, padding:"18px 16px" }}>
            <h3 style={{ fontWeight:800, fontSize:"0.9rem", color:"#3a3028", marginBottom:"10px" }}>⚠️ Lưu ý quan trọng</h3>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:"6px" }}>
              {menu.notes.map((note, i) => (
                <li key={i} style={{ ...inset, padding:"10px 14px", fontSize:"0.8rem", color:"#5a4a3c", lineHeight:1.55,
                                     display:"flex", gap:"8px", alignItems:"flex-start" }}>
                  <span style={{ color, fontWeight:900, flexShrink:0 }}>•</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/thuc-don-an-dam" />
    </div>
  );
}
