'use client';
import React from "react";
import { messages } from '@/lib/i18n';
import { useParams } from 'next/navigation';
import Image from "next/image";
import Sparkles from "./Sparkle";

export const HomeSection: React.FC = () => {
  const params = useParams();
  const locale = (params?.locale ?? 'en') as 'en' | 'ar';
  const t = messages[locale] ?? messages.en;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <Image
        src="/wavescopy.png"
        alt="Background Gold"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-left lg:object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.25),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">

        <h1 className="
          text-white
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          font-serif font-semibold
          leading-tight tracking-tight
          drop-shadow-lg mb-4
        ">
          {t.hero.title}
        </h1>

        <p className="
          text-gray-300
          text-base sm:text-lg md:text-xl lg:text-2xl
          leading-relaxed
          max-w-3xl
          mb-10
          drop-shadow-sm
        ">
          {t.hero.coremessage}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="
            px-8 sm:px-10 md:px-12
            py-3 md:py-4
            rounded-lg
            text-base sm:text-lg
            font-semibold
            bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
            text-black
            hover:from-yellow-300 hover:to-yellow-500
            transition-all
            shadow-lg
          ">
            {t.hero.buttontextn1}
          </button>

          <button className="
            px-8 sm:px-10 md:px-12
            py-3 md:py-4
            rounded-lg
            text-base sm:text-lg
            font-semibold
            border border-yellow-500
            text-yellow-400
            hover:bg-yellow-500 hover:text-black
            transition-all
            shadow
          ">
            {t.hero.buttontextn2}
          </button>
        </div>

      </div>
      <Sparkles/>
    </section>
  );
};