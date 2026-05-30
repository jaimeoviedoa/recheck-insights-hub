const positives = [
  { w: "great", n: 6646 },
  { w: "service", n: 3681 },
  { w: "love", n: 3096 },
  { w: "delicious", n: 3084 },
  { w: "chicken", n: 2205 },
];
const negatives = [
  { w: "service", n: 4903 },
  { w: "ask", n: 3817 },
  { w: "wait", n: 3693 },
  { w: "minute", n: 3300 },
  { w: "bad", n: 3207 },
];

const topics = [
  { i: 1, words: "food · not · order · would · well · say · place", label: "Experiencia general negativa" },
  { i: 2, words: "food · not · order · get · time · wait · say · service", label: "Tiempo y servicio" },
  { i: 3, words: "food · not · place · good · get · order · like · drink", label: "Calidad percibida" },
  { i: 4, words: "not · taco · order · food · burrito · like · bean · chicken", label: "Producto específico" },
];

function Bar({ w, n, max, color }: { w: string; n: number; max: number; color: string }) {
  const pct = (n / max) * 100;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium">{w}</span>
        <span className="font-mono text-xs text-muted-foreground">{n.toLocaleString()}</span>
      </div>
      <div className="h-2.5 rounded-full bg-foreground/5 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

export function Results() {
  const maxPos = Math.max(...positives.map((p) => p.n));
  const maxNeg = Math.max(...negatives.map((p) => p.n));
  return (
    <section id="resultados" className="px-6 py-24 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">03. Resultados del TFM</p>
      <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3">Lo que encontramos — y lo que no esperábamos</h2>
      <p className="text-muted-foreground mt-3 max-w-2xl">Insights reales extraídos de 127.000 reseñas procesadas.</p>
      <p className="text-sm text-muted-foreground mt-4 max-w-3xl leading-relaxed">
        Procesamos 127.000 reseñas de restaurantes mexicanos a través de un pipeline NLP completo: limpieza de texto, tokenización, eliminación de stopwords y lematización con spaCy. Luego aplicamos CountVectorizer con más de 10.000 términos y LDA con 4 tópicos para identificar los patrones semánticos más relevantes.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        <div className="glass p-6">
          <h3 className="font-display font-medium">Top palabras en reseñas <span style={{ color: "#059669" }}>POSITIVAS</span></h3>
          <div className="space-y-3 mt-4">
            {positives.map((p) => <Bar key={p.w} {...p} max={maxPos} color="var(--mint)" />)}
          </div>
        </div>
        <div className="glass p-6">
          <h3 className="font-display font-medium">Top palabras en reseñas <span style={{ color: "#DB2777" }}>NEGATIVAS</span></h3>
          <div className="space-y-3 mt-4">
            {negatives.map((p) => <Bar key={p.w} {...p} max={maxNeg} color="var(--coral)" />)}
          </div>
        </div>
      </div>

      <div className="glass p-6 mt-6 border-l-4" style={{ borderLeftColor: "var(--peach)" }}>
        <p className="text-sm md:text-base">
          <span className="font-medium">💡 Insight clave:</span> Las reseñas negativas tienden a ser más largas que las positivas — los clientes insatisfechos explican más. Esto validó nuestra decisión de eliminar reviews &lt;10 palabras del dataset.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {[
          { badge: "Hallazgo empírico", title: "Las reseñas negativas son más largas", body: "Promedio negativas: 94 palabras. Positivas: 71 palabras. Los clientes insatisfechos explican más. Esto emergió del análisis de word_count — una variable que creamos en feature engineering.", borderColor: "var(--coral)", badgeBg: "rgba(249,168,212,0.3)", badgeColor: "#9D174D" },
          { badge: "Insight NLP", title: "'Service' aparece en ambos lados", body: "'Service' es top-3 en positivas Y top-1 en negativas. El servicio es el factor más determinante de la experiencia — para bien y para mal. Ninguna estrella te dice eso.", borderColor: "var(--indigo)", badgeBg: "rgba(129,140,248,0.2)", badgeColor: "#3730A3" },
          { badge: "Resultado del modelo", title: "Los tópicos LDA convergen en 4 áreas", body: "El modelo con K=4 identificó patrones coherentes: experiencia general, tiempo y servicio, calidad percibida y producto específico. Estos tópicos alimentan directamente las 'Critical Improvement Areas' del dashboard.", borderColor: "var(--mint)", badgeBg: "rgba(110,231,183,0.3)", badgeColor: "#065F46" },
          { badge: "Feature engineering", title: "star_gap como señal de sesgo", body: "Creamos star_gap: diferencia entre la estrella del review y la estrella media del negocio. Un gap negativo alto indica clientes con expectativas altas. Transforma un número en contexto.", borderColor: "var(--peach)", badgeBg: "rgba(253,186,116,0.3)", badgeColor: "#9A3412" },
        ].map((d) => (
          <div key={d.title} className="glass-sm p-5" style={{ borderLeft: `3px solid ${d.borderColor}` }}>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono" style={{ background: d.badgeBg, color: d.badgeColor }}>{d.badge}</span>
            <h4 className="font-display font-medium mt-3">{d.title}</h4>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.body}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {topics.map((t) => (
          <div key={t.i} className="glass p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Topic {t.i}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px]" style={{ background: "rgba(249,168,212,0.3)", color: "#9D174D" }}>negativo</span>
            </div>
            <p className="font-mono text-xs mt-3 text-foreground/80 leading-relaxed">{t.words}</p>
            <p className="font-display text-sm mt-3 font-medium">{t.label}</p>
          </div>
        ))}
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
