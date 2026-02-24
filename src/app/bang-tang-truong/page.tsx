"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { growthData } from "@/lib/data";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Area, ComposedChart, ReferenceLine,
} from "recharts";

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};
const neuSm: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "4px 4px 10px rgba(180,170,155,0.55),-4px -4px 10px rgba(255,255,255,0.88)",
  borderRadius: "14px",
};
const inset: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius: "14px",
};

type Gender = "boy" | "girl";
type Metric = "weight" | "height";

export default function GrowthChartPage() {
  const [gender, setGender] = useState<Gender>("boy");
  const [metric, setMetric] = useState<Metric>("weight");
  const [babyWeight, setBabyWeight] = useState("");
  const [babyHeight, setBabyHeight] = useState("");
  const [babyMonth, setBabyMonth] = useState("");

  const isBoy = gender === "boy";
  const isWeight = metric === "weight";
  const accent = isBoy ? "#6b9bd2" : "#d4a0a7";
  const accentDark = isBoy ? "#4a7bb5" : "#c08890";
  const areaColor = isBoy ? "rgba(107,155,210,0.15)" : "rgba(212,160,167,0.15)";

  /* Chart data */
  const chartData = useMemo(() => {
    return growthData.map((d) => ({
      month: d.month,
      label: d.label,
      median: isWeight
        ? (isBoy ? d.boyWeight : d.girlWeight)
        : (isBoy ? d.boyHeight : d.girlHeight),
      p3: isWeight
        ? (isBoy ? d.boyWeightP3 : d.girlWeightP3)
        : (isBoy ? d.boyHeightP3 : d.girlHeightP3),
      p97: isWeight
        ? (isBoy ? d.boyWeightP97 : d.girlWeightP97)
        : (isBoy ? d.boyHeightP97 : d.girlHeightP97),
    }));
  }, [gender, metric]);

  /* So sánh bé */
  const monthNum = parseInt(babyMonth) || -1;
  const babyVal = isWeight ? parseFloat(babyWeight) : parseFloat(babyHeight);
  const matchRow = monthNum >= 0 && monthNum <= 24 ? growthData[monthNum] : null;

  let status = "";
  let statusColor = "#8c7b6e";
  if (matchRow && !isNaN(babyVal)) {
    const p3 = isWeight
      ? (isBoy ? matchRow.boyWeightP3 : matchRow.girlWeightP3)
      : (isBoy ? matchRow.boyHeightP3 : matchRow.girlHeightP3);
    const p97 = isWeight
      ? (isBoy ? matchRow.boyWeightP97 : matchRow.girlWeightP97)
      : (isBoy ? matchRow.boyHeightP97 : matchRow.girlHeightP97);
    const median = isWeight
      ? (isBoy ? matchRow.boyWeight : matchRow.girlWeight)
      : (isBoy ? matchRow.boyHeight : matchRow.girlHeight);

    if (babyVal < p3) {
      status = `Dưới chuẩn (thấp hơn P3). Chuẩn: ${median} ${isWeight ? "kg" : "cm"}. Nên tham khảo bác sĩ.`;
      statusColor = "#d46a6a";
    } else if (babyVal > p97) {
      status = `Trên chuẩn (cao hơn P97). Chuẩn: ${median} ${isWeight ? "kg" : "cm"}. Có thể theo dõi thêm.`;
      statusColor = "#b89a5e";
    } else {
      const diff = babyVal - median;
      const pct = ((diff / median) * 100).toFixed(1);
      const sign = diff >= 0 ? "+" : "";
      status = `Trong khoảng bình thường ✓ (${sign}${pct}% so với chuẩn ${median} ${isWeight ? "kg" : "cm"})`;
      statusColor = "#5d9a6e";
    }
  }

  /* Custom tooltip */
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;
    const d = payload[0]?.payload;
    return (
      <div style={{ ...neuSm, padding: "12px 16px", fontSize: "0.8rem" }}>
        <div style={{ fontWeight: 800, color: "#3a3028", marginBottom: "4px" }}>{d.label}</div>
        <div style={{ color: accentDark }}>
          Trung vị: <b>{d.median} {isWeight ? "kg" : "cm"}</b>
        </div>
        <div style={{ color: "#8c7b6e", fontSize: "0.72rem", marginTop: "2px" }}>
          P3–P97: {d.p3} – {d.p97} {isWeight ? "kg" : "cm"}
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "32px 20px 64px" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>📏</div>
          <h1 style={{ fontWeight: 800, fontSize: "1.6rem", color: "#3a3028", marginBottom: "6px" }}>
            Bảng Tăng Trưởng WHO
          </h1>
          <p style={{ color: "#8c7b6e", fontSize: "0.88rem", lineHeight: 1.6 }}>
            So sánh cân nặng & chiều cao của bé với chuẩn WHO 2006, từ sơ sinh đến 24 tháng.
          </p>
        </div>

        {/* Toggle row */}
        <div className="flex flex-wrap justify-center gap-3" style={{ marginBottom: "24px" }}>
          {/* Gender toggle */}
          <div style={{ ...inset, padding: "4px", display: "inline-flex", gap: "4px" }}>
            {(["boy", "girl"] as Gender[]).map((g) => (
              <button key={g} onClick={() => setGender(g)}
                style={{
                  padding: "8px 20px", borderRadius: "12px", border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: "0.82rem", transition: "all 0.2s",
                  background: gender === g ? "#eae6e1" : "transparent",
                  boxShadow: gender === g ? "4px 4px 10px rgba(180,170,155,0.6),-4px -4px 10px rgba(255,255,255,0.9)" : "none",
                  color: gender === g ? (g === "boy" ? "#4a7bb5" : "#c08890") : "#8c7b6e",
                }}>
                {g === "boy" ? "👦 Bé trai" : "👧 Bé gái"}
              </button>
            ))}
          </div>
          {/* Metric toggle */}
          <div style={{ ...inset, padding: "4px", display: "inline-flex", gap: "4px" }}>
            {(["weight", "height"] as Metric[]).map((m) => (
              <button key={m} onClick={() => setMetric(m)}
                style={{
                  padding: "8px 20px", borderRadius: "12px", border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: "0.82rem", transition: "all 0.2s",
                  background: metric === m ? "#eae6e1" : "transparent",
                  boxShadow: metric === m ? "4px 4px 10px rgba(180,170,155,0.6),-4px -4px 10px rgba(255,255,255,0.9)" : "none",
                  color: metric === m ? accentDark : "#8c7b6e",
                }}>
                {m === "weight" ? "⚖️ Cân nặng" : "📐 Chiều cao"}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ ...neu, padding: "24px 12px 16px 0" }}>
          <ResponsiveContainer width="100%" height={340}>
            <ComposedChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(180,170,155,0.3)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8c7b6e" }}
                     label={{ value: "Tháng tuổi", position: "insideBottom", offset: -2, fontSize: 11, fill: "#8c7b6e" }} />
              <YAxis tick={{ fontSize: 11, fill: "#8c7b6e" }}
                     label={{ value: isWeight ? "kg" : "cm", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#8c7b6e" }} />
              <Tooltip content={<CustomTooltip />} />
              {/* Normal range area */}
              <Area type="monotone" dataKey="p97" stackId="range" stroke="none" fill="transparent" />
              <Area type="monotone" dataKey="p3" stackId="range" stroke="none" fill={areaColor} />
              {/* P3 and P97 lines */}
              <Line type="monotone" dataKey="p3" stroke={accent} strokeWidth={1} strokeDasharray="4 4" dot={false} name="P3" />
              <Line type="monotone" dataKey="p97" stroke={accent} strokeWidth={1} strokeDasharray="4 4" dot={false} name="P97" />
              {/* Median line */}
              <Line type="monotone" dataKey="median" stroke={accentDark} strokeWidth={2.5} dot={false} name="Trung vị" />
              {/* Baby marker */}
              {matchRow && !isNaN(babyVal) && (
                <ReferenceLine x={monthNum} stroke={accentDark} strokeDasharray="3 3" />
              )}
            </ComposedChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4" style={{ padding: "8px 20px 0", fontSize: "0.72rem", color: "#8c7b6e" }}>
            <span><span style={{ display: "inline-block", width: 20, height: 2, background: accentDark, marginRight: 4, verticalAlign: "middle" }} /> Trung vị (P50)</span>
            <span><span style={{ display: "inline-block", width: 20, height: 1, background: accent, marginRight: 4, verticalAlign: "middle", borderTop: "1px dashed" + accent }} /> P3 – P97</span>
            <span style={{ background: areaColor, padding: "0 8px", borderRadius: 4 }}>Khoảng bình thường</span>
          </div>
        </div>

        {/* So sánh bé */}
        <div style={{ ...neu, padding: "24px 20px", marginTop: "20px" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1rem", color: "#3a3028", marginBottom: "16px" }}>
            🔍 So sánh chỉ số của bé
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ marginBottom: "16px" }}>
            {/* Month */}
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8c7b6e", display: "block", marginBottom: "6px" }}>Tháng tuổi</label>
              <select value={babyMonth} onChange={(e) => setBabyMonth(e.target.value)}
                style={{ ...inset, width: "100%", padding: "10px 14px", border: "none", fontSize: "0.88rem",
                         fontWeight: 600, color: "#3a3028", appearance: "auto", cursor: "pointer" }}>
                <option value="">Chọn...</option>
                {growthData.map((d) => (
                  <option key={d.month} value={d.month}>{d.label}</option>
                ))}
              </select>
            </div>
            {/* Weight */}
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8c7b6e", display: "block", marginBottom: "6px" }}>Cân nặng (kg)</label>
              <input type="number" step="0.1" placeholder="VD: 7.5"
                value={babyWeight} onChange={(e) => { setBabyWeight(e.target.value); setMetric("weight"); }}
                style={{ ...inset, width: "100%", padding: "10px 14px", border: "none", fontSize: "0.88rem",
                         fontWeight: 600, color: "#3a3028" }} />
            </div>
            {/* Height */}
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8c7b6e", display: "block", marginBottom: "6px" }}>Chiều cao (cm)</label>
              <input type="number" step="0.1" placeholder="VD: 68"
                value={babyHeight} onChange={(e) => { setBabyHeight(e.target.value); setMetric("height"); }}
                style={{ ...inset, width: "100%", padding: "10px 14px", border: "none", fontSize: "0.88rem",
                         fontWeight: 600, color: "#3a3028" }} />
            </div>
          </div>

          {/* Result */}
          {status && (
            <div style={{ ...neuSm, padding: "14px 18px", borderLeft: `3px solid ${statusColor}` }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: statusColor, lineHeight: 1.5 }}>
                {status}
              </p>
            </div>
          )}
        </div>

        {/* Bảng số liệu */}
        <div style={{ ...neu, padding: "24px 20px", marginTop: "20px" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1rem", color: "#3a3028", marginBottom: "16px" }}>
            📊 Bảng số liệu chi tiết ({isBoy ? "Bé trai" : "Bé gái"})
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.78rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(180,170,155,0.4)" }}>
                  <th style={{ padding: "10px 8px", textAlign: "left", fontWeight: 800, color: "#3a3028" }}>Tuổi</th>
                  <th style={{ padding: "10px 8px", textAlign: "center", fontWeight: 800, color: "#3a3028" }}>Cân nặng (kg)</th>
                  <th style={{ padding: "10px 8px", textAlign: "center", fontWeight: 800, color: "#8c7b6e", fontSize: "0.7rem" }}>P3–P97</th>
                  <th style={{ padding: "10px 8px", textAlign: "center", fontWeight: 800, color: "#3a3028" }}>Chiều cao (cm)</th>
                  <th style={{ padding: "10px 8px", textAlign: "center", fontWeight: 800, color: "#8c7b6e", fontSize: "0.7rem" }}>P3–P97</th>
                </tr>
              </thead>
              <tbody>
                {growthData.filter((_, i) => i % 2 === 0 || i <= 6).map((d) => {
                  const w = isBoy ? d.boyWeight : d.girlWeight;
                  const h = isBoy ? d.boyHeight : d.girlHeight;
                  const wRange = `${isBoy ? d.boyWeightP3 : d.girlWeightP3}–${isBoy ? d.boyWeightP97 : d.girlWeightP97}`;
                  const hRange = `${isBoy ? d.boyHeightP3 : d.girlHeightP3}–${isBoy ? d.boyHeightP97 : d.girlHeightP97}`;
                  const isHighlight = d.month === monthNum;
                  return (
                    <tr key={d.month} style={{
                      borderBottom: "1px solid rgba(180,170,155,0.2)",
                      background: isHighlight ? areaColor : "transparent",
                    }}>
                      <td style={{ padding: "8px", fontWeight: 700, color: "#3a3028" }}>{d.label}</td>
                      <td style={{ padding: "8px", textAlign: "center", fontWeight: 700, color: accentDark }}>{w}</td>
                      <td style={{ padding: "8px", textAlign: "center", color: "#8c7b6e", fontSize: "0.72rem" }}>{wRange}</td>
                      <td style={{ padding: "8px", textAlign: "center", fontWeight: 700, color: accentDark }}>{h}</td>
                      <td style={{ padding: "8px", textAlign: "center", color: "#8c7b6e", fontSize: "0.72rem" }}>{hRange}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div style={{ ...neuSm, padding: "16px 20px", marginTop: "20px", borderLeft: "3px solid #b89a5e" }}>
          <p style={{ fontSize: "0.78rem", color: "#8c7b6e", lineHeight: 1.6 }}>
            <strong style={{ color: "#b89a5e" }}>📌 Lưu ý:</strong> Số liệu dựa trên tiêu chuẩn WHO 2006 (trung vị).
            Mỗi bé phát triển khác nhau — nếu chỉ số nằm trong khoảng P3–P97,
            bé vẫn phát triển bình thường. Nên tham khảo ý kiến bác sĩ nhi khoa nếu có lo lắng.
          </p>
        </div>

        {/* Back */}
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/" style={{ ...neuSm, display: "inline-block", padding: "10px 28px",
                                  fontWeight: 700, fontSize: "0.85rem", color: accentDark,
                                  textDecoration: "none", borderRadius: "30px" }}>
            ← Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
