# 🚀 PreUni-App · Web de Presentación · EUREKA 2026

Web interactiva y moderna para presentar el proyecto de feria de ciencias **PreUni-App**, una plataforma web instalable (PWA) de simulación de exámenes de admisión para secundaria.

> **Feria Escolar Nacional de Ciencia y Tecnología — EUREKA 2026**
> **Autor:** Thiago Andre Martel Pashanasi · 3.° «D» · I.E. Virgen de los Dolores · Yurimaguas, junio 2026

---

## 📦 Proyecto real al que hace referencia esta web

La plataforma **PreUni-App** (la PWA funcional) está publicada en:
**https://preuni-app.vercel.app**

Este repositorio contiene **únicamente la web de presentación** del proyecto para la feria de ciencias.

---

## ✨ Características de esta web

- **Next.js 16** + **TypeScript** + **Tailwind CSS 4**
- **Framer Motion** para animaciones (scroll reveals, contadores, blobs flotantes)
- **Recharts** para los gráficos de resultados
- **qrcode.react** para el código QR de acceso directo
- Diseño **100% responsive** (mobile + desktop)
- Paleta alegre: coral · sunset · mango · mint · berry · grape · sky cyan
- Tipografía moderna: Space Grotesk + Outfit + Inter

### Secciones

1. Hero con mockup animado de teléfono
2. Stats con contadores animados
3. Problema
4. Solución PWA + features
5. Stack tecnológico (Antigravity, OpenCode, GitHub, Supabase, Vercel)
6. Metodología — timeline de 5 fases
7. Resultados con gráficos
8. Demo en vivo + QR
9. Conclusiones
10. Footer con ficha del proyecto

---

## 🛠️ Cómo ejecutarlo localmente

```bash
# 1. Instalar dependencias
bun install
# o: npm install

# 2. Levantar el servidor de desarrollo
bun run dev
# o: npm run dev

# 3. Abrir http://localhost:3000
```

Para el build de producción:

```bash
bun run build
bun run start
```

---

## ☁️ Cómo publicarlo en Vercel (gratis)

1. Sube este repositorio a GitHub.
2. Entra a **https://vercel.com** e inicia sesión con tu cuenta de GitHub.
3. Clic en **"Add New Project"** → importa el repositorio.
4. Vercel detecta automáticamente que es Next.js — no necesitas configurar nada.
5. Clic en **"Deploy"** y en ~1 minuto tendrás tu URL pública tipo:
   `https://preuni-app-feria.vercel.app`

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Configuración global + fuentes
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos + paleta + animaciones
└── components/
    └── site/
        ├── navbar.tsx
        ├── hero.tsx
        ├── stats.tsx
        ├── problem.tsx
        ├── solution.tsx
        ├── stack.tsx
        ├── methodology.tsx
        ├── results.tsx
        ├── demo.tsx
        ├── conclusions.tsx
        └── footer.tsx
```

---

## 📜 Licencia

Proyecto educativo para la Feria Escolar Nacional de Ciencia y Tecnología EUREKA 2026.
Uso libre con fines educativos.

Hecho con ❤️ por Thiago Andre Martel Pashanasi.
