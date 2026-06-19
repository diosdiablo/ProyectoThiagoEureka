"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { Trophy, CheckCircle2, Layout, Github, Download, Database } from "lucide-react";

const areasData = [
  { name: "Matemática", value: 20, color: "#FF6B6B" },
  { name: "Comunicación", value: 20, color: "#FFB627" },
  { name: "Ciencias", value: 20, color: "#4ADE80" },
  { name: "Racional", value: 20, color: "#A855F7" },
];

const satisfactionData = [
  { name: "Fácil de usar", value: 90, color: "#4ADE80" },
  { name: "Difícil / neutral", value: 10, color: "#FFB627" },
];

const useIntentData = [
  { name: "La usaría regularmente", value: 80, color: "#EC4899" },
  { name: "No la usaría", value: 20, color: "#FFD93D" },
];

const achievements = [
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Plataforma web funcional",
    text: "Publicada y accesible en preuni-app.vercel.app",
    color: "from-coral to-sunset",
    shadow: "shadow-glow-coral",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Banco de 80 preguntas",
    text: "En 4 áreas, almacenado en Supabase",
    color: "from-mint to-sky-cyan",
    shadow: "shadow-glow-mint",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Sistema de autenticación",
    text: "Cada usuario crea su cuenta y consulta su historial",
    color: "from-berry to-grape",
    shadow: "shadow-glow-berry",
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Interfaz responsive",
    text: "Se visualiza correctamente en computadora y celular",
    color: "from-mango to-lemon",
    shadow: "shadow-glow-coral",
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: "Instalación en 1 clic",
    text: "Aparece como app nativa con su propio ícono",
    color: "from-grape to-berry",
    shadow: "shadow-glow-grape",
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: "Repositorio público",
    text: "Código fuente documentado en GitHub",
    color: "from-slate-700 to-slate-900",
    shadow: "shadow-soft",
  },
];

export default function Results() {
  return (
    <section id="resultados" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-mesh-soft">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-mango/20 px-4 py-1.5 text-xs font-semibold text-sunset">
            <Trophy className="h-3.5 w-3.5" />
            RESULTADOS
          </div>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Lo que se <span className="text-gradient-sunset">logró</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            Un producto funcional, validado por usuarios reales. Estos son los números y logros concretos del
            proyecto.
          </p>
        </motion.div>

        {/* Charts */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-foreground">Preguntas por área</h3>
              <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-bold text-coral">80 total</span>
            </div>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={areasData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                  />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ fill: "rgba(0,0,0,0.04)" }}
                    contentStyle={{
                      borderRadius: 12,
                      border: "none",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={48}>
                    {areasData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-foreground">«Fácil de usar»</h3>
              <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-mint">10 usuarios</span>
            </div>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={48}
                    outerRadius={80}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {satisfactionData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "none",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)",
                      fontSize: 12,
                    }}
                  />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{ fontSize: 11 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-foreground">Intención de uso</h3>
              <span className="rounded-full bg-berry/15 px-3 py-1 text-xs font-bold text-berry">Regular</span>
            </div>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={useIntentData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={48}
                    outerRadius={80}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {useIntentData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "none",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)",
                      fontSize: 12,
                    }}
                  />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{ fontSize: 11 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Achievements grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${a.color} text-white ${a.shadow} transition-transform group-hover:scale-110`}
              >
                {a.icon}
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">{a.title}</h3>
                <p className="mt-1 text-xs text-foreground/65 leading-relaxed">{a.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
