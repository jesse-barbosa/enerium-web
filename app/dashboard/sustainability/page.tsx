"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  Calendar,
  Download,
  TreePine,
  Droplets,
  Recycle,
  Sun,
} from "lucide-react"

export default function SustainabilityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sustentabilidade</h1>
          <p className="text-gray-600">Acompanhe o impacto ambiental e metas de sustentabilidade</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Relatório ESG
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
            <Target className="mr-2 h-4 w-4" />
            Definir Metas
          </Button>
        </div>
      </div>

      {/* Environmental Impact Overview */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2.5 ton</div>
            <div className="text-green-100">CO₂ Reduzido este mês</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+15% vs mês anterior</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">R$ 45.230</div>
            <div className="text-green-100">Economia Sustentável</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">ROI de 12.5%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">94.2%</div>
            <div className="text-green-100">Eficiência Energética</div>
            <div className="flex items-center justify-center mt-2">
              <Award className="h-4 w-4 mr-1" />
              <span className="text-sm">Certificação A+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-green-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emissões CO₂</CardTitle>
            <Leaf className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">-35%</div>
            <div className="flex items-center text-sm">
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">vs ano passado</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energia Renovável</CardTitle>
            <Sun className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+8% este trimestre</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Água Economizada</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M L</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">Meta: 1.5M L</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resíduos Reciclados</CardTitle>
            <Recycle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">Acima da meta</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sustainability Tabs */}
      <Tabs defaultValue="goals" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-green-50">
          <TabsTrigger
            value="goals"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
          >
            Metas
          </TabsTrigger>
          <TabsTrigger
            value="carbon"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
          >
            Carbono
          </TabsTrigger>
          <TabsTrigger
            value="energy"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
          >
            Energia
          </TabsTrigger>
          <TabsTrigger
            value="certifications"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
          >
            Certificações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  Metas de Sustentabilidade 2024
                </CardTitle>
                <CardDescription>Progresso das principais metas ambientais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Redução de CO₂ (Meta: 40%)</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <Progress value={87.5} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>87.5% da meta</span>
                    <span>Prazo: Dez 2024</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Energia Renovável (Meta: 50%)</span>
                    <span className="font-semibold">42%</span>
                  </div>
                  <Progress value={84} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>84% da meta</span>
                    <span>Prazo: Dez 2024</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Eficiência Energética (Meta: 95%)</span>
                    <span className="font-semibold">94.2%</span>
                  </div>
                  <Progress value={99.2} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>99.2% da meta</span>
                    <span>Prazo: Dez 2024</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reciclagem (Meta: 85%)</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <Progress value={102.4} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Meta atingida!</span>
                    <Badge className="bg-green-100 text-green-800 text-xs">Concluído</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  Cronograma de Ações
                </CardTitle>
                <CardDescription>Próximas iniciativas sustentáveis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Instalação de painéis solares</p>
                      <p className="text-xs text-gray-600">Fase 2 - Cobertura do armazém</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-xs">Mar 2024</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Sistema de captação de água</p>
                      <p className="text-xs text-gray-600">Reuso de água da chuva</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">Abr 2024</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Auditoria energética</p>
                      <p className="text-xs text-gray-600">Certificação ISO 50001</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">Mai 2024</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Programa de compensação</p>
                      <p className="text-xs text-gray-600">Plantio de 1000 árvores</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 text-xs">Jun 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="carbon" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border-green-200">
              <CardHeader>
                <CardTitle>Pegada de Carbono - Últimos 12 meses</CardTitle>
                <CardDescription>Emissões de CO₂ por categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Leaf className="h-16 w-16 mx-auto mb-4 text-green-400" />
                    <p className="text-lg font-medium">Gráfico de Emissões de CO₂</p>
                    <p className="text-sm">Mostrando redução de 35% no período</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Compensação de Carbono</CardTitle>
                <CardDescription>Iniciativas de neutralização</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TreePine className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Reflorestamento</span>
                  </div>
                  <span className="text-sm font-semibold">1.2 ton CO₂</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Energia Solar</span>
                  </div>
                  <span className="text-sm font-semibold">0.8 ton CO₂</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium">Reciclagem</span>
                  </div>
                  <span className="text-sm font-semibold">0.5 ton CO₂</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total Compensado</span>
                    <span className="font-bold text-green-600">2.5 ton CO₂</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="energy" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Mix Energético</CardTitle>
                <CardDescription>Fontes de energia utilizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded" />
                      <span className="text-sm">Energia Solar</span>
                    </div>
                    <span className="font-semibold">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-500 rounded" />
                      <span className="text-sm">Rede Elétrica</span>
                    </div>
                    <span className="font-semibold">58%</span>
                  </div>
                  <div className="pt-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full"
                        style={{ width: "42%" }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Eficiência por Setor</CardTitle>
                <CardDescription>Performance energética</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { sector: "Produção A", efficiency: 96 },
                    { sector: "Produção B", efficiency: 92 },
                    { sector: "Administrativo", efficiency: 89 },
                    { sector: "Armazém", efficiency: 94 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{item.sector}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                            style={{ width: `${item.efficiency}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-8">{item.efficiency}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">ISO 14001</CardTitle>
                    <CardDescription>Gestão Ambiental</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-800">Certificado</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Validade</span>
                    <span className="text-sm font-medium">Dez 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Próxima Auditoria</span>
                    <span className="text-sm font-medium">Jun 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">ISO 50001</CardTitle>
                    <CardDescription>Gestão de Energia</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Em Processo</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Previsão</span>
                    <span className="text-sm font-medium">Mai 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Progresso</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">LEED Gold</CardTitle>
                    <CardDescription>Construção Sustentável</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-blue-100 text-blue-800">Planejado</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Início</span>
                    <span className="text-sm font-medium">Jul 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Investimento</span>
                    <span className="text-sm font-medium">R$ 250k</span>
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
