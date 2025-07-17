"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Zap,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Thermometer,
  Gauge,
} from "lucide-react"

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Monitoramento em Tempo Real</h1>
          <p className="text-gray-600">Acompanhe o consumo energético e performance dos sistemas</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Sistema Online
          </Badge>
          <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
            <Activity className="mr-2 h-4 w-4" />
            Atualizar Dados
          </Button>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consumo Atual</CardTitle>
            <Zap className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.847 kWh</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              -5% última hora
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demanda Pico</CardTitle>
            <BarChart3 className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.245 kW</div>
            <div className="flex items-center text-sm text-red-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +2% vs ontem
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eficiência</CardTitle>
            <Gauge className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +1.2% esta semana
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperatura Média</CardTitle>
            <Thermometer className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5°C</div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              Atualizado agora
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monitoring Tabs */}
      <Tabs defaultValue="realtime" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-orange-50">
          <TabsTrigger
            value="realtime"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Tempo Real
          </TabsTrigger>
          <TabsTrigger
            value="sectors"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Por Setor
          </TabsTrigger>
          <TabsTrigger
            value="equipment"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Equipamentos
          </TabsTrigger>
          <TabsTrigger
            value="alerts"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Alertas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="realtime" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border-orange-200">
              <CardHeader>
                <CardTitle>Consumo Energético - Últimas 24h</CardTitle>
                <CardDescription>Monitoramento contínuo do consumo por hora</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 text-orange-400" />
                    <p className="text-lg font-medium">Gráfico de Consumo em Tempo Real</p>
                    <p className="text-sm">Integração com Chart.js ou similar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Status dos Sistemas</CardTitle>
                <CardDescription>Monitoramento de equipamentos críticos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">HVAC Principal</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Iluminação LED</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Compressores</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Atenção</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium">Sensor Setor C</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800">Offline</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sectors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Produção A", "Produção B", "Administrativo", "Armazém", "Laboratório", "Manutenção"].map(
              (sector, index) => (
                <Card key={sector} className="border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{sector}</CardTitle>
                    <CardDescription>Consumo atual e tendências</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Consumo Atual</span>
                        <span className="font-semibold">{(Math.random() * 500 + 200).toFixed(0)} kWh</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Eficiência</span>
                        <span className="font-semibold text-green-600">{(Math.random() * 10 + 85).toFixed(1)}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <Badge
                          className={
                            index % 3 === 0
                              ? "bg-green-100 text-green-800"
                              : index % 3 === 1
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }
                        >
                          {index % 3 === 0 ? "Ótimo" : index % 3 === 1 ? "Bom" : "Normal"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </TabsContent>

        <TabsContent value="equipment" className="space-y-6">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Equipamentos Monitorados</CardTitle>
              <CardDescription>Status e performance de todos os equipamentos conectados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Chiller Principal", power: "245 kW", status: "online", efficiency: "92%" },
                  { name: "Compressor AR-01", power: "89 kW", status: "online", efficiency: "88%" },
                  { name: "Bomba Água Gelada", power: "34 kW", status: "maintenance", efficiency: "85%" },
                  { name: "UPS Data Center", power: "156 kW", status: "online", efficiency: "94%" },
                  { name: "Iluminação Geral", power: "67 kW", status: "online", efficiency: "96%" },
                ].map((equipment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${equipment.status === "online" ? "bg-green-500" : equipment.status === "maintenance" ? "bg-yellow-500" : "bg-red-500"}`}
                      />
                      <div>
                        <p className="font-medium">{equipment.name}</p>
                        <p className="text-sm text-gray-600">Potência: {equipment.power}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{equipment.efficiency}</p>
                      <p className="text-sm text-gray-600">Eficiência</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-red-600">Alertas Críticos</CardTitle>
                <CardDescription>Requerem atenção imediata</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="font-medium text-red-800">Sensor Offline</span>
                  </div>
                  <p className="text-sm text-red-600">Sensor de temperatura do Setor C não responde há 15 minutos</p>
                  <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                    Investigar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-yellow-600">Alertas de Atenção</CardTitle>
                <CardDescription>Monitoramento preventivo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-yellow-800">Consumo Elevado</span>
                  </div>
                  <p className="text-sm text-yellow-600">Setor B apresenta consumo 15% acima da média</p>
                  <Button size="sm" variant="outline" className="mt-2 border-yellow-300 text-yellow-700 bg-transparent">
                    Analisar
                  </Button>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-yellow-800">Manutenção Programada</span>
                  </div>
                  <p className="text-sm text-yellow-600">Compressor AR-01 precisa de manutenção em 3 dias</p>
                  <Button size="sm" variant="outline" className="mt-2 border-yellow-300 text-yellow-700 bg-transparent">
                    Agendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
