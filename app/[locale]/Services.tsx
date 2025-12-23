'use client'

import { useParams } from 'next/navigation'
import { messages } from '@/lib/i18n'
import {
  Code,
  LayoutDashboard,
  ShoppingCart,
  Settings,
} from 'lucide-react'

const iconsMap: Record<string, React.ReactNode> = {
  website: <Code size={36} />,
  dashboard: <LayoutDashboard size={36} />,
  'shopping-cart': <ShoppingCart size={36} />,
  automation: <Settings size={36} />,
}

export default function Services() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.Services.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.Services.ourmessage}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {t.Services.items.map((service: any) => (
            <div
              key={service.id}
              className="
                group relative rounded-2xl p-8
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-yellow-500/40
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_70%)]" />

              <div className="relative z-10">
                <div className="mb-6 text-yellow-400">
                  {iconsMap[service.icon]}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <p className="text-sm text-gray-300 font-medium">
                  {service.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}