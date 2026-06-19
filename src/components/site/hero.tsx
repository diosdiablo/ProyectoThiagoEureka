"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  MapPin,
  School,
  ArrowDown,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-mesh pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-coral/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-lemon/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-berry/25 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        <div className="absolute left-1/3 -bottom-10 h-72 w-72 rounded-full bg-mint/25 blur-3xl animate-blob" style={{ animationDelay: "9s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column — text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white/70 px-4 py-1.5 text-xs font-semibold text-coral shadow-soft backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              FERIA ESCOLAR NACIONAL DE CIENCIA Y TECNOLOGÍA · EUREKA 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tighter text-foreground"
            >
              <span className="block">PreUni</span>
              <span className="block text-gradient-sunset">-App</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl lg:text-2xl text-foreground/75 font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Plataforma web <span className="font-bold text-coral">instalable (PWA)</span> de simulación
              de exámenes de admisión para secundaria. Gratis, accesible desde cualquier celular y construida
              solo con herramientas gratuitas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://preuni-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral via-sunset to-mango px-7 py-4 text-base font-bold text-white shadow-glow-coral transition-all hover:scale-105 hover:shadow-glow-berry"
              >
                <Zap className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Abrir la plataforma
              </a>
              <a
                href="#problema"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-7 py-4 text-base font-bold text-foreground shadow-soft backdrop-blur transition-all hover:scale-105 hover:bg-white"
              >
                Conocer el proyecto
                <ArrowDown className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-foreground/70"
            >
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-coral" />
                <span className="font-semibold text-foreground">Thiago Andre Martel Pashanasi</span>
                <span className="text-muted-foreground">· 3.° «D»</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <School className="h-4 w-4 text-mint" />
                I.E. Virgen de los Dolores
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-berry" />
                Yurimaguas · Junio 2026
              </span>
            </motion.div>
          </div>

          {/* Right column — phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Floating chips around phone */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 top-12 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-glow-coral"
              >
                <Smartphone className="h-5 w-5 text-coral" />
                <div className="text-xs">
                  <div className="font-bold text-foreground">Instalable</div>
                  <div className="text-muted-foreground">en 1 clic</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-1/3 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-glow-mint"
              >
                <Wifi className="h-5 w-5 text-mint" />
                <div className="text-xs">
                  <div className="font-bold text-foreground">Funciona</div>
                  <div className="text-muted-foreground">offline también</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -right-4 bottom-16 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-glow-berry"
              >
                <Zap className="h-5 w-5 text-berry" />
                <div className="text-xs">
                  <div className="font-bold text-foreground">Puntaje</div>
                  <div className="text-muted-foreground">instantáneo</div>
                </div>
              </motion.div>

              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-cream via-white to-cream">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
                  {/* Screen content */}
                  <div className="flex h-full flex-col p-5 pt-10">
                    <div className="text-center">
                      <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-coral to-sunset shadow-glow-coral">
                        <GraduationCap className="h-7 w-7 text-white" />
                      </div>
                      <div className="font-heading text-xl font-extrabold text-foreground">PreUni-App</div>
                      <div className="text-[10px] text-muted-foreground mt-1">Simulacro de admisión</div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-white p-3 shadow-soft">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-coral">Pregunta 1 de 20</div>
                      <div className="mt-1.5 text-xs font-bold text-foreground leading-snug">
                        ¿Cuál es el resultado de 3(2x − 5) = 9?
                      </div>
                      <div className="mt-3 space-y-1.5">
                        {["x = 4", "x = 6", "x = 8", "x = 3"].map((opt, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-medium ${
                              i === 1
                                ? "bg-mint/20 text-foreground ring-1 ring-mint"
                                : "bg-muted/50 text-foreground/70"
                            }`}
                          >
                            <div
                              className={`grid h-5 w-5 place-items-center rounded-full text-[9px] font-bold ${
                                i === 1 ? "bg-mint text-white" : "bg-muted-foreground/20 text-foreground/60"
                              }`}
                            >
                              {String.fromCharCode(65 + i)}
                            </div>
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-coral/10 p-2.5 text-center">
                        <div className="text-[9px] uppercase tracking-wider text-coral font-semibold">Tiempo</div>
                        <div className="font-heading text-base font-extrabold text-foreground">18:24</div>
                      </div>
                      <div className="rounded-xl bg-mint/10 p-2.5 text-center">
                        <div className="text-[9px] uppercase tracking-wider text-mint font-semibold">Avance</div>
                        <div className="font-heading text-base font-extrabold text-foreground">5/20</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
