"use client";

import { motion as _motion } from "framer-motion";
const motion: any = _motion;
import Link from "next/link";
import { useParams } from "next/navigation";
import { messages } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

export default function ContactCTA() {
  const params = useParams();
  const locale = (params?.locale ?? "en") as "en" | "ar" | "fr";
  const t = messages[locale] ?? messages.en;

  const title = t.getintouch.title;
  const subtitle = t.getintouch.subtitle;
  const subtitle2 = t.getintouch.subtitle2;
  const button = t.getintouch.buttontext;

  return (
    <motion.section
      initial={{ opacity: 0, y: -1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-22 px-4 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(212,175,55,0.15), rgba(0,0,0,0.8), rgba(212,175,55,0.15))",
          backgroundSize: "200% 200%",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          relative z-10
          max-w-5xl mx-auto
          rounded-[2.5rem]
          bg-black/50 backdrop-blur-xl
          border border-yellow-500/30
          px-10 py-10 md:px-12
          text-center
          shadow-[0_0_80px_rgba(212,175,55,0.15)]
        "
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="text-yellow-400" size={40} />
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {subtitle2}
        </p>
        <Link href={`/${locale}/contact`}>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="
              relative
              px-12 py-4
              rounded-full
              font-semibold text-lg
              text-black
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
              shadow-lg
              overflow-hidden
            "
          >
            <span
              className="
              absolute inset-0
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
              translate-x-[-100%]
              hover:translate-x-[100%]
              transition-transform duration-700
            "
            />
            <span className="relative z-10">{button}</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
