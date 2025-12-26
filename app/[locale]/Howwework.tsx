'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { messages } from '@/lib/i18n'

export default function HowWeWorkTimeline() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  return (
    <section className="relative w-full bg-black pt-12 mb-0 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-semibold text-gray-100 text-center mb-20"
        >
          {t.howWeWork.title}
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-1 before:h-full before:bg-gradient-to-b before:from-yellow-600/50 before:via-yellow-500/30 before:to-transparent">
          {t.howWeWork.steps.map((step, idx) => {
            const isLeft = idx % 2 === 0

            return (
              <div key={idx} className="relative w-full flex flex-col md:flex-row items-center mb-20">

                {/* Connector Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-yellow-500 border-2 border-black z-20" />

                {/* Horizontal connector from dot to card */}
                <div
                  className={
                  `  hidden md:block
                    absolute top-1/2 -translate-y-1/2
                    ${isLeft ? 'left-1/2 w-20 border-t-2 border-yellow-500' : 'right-1/2 w-20 border-t-2 border-yellow-500'}
                 ` }
                />

                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`
                    w-full md:w-1/2 p-6
                    ${isLeft ? 'md:text-right md:pr-12 md:ml-auto' : 'md:text-left md:pl-12 md:mr-auto'}
                 ` }
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <span className="text-xs tracking-widest text-gray-500">STEP {idx + 1}</span>
                    <h3 className="mt-2 text-xl font-semibold text-gray-100">{step.title}</h3>
                    <p className="mt-3 text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>
      </div>

      {/* Subtle background glow */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]"
      />
    </section>
  )
}