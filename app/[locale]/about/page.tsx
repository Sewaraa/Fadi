'use client'

import { useParams } from 'next/navigation'
import { motion as _motion } from 'framer-motion'
const motion: any = _motion
import { messages } from '@/lib/i18n'
import { HiOfficeBuilding, HiLightBulb, HiCode,  HiStar, HiHand } from 'react-icons/hi'
import { FiTarget } from 'react-icons/fi'

export default function AboutPage() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  const aboutSections = [
    {
      icon: <HiOfficeBuilding size={36} className="text-yellow-400" />,
      title: t.about.foundedTitle,
      description: t.about.foundedDesc,
    },
    {
      icon: <HiLightBulb size={36} className="text-yellow-400" />,
      title: t.about.missionTitle,
      description: t.about.missionDesc,
    },
    {
      icon: <HiCode size={36} className="text-yellow-400" />,
      title: t.about.expertiseTitle,
      description: t.about.expertiseDesc,
    },
    {
      icon: <FiTarget size={36} className="text-yellow-400" />,
      title: t.about.visionTitle,
      description: t.about.visionDesc,
    },
    {
      icon: <HiStar size={36} className="text-yellow-400" />,
      title: t.about.valuesTitle,
      description: t.about.valuesDesc,
    },
    {
      icon: <HiHand size={36} className="text-yellow-400" />,
      title: t.about.supportTitle,
      description: t.about.supportDesc,
    },
  ]

  return (
    <section className="relative w-full bg-black text-white px-4 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {t.about.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex gap-4 items-start hover:scale-105 transition-transform"
            >
              <div className="flex-shrink-0">
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">{section.title}</h3>
                <p className="mt-2 text-gray-300 leading-relaxed">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center text-gray-500"
        >
          {t.about.footer}
        </motion.p>
      </div>
    </section>
  )
}