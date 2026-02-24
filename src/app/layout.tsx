import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["400","500","600","700","800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1000 Ngày Đầu Đời",
  description: "Hướng dẫn chăm sóc bé trong 1000 ngày đầu đời",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={nunito.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
