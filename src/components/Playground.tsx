"use client"

import { useState } from "react"
import RevealOnScroll from "./reveal-on-scroll"
import OptimizedImage from "./optimized-image"

const playgroundItems = [
  {
    id: 1,
    title: "Micro-interacciones CSS",
    description: "Experimentos con animaciones sutiles y transiciones fluidas",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["CSS", "Animation", "Micro-interactions"],
    type: "experiment",
  },
  {
    id: 2,
    title: "Componente 3D Card",
    description: "Tarjeta interactiva con efectos de profundidad y hover",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "3D", "Interactive"],
    type: "component",
  },
  {
    id: 3,
    title: "Sistema de Colores Dinámico",
    description: "Generador de paletas de colores con IA",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Design System", "AI", "Colors"],
    type: "tool",
  },
  {
    id: 4,
    title: "Loading States Collection",
    description: "Biblioteca de estados de carga elegantes y funcionales",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["UI", "Loading", "States"],
    type: "collection",
  },
  {
    id: 5,
    title: "Scroll Animations Lab",
    description: "Experimentos con Intersection Observer y scroll triggers",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["JavaScript", "Scroll", "Animation"],
    type: "experiment",
  },
  {
    id: 6,
    title: "Typography Playground",
    description: "Exploración de jerarquías tipográficas y espaciado",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Typography", "Design", "Hierarchy"],
    type: "experiment",
  },
]

const filterOptions = [
  { label: "Todo", value: "all" },
  { label: "Experimentos", value: "experiment" },
  { label: "Componentes", value: "component" },
  { label: "Herramientas", value: "tool" },
  { label: "Colecciones", value: "collection" },
]

export default function PlaygroundGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all" ? playgroundItems : playgroundItems.filter((item) => item.type === activeFilter)

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden py-12 md:py-16 lg:py-20"
      style={{
        background:
          "conic-gradient(from 203.7deg at 53.78% 39.65%, #0D0D0D 0deg, #0D0D0D 114.23deg, #666973 238.85deg, #0D0D0D 360deg)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-tight xl:leading-[67px] text-[#F2F2F2] mb-6"
              style={{ fontFamily: "var(--font-neue-haas)" }}
            >
              Playground
            </h1>
            <p
              className="text-lg md:text-xl xl:text-[24px] font-semibold leading-relaxed xl:leading-[32px] text-[#A6A6A6] max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Un espacio para experimentar, prototipar y explorar nuevas ideas. Aquí es donde las ideas toman forma
              antes de convertirse en soluciones.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Buttons */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full border transition-all duration-200 hover:scale-105 ${
                  activeFilter === option.value
                    ? "bg-[#8900C3] border-[#8900C3] text-white"
                    : "bg-transparent border-[#595959] text-[#A6A6A6] hover:border-[#8900C3] hover:text-[#8900C3]"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 100}>
              <div className="group bg-[#0D0D0D] border border-[#9C96A4] rounded-2xl p-6 transition-all duration-300 hover:border-[#8900C3] hover:shadow-[0px_8px_35px_rgba(115,0,165,0.35)] hover:scale-[1.02] cursor-pointer">
                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-xl">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3
                    className="text-xl font-semibold text-[#F2F2F2] group-hover:text-[#8900C3] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#8900C3]/20 border border-[#8900C3]/30 rounded-full text-xs text-[#8900C3] font-medium"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Coming Soon */}
        <RevealOnScroll delay={300}>
          <div className="text-center mt-16 md:mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8900C3]/20 border border-[#8900C3]/30 rounded-full">
              <div className="w-2 h-2 bg-[#8900C3] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#8900C3] font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                Más experimentos en camino...
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
