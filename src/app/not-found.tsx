import Link from "next/link";

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};
const neuLg: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "10px 10px 24px rgba(180,170,155,0.75),-10px -10px 24px rgba(255,255,255,0.95)",
  borderRadius: "28px",
};

const quickLinks = [
  { emoji: "🤰", label: "Thai Kỳ",          href: "/giai-doan/thai-ky" },
  { emoji: "👶", label: "0-6 Tháng",        href: "/giai-doan/0-6-thang" },
  { emoji: "🎂", label: "Tính Tuổi Bé",     href: "/tinh-tuoi" },
  { emoji: "📏", label: "Tăng Trưởng",      href: "/bang-tang-truong" },
  { emoji: "💉", label: "Tiêm Chủng",       href: "/tiem-chung" },
  { emoji: "😴", label: "Giấc Ngủ",         href: "/giac-ngu" },
];

export default function NotFound() {
  return (
    <div style={{ background: "#eae6e1", minHeight: "80vh", display: "flex",
                  alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div className="max-w-lg mx-auto text-center">
        <div style={{ ...neuLg, padding: "48px 36px", marginBottom: 32 }}>
          <div style={{ fontSize: "4rem", marginBottom: 16 }}>🌸</div>
          <div style={{ fontWeight: 800, fontSize: "4rem", color: "#c08890",
                        lineHeight: 1, marginBottom: 8 }}>404</div>
          <h1 style={{ fontWeight: 800, fontSize: "1.4rem", color: "#3a3028", marginBottom: 12 }}>
            Trang không tìm thấy
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#8c7b6e", lineHeight: 1.7, marginBottom: 28 }}>
            Có thể trang bạn tìm đã được di chuyển hoặc không tồn tại.
            Hãy thử một trong các trang dưới đây nhé!
          </p>
          <Link href="/"
            style={{ background: "#c08890", color: "#fff", textDecoration: "none",
                     padding: "12px 32px", borderRadius: 30, fontWeight: 800,
                     fontSize: "0.95rem", display: "inline-block",
                     boxShadow: "4px 4px 12px rgba(192,136,144,0.4)" }}>
            ← Về trang chủ
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {quickLinks.map(l => (
            <Link key={l.href} href={l.href}
              style={{ ...neu, padding: "16px 10px", textAlign: "center",
                       textDecoration: "none", display: "block" }}
              className="card-hover">
              <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>{l.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: "0.78rem", color: "#c08890" }}>{l.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
