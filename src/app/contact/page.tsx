"use client";

import Navbar from "../../components/1 Navbar/Navbar";
import Footer from "../../components/5 Footer/Footer";

export default function ContactPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-semibold leading-tight xl:leading-[168px] text-[#F2F2F2] mb-8 md:mb-12 lg:mb-16" style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}>
            CONTACT
          </h1>
          <div className="max-w-4xl">
            <p className="text-xl xl:text-[28px] font-semibold leading-relaxed xl:leading-[38px] text-[#F2F2F2] mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
              ¿Tenés una idea o proyecto en mente? Me encantaría escucharte y ver cómo podemos trabajar juntos.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Email
                </h3>
                <p className="text-[#A6A6A6] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <a href="mailto:hola@temperini.dev" className="text-[#8900C3] hover:text-[#A020F0] transition-colors">
                    hola@temperini.dev
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#8900C3] transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://behance.net/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#8900C3] transition-colors">
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 