"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setMobileMenuOpen(false) // Close mobile menu when hiding navbar
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full h-16 md:h-20 lg:h-24 z-[9999] flex items-center justify-between px-4 md:px-6 lg:px-10 transition-all duration-300 bg-[#0D0D0D] border-b border-[#333]/50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo TEMPERINI */}
      <Link href="/" className="flex items-center justify-center group cursor-pointer">
        <h1
          className="fluid-text-xl md:fluid-text-3xl lg:fluid-text-4xl xl:fluid-text-5xl font-medium tracking-[0.15em] transition-all duration-200"
          style={{
            fontFamily: "var(--font-manrope)",
            WebkitTextStroke: "3px #A6A6A6",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          TEMPERINI
        </h1>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-16">
        <Link
          href="/proyectos"
          className={`fluid-text-sm font-extrabold transition-all duration-150 relative cursor-pointer ${
            isActive("/proyectos") ? "text-[#9D00E0]" : "text-[#F2F2F2] hover:text-[#A6A6A6]"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Proyectos
          {isActive("/proyectos") && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9D00E0] rounded-full" />}
        </Link>
        <Link
          href="/playground"
          className={`fluid-text-sm font-extrabold transition-all duration-150 relative cursor-pointer ${
            isActive("/playground") ? "text-[#9D00E0]" : "text-[#F2F2F2] hover:text-[#A6A6A6]"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Playground
          {isActive("/playground") && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9D00E0] rounded-full" />
          )}
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <Link
        href="/contact"
        className="hidden md:flex items-center justify-center px-6 h-10 md:h-[40px] rounded-full transition-all duration-200 hover:shadow-lg btn-primary cursor-pointer"
        style={{
          background: "linear-gradient(180deg, #8900C3 72%, #595959 100%)",
          border: "1px solid rgba(156, 150, 164, 0.5)",
          borderRadius: "100px",
        }}
      >
        <span
          className="fluid-text-sm font-semibold text-[#F2F2F2] whitespace-nowrap"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Conectemos
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-[#F2F2F2] transition-transform duration-200 cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-t border-[#333]/50 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/proyectos"
              className="fluid-text-base font-extrabold text-[#F2F2F2] hover:text-[#A6A6A6] transition-colors py-2 cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="/playground"
              className="fluid-text-base font-extrabold text-[#F2F2F2] hover:text-[#A6A6A6] transition-colors py-2 cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Playground
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-6 h-10 rounded-full mt-4 transition-all cursor-pointer"
              style={{
                background: "linear-gradient(180deg, #8900C3 72%, #595959 100%)",
                border: "1px solid rgba(156, 150, 164, 0.5)",
                borderRadius: "100px",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                className="fluid-text-base font-semibold text-[#F2F2F2]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Conectemos
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
