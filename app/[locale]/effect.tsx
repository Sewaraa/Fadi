'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TouchTrail() {
  const [touchPos, setTouchPos] = useState<{ x: number; y: number } | null>(null)
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Detect touch devices only
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouchDevice) return

    let idCounter = 0

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      setTouchPos({ x: touch.clientX, y: touch.clientY })
      setTrails(prev => [...prev, { x: touch.clientX, y: touch.clientY, id: idCounter++ }])
    }

    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Cleanup
    return () => window.removeEventListener("touchmove", handleTouchMove)
  }, [])

  return (
    <AnimatePresence>
      {trails.map(trail => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: trail.x - 10,
            top: trail.y - 10,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(255, 215, 0, 0.2)", // subtle gold
            pointerEvents: "none",
            zIndex: 9999,
          }}
          onAnimationComplete={() => {
            setTrails(prev => prev.filter(t => t.id !== trail.id))
          }}
        />
      ))}
    </AnimatePresence>
  )
}