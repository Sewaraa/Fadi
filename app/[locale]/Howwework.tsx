'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { messages } from '@/lib/i18n'

export default function HowWeWork() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  const isRTL = locale === 'ar'

  return (
    <section className={`relative w-full bg-black px-4 py-28 ${isRTL ? 'rtl' : ''}`}>
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-100">
            {t.howWeWork.title}
          </h2>
          <p className="mt-3 text-gray-400">
            {t.howWeWork.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative space-y-16">
          {/* Vertical line */}
          <div className={`absolute top-0 h-full w-px bg-yellow-500/10 ${isRTL ? 'right-3' : 'left-3'}`} />

          {t.howWeWork.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative ${isRTL ? 'pr-12 text-right' : 'pl-12 text-left'}`}
            >
              {/* Dot */}
              <span className={`absolute top-2 h-2 w-2 rounded-full bg-yellow-400/40 ${isRTL ? 'right-0' : 'left-0'}`} />

              <h3 className="text-lg font-semibold text-gray-200">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-20 text-center text-sm text-gray-500">
          {t.howWeWork.footer}
        </p>
      </div>
    </section>
  )
}