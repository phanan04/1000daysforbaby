import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Phương Pháp EASY — 1000 Ngày Đầu Đời",
  description: "Hướng dẫn phương pháp EASY (Eat-Activity-Sleep-Your time) của Tracy Hogg. Lịch sinh hoạt mẫu theo từng tháng tuổi.",
  openGraph: { title: "Phương Pháp EASY Cho Bé", description: "Eat → Activity → Sleep → Your time. Lịch sinh hoạt giúp bé ổn định, mẹ có thời gian riêng." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
