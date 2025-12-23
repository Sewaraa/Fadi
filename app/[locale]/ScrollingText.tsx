"use client";

import { useParams } from "next/navigation";
import { messages } from "@/lib/i18n";
import dynamic from "next/dynamic";

const Sparkles = dynamic(() => import("./Sparkle"), {
  ssr: false,
});

export default function ScrollingText() {
  const params = useParams();
  const locale = (params?.locale ?? "en") as "en" | "ar" | "fr";
  const t = messages[locale] ?? messages.en;

  const textArray = t.ScrollingText;

  return (
    <div className="relative w-full overflow-hidden py-8 border-t border-b border-gray-700">
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg z-0" />

      {/* Text */}
      <div
        className="
    relative z-10 flex gap-48
    animate-marquee-fast
    sm:animate-marquee-medium
    lg:animate-marquee-slow">
        {textArray.concat(textArray).map((text, idx) => (
         
            <span
            key={idx}
      className="
    text-lg sm:text-xl lg:text-2xl
    font-extrabold
    bg-gradient-to-r from-yellow-100 via-gray-100 to-yellow-100
    bg-clip-text text-transparent
    drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]
    whitespace-nowrap
    hover:scale-110
    transition-transform
    animate-gradient-text
  "
>
            {text}
          </span>
        ))}
      </div>

      {/* Sparkles (Client only) */}
      <Sparkles />
    </div>
  );
}
