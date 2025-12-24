'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { messages } from '@/lib/i18n'
import Sparkles from './Sparkle'

export default function FeaturesTypingBoxes() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  const features: string[] = t.features || []

  const [lines, setLines] = useState<string[]>([])
  const [currentText, setCurrentText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [featureIndex, setFeatureIndex] = useState(0)

  useEffect(() => {
    if (features.length === 0) return

    const current = features[featureIndex]

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + current[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 45)
      return () => clearTimeout(timeout)
    }

    const pause = setTimeout(() => {
      const updatedLines = [...lines, current]

      if (featureIndex === features.length - 1) {
        setLines([])
        setCurrentText('')
        setCharIndex(0)
        setFeatureIndex(0)
      } else {
        setLines(updatedLines)
        setCurrentText('')
        setCharIndex(0)
        setFeatureIndex((prev) => prev + 1)
      }
    }, 1000)

    return () => clearTimeout(pause)
  }, [charIndex, featureIndex, features, lines])

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start gap-4 px-4 pt-32
      bg-gradient-to-b from-black/70 via-yellow-900/20 to-black/70
      overflow-hidden"
    >
      {/* Gold Glow / Subtle Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent_60%)] pointer-events-none" />

      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 w-full max-w-2xl text-center shadow-lg border border-yellow-500/30"
        >
          <p className="text-white text-xl md:text-2xl font-semibold">{line}</p>
        </motion.div>
      ))}

      {/* Current typing line */}
      <motion.div
        key="current"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-md rounded-xl p-6 md:p-8 w-full max-w-2xl text-center shadow-lg border border-yellow-400/40"
      >
        <div className="flex justify-center items-center gap-2">
          <span className="text-white text-xl md:text-2xl font-semibold">
            {currentText}
          </span>
          <motion.span
            className="text-yellow-400 text-xl md:text-2xl font-mono"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </motion.div>

      <Sparkles />
    </section>
  )
}