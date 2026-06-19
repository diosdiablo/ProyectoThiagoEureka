"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Users, CheckCircle2, Wrench } from "lucide-react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  gradient: string;
  shadow: string;
};

const stats: Stat[] = [
  {
    value: 80,
    label: "Preguntas",
    sub: "banco inicial",
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-coral to-sunset",
    shadow: "shadow-glow-coral",
  },
  {
    value: 4,
    label: "Áreas",
    sub: "Matemática, Comunicación, Ciencias, Racional",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-mint to-sky-cyan",
    shadow: "shadow-glow-mint",
  },
  {
    value: 90,
    suffix: "%",
    label: "Satisfacción",
    sub: "la calificó como «fácil de usar»",
    icon: <CheckCircle2 className="h-6 w-6" />,
    gradient: "from-berry to-grape",
    shadow: "shadow-glow-berry",
  },
  {
    value: 5,
    label: "Herramientas",
    sub: "todas gratuitas",
    icon: <Wrench className="h-6 w-6" />,
    gradient: "from-mango to-lemon",
    shadow: "shadow-glow-coral",
  },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-8 z-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div
                className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white ${s.shadow}`}
              >
                {s.icon}
              </div>
              <div className="font-heading text-4xl lg:text-5xl font-extrabold text-foreground leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-heading text-base font-bold text-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{s.sub}</div>
              <div
                className={`absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-30`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
