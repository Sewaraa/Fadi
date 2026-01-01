'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { messages } from '@/lib/i18n'
import Sparkles from './Sparkle'

export default function HowWeWorkCreative() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en
  const isRTL = locale === 'ar'

  return (
    <section className={`relative w-full bg-black px-4 py-28 ${isRTL ? 'rtl' : ''}`}>
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-100">
            {t.howWeWork.title}
          </h2>
          <p className="mt-3 text-gray-400">
            {t.howWeWork.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {t.howWeWork.steps.map((step, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={
                  `          relative z-10
          max-w-5xl mx-auto
          rounded-[2.5rem]
          bg-black/50 backdrop-blur-xl
          border border-yellow-500/30
          px-10 py-10 md:px-12
          text-center
          shadow-[0_0_80px_rgba(212,175,55,0.15)]
                  ${isRTL ? 'text-right' : 'text-left'}`
                }
              >
                {/* Step Number */}
                <div className={`absolute -top-6 ${isRTL ? 'right-8' : 'left-8'}
                  w-12 h-12 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center
                  text-lg shadow-lg
                `}>
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  {step.description}
                </p>
<Sparkles/>
               
              </motion.div>
            )
          })}
           
        </div>

        {/* Footer */}
        <p className="mt-20 text-center text-sm text-gray-500">
          {t.howWeWork.footer}
        </p>
        
      </div>
     
    </section>
  )
}