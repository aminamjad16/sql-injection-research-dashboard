"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetricsTable } from "@/components/metrics-table"
import { CompactHeader } from "@/components/compact-header"
import { BestAccuracyChart } from "@/components/best-accuracy-chart"
import { ConfusionMatrixGrid } from "@/components/confusion-matrix-grid"
import { ROCCurveAnalysis } from "@/components/roc-curve-analysis"
import { BarChart3, Grid3X3, Brain, Zap, Target, TrendingUp, Database } from "lucide-react"

const datasets = [
  { id: "dataset1", name: "Dataset 1", samples: "30.6K" },
  { id: "dataset2", name: "Dataset 2", samples: "14K" },
]

const algorithms = [
  { id: "rf", name: "Random Forest", short: "RF", icon: Brain, color: "bg-green-500", accuracy: "99.78%" },
  { id: "svm", name: "Support Vector Machine", short: "SVM", icon: Target, color: "bg-blue-500", accuracy: "99.78%" },
  { id: "knn", name: "K-Nearest Neighbors", short: "KNN", icon: Zap, color: "bg-purple-500", accuracy: "98.61%" },
]

export default function ResearchDashboard() {
  const [selectedDataset, setSelectedDataset] = useState("dataset1")
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null)

  if (selectedAlgorithm) {
    return (
      <div className="min-h-screen bg-slate-50 p-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <Button onClick={() => setSelectedAlgorithm(null)} variant="outline">
              ← Back to Overview
            </Button>
            <h1 className="text-2xl font-bold">
              {algorithms.find(a => a.id === selectedAlgorithm)?.name} Analysis
            </h1>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-4">Detailed Analysis Coming Soon</h2>
                <p className="text-gray-600">
                  This section will include confusion matrices, ROC curves, feature importance, and detailed metrics.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Compact Header */}
        <CompactHeader />

        {/* Main Layout - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Left Sidebar - Controls */}
          <div className="lg:col-span-1 space-y-3">
            {/* Dataset Selection */}
            <Card className="p-4 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg">
              <div className="text-sm font-bold mb-3 text-gray-800 flex items-center gap-2 font-lato">
                <Database className="h-4 w-4 text-green-600" />
                Dataset
              </div>
              <div className="space-y-2">
                {datasets.map((dataset) => (
                  <Button
                    key={dataset.id}
                    variant={selectedDataset === dataset.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDataset(dataset.id)}
                    className={`w-full justify-between h-10 border-2 transition-all duration-200 ${
                      selectedDataset === dataset.id
                        ? "bg-green-600 hover:bg-green-700 border-green-600 text-white shadow-lg"
                        : "hover:border-green-300 hover:bg-green-50"
                    }`}
                  >
                    <span className="font-medium">{dataset.name}</span>
                    <span className={`text-xs ${selectedDataset === dataset.id ? "text-green-100" : "text-gray-500"}`}>
                      {dataset.samples}
                    </span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Algorithm Selection */}
            <Card className="p-4 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg">
              <div className="text-sm font-bold mb-3 text-gray-800 flex items-center gap-2 font-lato">
                <Brain className="h-4 w-4 text-blue-600" />
                Algorithms
              </div>
              <div className="space-y-3">
                {algorithms.map((algo) => {
                  const IconComponent = algo.icon
                  return (
                    <Button
                      key={algo.id}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedAlgorithm(algo.id)}
                      className="w-full justify-start h-auto p-3 border-2 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className={`p-2 rounded-lg ${algo.color} mr-3 group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors font-lato">
                          {algo.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Best: {algo.accuracy}
                        </div>
                      </div>
                    </Button>
                  )
                })}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-4 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg">
              <div className="text-sm font-bold mb-3 text-gray-800 flex items-center gap-2 font-lato">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                Quick Stats
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-700">Best Accuracy:</span>
                  <span className="font-bold text-green-700 text-lg">99.78%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-gray-700">Total Models:</span>
                  <span className="font-bold text-blue-700">12</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="text-gray-700">Datasets:</span>
                  <span className="font-bold text-purple-700">2</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-4">
            {/* Best Performance - Compact */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-lato">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <BestAccuracyChart />
              </CardContent>
            </Card>

            {/* Results Tabs - Compact */}
            <Card>
              <CardContent className="p-4">
                <Tabs defaultValue="metrics" className="space-y-3">
                  <TabsList className="grid w-full grid-cols-3 h-9">
                    <TabsTrigger value="metrics" className="text-xs">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Metrics
                    </TabsTrigger>
                    <TabsTrigger value="confusion" className="text-xs">
                      <Grid3X3 className="h-3 w-3 mr-1" />
                      Matrix
                    </TabsTrigger>
                    <TabsTrigger value="roc" className="text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      ROC Analysis
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="metrics" className="mt-3">
                    <MetricsTable dataset={selectedDataset} />
                  </TabsContent>

                  <TabsContent value="confusion" className="mt-3">
                    <ConfusionMatrixGrid dataset={selectedDataset} />
                  </TabsContent>

                  <TabsContent value="roc" className="mt-3">
                    <ROCCurveAnalysis dataset={selectedDataset} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}