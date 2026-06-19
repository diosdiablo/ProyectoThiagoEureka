"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  Smartphone,
  ExternalLink,
  QrCode,
  Download,
  Lightbulb,
} from "lucide-react";

export default function Demo() {
  return (
    <section
      id="demo"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-grape/40 to-berry/40"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-coral/30 blur-3xl animate-blob" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-grape/40 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
        <div className="absolute right-1/3 top-0 h-64 w-64 rounded-full bg-lemon/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Smartphone className="h-3.5 w-3.5" />
              DEMO EN VIVO
            </div>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Prueba <span className="text-gradient-sunset">PreUni-App</span> ahora mismo
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              La plataforma ya está publicada y funcionando. Entra desde tu celular o computadora, regístrate,
              responde un simulacro, mira tu puntaje e instálala como app. Todo en menos de 2 minutos.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://preuni-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral via-sunset to-mango px-7 py-4 text-base font-bold text-white shadow-glow-coral transition-all hover:scale-105"
              >
                <ExternalLink className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Abrir preuni-app.vercel.app
              </a>
              <a
                href="#conclusiones"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-7 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/25"
              >
                Ver conclusiones
              </a>
            </div>

            {/* Mini steps */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { n: "1", t: "Entra al link", d: "preuni-app.vercel.app" },
                { n: "2", t: "Regístrate", d: "Crea tu cuenta gratis" },
                { n: "3", t: "¡Instala!", d: "Agrega a pantalla de inicio" },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="font-heading text-2xl font-extrabold text-lemon">{s.n}</div>
                  <div className="mt-1 text-sm font-bold text-white">{s.t}</div>
                  <div className="text-[11px] text-white/60 mt-0.5">{s.d}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — QR card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-[2rem] bg-white p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-bold text-coral">
                    <QrCode className="h-3.5 w-3.5" />
                    Acceso directo
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Escanea
                  </span>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="rounded-3xl bg-white p-5 ring-4 ring-coral/15">
                    <QRCodeSVG
                      value="https://preuni-app.vercel.app"
                      size={220}
                      level="H"
                      fgColor="#1a1033"
                      bgColor="#ffffff"
                      marginSize={0}
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="font-heading text-lg font-extrabold text-foreground">
                    Apunta la cámara aquí
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Te lleva directo a PreUni-App
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-coral/10 to-berry/10 py-2.5 text-xs font-semibold text-foreground">
                  <Download className="h-3.5 w-3.5 text-coral" />
                  Compatible con Chrome (Android) y Safari (iOS)
                </div>
              </div>

              {/* Floating note */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-2xl bg-lemon px-4 py-3 text-slate-900 shadow-glow-coral"
              >
                <Lightbulb className="h-5 w-5" />
                <div className="text-xs">
                  <div className="font-bold">¡Sin tiendas!</div>
                  <div className="text-slate-700">Directo desde el navegador</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
