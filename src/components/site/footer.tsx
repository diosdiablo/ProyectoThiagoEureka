"use client";

import { Rocket, GraduationCap, School, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Top decorative gradient strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-coral via-sunset to-mango" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-coral via-sunset to-mango text-white shadow-glow-coral">
                <Rocket className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-extrabold">
                  PreUni<span className="text-gradient-sunset">-App</span>
                </span>
                <span className="font-display text-[10px] uppercase tracking-[0.18em] text-white/50">
                  EUREKA 2026
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-xs">
              Plataforma web instalable (PWA) de simulación de exámenes de admisión. Un proyecto de feria de
              ciencias hecho realidad.
            </p>
            <a
              href="https://preuni-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <Rocket className="h-4 w-4" />
              preuni-app.vercel.app
            </a>
          </div>

          {/* Author */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/50">Autor</div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold">Thiago Andre Martel Pashanasi</div>
                  <div className="text-sm text-white/60">3.° «D» de secundaria</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <School className="h-5 w-5 text-mint shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold">I.E. Virgen de los Dolores</div>
                  <div className="text-sm text-white/60">Institución educativa</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-berry shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold">Yurimaguas</div>
                  <div className="text-sm text-white/60">Junio de 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project info */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/50">Ficha del proyecto</div>
            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-white/55">Área</dt>
                <dd className="font-semibold">Ciencia y Tecnología</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/55">Modalidad</dt>
                <dd className="font-semibold">Alternativa de solución tecnológica</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/55">Categoría</dt>
                <dd className="font-semibold">E (3.°, 4.° y 5.° de secundaria)</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/55">Feria</dt>
                <dd className="font-semibold">EUREKA 2026</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <div className="flex items-center gap-1.5">
            Hecho con <Heart className="h-3.5 w-3.5 text-coral fill-coral" /> por Thiago · Feria EUREKA 2026
          </div>
          <div>© 2026 PreUni-App · Yurimaguas, Loreto · Perú</div>
        </div>
      </div>
    </footer>
  );
}
