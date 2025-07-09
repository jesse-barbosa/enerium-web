export interface NavigationItem {
  label: string
  href: string
}

export interface Language {
  code: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
}

export interface Translations {
  [key: string]: {
    [key: string]: string | string[]
  }
}
