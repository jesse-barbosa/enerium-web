"use client"

import { useState } from "react"
import { Header } from "@/components/intro-layout/header"
import { HeroSection } from "@/components/intro-sections/hero"
import { FeaturesSection } from "@/components/intro-sections/features"
import { StatsSection } from "@/components/intro-sections/stats"
import { TestimonialsSection } from "@/components/intro-sections/testimonials"
import { PricingSection } from "@/components/intro-sections/pricing"
import { CTASection } from "@/components/intro-sections/cta"
import { Footer } from "@/components/intro-layout/footer"

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
