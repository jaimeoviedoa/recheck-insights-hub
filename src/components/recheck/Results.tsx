const topics = [
  { i: 1, words: "food · not · order · would · well · say · place", label: "Experiencia general negativa" },
  { i: 2, words: "food · not · order · get · time · wait · say · service", label: "Tiempo y servicio" },
  { i: 3, words: "food · not · place · good · get · order · like · drink", label: "Calidad percibida" },
  { i: 4, words: "not · taco · order · food · burrito · like · bean · chicken", label: "Producto específico" },
];

export function Results() {
  return (
    <section id="resultados" className="px-6 py-24 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">03. Resultados y Cierre</p>
      <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3">Volvemos al principio</h2>

      {/* Carlos story */}
      <div className="glass p-6 mt-8 border-l-4" style={{ borderLeftColor: "var(--coral)" }}>
        <p className="text-sm md:text-base leading-relaxed">
          Carlos tiene <span className="font-semibold">Los Agaves</span> en Santa Barbara, CA. Tiene reseñas. Y hasta hoy, nunca había tenido tiempo de leerlas todas.
        </p>
        <p className="text-sm md:text-base leading-relaxed mt-3 text-muted-foreground">
          Lo que no sabía es que un cliente escribió <span className="font-semibold text-foreground">180 palabras</span> explicando por qué no volvería. El manager estaba de descanso. Nadie lo detectó. Carlos nunca leyó esa reseña. <span className="font-semibold text-foreground">Re-check sí.</span>
        </p>
      </div>

      {/* ¿Lo resolvimos? */}
      <div className="mt-10">
        <h3 className="font-display font-semibold text-2xl md:text-3xl">¿LO RESOLVIMOS?</h3>
        <p className="font-display text-xl mt-2" style={{ color: "var(--mint)" }}>Sí.</p>
        <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
          En el dashboard de Los Agaves: <span className="font-mono font-semibold text-foreground">NPS +87 · 4.6/5 · 93% sentimiento positivo</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">Pero el problema estaba en el <span className="font-semibold text-foreground">7% negativo oculto.</span></p>
      </div>

      {/* Detección */}
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <div className="glass-sm p-5" style={{ borderLeft: "3px solid var(--coral)" }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Detectado</p>
          <p className="font-display font-medium mt-2">Service → 0% sentimiento positivo</p>
        </div>
        <div className="glass-sm p-5" style={{ borderLeft: "3px solid var(--peach)" }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Causa raíz</p>
          <p className="font-display font-medium mt-2">1 reseña de 180 palabras → cliente perdido → sin detección previa</p>
        </div>
        <div className="glass-sm p-5" style={{ borderLeft: "3px solid var(--mint)" }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">El dato clave</p>
          <p className="font-display font-medium mt-2">La comida no era el problema — enchiladas de halibut con menciones positivas constantes</p>
        </div>
      </div>

      <div className="glass p-5 mt-4 border-l-4" style={{ borderLeftColor: "var(--indigo)" }}>
        <p className="text-sm">
          El problema era <span className="font-semibold">operativo</span>: fallo en la gestión de un turno no detectado.
        </p>
        <p className="text-sm mt-2 font-semibold" style={{ color: "var(--indigo)" }}>
          👉 Acción: protocolo de gestión de turnos + seguimiento semanal de service
        </p>
        <p className="text-sm mt-2 text-muted-foreground italic">Esto no es un análisis. Es una decisión.</p>
      </div>

      {/* Escalabilidad */}
      <div className="mt-14 glass p-8" style={{ border: "1px solid rgba(110,231,183,0.3)", background: "rgba(110,231,183,0.04)" }}>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--mint)" }}>Escalabilidad</p>
        <h3 className="font-display text-2xl font-semibold mt-2">Carlos es uno. Pero hay miles.</h3>
        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed text-sm">
          El pipeline ya funciona con Google Reviews y la base de datos de Yelp, pero podría integrarse fácilmente con otras fuentes como TripAdvisor u otras plataformas de reseñas.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="glass-sm p-5">
            <p className="font-display font-medium">Un restaurante en Madrid puede tener 20 o 800 reseñas.</p>
            <p className="text-sm text-muted-foreground mt-2">El tamaño no cambia el pipeline — cambia el volumen procesado.</p>
          </div>
          <div className="glass-sm p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Infraestructura</p>
            <p className="font-display font-medium">Ya operativa en Railway</p>
            <p className="text-sm text-muted-foreground mt-2">Añadir negocio = un endpoint.</p>
          </div>
        </div>
      </div>

      {/* Próximos pasos */}
      <div className="mt-10">
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
        <p className="font-display text-xl md:text-2xl font-semibold mt-4 max-w-2xl mx-auto leading-snug">
          Carlos ahora sabe que su comida no es el problema. Sabe que su servicio necesita atención. Y sabe exactamente dónde actuar.
        </p>
        <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">
          Todo estaba en sus reseñas. Re-check lo escuchó por él.
        </p>
      </div>
    </section>
  );
}

export function TechnicalDepth() {
  const pipeline = [
    { step: "01", tool: "Pandas + chunking", title: "Carga eficiente del dataset", body: "El archivo yelp_academic_dataset_review.json tiene 6.99M líneas. Cargarlo completo en memoria era inviable. Implementamos lectura por chunks de 100.000 filas usando pd.read_json con chunksize — procesando el dataset en bloques sin colapsar el sistema.", tag: "Ingeniería de datos", tagColor: "var(--indigo)" },
    { step: "02", tool: "spaCy + NLTK", title: "Pipeline de limpieza NLP", body: "Cada reseña pasó por: lowercase → eliminación de puntuación → tokenización → eliminación de stopwords personalizadas → lematización con spaCy (running → run, better → good). El resultado es clean_text: texto semánticamente depurado listo para vectorización.", tag: "NLP preprocessing", tagColor: "#059669" },
    { step: "03", tool: "scikit-learn CountVectorizer", title: "Vectorización del texto", body: "Transformamos el texto limpio en una matriz numérica de más de 10.000 términos usando CountVectorizer con filtrado de frecuencia mínima. Esta representación bag-of-words es la entrada para LDA y el análisis de frecuencia diferencial.", tag: "Feature extraction", tagColor: "#EA580C" },
    { step: "04", tool: "gensim LdaModel + CoherenceModel", title: "Topic Modeling con LDA", body: "Aplicamos Latent Dirichlet Allocation con tuning de hiperparámetros: probamos num_topics en [4, 5, 6], passes en [10, 15], alpha y eta en ['auto', 'symmetric']. Evaluamos cada combinación con coherencia c_v. El modelo final con K=4 tópicos obtuvo la mayor coherencia semántica.", tag: "Unsupervised NLP", tagColor: "#7C3AED" },
    { step: "05", tool: "scikit-learn NMF + TF-IDF", title: "Validación con NMF alternativo", body: "Para contrastar los resultados de LDA, aplicamos Non-negative Matrix Factorization sobre representación TF-IDF. NMF genera tópicos más compactos. La convergencia entre ambos modelos en los mismos 4 factores (servicio, comida, ambiente, otros) valida la robustez del análisis.", tag: "Model validation", tagColor: "#DB2777" },
    { step: "06", tool: "TF-IDF comparativo", title: "Análisis diferencial de vocabulario", body: "Calculamos pesos TF-IDF medios por polaridad sobre un vocabulario compartido. Esto nos permitió identificar términos discriminantes: 'great' tiene TF-IDF positivo 5.7x mayor que negativo. 'wait' tiene TF-IDF negativo 2.4x mayor. Esta diferenciación léxica fundamenta la taxonomía del dashboard.", tag: "Análisis semántico", tagColor: "#059669" },
  ];

  return (
    <section id="tecnico" className="px-6 py-24 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">03b. Profundidad técnica</p>
      <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3">El pipeline por dentro</h2>
      <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
        Cada paso del análisis fue una decisión técnica deliberada. Esto es lo que vimos en el máster aplicado a datos reales.
      </p>

      <div className="mt-10 space-y-4">
        {pipeline.map((s) => (
          <div key={s.step} className="glass p-6 grid md:grid-cols-[80px_1fr_200px] gap-6 items-start">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-2xl font-bold" style={{ color: "rgba(129,140,248,0.4)" }}>{s.step}</span>
              <div className="w-px flex-1 bg-foreground/10 hidden md:block" style={{ minHeight: "40px" }} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1.5 rounded-full text-[10px] font-mono text-center" style={{ background: `${s.tagColor}18`, color: s.tagColor }}>{s.tag}</span>
              <span className="px-3 py-1.5 rounded-full text-[10px] font-mono text-center" style={{ background: "rgba(0,0,0,0.04)", color: "#6B7280" }}>{s.tool}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 glass p-8" style={{ border: "1px solid rgba(129,140,248,0.3)", background: "rgba(129,140,248,0.04)" }}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--indigo)" }}>Web Intelligence — Segunda API</p>
            <h3 className="font-display text-2xl font-semibold mt-2">Más allá del dataset estático</h3>
            <p className="text-muted-foreground mt-2 max-w-xl leading-relaxed">
              El Yelp Open Dataset fue el punto de partida — pero su limitación es clara: son datos históricos, no en tiempo real. La segunda capa de Re-check resuelve exactamente eso.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-full text-xs font-mono shrink-0" style={{ background: "rgba(129,140,248,0.15)", color: "var(--indigo)" }}>EN DESARROLLO</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { title: "¿Qué hace?", body: "Web scraping de Google Reviews en tiempo real. El sistema detecta nuevas reseñas publicadas, las procesa con el mismo pipeline NLP y actualiza los KPIs del dashboard automáticamente — sin intervención manual.", icon: "🔍" },
            { title: "¿Por qué es importante?", body: "Google Reviews tiene 12x más volumen que Yelp en España. Un restaurante madrileño puede tener 20 reseñas en Yelp y 800 en Google. Sin esta capa, Re-check analizaría una fracción marginal del feedback real.", icon: "📈" },
            { title: "Arquitectura técnica", body: "FastAPI endpoint /web-intelligence → scraper → mismo pipeline de limpieza NLP → SQLite → dashboard. La misma infraestructura Railway ya operativa. El dataset Yelp dejó de ser el origen y se convierte en el baseline de entrenamiento.", icon: "⚙️" },
          ].map((c) => (
            <div key={c.title} className="glass-sm p-5">
              <span className="text-2xl">{c.icon}</span>
              <h4 className="font-display font-medium mt-3">{c.title}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-2xl" style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)" }}>
          <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--indigo)" }}>Flujo completo</p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {["Google Reviews", "→", "Scraper", "→", "NLP Pipeline", "→", "SQLite", "→", "FastAPI", "→", "Dashboard en tiempo real"].map((step, i) => (
              step === "→"
                ? <span key={i} className="text-muted-foreground font-mono text-sm">→</span>
                : <span key={i} className="px-3 py-1.5 rounded-full text-xs font-mono" style={{ background: "rgba(255,255,255,0.7)", color: "#1F2937" }}>{step}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
