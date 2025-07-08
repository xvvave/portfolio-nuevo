import Image from "next/image";
import Navbar from "../../components/1 Navbar/Navbar";
import ScrollToTop from "../../components/fxscripts/scroll-to-top";

export const metadata = {
  title: "GloryFit | Proyecto de Fitness | Lautaro R. Temperini",
  description: "GloryFit: Plataforma de fitness integral desarrollada por Lautaro R. Temperini. Conecta usuarios con entrenadores y facilita el seguimiento de rutinas personalizadas.",
  keywords: "GloryFit, fitness, plataforma, Lautaro Temperini, desarrollo web, entrenadores, rutinas personalizadas",
  openGraph: {
    title: "GloryFit | Proyecto de Fitness | Lautaro R. Temperini",
    description: "GloryFit: Plataforma de fitness integral desarrollada por Lautaro R. Temperini. Conecta usuarios con entrenadores y facilita el seguimiento de rutinas personalizadas.",
    url: "https://portfolio-temperini.vercel.app/gloryfit",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://portfolio-temperini.vercel.app/images/gloryfit-logo.png",
        width: 800,
        height: 600,
        alt: "Logo de GloryFit"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GloryFit | Proyecto de Fitness | Lautaro R. Temperini",
    description: "GloryFit: Plataforma de fitness integral desarrollada por Lautaro R. Temperini. Conecta usuarios con entrenadores y facilita el seguimiento de rutinas personalizadas.",
    images: ["https://portfolio-temperini.vercel.app/images/gloryfit-logo.png"]
  }
};

export default function GloryFitPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
        <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-semibold leading-tight xl:leading-[168px] text-[#F2F2F2] mb-8 md:mb-12 lg:mb-16" style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}>
            GLORYFIT
          </h1>
          <div className="max-w-6xl">
            <div className="mb-12">
              <Image 
                src="/images/gloryfit-logo.png" 
                alt="Logo de la plataforma de fitness GloryFit" 
                width={128}
                height={128}
                className="object-contain mb-8"
              />
              <p className="text-xl xl:text-[28px] font-semibold leading-relaxed xl:leading-[38px] text-[#F2F2F2] mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
                Plataforma de fitness integral que conecta usuarios con entrenadores y facilita el seguimiento de rutinas personalizadas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Tecnologías Utilizadas
                </h3>
                <ul className="text-[#A6A6A6] space-y-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• React Native</li>
                  <li>• Node.js</li>
                  <li>• MongoDB</li>
                  <li>• AWS</li>
                  <li>• Socket.io</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Funcionalidades Principales
                </h3>
                <ul className="text-[#A6A6A6] space-y-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• Chat en tiempo real</li>
                  <li>• Seguimiento de progreso</li>
                  <li>• Rutinas personalizadas</li>
                  <li>• Sistema de pagos</li>
                  <li>• Notificaciones push</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Desafíos y Soluciones
              </h3>
              <p className="text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                El principal desafío fue implementar un sistema de chat en tiempo real que funcionara de manera fluida en dispositivos móviles. 
                Utilizamos Socket.io para manejar las conexiones en tiempo real y optimizamos el rendimiento con lazy loading y compresión de datos.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ScrollToTop size={48} />
    </div>
  );
} 