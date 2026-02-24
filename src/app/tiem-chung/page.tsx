import { vaccineSchedule } from "@/lib/data";
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

const dotColor = ["#d4a0a7","#c8836a","#b89a5e"];

export default function TiemChung() {
  return (
    <div style={{ padding:"32px 20px 64px" }}>
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link href="/" style={{ ...neu, display:"inline-flex", alignItems:"center", gap:"8px",
                                 padding:"8px 18px", textDecoration:"none", borderRadius:"30px",
                                 color:"#7c6b5e", fontWeight:700, fontSize:"0.82rem", marginBottom:"32px" }}>
          ← Trang chủ
        </Link>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"40px" }}>
          <div style={{ ...neu, display:"inline-block", padding:"12px 20px", borderRadius:"50%",
                         fontSize:"2.5rem", marginBottom:"18px" }}>💉</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.6rem,4vw,2.2rem)", color:"#3a3028", marginBottom:"10px" }}>
            Lich Tiem Chung
          </h1>
          <p style={{ color:"#8c7b6e", maxWidth:"500px", margin:"0 auto", lineHeight:1.65 }}>
            Theo dõi đầy đủ lịch tiêm chủng cho bé, bảo vệ sức khỏe toàn diện.
          </p>
        </div>

        {/* Warning */}
        <div style={{ ...inset, padding:"16px 22px", marginBottom:"36px", borderLeft:"3px solid #c8836a" }}>
          <p style={{ fontSize:"0.82rem", color:"#8c7b6e", lineHeight:1.6, margin:0 }}>
            ⚠️ <strong style={{ color:"#3a3028" }}>Lưu ý:</strong> Lịch tiêm chủng có thể thay đổi theo khuyến cáo của Bộ Y tế.
            Hãy tham khảo bác sĩ trước khi tiêm.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-5">
          {vaccineSchedule.map((v, i) => {
            const c = dotColor[i % 3];
            return (
              <div key={v.age} style={{ display:"flex", gap:"16px", alignItems:"flex-start" }}>
                {/* dot */}
                <div style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center" }}>
                  <div style={{ ...neu, width:48, height:48, borderRadius:"50%", display:"flex",
                                 alignItems:"center", justifyContent:"center",
                                 fontSize:"0.7rem", fontWeight:900, color:c, borderTop:`2px solid ${c}` }}>
                    {v.age.replace(" ","\n")}
                  </div>
                  {i < vaccineSchedule.length - 1 && (
                    <div style={{ width:2, flex:1, minHeight:24, marginTop:6,
                                  background:`linear-gradient(${c}44,transparent)` }}/>
                  )}
                </div>
                {/* card */}
                <div style={{ ...neu, flex:1, padding:"20px 22px", borderTop:`3px solid ${c}` }}>
                  <div style={{ fontWeight:800, fontSize:"1rem", color:"#3a3028", marginBottom:"12px" }}>
                    {v.age}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {v.vaccines.map(vname => (
                      <span key={vname} style={{ ...inset, padding:"4px 12px", borderRadius:"20px",
                                                  fontSize:"0.75rem", fontWeight:700, color:c }}>
                        {vname}
                      </span>
                    ))}
                  </div>
                  {v.note && (
                    <p style={{ marginTop:"12px", fontSize:"0.78rem", color:"#8c7b6e", lineHeight:1.55 }}>
                      📝 {v.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
