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

      {/* 4 Giai đoạn */}
      <ScrollFade>
      <section style={{ padding:"48px 20px 56px" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontWeight:800, fontSize:"1.5rem", color:"#3a3028", textAlign:"center", marginBottom:"28px" }}>
            4 Giai Đoạn Quan Trọng
          </h2>
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

      {/* Quick links */}
      <ScrollFade delay={0.1}>
      <section style={{ padding:"0 20px 56px" }}>
        <div className="max-w-4xl mx-auto">
          {/* Divider + heading */}
          <div className="flex items-center gap-4" style={{ marginBottom:"24px" }}>
            <div style={{ flex:1, height:"1px", background:"linear-gradient(to right, transparent, #c8beb5, transparent)" }} />
            <h2 style={{ fontWeight:800, fontSize:"1rem", color:"#8c7b6e", whiteSpace:"nowrap" }}>
              🧭 Công Cụ Hữu Ích
            </h2>
            <div style={{ flex:1, height:"1px", background:"linear-gradient(to right, transparent, #c8beb5, transparent)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {([
            { emoji:"🎂", label:"Tính tuổi bé", href:"/tinh-tuoi", color:"#c08890" },
            { emoji:"📏", label:"Tăng trưởng", href:"/bang-tang-truong", color:"#6b9bd2" },
            { emoji:"💉", label:"Tiêm chủng", href:"/tiem-chung", color:"#c8836a" },
            { emoji:"📋", label:"Phương pháp EASY", href:"/phuong-phap-easy", color:"#6b7bb5" },
            { emoji:"🍽️", label:"Thực đơn ăn dặm", href:"/thuc-don-an-dam", color:"#b89a5e" },
            { emoji:"😴", label:"Giấc ngủ", href:"/giac-ngu", color:"#8b7bb5" },
            { emoji:"✅", label:"Checklist", href:"/checklist", color:"#5d9a6e" },
            { emoji:"💡", label:"Mẹo hay", href:"/meo-hay", color:"#c8836a" },
            { emoji:"❓", label:"Hỏi đáp", href:"/hoi-dap", color:"#d4a0a7" },
            { emoji:"🤱", label:"Mẹ sau sinh", href:"/me-sau-sinh", color:"#d4a0a7" },
          ] as const).map((item) => (
            <Link key={item.href} href={item.href}
              style={{ ...neu, padding:"24px 16px", textAlign:"center", textDecoration:"none",
                       display:"block", borderTop:`3px solid ${item.color}` }}>
              <div style={{ fontSize:"1.8rem", marginBottom:"8px" }}>{item.emoji}</div>
              <div style={{ fontWeight:800, fontSize:"0.88rem", color:item.color }}>{item.label}</div>
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
