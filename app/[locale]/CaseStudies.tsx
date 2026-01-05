'use client'

import { motion as _motion } from 'framer-motion'
const motion: any = _motion
import { useParams } from 'next/navigation'
import { messages } from '@/lib/i18n'
import { HiDesktopComputer } from 'react-icons/hi' // أيقونة Live Demo

export default function CaseStudiesCreativeGrid() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en
  const items = t.caseStudies.items
  const isRTL = locale === 'ar'

  return (
    <section  id="case-studies"className="relative w-full bg-black py-32 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-28 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            {t.caseStudies.title}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">{t.caseStudies.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative bg-gradient-to-tr from-white/5 via-yellow-800/10 to-black/20
                backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-2xl
                flex flex-col justify-between overflow-hidden cursor-pointer min-h-[360px]"
            >
              <motion.span
                className="absolute -top-6 -left-1 text-[120px] font-extrabold text-yellow-400/10 select-none pointer-events-none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">{item.date}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
              <motion.a
                href={item.liveDemo}
                target="_blank"
                className="mt-6 relative z-10 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full
                           bg-yellow-500/20 text-yellow-400 font-medium hover:bg-yellow-500/30
                           transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {locale === 'ar'
                  ? 'عرض المشروع'
                  : locale === 'fr'
                  ? 'Voir le projet'
                  : 'View Project'}
                <HiDesktopComputer className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}