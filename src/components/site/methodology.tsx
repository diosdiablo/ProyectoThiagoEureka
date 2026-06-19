"use client";

import { motion } from "framer-motion";
import {
  Search,
  Palette,
  Code2,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

const phases = [
  {
    n: "01",
    title: "Identificación del problema",
    icon: <Search className="h-6 w-6" />,
    color: "from-coral to-sunset",
    shadow: "shadow-glow-coral",
    bg: "bg-coral/10",
    accent: "text-coral",
    points: [
      "Estudiantes sin acceso gratuito a simulacros de admisión",
      "Requisitos: registro, banco de preguntas, puntaje inmediato, instalación",
      "Accesible desde cualquier dispositivo con internet",
    ],
  },
  {
    n: "02",
    title: "Diseño del prototipo",
    icon: <Palette className="h-6 w-6" />,
    color: "from-berry to-grape",
    shadow: "shadow-glow-berry",
    bg: "bg-berry/10",
    accent: "text-berry",
    points: [
      "Antigravity generó la interfaz visual",
      "Pantallas: inicio, registro, selección de áreas, preguntas, resultados",
      "Produjo el HTML y CSS base",
    ],
  },
  {
    n: "03",
    title: "Construcción del prototipo funcional",
    icon: <Code2 className="h-6 w-6" />,
    color: "from-mint to-sky-cyan",
    shadow: "shadow-glow-mint",
    bg: "bg-mint/10",
    accent: "text-mint",
    points: [
      "OpenCode: JavaScript del examen + manifest.json + service worker",
      "Supabase: tablas «usuarios», «preguntas» y «resultados» con APIs automáticas",
      "GitHub para versionar + Vercel para despliegue automático",
    ],
  },
  {
    n: "04",
    title: "Validación y prueba",
    icon: <CheckCircle2 className="h-6 w-6" />,
    color: "from-mango to-lemon",
    shadow: "shadow-glow-coral",
    bg: "bg-mango/15",
    accent: "text-sunset",
    points: [
      "Diez compañeros de clase probaron la plataforma",
      "Encuesta de satisfacción aplicada",
      "Verificación de «Agregar a pantalla de inicio» en Chrome Android y Safari iOS",
    ],
  },
  {
    n: "05",
    title: "Evaluación y mejoras",
    icon: <RefreshCw className="h-6 w-6" />,
    color: "from-grape to-berry",
    shadow: "shadow-glow-grape",
    bg: "bg-grape/10",
    accent: "text-grape",
    points: [
      "Ajustes de diseño y corrección de errores con la retroalimentación",
      "Se añadió el historial de resultados por usuario",
      "Generación del código QR para difusión directa",
    ],
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-mint/15 px-4 py-1.5 text-xs font-semibold text-mint">
            <RefreshCw className="h-3.5 w-3.5" />
            METODOLOGÍA
          </div>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Cinco fases, <span className="text-gradient-mint">un proceso real</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            El proyecto siguió el proceso formal de diseño de una solución tecnológica definido por las bases
            de EUREKA 2026 del MINEDU.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-coral via-berry to-grape opacity-30 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">
            {phases.map((p, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                    isRight ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${p.color} text-white ${p.shadow} ring-4 ring-white`}
                    >
                      {p.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`md:[direction:ltr] ${isRight ? "md:col-start-2" : "md:col-start-1"}`}>
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-cream p-7 shadow-soft transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-display text-5xl font-extrabold ${p.accent} opacity-80`}>
                          {p.n}
                        </span>
                        <span className={`rounded-full ${p.bg} ${p.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-wider`}>
                          Fase {p.n}
                        </span>
                      </div>
                      <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{p.title}</h3>
                      <ul className="mt-3 space-y-2">
                        {p.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/75">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${p.color}`} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
