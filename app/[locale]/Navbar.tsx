/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname, useRouter, useParams } from "next/navigation"
import { HiMenu, HiX } from "react-icons/hi"
import { messages } from "@/lib/i18n"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const locale = (params?.locale ?? "en") as "en" | "ar" | "fr"
  const t = messages[locale] ?? messages.en

  /* ---------------------------
     🔒 FORCE SAVED LANGUAGE
  --------------------------- */
  useEffect(() => {
    const savedLocale = localStorage.getItem("preferredLocale") as
      | "en"
      | "ar"
      | "fr"
      | null

    if (!savedLocale || savedLocale === locale) return

    const segments = pathname.split("/")
    segments[1] = savedLocale
    router.replace(segments.join("/"))
  }, [])

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.about, href: "/about" },
  ]

  /* ---------------------------
     🌍 LOCALIZE LINKS
  --------------------------- */
  const localize = (href: string) => {
    if (href.startsWith("#")) return `/${locale}${href}`
    if (href === "/") return `/${locale}`
    return `/${locale}${href}`
  }

  /* ---------------------------
     🔄 SWITCH LANGUAGE
  --------------------------- */
  const switchLang = (l: "en" | "ar" | "fr") => {
    localStorage.setItem("preferredLocale", l)

    const segments = pathname.split("/")
    segments[1] = l
    router.push(segments.join("/"))
  }

  return (
    <>
      {/* DESKTOP BAR */}
      <header className="fixed top-2 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 h-16 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10">
        <div className="flex items-center justify-between px-6 h-full">

          {/* LOGO */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/smartline2-2.png"
              alt="logo"
              width={120}
              height={30}
              priority
            />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 px-6 py-2 text-lg text-white bg-white/5 rounded-full">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                href={localize(l.href)}
                className="relative opacity-70 hover:opacity-100 transition
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* LANG */}
            <div className="hidden md:flex gap-2 text-xs">
              {["en", "ar", "fr"].map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l as any)}
                  className={`px-2 py-1 rounded ${
                    locale === l
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={localize("/contact")}
              className="hidden md:block rounded-full border border-white/30
                px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition"
            >
              {t.nav.contact}
            </Link>
            {/* MOBILE BTN */}
            <button onClick={() => setOpen(true)} className="text-2xl text-white md:hidden">
              <HiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-lg
          transform transition-transform duration-300
          ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="absolute top-6 right-6 text-3xl text-white">
          <button onClick={() => setOpen(false)}>
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-full gap-8 text-xl text-white">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={localize(l.href)}
              onClick={() => setOpen(false)}
              className="opacity-80 hover:opacity-100 transition"
            >
              {l.name}
            </Link>
          ))}

          <Link
            href={localize("/contact")}
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full border border-white px-10 py-3
              hover:bg-white hover:text-black transition"
          >
            {t.nav.contact}
          </Link>

          {/* LANG MOBILE */}
          <div className="mt-10 flex gap-4 text-sm">
            {["en", "ar", "fr"].map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l as any)}
                className={`px-3 py-1 rounded ${
                  locale === l
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}