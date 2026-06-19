import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PreUni-App | EUREKA 2026 — Plataforma Web PWA de Simulación de Exámenes",
  description:
    "Proyecto de feria de ciencias EUREKA 2026: PreUni-App, una plataforma web instalable (PWA) para simular exámenes de admisión universitaria. Desarrollada por Thiago Andre Martel Pashanasi — 3ro 'D', I.E. Virgen de los Dolores, Yurimaguas.",
  keywords: [
    "PreUni-App",
    "EUREKA 2026",
    "PWA",
    "feria de ciencias",
    "simulación de exámenes",
    "Supabase",
    "Vercel",
    "Antigravity",
    "OpenCode",
    "GitHub",
  ],
  authors: [{ name: "Thiago Andre Martel Pashanasi" }],
  openGraph: {
    title: "PreUni-App | EUREKA 2026",
    description:
      "Plataforma web instalable (PWA) de simulación de exámenes de admisión para secundaria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${inter.variable} antialiased bg-cream text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
