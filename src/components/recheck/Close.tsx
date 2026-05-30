export function Close() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.1] max-w-4xl">
        Re-check no analiza opiniones.
      </h2>
      <h3 className="font-display font-semibold text-4xl md:text-6xl leading-[1.1] max-w-4xl mt-3"
        style={{ color: "var(--indigo)" }}>
        Convierte la voz del cliente en ventaja competitiva.
      </h3>
      <div className="flex flex-wrap justify-center gap-2 mt-12">
        {["Jaime", "Isa", "Emma"].map((n) => (
          <span key={n} className="glass-sm px-5 py-2 font-display text-sm">{n}</span>
        ))}
      </div>
      <p className="mt-8 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        TFM · Máster en IA y Analítica de Datos · MIOTI 2025
      </p>
      <p className="mt-6 font-mono text-[10px] text-muted-foreground max-w-2xl">
        Construido con: Python · Pandas · spaCy · scikit-learn · FastAPI · Railway · React · TypeScript
      </p>
    </section>
  );
}
