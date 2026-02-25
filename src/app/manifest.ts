import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "1000 Ngày Đầu Đời",
    short_name: "1000 Ngày",
    description: "Cẩm nang chăm sóc mẹ và bé trong 1000 ngày đầu đời",
    start_url: "/",
    display: "standalone",
    background_color: "#eae6e1",
    theme_color: "#c08890",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
    categories: ["health", "lifestyle", "parenting"],
    lang: "vi",
  };
}
