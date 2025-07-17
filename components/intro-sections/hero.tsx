"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, TrendingDown, Zap } from "lucide-react"
import { useTranslation } from "@/lib/translations"

interface HeroSectionProps {
  locale?: string
}

export function HeroSection({ locale = "pt" }: HeroSectionProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0" />

      {/* Background image */}
      <div className="absolute top-0 inset-0 -z-10">
        <img
          src="/images/casa-candelaria.jpg"
          alt="Casa Candelaria"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mt-5 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 text-orange-800 text-sm font-medium mb-8 animate-fade-in shadow-lg">
            <TrendingDown className="w-4 h-4 mr-2" />
            {locale === "pt" ? "🎯 Reduza até 40% dos custos energéticos" : "🎯 Reduce energy costs by up to 40%"}
          </div>

          {/* Main Heading with energy gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-700 bg-clip-text text-transparent">
              {t("heroTitle")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("heroSubtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up mb-16"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-8 py-4 text-lg group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                {t("getStarted")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg bg-white/80 backdrop-blur-sm hover:bg-white group border-orange-200 text-orange-700 hover:text-orange-800"
            >
              <Play className="mr-2 h-5 w-5" />
              {t("knowMore")}
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}