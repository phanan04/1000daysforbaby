"use client";

import { use, useState } from "react";
import { stages } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

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

const colors = ["#d4a0a7","#c8836a","#b89a5e","#d4a0a7"];

/* Split item text: bold the key part, lighter the detail */
function HighlightItem({ text, color }: { text: string; color: string }) {
  // Split at first `:` or first `.` (whichever is earlier), or first `–`
  const sep = [text.indexOf(": "), text.indexOf(". "), text.indexOf(" – ")]
    .filter(i => i > 0 && i < 60);
  if (sep.length === 0) {
    return <span style={{ fontSize:"0.83rem", color:"#5a4a3c", lineHeight:1.6 }}>{text}</span>;
  }
  const splitAt = Math.min(...sep);
  const delimChar = text[splitAt];
  const key = text.slice(0, splitAt + 1);
  const detail = text.slice(splitAt + 1).trim();
  return (
    <span style={{ fontSize:"0.83rem", lineHeight:1.6 }}>
      <strong style={{ color:"#3a3028" }}>{key}</strong>{" "}
      <span style={{ color:"#7c6b5e" }}>{detail}</span>
    </span>
  );
}

export default function StagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [openSections, setOpenSections] = useState<Set<number>>(() => new Set([0]));
  const idx = stages.findIndex(s => s.slug === slug);
  if (idx === -1) return notFound();
  const stage = stages[idx];
  const color = colors[idx];

  const toggle = (i: number) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const expandAll = () => setOpenSections(new Set(stage.sections.map((_, i) => i)));
  const collapseAll = () => setOpenSections(new Set());

  // Count stats
  const totalTips = stage.sections.reduce((sum, s) => sum + s.items.length, 0);
  const dangerSection = stage.sections.findIndex(s => s.title.includes("🚨"));

  return (
    <div>
      {/* Back */}
      <div style={{ padding:"20px 20px 0" }} className="max-w-4xl mx-auto">
        <Link href="/" style={{ ...neu, display:"inline-flex", alignItems:"center", gap:"8px",
                                 padding:"8px 18px", textDecoration:"none", borderRadius:"30px",
                                 color:"#7c6b5e", fontWeight:700, fontSize:"0.82rem" }}>
          ← Trang chủ
        </Link>
      </div>

      {/* Hero card */}
      <section style={{ padding:"24px 20px 20px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ background:"#eae6e1",
                        boxShadow:"10px 10px 24px rgba(180,170,155,0.75),-10px -10px 24px rgba(255,255,255,0.95)",
                        borderRadius:"28px", padding:"28px 24px",
                        borderTop:`4px solid ${color}` }}>
            <div className="flex items-center gap-4" style={{ marginBottom:"12px" }}>
              <div style={{ fontSize:"3rem", lineHeight:1 }}>{stage.emoji}</div>
              <div>
                <h1 style={{ fontWeight:800, fontSize:"clamp(1.4rem,4vw,2rem)", color:"#3a3028", lineHeight:1.2 }}>
                  {stage.title}
                </h1>
                <div style={{ ...inset, display:"inline-block", padding:"3px 14px",
                               fontSize:"0.72rem", fontWeight:800, color, marginTop:"6px" }}>
                  {stage.weeks}
                </div>
              </div>
            </div>
            <p style={{ color:"#8c7b6e", lineHeight:1.65, fontSize:"0.88rem" }}>
              {stage.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section style={{ padding:"0 20px 20px" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-3">
          <div style={{ ...inset, padding:"12px 10px", textAlign:"center" }}>
            <div style={{ fontWeight:800, fontSize:"1.3rem", color }}>{stage.sections.length}</div>
            <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Chủ đề</div>
          </div>
          <div style={{ ...inset, padding:"12px 10px", textAlign:"center" }}>
            <div style={{ fontWeight:800, fontSize:"1.3rem", color }}>{totalTips}</div>
            <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Lời khuyên</div>
          </div>
          <div style={{ ...inset, padding:"12px 10px", textAlign:"center" }}>
            <div style={{ fontWeight:800, fontSize:"1.3rem", color:"#d46a6a" }}>⚠️</div>
            <div style={{ fontSize:"0.68rem", color:"#8c7b6e", fontWeight:600 }}>Cảnh báo</div>
          </div>
        </div>
      </section>

      {/* Expand/Collapse controls */}
      <div style={{ padding:"0 20px 12px" }} className="max-w-4xl mx-auto flex gap-2 justify-end">
        <button onClick={expandAll}
          style={{ background:"transparent", border:"none", cursor:"pointer",
                   fontSize:"0.75rem", fontWeight:700, color:"#8c7b6e" }}>
          Mở tất cả
        </button>
        <span style={{ color:"#ccc" }}>|</span>
        <button onClick={collapseAll}
          style={{ background:"transparent", border:"none", cursor:"pointer",
                   fontSize:"0.75rem", fontWeight:700, color:"#8c7b6e" }}>
          Thu gọn
        </button>
      </div>

      {/* Accordion sections */}
      <section style={{ padding:"0 20px 40px" }}>
        <div className="max-w-4xl mx-auto" style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
          {stage.sections.map((sec, i) => {
            const isOpen = openSections.has(i);
            const isDanger = i === dangerSection;

            return (
              <div key={sec.title} style={{
                ...neu,
                borderLeft: isDanger ? "4px solid #d46a6a" : `3px solid ${color}`,
                overflow: "hidden",
              }}>
                {/* Section header — always visible */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width:"100%", padding:"16px 20px", border:"none", cursor:"pointer",
                    background:"transparent", display:"flex", alignItems:"center", gap:"12px",
                    textAlign:"left",
                  }}>
                  <span style={{ fontSize:"1.3rem", flexShrink:0 }}>{sec.icon}</span>
                  <div style={{ flex:1 }}>
                    <h2 style={{
                      fontWeight:800, fontSize:"0.95rem", margin:0,
                      color: isDanger ? "#d46a6a" : "#3a3028",
                    }}>
                      {sec.title}
                    </h2>
                    <span style={{ fontSize:"0.7rem", color:"#8c7b6e", fontWeight:600 }}>
                      {sec.items.length} mục
                    </span>
                  </div>
                  <span style={{
                    fontSize:"1rem", color:"#8c7b6e", flexShrink:0,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition:"transform 0.2s",
                  }}>
                    ▼
                  </span>
                </button>

                {/* Section body — collapsible */}
                {isOpen && (
                  <div style={{ padding:"0 20px 18px 20px" }}>
                    <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:"8px" }}>
                      {sec.items.map((item, j) => (
                        <li key={j} style={{ ...inset, padding:"10px 14px", display:"flex", alignItems:"flex-start", gap:"10px" }}>
                          <span style={{
                            background: isDanger ? "#d46a6a" : color,
                            color:"#fff", borderRadius:"50%", width:20, height:20,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            fontSize:"0.6rem", fontWeight:900, flexShrink:0, marginTop:"3px",
                          }}>
                            {isDanger ? "!" : j + 1}
                          </span>
                          <HighlightItem text={item} color={color} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Nav between stages */}
      <div style={{ padding:"0 20px 56px" }} className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {stages.filter(s => s.slug !== slug).map((s) => (
            <Link key={s.slug} href={`/giai-doan/${s.slug}`}
              style={{ ...neu, padding:"10px 20px", textDecoration:"none", borderRadius:"30px",
                       fontSize:"0.82rem", fontWeight:700, color:colors[stages.indexOf(s)] }}>
              {s.emoji} {s.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
