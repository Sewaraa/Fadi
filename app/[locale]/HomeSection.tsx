'use client'

import React from "react"
import { messages } from '@/lib/i18n'
import { useParams } from 'next/navigation'
import Image from "next/image"
import Sparkles from "./Sparkle"
import  Link  from "next/link"

export const HomeSection: React.FC = () => {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar'
  const t = messages[locale] ?? messages.en

  return (
    <section className="relative w-full min-h-[50vh] overflow-hidden flex flex-col items-start">
      
      {/* Background Image */}
      <Image
        src="/wavescopy.png"
        alt="Background Gold"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-left scale-[1.02]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/95" />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.25),transparent_45%)]" />

      {/* Bottom Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center pt-28 pb-16 px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold leading-tight tracking-tight drop-shadow-lg mb-4">
          {t.hero.title}
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-8 drop-shadow-sm">
          {t.hero.coremessage}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={`/${locale}/#services`}>
          <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base sm:text-lg font-semibold  border border-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg transform hover:-translate-y-0.5">
            {t.hero.buttontextn1}
          </button>
          </Link>
         <Link href={`/${locale}/contact`}>
          <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base sm:text-lg font-semibold border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all shadow">
            {t.hero.buttontextn2}
          </button>
         </Link>

         
        </div>
      </div>

      <Sparkles />
    </section>
  )
}