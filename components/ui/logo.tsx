import { Zap } from "lucide-react"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Zap className="h-7 w-7 text-orange-500 fill-current" />
        <div className="absolute inset-0 h-7 w-7 text-yellow-400 animate-pulse">
          <Zap className="h-7 w-7 fill-current opacity-60" />
        </div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
        Enerium
      </span>
    </div>
  )
}
