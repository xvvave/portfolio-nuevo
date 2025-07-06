import Link from "next/link"
import RevealOnScroll from "../reveal-on-scroll"
import ParallaxContainer from "../parallax-container"

function HeroContent() {
  return (
    <div className="container mx-auto h-full flex flex-col items-start justify-center pt-32 md:pt-40 lg:pt-48">
      {/* Main Heading */}
      <RevealOnScroll>
        <div className="mb-4 md:mb-6">
          <h1
            className="fluid-text-3xl md:fluid-text-4xl lg:fluid-text-5xl font-semibold leading-tight text-[#F2F2F2] max-w-full md:max-w-md lg:max-w-lg xl:max-w-[394px]"
            style={{ fontFamily: "var(--font-neue-haas)" }}
          >
            Pensar distinto,<br />
            crear con intención.
          </h1>
        </div>
      </RevealOnScroll>

      {/* Subtitle */}
      <RevealOnScroll delay={100}>
        <div className="mb-6 md:mb-8">
          <p
            className="fluid-text-base md:fluid-text-lg font-semibold leading-relaxed text-[#A6A6A6] max-w-full md:max-w-md lg:max-w-lg xl:max-w-[427px]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Transformo ideas en experiencias digitales reales.
          </p>
        </div>
      </RevealOnScroll>

      {/* CTA Button */}
      <RevealOnScroll delay={200}>
        <Link
          href="/#projects"
          className="flex items-center justify-center w-full max-w-xs md:w-auto md:max-w-none md:min-w-[257px] h-10 md:h-[40px] bg-gradient-to-r from-[#F2F2F2] via-[#F2F2F2] to-[#9D00E0] rounded-full px-6 shadow-[0px_4px_25px_rgba(115,0,165,0.25)] transition-all duration-200 hover:shadow-[0px_6px_30px_rgba(115,0,165,0.4)] btn-primary group cursor-pointer"
        >
          <span
            className="fluid-text-sm font-semibold text-[#0D0D0D] group-hover:text-[#0D0D0D] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explorá mis trabajos
          </span>
        </Link>
      </RevealOnScroll>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-screen relative overflow-hidden">
      {/* Background Effect - Static */}
      <div className="absolute pointer-events-none hidden md:block left-[18.75vw] top-[-75px] w-[81.25vw] h-[1099px]">
        <img src="/images/BackgroundEffect.png" alt="" className="w-full h-full object-cover opacity-60" />
      </div>

      {/* Mobile Background Effect - Static */}
      <div className="absolute pointer-events-none md:hidden inset-0 opacity-20">
        <img src="/images/BackgroundEffect.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Hero Content */}
      <HeroContent />
    </section>
  )
}
  