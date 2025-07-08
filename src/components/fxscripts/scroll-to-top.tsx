"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop({ size = 32 }: { size?: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{ width: size, height: size }}
          className={"fixed bottom-2 md:bottom-4 right-6 md:right-12 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-105"}
          aria-label="Scroll to top"
        >
          <ArrowUp size={size * 0.42} color="#f2f2f2" />
        </button>
      )}
    </>
  )
}
