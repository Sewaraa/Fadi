"use client";

import { useParams } from "next/navigation";
import { messages } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { motion as _motion } from "framer-motion";
const motion: any = _motion;
import emailjs from "@emailjs/browser";
// use anchor for mailto link instead of importing Link from lucide-react
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";

export default function ContactPage() {
  const { locale = "en" } = useParams<{ locale: "en" | "ar" | "fr" }>();
  const t = messages[locale] ?? messages.en;

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: process.env.NEXT_PUBLIC_HOSTINGER_EMAIL,
          reply_to: formData.email,
          message: formData.message,
        }
      );

      setFormData({ name: "", email: "", message: "" });
      setState("success");
    } catch (err) {
      console.error(err);
      setState("error");
    }
  };

  const c = t.contact;

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8
      bg-gradient-to-b from-black/90 via-yellow-900/10 to-black/80
    "
    >
      <div className="max-w-3xl w-full text-center mb-12 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t.nav.contact}
        </h1>
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
          <h2 className="text-xl font-semibold text-yellow-400">
            {t.footer.contactTitle}
          </h2>
          <a href="mailto:Smartline@smartline-sy.com" className="text-gray-300">
            Smartline@smartline-sy.com
          </a>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 mt-4 text-xl md:text-2xl">
              <a
                href="https://www.facebook.com/share/17tdVbooPi/"
                className="hover:text-yellow-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/Smartline332"
                className="hover:text-yellow-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/fadi-shalhoub-93a0803a3"
                className="hover:text-yellow-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://t.me/smartline332"
                className="hover:text-yellow-400 transition"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
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
            placeholder={
              locale === "ar" ? "الاسم" : locale === "fr" ? "Nom" : "Name"
            }
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 placeholder-gray-300 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={
              locale === "ar"
                ? "البريد الإلكتروني"
                : locale === "fr"
                ? "Email"
                : "Email"
            }
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 placeholder-gray-300 text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder={
              locale === "ar"
                ? "الرسالة"
                : locale === "fr"
                ? "Message"
                : "Message"
            }
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 placeholder-gray-300 text-white focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={state === "loading"}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
              text-black font-semibold py-3 rounded-lg
              hover:from-yellow-300 hover:to-yellow-500 transition disabled:opacity-50"
          >
            {state === "loading" ? c.sending : c.send}
          </button>
          {state === "success" && (
            <p className="text-green-400 mt-2 text-center">{c.success}</p>
          )}
          {state === "error" && (
            <p className="text-red-400 mt-2 text-center">{c.error}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
