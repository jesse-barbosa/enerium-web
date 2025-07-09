"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import { useTranslation } from "@/lib/translations"

interface PricingSectionProps {
  locale?: string
}

const pricingPlans = {
  en: [
    {
      name: "Small Office",
      price: "$299",
      period: "/month",
      description: "Perfect for small offices and retail spaces",
      features: ["Up to 50 sensors", "Basic energy analytics", "Mobile app access", "Email support", "Monthly reports"],
    },
    {
      name: "Industrial",
      price: "$1,299",
      period: "/month",
      description: "Ideal for factories and industrial facilities",
      features: [
        "Up to 500 sensors",
        "Advanced AI analytics",
        "Automated control systems",
        "Priority support",
        "Custom integrations",
        "Real-time alerts",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large complexes and data centers",
      features: [
        "Unlimited sensors",
        "Full automation suite",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom ML models",
        "SLA guarantee",
        "On-site installation",
      ],
    },
  ],
  pt: [
    {
      name: "Escritório Pequeno",
      price: "R$1.499",
      period: "/mês",
      description: "Perfeito para pequenos escritórios e espaços comerciais",
      features: [
        "Até 50 sensores",
        "Analytics energético básico",
        "Acesso ao app mobile",
        "Suporte por email",
        "Relatórios mensais",
      ],
    },
    {
      name: "Industrial",
      price: "R$6.499",
      period: "/mês",
      description: "Ideal para fábricas e instalações industriais",
      features: [
        "Até 500 sensores",
        "Analytics avançado com IA",
        "Sistemas de controle automatizado",
        "Suporte prioritário",
        "Integrações personalizadas",
        "Alertas em tempo real",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Para grandes complexos e data centers",
      features: [
        "Sensores ilimitados",
        "Suite completa de automação",
        "Gerente de conta dedicado",
        "Suporte 24/7 por telefone",
        "Modelos ML personalizados",
        "Garantia de SLA",
        "Instalação no local",
      ],
    },
  ],
}

export function PricingSection({ locale = "pt" }: PricingSectionProps) {
  const { t } = useTranslation(locale)
  const currentPlans = pricingPlans[locale as keyof typeof pricingPlans] || pricingPlans.en

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100 to-transparent rounded-full translate-y-48 -translate-x-48" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            {t("pricingTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("pricingSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-3 ${
                plan.popular
                  ? "border-orange-400 bg-gradient-to-br from-orange-50 to-yellow-50 shadow-2xl scale-105"
                  : "border-orange-200 bg-white hover:border-orange-300 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    {locale === "pt" ? "Mais Popular" : "Most Popular"}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-lg"
                    : "border-orange-300 text-orange-600 hover:bg-orange-50"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {locale === "pt" ? "Começar Agora" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
