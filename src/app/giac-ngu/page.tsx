"use client";

import { useState } from "react";
import { sleepChartData } from "@/lib/data";
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

export default function SleepPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const data = sleepChartData[activeIdx];

  return (
    <div>
      <Breadcrumb items={[{ label: "Bảng Giấc Ngủ" }]} />

      {/* Hero */}
      <section style={{ padding:"48px 20px 32px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ fontSize:"3rem", marginBottom:"12px" }}>😴</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.5rem,4vw,2.2rem)", color:"#3a3028", marginBottom:"10px" }}>
            Bảng Giấc Ngủ Chuẩn
          </h1>
          <p style={{ color:"#8c7b6e", maxWidth:"480px", margin:"0 auto", lineHeight:1.65, fontSize:"0.9rem" }}>
            Số giờ ngủ, số giấc và lịch ngủ khuyến nghị theo từng tháng tuổi.
          </p>
        </div>
      </section>

      {/* Age selector */}
      <section style={{ padding:"0 20px 20px" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {sleepChartData.map((s, i) => (
            <button key={s.ageRange} onClick={() => setActiveIdx(i)}
              style={{
                ...(i === activeIdx ? inset : neu),
                padding:"8px 16px", border:"none", cursor:"pointer",
                borderRadius:"30px", fontWeight:700, fontSize:"0.78rem",
                color: i === activeIdx ? "#6b7bb5" : "#8c7b6e",
              }}>
              {s.emoji} {s.ageRange}
            </button>
          ))}
        </div>
      </section>

      {/* Sleep detail */}
      <section style={{ padding:"0 20px 20px" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div style={{ ...inset, padding:"16px 12px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.2rem", color:"#6b7bb5" }}>{data.totalHours}</div>
              <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Tổng giấc ngủ</div>
            </div>
            <div style={{ ...inset, padding:"16px 12px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.2rem", color:"#d4a0a7" }}>{data.nightHours}</div>
              <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Ngủ đêm</div>
            </div>
            <div style={{ ...inset, padding:"16px 12px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.2rem", color:"#c8836a" }}>{data.naps}</div>
              <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Giấc ngày</div>
            </div>
            <div style={{ ...inset, padding:"16px 12px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.2rem", color:"#b89a5e" }}>{data.napDuration}</div>
              <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Mỗi giấc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual sleep bar */}
      <section style={{ padding:"0 20px 20px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ ...neu, padding:"18px 16px" }}>
            <h3 style={{ fontWeight:800, fontSize:"0.88rem", color:"#3a3028", marginBottom:"12px" }}>🌙 Phân bổ giấc ngủ trong 24h</h3>
            <div style={{ display:"flex", borderRadius:"10px", overflow:"hidden", height:"30px" }}>
              {(() => {
                const nightNum = parseFloat(data.nightHours.replace("h",""));
                const totalNum = parseFloat(data.totalHours.replace("h",""));
                const napNum = totalNum - nightNum;
                const wakeNum = 24 - totalNum;
                return (
                  <>
                    <div style={{ width:`${(nightNum/24)*100}%`, background:"#6b7bb5", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:"0.6rem", color:"#fff", fontWeight:800 }}>Đêm</span>
                    </div>
                    <div style={{ width:`${(napNum/24)*100}%`, background:"#d4a0a7", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:"0.6rem", color:"#fff", fontWeight:800 }}>Ngày</span>
                    </div>
                    <div style={{ width:`${(wakeNum/24)*100}%`, background:"#ddd8d2", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:"0.6rem", color:"#8c7b6e", fontWeight:800 }}>Thức</span>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding:"0 20px 20px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ ...neu, padding:"18px 16px" }}>
            <h3 style={{ fontWeight:800, fontSize:"0.9rem", color:"#3a3028", marginBottom:"12px" }}>💡 Mẹo giấc ngủ giai đoạn {data.ageRange}</h3>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:"8px" }}>
              {data.tips.map((tip, i) => (
                <li key={i} style={{ ...inset, padding:"10px 14px", fontSize:"0.82rem", color:"#5a4a3c", lineHeight:1.55 }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Overview table */}
      <section style={{ padding:"0 20px 56px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ ...neu, padding:"18px 16px", overflowX:"auto" }}>
            <h3 style={{ fontWeight:800, fontSize:"0.9rem", color:"#3a3028", marginBottom:"14px" }}>📊 Tổng quan tất cả giai đoạn</h3>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.78rem" }}>
              <thead>
                <tr style={{ borderBottom:"2px solid #d4d0cc" }}>
                  <th style={{ textAlign:"left", padding:"8px 6px", fontWeight:800, color:"#3a3028" }}>Tháng tuổi</th>
                  <th style={{ textAlign:"center", padding:"8px 6px", fontWeight:800, color:"#6b7bb5" }}>Tổng</th>
                  <th style={{ textAlign:"center", padding:"8px 6px", fontWeight:800, color:"#d4a0a7" }}>Đêm</th>
                  <th style={{ textAlign:"center", padding:"8px 6px", fontWeight:800, color:"#c8836a" }}>Giấc ngày</th>
                </tr>
              </thead>
              <tbody>
                {sleepChartData.map((s, i) => (
                  <tr key={i} style={{
                    borderBottom:"1px solid #e0dcd7",
                    background: i === activeIdx ? "rgba(212,160,167,0.1)" : "transparent",
                    cursor:"pointer",
                  }} onClick={() => setActiveIdx(i)}>
                    <td style={{ padding:"8px 6px", fontWeight: i === activeIdx ? 800 : 500, color:"#3a3028" }}>
                      {s.emoji} {s.ageRange}
                    </td>
                    <td style={{ textAlign:"center", padding:"8px 6px", color:"#6b7bb5", fontWeight:700 }}>{s.totalHours}</td>
                    <td style={{ textAlign:"center", padding:"8px 6px", color:"#d4a0a7", fontWeight:700 }}>{s.nightHours}</td>
                    <td style={{ textAlign:"center", padding:"8px 6px", color:"#c8836a", fontWeight:700 }}>{s.naps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/giac-ngu" />
    </div>
  );
}
