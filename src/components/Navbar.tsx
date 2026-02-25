"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const topLinks = [
  { href:"/giai-doan/thai-ky",    label:"Thai Kỳ" },
  { href:"/giai-doan/0-6-thang",  label:"0-6 Tháng" },
  { href:"/giai-doan/6-12-thang", label:"6-12 Tháng" },
  { href:"/giai-doan/1-2-tuoi",   label:"1-2 Tuổi" },
  { href:"/phuong-phap-easy",     label:"EASY" },
  { href:"/thuc-don-an-dam",      label:"Ăn Dặm" },
  { href:"/giac-ngu",             label:"Giấc Ngủ" },
  { href:"/checklist",            label:"Checklist" },
  { href:"/tiem-chung",           label:"Tiêm Chủng" },
  { href:"/bang-tang-truong",     label:"Tăng Trưởng" },
];

const links = [
  { href:"/giai-doan/thai-ky",    label:"Thai Kỳ",    emoji:"🤰" },
  { href:"/giai-doan/0-6-thang",  label:"0-6 Tháng",  emoji:"👶" },
  { href:"/giai-doan/6-12-thang", label:"6-12 Tháng", emoji:"🥣" },
  { href:"/giai-doan/1-2-tuoi",   label:"1-2 Tuổi",   emoji:"🚶" },
  { href:"/phuong-phap-easy",     label:"EASY",        emoji:"📋" },
  { href:"/thuc-don-an-dam",      label:"Ăn Dặm",     emoji:"🍽️" },
  { href:"/giac-ngu",             label:"Giấc Ngủ",    emoji:"😴" },
  { href:"/checklist",            label:"Checklist",   emoji:"✅" },
  { href:"/tiem-chung",           label:"Tiêm Chủng",  emoji:"💉" },
  { href:"/bang-tang-truong",     label:"Tăng Trưởng", emoji:"📏" },
  { href:"/tinh-tuoi",            label:"Bé Của Tôi",  emoji:"🎂" },
  { href:"/meo-hay",              label:"Mẹo Hay",     emoji:"✨" },
  { href:"/hoi-dap",              label:"Hỏi Đáp",     emoji:"❓" },
  { href:"/me-sau-sinh",          label:"Mẹ Sau Sinh", emoji:"🤱" },
];

const navStyle: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"0 4px 16px rgba(180,170,155,0.4)",
};
const logoBoxStyle: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"5px 5px 12px rgba(180,170,155,0.7),-5px -5px 12px rgba(255,255,255,0.9)",
  borderRadius:"14px",
  width:42, height:42,
  display:"flex", alignItems:"center", justifyContent:"center",
  overflow:"hidden",
};
const menuBtnStyle: React.CSSProperties = {
  background:"#eae6e1",
  boxShadow:"inset 3px 3px 8px rgba(180,170,155,0.7),inset -3px -3px 8px rgba(255,255,255,0.9)",
  borderRadius:"12px",
  border:"none",
  padding:"8px",
  cursor:"pointer",
  color:"#d4a0a7",
  display:"flex",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50" style={navStyle}>
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div style={logoBoxStyle}>
            <Image src="/logo.svg" alt="1000 Ngày Đầu Đời logo" width={42} height={42} priority />
          </div>
          <div>
            <div style={{ fontWeight:800, fontSize:"1rem", lineHeight:1.1, color:"#c08890" }}>1000 Ngày</div>
            <div style={{ fontSize:"0.65rem", color:"#8c7b6e", fontWeight:600, lineHeight:1.2 }}>Đầu Đời</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 flex-wrap justify-end">
          {topLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="no-underline whitespace-nowrap"
              style={{ background:"#eae6e1", borderRadius:"30px", padding:"5px 10px",
                       fontSize:"0.72rem", fontWeight:700, color:"#c08890",
                       boxShadow:"3px 3px 8px rgba(180,170,155,0.6),-3px -3px 8px rgba(255,255,255,0.85)",
                       transition:"box-shadow 0.15s" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button className="xl:hidden" style={menuBtnStyle} onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>

      {open && (
        <div className="xl:hidden px-5 pb-4">
          <div style={{ background:"#eae6e1", borderRadius:"16px",
                        boxShadow:"inset 4px 4px 10px rgba(180,170,155,0.6),inset -4px -4px 10px rgba(255,255,255,0.85)",
                        padding:"12px" }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="flex items-center gap-2 no-underline"
                style={{ padding:"10px 16px", borderRadius:"12px", fontWeight:700,
                         fontSize:"0.9rem", color:"#c08890", display:"flex" }}>
                <span className="text-xl">{l.emoji}</span><span>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
