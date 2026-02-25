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

      {/* ── HERO ── */}
      <section style={{ background:"#eae6e1", padding:"80px 20px 64px", position:"relative", overflow:"hidden" }}>
        {/* Decorative blobs */}
        <div style={{ position:"absolute", top:-60, right:-60, width:260, height:260, borderRadius:"50%",
                      background:"rgba(212,160,167,0.13)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-80, left:-80, width:320, height:320, borderRadius:"50%",
                      background:"rgba(200,185,175,0.10)", pointerEvents:"none" }} />

        <div className="max-w-3xl mx-auto text-center" style={{ position:"relative" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#eae6e1",
                        boxShadow:"inset 3px 3px 8px rgba(180,170,155,0.6),inset -3px -3px 8px rgba(255,255,255,0.85)",
                        borderRadius:30, padding:"6px 18px", fontSize:"0.72rem", fontWeight:800,
                        color:"#c08890", letterSpacing:"0.08em", marginBottom:24 }}>
            <span>✨</span> CẨM NANG CHĂM SÓC BÉ TOÀN DIỆN
          </div>
          <div style={{ fontSize:"3.5rem", marginBottom:12, lineHeight:1 }}>🌸</div>
          <h1 style={{ fontWeight:800, fontSize:"clamp(2rem,5vw,3.2rem)", color:"#3a3028",
                        lineHeight:1.15, marginBottom:16 }}>
            1000 Ngày Đầu Đời
          </h1>
          <p style={{ fontSize:"1.05rem", color:"#8c7b6e", maxWidth:"500px",
                       margin:"0 auto 16px", lineHeight:1.75 }}>
            Hành trình từ thai kỳ đến 2 tuổi — giai đoạn vàng quyết định
            sức khoẻ và tương lai bé yêu của bạn.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-6 flex-wrap" style={{ margin:"28px 0 36px" }}>
            {([
              { num:"10+", label:"Chủ đề" },
              { num:"1000", label:"Ngày vàng" },
              { num:"4",   label:"Giai đoạn" },
              { num:"100%", label:"Miễn phí" },
            ] as const).map(s => (
              <div key={s.label} style={{ textAlign:"center" }}>
                <div style={{ fontWeight:800, fontSize:"1.4rem", color:"#c08890", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:"0.7rem", color:"#a09080", fontWeight:600, marginTop:2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Dual CTA */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/giai-doan/thai-ky"
              style={{ background:"#c08890",
                       boxShadow:"4px 4px 12px rgba(192,136,144,0.45),-2px -2px 8px rgba(255,255,255,0.6)",
                       display:"inline-block", padding:"14px 36px",
                       fontWeight:800, fontSize:"0.95rem", color:"#fff",
                       textDecoration:"none", borderRadius:30 }}>
              Khám phá ngay →
            </Link>
            <Link href="/tinh-tuoi"
              style={{ ...neu, display:"inline-block", padding:"14px 36px",
                        fontWeight:800, fontSize:"0.95rem", color:"#c08890",
                        textDecoration:"none", borderRadius:30 }}>
              🎂 Tính tuổi bé
            </Link>
          </div>
        </div>
      </section>

      {/* ── Divider wave ── */}
      <div style={{ height:48, background:"linear-gradient(to bottom, #eae6e1, #f0ece8)", marginBottom:-1 }} />

      {/* ── LEVEL 1: 4 Giai đoạn chính ── */}
      <ScrollFade>
      <section style={{ padding:"48px 20px 40px", background:"#f0ece8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom:8 }}>
            <span style={{ ...inset, display:"inline-block", padding:"4px 16px", fontSize:"0.68rem",
                            fontWeight:800, color:"#c08890", letterSpacing:"0.08em", textTransform:"uppercase" }}>
              Bước 1
            </span>
          </div>
          <h2 style={{ fontWeight:800, fontSize:"1.5rem", color:"#3a3028", textAlign:"center", marginBottom:6 }}>
            Chọn Giai Đoạn Của Bé
          </h2>
          <p style={{ fontSize:"0.85rem", color:"#8c7b6e", textAlign:"center",
                       maxWidth:400, margin:"0 auto 28px", lineHeight:1.6 }}>
            Bắt đầu từ giai đoạn phù hợp với bé nhà bạn
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stages.map((s, i) => (
              <Link key={s.slug} href={`/giai-doan/${s.slug}`} style={{ textDecoration:"none", display:"block", height:"100%" }}>
                <div style={{ ...neu, padding:"20px 16px", cursor:"pointer", height:"100%",
                              display:"flex", flexDirection:"column",
                              borderBottom:`3px solid ${stageColor[i]}` }}
                     className="card-hover">
                  {/* Emoji in tinted circle */}
                  <div style={{
                    width:52, height:52, borderRadius:"50%", display:"flex",
                    alignItems:"center", justifyContent:"center",
                    fontSize:"1.6rem", marginBottom:12, flexShrink:0,
                    background:`${stageColor[i]}18`,
                    boxShadow:`inset 3px 3px 8px rgba(180,170,155,0.5),inset -3px -3px 8px rgba(255,255,255,0.8)`,
                  }}>{s.emoji}</div>
                  <div style={{ fontWeight:800, fontSize:"0.92rem", color:"#3a3028", marginBottom:4 }}>{s.title}</div>
                  {/* Weeks badge */}
                  <div style={{
                    display:"inline-block", padding:"2px 10px", borderRadius:"30px",
                    fontSize:"0.65rem", fontWeight:800, color:stageColor[i],
                    background:`${stageColor[i]}15`, marginBottom:8, alignSelf:"flex-start",
                  }}>{s.weeks}</div>
                  <p style={{ fontSize:"0.76rem", color:"#8c7b6e", lineHeight:1.55, margin:0, flex:1 }}>{s.subtitle}</p>
                  <div style={{ marginTop:12, fontSize:"0.7rem", fontWeight:800, color:stageColor[i] }}>Xem ngay →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── Divider ── */}
      <div style={{ height:1, background:"linear-gradient(to right, transparent, #d4c8be, transparent)", margin:"0 40px" }} />

      {/* ── LEVEL 2: Công cụ chính ── */}
      <ScrollFade delay={0.05}>
      <section style={{ padding:"48px 20px 40px", background:"#f0ece8" }} className="cv-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom:8 }}>
            <span style={{ ...inset, display:"inline-block", padding:"4px 16px", fontSize:"0.68rem",
                            fontWeight:800, color:"#c08890", letterSpacing:"0.08em", textTransform:"uppercase" }}>
              Bước 2
            </span>
          </div>
          <h2 style={{ fontWeight:800, fontSize:"1.5rem", color:"#3a3028", textAlign:"center", marginBottom:28 }}>
            🛠️ Công Cụ Chăm Sóc
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {([
              { emoji:"📋", label:"Phương Pháp EASY",  desc:"Lịch Ăn-Chơi-Ngủ theo từng tháng tuổi", href:"/phuong-phap-easy", color:"#6b7bb5" },
              { emoji:"🍽️", label:"Thực Đơn Ăn Dặm",  desc:"Gợi ý menu 7 ngày cho bé 6–24 tháng",  href:"/thuc-don-an-dam",  color:"#b89a5e" },
              { emoji:"😴", label:"Bảng Giấc Ngủ",    desc:"Số giờ ngủ chuẩn & mẹo ru bé ngủ sâu", href:"/giac-ngu",         color:"#8b7bb5" },
            ] as const).map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration:"none", display:"block", height:"100%" }}>
                <div style={{ ...neuLg, padding:"28px 22px", cursor:"pointer", height:"100%",
                              display:"flex", flexDirection:"column", gap:0,
                              borderBottom:`3px solid ${item.color}` }}
                     className="card-hover">
                  {/* Emoji circle */}
                  <div style={{
                    width:56, height:56, borderRadius:"50%", display:"flex",
                    alignItems:"center", justifyContent:"center",
                    fontSize:"1.7rem", marginBottom:16, flexShrink:0,
                    background: `${item.color}18`,
                    boxShadow:`inset 3px 3px 8px rgba(180,170,155,0.5),inset -3px -3px 8px rgba(255,255,255,0.8)`,
                  }}>{item.emoji}</div>
                  <div style={{ fontWeight:800, fontSize:"1.05rem", color:"#3a3028", marginBottom:6 }}>{item.label}</div>
                  <p style={{ fontSize:"0.82rem", color:"#8c7b6e", lineHeight:1.55, margin:0, flex:1 }}>{item.desc}</p>
                  {/* CTA pill */}
                  <div style={{
                    marginTop:18, display:"inline-flex", alignItems:"center", gap:6,
                    background: `${item.color}18`, borderRadius:"30px",
                    padding:"7px 16px", fontSize:"0.78rem", fontWeight:800, color:item.color,
                    alignSelf:"flex-start",
                    boxShadow:`2px 2px 6px rgba(180,170,155,0.5),-2px -2px 6px rgba(255,255,255,0.8)`,
                  }}>
                    Xem chi tiết <span style={{ fontSize:"0.9rem" }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── Divider ── */}
      <div style={{ height:1, background:"linear-gradient(to right, transparent, #d4c8be, transparent)", margin:"0 40px" }} />

      {/* ── LEVEL 3: Công cụ bổ sung ── */}
      <ScrollFade delay={0.1}>
      <section style={{ padding:"48px 20px 40px", background:"#f0ece8" }} className="cv-auto">
        <div className="max-w-5xl mx-auto">
          <h3 style={{ fontWeight:800, fontSize:"1rem", color:"#8c7b6e", textAlign:"center", marginBottom:20 }}>
            📊 Theo Dõi & Tra Cứu
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {([
              { emoji:"🎂", label:"Tính Tuổi Bé",         desc:"Tính chính xác theo ngày sinh", href:"/tinh-tuoi",        color:"#c08890" },
              { emoji:"📏", label:"Tăng Trưởng",           desc:"Chuẩn WHO cho 0–24 tháng",      href:"/bang-tang-truong", color:"#6b9bd2" },
              { emoji:"💉", label:"Tiêm Chủng",            desc:"Lịch theo Bộ Y tế",             href:"/tiem-chung",       color:"#c8836a" },
              { emoji:"✅", label:"Checklist",             desc:"Đồ dùng cần chuẩn bị",          href:"/checklist",        color:"#5d9a6e" },
            ] as const).map(item => (
              <Link key={item.href} href={item.href}
                style={{ ...neu, padding:"18px 14px", textAlign:"center", textDecoration:"none",
                          display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}
                className="card-hover">
                {/* Emoji circle */}
                <div style={{
                  width:48, height:48, borderRadius:"50%", display:"flex",
                  alignItems:"center", justifyContent:"center",
                  fontSize:"1.4rem", marginBottom:10,
                  background: `${item.color}18`,
                  boxShadow:`inset 3px 3px 8px rgba(180,170,155,0.5),inset -3px -3px 8px rgba(255,255,255,0.8)`,
                }}>{item.emoji}</div>
                <div style={{ fontWeight:800, fontSize:"0.85rem", color:"#3a3028", marginBottom:4 }}>{item.label}</div>
                <div style={{ fontSize:"0.7rem", color:"#a09080", lineHeight:1.4, marginBottom:10 }}>{item.desc}</div>
                <div style={{ fontSize:"0.7rem", fontWeight:800, color:item.color }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── LEVEL 4: Kiến thức ── */}
      <ScrollFade delay={0.15}>
      <section style={{ padding:"0 20px 40px", background:"#f0ece8" }} className="cv-auto">
        <div className="max-w-5xl mx-auto">
          <h3 style={{ fontWeight:800, fontSize:"1rem", color:"#8c7b6e", textAlign:"center", marginBottom:20 }}>
            📚 Kiến Thức & Hỗ Trợ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {([
              { emoji:"✨", label:"Mẹo Hay",     desc:"30+ mẹo chăm sóc từ kinh nghiệm thực tế", href:"/meo-hay",     color:"#c8836a" },
              { emoji:"❓", label:"Hỏi Đáp",     desc:"Giải đáp các câu hỏi phổ biến của mẹ bỉm", href:"/hoi-dap",     color:"#d4a0a7" },
              { emoji:"🤱", label:"Mẹ Sau Sinh", desc:"Dinh dưỡng, phục hồi và chăm sóc bản thân", href:"/me-sau-sinh", color:"#d4a0a7" },
            ] as const).map(item => (
              <Link key={item.href} href={item.href}
                style={{ ...neu, padding:"18px 18px", textDecoration:"none",
                          display:"flex", alignItems:"center", gap:14 }}
                className="card-hover">
                {/* Emoji circle */}
                <div style={{
                  width:46, height:46, borderRadius:"50%", flexShrink:0,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"1.35rem",
                  background:`${item.color}18`,
                  boxShadow:`inset 3px 3px 8px rgba(180,170,155,0.5),inset -3px -3px 8px rgba(255,255,255,0.8)`,
                }}>{item.emoji}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:800, fontSize:"0.92rem", color:"#3a3028", marginBottom:3 }}>{item.label}</div>
                  <div style={{ fontSize:"0.76rem", color:"#8c7b6e", lineHeight:1.5 }}>{item.desc}</div>
                </div>
                <div style={{
                  width:30, height:30, borderRadius:"50%", flexShrink:0,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:`${item.color}18`, color:item.color,
                  fontWeight:800, fontSize:"0.85rem",
                  boxShadow:`2px 2px 5px rgba(180,170,155,0.5),-2px -2px 5px rgba(255,255,255,0.8)`,
                }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* ── Divider ── */}
      <div style={{ height:48, background:"linear-gradient(to bottom, #f0ece8, #eae6e1)", marginTop:-1 }} />

      {/* ── CTA Bottom ── */}
      <ScrollFade delay={0.2}>
      <section style={{ background:"#eae6e1", padding:"48px 20px 56px", textAlign:"center" }}>
        <div className="max-w-xl mx-auto">
          <div style={{ fontSize:"2rem", marginBottom:12 }}>💌</div>
          <h3 style={{ fontWeight:800, fontSize:"1.3rem", color:"#3a3028", marginBottom:10 }}>
            Chia sẻ cho mẹ khác cùng biết
          </h3>
          <p style={{ fontSize:"0.85rem", color:"#8c7b6e", marginBottom:24, lineHeight:1.6 }}>
            Nếu trang này hữu ích, hãy chia sẻ để nhiều mẹ bỉm sữa cùng được hỗ trợ nhé!
          </p>
          <ShareButton title="1000 Ngày Đầu Đời" text="Hành trình chăm sóc bé yêu trong 1000 ngày đầu đời" />
        </div>
      </section>
      </ScrollFade>

    </div>
  );
}
