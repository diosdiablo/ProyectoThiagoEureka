"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  WifiOff,
  Zap,
  History,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Se instala como app",
    text: "Aparece en la pantalla de inicio del celular o computadora, con su propio ícono, sin pasar por una tienda de apps.",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: <WifiOff className="h-5 w-5" />,
    title: "Funciona offline",
    text: "Gracias al service worker, algunas funciones siguen disponibles aunque se caiga la conexión.",
    color: "bg-mint/15 text-mint",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Puntaje inmediato",
    text: "Al terminar el simulacro, la plataforma corrige y muestra el resultado al instante.",
    color: "bg-mango/20 text-sunset",
  },
  {
    icon: <History className="h-5 w-5" />,
    title: "Historial personal",
    text: "Cada usuario guarda sus intentos y puede ver su progreso a lo largo del tiempo.",
    color: "bg-berry/15 text-berry",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Registro seguro",
    text: "Autenticación con Supabase: cada estudiante crea su cuenta y protege sus datos.",
    color: "bg-grape/15 text-grape",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Responsive total",
    text: "Se ve perfecto en computadora, tablet o celular. Misma app, cualquier pantalla.",
    color: "bg-sky-cyan/15 text-sky-cyan",
  },
];

export default function Solution() {
  return (
    <section id="solucion" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-berry/10 px-4 py-1.5 text-xs font-semibold text-berry">
              <Sparkles className="h-3.5 w-3.5" />
              LA SOLUCIÓN
            </div>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Una <span className="text-gradient-berry">PWA</span> que se instala en un clic
            </h2>
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              Una <strong className="text-foreground">Aplicación Web Progresiva</strong> es un sitio web que, al añadirle
              un <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">manifest.json</code> y un
              <strong className="text-foreground"> service worker</strong>, se comporta como una app nativa:
              se instala, tiene su ícono y funciona incluso sin conexión.
            </p>
            <p className="mt-4 text-base text-foreground/70 leading-relaxed">
              PreUni-App aprovecha esto para que cualquier estudiante ingrese a
              <a
                href="https://preuni-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-coral hover:underline"
              >
                {" "}preuni-app.vercel.app{" "}
              </a>
              desde su celular, toque <em>«Agregar a pantalla de inicio»</em> y la use como cualquier otra app,
              sin descargar nada de ninguna tienda.
            </p>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-coral/10 via-berry/5 to-grape/10 p-5 border border-coral/15">
              <div className="text-xs font-bold uppercase tracking-wider text-coral">¿Qué es una PWA?</div>
              <div className="mt-2 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-heading text-2xl font-extrabold text-foreground">1</div>
                  <div className="text-[10px] text-muted-foreground leading-tight mt-1">Entra a la URL</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-extrabold text-foreground">2</div>
                  <div className="text-[10px] text-muted-foreground leading-tight mt-1">Toca «Instalar»</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-extrabold text-foreground">3</div>
                  <div className="text-[10px] text-muted-foreground leading-tight mt-1">¡Listo, es una app!</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — feature grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-cream p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow-coral"
              >
                <div className={`inline-grid h-11 w-11 place-items-center rounded-xl ${f.color} transition-transform group-hover:scale-110`}>
                  {f.icon}
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/65 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
