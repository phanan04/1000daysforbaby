import Link from "next/link";

const card: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"5px 5px 12px rgba(180,170,155,0.65),-5px -5px 12px rgba(255,255,255,0.88)",
  borderRadius:"16px",
  padding:"20px 24px",
};

export default function Footer() {
  return (
    <footer style={{ background:"#dedad4", paddingTop:"40px", paddingBottom:"24px" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div style={card}>
            <div style={{ fontSize:"1.5rem" }}>🌸</div>
            <div style={{ fontWeight:800, fontSize:"1.05rem", color:"#c08890", marginTop:"8px" }}>1000 Ngày Đầu Đời</div>
            <p style={{ fontSize:"0.8rem", color:"#8c7b6e", marginTop:"6px", lineHeight:1.5 }}>
              Đồng hành cùng mẹ và bé trong hành trình 1000 ngày vàng đầu đời.
            </p>
          </div>
          <div style={card}>
            <div style={{ fontWeight:700, color:"#c08890", marginBottom:"12px", fontSize:"0.9rem" }}>📍 Giai Đoạn</div>
            {[["🤰","Thai Kỳ","/giai-doan/thai-ky"],["👶","0-6 Tháng","/giai-doan/0-6-thang"],
              ["🥣","6-12 Tháng","/giai-doan/6-12-thang"],["🚶","1-2 Tuổi","/giai-doan/1-2-tuoi"]].map(([e,l,h]) => (
              <Link key={h as string} href={h as string}
                style={{ display:"flex", alignItems:"center", gap:"8px", color:"#7c6b5e",
                         fontSize:"0.82rem", fontWeight:600, padding:"4px 0", textDecoration:"none" }}>
                <span>{e}</span><span>{l}</span>
              </Link>
            ))}
          </div>
          <div style={card}>
            <div style={{ fontWeight:700, color:"#c08890", marginBottom:"12px", fontSize:"0.9rem" }}>🔗 Tiện Ích</div>
            {[["💉","Lịch Tiêm Chủng","/tiem-chung"],["✨","Mẹo Hay","/meo-hay"]].map(([e,l,h]) => (
              <Link key={h as string} href={h as string}
                style={{ display:"flex", alignItems:"center", gap:"8px", color:"#7c6b5e",
                         fontSize:"0.82rem", fontWeight:600, padding:"4px 0", textDecoration:"none" }}>
                <span>{e}</span><span>{l}</span>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ textAlign:"center", color:"#a09080", fontSize:"0.78rem", fontWeight:600 }}>
          © 2026 1000 Ngày Đầu Đời — Yêu thương và chăm sóc
        </div>
      </div>
    </footer>
  );
}
