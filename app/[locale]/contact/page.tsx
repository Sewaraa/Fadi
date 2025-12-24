"use client"

import { useParams } from 'next/navigation'
import { messages } from '@/lib/i18n'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const params = useParams()
  const locale = (params?.locale ?? 'en') as 'en' | 'ar' | 'fr'
  const t = messages[locale] ?? messages.en

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-16
      bg-gradient-to-b from-black/90 via-yellow-900/10 to-black/80
    ">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.nav.contact}</h1>
        <p className="text-gray-300 text-lg">{t.footer.description}</p>
      </div>

      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-gray-100/20 backdrop-blur-md rounded-xl p-8 flex flex-col gap-4 text-white"
        >
          <h2 className="text-xl font-semibold text-yellow-400">{t.footer.contactTitle}</h2>
          <p>{t.footer.address}</p>
          <p>{t.footer.phone}</p>
          <p>{t.footer.email}</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-gray-100/20 backdrop-blur-md rounded-xl p-8 flex flex-col gap-4 text-white"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder={locale === 'ar' ? 'الاسم' : locale === 'fr' ? 'Nom' : 'Name'}
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 placeholder-gray-300 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={locale === 'ar' ? 'البريد الإلكتروني' : locale === 'fr' ? 'Email' : 'Email'}
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 placeholder-gray-300 text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder={locale === 'ar' ? 'الرسالة' : locale === 'fr' ? 'Message' : 'Message'}
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 placeholder-gray-300 text-white focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold py-3 rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition"
          >
            {locale === 'ar' ? 'إرسال' : locale === 'fr' ? 'Envoyer' : 'Send'}
          </button>

          {submitted && (
            <p className="text-green-400 mt-2 text-center">
              {locale === 'ar' ? 'تم الإرسال بنجاح!' : locale === 'fr' ? 'Envoyé avec succès!' : 'Message sent successfully!'}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
