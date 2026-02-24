import Link from "next/link";

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow: "3px 3px 8px rgba(180,170,155,0.5),-3px -3px 8px rgba(255,255,255,0.85)",
  borderRadius: "30px",
};

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  items: Crumb[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav style={{ padding: "16px 20px 0" }} className="max-w-4xl mx-auto">
      <div className="flex items-center flex-wrap gap-1" style={{ fontSize: "0.78rem" }}>
        <Link href="/" style={{
          ...neu, display: "inline-flex", alignItems: "center", gap: "4px",
          padding: "5px 12px", textDecoration: "none", color: "#c08890", fontWeight: 700,
        }}>
          🏠 Trang chủ
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            <span style={{ color: "#c8beb5", fontWeight: 700, padding: "0 2px" }}>/</span>
            {item.href ? (
              <Link href={item.href} style={{
                ...neu, display: "inline-block", padding: "5px 12px",
                textDecoration: "none", color: "#c08890", fontWeight: 700,
              }}>
                {item.label}
              </Link>
            ) : (
              <span style={{
                display: "inline-block", padding: "5px 12px",
                background: "#eae6e1",
                boxShadow: "inset 3px 3px 6px rgba(180,170,155,0.4),inset -3px -3px 6px rgba(255,255,255,0.7)",
                borderRadius: "30px", fontWeight: 700, color: "#8c7b6e",
              }}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
