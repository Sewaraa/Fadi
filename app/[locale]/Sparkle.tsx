'use client'

import { useEffect, useRef, useState } from 'react'

type Sparkle = {
  top: string
  left: string
  delay: string
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const initialized = useRef(false)
 
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }))

    setSparkles(generated)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {sparkles.map((s, idx) => (
        <div
          key={idx}
          className="absolute w-1 h-1 rounded-full bg-yellow-300/30 animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  )
}