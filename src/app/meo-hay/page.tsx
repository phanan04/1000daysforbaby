import { tips, devMilestones } from "@/lib/data";
import Link from "next/link";

const neu: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius:"20px",
};
const inset: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius:"14px",
};

const palette = ["#d4a0a7","#c8836a","#b89a5e","#d4a0a7","#c8836a","#b89a5e","#d4a0a7","#c8836a","#b89a5e","#d4a0a7"];

export default function MeoHay() {
  return (
    <div style={{ padding:"32px 20px 64px" }}>
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link href="/" style={{ ...neu, display:"inline-flex", alignItems:"center", gap:"8px",
                                 padding:"8px 18px", textDecoration:"none", borderRadius:"30px",
                                 color:"#7c6b5e", fontWeight:700, fontSize:"0.82rem", marginBottom:"32px" }}>
          ← Trang chủ
        </Link>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"40px" }}>
          <div style={{ ...neu, display:"inline-flex", alignItems:"center", justifyContent:"center",
                         width:72, height:72, borderRadius:"50%", fontSize:"2rem", marginBottom:"18px" }}>
            ✨
          </div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.6rem,4vw,2.2rem)", color:"#3a3028", marginBottom:"10px" }}>
            Mẹo Hay Và Kinh Nghiệm
          </h1>
          <p style={{ color:"#8c7b6e", maxWidth:"500px", margin:"0 auto", lineHeight:1.65 }}>
            Tổng hợp những mẹo thực tế giúp mẹ chăm sóc bé hiệu quả, khoa học.
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {tips.map((t, i) => {
            const c = palette[i];
            return (
              <div key={t.id} style={{ ...neu, padding:"24px 22px", borderTop:`3px solid ${c}` }}>
                <div style={{ fontSize:"2rem", marginBottom:"10px" }}>{t.emoji}</div>
                <div style={{ ...inset, display:"inline-block", padding:"3px 12px", borderRadius:"20px",
                               fontSize:"0.7rem", fontWeight:800, color:c, marginBottom:"10px" }}>
                  {t.category}
                </div>
                <div style={{ fontWeight:800, fontSize:"0.95rem", color:"#3a3028", marginBottom:"8px" }}>
                  {t.title}
                </div>
                <p style={{ fontSize:"0.8rem", color:"#8c7b6e", lineHeight:1.6, margin:0 }}>{t.content}</p>
                <div style={{ marginTop:"10px", fontSize:"0.72rem", fontWeight:700,
                               color:"#a09080", background:"none" }}>
                  🏷 {t.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestones */}
        <div>
          <h2 style={{ fontWeight:800, fontSize:"1.5rem", color:"#3a3028", textAlign:"center", marginBottom:"28px" }}>
            📊 Mốc Phát Triển
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {devMilestones.map((m, i) => {
              const c = palette[i];
              return (
                <div key={m.age} style={{ ...neu, padding:"22px 24px", borderLeft:`4px solid ${c}` }}>
                  <div style={{ fontWeight:800, fontSize:"0.95rem", color:c, marginBottom:"12px" }}>
                    {m.age}
                  </div>
                  <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"6px" }}>
                    {m.items.map((item, j) => (
                      <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:"8px" }}>
                        <span style={{ ...inset, borderRadius:"50%", width:20, height:20, flexShrink:0,
                                        display:"flex", alignItems:"center", justifyContent:"center",
                                        fontSize:"0.6rem", fontWeight:900, color:c, marginTop:"2px" }}>
                          {j+1}
                        </span>
                        <span style={{ fontSize:"0.8rem", color:"#5a4a3c", lineHeight:1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
