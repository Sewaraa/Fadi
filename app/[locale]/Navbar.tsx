"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
import { messages } from '@/lib/i18n';
import { useParams } from 'next/navigation'
import Image from 'next/image'



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('EN')

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const toggleLang = () => setLangOpen((prev) => !prev)

  const router = useRouter();
  const params=useParams();
  const pathname = usePathname() || '/'
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr';
  const t = messages[locale] ?? messages.en;
  const changeLanguage = (lang: string) => {
    const targetLocale = lang === 'EN' ? 'en' : lang === 'FR' ? 'fr' : 'ar'

    // preserve the rest of the path when switching locale
    const segments = pathname.split('/')
    if (['en','ar','fr'].includes(segments[1])) {
      segments[1] = targetLocale
    } else {
      // insert locale as the first segment
      segments.splice(1, 0, targetLocale)
    }

    const newPath = segments.join('/') || `/${targetLocale}`
    router.push(newPath)

    setLanguage(lang)
    setLangOpen(false)
  }
  
const navLinks = [
  { name: t.nav.home, href: '/' },
  { name: t.nav.services, href: '#services' },
  { name: t.nav.projects, href: '/Projects' },
  { name: t.nav.about, href: '/About' },
]

const localize = (href: string) => {
  try {
    if (!href.startsWith('/')) return href
    const segments = href.split('/')
    if (['en', 'ar', 'fr'].includes(segments[1])) return href
    if (href === '/') return `/${locale}`
    return `/${locale}${href}`
  } catch (e) {
    return href
  }
}

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md shadow-sm h-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center mt-0 h-8 w-auto">
            <Image src="/smartline2-2.png" alt="Logo" width={140} height={32} className="block" priority />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 rounded bg-white px-3 py-2 text-sm font-semibold text-black"
              >
                {language}
                <HiChevronDown />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 overflow-hidden rounded bg-white shadow-lg text-black">
                  <button
                    onClick={() => changeLanguage('EN')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('AR')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => changeLanguage('FR')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <nav className="hidden items-center gap-6 text-white md:flex">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={localize(link.href)}
                  className="opacity-80 hover:opacity-100 transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href={localize('/contact')}
                className="rounded border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition"
              >
                {t.nav.contact}
              </Link>
            </nav>
            <button
              onClick={toggleMenu}
              className="text-2xl text-white md:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-40 bg-black/95 transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 pt-28 text-lg text-white">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={localize(link.href)}
              onClick={() => setMenuOpen(false)}
              className="opacity-80 hover:opacity-100 transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={localize('/contact')}
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded border border-gray-700 py-4 text-center font-medium hover:bg-white hover:text-black transition"
          >
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </>
  )
}