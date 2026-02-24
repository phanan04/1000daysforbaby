"use client";

import dynamic from "next/dynamic";
import PageSkeleton from "@/components/PageSkeleton";

const GrowthChartClient = dynamic(
  () => import("@/components/GrowthChartClient"),
  { ssr: false, loading: () => <PageSkeleton /> }
);

export default function GrowthChartPage() {
  return <GrowthChartClient />;
}
