import { stages } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

const neu: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"6px 6px 14px rgba(180,170,155,0.7),-6px -6px 14px rgba(255,255,255,0.92)",
  borderRadius:"20px",
};
const inset: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
  borderRadius:"16px",
};

const colors = ["#d4a0a7","#c8836a","#b89a5e","#d4a0a7"];

export async function generateStaticParams() {
  return stages.map(s => ({ slug: s.slug }));
}

export default async function StagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = stages.findIndex(s => s.slug === slug);
  if (idx === -1) return notFound();
  const stage = stages[idx];
  const color = colors[idx];

  return (
    <div>
      {/* Back */}
      <div style={{ padding:"20px 20px 0" }} className="max-w-5xl mx-auto">
        <Link href="/" style={{ ...neu, display:"inline-flex", alignItems:"center", gap:"8px",
                                 padding:"8px 18px", textDecoration:"none", borderRadius:"30px",
                                 color:"#7c6b5e", fontWeight:700, fontSize:"0.82rem" }}>
          ← Trang chủ
        </Link>
      </div>

      {/* Hero card */}
      <section style={{ padding:"32px 20px 40px" }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ background:"#eae6e1",
                        boxShadow:"10px 10px 24px rgba(180,170,155,0.75),-10px -10px 24px rgba(255,255,255,0.95)",
                        borderRadius:"28px", padding:"36px 32px",
                        borderTop:`4px solid ${color}` }}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div style={{ fontSize:"4rem", lineHeight:1 }}>{stage.emoji}</div>
              <div>
                <div style={{ ...inset, display:"inline-block", padding:"4px 16px",
                               fontSize:"0.75rem", fontWeight:800, color, marginBottom:"12px" }}>
                  {stage.weeks}
                </div>
                <h1 style={{ fontWeight:800, fontSize:"clamp(1.5rem,4vw,2.2rem)", color:"#3a3028", lineHeight:1.2 }}>
                  {stage.title}
                </h1>
                <p style={{ color:"#8c7b6e", marginTop:"10px", lineHeight:1.65, maxWidth:"600px" }}>
                  {stage.heroDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section style={{ padding:"0 20px 56px" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stage.sections.map(sec => (
            <div key={sec.title} style={{ ...neu, padding:"26px 24px" }}>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ ...inset, padding:"8px 10px", borderRadius:"12px", fontSize:"1.4rem" }}>
                  {sec.icon}
                </div>
                <h2 style={{ fontWeight:800, fontSize:"1.05rem", color:`${color}` }}>{sec.title}</h2>
              </div>
              <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:"8px" }}>
                {sec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span style={{ ...inset, borderRadius:"50%", width:22, height:22, display:"flex",
                                   alignItems:"center", justifyContent:"center",
                                   fontSize:"0.6rem", fontWeight:900, color, flexShrink:0, marginTop:"2px" }}>
                      {j+1}
                    </span>
                    <span style={{ fontSize:"0.83rem", color:"#5a4a3c", lineHeight:1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Nav between stages */}
      <div style={{ padding:"0 20px 56px" }} className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {stages.filter(s => s.slug !== slug).map((s, i) => (
            <Link key={s.slug} href={`/giai-doan/${s.slug}`}
              style={{ ...neu, padding:"10px 20px", textDecoration:"none", borderRadius:"30px",
                       fontSize:"0.82rem", fontWeight:700, color:colors[stages.indexOf(s)] }}>
              {s.emoji} {s.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
