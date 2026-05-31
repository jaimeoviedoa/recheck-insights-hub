import { ExternalLink, ArrowRight } from "lucide-react";

const DASHBOARD_URL = "https://web-production-12dfb.up.railway.app";

export function Demo() {
  return (
    <section id="demo" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="glass p-8 md:p-12 text-center relative overflow-hidden">
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
