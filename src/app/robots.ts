import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://1000daysforbabies.io.vn/sitemap.xml",
    host: "https://1000daysforbabies.io.vn",
  };
}
