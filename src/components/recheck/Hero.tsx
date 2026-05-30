export function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative">
      
      {/* Title block */}
      <div className="text-center max-w-4xl w-full">
        <span className="inline-block glass-sm px-4 py-1.5 text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
          AI Powered Analytics · TFM MIOTI 2025
        </span>

        <div className="mt-10 flex items-center justify-center gap-8">
          <h1
            className="font-display font-semibold tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(64px, 12vw, 180px)" }}
          >
            Re<span style={{ color: "var(--indigo)" }}>-</span>check
          </h1>
          <div
            className="shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl hidden md:block"
            style={{
              width: "120px",
              height: "120px",
              boxShadow: "0 20px 50px rgba(129,140,248,0.2)",
            }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5aa96abe7e3c3a49f0c7e45e/1755306409794-HQ1EAHXTMHY96S4LDDDU/outside_shot.jpg"
              alt="Los Agaves Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="mt-8 text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light">
          Transformamos cada reseña en inteligencia accionable mediante IA y NLP.
        </p>
        <p className="mt-4 font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Illuminating Local Growth
        </p>
      </div>

      {/* Storytelling block */}
      <div className="mt-20 max-w-2xl mx-auto text-center space-y-6">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
          Una historia real · Los Agaves · Santa Barbara, CA
        </p>

        <p className="font-display text-xl md:text-2xl font-light text-foreground/70 leading-relaxed">
          Carlos Luna abrió Los Agaves en Santa Barbara en 2008.
        </p>

        <div className="w-8 h-px bg-foreground/15 mx-auto" />

        <p className="font-display text-xl md:text-2xl font-light text-foreground/70 leading-relaxed">
          Esta semana, 25 clientes dejaron una opinión.
          <br />
          <span className="font-medium text-foreground">Él no las leyó — no tuvo tiempo.</span>
        </p>

        <div className="w-8 h-px bg-foreground/15 mx-auto" />

        <p className="font-display text-xl md:text-2xl font-light text-foreground/70 leading-relaxed">
          Entre esas 25 reseñas estaba la razón por la que está dejando
          <span className="font-bold text-2xl md:text-3xl mx-2" style={{ color: "var(--indigo)" }}>
            $40.000 al año
          </span>
          sobre la mesa.
        </p>

        <div className="w-8 h-px bg-foreground/15 mx-auto" />

        <p
          className="font-display text-2xl md:text-3xl font-semibold"
          style={{ color: "var(--indigo)" }}
        >
          Re-check las leyó por él.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-foreground/20" />
      </div>

    </section>
  );
}
