"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { messages } from "@/lib/i18n";
import Sparkles from "./Sparkle";

export default function FeaturesTypingBoxes() {
  const params = useParams();
  const locale = (params?.locale ?? "en") as "en" | "ar" | "fr";
  const t = messages[locale] ?? messages.en;

  const features: string[] =
    (t.features && (t.features.items ?? t.features)) ?? [];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [lines, setLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);

  /* ===============================
     Intersection Observer
  =============================== */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // reset animation when section enters
          setLines([]);
          setCurrentText("");
          setCharIndex(0);
          setFeatureIndex(0);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ===============================
     Typing Effect
  =============================== */
  useEffect(() => {
    if (!features.length || !isVisible) return;

    const current = features[featureIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 45);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      if (featureIndex === features.length - 1) {
        setLines([]);
        setFeatureIndex(0);
      } else {
        setLines((prev) => [...prev, current]);
        setFeatureIndex((prev) => prev + 1);
      }
      setCurrentText("");
      setCharIndex(0);
    }, 800);

    return () => clearTimeout(pause);
  }, [charIndex, featureIndex, features, isVisible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        min-h-[50vh]
        -mt-12
        flex flex-col
        items-center
        justify-start
        gap-3
        px-4
        pt-20
        bg-gradient-to-b
        from-black
        via-yellow-900/15
        to-black
        overflow-hidden
      "
    >
      {/* Title */}
      <h2 className="mb-4 text-center text-3xl sm:text-4xl font-semibold tracking-tight text-gray-200">
        {t.features?.title ?? "Why Choose Us?"}
      </h2>

      {/* Subtle Glow */}
      <div
        className="
          absolute top-0 inset-x-0 h-48
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]
          pointer-events-none
        "
      />

      {/* Previous Lines */}
      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            bg-black/30
            backdrop-blur-md
            rounded-xl
            p-6 md:p-8
            w-full max-w-2xl
            text-center
            shadow-lg
            border border-yellow-500/30
          "
        >
          <p className="text-white text-xl md:text-2xl font-semibold">
            {line}
          </p>
        </motion.div>
      ))}

      {/* Active Line */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          bg-black/40
          backdrop-blur-md
          rounded-xl
          p-6 md:p-8
          w-full max-w-2xl
          text-center
          shadow-lg
          border border-yellow-400/40
        "
      >
        <div className="flex justify-center items-center gap-2">
          <span className="text-white text-xl md:text-2xl font-semibold">
            {currentText}
          </span>
          <motion.span
            className="text-yellow-400 text-xl md:text-2xl font-mono"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </motion.div>

      <Sparkles />
    </section>
  );
}