import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sơ Đồ Trang | 1000 Ngày Đầu Đời",
  description: "Toàn bộ nội dung của 1000 Ngày Đầu Đời — cẩm nang chăm sóc mẹ và bé.",
  alternates: { canonical: "https://1000daysforbabies.io.vn/so-do-trang" },
};

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};
const inset: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "inset 3px 3px 8px rgba(180,170,155,0.6),inset -3px -3px 8px rgba(255,255,255,0.85)",
  borderRadius: "12px",
};

const sections = [
  {
    title: "Giai Đoạn Phát Triển",
    emoji: "🗓️",
    color: "#d4a0a7",
    links: [
      { emoji: "🤰", label: "Thai Kỳ",    href: "/giai-doan/thai-ky",    desc: "9 tháng 10 ngày kỳ diệu" },
      { emoji: "👶", label: "0-6 Tháng",  href: "/giai-doan/0-6-thang",  desc: "Sơ sinh, bú mẹ, phát triển" },
      { emoji: "🥣", label: "6-12 Tháng", href: "/giai-doan/6-12-thang", desc: "Ăn dặm & khám phá thế giới" },
      { emoji: "🚶", label: "1-2 Tuổi",   href: "/giai-doan/1-2-tuoi",   desc: "Tập đi, tập nói, tự lập" },
    ],
  },
  {
    title: "Công Cụ Chăm Sóc",
    emoji: "🛠️",
    color: "#6b7bb5",
    links: [
      { emoji: "📋", label: "Phương Pháp EASY",   href: "/phuong-phap-easy",  desc: "Lịch Ăn-Chơi-Ngủ theo tuổi" },
      { emoji: "🍽️", label: "Thực Đơn Ăn Dặm",   href: "/thuc-don-an-dam",   desc: "Menu 7 ngày cho bé 6-24 tháng" },
      { emoji: "😴", label: "Bảng Giấc Ngủ",       href: "/giac-ngu",          desc: "Số giờ ngủ chuẩn & mẹo ru bé" },
      { emoji: "✅", label: "Checklist Chuẩn Bị",  href: "/checklist",         desc: "Danh sách đồ dùng cần thiết" },
    ],
  },
  {
    title: "Theo Dõi & Tra Cứu",
    emoji: "📊",
    color: "#6b9bd2",
    links: [
      { emoji: "🎂", label: "Tính Tuổi Bé",           href: "/tinh-tuoi",        desc: "Tính chính xác theo ngày sinh" },
      { emoji: "📏", label: "Biểu Đồ Tăng Trưởng",    href: "/bang-tang-truong", desc: "Chuẩn WHO 2006 cho 0-24 tháng" },
      { emoji: "💉", label: "Lịch Tiêm Chủng",         href: "/tiem-chung",       desc: "Theo khuyến cáo Bộ Y tế" },
    ],
  },
  {
    title: "Kiến Thức & Hỗ Trợ",
    emoji: "📚",
    color: "#c8836a",
    links: [
      { emoji: "✨", label: "Mẹo Hay",     href: "/meo-hay",     desc: "30+ mẹo chăm sóc hữu ích" },
      { emoji: "❓", label: "Hỏi Đáp",     href: "/hoi-dap",     desc: "Giải đáp thắc mắc phổ biến" },
      { emoji: "🤱", label: "Mẹ Sau Sinh", href: "/me-sau-sinh", desc: "Dinh dưỡng & phục hồi sau sinh" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <div style={{ background: "#f0ece8", minHeight: "100vh", padding: "0 0 64px" }}>
      {/* Header */}
      <section style={{ background: "#eae6e1", padding: "48px 20px 40px", textAlign: "center" }}>
        <div className="max-w-2xl mx-auto">
          <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🗺️</div>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(1.6rem,4vw,2.2rem)",
                       color: "#3a3028", marginBottom: 10 }}>
            Sơ Đồ Trang
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#8c7b6e", lineHeight: 1.7 }}>
            Toàn bộ nội dung của <strong>1000 Ngày Đầu Đời</strong> — tìm nhanh chủ đề bạn cần.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #d4c8be, transparent)", margin: "0 40px" }} />

      {/* Sections */}
      <div className="max-w-4xl mx-auto" style={{ padding: "40px 20px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map(sec => (
            <div key={sec.title}>
              {/* Section heading */}
              <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
                <div style={{ ...inset, padding: "8px 20px", display: "inline-flex",
                               alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.1rem" }}>{sec.emoji}</span>
                  <span style={{ fontWeight: 800, fontSize: "1rem", color: sec.color }}>
                    {sec.title}
                  </span>
                </div>
                <div style={{ flex: 1, height: 1,
                               background: `linear-gradient(to right, ${sec.color}44, transparent)` }} />
              </div>

              {/* Links grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sec.links.map(link => (
                  <Link key={link.href} href={link.href}
                    style={{ ...neu, padding: "16px 20px", textDecoration: "none",
                               display: "flex", alignItems: "center", gap: 14,
                               borderLeft: `3px solid ${sec.color}` }}
                    className="card-hover">
                    <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>{link.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.92rem",
                                    color: "#3a3028", marginBottom: 2 }}>
                        {link.label}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#8c7b6e" }}>
                        {link.desc}
                      </div>
                    </div>
                    <span style={{ marginLeft: "auto", color: sec.color, fontWeight: 800,
                                   fontSize: "0.8rem", flexShrink: 0 }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back home */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/"
            style={{ ...neu, display: "inline-block", padding: "12px 32px",
                     textDecoration: "none", borderRadius: 30,
                     fontWeight: 800, fontSize: "0.9rem", color: "#c08890" }}>
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
