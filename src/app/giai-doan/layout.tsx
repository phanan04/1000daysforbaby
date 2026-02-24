import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Giai Đoạn Phát Triển — 1000 Ngày Đầu Đời",
  description: "Chi tiết 4 giai đoạn phát triển: thai kỳ, 0–6 tháng, 6–12 tháng, 1–2 tuổi. Dinh dưỡng, chăm sóc, dấu hiệu nguy hiểm.",
  openGraph: { title: "Giai Đoạn Phát Triển Bé", description: "Hướng dẫn chăm sóc bé theo từng giai đoạn trong 1000 ngày đầu đời." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
