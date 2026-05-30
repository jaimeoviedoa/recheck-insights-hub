import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/recheck/Navbar";
import { Hero } from "@/components/recheck/Hero";
import { ProblemPipeline } from "@/components/recheck/ProblemPipeline";
import { Demo } from "@/components/recheck/Demo";
import { Results } from "@/components/recheck/Results";

import { Close } from "@/components/recheck/Close";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Re-check · Inteligencia de reseñas con IA · TFM MIOTI 2025" },
      { name: "description", content: "Re-check transforma cada reseña en inteligencia accionable mediante IA y NLP. Presentación TFM MIOTI 2025." },
      { property: "og:title", content: "Re-check · Illuminating Local Growth" },
      { property: "og:description", content: "Plataforma de inteligencia de reseñas para restaurantes — NLP, sentiment analysis y benchmarking competitivo." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemPipeline />
      <Demo />
      <Results />
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div
          className="glass p-10 md:p-16"
          style={{ borderTop: "2px solid rgba(129,140,248,0.3)" }}
        >
          <p
            className="font-display font-semibold text-2xl md:text-4xl leading-snug"
            style={{ color: "var(--indigo)" }}
          >
            "Porque detrás de cada estrella,
          </p>
          <p className="font-display font-semibold text-2xl md:text-4xl leading-snug mt-2">
            hay una historia que tu negocio necesita escuchar."
          </p>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mt-8">
            Re-check · 2025
          </p>
        </div>
      </section>
      
      
      <Close />
    </main>
  );
}
