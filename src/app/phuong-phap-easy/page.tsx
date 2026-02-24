"use client";

import { useState } from "react";
import { easySchedules } from "@/lib/data";
import Link from "next/link";
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

const letterColors: Record<string, string> = {
  E: "#d4a0a7",
  A: "#c8836a",
  S: "#6b7bb5",
  Y: "#b89a5e",
};

export default function EasyPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const schedule = easySchedules[activeIdx];

  return (
    <div>
      <Breadcrumb items={[{ label: "Phương Pháp EASY" }]} />

      {/* Hero */}
      <section style={{ padding:"48px 20px 32px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ fontSize:"3rem", marginBottom:"12px" }}>📋</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.5rem,4vw,2.2rem)", color:"#3a3028", marginBottom:"10px" }}>
            Phương Pháp EASY
          </h1>
          <p style={{ color:"#8c7b6e", maxWidth:"500px", margin:"0 auto 8px", lineHeight:1.65, fontSize:"0.9rem" }}>
            Eat → Activity → Sleep → Your time. Phương pháp của Tracy Hogg giúp bé có lịch sinh hoạt ổn định, mẹ có thời gian riêng.
          </p>
        </div>
      </section>

      {/* EASY explained */}
      <section style={{ padding:"0 20px 32px" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { letter: "E", label: "Eat", vi: "Ăn", desc: "Bú mẹ hoặc ăn dặm" },
            { letter: "A", label: "Activity", vi: "Hoạt động", desc: "Chơi, tummy time, khám phá" },
            { letter: "S", label: "Sleep", vi: "Ngủ", desc: "Ngủ đúng lúc, đủ giấc" },
            { letter: "Y", label: "Your time", vi: "Mẹ", desc: "Thời gian nghỉ ngơi cho mẹ" },
          ].map(item => (
            <div key={item.letter} style={{ ...neu, padding:"20px 14px", textAlign:"center",
                                            borderTop:`3px solid ${letterColors[item.letter]}` }}>
              <div style={{ fontSize:"2rem", fontWeight:900, color: letterColors[item.letter], marginBottom:"4px" }}>
                {item.letter}
              </div>
              <div style={{ fontWeight:800, fontSize:"0.85rem", color:"#3a3028", marginBottom:"2px" }}>{item.vi}</div>
              <div style={{ fontSize:"0.7rem", color:"#8c7b6e" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Age selector */}
      <section style={{ padding:"0 20px 12px" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {easySchedules.map((s, i) => (
              <button key={s.ageRange} onClick={() => setActiveIdx(i)}
                style={{
                  ...(i === activeIdx ? inset : neu),
                  padding:"8px 16px", border:"none", cursor:"pointer",
                  borderRadius:"30px", fontWeight:700, fontSize:"0.78rem",
                  color: i === activeIdx ? "#c08890" : "#8c7b6e",
                }}>
                {s.emoji} {s.ageRange}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule detail */}
      <section style={{ padding:"20px 20px 40px" }}>
        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3" style={{ marginBottom:"20px" }}>
            <div style={{ ...inset, padding:"14px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.1rem", color:"#d4a0a7" }}>{schedule.totalSleep}</div>
              <div style={{ fontSize:"0.7rem", color:"#8c7b6e", fontWeight:600 }}>Tổng giấc ngủ</div>
            </div>
            <div style={{ ...inset, padding:"14px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.1rem", color:"#c8836a" }}>{schedule.naps}</div>
              <div style={{ fontSize:"0.7rem", color:"#8c7b6e", fontWeight:600 }}>Giấc ngày</div>
            </div>
          </div>

          {/* EASY routine cards */}
          <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"24px" }}>
            {schedule.easyRoutine.map(step => (
              <div key={step.letter} style={{ ...neu, padding:"18px 16px", display:"flex", gap:"14px", alignItems:"flex-start",
                                              borderLeft:`4px solid ${letterColors[step.letter]}` }}>
                <div style={{
                  width:40, height:40, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
                  background: letterColors[step.letter], color:"#fff", fontWeight:900, fontSize:"1.1rem", flexShrink:0,
                }}>
                  {step.letter}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:800, fontSize:"0.9rem", color:"#3a3028", marginBottom:"2px" }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize:"0.72rem", fontWeight:700, color: letterColors[step.letter], marginBottom:"6px" }}>
                    ⏱ {step.duration}
                  </div>
                  <p style={{ fontSize:"0.82rem", color:"#5a4a3c", lineHeight:1.6, margin:0 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div style={{ ...neu, padding:"20px 18px" }}>
            <h3 style={{ fontWeight:800, fontSize:"0.95rem", color:"#3a3028", marginBottom:"12px" }}>💡 Mẹo cho giai đoạn này</h3>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:"8px" }}>
              {schedule.tips.map((tip, i) => (
                <li key={i} style={{ ...inset, padding:"10px 14px", fontSize:"0.82rem", color:"#5a4a3c", lineHeight:1.55 }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/phuong-phap-easy" />
    </div>
  );
}
