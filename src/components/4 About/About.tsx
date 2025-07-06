import TiltedCard from "./TiltedCard"
import RevealOnScroll from "../reveal-on-scroll"

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full pt-16 md:pt-20 lg:pt-24 mb-16 md:mb-24"
      style={{
        background:
          "conic-gradient(from 203.7deg at 53.78% 39.65%, #0D0D0D 0deg, #0D0D0D 114.23deg, #666973 238.85deg, #0D0D0D 360deg)",
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* ABOUT Title */}
        <RevealOnScroll>
          <div className="-mb-2 md:-mb-4 lg:-mb-6 mt-8 md:mt-12 lg:mt-16">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] font-semibold leading-tight text-[#A6A6A6]"
              style={{ 
                fontFamily: "var(--font-neue-haas)",
                filter: "contrast(1.1) brightness(1.05)"
              }}
            >
              ABOUT
            </h2>
          </div>
        </RevealOnScroll>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-1">
          {/* Left Content - Text */}
          <div className="flex-1 max-w-2xl lg:max-w-xl xl:max-w-2xl">
            <RevealOnScroll delay={100}>
              <p
                className="text-base sm:text-lg md:text-xl xl:text-[24px] 2xl:text-[28px] font-semibold leading-relaxed xl:leading-[32px] 2xl:leading-[38px] text-[#F2F2F2]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Soy Lautaro R. Temperini, diseñador multimedia especializado en experiencias digitales funcionales,
                intuitivas y visualmente sólidas. Trabajo en la intersección entre diseño, código y movimiento, con foco
                en UX/UI. Concibo el diseño como un proceso estratégico, iterativo y guiado por intención. Apunto a
                soluciones claras, bien pensadas y visualmente coherentes.
                <br />
                <br />
                Me entusiasma jugar el juego, pero sobre todo entender cómo está construido el tablero. Por eso me
                interesa colaborar con personas que entienden el diseño como proceso, no como resultado.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2 xl:w-[45%] flex-shrink-0 flex justify-center lg:justify-end lg:self-end">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <TiltedCard
                imageSrc="/images/foto-lautaro.png"
                altText="Lautaro R. Temperini - Diseñador Multimedia"
                captionText=""
                aspectRatio={1}
                scaleOnHover={1.02}
                rotateAmplitude={4}
                showTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
