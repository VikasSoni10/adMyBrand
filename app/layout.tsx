import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Revolutionary AI-powered marketing platform that helps businesses create compelling campaigns, analyze performance, and scale their brand with cutting-edge artificial intelligence.",
  keywords:
    "AI marketing, artificial intelligence, marketing automation, brand management, content generation, analytics",
  authors: [{ name: "ADmyBRAND Team" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionary AI-powered marketing platform for modern businesses",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite",
    description: "Transform Your Marketing with AI",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
