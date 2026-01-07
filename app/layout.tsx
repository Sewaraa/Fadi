import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/[locale]/Navbar";
import Footer from "./[locale]/Footer";
import TouchTrail from "./[locale]/effect";
import { messages } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "ar" | "fr" }
}): Promise<Metadata> {
  const t = messages[params.locale] ?? messages.en

  return {
    title: t.seo.title,
    description: t.seo.description,
    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      url: "https://smartline.com",
      siteName: "SmartLine",
      images: [
        {
          url: "/smartline2-2.png",
          width: 1200,
          height: 630,
          alt: t.seo.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
      images: ["/smartline2-2.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <TouchTrail />
        {children}
        <Footer />
      </body>
    </html>
  );
}