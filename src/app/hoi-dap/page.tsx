"use client";

import { useState } from "react";
import Link from "next/link";
import { faqData } from "@/lib/data";
import ShareButton from "@/components/ShareButton";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedPages from "@/components/RelatedPages";

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};
const inset: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius: "14px",
};

const categories = ["Tất cả", ...Array.from(new Set(faqData.map((f) => f.category)))];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [cat, setCat] = useState("Tất cả");

  const filtered = cat === "Tất cả" ? faqData : faqData.filter((f) => f.category === cat);

  return (
    <>
    <Breadcrumb items={[{ label: "Hỏi Đáp" }]} />
    <div style={{ padding: "32px 20px 64px" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>❓</div>
          <h1 style={{ fontWeight: 800, fontSize: "1.6rem", color: "#3a3028", marginBottom: "6px" }}>
            Câu Hỏi Thường Gặp
          </h1>
          <p style={{ color: "#8c7b6e", fontSize: "0.88rem", lineHeight: 1.6 }}>
            Giải đáp thắc mắc phổ biến nhất của ba mẹ trong 1000 ngày đầu đời.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "24px" }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              style={{
                padding: "6px 16px", borderRadius: "20px", border: "none", cursor: "pointer",
                fontWeight: 700, fontSize: "0.78rem", transition: "all 0.2s",
                background: "#eae6e1",
                boxShadow: cat === c
                  ? "4px 4px 10px rgba(180,170,155,0.6),-4px -4px 10px rgba(255,255,255,0.9)"
                  : "inset 3px 3px 6px rgba(180,170,155,0.4),inset -3px -3px 6px rgba(255,255,255,0.7)",
                color: cat === c ? "#c08890" : "#8c7b6e",
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} style={neu}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  style={{
                    width: "100%", padding: "18px 20px", border: "none", cursor: "pointer",
                    background: "transparent", textAlign: "left", display: "flex",
                    alignItems: "flex-start", gap: "12px",
                  }}>
                  <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: "2px" }}>{faq.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "#3a3028", lineHeight: 1.4 }}>
                      {faq.question}
                    </div>
                    <span style={{
                      ...inset, display: "inline-block", padding: "2px 10px", fontSize: "0.65rem",
                      fontWeight: 700, color: "#c08890", marginTop: "6px",
                    }}>
                      {faq.category}
                    </span>
                  </div>
                  <span style={{
                    fontSize: "1.2rem", color: "#8c7b6e", flexShrink: 0,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 20px 18px 52px",
                  }}>
                    <div style={{
                      ...inset, padding: "14px 16px",
                    }}>
                      <p style={{ fontSize: "0.84rem", color: "#5a4d40", lineHeight: 1.7 }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div style={{
          ...neu, padding: "16px 20px", marginTop: "24px",
          borderLeft: "3px solid #b89a5e",
        }}>
          <p style={{ fontSize: "0.78rem", color: "#8c7b6e", lineHeight: 1.6 }}>
            <strong style={{ color: "#b89a5e" }}>📌 Lưu ý:</strong> Thông tin trên mang tính tham khảo.
            Mỗi bé phát triển khác nhau. Luôn tham khảo ý kiến bác sĩ nhi khoa cho trường hợp cụ thể.
          </p>
        </div>

        {/* Share & Back */}
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <ShareButton title="FAQ - 1000 Ngày Đầu Đời" text="Giải đáp thắc mắc phổ biến của ba mẹ trong 1000 ngày đầu đời" />
        </div>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Link href="/" style={{
            ...neu, display: "inline-block", padding: "10px 28px",
            fontWeight: 700, fontSize: "0.85rem", color: "#c08890",
            textDecoration: "none", borderRadius: "30px",
          }}>
            ← Trang chủ
          </Link>
        </div>
      </div>
    </div>
    <RelatedPages currentPath="/hoi-dap" />
    </>
  );
}
