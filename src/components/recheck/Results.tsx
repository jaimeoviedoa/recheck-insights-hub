export function Results() {
  return (
    <section id="resultados" className="px-6 py-24 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">03. Resultados y Cierre</p>
      <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3">Volvemos al principio</h2>

      {/* Carlos — conclusión del storytelling */}
      <div className="mt-10 space-y-6 max-w-3xl">
        <p className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.3, fontWeight: 400, color: "var(--foreground)" }}>
          Carlos tiene <strong style={{ fontWeight: 700 }}>Los Agaves</strong> en Santa Barbara.
        </p>
        <p className="font-display text-muted-foreground" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", lineHeight: 1.4, fontWeight: 400 }}>
          NPS +87 · 4.6/5 · 93% sentimiento positivo.
        </p>
        <p className="font-display" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", lineHeight: 1.4, fontWeight: 400, color: "var(--foreground)" }}>
          Pero el problema estaba en el <strong style={{ fontWeight: 700 }}>7% negativo oculto.</strong>
        </p>
        <p className="font-display text-muted-foreground" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", lineHeight: 1.5, fontWeight: 400 }}>
          Un cliente escribió <strong style={{ fontWeight: 600, color: "var(--foreground)" }}>180 palabras</strong> explicando por qué no volvería. El manager estaba de descanso. Nadie lo detectó.{" "}
          <strong style={{ fontWeight: 600, color: "var(--foreground)" }}>Re-check sí.</strong>
        </p>
      </div>

      {/* Tres hallazgos */}
      <div className="grid sm:grid-cols-3 gap-4 mt-12">
        {[
          { label: "Detectado", color: "var(--coral)", text: "Service → 0% sentimiento positivo" },
          { label: "Causa raíz", color: "var(--peach)", text: "1 reseña de 180 palabras → cliente perdido sin detección previa" },
          { label: "El dato clave", color: "var(--mint)", text: "La comida no era el problema — enchiladas de halibut con menciones positivas constantes" },
        ].map((c) => (
          <div key={c.label} className="glass-sm p-5" style={{ borderLeft: `3px solid ${c.color}` }}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
            <p className="font-display font-medium mt-2 leading-snug">{c.text}</p>
          </div>
        ))}
      </div>

      {/* La decisión */}
      <div className="glass p-5 mt-4 border-l-4" style={{ borderLeftColor: "var(--indigo)" }}>
        <p className="text-sm">
          El problema era <span className="font-semibold">operativo</span>: fallo en la gestión de un turno no detectado.
        </p>
        <p className="text-sm mt-2 font-semibold" style={{ color: "var(--indigo)" }}>
          👉 Acción: protocolo de gestión de turnos + seguimiento semanal de service
        </p>
        <p className="text-sm mt-2 text-muted-foreground italic">Esto no es un análisis. Es una decisión.</p>
      </div>

      {/* Re-check funciona — prueba real */}
      <div className="mt-16 max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">Lo que demuestra</p>
        <div className="space-y-4">
          {[
            { n: "01", text: "Re-check es real. Corre sobre 127.000 reseñas reales de Yelp." },
            { n: "02", text: "Ahorra tiempo. 40 horas de lectura manual convertidas en 5 minutos de dashboard." },
            { n: "03", text: "Aplica lo aprendido. LDA + NMF + feature engineering con datos de producción, no de juguete." },
            { n: "04", text: "Escala. Un restaurante en Madrid con 20 reseñas o 800 — el pipeline no cambia, cambia el volumen." },
          ].map((item) => (
            <div key={item.n} className="flex gap-5 items-start" style={{ borderLeft: "3px solid rgba(129,140,248,0.4)", paddingLeft: "1.25rem" }}>
              <span className="font-mono shrink-0 text-[11px]" style={{ color: "rgba(129,140,248,0.7)", marginTop: "4px" }}>{item.n}</span>
              <p className="font-display" style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)", lineHeight: 1.5, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Próximos pasos */}
      <div className="mt-14">
        <h3 className="font-display font-semibold text-xl">PRÓXIMOS PASOS</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "Clasificador supervisado por factor",
            "Alertas automáticas por umbral negativo",
            "Benchmark competitivo en tiempo real",
            "Expansión sectorial",
          ].map((step) => (
            <span key={step} className="px-4 py-2 rounded-full text-sm font-mono" style={{ background: "rgba(129,140,248,0.12)", color: "var(--indigo)", border: "1px solid rgba(129,140,248,0.25)" }}>
              → {step}
            </span>
          ))}
        </div>
      </div>

      {/* Cierre */}
      <div className="mt-14 glass p-10 text-center" style={{ border: "1px solid rgba(253,186,116,0.3)", background: "rgba(253,186,116,0.04)" }}>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Cierre</p>
        <p className="font-display font-semibold mt-6 mx-auto leading-snug" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", maxWidth: "640px" }}>
          Carlos ahora sabe que su comida no es el problema. Sabe que su servicio necesita atención. Y sabe exactamente dónde actuar.
        </p>
        <div style={{ borderTop: "1px solid rgba(129,140,248,0.15)", margin: "2rem auto", maxWidth: "400px" }} />
        <p className="font-display mt-4 mx-auto" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", maxWidth: "560px", lineHeight: 1.5, fontWeight: 400 }}>
          <span style={{ color: "var(--indigo)" }}>"Porque detrás de cada estrella,</span>{" "}
          hay una historia que tu negocio necesita escuchar."
        </p>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-6">Re-check · 2025</p>
      </div>
    </section>
  );
}
