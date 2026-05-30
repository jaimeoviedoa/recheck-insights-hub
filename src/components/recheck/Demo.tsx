import { ExternalLink, ArrowRight } from "lucide-react";

const DASHBOARD_URL = "https://web-production-12dfb.up.railway.app";

const slides = [
  {
    step: "01",
    moment: "El primer vistazo",
    quote: "NPS +87, rating 4.6, 93% positivo. Los Agaves está funcionando bien — eso Carlos ya lo sabía.",
    description: "Lo que no sabía es lo que esconde ese 7% negativo. Re-check lo encontró en segundos, sin leer una sola reseña.",
    technical: "Calculado desde FastAPI → Railway → SQLite · Los Agaves · Santa Barbara, CA",
    highlights: ["+87 NPS", "4.6/5 Rating", "93% Positivo"],
    highlightColors: ["#059669", "#EA580C", "#059669"],
    image: "/screenshots/overview-kpis.png",
    imageFallback: "Dashboard Overview — Los Agaves",
  },
  {
    step: "02",
    moment: "La señal que nadie vio",
    quote: "Una sola reseña negativa sobre servicio. Pero tiene 0% de sentimiento positivo.",
    description: "Un cliente esperó sin atención, pidió hablar con el manager, y el manager estaba de descanso. Se fue. Escribió 180 palabras explicando por qué. Carlos nunca las leyó. Re-check sí.",
    technical: "Factor 'servicio' identificado como único driver negativo · 0 de 1 menciones positivas · Diciembre 2018",
    highlights: ["Service: 0% positivo", "180 palabras", "1 cliente perdido"],
    highlightColors: ["#DB2777", "#DB2777", "#6B7280"],
    image: "/screenshots/sentiment-drivers.png",
    imageFallback: "Customer Sentiment — Service Factor · Los Agaves",
  },
  {
    step: "03",
    moment: "Dentro del lenguaje",
    quote: "Food 100% positivo. Others 100% positivo. Service 0% positivo.",
    description: "El problema no es la comida — las enchiladas de halibut tienen 3 menciones, todas positivas. El problema es operativo: una falla de gestión en un turno que nadie detectó a tiempo.",
    technical: "CountVectorizer + LDA · 3 factores identificados · Customer Sentiment Analysis sobre 15 reseñas reales de Yelp",
    highlights: ["Food: 100% ✓", "Others: 100% ✓", "Service: 0% ✗"],
    highlightColors: ["#059669", "#059669", "#DB2777"],
    image: "/screenshots/topic-clusters.png",
    imageFallback: "Sentiment Themes — Los Agaves",
  },
  {
    step: "04",
    moment: "De insight a acción",
    quote: "Los Agaves está en el percentil 67%. NPS 47 frente a competidores en 25.",
    description: "Está por encima del mercado — pero Service aparece como único punto de riesgo. La acción es concreta: protocolo de gestión de turnos y seguimiento semanal de menciones de servicio.",
    technical: "Market Position · Strengths & Weaknesses Matrix · generado desde drivers negativos + benchmarks del dataset",
    highlights: ["Percentil 67%", "NPS 47 vs 25 avg", "1 acción prioritaria"],
    highlightColors: ["#059669", "#059669", "var(--indigo)"],
    image: "/screenshots/market-position.png",
    imageFallback: "Market Position — Los Agaves",
  },
];

export function Demo() {
  return (
    <section id="demo" className="px-6 py-24 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">02. La Solución</p>
      <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3">Así funciona Re-check</h2>
      <p className="text-muted-foreground mt-3 max-w-2xl">
        Cuatro momentos reales del dashboard de Los Agaves — un restaurante mexicano de Santa Barbara presente en nuestro dataset de 127.000 reseñas.
      </p>

      {/* Storyboard slides */}
      <div className="mt-12 space-y-8">
        {slides.map((s, i) => (
          <div
            key={s.step}
            className={`glass p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-[11px] px-3 py-1 rounded-full"
                  style={{ background: "rgba(129,140,248,0.15)", color: "var(--indigo)" }}
                >
                  PASO {s.step}
                </span>
                <span className="font-display text-lg font-medium">{s.moment}</span>
              </div>
              <blockquote
                className="font-display text-xl md:text-2xl font-semibold leading-snug"
                style={{ borderLeft: "3px solid var(--indigo)", paddingLeft: "1rem" }}
              >
                "{s.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{s.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {s.highlights.map((h, j) => (
                  <span
                    key={h}
                    className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
                    style={{ background: `${s.highlightColors[j]}18`, color: s.highlightColors[j] }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div
                className="mt-5 px-4 py-3 rounded-2xl text-[11px] font-mono text-muted-foreground"
                style={{ background: "rgba(129,140,248,0.06)", border: "1px solid rgba(129,140,248,0.15)" }}
              >
                ⚙ {s.technical}
              </div>
            </div>

            {/* Screenshot side */}
            <SlideMockup index={i} />

          </div>
        ))}
      </div>

      {/* Live dashboard CTA */}
      <div className="mt-16 glass p-8 md:p-12 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 600px 300px at 50% 50%, rgba(129,140,248,0.08) 0%, transparent 70%)",
          }}
        />
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Demo en vivo</p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold mt-3">
          ¿Listo para ver el dashboard real?
        </h3>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Las 15 reseñas reales de Yelp de Los Agaves. El pipeline NLP completo. La inteligencia funcionando sobre datos reales de Santa Barbara, CA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full font-display font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #818CF8 0%, #C084FC 100%)",
              boxShadow: "0 12px 32px rgba(129,140,248,0.35)",
            }}
          >
            Ver Los Agaves en Re-check →
            <ExternalLink size={16} />
          </a>
          <a
            href="#resultados"
            className="flex items-center gap-2 px-6 py-4 rounded-full font-display font-medium text-muted-foreground transition-all hover:text-foreground"
          >
            Ver resultados del TFM
            <ArrowRight size={15} />
          </a>
        </div>

        <p className="font-mono text-[10px] text-muted-foreground mt-6 opacity-60 relative">
          {DASHBOARD_URL}
        </p>
      </div>
    </section>
  );
}

function SlideMockup({ index }: { index: number }) {
  if (index === 0) return <Mockup1 />;
  if (index === 1) return <Mockup2 />;
  if (index === 2) return <Mockup3 />;
  return <Mockup4 />;
}

function Mockup1() {
  return (
    <div className="h-[280px] md:h-[320px] rounded-2xl overflow-hidden p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 20px 50px rgba(31,41,55,0.06)" }}>
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Intelligence Dashboard</span>
        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono" style={{ background: "rgba(129,140,248,0.15)", color: "var(--indigo)" }}>Los Agaves</span>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {[
          { label: "NPS Score", value: "+87", color: "#059669", sub: "Sentiment-based" },
          { label: "Avg Rating", value: "4.6/5", color: "#EA580C", sub: "Yelp data" },
          { label: "Total Reviews", value: "15", color: "#EA580C", sub: "Business logs" },
          { label: "Coverage", value: "93%", color: "var(--indigo)", sub: "API Sync" },
        ].map((k) => (
          <div key={k.label} className="rounded-2xl p-3 flex flex-col justify-between" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)" }}>
            <span className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">{k.label}</span>
            <span className="font-display text-2xl font-semibold" style={{ color: k.color }}>{k.value}</span>
            <span className="font-mono text-[8px] text-muted-foreground">{k.sub}</span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-3 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)" }}>
        <div className="relative w-12 h-12 shrink-0">
          <svg viewBox="0 0 44 44" width="48" height="48">
            <circle cx="22" cy="22" r="16" fill="none" stroke="rgba(110,231,183,0.2)" strokeWidth="6"/>
            <circle cx="22" cy="22" r="16" fill="none" stroke="#6EE7B7" strokeWidth="6" strokeDasharray="93 7" strokeLinecap="round" transform="rotate(-90 22 22)"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[9px] font-bold" style={{ color: "#059669" }}>93%</span>
          </div>
        </div>
        <div className="flex-1 space-y-1.5">
          {[
            { label: "Others", w: "100%", reviews: "11" },
            { label: "Food", w: "27%", reviews: "3" },
            { label: "Service", w: "9%", reviews: "1" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="font-mono text-[8px] w-10 text-muted-foreground">{b.label}</span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.05)" }}>
                <div className="h-full rounded-full" style={{ width: b.w, background: "linear-gradient(90deg, #F472B6, #FB7185)" }}/>
              </div>
              <span className="font-mono text-[8px] text-muted-foreground">{b.reviews}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mockup2() {
  return (
    <div className="h-[280px] md:h-[320px] rounded-2xl overflow-hidden p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 20px 50px rgba(31,41,55,0.06)" }}>
      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Sentiment Distribution · NLP Modeling</span>
      <div className="flex gap-3 flex-1">
        <div className="flex-1 rounded-2xl p-4 flex flex-col items-center justify-center gap-2" style={{ background: "rgba(255,255,255,0.7)" }}>
          <svg viewBox="0 0 100 100" width="90" height="90">
            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(110,231,183,0.2)" strokeWidth="14"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#6EE7B7" strokeWidth="14" strokeDasharray="195 15" strokeLinecap="round" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#F9A8D4" strokeWidth="14" strokeDasharray="15 195" strokeLinecap="butt" transform="rotate(195 50 50)"/>
          </svg>
          <div className="text-center">
            <span className="font-display text-xl font-semibold" style={{ color: "#059669" }}>93%</span>
            <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Positive</p>
          </div>
        </div>
        <div className="flex-1 rounded-2xl p-4 flex flex-col justify-center gap-3" style={{ background: "rgba(255,255,255,0.7)" }}>
          <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Top Negative Drivers</span>
          {[
            { name: "Service", pct: 100, count: "1" },
            { name: "Food", pct: 0, count: "0" },
          ].map((d) => (
            <div key={d.name}>
              <div className="flex justify-between mb-1">
                <span className="text-[9px] font-medium">{d.name}</span>
                <span className="font-mono text-[8px] text-muted-foreground">{d.count}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.05)" }}>
                <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: "linear-gradient(90deg, #F472B6, #FB7185)" }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl p-2 text-center" style={{ background: "rgba(249,168,212,0.15)" }}>
        <span className="font-mono text-[7px] text-pink-700">Service · 0% POSITIVE · MONITOR</span>
      </div>
    </div>
  );
}

function Mockup3() {
  return (
    <div className="h-[280px] md:h-[320px] rounded-2xl overflow-hidden p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 20px 50px rgba(31,41,55,0.06)" }}>
      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Customer Sentiment · Los Agaves</span>
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: "others", count: "11", pct: 100, color: "#6EE7B7" },
          { name: "food", count: "3", pct: 100, color: "#6EE7B7" },
          { name: "service", count: "1", pct: 0, color: "#FB7185" },
        ].map((c) => (
          <div key={c.name} className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.7)" }}>
            <div className="flex justify-between items-start">
              <span className="font-display text-sm font-medium capitalize">{c.name}</span>
              <span className="font-mono text-[8px] text-muted-foreground">{c.count}</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.05)" }}>
              <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }}/>
            </div>
            <span className="font-mono text-[8px] text-muted-foreground">{c.pct}% positive</span>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.7)" }}>
        <div className="flex gap-2 flex-wrap mb-2">
          <span className="font-mono text-[7px] uppercase tracking-widest text-muted-foreground w-full">High Frequency (+)</span>
          {["authentic flavors", "great value", "delicious food"].map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-[8px]" style={{ background: "rgba(110,231,183,0.3)", color: "#065F46" }}>{t}</span>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="font-mono text-[7px] uppercase tracking-widest text-muted-foreground w-full">Critical Risk (−)</span>
          {["unorganized", "no manager", "bad service"].map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-[8px]" style={{ background: "rgba(249,168,212,0.3)", color: "#9D174D" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mockup4() {
  return (
    <div className="h-[280px] md:h-[320px] rounded-2xl overflow-hidden p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 20px 50px rgba(31,41,55,0.06)" }}>
      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Market Position · Los Agaves</span>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Your Rating", value: "4.6★", sub: "vs 3.5★ avg", color: "#059669" },
          { label: "NPS Score", value: "+47", sub: "vs 25 avg", color: "#059669" },
          { label: "Percentile", value: "67%", sub: "market rank", color: "var(--indigo)" },
        ].map((m) => (
          <div key={m.label} className="rounded-2xl p-3 text-center" style={{ background: "rgba(255,255,255,0.7)" }}>
            <span className="font-mono text-[7px] uppercase tracking-wider text-muted-foreground block">{m.label}</span>
            <span className="font-display text-base font-semibold block mt-1" style={{ color: m.color }}>{m.value}</span>
            <span className="font-mono text-[7px] text-muted-foreground">{m.sub}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { t: "Strengths", body: "Food Quality · Authentic Flavors · Great Value", border: "#6EE7B7" },
          { t: "Monitor", body: "Service — 0% positive · 1 mention", border: "#FDBA74" },
        ].map((q) => (
          <div key={q.t} className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.7)", borderLeft: `3px solid ${q.border}` }}>
            <span className="font-display text-xs font-medium">{q.t}</span>
            <p className="font-mono text-[8px] text-muted-foreground mt-1 leading-relaxed">{q.body}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-3 flex-1" style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)" }}>
        <span className="font-mono text-[7px] uppercase tracking-widest" style={{ color: "var(--indigo)" }}>AI-Powered Action Plan</span>
        <div className="mt-2 space-y-1.5">
          {[
            { p: "Priority 1", t: "Service protocol", impact: "0% → target 80%" },
            { p: "Priority 2", t: "Staff management", impact: "Monitor weekly" },
          ].map((a) => (
            <div key={a.p} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded-full text-[7px] font-mono text-white" style={{ background: "var(--indigo)" }}>{a.p}</span>
                <span className="text-[9px] font-medium">{a.t}</span>
              </div>
              <span className="font-mono text-[8px]" style={{ color: "#059669" }}>{a.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
