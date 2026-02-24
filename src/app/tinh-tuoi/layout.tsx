import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tính Tuổi Bé — 1000 Ngày Đầu Đời",
  description: "Nhập ngày sinh hoặc ngày dự sinh để tính tuổi bé chính xác theo ngày, tuần, tháng. Hỗ trợ cả thai kỳ và sau sinh.",
  openGraph: { title: "Tính Tuổi Bé", description: "Công cụ tính tuổi bé chính xác từ ngày dự sinh hoặc ngày sinh." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
