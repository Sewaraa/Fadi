'use client'

import Link from 'next/link'
import { messages } from '@/lib/i18n'
import { useParams } from 'next/navigation'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  return (
    <footer className="relative w-full bg-black/90 text-white border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo + description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-yellow-400">SmartLine</h2>
          <p className="text-gray-300 max-w-sm">
            {t.footer.description || 'Your go-to solution for modern web projects and creative services.'}
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">{t.footer.linksTitle || 'Quick Links'}</h3>
          <Link href="/#services" className="hover:text-yellow-400 transition">{t.nav.services}</Link>
          <Link href="/#projects" className="hover:text-yellow-400 transition">{t.nav.projects}</Link>
          <Link href="/#about" className="hover:text-yellow-400 transition">{t.nav.about}</Link>
          <Link href="/#contact" className="hover:text-yellow-400 transition">{t.nav.contact}</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">{t.footer.contactTitle || 'Contact'}</h3>
          <p className="text-gray-300">{t.footer.address || '123 Main Street, City, Country'}</p>
          <p className="text-gray-300">{t.footer.phone || '+1 234 567 890'}</p>
          <p className="text-gray-300">{t.footer.email || 'info@smartline.com'}</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500/10 text-gray-400 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} SmartLine. {t.footer.rights || 'All rights reserved.'}
      </div>
    </footer>
  )
}