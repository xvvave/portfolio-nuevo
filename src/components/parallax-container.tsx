"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxContainerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxContainer({ children, speed = 0.5, className = "" }: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      element.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`parallax-element ${className}`}>
      {children}
    </div>
  )
}
