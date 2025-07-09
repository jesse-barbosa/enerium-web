"use client"

import { Cpu, BarChart3, Cog, Leaf, Shield, Smartphone } from "lucide-react"
import { useTranslation } from "@/lib/translations"

interface FeaturesSectionProps {
  locale?: string
}

const features = {
  en: [
    {
      icon: Cpu,
      title: "IoT Data Integration",
      description:
        "Connect sensors, smart meters, and industrial equipment for real-time energy monitoring and analysis.",
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description:
        "Machine learning algorithms analyze consumption patterns and predict optimal energy usage scenarios.",
    },
    {
      icon: Cog,
      title: "Automated Control",
      description:
        "Automatically regulate equipment, HVAC systems, and lighting based on consumption patterns and schedules.",
    },
    {
      icon: Leaf,
      title: "Sustainability Reports",
      description:
        "Track CO₂ reduction, ROI metrics, and sustainability goals with comprehensive environmental reporting.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Industrial-grade security with encrypted communications and compliance with energy sector standards.",
    },
    {
      icon: Smartphone,
      title: "Mobile Management",
      description: "Monitor and control energy systems from anywhere with our mobile app and real-time notifications.",
    },
  ],
  pt: [
    {
      icon: Cpu,
      title: "Integração de Dados IoT",
      description:
        "Conecte sensores, medidores inteligentes e equipamentos industriais para monitoramento e análise energética em tempo real.",
    },
    {
      icon: BarChart3,
      title: "Analytics com IA",
      description:
        "Algoritmos de machine learning analisam padrões de consumo e preveem cenários ótimos de uso energético.",
    },
    {
      icon: Cog,
      title: "Controle Automatizado",
      description:
        "Regule automaticamente equipamentos, sistemas HVAC e iluminação baseado em padrões de consumo e horários.",
    },
    {
      icon: Leaf,
      title: "Relatórios de Sustentabilidade",
      description:
        "Acompanhe redução de CO₂, métricas de ROI e metas de sustentabilidade com relatórios ambientais completos.",
    },
    {
      icon: Shield,
      title: "Segurança Empresarial",
      description:
        "Segurança de nível industrial com comunicações criptografadas e conformidade com padrões do setor energético.",
    },
    {
      icon: Smartphone,
      title: "Gestão Mobile",
      description:
        "Monitore e controle sistemas energéticos de qualquer lugar com nosso app mobile e notificações em tempo real.",
    },
  ],
}

export function FeaturesSection({ locale = "pt" }: FeaturesSectionProps) {
  const { t } = useTranslation(locale)
  const currentFeatures = features[locale as keyof typeof features] || features.en

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-50/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            {t("featuresTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("featuresSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-orange-50/30 border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:cursor-pointer relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 to-yellow-100/0 group-hover:from-orange-100/50 group-hover:to-yellow-100/30 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
