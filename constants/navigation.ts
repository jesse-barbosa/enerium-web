import type { NavigationItem, Language } from "@/types"

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
]

export const LANGUAGES: Language[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
]
