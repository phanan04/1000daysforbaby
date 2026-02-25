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

const BASE_URL = "https://1000daysforbabies.io.vn";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "1000 Ngày Đầu Đời — Cẩm Nang Chăm Sóc Mẹ & Bé",
    template: "%s | 1000 Ngày Đầu Đời",
  },
  description:
    "Cẩm nang toàn diện chăm sóc mẹ và bé trong 1000 ngày đầu đời: thai kỳ, sơ sinh, ăn dặm, giấc ngủ, tiêm chủng, tăng trưởng.",
  keywords: [
    "1000 ngày đầu đời", "chăm sóc bé", "thai kỳ", "sơ sinh", "ăn dặm",
    "giấc ngủ trẻ sơ sinh", "tiêm chủng", "bảng tăng trưởng", "phương pháp EASY",
    "mẹ sau sinh", "nuôi con",
  ],
  authors: [{ name: "1000 Ngày Đầu Đời", url: BASE_URL }],
  creator: "1000 Ngày Đầu Đời",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: BASE_URL,
    siteName: "1000 Ngày Đầu Đời",
    title: "1000 Ngày Đầu Đời — Cẩm Nang Chăm Sóc Mẹ & Bé",
    description:
      "Cẩm nang toàn diện chăm sóc mẹ và bé trong 1000 ngày đầu đời.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "1000 Ngày Đầu Đời",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1000 Ngày Đầu Đời — Cẩm Nang Chăm Sóc Mẹ & Bé",
    description:
      "Cẩm nang toàn diện chăm sóc mẹ và bé trong 1000 ngày đầu đời.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
