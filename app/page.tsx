"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { StatsSection } from "@/components/sections/stats"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { PricingSection } from "@/components/sections/pricing"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  const [locale, setLocale] = useState("pt")

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        <HeroSection locale={locale} />
        <FeaturesSection locale={locale} />
        <StatsSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <PricingSection locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
