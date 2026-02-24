"use client";

import { useState } from "react";
import { checklistData } from "@/lib/data";

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

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const totalItems = checklistData.reduce((sum, g) => sum + g.items.length, 0);
  const checkedCount = checked.size;

  return (
    <div>
      {/* Hero */}
      <section style={{ padding:"48px 20px 32px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ fontSize:"3rem", marginBottom:"12px" }}>✅</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.5rem,4vw,2.2rem)", color:"#3a3028", marginBottom:"10px" }}>
            Checklist Chuẩn Bị
          </h1>
          <p style={{ color:"#8c7b6e", maxWidth:"480px", margin:"0 auto", lineHeight:1.65, fontSize:"0.9rem" }}>
            Danh sách đồ cần mua và chuẩn bị cho từng giai đoạn — tick để theo dõi tiến độ.
          </p>
        </div>
      </section>

      {/* Progress bar */}
      <section style={{ padding:"0 20px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ ...inset, padding:"14px 18px" }}>
            <div className="flex justify-between items-center" style={{ marginBottom:"8px" }}>
              <span style={{ fontWeight:800, fontSize:"0.85rem", color:"#3a3028" }}>
                Tiến độ chuẩn bị
              </span>
              <span style={{ fontWeight:800, fontSize:"0.85rem", color:"#d4a0a7" }}>
                {checkedCount}/{totalItems}
              </span>
            </div>
            <div style={{ background:"#ddd8d2", borderRadius:"10px", height:"10px", overflow:"hidden" }}>
              <div style={{
                background:"linear-gradient(to right, #d4a0a7, #c08890)",
                height:"100%", borderRadius:"10px",
                width: `${totalItems > 0 ? (checkedCount / totalItems * 100) : 0}%`,
                transition:"width 0.3s ease",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Checklist groups */}
      <section style={{ padding:"0 20px 56px" }}>
        <div className="max-w-4xl mx-auto" style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
          {checklistData.map(group => {
            const groupChecked = group.items.filter((_, j) => checked.has(`${group.stage}-${j}`)).length;
            return (
              <div key={group.stage} style={{ ...neu, padding:"20px 18px", borderTop:`3px solid ${group.color}` }}>
                <div className="flex items-center justify-between" style={{ marginBottom:"14px" }}>
                  <h2 style={{ fontWeight:800, fontSize:"1rem", color:"#3a3028", display:"flex", alignItems:"center", gap:"8px" }}>
                    <span style={{ fontSize:"1.3rem" }}>{group.emoji}</span> {group.stage}
                  </h2>
                  <span style={{ fontSize:"0.72rem", fontWeight:700, color: group.color }}>
                    {groupChecked}/{group.items.length}
                  </span>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                  {group.items.map((item, j) => {
                    const key = `${group.stage}-${j}`;
                    const isChecked = checked.has(key);
                    return (
                      <button key={j} onClick={() => toggle(key)}
                        style={{
                          ...(isChecked ? inset : { ...neu, borderRadius:"14px" }),
                          padding:"10px 14px", border:"none", cursor:"pointer",
                          display:"flex", alignItems:"center", gap:"10px", textAlign:"left", width:"100%",
                          opacity: isChecked ? 0.6 : 1,
                          borderRadius:"14px",
                        }}>
                        <span style={{
                          width:22, height:22, borderRadius:"6px", flexShrink:0,
                          border: isChecked ? "none" : `2px solid ${group.color}`,
                          background: isChecked ? group.color : "transparent",
                          display:"flex", alignItems:"center", justifyContent:"center",
                          color:"#fff", fontSize:"0.7rem", fontWeight:900,
                        }}>
                          {isChecked ? "✓" : ""}
                        </span>
                        <span style={{
                          fontSize:"0.82rem", color: isChecked ? "#8c7b6e" : "#3a3028",
                          fontWeight: item.essential ? 700 : 500,
                          textDecoration: isChecked ? "line-through" : "none",
                        }}>
                          {item.name}
                          {item.essential && (
                            <span style={{ fontSize:"0.6rem", color: group.color, fontWeight:800, marginLeft:"6px" }}>
                              CẦN THIẾT
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
