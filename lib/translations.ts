import type { Translations } from "@/types"

export const translations: Translations = {
    pt: {
    // Navigation
    pricing: "Preços",
    products: "Produtos",
    blog: "Blog",
    contact: "Contato",
    faq: "FAQ",
    bookDemo: "Agendar demo",
    signUp: "Começar Agora",

    // Hero
    heroTitle: "Gestão e Otimização Inteligente de Energia",
    heroSubtitle:
      "Reduza custos energéticos em até 40% com análise de consumo por IA e otimização automatizada para indústrias e edifícios comerciais.",
    getStarted: "Economizar Energia",
    knowMore: "Ver Demo",

    // Features
    featuresTitle: "Plataforma Completa de Inteligência Energética",
    featuresSubtitle: "Tudo que você precisa para otimizar o consumo de energia e reduzir custos",

    // Stats
    statsTitle: "Resultados Comprovados em Diversas Indústrias",

    // Testimonials
    testimonialsTitle: "Confiado por Líderes da Indústria",

    // Pricing
    pricingTitle: "Planos para Qualquer Escala",
    pricingSubtitle: "De pequenos escritórios a grandes complexos industriais",

    // CTA
    ctaTitle: "Pronto para Transformar sua Gestão Energética?",
    ctaSubtitle: "Junte-se a centenas de empresas que já economizam milhões em custos energéticos",

    // Footer
    footerDescription:
      "Plataforma inteligente de gestão energética que ajuda indústrias e edifícios comerciais a otimizar o consumo e reduzir custos através de integração IoT e IA.",
    product: "Produto",
    support: "Suporte",
    allRightsReserved: "Todos os direitos reservados.",
  },
  en: {
    // Navigation
    pricing: "Pricing",
    products: "Products",
    blog: "Blog",
    contact: "Contact",
    faq: "FAQ",
    bookDemo: "Book a demo",
    signUp: "Get Started",

    // Hero
    heroTitle: "Intelligent Energy Management & Optimization",
    heroSubtitle:
      "Reduce energy costs by up to 40% with AI-powered consumption analysis and automated optimization for industries and commercial buildings.",
    getStarted: "Start Saving Energy",
    knowMore: "See Demo",

    // Features
    featuresTitle: "Complete Energy Intelligence Platform",
    featuresSubtitle: "Everything you need to optimize energy consumption and reduce costs",

    // Stats
    statsTitle: "Proven Results Across Industries",

    // Testimonials
    testimonialsTitle: "Trusted by Industry Leaders",

    // Pricing
    pricingTitle: "Plans for Every Scale",
    pricingSubtitle: "From small offices to large industrial complexes",

    // CTA
    ctaTitle: "Ready to Transform Your Energy Management?",
    ctaSubtitle: "Join hundreds of companies already saving millions in energy costs",

    // Footer
    footerDescription:
      "Intelligent energy management platform that helps industries and commercial buildings optimize consumption and reduce costs through IoT integration and AI.",
    product: "Product",
    support: "Support",
    allRightsReserved: "All rights reserved.",
  },
}

export function useTranslation(locale = "pt") {
  const t = (key: string): string => {
    return (translations[locale]?.[key] as string) || (translations.en[key] as string) || key
  }

  return { t }
}
