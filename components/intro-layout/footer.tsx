import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { useTranslation } from "@/lib/translations"
import { Linkedin, Github } from "lucide-react"

interface FooterProps {
  locale?: string
}

export function Footer({ locale = "pt" }: FooterProps) {
  const { t } = useTranslation(locale)

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 max-w-md mb-6">{t("footerDescription")}</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all cursor-pointer">
                <span className="text-lg">
                  𝕏
                </span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all cursor-pointer">
                <span className="text-lg">
                  <Linkedin className="h-5 w-5 text-white" />
                </span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all cursor-pointer">
                <span className="text-lg">
                  <Github className="h-5 w-5 text-white" />
                </span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("product")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-orange-400 transition-colors">
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-400 transition-colors">
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-400 transition-colors">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("support")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Enerium. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
