import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thực Đơn Ăn Dặm Mẫu — 1000 Ngày Đầu Đời",
  description: "Gợi ý thực đơn ăn dặm theo tuần cho bé 6–24 tháng. Menu Việt Nam đa dạng, đủ chất, phù hợp từng giai đoạn.",
  openGraph: { title: "Thực Đơn Ăn Dặm Cho Bé", description: "Thực đơn mẫu theo tuần từ 6 đến 24 tháng, phong cách Việt Nam." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
