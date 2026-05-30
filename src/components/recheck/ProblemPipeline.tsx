function StorytellingIntro() {
  return (
    <section className="px-6 py-32 max-w-5xl mx-auto">
      <p
        className="font-mono text-[11px] tracking-[0.2em] uppercase mb-16"
        style={{ color: "rgba(129,140,248,0.7)" }}
      >
        El origen
      </p>
      <div className="space-y-6">
        <p className="font-display text-muted-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.25, fontWeight: 400 }}>
          Carlos Luna lleva 17 años sirviendo enchiladas en Santa Barbara.
        </p>
        <p className="font-display text-muted-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.25, fontWeight: 400 }}>
          Sus clientes han dejado cientos de opiniones sobre su restaurante.
        </p>
        <p className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.25, fontWeight: 500, fontStyle: "italic" }}>
          Él nunca las leyó — no tuvo tiempo.
        </p>
        <p className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.25, fontWeight: 400 }}>
          Esas opiniones contienen oro: patrones, problemas, oportunidades.
        </p>
        <p className="font-display" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1.15, fontWeight: 700 }}>
          Sin leerlas, está dejando $40.000 al año sobre la mesa.
        </p>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            lineHeight: 1.15,
            fontWeight: 700,
            color: "var(--indigo)",
            borderLeft: "5px solid var(--indigo)",
            paddingLeft: "1.5rem",
            marginTop: "3rem",
          }}
        >
          Re-check las convierte en decisiones.
        </p>
      </div>
    </section>
  );
}

export function ProblemPipeline() {
  return (
    <>
      {/* STORYTELLING INTRO */}
      <StorytellingIntro />

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ borderTop: "1px solid rgba(129,140,248,0.15)" }} />
      </div>

      {/* SECTION 1 — EL PROBLEMA */}
      <section id="problema" className="px-6 py-24 max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">01. El Problema</p>
        <h2 className="font-display font-semibold text-4xl md:text-6xl mt-4 max-w-3xl leading-tight">
          Las empresas tienen miles de reseñas. Nadie las entiende a escala.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {[
            {
              icon: "⚠️",
              title: "Texto no estructurado",
              body: "Las estrellas dicen cuánto falla el negocio. El texto dice por qué — y nadie lo analiza.",
            },
            {
              icon: "⏱️",
              title: "Análisis manual imposible",
              body: "Un restaurante con 500 reseñas necesitaría 40+ horas para leerlas todas manualmente.",
            },
            {
              icon: "📉",
              title: "Decisiones sin datos",
              body: "Sin NLP, los problemas operativos se repiten sin ser detectados ni priorizados.",
            },
          ].map((c) => (
            <div key={c.title} className="glass p-6 flex gap-4 items-start">
              <span className="text-2xl shrink-0">{c.icon}</span>
              <div>
                <h3 className="font-display font-semibold text-lg">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 — EL PIPELINE */}
      <section id="pipeline" className="px-6 py-24 max-w-7xl mx-auto">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Data Pipeline</p>
        <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4">Nuestro Pipeline NLP</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Cada paso fue una decisión deliberada. De 7 millones de reseñas a inteligencia accionable.
        </p>

        <div className="relative mt-12">
          <div className="hidden md:block absolute left-6 top-6 bottom-6 w-px border-l-2 border-dotted border-foreground/10" />
          <div className="space-y-6">
            {[
              {
                badge: "01",
                title: "Ingesta y filtrado",
                body: "Partíamos de 6,99 millones de reseñas en un único archivo JSON, demasiado grande para cargarlo en memoria. Implementamos chunking en bloques de 100K filas y filtramos hasta 127.000 reseñas de restaurantes mexicanos. Eliminamos reviews neutrales (3★) y reseñas de menos de 10 palabras para trabajar solo con opiniones semánticamente útiles.",
                pills: ["chunking 100K", "127K reseñas", "sin ruido neutral"],
              },
              {
                badge: "02",
                title: "Procesamiento NLP",
                body: "Cada reseña pasó por lowercase → puntuación → tokenización → stopwords → lematización con spaCy. El texto limpio se vectorizó con CountVectorizer (10.000+ términos). Usamos LDA con tuning de hiperparámetros evaluado con coherencia c_v, validado con NMF sobre TF-IDF. Ambos convergieron en los mismos 4 factores — consistencia y fiabilidad demostrada.",
                pills: ["spaCy", "CountVectorizer", "LDA + NMF", "coherencia c_v"],
              },
              {
                badge: "03",
                title: "Inteligencia accionable",
                body: "LDA + NMF produjeron una taxonomía de 4 factores: servicio, comida, ambiente y otros. Priorizamos precisión interpretativa antes que forzar clasificaciones poco claras. Feature engineering con star_gap, word_count, sentiment_binary e is_chain. Todo conectado al dashboard en tiempo real vía FastAPI + Railway.",
                pills: ["star_gap", "word_count", "sentiment_binary", "is_chain", "FastAPI + Railway"],
              },
            ].map((b) => (
              <div key={b.badge} className="glass p-6 md:p-8 flex gap-6 items-start">
                <div
                  className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-sm font-bold"
                  style={{ background: "rgba(129,140,248,0.15)", color: "var(--indigo)" }}
                >
                  {b.badge}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.body}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {b.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 rounded-full text-[10px] font-mono"
                        style={{
                          background: "rgba(129,140,248,0.08)",
                          color: "var(--indigo)",
                          border: "1px solid rgba(129,140,248,0.2)",
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
