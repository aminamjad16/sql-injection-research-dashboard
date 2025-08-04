"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BarChart3, Grid3X3, TrendingUp, Database, TreePine } from "lucide-react"
import { AlgorithmMetrics } from "@/components/algorithm-metrics"
import { AlgorithmConfusionMatrix } from "@/components/algorithm-confusion-matrix"
import { AlgorithmPerformance } from "@/components/algorithm-performance"
import { AlgorithmComparison as AlgorithmParameterComparison } from "@/components/algorithm-parameter-comparison"
import { RFFeatureImportance } from "@/components/rf-feature-importance"

interface AlgorithmPageProps {
  algorithm: string
  onBack: () => void
  selectedDataset: string
  onDatasetChange: (dataset: string) => void
}

const algorithmInfo = {
  rf: {
    name: "Random Forest",
    description: "Ensemble learning method using multiple decision trees",
    color: "bg-green-100 text-green-800 border-green-200",
    gradient: "from-green-50 to-emerald-50",
  },
  svm: {
    name: "Support Vector Machine",
    description: "Supervised learning model for classification and regression",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    gradient: "from-blue-50 to-sky-50",
  },
  knn: {
    name: "K-Nearest Neighbors",
    description: "Instance-based learning algorithm using proximity",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    gradient: "from-purple-50 to-violet-50",
  },
}

const datasets = [
  { id: "dataset1", name: "Dataset 1", description: "Primary SQL Injection Dataset" },
  { id: "dataset2", name: "Dataset 2", description: "Extended SQL Injection Dataset" },
]

export function AlgorithmPage({ algorithm, onBack, selectedDataset, onDatasetChange }: AlgorithmPageProps) {
  const info = algorithmInfo[algorithm as keyof typeof algorithmInfo]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${info.gradient} p-6`}>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <Button
            variant="outline"
            onClick={onBack}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Overview
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Badge className={`${info.color} text-lg px-3 py-1`}>{info.name}</Badge>
              <h1 className="text-4xl font-bold text-slate-900">{info.name}</h1>
            </div>
            <p className="text-slate-600 mt-2 text-lg">{info.description}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <Card className={`border-2 ${info.color} bg-white/50 backdrop-blur-sm`}>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-700">
                  {algorithm === "rf" ? "4" : algorithm === "svm" ? "4" : "4"}
                </div>
                <div className="text-sm text-slate-600">Configurations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-700">2</div>
                <div className="text-sm text-slate-600">Datasets</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-700">
                  {algorithm === "rf" ? "99.48%" : algorithm === "svm" ? "99.78%" : "98.61%"}
                </div>
                <div className="text-sm text-slate-600">Best Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-700">
                  {algorithm === "rf" ? "Ensemble" : algorithm === "svm" ? "Kernel-based" : "Instance-based"}
                </div>
                <div className="text-sm text-slate-600">Learning Type</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dataset Selection */}
        <Card className={`border-2 ${info.color}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Dataset Selection
            </CardTitle>
            <CardDescription>Choose a dataset to analyze {info.name} performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {datasets.map((dataset) => (
                <Button
                  key={dataset.id}
                  variant={selectedDataset === dataset.id ? "default" : "outline"}
                  onClick={() => onDatasetChange(dataset.id)}
                  className="flex-1"
                >
                  <div className="text-center">
                    <div className="font-semibold">{dataset.name}</div>
                    <div className="text-xs opacity-80">{dataset.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Algorithm-specific Analysis */}
        <Tabs defaultValue="metrics" className="space-y-6">
          <TabsList className={`grid w-full ${algorithm === 'rf' ? 'grid-cols-5' : 'grid-cols-4'}`}>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Metrics
            </TabsTrigger>
            <TabsTrigger value="confusion" className="flex items-center gap-2">
              <Grid3X3 className="h-4 w-4" />
              Confusion Matrix
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Parameter Comparison
            </TabsTrigger>
            {algorithm === 'rf' && (
              <TabsTrigger value="features" className="flex items-center gap-2">
                <TreePine className="h-4 w-4" />
                Feature Importance
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="metrics">
            <AlgorithmMetrics algorithm={algorithm} dataset={selectedDataset} />
          </TabsContent>

          <TabsContent value="confusion">
            <AlgorithmConfusionMatrix algorithm={algorithm} dataset={selectedDataset} />
          </TabsContent>

          <TabsContent value="performance">
            <AlgorithmPerformance algorithm={algorithm} dataset={selectedDataset} />
          </TabsContent>

          <TabsContent value="comparison">
            <AlgorithmParameterComparison algorithm={algorithm} dataset={selectedDataset} />
          </TabsContent>

          {algorithm === 'rf' && (
            <TabsContent value="features">
              <RFFeatureImportance dataset={selectedDataset} />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  )
}