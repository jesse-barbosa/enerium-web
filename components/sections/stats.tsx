"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { useTranslation } from "@/lib/translations"

interface StatsSectionProps {
  locale?: string
}

export function StatsSection({ locale = "pt" }: StatsSectionProps) {
  const { t } = useTranslation(locale)

  const stats = {
    en: [
      { number: 500, suffix: "+", label: "Industrial Clients" },
      { number: 40, suffix: "%", label: "Average Cost Reduction" },
      { number: 2.5, suffix: "M", label: "Tons CO₂ Saved" },
      { number: 99.9, suffix: "%", label: "System Uptime" },
    ],
    pt: [
      { number: 500, suffix: "+", label: "Clientes Industriais" },
      { number: 40, suffix: "%", label: "Redução Média de Custos" },
      { number: 2.5, suffix: "M", label: "Toneladas CO₂ Economizadas" },
      { number: 99.9, suffix: "%", label: "Uptime do Sistema" },
    ],
  }

  const currentStats = stats[locale as keyof typeof stats] || stats.en

  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("statsTitle")}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {currentStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-orange-100 text-lg font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
