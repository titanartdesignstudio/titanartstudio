import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import RevealProvider from "@/components/RevealProvider"
import Assistant from "@/components/Assistant"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "TitanArtStudio",
    template: "%s | TitanArtStudio",
  },

  description:
    "TitanArtStudio is a global digital & media technology company delivering high-performance web platforms, mobile apps, and scalable digital solutions.",

  keywords: [
    "web development company",
    "ui ux design",
    "mobile app development",
    "digital agency",
    "software company",
    "TitanArtStudio India",
  ],

  authors: [{ name: "TitanArtStudio" }],
  creator: "TitanArtStudio",

  metadataBase: new URL("https://titanartstudio.in"),

  openGraph: {
    title: "TitanArtStudio",
    description: "Building global digital systems for brands that lead.",
    url: "https://titanartstudio.in",
    siteName: "TitanArtStudio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "TitanArtStudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TitanArtStudio",
    description: "Premium Web Design & Development Agency",
    images: ["/icon.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.className}
          antialiased
          bg-[#020617]
          text-white
          overflow-x-hidden
        `}
      >

        {/* ✅ global background */}
        <div className="fixed inset-0 -z-10 bg-motion pointer-events-none" />

        {/* ✅ reveal animations */}
        <RevealProvider />

        {/* ✅ main content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* ✅ floating assistant */}
        <Assistant />

      </body>
    </html>
  )
}