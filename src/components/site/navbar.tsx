"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Menu, X } from "lucide-react";

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#stack", label: "Stack" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#resultados", label: "Resultados" },
  { href: "#demo", label: "Demo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-white/60 shadow-[0_8px_30px_-12px_rgba(255,107,107,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#top" className="group flex items-center gap-2">
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-coral via-sunset to-mango text-white shadow-glow-coral transition-transform group-hover:scale-110">
              <Rocket className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
                PreUni<span className="text-gradient-sunset">-App</span>
              </span>
              <span className="font-display text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                EUREKA 2026
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground hover:bg-white/60"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://preuni-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-sunset px-5 py-2.5 text-sm font-semibold text-white shadow-glow-coral transition-all hover:scale-105 hover:shadow-glow-berry"
            >
              <Rocket className="h-4 w-4" />
              Probar la app
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-foreground shadow-soft"
              aria-label="Abrir menú"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-white/60"
          >
            <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-coral/10 hover:text-coral"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://preuni-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-coral to-sunset px-5 py-3 text-sm font-semibold text-white"
              >
                <Rocket className="h-4 w-4" />
                Probar la app
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
