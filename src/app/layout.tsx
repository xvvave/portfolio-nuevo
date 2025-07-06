import type React from "react"
import { Inter, Manrope } from "next/font/google"
import "../styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata = {
  title: "Lautaro R. Temperini - Diseñador Multimedia",
  description:
    "Transformo ideas en experiencias digitales reales. Diseñador multimedia especializado en UX/UI, desarrollo y experiencias interactivas.",
  keywords: "diseño multimedia, UX/UI, desarrollo web, experiencias digitales, diseño interactivo",
  authors: [{ name: "Lautaro R. Temperini" }],
  creator: "Lautaro R. Temperini",
  openGraph: {
    title: "Lautaro R. Temperini - Diseñador Multimedia",
    description: "Transformo ideas en experiencias digitales reales.",
    url: "https://temperini.dev",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lautaro R. Temperini - Diseñador Multimedia",
    description: "Transformo ideas en experiencias digitales reales.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="text-white antialiased">
        {children}
      </body>
    </html>
  )
}
