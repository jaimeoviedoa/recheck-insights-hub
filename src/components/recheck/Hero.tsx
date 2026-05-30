export function Hero() {
  return (
    <>
      {/* SCREEN 1 — Storytelling full screen with photo */}
      <section
        id="top"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* Background photo */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/5aa96abe7e3c3a49f0c7e45e/1755306409794-HQ1EAHXTMHY96S4LDDDU/outside_shot.jpg"
          alt="Los Agaves Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(8,8,18,0.88) 0%, rgba(8,8,18,0.72) 60%, rgba(8,8,18,0.5) 100%)"
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-20 max-w-4xl">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 block mb-10">
            Una historia real · Los Agaves · Santa Barbara, CA · Est. 2008
          </span>

          <div className="space-y-6">
            <p className="font-display text-3xl md:text-4xl font-light text-white/75 leading-relaxed">
              Carlos Luna abrió Los Agaves en Santa Barbara en 2008.
            </p>

            <div className="w-12 h-px bg-white/15" />

            <p className="font-display text-3xl md:text-4xl font-light text-white/75 leading-relaxed">
              Esta semana, 25 clientes dejaron una opinión sobre su restaurante.
              <br />
              <span className="font-medium text-white">
                Él no las leyó — no tuvo tiempo.
              </span>
            </p>

            <div className="w-12 h-px bg-white/15" />

            <div className="space-y-3">
              <p className="font-display text-3xl md:text-4xl font-light text-white/75 leading-relaxed">
                Entre esas 25 reseñas estaba la razón por la que está dejando
              </p>
              <p className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
                $40.000 al año
                <span style={{ color: "#A5B4FC" }}> sobre la mesa.</span>
              </p>
            </div>

            <div className="w-12 h-px bg-white/15" />

            <p
              className="font-display text-4xl md:text-5xl font-semibold"
              style={{ color: "#A5B4FC" }}
            >
              Re-check las leyó por él.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
          <div className="w-px h-10 bg-white/20" />
        </div>
      </section>

      {/* SCREEN 2 — Re-check title */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative">
        <div className="text-center max-w-4xl">
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
    </>
  );
}
