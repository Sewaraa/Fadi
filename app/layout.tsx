import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/[locale]/Navbar";

// Fonts loaded via CSS in globals.css (Google Fonts import)
import Footer from "./[locale]/Footer";
import GlobalTouchEffect from "./[locale]/effect";
import TouchTrail from "./[locale]/effect";

/* ================== Fonts ================== */

// Fonts are declared in `app/globals.css` using Google Fonts import

/* ================== Metadata ================== */

export const metadata: Metadata = {
  title: "SmartLine",
  description: "Luxury software & digital solutions",
};

/* ================== Layout ================== */

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;

}) {
  

  return (
    <html>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <TouchTrail />
        {children}
        <Footer />
      </body>
    </html>
  );
}