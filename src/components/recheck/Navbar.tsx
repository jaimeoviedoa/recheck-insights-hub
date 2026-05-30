import { useEffect, useState } from "react";

const sections = [
  { id: "problema", label: "Problema" },
  { id: "pipeline", label: "Pipeline" },
  { id: "demo", label: "Demo" },
  { id: "resultados", label: "Resultados" },
  { id: "top", label: "Cierre" },
];

export function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("problema");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
      let current = "problema";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/40 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold text-[15px] tracking-tight">
            Re<span style={{ color: "var(--indigo)" }}>-</span>check
          </a>
          <div className="hidden md:flex items-center gap-1 text-[13px]">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  active === s.id ? "bg-white/70 text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
          <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">MIOTI · 2025</span>
        </div>
        <div className="h-[2px] bg-white/30">
          <div
            className="h-full transition-[width] duration-150"
            style={{ width: `${progress * 100}%`, background: "var(--indigo)" }}
          />
        </div>
      </div>
    </nav>
  );
}
