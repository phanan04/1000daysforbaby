import Link from "next/link";
import { stages, tips } from "@/lib/data";
import ShareButton from "@/components/ShareButton";

const neu: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius:"20px",
};
const neuLg: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"10px 10px 24px rgba(180,170,155,0.75),-10px -10px 24px rgba(255,255,255,0.95)",
  borderRadius:"28px",
};
const badge = (c: string): React.CSSProperties => ({
  background:"#eae6e1",
  boxShadow:`inset 3px 3px 6px rgba(180,170,155,0.5),inset -3px -3px 6px rgba(255,255,255,0.8)`,
  borderRadius:"30px",
  padding:"4px 14px",
  fontSize:"0.72rem",
  fontWeight:800,
  color: c,
  display:"inline-block",
});

const stageColor = ["#d4a0a7","#c8836a","#b89a5e","#d4a0a7"];

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background:"#eae6e1", padding:"60px 20px 40px" }}>
        <div className="max-w-5xl mx-auto text-center">
          <div style={{ ...neuLg, display:"inline-block", padding:"10px 28px", marginBottom:"24px" }}>
            <span style={{ fontWeight:800, fontSize:"0.85rem", color:"#d4a0a7" }}>🌸 Hành trình 1000 ngày vàng</span>
          </div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(2rem,5vw,3.2rem)", color:"#3a3028", lineHeight:1.15, marginBottom:"16px" }}>
            Chăm sóc bé yêu khoa học,<br/>
            <span style={{ color:"#d4a0a7" }}>đúng cách, trọn tình yêu</span>
          </h1>
          <p style={{ fontSize:"1.05rem", color:"#8c7b6e", maxWidth:"560px", margin:"0 auto 36px", lineHeight:1.7 }}>
            Từ ngày đầu mang thai đến khi bé 2 tuổi — giai đoạn vàng quyết định toàn bộ tương lai.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[["6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)","#c08890","Bắt đầu ngay","/giai-doan/thai-ky"],
              ["inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)","#c8836a","Mẹo hay","/meo-hay"]].map(([s,c,t,h]) => (
              <Link key={h as string} href={h as string}
                style={{ background:"#eae6e1", boxShadow:s as string, borderRadius:"30px",
                         padding:"12px 30px", fontWeight:800, fontSize:"0.95rem", color:c as string,
                         textDecoration:"none" }}>
                {t as string}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding:"0 20px 48px" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {[["1000","Ngày vàng","#d4a0a7"],["90%","Não phát triển","#c8836a"],["4","Giai đoạn","#b89a5e"]].map(([n,l,c]) => (
            <div key={l as string} style={{ ...neu, padding:"20px 12px", textAlign:"center" }}>
              <div style={{ fontWeight:800, fontSize:"1.6rem", color:c as string }}>{n}</div>
              <div style={{ fontSize:"0.75rem", color:"#8c7b6e", fontWeight:600, marginTop:"4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section style={{ padding:"0 20px 56px" }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ textAlign:"center", marginBottom:"32px" }}>
            <h2 style={{ fontWeight:800, fontSize:"1.7rem", color:"#3a3028" }}>4 Giai Đoạn</h2>
            <p style={{ color:"#8c7b6e", marginTop:"6px" }}>Mỗi giai đoạn có đặc điểm và nhu cầu riêng biệt</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <Link key={s.slug} href={`/giai-doan/${s.slug}`} style={{ textDecoration:"none" }}>
                <div style={{ ...neu, padding:"24px 20px", cursor:"pointer", transition:"box-shadow 0.2s",
                               borderTop:`3px solid ${stageColor[i]}` }}>
                  <div style={{ fontSize:"2.4rem", marginBottom:"12px" }}>{s.emoji}</div>
                  <div style={badge(stageColor[i])}>{s.weeks}</div>
                  <div style={{ fontWeight:800, fontSize:"1rem", color:"#3a3028", marginTop:"10px", marginBottom:"8px" }}>{s.title}</div>
                  <p style={{ fontSize:"0.78rem", color:"#8c7b6e", lineHeight:1.55 }}>{s.heroDesc}</p>
                  <div style={{ marginTop:"14px", fontSize:"0.78rem", fontWeight:700, color:stageColor[i] }}>
                    Xem chi tiết →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding:"0 20px 64px" }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ textAlign:"center", marginBottom:"32px" }}>
            <h2 style={{ fontWeight:800, fontSize:"1.7rem", color:"#3a3028" }}>✨ Mẹo Hàng Ngày</h2>
            <p style={{ color:"#8c7b6e", marginTop:"6px" }}>Những mẹo thực tế cho mẹ và bé</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.slice(0,6).map((t, i) => {
              const colors = ["#d4a0a7","#c8836a","#b89a5e","#d4a0a7","#c8836a","#b89a5e"];
              const c = colors[i];
              return (
                <div key={t.id} style={{ ...neu, padding:"22px 20px" }}>
                  <div style={{ fontSize:"1.8rem", marginBottom:"10px" }}>{t.emoji}</div>
                  <div style={badge(c)}>{t.category}</div>
                  <div style={{ fontWeight:800, fontSize:"0.95rem", color:"#3a3028", marginTop:"10px", marginBottom:"6px" }}>{t.title}</div>
                  <p style={{ fontSize:"0.78rem", color:"#8c7b6e", lineHeight:1.55 }}>{t.content}</p>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign:"center", marginTop:"28px" }}>
            <Link href="/meo-hay" style={{ ...neu, display:"inline-block", padding:"12px 32px",
                                           fontWeight:800, color:"#c8836a", textDecoration:"none", borderRadius:"30px" }}>
              Xem tất cả mẹo hay →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Calculator */}
      <section style={{ padding:"0 20px 40px" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ ...neuLg, padding:"40px 32px", textAlign:"center",
                        borderTop:"3px solid #d4a0a7" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:"12px" }}>🎂</div>
            <h2 style={{ fontWeight:800, fontSize:"1.4rem", color:"#3a3028", marginBottom:"8px" }}>Bé Của Tôi</h2>
            <p style={{ color:"#8c7b6e", fontSize:"0.9rem", marginBottom:"24px", lineHeight:1.6 }}>
              Nhập ngày sinh để xem bé đang ở giai đoạn nào, mũi tiêm sắp tới và mốc phát triển cần chú ý.
            </p>
            <Link href="/tinh-tuoi" style={{ ...neu, display:"inline-block", padding:"12px 32px",
                                              fontWeight:800, color:"#c08890", textDecoration:"none", borderRadius:"30px" }}>
              Tính tuổi bé ngay →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Vaccine */}
      <section style={{ padding:"0 20px 64px" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ ...neuLg, padding:"40px 32px", textAlign:"center",
                        borderTop:"3px solid #d4a0a7" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:"12px" }}>💉</div>
            <h2 style={{ fontWeight:800, fontSize:"1.4rem", color:"#3a3028", marginBottom:"8px" }}>Lịch Tiêm Chủng Đầy Đủ</h2>
            <p style={{ color:"#8c7b6e", fontSize:"0.9rem", marginBottom:"24px", lineHeight:1.6 }}>
              Tra cứu lịch tiêm chủng cho bé theo từng độ tuổi, đảm bảo không bỏ sót mũi nào.
            </p>
            <Link href="/tiem-chung" style={{ ...neu, display:"inline-block", padding:"12px 32px",
                                              fontWeight:800, color:"#c08890", textDecoration:"none", borderRadius:"30px" }}>
              Xem lịch tiêm chủng →
            </Link>
          </div>
        </div>
      </section>

      <div style={{ textAlign:"center", padding:"0 20px 48px" }}>
        <ShareButton title="1000 Ngày Đầu Đời" text="Hành trình chăm sóc bé yêu trong 1000 ngày đầu đời — từ thai kỳ đến 2 tuổi" />
      </div>
    </div>
  );
}
