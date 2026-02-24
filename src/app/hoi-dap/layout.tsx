import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hỏi Đáp Chăm Sóc Bé — 1000 Ngày Đầu Đời",
  description: "15 câu hỏi thường gặp về chăm sóc bé sơ sinh, ăn dặm, giấc ngủ, tiêm chủng và phát triển. Giải đáp từ chuyên gia.",
  openGraph: { title: "Hỏi Đáp Mẹ Bỉm", description: "Giải đáp thắc mắc thường gặp về chăm sóc bé yêu." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
