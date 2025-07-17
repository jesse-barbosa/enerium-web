"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Cpu,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Wifi,
  WifiOff,
  Settings,
  Trash2,
  Edit,
  Thermometer,
  Zap,
  Gauge,
  AlertTriangle,
} from "lucide-react"

export default function DevicesPage() {
  const devices = [
    {
      id: 1,
      name: "Sensor Temperatura - Setor A",
      type: "Sensor",
      status: "online",
      location: "Produção A",
      lastUpdate: "2 min atrás",
      value: "24.5°C",
      icon: Thermometer,
      battery: 85,
    },
    {
      id: 2,
      name: "Medidor Energia - Principal",
      type: "Medidor",
      status: "online",
      location: "Entrada Principal",
      lastUpdate: "1 min atrás",
      value: "2.847 kWh",
      icon: Zap,
      battery: null,
    },
    {
      id: 3,
      name: "Sensor Pressão - Compressor 1",
      type: "Sensor",
      status: "maintenance",
      location: "Sala de Máquinas",
      lastUpdate: "15 min atrás",
      value: "8.2 bar",
      icon: Gauge,
      battery: 45,
    },
    {
      id: 4,
      name: "Controlador HVAC - Bloco B",
      type: "Controlador",
      status: "online",
      location: "Administrativo",
      lastUpdate: "30 seg atrás",
      value: "Auto",
      icon: Settings,
      battery: null,
    },
    {
      id: 5,
      name: "Sensor Umidade - Laboratório",
      type: "Sensor",
      status: "offline",
      location: "Laboratório",
      lastUpdate: "2h atrás",
      value: "N/A",
      icon: Thermometer,
      battery: 12,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dispositivos IoT</h1>
          <p className="text-gray-600">Gerencie sensores, medidores e controladores conectados</p>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Dispositivo
        </Button>
      </div>

      {/* Device Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Dispositivos</CardTitle>
            <Cpu className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-gray-600">+12 este mês</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online</CardTitle>
            <Wifi className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">234</div>
            <p className="text-xs text-gray-600">94.7% uptime</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Manutenção</CardTitle>
            <Settings className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">8</div>
            <p className="text-xs text-gray-600">Programada</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offline</CardTitle>
            <WifiOff className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">5</div>
            <p className="text-xs text-gray-600">Requer atenção</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar dispositivos..." className="pl-10 border-orange-200 focus:border-orange-400" />
        </div>
        <Button variant="outline" className="border-orange-200 hover:bg-orange-50 bg-transparent">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Device Management Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-orange-50">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Todos
          </TabsTrigger>
          <TabsTrigger
            value="sensors"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Sensores
          </TabsTrigger>
          <TabsTrigger
            value="meters"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Medidores
          </TabsTrigger>
          <TabsTrigger
            value="controllers"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Controladores
          </TabsTrigger>
          <TabsTrigger
            value="offline"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Offline
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device) => {
              const Icon = device.icon
              return (
                <Card key={device.id} className="border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            device.status === "online"
                              ? "bg-green-100"
                              : device.status === "maintenance"
                                ? "bg-yellow-100"
                                : "bg-red-100"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              device.status === "online"
                                ? "text-green-600"
                                : device.status === "maintenance"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-sm font-medium">{device.name}</CardTitle>
                          <CardDescription className="text-xs">{device.location}</CardDescription>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Configurar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remover
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <Badge
                          className={
                            device.status === "online"
                              ? "bg-green-100 text-green-800"
                              : device.status === "maintenance"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {device.status === "online"
                            ? "Online"
                            : device.status === "maintenance"
                              ? "Manutenção"
                              : "Offline"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Valor Atual</span>
                        <span className="font-semibold">{device.value}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Última Atualização</span>
                        <span className="text-sm text-gray-500">{device.lastUpdate}</span>
                      </div>
                      {device.battery && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Bateria</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-2 bg-gray-200 rounded-full">
                              <div
                                className={`h-2 rounded-full ${
                                  device.battery > 50
                                    ? "bg-green-500"
                                    : device.battery > 20
                                      ? "bg-yellow-500"
                                      : "bg-red-500"
                                }`}
                                style={{ width: `${device.battery}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">{device.battery}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="sensors" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices
              .filter((device) => device.type === "Sensor")
              .map((device) => {
                const Icon = device.icon
                return (
                  <Card key={device.id} className="border-orange-200 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-sm font-medium">{device.name}</CardTitle>
                          <CardDescription className="text-xs">{device.location}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Leitura</span>
                          <span className="font-semibold">{device.value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Bateria</span>
                          <span className="text-sm">{device.battery}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="offline" className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5" />
                Dispositivos Offline - Ação Necessária
              </CardTitle>
              <CardDescription className="text-red-600">
                Os seguintes dispositivos estão offline e precisam de atenção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {devices
                  .filter((device) => device.status === "offline")
                  .map((device) => {
                    const Icon = device.icon
                    return (
                      <div
                        key={device.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{device.name}</p>
                            <p className="text-sm text-gray-600">
                              {device.location} • Offline há {device.lastUpdate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                          >
                            Diagnosticar
                          </Button>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Reconectar
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
