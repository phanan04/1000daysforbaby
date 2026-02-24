"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { stages, vaccineSchedule, devMilestones } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import ShareButton from "@/components/ShareButton";

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow:
    "6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius: "20px",
};
const neuLg: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow:
    "10px 10px 24px rgba(180,170,155,0.75),-10px -10px 24px rgba(255,255,255,0.95)",
  borderRadius: "28px",
};
const inset: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow:
    "inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius: "14px",
};

const palette = ["#d4a0a7", "#c8836a", "#b89a5e"];

/* ── helpers ─────────────────────────────────────────────── */
function calcAge(birth: Date) {
  const now = new Date();
  let months =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth());
  if (now.getDate() < birth.getDate()) months--;
  if (months < 0) months = 0;
  const days = Math.max(
    0,
    Math.floor((now.getTime() - birth.getTime()) / 86400000)
  );
  const weeks = Math.floor(days / 7);
  return { months, days, weeks };
}

function getStageForMonth(m: number) {
  if (m < 0) return stages[0]; // thai kỳ
  if (m < 6) return stages[1];
  if (m < 12) return stages[2];
  return stages[3];
}

function getProgress(days: number) {
  return Math.min(100, Math.round((days / 1000) * 100));
}

/* vaccine logic — parse "X tháng" from vaccineSchedule */
function getNextVaccines(months: number) {
  const ageOrder = [
    { label: "Ngay sau sinh", m: 0 },
    { label: "1 tháng", m: 1 },
    { label: "2 tháng", m: 2 },
    { label: "3 tháng", m: 3 },
    { label: "4 tháng", m: 4 },
    { label: "6 tháng", m: 6 },
    { label: "9 tháng", m: 9 },
    { label: "12 tháng", m: 12 },
    { label: "15 tháng", m: 15 },
    { label: "18 tháng", m: 18 },
    { label: "24 tháng", m: 24 },
  ];
  const upcoming = ageOrder.filter((a) => a.m >= months);
  return upcoming.slice(0, 2).map((a) => {
    const v = vaccineSchedule.find((vs) => vs.age === a.label);
    return v ? { ...v, monthsUntil: a.m - months } : null;
  }).filter(Boolean);
}

function getMilestoneForMonth(months: number) {
  const ranges = [
    { label: "1 tháng", min: 0, max: 1 },
    { label: "2–3 tháng", min: 2, max: 3 },
    { label: "4–6 tháng", min: 4, max: 6 },
    { label: "7–9 tháng", min: 7, max: 9 },
    { label: "10–12 tháng", min: 10, max: 12 },
    { label: "12–18 tháng", min: 13, max: 18 },
    { label: "18–24 tháng", min: 19, max: 24 },
  ];
  const r = ranges.find((r) => months >= r.min && months <= r.max);
  if (!r) return null;
  return devMilestones.find((m) => m.age === r.label) ?? null;
}

/* ── component ───────────────────────────────────────────── */
export default function TinhTuoi() {
  const [mode, setMode] = useState<"birth" | "due">("birth");
  const [dateStr, setDateStr] = useState("");

  const result = useMemo(() => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;

    if (mode === "due") {
      // ngày dự sinh → tính tuần thai
      const now = new Date();
      const dueDate = d;
      const conceptionApprox = new Date(dueDate);
      conceptionApprox.setDate(conceptionApprox.getDate() - 280);
      const daysSinceConception = Math.floor(
        (now.getTime() - conceptionApprox.getTime()) / 86400000
      );
      const weeksPregnant = Math.floor(daysSinceConception / 7);
      const daysExtra = daysSinceConception % 7;
      const daysUntilDue = Math.floor(
        (dueDate.getTime() - now.getTime()) / 86400000
      );
      return {
        type: "pregnant" as const,
        weeksPregnant: Math.max(0, weeksPregnant),
        daysExtra: Math.max(0, daysExtra),
        daysUntilDue,
        dueDate,
        daysSinceConception: Math.max(0, daysSinceConception),
      };
    }

    // mode === "birth"
    const age = calcAge(d);
    const stage = getStageForMonth(age.months);
    const progress = getProgress(age.days);
    const nextVaccines = getNextVaccines(age.months);
    const milestone = getMilestoneForMonth(age.months);

    return {
      type: "born" as const,
      ...age,
      stage,
      progress,
      nextVaccines,
      milestone,
      birthDate: d,
    };
  }, [dateStr, mode]);

  return (
    <div style={{ padding: "32px 20px 64px" }}>
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          style={{
            ...neu,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            textDecoration: "none",
            borderRadius: "30px",
            color: "#7c6b5e",
            fontWeight: 700,
            fontSize: "0.82rem",
            marginBottom: "32px",
          }}
        >
          ← Trang chủ
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          <div
            style={{
              ...neu,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: "50%",
              fontSize: "2rem",
              marginBottom: "18px",
            }}
          >
            🎂
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.6rem,4vw,2.2rem)",
              color: "#3a3028",
              marginBottom: "10px",
            }}
          >
            Bé Của Tôi
          </h1>
          <p style={{ color: "#8c7b6e", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
            Nhập ngày sinh hoặc ngày dự sinh để xem bé đang ở giai đoạn nào, mũi tiêm sắp tới và mốc phát triển.
          </p>
        </motion.div>

        {/* Mode toggle */}
        <div
          style={{
            ...inset,
            display: "flex",
            padding: "4px",
            maxWidth: "340px",
            margin: "0 auto 24px",
          }}
        >
          {(["birth", "due"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setDateStr(""); }}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "0.85rem",
                transition: "all 0.2s",
                ...(mode === m
                  ? {
                      background: "#eae6e1",
                      boxShadow:
                        "4px 4px 10px rgba(180,170,155,0.6),-4px -4px 10px rgba(255,255,255,0.85)",
                      color: "#c08890",
                    }
                  : { background: "transparent", boxShadow: "none", color: "#8c7b6e" }),
              }}
            >
              {m === "birth" ? "🎂 Ngày sinh" : "🤰 Ngày dự sinh"}
            </button>
          ))}
        </div>

        {/* Date input */}
        <div style={{ maxWidth: "340px", margin: "0 auto 36px" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#8c7b6e",
              marginBottom: "8px",
            }}
          >
            {mode === "birth" ? "Ngày sinh của bé" : "Ngày dự sinh"}
          </label>
          <input
            type="date"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
            style={{
              ...inset,
              width: "100%",
              padding: "14px 18px",
              border: "none",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#3a3028",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
        </div>

        {/* Result */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={mode + dateStr}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              {result.type === "pregnant" ? (
                /* ─── Pregnant result ─── */
                <div>
                  <div style={{ ...neuLg, padding: "32px 28px", marginBottom: "20px", borderTop: "4px solid #d4a0a7" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "3rem", marginBottom: "8px" }}>🤰</div>
                      <div style={{ fontWeight: 800, fontSize: "2rem", color: "#c08890" }}>
                        Tuần {result.weeksPregnant}
                        <span style={{ fontSize: "1rem", color: "#8c7b6e", fontWeight: 600 }}>
                          {" "}+ {result.daysExtra} ngày
                        </span>
                      </div>
                      <p style={{ color: "#8c7b6e", marginTop: "8px", fontSize: "0.9rem" }}>
                        {result.daysUntilDue > 0
                          ? `Còn ${result.daysUntilDue} ngày nữa đến ngày dự sinh`
                          : "Đã qua ngày dự sinh — chúc mẹ mẹ tròn con vuông! 🎉"}
                      </p>
                    </div>
                    {/* progress */}
                    <div style={{ marginTop: "24px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700, color: "#8c7b6e", marginBottom: "6px" }}>
                        <span>Hành trình thai kỳ</span>
                        <span>{Math.min(100, Math.round((result.daysSinceConception / 280) * 100))}%</span>
                      </div>
                      <div style={{ ...inset, height: "12px", overflow: "hidden", borderRadius: "99px" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, (result.daysSinceConception / 280) * 100)}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          style={{ height: "100%", background: "linear-gradient(90deg,#d4a0a7,#c08890)", borderRadius: "99px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* trimester info */}
                  <div className="grid grid-cols-3 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "Tam cá nguyệt 1", range: "1–12 tuần", active: result.weeksPregnant <= 12 },
                      { label: "Tam cá nguyệt 2", range: "13–27 tuần", active: result.weeksPregnant >= 13 && result.weeksPregnant <= 27 },
                      { label: "Tam cá nguyệt 3", range: "28–40 tuần", active: result.weeksPregnant >= 28 },
                    ].map((tri, i) => (
                      <div
                        key={tri.label}
                        style={{
                          ...(tri.active ? neu : inset),
                          padding: "16px 12px",
                          textAlign: "center",
                          borderTop: tri.active ? `3px solid ${palette[i]}` : "none",
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: "0.78rem", color: tri.active ? palette[i] : "#a09080" }}>
                          {tri.label}
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "#8c7b6e", marginTop: "4px" }}>{tri.range}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <Link
                      href="/giai-doan/thai-ky"
                      style={{ ...neu, display: "inline-block", padding: "12px 28px", borderRadius: "30px", fontWeight: 800, fontSize: "0.88rem", color: "#c08890", textDecoration: "none" }}
                    >
                      Xem hướng dẫn thai kỳ →
                    </Link>
                  </div>
                </div>
              ) : (
                /* ─── Born result ─── */
                <div>
                  {/* Main card */}
                  <div style={{ ...neuLg, padding: "32px 28px", marginBottom: "20px", borderTop: "4px solid #d4a0a7" }}>
                    <div className="flex items-center gap-4 mb-5">
                      <div style={{ fontSize: "3rem" }}>{result.stage.emoji}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "1.6rem", color: "#c08890" }}>
                          {result.months < 1
                            ? `${result.days} ngày tuổi`
                            : result.months < 12
                              ? `${result.months} tháng tuổi`
                              : `${Math.floor(result.months / 12)} tuổi ${result.months % 12 ? `${result.months % 12} tháng` : ""}`}
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#8c7b6e", fontWeight: 600 }}>
                          Giai đoạn: <strong style={{ color: "#c08890" }}>{result.stage.title}</strong>
                        </div>
                      </div>
                    </div>

                    {/* 1000 days progress */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700, color: "#8c7b6e", marginBottom: "6px" }}>
                        <span>Hành trình 1000 ngày</span>
                        <span>{result.progress}% ({result.days}/1000 ngày)</span>
                      </div>
                      <div style={{ ...inset, height: "12px", overflow: "hidden", borderRadius: "99px" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          style={{ height: "100%", background: "linear-gradient(90deg,#d4a0a7,#c8836a,#b89a5e)", borderRadius: "99px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "Ngày tuổi", value: result.days, color: "#d4a0a7" },
                      { label: "Tuần tuổi", value: result.weeks, color: "#c8836a" },
                      { label: "Tháng tuổi", value: result.months, color: "#b89a5e" },
                    ].map((s) => (
                      <div key={s.label} style={{ ...neu, padding: "18px 12px", textAlign: "center" }}>
                        <div style={{ fontWeight: 800, fontSize: "1.5rem", color: s.color }}>{s.value}</div>
                        <div style={{ fontSize: "0.72rem", color: "#8c7b6e", fontWeight: 600, marginTop: "2px" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Next vaccines */}
                  {result.nextVaccines.length > 0 && (
                    <div style={{ ...neu, padding: "22px 24px", marginBottom: "20px", borderLeft: "4px solid #d4a0a7" }}>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#c08890", marginBottom: "14px" }}>
                        💉 Mũi tiêm sắp tới
                      </div>
                      {result.nextVaccines.map((v: any) => (
                        <div key={v.age} style={{ marginBottom: "12px" }}>
                          <div className="flex items-center gap-2 mb-1">
                            <span style={{ ...inset, padding: "3px 12px", borderRadius: "20px", fontSize: "0.72rem", fontWeight: 800, color: "#c8836a" }}>
                              {v.age}
                            </span>
                            {v.monthsUntil === 0 ? (
                              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#d4a0a7" }}>⬅ Ngay bây giờ!</span>
                            ) : (
                              <span style={{ fontSize: "0.7rem", color: "#8c7b6e" }}>
                                (còn {v.monthsUntil} tháng)
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1.5 ml-1">
                            {v.vaccines.map((name: string) => (
                              <span key={name} style={{ fontSize: "0.75rem", color: "#5a4a3c", fontWeight: 600 }}>
                                • {name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link
                        href="/tiem-chung"
                        style={{ fontSize: "0.78rem", fontWeight: 700, color: "#c08890", textDecoration: "none" }}
                      >
                        Xem toàn bộ lịch tiêm chủng →
                      </Link>
                    </div>
                  )}

                  {/* Milestones */}
                  {result.milestone && (
                    <div style={{ ...neu, padding: "22px 24px", marginBottom: "20px", borderLeft: "4px solid #b89a5e" }}>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#b89a5e", marginBottom: "14px" }}>
                        📊 Mốc phát triển giai đoạn {result.milestone.age}
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {result.milestone.items.map((item: string, j: number) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <span
                              style={{
                                ...inset,
                                borderRadius: "50%",
                                width: 20,
                                height: 20,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.6rem",
                                fontWeight: 900,
                                color: "#b89a5e",
                                marginTop: "2px",
                              }}
                            >
                              {j + 1}
                            </span>
                            <span style={{ fontSize: "0.8rem", color: "#5a4a3c", lineHeight: 1.5 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Link to stage */}
                  <div style={{ textAlign: "center" }}>
                    <Link
                      href={`/giai-doan/${result.stage.slug}`}
                      style={{ ...neu, display: "inline-block", padding: "12px 28px", borderRadius: "30px", fontWeight: 800, fontSize: "0.88rem", color: "#c08890", textDecoration: "none" }}
                    >
                      Xem hướng dẫn {result.stage.title} →
                    </Link>
                  </div>
                </div>
              )}

              {/* Share */}
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <ShareButton
                  title={
                    result.type === "pregnant"
                      ? `Bé đang tuần ${result.weeksPregnant} thai kỳ!`
                      : `Bé ${result.months} tháng tuổi — ${result.progress}% hành trình 1000 ngày!`
                  }
                  text={
                    result.type === "pregnant"
                      ? `Thai kỳ tuần ${result.weeksPregnant}+${result.daysExtra} ngày. Còn ${Math.max(0, result.daysUntilDue)} ngày nữa đến ngày dự sinh!`
                      : `Bé ${result.days} ngày tuổi, đang ở giai đoạn ${result.stage.title}. Hành trình 1000 ngày: ${result.progress}%!`
                  }
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
