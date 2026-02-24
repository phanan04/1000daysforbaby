import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bảng Giấc Ngủ Chuẩn — 1000 Ngày Đầu Đời",
  description: "Số giờ ngủ, số giấc và lịch ngủ khuyến nghị cho bé 0–24 tháng. Mẹo giải quyết sleep regression theo từng tháng tuổi.",
  openGraph: { title: "Bảng Giấc Ngủ Cho Bé", description: "Hướng dẫn giấc ngủ chuẩn theo từng giai đoạn phát triển." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
