"use client";

import { motion } from "framer-motion";
import { Boxes, Github, Database, Cloud, Code2, Wand2 } from "lucide-react";

const tools = [
  {
    name: "Antigravity",
    vendor: "Google",
    role: "Prototipado visual",
    desc: "IA generativa de Google que produjo los prototipos de interfaz y el código HTML/CSS inicial.",
    icon: <Wand2 className="h-7 w-7" />,
    gradient: "from-coral via-sunset to-mango",
    shadow: "shadow-glow-coral",
    accent: "text-coral",
    bg: "bg-coral/10",
  },
  {
    name: "OpenCode",
    vendor: "Editor colaborativo",
    role: "Lógica del examen",
    desc: "Editor de código colaborativo donde se programó el JavaScript del examen y el service worker.",
    icon: <Code2 className="h-7 w-7" />,
    gradient: "from-mint to-sky-cyan",
    shadow: "shadow-glow-mint",
    accent: "text-mint",
    bg: "bg-mint/10",
  },
  {
    name: "GitHub",
    vendor: "Microsoft",
    role: "Control de versiones",
    desc: "Repositorio público con todo el código fuente, documentado y versionado. Base del trabajo colaborativo.",
    icon: <Github className="h-7 w-7" />,
    gradient: "from-slate-700 to-slate-900",
    shadow: "shadow-soft",
    accent: "text-slate-700",
    bg: "bg-slate-100",
  },
  {
    name: "Supabase",
    vendor: "Open source",
    role: "Base de datos + Auth",
    desc: "PostgreSQL en la nube con APIs automáticas. Almacenó las tablas usuarios, preguntas y resultados.",
    icon: <Database className="h-7 w-7" />,
    gradient: "from-mint to-emerald-600",
    shadow: "shadow-glow-mint",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "Vercel",
    vendor: "Vercel Inc.",
    role: "Despliegue + PWA",
    desc: "Aloja la plataforma en preuni-app.vercel.app con dominio gratuito y facilita la configuración PWA.",
    icon: <Cloud className="h-7 w-7" />,
    gradient: "from-slate-900 to-slate-700",
    shadow: "shadow-soft",
    accent: "text-slate-700",
    bg: "bg-slate-100",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-mesh-soft">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-grape/10 px-4 py-1.5 text-xs font-semibold text-grape">
            <Boxes className="h-3.5 w-3.5" />
            STACK TECNOLÓGICO
          </div>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Cinco herramientas <span className="text-gradient-berry">100 % gratuitas</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            Un estudiante de secundaria puede construir un producto de calidad profesional sin invertir un solo sol.
            Estas son las piezas que hacen funcionar PreUni-App.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition-all hover:-translate-y-2 hover:${t.shadow}`}
            >
              {/* Glow */}
              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${t.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-30`}
              />

              <div className="relative flex items-start justify-between">
                <div
                  className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${t.gradient} text-white ${t.shadow} transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  {t.icon}
                </div>
                <span className={`rounded-full ${t.bg} ${t.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-wider`}>
                  {t.role}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl font-extrabold text-foreground">{t.name}</h3>
              <div className={`text-xs font-semibold ${t.accent}`}>{t.vendor}</div>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}

          {/* Last cell — summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: tools.length * 0.08 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-grape to-berry p-7 text-white shadow-glow-berry"
          >
            <div className="font-heading text-4xl font-extrabold">S/. 0</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-white/70 font-bold">Costo total</div>
            <p className="mt-4 text-sm text-white/85 leading-relaxed">
              Todas las herramientas usadas ofrecen planes gratuitos suficientes para construir, desplegar y
              mantener la plataforma. La única inversión fue tiempo, curiosidad y muchas ganas de aprender.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur">
              <Boxes className="h-4 w-4" />
              Cero barreras económicas
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
