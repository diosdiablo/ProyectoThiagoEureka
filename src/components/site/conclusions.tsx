"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";

const conclusions = [
  {
    title: "Se construyó exitosamente PreUni-App",
    text: "Una plataforma web funcional e instalable (PWA) de simulación de exámenes de admisión, usando exclusivamente herramientas gratuitas. Demuestra que sí es posible crear soluciones tecnológicas accesibles.",
    color: "from-coral to-sunset",
    shadow: "shadow-glow-coral",
  },
  {
    title: "Se elimina la barrera de las tiendas de apps",
    text: "Al ser PWA, los estudiantes no necesitan descargar nada desde una tienda: acceden al enlace, instalan en un clic y la usan como cualquier otra aplicación.",
    color: "from-berry to-grape",
    shadow: "shadow-glow-berry",
  },
  {
    title: "Stack profesional sin inversión económica",
    text: "Las herramientas Antigravity, OpenCode, GitHub, Supabase y Vercel permiten a un estudiante de secundaria desarrollar un producto de calidad profesional sin gastar un solo sol.",
    color: "from-mint to-sky-cyan",
    shadow: "shadow-glow-mint",
  },
  {
    title: "Cumple todos los requisitos definidos",
    text: "Registro, selección de áreas, examen, puntaje inmediato, historial e instalación en dispositivos móviles: cada requisito del diseño inicial se cumplió.",
    color: "from-mango to-lemon",
    shadow: "shadow-glow-coral",
  },
  {
    title: "Validación con usuarios reales: 90 % de aceptación",
    text: "La prueba con diez compañeros confirmó que la solución resuelve el problema identificado y es percibida como fácil de usar.",
    color: "from-grape to-berry",
    shadow: "shadow-glow-grape",
  },
  {
    title: "Mejoras futuras identificadas",
    text: "Ampliar el banco de preguntas, añadir un temporizador por examen y crear un ranking para motivar la práctica continua.",
    color: "from-sky-cyan to-mint",
    shadow: "shadow-glow-mint",
  },
];

export default function Conclusions() {
  return (
    <section id="conclusiones" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-xs font-semibold text-coral">
            <CheckCircle2 className="h-3.5 w-3.5" />
            CONCLUSIONES
          </div>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Lo que <span className="text-gradient-sunset">demostró</span> el proyecto
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            Seis conclusiones que cierran el ciclo del proyecto y abren el camino a futuras mejoras.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-5 lg:gap-6">
          {conclusions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex gap-5 rounded-3xl bg-gradient-to-br from-white to-cream p-6 lg:p-7 shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="relative shrink-0">
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-white ${c.shadow} font-heading text-xl font-extrabold transition-transform group-hover:scale-110`}
                >
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-coral via-sunset to-mango p-10 md:p-14 text-center text-white shadow-glow-coral"
        >
          <div className="absolute inset-0 bg-mesh opacity-10" />
          <div className="relative">
            <Rocket className="mx-auto h-10 w-10 mb-4" />
            <h3 className="font-heading text-3xl md:text-4xl font-extrabold">
              Una idea que ya es una app real
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              PreUni-App nació como un proyecto de feria de ciencias y hoy es una plataforma pública, gratuita
              y abierta para cualquier estudiante que quiera prepararse mejor.
            </p>
            <a
              href="https://preuni-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-coral shadow-xl transition-all hover:scale-105"
            >
              <Rocket className="h-5 w-5" />
              Ir a la plataforma
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
