'use client'

import { useParams } from 'next/navigation'
import { messages } from '@/lib/i18n'
import { motion as _motion } from 'framer-motion'
const motion: any = _motion
type Variants = any
import { Code, LayoutDashboard, ShoppingCart, Settings } from 'lucide-react'
import type { ReactElement } from 'react'

const iconsMap: Record<string, ReactElement> = {
  website: <Code size={34} />,
  dashboard: <LayoutDashboard size={34} />,
  'shopping-cart': <ShoppingCart size={34} />,
  automation: <Settings size={34} />,
}

type IconKey = 'website' | 'dashboard' | 'shopping-cart' | 'automation'

interface ServiceItem {
  id: string
  title: string
  description: string
  benefit: string
  icon: IconKey | string
}

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function ServicesSection() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  return (
    <section id="services" className="relative py-8 overflow-hidden
      bg-gradient-to-b from-black/90 via-yellow-900/10 to-black/80
    ">
      <div className="absolute inset-0 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
          initial={{opacity:0,x:20}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="text-4xl md:text-6xl font-bold text-gray-200 mb-6">
            {t.Services.title}
          </motion.h2>
          <motion.p 
           initial={{opacity:0,x:-20}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="text-gray-300 max-w-3xl mx-auto text-lg">
            {t.Services.ourmessage}
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
          {(t.Services.items as ServiceItem[]).map((service, i: number) => (
           <motion.div
  key={service.id}
  variants={cardReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{ delay: i * 0.1 }}
  whileHover={{ scale: 1.05 }}        
  whileTap={{ scale: 0.97 }}          
  className="relative h-full rounded-2xl p-8 overflow-hidden
    bg-black/20 backdrop-blur-md border border-yellow-500/20 shadow-lg
    cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:border-yellow-400/40
  "
>
  <div className="relative z-10 flex flex-col items-center text-center">
    <div className="text-yellow-400 mb-6">{iconsMap[service.icon]}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
    <span className="text-sm text-yellow-400 font-medium">{service.benefit}</span>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}