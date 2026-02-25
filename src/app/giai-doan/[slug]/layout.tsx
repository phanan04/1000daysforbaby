import type { Metadata } from "next";
import { stages } from "@/lib/data";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return stages.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stage = stages.find((s) => s.slug === slug);

  if (!stage) {
    return { title: "Không tìm thấy — 1000 Ngày Đầu Đời" };
  }

  const url = `https://1000daysforbabies.io.vn/giai-doan/${stage.slug}`;

  return {
    title: `${stage.title} — ${stage.subtitle} | 1000 Ngày Đầu Đời`,
    description: stage.heroDesc,
    alternates: { canonical: url },
    openGraph: {
      title: `${stage.title} — ${stage.subtitle}`,
      description: stage.heroDesc,
      url,
      siteName: "1000 Ngày Đầu Đời",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: stage.title }],
      locale: "vi_VN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${stage.title} — ${stage.subtitle}`,
      description: stage.heroDesc,
      images: ["/opengraph-image"],
    },
  };
}

export default async function SlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stage = stages.find((s) => s.slug === slug);
  const url = `https://1000daysforbabies.io.vn/giai-doan/${slug}`;
  return (
    <>
      {stage && (
        <>
          <ArticleJsonLd title={`${stage.title} — ${stage.subtitle}`} description={stage.heroDesc} url={url} />
          <BreadcrumbJsonLd items={[
            { name: "Trang chủ", url: "/" },
            { name: "Giai Đoạn", url: "/giai-doan" },
            { name: stage.title, url: `/giai-doan/${slug}` },
          ]} />
        </>
      )}
      {children}
    </>
  );
}
