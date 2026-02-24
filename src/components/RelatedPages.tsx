"use client";

import Link from "next/link";

interface PageInfo {
  href: string;
  emoji: string;
  label: string;
  desc: string;
  color: string;
}

const allPages: PageInfo[] = [
  { href: "/giai-doan/thai-ky",    emoji: "🤰", label: "Thai Kỳ",          desc: "9 tháng mang thai",           color: "#d4a0a7" },
  { href: "/giai-doan/0-6-thang",  emoji: "👶", label: "0-6 Tháng",        desc: "Sơ sinh & bú mẹ",            color: "#c8836a" },
  { href: "/giai-doan/6-12-thang", emoji: "🥣", label: "6-12 Tháng",       desc: "Ăn dặm & khám phá",          color: "#b89a5e" },
  { href: "/giai-doan/1-2-tuoi",   emoji: "🚶", label: "1-2 Tuổi",         desc: "Tập đi & phát triển",         color: "#d4a0a7" },
  { href: "/phuong-phap-easy",     emoji: "📋", label: "Phương Pháp EASY", desc: "Lịch sinh hoạt cho bé",       color: "#6b7bb5" },
  { href: "/thuc-don-an-dam",      emoji: "🍽️", label: "Thực Đơn Ăn Dặm", desc: "Gợi ý thực đơn theo tuần",    color: "#b89a5e" },
  { href: "/giac-ngu",             emoji: "😴", label: "Giấc Ngủ",         desc: "Bảng giấc ngủ chuẩn",         color: "#8b7bb5" },
  { href: "/checklist",            emoji: "✅", label: "Checklist",         desc: "Danh sách cần chuẩn bị",      color: "#5d9a6e" },
  { href: "/tiem-chung",           emoji: "💉", label: "Tiêm Chủng",       desc: "Lịch tiêm phòng đầy đủ",      color: "#c8836a" },
  { href: "/bang-tang-truong",     emoji: "📏", label: "Biểu Đồ Tăng Trưởng", desc: "Cân nặng & chiều cao WHO", color: "#6b9bd2" },
  { href: "/tinh-tuoi",            emoji: "🎂", label: "Tính Tuổi Bé",     desc: "Tính tuổi & mốc phát triển",  color: "#c08890" },
  { href: "/meo-hay",              emoji: "✨", label: "Mẹo Hay",          desc: "30+ mẹo chăm sóc hữu ích",   color: "#c8836a" },
  { href: "/hoi-dap",              emoji: "❓", label: "Hỏi Đáp",          desc: "Giải đáp thắc mắc phổ biến",  color: "#d4a0a7" },
  { href: "/me-sau-sinh",          emoji: "🤱", label: "Mẹ Sau Sinh",      desc: "Dinh dưỡng & phục hồi",       color: "#d4a0a7" },
];

/* Mapping: page path → related page paths */
const relatedMap: Record<string, string[]> = {
  "/giai-doan/thai-ky":    ["/checklist", "/tiem-chung", "/me-sau-sinh"],
  "/giai-doan/0-6-thang":  ["/phuong-phap-easy", "/giac-ngu", "/tiem-chung"],
  "/giai-doan/6-12-thang": ["/thuc-don-an-dam", "/phuong-phap-easy", "/bang-tang-truong"],
  "/giai-doan/1-2-tuoi":   ["/thuc-don-an-dam", "/checklist", "/bang-tang-truong"],
  "/phuong-phap-easy":     ["/giac-ngu", "/thuc-don-an-dam", "/giai-doan/0-6-thang"],
  "/thuc-don-an-dam":      ["/phuong-phap-easy", "/bang-tang-truong", "/giai-doan/6-12-thang"],
  "/giac-ngu":             ["/phuong-phap-easy", "/thuc-don-an-dam", "/me-sau-sinh"],
  "/checklist":            ["/giai-doan/thai-ky", "/giai-doan/0-6-thang", "/tiem-chung"],
  "/tiem-chung":           ["/giai-doan/thai-ky", "/giai-doan/0-6-thang", "/bang-tang-truong"],
  "/bang-tang-truong":     ["/tiem-chung", "/thuc-don-an-dam", "/tinh-tuoi"],
  "/tinh-tuoi":            ["/bang-tang-truong", "/tiem-chung", "/meo-hay"],
  "/meo-hay":              ["/hoi-dap", "/giai-doan/thai-ky", "/me-sau-sinh"],
  "/hoi-dap":              ["/meo-hay", "/me-sau-sinh", "/phuong-phap-easy"],
  "/me-sau-sinh":          ["/hoi-dap", "/giac-ngu", "/giai-doan/thai-ky"],
};

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};

interface Props {
  currentPath: string;
}

export default function RelatedPages({ currentPath }: Props) {
  const relatedPaths = relatedMap[currentPath] || [];
  const related = relatedPaths
    .map(href => allPages.find(p => p.href === href))
    .filter(Boolean) as PageInfo[];

  if (related.length === 0) return null;

  return (
    <section style={{ padding: "0 20px 56px" }}>
      <div className="max-w-4xl mx-auto">
        {/* Divider + heading */}
        <div className="flex items-center gap-4" style={{ marginBottom: "20px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c8beb5, transparent)" }} />
          <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#8c7b6e", whiteSpace: "nowrap" }}>
            📖 Đọc thêm
          </h3>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c8beb5, transparent)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {related.map(page => (
            <Link key={page.href} href={page.href} style={{ textDecoration: "none" }}>
              <div style={{ ...neu, padding: "20px 16px", borderTop: `3px solid ${page.color}`,
                            cursor: "pointer", transition: "transform 0.15s", height: "100%" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{page.emoji}</div>
                <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#3a3028", marginBottom: "4px" }}>
                  {page.label}
                </div>
                <p style={{ fontSize: "0.78rem", color: "#8c7b6e", lineHeight: 1.5, margin: 0 }}>
                  {page.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
