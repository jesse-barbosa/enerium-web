"use client"

import { Star } from "lucide-react"
import { useTranslation } from "@/lib/translations"

interface TestimonialsSectionProps {
  locale?: string
}

const testimonials = {
  en: [
    {
      name: "Carlos Mendoza",
      role: "Energy Manager",
      company: "Steel Industries Corp",
      content:
        "Enerium helped us reduce energy costs by 35% in just 6 months. The IoT integration was seamless and the AI predictions are incredibly accurate.",
      rating: 5,
    },
    {
      name: "Ana Silva",
      role: "Operations Director",
      company: "MegaMall Shopping",
      content:
        "The automated HVAC control alone saved us $50,000 monthly. The sustainability reports help us meet our environmental goals.",
      rating: 5,
    },
    {
      name: "Roberto Chen",
      role: "CTO",
      company: "DataCenter Solutions",
      content:
        "Real-time monitoring and automated optimization keep our data center running efficiently 24/7. Outstanding platform.",
      rating: 5,
    },
  ],
  pt: [
    {
      name: "Carlos Mendoza",
      role: "Gerente de Energia",
      company: "Steel Industries Corp",
      content:
        "Enerium nos ajudou a reduzir custos energéticos em 35% em apenas 6 meses. A integração IoT foi perfeita e as previsões de IA são incrivelmente precisas.",
      rating: 5,
    },
    {
      name: "Ana Silva",
      role: "Diretora de Operações",
      company: "MegaMall Shopping",
      content:
        "Só o controle automatizado do HVAC nos economizou R$250.000 mensais. Os relatórios de sustentabilidade nos ajudam a atingir metas ambientais.",
      rating: 5,
    },
    {
      name: "Roberto Chen",
      role: "CTO",
      company: "DataCenter Solutions",
      content:
        "Monitoramento em tempo real e otimização automatizada mantêm nosso data center funcionando eficientemente 24/7. Plataforma excepcional.",
      rating: 5,
    },
  ],
}

export function TestimonialsSection({ locale = "pt" }: TestimonialsSectionProps) {
  const { t } = useTranslation(locale)
  const currentTestimonials = testimonials[locale as keyof typeof testimonials] || testimonials.en

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            {t("testimonialsTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100 relative overflow-hidden group hover:cursor-pointer"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 to-yellow-100/0 group-hover:from-orange-100/30 group-hover:to-yellow-100/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold mr-4 shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-orange-600 text-sm font-medium">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
