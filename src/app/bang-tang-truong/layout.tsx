import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bảng Tăng Trưởng WHO — 1000 Ngày Đầu Đời",
  description: "Biểu đồ cân nặng, chiều cao chuẩn WHO 2006 cho bé trai và bé gái 0–24 tháng. So sánh chỉ số của bé với chuẩn quốc tế.",
  openGraph: { title: "Bảng Tăng Trưởng Chuẩn WHO", description: "Theo dõi cân nặng, chiều cao bé theo chuẩn WHO 2006." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
