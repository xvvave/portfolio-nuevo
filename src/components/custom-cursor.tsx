"use client"

import { useEffect, useState, useCallback } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const updateCursor = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleMouseDown = useCallback(() => setIsClicking(true), [])
  const handleMouseUp = useCallback(() => setIsClicking(false), [])

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.style.cursor === "pointer" ||
      target.classList.contains("cursor-pointer")
    ) {
      setIsHovering(true)
    }
  }, [])

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.style.cursor === "pointer" ||
      target.classList.contains("cursor-pointer")
    ) {
      setIsHovering(false)
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)

    document.addEventListener("mousemove", updateCursor, { passive: true })
    document.addEventListener("mousedown", handleMouseDown, { passive: true })
    document.addEventListener("mouseup", handleMouseUp, { passive: true })
    document.addEventListener("mouseover", handleMouseEnter, { passive: true })
    document.addEventListener("mouseout", handleMouseLeave, { passive: true })

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [updateCursor, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave])

  if (!isMounted) return null

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""} ${isClicking ? "click" : ""}`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: `translate3d(0, 0, 0)`,
      }}
    />
  )
}
