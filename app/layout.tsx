import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enerium",
  description: "Reduce energy costs by up to 40% with AI-powered consumption analysis and automated optimization for industrial and commercial buildings.",
  keywords: [
    "energy management",
    "AI optimization",
    "IoT integration",
    "cost reduction",
    "sustainability",
    "industrial energy",
    "commercial buildings",
    "HVAC control",
    "energy analytics",
    "smart buildings",
    "energy efficiency",
    "renewable energy",
    "green energy",
    "climate change",
    "carbon footprint",
    "electricity consumption",
    "energy consumption",
    "energy monitoring",
    "energy tracking",
    "energy usage",
    "energy savings",
    "energy efficiency optimization",
    "building automation",
    "building management",
    "energy management system",
    "energy metering",
    "energy monitoring software",
    "power consumption",
    "energy data analytics",
    "energy optimization platform",
    "energy management platform",
    "energy efficiency solutions",
    "energy saving solutions",
    "energy management solutions",
    "energy optimization software",
    "energy management software",
    "energy efficiency tools",
    "energy saving tools",
    "energy management tools",
    "energy optimization tools",
    "energy data management",
    "energy data analysis",
    "energy data visualization",
    "energy data insights",
    "energy data reporting",
    "energy data analytics platform",
    "energy data management platform",
    "energy data analysis platform",
    "energy data visualization platform",
    "energy data insights platform",
    "energy data reporting platform",
  ],
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
