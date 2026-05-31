import { ExternalLink, ArrowRight } from "lucide-react";

const DASHBOARD_URL = "https://web-production-12dfb.up.railway.app";

export function Demo() {
  return (
    <section id="demo" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="glass p-8 md:p-12 text-center relative overflow-hidden">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Demo en vivo</p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold mt-3">
          Listo para ver el dashboard real?
        </h3>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Las 15 resenas reales de Yelp de Los Agaves. El pipeline NLP completo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full font-display font-medium text-white"
            style={{ background: "linear-gradient(135deg, #818CF8 0%, #C084FC 100%)" }}
          >
            Ver Los Agaves en Re-check
            <ExternalLink size={16} />
          </a>
          <a href="#resultados" className="flex items-center gap-2 px-6 py-4 rounded-full font-display font-medium text-muted-foreground">
            Ver resultados del TFM
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
