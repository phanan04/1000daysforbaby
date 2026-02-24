"use client";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
}

const neu: React.CSSProperties = {
  background: "#eae6e1",
  boxShadow:
    "5px 5px 12px rgba(180,170,155,0.65),-5px -5px 12px rgba(255,255,255,0.88)",
  borderRadius: "30px",
};

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const shareUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text + "\n" + shareUrl);
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
      } catch {
        /* user cancelled */
      }
    } else {
      setShowMenu(!showMenu);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${title}\n${text}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  };

  const socials = [
    {
      name: "Facebook",
      emoji: "📘",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
      color: "#d4a0a7",
    },
    {
      name: "Zalo",
      emoji: "💬",
      href: `https://zalo.me/share?url=${encodedUrl}&title=${encodedTitle}`,
      color: "#c8836a",
    },
    {
      name: "Messenger",
      emoji: "💭",
      href: `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=291494419107518&redirect_uri=${encodedUrl}`,
      color: "#b89a5e",
    },
  ];

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <button
        onClick={handleNativeShare}
        style={{
          ...neu,
          padding: "10px 24px",
          border: "none",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: "0.85rem",
          color: "#c08890",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "inherit",
          transition: "box-shadow 0.2s, transform 0.2s",
        }}
      >
        <span>📤</span>
        <span>Chia sẻ</span>
      </button>

      {showMenu && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#eae6e1",
            boxShadow:
              "8px 8px 20px rgba(180,170,155,0.7),-8px -8px 20px rgba(255,255,255,0.92)",
            borderRadius: "16px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            minWidth: "180px",
            zIndex: 100,
          }}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.82rem",
                color: s.color,
                background: "#eae6e1",
                boxShadow:
                  "3px 3px 8px rgba(180,170,155,0.5),-3px -3px 8px rgba(255,255,255,0.8)",
                transition: "box-shadow 0.15s",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{s.emoji}</span>
              <span>{s.name}</span>
            </a>
          ))}

          {/* Copy link */}
          <button
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "0.82rem",
              color: "#8c7b6e",
              fontFamily: "inherit",
              background: "#eae6e1",
              boxShadow:
                "inset 3px 3px 8px rgba(180,170,155,0.5),inset -3px -3px 8px rgba(255,255,255,0.8)",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>{copied ? "✅" : "🔗"}</span>
            <span>{copied ? "Đã sao chép!" : "Sao chép link"}</span>
          </button>

          {/* Close */}
          <button
            onClick={() => setShowMenu(false)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "0.72rem",
              color: "#a09080",
              fontFamily: "inherit",
              marginTop: "2px",
            }}
          >
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}
