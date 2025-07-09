"use client"

import { Button } from "@/components/ui/button"
import { EnergyParticles } from "@/components/ui/energy-particles"
import { EnergyOrbs } from "@/components/ui/energy-orbs"
import { ArrowRight, Play, TrendingDown, Zap, Factory, Bot, LineChart } from "lucide-react"
import { useTranslation } from "@/lib/translations"

interface HeroSectionProps {
  locale?: string
}

export function HeroSection({ locale = "pt" }: HeroSectionProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-100/30 to-orange-200/20" />

      {/* Energy particles animation */}
      <EnergyParticles />

      {/* Energy orbs and effects */}
      <EnergyOrbs />

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
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("heroSubtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up mb-16"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-xl"
            >
              <Zap className="mr-2 h-5 w-5" />
              {t("getStarted")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg bg-white/80 backdrop-blur-sm hover:bg-white group border-orange-200 text-orange-700 hover:text-orange-800"
            >
              <Play className="mr-2 h-5 w-5" />
              {t("knowMore")}
            </Button>
          </div>

          {/* Key benefits */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              {
                icon: <Factory className="h-10 w-10 text-orange-600" />,
                title: locale === "pt" ? "Indústrias & Data Centers" : "Industries & Data Centers",
                gradient: "from-orange-100 to-orange-50 border-orange-200",
              },
              {
                icon: <Bot className="h-10 w-10 text-yellow-600" />,
                title: locale === "pt" ? "Automação Inteligente" : "Smart Automation",
                gradient: "from-yellow-100 to-yellow-50 border-yellow-200",
              },
              {
                icon: <LineChart className="h-10 w-10 text-orange-600" />,
                title: locale === "pt" ? "Analytics em Tempo Real" : "Real-time Analytics",
                gradient: "from-orange-100 to-orange-50 border-orange-200",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-6 border shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 backdrop-blur-md`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-white/80 rounded-full shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
