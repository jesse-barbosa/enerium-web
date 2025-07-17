"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Brain,
  Target,
  Zap,
  DollarSign,
  Leaf,
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & IA</h1>
          <p className="text-gray-600">Análises inteligentes e previsões baseadas em machine learning</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Últimos 7 dias</SelectItem>
              <SelectItem value="30days">Últimos 30 dias</SelectItem>
              <SelectItem value="90days">Últimos 90 dias</SelectItem>
              <SelectItem value="1year">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-orange-200 hover:bg-orange-50 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* AI Insights */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-orange-500" />
            Insights da IA
          </CardTitle>
          <CardDescription>Análises automáticas e recomendações inteligentes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-500" />
                <span className="font-medium text-green-800">Oportunidade Identificada</span>
              </div>
              <p className="text-sm text-gray-600">
                Reduzir HVAC em 20% durante horário de almoço pode economizar R$ 2.400/mês
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-blue-800">Previsão de Demanda</span>
              </div>
              <p className="text-sm text-gray-600">
                Pico de consumo previsto para 14h-16h baseado em padrões históricos
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="h-4 w-4 text-green-500" />
                <span className="font-medium text-green-800">Meta Sustentável</span>
              </div>
              <p className="text-sm text-gray-600">
                No ritmo atual, você atingirá 25% de redução de CO₂ este trimestre
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Tabs */}
      <Tabs defaultValue="consumption" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-orange-50">
          <TabsTrigger
            value="consumption"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Consumo
          </TabsTrigger>
          <TabsTrigger
            value="costs"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Custos
          </TabsTrigger>
          <TabsTrigger
            value="efficiency"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Eficiência
          </TabsTrigger>
          <TabsTrigger
            value="predictions"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
          >
            Previsões
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consumption" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Consumo Total</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">85.420 kWh</div>
                <div className="flex items-center text-sm">
                  <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">-12% vs mês anterior</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Pico de Demanda</CardTitle>
                <CardDescription>Maior consumo registrado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">3.245 kW</div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-600">15/01 às 14:30</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Média Diária</CardTitle>
                <CardDescription>Consumo médio por dia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">2.847 kWh</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-orange-500 mr-1" />
                  <span className="text-orange-600">+3% vs média histórica</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Análise de Consumo por Período</CardTitle>
              <CardDescription>Distribuição do consumo ao longo do dia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-orange-400" />
                  <p className="text-lg font-medium">Gráfico de Consumo por Horário</p>
                  <p className="text-sm">Integração com biblioteca de gráficos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Custo Total</CardTitle>
                <CardDescription>Este mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">R$ 89.450</div>
                <div className="flex items-center text-sm">
                  <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">-8% vs mês anterior</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Economia</CardTitle>
                <CardDescription>Vs período anterior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 7.820</div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">Economia realizada</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Custo/kWh</CardTitle>
                <CardDescription>Tarifa média</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">R$ 1,047</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-600">+2% vs mês anterior</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">ROI Mensal</CardTitle>
                <CardDescription>Retorno do investimento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">12.5%</div>
                <div className="flex items-center text-sm">
                  <Target className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">Acima da meta</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Distribuição de Custos</CardTitle>
                <CardDescription>Por categoria de consumo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "HVAC", cost: "R$ 35.680", percentage: 40, color: "bg-orange-500" },
                    { category: "Iluminação", cost: "R$ 17.890", percentage: 20, color: "bg-yellow-500" },
                    { category: "Produção", cost: "R$ 26.835", percentage: 30, color: "bg-blue-500" },
                    { category: "Outros", cost: "R$ 8.945", percentage: 10, color: "bg-gray-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded ${item.color}`} />
                        <span className="font-medium">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{item.cost}</div>
                        <div className="text-sm text-gray-500">{item.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Tendência de Custos</CardTitle>
                <CardDescription>Últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <TrendingDown className="h-12 w-12 mx-auto mb-2 text-green-400" />
                    <p className="font-medium">Gráfico de Tendência de Custos</p>
                    <p className="text-sm">Mostrando redução consistente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="efficiency" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Eficiência Geral</CardTitle>
                <CardDescription>Performance do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+2.1% este mês</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Fator de Potência</CardTitle>
                <CardDescription>Qualidade da energia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">0.92</div>
                <div className="flex items-center text-sm">
                  <Badge className="bg-green-100 text-green-800">Excelente</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Uptime</CardTitle>
                <CardDescription>Disponibilidade do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                <div className="flex items-center text-sm">
                  <span className="text-gray-600">2h downtime este mês</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Eficiência por Setor</CardTitle>
              <CardDescription>Performance detalhada de cada área</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { sector: "Produção A", efficiency: 96, trend: "up" },
                  { sector: "Produção B", efficiency: 92, trend: "up" },
                  { sector: "Administrativo", efficiency: 89, trend: "down" },
                  { sector: "Armazém", efficiency: 94, trend: "up" },
                  { sector: "Laboratório", efficiency: 91, trend: "stable" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{item.sector}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                          style={{ width: `${item.efficiency}%` }}
                        />
                      </div>
                      <span className="font-semibold w-12">{item.efficiency}%</span>
                      {item.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                      {item.trend === "down" && <TrendingDown className="h-4 w-4 text-red-500" />}
                      {item.trend === "stable" && <div className="h-4 w-4 bg-gray-400 rounded-full" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card className="border-orange-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-500" />
                Previsões de IA
              </CardTitle>
              <CardDescription>Análises preditivas baseadas em machine learning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Próximas 24 horas</h4>
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Pico previsto</span>
                      <span className="font-semibold">14:30 - 16:00</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Demanda máxima</span>
                      <span className="font-semibold">3.180 kW</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Confiança</span>
                      <Badge className="bg-green-100 text-green-800">87%</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Próximos 7 dias</h4>
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Economia prevista</span>
                      <span className="font-semibold text-green-600">R$ 12.400</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Redução de consumo</span>
                      <span className="font-semibold">-8.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Confiança</span>
                      <Badge className="bg-blue-100 text-blue-800">92%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Previsão de Demanda</CardTitle>
                <CardDescription>Próximos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2 text-blue-400" />
                    <p className="font-medium">Gráfico de Previsão de Demanda</p>
                    <p className="text-sm">Baseado em padrões históricos e IA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Recomendações de Otimização</CardTitle>
                <CardDescription>Sugestões automáticas da IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-green-800">Alta Prioridade</span>
                    </div>
                    <p className="text-sm text-green-700">
                      Ajustar setpoint do HVAC para 22°C pode economizar 12% de energia
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-blue-800">Média Prioridade</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Implementar dimming automático pode reduzir custos de iluminação em 8%
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-yellow-800">Baixa Prioridade</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Revisar horários de operação dos compressores nos finais de semana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
