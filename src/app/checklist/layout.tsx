import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checklist Chuẩn Bị Cho Bé — 1000 Ngày Đầu Đời",
  description: "Danh sách đồ cần mua và chuẩn bị: túi đồ đi sinh, đồ sơ sinh, ăn dặm, bé tập đi. Tick để theo dõi tiến độ.",
  openGraph: { title: "Checklist Chuẩn Bị Cho Bé", description: "Danh sách đồ cần thiết cho mẹ và bé theo từng giai đoạn." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
