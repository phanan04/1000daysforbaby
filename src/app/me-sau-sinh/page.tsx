import type { Metadata } from "next";
import { postpartumData } from "@/lib/data";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Dinh Dưỡng Mẹ Sau Sinh — 1000 Ngày Đầu Đời",
  description: "Hướng dẫn dinh dưỡng, phục hồi thể chất và sức khoẻ tinh thần cho mẹ sau sinh. Bổ sung vi chất, chế độ ăn lợi sữa.",
  openGraph: {
    title: "Chăm Sóc Mẹ Sau Sinh",
    description: "Dinh dưỡng, phục hồi và sức khoẻ tinh thần cho mẹ bỉm sữa.",
  },
};

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};
const neuSm: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "4px 4px 10px rgba(180,170,155,0.55),-4px -4px 10px rgba(255,255,255,0.88)",
  borderRadius: "14px",
};
const inset: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius: "14px",
};

const sectionColors = ["#d4a0a7", "#c8836a", "#b89a5e", "#c08890", "#6b9bd2", "#5d9a6e"];

export default function PostpartumPage() {
  return (
    <>
    <Breadcrumb items={[{ label: "Mẹ Sau Sinh" }]} />
    <div style={{ padding: "32px 20px 64px" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>🤱</div>
          <h1 style={{ fontWeight: 800, fontSize: "1.6rem", color: "#3a3028", marginBottom: "6px" }}>
            Dinh Dưỡng & Phục Hồi Sau Sinh
          </h1>
          <p style={{ color: "#8c7b6e", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto" }}>
            Mẹ khoẻ thì bé mới khoẻ. Hướng dẫn dinh dưỡng, lợi sữa và phục hồi thể chất–tinh thần sau sinh.
          </p>
        </div>

        {/* Sections grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {postpartumData.map((section, i) => (
            <div key={section.title} style={{ ...neu, padding: "24px 20px", borderTop: `3px solid ${sectionColors[i % sectionColors.length]}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ fontSize: "1.6rem" }}>{section.icon}</span>
                <h2 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#3a3028" }}>{section.title}</h2>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{ ...inset, padding: "12px 16px" }}>
                    <p style={{ fontSize: "0.82rem", color: "#5a4d40", lineHeight: 1.6, margin: 0 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick nutrition table */}
        <div style={{ ...neu, padding: "24px 20px", marginTop: "20px" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#3a3028", marginBottom: "16px" }}>
            📋 Tóm tắt nhu cầu dinh dưỡng hàng ngày
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(180,170,155,0.4)" }}>
                  <th style={{ padding: "10px 8px", textAlign: "left", fontWeight: 800, color: "#3a3028" }}>Chất dinh dưỡng</th>
                  <th style={{ padding: "10px 8px", textAlign: "center", fontWeight: 800, color: "#c08890" }}>Nhu cầu/ngày</th>
                  <th style={{ padding: "10px 8px", textAlign: "left", fontWeight: 800, color: "#8c7b6e" }}>Nguồn thực phẩm</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Năng lượng", "2300–2500 kcal", "Cơm, bún, khoai, bánh mì nguyên hạt"],
                  ["Đạm (protein)", "65–80g", "Thịt, cá, trứng, đậu phụ, sữa"],
                  ["Sắt", "15mg", "Thịt bò, gan, rau bina, đậu lăng"],
                  ["Canxi", "1000mg", "Sữa, phô mai, tôm, cá mòi, rau xanh đậm"],
                  ["Vitamin D", "600–1000 IU", "Cá hồi, lòng đỏ trứng, tắm nắng sáng"],
                  ["DHA", "200–300mg", "Cá hồi, cá thu, cá trích, viên dầu cá"],
                  ["Acid folic", "500mcg", "Rau xanh đậm, cam, ngũ cốc bổ sung"],
                  ["Nước", "2.5–3 lít", "Nước lọc, sữa, canh, nước ép tươi"],
                ].map(([nutrient, amount, source], idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid rgba(180,170,155,0.2)" }}>
                    <td style={{ padding: "8px", fontWeight: 700, color: "#3a3028" }}>{nutrient}</td>
                    <td style={{ padding: "8px", textAlign: "center", fontWeight: 700, color: "#c08890" }}>{amount}</td>
                    <td style={{ padding: "8px", color: "#8c7b6e", fontSize: "0.75rem" }}>{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div style={{ ...neuSm, padding: "16px 20px", marginTop: "20px", borderLeft: "3px solid #d4a0a7" }}>
          <p style={{ fontSize: "0.78rem", color: "#8c7b6e", lineHeight: 1.6 }}>
            <strong style={{ color: "#d4a0a7" }}>💝 Lời nhắn:</strong> Đừng quá áp lực phải ăn đủ mọi thứ ngay.
            Hãy ăn theo khả năng, bổ sung dần. Việc quan trọng nhất là mẹ được nghỉ ngơi, được hỗ trợ
            và cảm thấy yêu thương. Bé cần một mẹ khoẻ mạnh hơn là một mẹ hoàn hảo.
          </p>
        </div>

        {/* Share & Back */}
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <ShareButton title="Dinh Dưỡng Sau Sinh" text="Hướng dẫn dinh dưỡng và phục hồi sau sinh cho mẹ bỉm" />
        </div>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Link href="/" style={{
            ...neuSm, display: "inline-block", padding: "10px 28px",
            fontWeight: 700, fontSize: "0.85rem", color: "#c08890",
            textDecoration: "none", borderRadius: "30px",
          }}>
            ← Trang chủ
          </Link>
        </div>
      </div>
    </div>
    <RelatedPages currentPath="/me-sau-sinh" />
    </>
  );
}
