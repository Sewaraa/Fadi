import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/[locale]/Navbar";

import {
  Inter,
  Playfair_Display,
  Noto_Sans_Arabic,
} from "next/font/google";
import Footer from "./[locale]/Footer";

/* ================== Fonts ================== */

// English text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

// Arabic text
const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

// English headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

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
    <html
    
      className={`${inter.variable} ${arabic.variable} ${playfair.variable}`}
    >
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}