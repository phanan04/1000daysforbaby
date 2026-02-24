import type { Metadata } from "next";
import Link from "next/link";
import { stages } from "@/lib/data";
import ShareButton from "@/components/ShareButton";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "1000 Ngày Đầu Đời — Hành Trình Chăm Sóc Bé Yêu",
  description: "Hướng dẫn toàn diện chăm sóc bé trong 1000 ngày đầu đời, từ thai kỳ đến 2 tuổi. Dinh dưỡng, tiêm chủng, giấc ngủ, phát triển.",
  openGraph: {
    title: "1000 Ngày Đầu Đời",
    description: "Hành trình từ thai kỳ đến 2 tuổi — giai đoạn vàng quyết định tương lai bé yêu.",
    type: "website",
  },
};

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
const inset: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius:"16px",
};

const stageColor = ["#d4a0a7","#c8836a","#b89a5e","#d4a0a7"];

export default function Home() {
  return (
    <div>

      {/* Hero – gọn & thoáng */}
      <section style={{ background:"#eae6e1", padding:"72px 20px 56px" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ fontSize:"3rem", marginBottom:"16px" }}>🌸</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(1.8rem,4.5vw,2.8rem)", color:"#3a3028", lineHeight:1.2, marginBottom:"14px" }}>
            1000 Ngày Đầu Đời
          </h1>
          <p style={{ fontSize:"1rem", color:"#8c7b6e", maxWidth:"460px", margin:"0 auto 32px", lineHeight:1.7 }}>
            Hành trình từ thai kỳ đến 2 tuổi — giai đoạn vàng quyết định tương lai bé yêu.
          </p>
          <Link href="/giai-doan/thai-ky"
            style={{ ...neu, display:"inline-block", padding:"14px 36px",
                     fontWeight:800, fontSize:"0.95rem", color:"#c08890",
                     textDecoration:"none", borderRadius:"30px" }}>
            Khám phá ngay →
          </Link>
        </div>
      </section>

      {/* ── LEVEL 1: 4 Giai đoạn chính ── */}
      <ScrollFade>
      <section style={{ padding:"48px 20px 40px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom:"8px" }}>
            <span style={{ ...inset, display:"inline-block", padding:"4px 16px", fontSize:"0.68rem", fontWeight:800, color:"#c08890", letterSpacing:"0.08em", textTransform:"uppercase" }}>
              Bước 1
            </span>
          </div>
          <h2 style={{ fontWeight:800, fontSize:"1.5rem", color:"#3a3028", textAlign:"center", marginBottom:"6px" }}>
            Chọn Giai Đoạn Của Bé
          </h2>
          <p style={{ fontSize:"0.85rem", color:"#8c7b6e", textAlign:"center", marginBottom:"28px", maxWidth:"400px", margin:"0 auto 28px" }}>
            Bắt đầu từ giai đoạn phù hợp với bé nhà bạn
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stages.map((s, i) => (
              <Link key={s.slug} href={`/giai-doan/${s.slug}`} style={{ textDecoration:"none" }}>
                <div style={{ ...neu, padding:"18px 14px", cursor:"pointer",
                              borderTop:`3px solid ${stageColor[i]}` }}
                     className="sm:!p-[24px_20px]">
                  <div style={{ fontSize:"2rem", marginBottom:"8px" }} className="sm:text-[2.2rem]">{s.emoji}</div>
                  <div style={{ fontWeight:800, fontSize:"0.85rem", color:"#3a3028", marginBottom:"4px" }}
                       className="sm:text-[0.95rem]">{s.title}</div>
                  <div style={{ fontSize:"0.68rem", fontWeight:700, color:stageColor[i], marginBottom:"6px" }}
                       className="sm:text-[0.72rem]">{s.weeks}</div>
                  <p style={{ fontSize:"0.78rem", color:"#8c7b6e", lineHeight:1.55 }}
                     className="hidden sm:block">{s.heroDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── LEVEL 2: Công cụ chính (lớn, nổi bật) ── */}
      <ScrollFade delay={0.05}>
      <section style={{ padding:"0 20px 40px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4" style={{ marginBottom:"24px" }}>
            <div style={{ flex:1, height:"1px", background:"linear-gradient(to right, transparent, #c8beb5, transparent)" }} />
            <div className="text-center">
              <span style={{ ...inset, display:"inline-block", padding:"4px 16px", fontSize:"0.68rem", fontWeight:800, color:"#c08890", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>
                Bước 2
              </span>
              <h2 style={{ fontWeight:800, fontSize:"1.2rem", color:"#3a3028", whiteSpace:"nowrap" }}>
                🛠️ Công Cụ Chăm Sóc
              </h2>
            </div>
            <div style={{ flex:1, height:"1px", background:"linear-gradient(to right, transparent, #c8beb5, transparent)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {([
              { emoji:"📋", label:"Phương Pháp EASY", desc:"Lịch Ăn-Chơi-Ngủ theo từng tháng tuổi", href:"/phuong-phap-easy", color:"#6b7bb5" },
              { emoji:"🍽️", label:"Thực Đơn Ăn Dặm", desc:"Gợi ý menu 7 ngày cho bé 6-24 tháng", href:"/thuc-don-an-dam", color:"#b89a5e" },
              { emoji:"😴", label:"Bảng Giấc Ngủ", desc:"Số giờ ngủ chuẩn & mẹo ru bé", href:"/giac-ngu", color:"#8b7bb5" },
            ] as const).map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration:"none" }}>
                <div style={{ ...neuLg, padding:"28px 22px", borderTop:`3px solid ${item.color}`,
                              cursor:"pointer", height:"100%" }}>
                  <div style={{ fontSize:"2.2rem", marginBottom:"12px" }}>{item.emoji}</div>
                  <div style={{ fontWeight:800, fontSize:"1.05rem", color:"#3a3028", marginBottom:"6px" }}>{item.label}</div>
                  <p style={{ fontSize:"0.82rem", color:"#8c7b6e", lineHeight:1.55, margin:0 }}>{item.desc}</p>
                  <div style={{ marginTop:"14px", fontSize:"0.78rem", fontWeight:800, color:item.color }}>
                    Xem chi tiết →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── LEVEL 3: Công cụ bổ sung (nhỏ hơn) ── */}
      <ScrollFade delay={0.1}>
      <section style={{ padding:"0 20px 40px" }}>
        <div className="max-w-5xl mx-auto">
          <h3 style={{ fontWeight:800, fontSize:"1rem", color:"#8c7b6e", textAlign:"center", marginBottom:"16px" }}>
            📊 Theo Dõi & Tra Cứu
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {([
              { emoji:"🎂", label:"Tính Tuổi Bé",     href:"/tinh-tuoi",        color:"#c08890" },
              { emoji:"📏", label:"Biểu Đồ Tăng Trưởng", href:"/bang-tang-truong", color:"#6b9bd2" },
              { emoji:"💉", label:"Lịch Tiêm Chủng",  href:"/tiem-chung",       color:"#c8836a" },
              { emoji:"✅", label:"Checklist Chuẩn Bị", href:"/checklist",       color:"#5d9a6e" },
            ] as const).map(item => (
              <Link key={item.href} href={item.href}
                style={{ ...neu, padding:"20px 14px", textAlign:"center", textDecoration:"none",
                         display:"block", borderTop:`3px solid ${item.color}` }}>
                <div style={{ fontSize:"1.6rem", marginBottom:"6px" }}>{item.emoji}</div>
                <div style={{ fontWeight:800, fontSize:"0.82rem", color:item.color }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── LEVEL 4: Kiến thức (nhỏ nhất) ── */}
      <ScrollFade delay={0.15}>
      <section style={{ padding:"0 20px 56px" }}>
        <div className="max-w-5xl mx-auto">
          <h3 style={{ fontWeight:800, fontSize:"1rem", color:"#8c7b6e", textAlign:"center", marginBottom:"16px" }}>
            📚 Kiến Thức & Hỗ Trợ
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {([
              { emoji:"✨", label:"Mẹo Hay",     href:"/meo-hay",     color:"#c8836a" },
              { emoji:"❓", label:"Hỏi Đáp",     href:"/hoi-dap",     color:"#d4a0a7" },
              { emoji:"🤱", label:"Mẹ Sau Sinh", href:"/me-sau-sinh", color:"#d4a0a7" },
            ] as const).map(item => (
              <Link key={item.href} href={item.href}
                style={{ ...neu, padding:"16px 12px", textAlign:"center", textDecoration:"none",
                         display:"block", borderTop:`2px solid ${item.color}` }}>
                <div style={{ fontSize:"1.4rem", marginBottom:"4px" }}>{item.emoji}</div>
                <div style={{ fontWeight:700, fontSize:"0.78rem", color:item.color }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Share */}
      <div style={{ textAlign:"center", paddingBottom:"48px" }}>
        <ShareButton title="1000 Ngày Đầu Đời" text="Hành trình chăm sóc bé yêu trong 1000 ngày đầu đời" />
      </div>
    </div>
  );
}
