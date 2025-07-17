"use client"

import { cn } from "@/lib/utils"
import { BarChart3, Cpu, Cog, Home, Leaf, Settings, Zap, Users, Bell, FileText, Activity } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    disabled: false,
  },
  {
    title: "Monitoramento",
    url: "/dashboard/monitoring",
    icon: Activity,
    disabled: false,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: BarChart3,
    disabled: false,
  },
  {
    title: "Dispositivos IoT",
    url: "/dashboard/devices",
    icon: Cpu,
    disabled: false,
  },
  {
    title: "Automação",
    url: "/dashboard/automation",
    icon: Cog,
    disabled: true,
  },
  {
    title: "Sustentabilidade",
    url: "/dashboard/sustainability",
    icon: Leaf,
    disabled: false,
  },
  {
    title: "Relatórios",
    url: "/dashboard/reports",
    icon: FileText,
    disabled: false,
  },
  {
    title: "Alertas",
    url: "/dashboard/alerts",
    icon: Bell,
    disabled: false,
  },
]

const managementItems = [
  {
    title: "Usuários",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Configurações",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" className="border-r border-orange-200/50">
      <SidebarHeader className="border-b border-orange-200/50 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Enerium
            </h2>
            <p className="text-xs text-gray-500">Gestão de Energia</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold">Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title} className={cn(item.disabled && "opacity-60 cursor-not-allowed pointer-events-none")}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="hover:bg-orange-100 hover:text-orange-700 data-[active=true]:bg-gradient-to-r data-[active=true]:from-orange-500 data-[active=true]:to-yellow-500 data-[active=true]:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className={item.disabled ? "line-through" : ""}>{item.title}</span>
                      {item.disabled && (
                        <span className="opacity-100 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          EM BREVE
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold">Gerenciamento</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="hover:bg-orange-100 hover:text-orange-700 data-[active=true]:bg-gradient-to-r data-[active=true]:from-orange-500 data-[active=true]:to-yellow-500 data-[active=true]:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-orange-200/50 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Jessé Barbosa</p>
            <p className="text-xs text-gray-500 truncate">Gerente de Energia</p>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
