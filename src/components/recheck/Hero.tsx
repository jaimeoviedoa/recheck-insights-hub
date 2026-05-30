export function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative">
      <div className="animate-fade-in-up text-center max-w-4xl">
        <span className="inline-block glass-sm px-4 py-1.5 text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
          AI Powered Analytics · TFM MIOTI 2025
        </span>
        <h1
          className="font-display font-semibold tracking-tight mt-10 leading-[0.95]"
          style={{ fontSize: "clamp(64px, 14vw, 220px)" }}
        >
          Re<span style={{ color: "var(--indigo)" }}>-</span>check
        </h1>
        <p className="mt-8 text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light">
          Transformamos cada reseña en inteligencia accionable mediante IA y NLP.
        </p>
        <p className="mt-4 font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Illuminating Local Growth
        </p>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-foreground/20" />
      </div>
    </section>
  );
}
