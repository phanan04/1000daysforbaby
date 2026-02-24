"use client";

import dynamic from "next/dynamic";
import PageSkeleton from "@/components/PageSkeleton";

const AgeCalcClient = dynamic(
  () => import("@/components/AgeCalcClient"),
  { ssr: false, loading: () => <PageSkeleton /> }
);

export default function TinhTuoi() {
  return <AgeCalcClient />;
}
