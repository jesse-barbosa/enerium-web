"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { useTranslation } from "@/lib/translations"

interface CTASectionProps {
  locale?: string
}

export function CTASection({ locale = "pt" }: CTASectionProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="py-24 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-700 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            {locale === "pt" ? "🌱 Transforme sua gestão energética hoje" : "🌱 Transform your energy management today"}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("ctaTitle")}</h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">{t("ctaSubtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-white text-orange-600 hover:bg-gray-100 group shadow-xl">
              <Zap className="mr-2 h-5 w-5" />
              {t("getStarted")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              {t("bookDemo")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
