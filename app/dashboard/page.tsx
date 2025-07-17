"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Activity,
  TrendingDown,
  TrendingUp,
  Zap,
  Leaf,
  AlertTriangle,
  Cpu,
  BarChart3,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta, Jessé!</h1>
            <p className="text-orange-100">Sua planta industrial está operando com 94% de eficiência energética</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">R$ 45.230</div>
            <div className="text-orange-100">Economia este mês</div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Consumo Atual</CardTitle>
            <Zap className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2.847 kWh</div>
            <div className="flex items-center text-sm">
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">-12% vs ontem</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Custo Mensal</CardTitle>
            <BarChart3 className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">R$ 89.450</div>
            <div className="flex items-center text-sm">
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">-8% vs mês anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">CO₂ Reduzido</CardTitle>
            <Leaf className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1.2 ton</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+15% este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Dispositivos Ativos</CardTitle>
            <Cpu className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">247/250</div>
            <div className="flex items-center text-sm">
              <Activity className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">98.8% online</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Monitoring */}
        <Card className="lg:col-span-2 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              Monitoramento em Tempo Real
            </CardTitle>
            <CardDescription>Consumo energético das últimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 text-orange-400" />
                <p>Gráfico de consumo em tempo real</p>
                <p className="text-sm">Integração com biblioteca de gráficos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Controles principais do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
              <Zap className="mr-2 h-4 w-4" />
              Otimizar Consumo
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-orange-200 hover:bg-orange-50 bg-transparent"
            >
              <Cpu className="mr-2 h-4 w-4" />
              Gerenciar Dispositivos
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-orange-200 hover:bg-orange-50 bg-transparent"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Ver Relatórios
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-orange-200 hover:bg-orange-50 bg-transparent"
            >
              <Leaf className="mr-2 h-4 w-4" />
              Metas Sustentáveis
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Environmental Conditions */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-orange-500" />
              Condições Ambientais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-red-500" />
                <span>Temperatura</span>
              </div>
              <span className="font-semibold">24°C</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-blue-500" />
                <span>Umidade</span>
              </div>
              <span className="font-semibold">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-gray-500" />
                <span>Qualidade do Ar</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Boa</Badge>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              Status do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>HVAC Principal</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Iluminação LED</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sensores IoT</span>
                <Badge className="bg-yellow-100 text-yellow-800">Manutenção</Badge>
              </div>
              <Progress value={76} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Alertas Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-800">Consumo elevado detectado</p>
                  <p className="text-sm text-yellow-600">Setor B - Linha de produção 3</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 bg-transparent"
              >
                Investigar
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">Meta de sustentabilidade atingida</p>
                  <p className="text-sm text-green-600">Redução de 15% no consumo mensal</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
              >
                Ver Detalhes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
