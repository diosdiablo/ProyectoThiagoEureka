"use client";

import { motion } from "framer-motion";
import { HelpCircle, DollarSign, BookX, Smartphone, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Academias costosas",
    text: "Las academias preuniversitarias y los materiales impresos actualizados son inaccesibles para muchas familias.",
    color: "from-coral to-sunset",
    shadow: "shadow-glow-coral",
  },
  {
    icon: <BookX className="h-6 w-6" />,
    title: "Materiales desactualizados",
    text: "Los libros físicos se desactualizan rápido y no siempre reflejan el formato actual del examen de admisión.",
    color: "from-berry to-grape",
    shadow: "shadow-glow-berry",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Celular sí, recursos no",
    text: "Casi todos los estudiantes tienen un celular con internet, pero no existen plataformas gratuitas y serias.",
    color: "from-mint to-sky-cyan",
    shadow: "shadow-glow-mint",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-mesh-soft">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-xs font-semibold text-coral">
            <HelpCircle className="h-3.5 w-3.5" />
            EL PROBLEMA
          </div>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Prepararse para la universidad <span className="text-gradient-sunset">no debería ser un lujo</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 max-w-2xl mx-auto">
            Cada año, miles de jóvenes peruanos se enfrentan a exámenes de admisión. La preparación de calidad
            queda reservada para quienes pueden pagarla, mientras la mayoría ya tiene en el bolsillo la
            herramienta para cambiar esa realidad: un celular con internet.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition-transform hover:-translate-y-2"
            >
              <div
                className={`mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-white ${p.shadow} transition-transform group-hover:scale-110`}
              >
                {p.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.text}</p>
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`}
              />
            </motion.div>
          ))}
        </div>

        {/* Preguntas guía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border-2 border-dashed border-coral/30 bg-white/60 backdrop-blur p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-coral">Preguntas que guían el proyecto</div>
              <div className="mt-3 space-y-3">
                {[
                  "¿Se puede construir una plataforma de simulación solo con herramientas gratuitas?",
                  "¿Puede un estudiante de secundaria desarrollar un sistema funcional con registro, banco de preguntas y resultados?",
                  "¿Es posible desplegarla en internet e instalarla como una app nativa?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral text-white text-[10px] font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground/80 font-medium">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-px md:h-32 h-px w-full bg-coral/20" />
            <div className="md:flex-1 text-center">
              <div className="font-heading text-2xl font-extrabold text-gradient-berry">La respuesta</div>
              <div className="mt-2 inline-flex items-center gap-2 text-foreground font-bold">
                PreUni-App <ArrowRight className="h-5 w-5 text-coral" /> una PWA
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Una aplicación web progresiva, instalable y gratuita.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
