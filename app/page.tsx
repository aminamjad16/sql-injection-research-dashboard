"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Grid3X3, TrendingUp, Database, Settings, Activity } from "lucide-react"

// Import components
import { CompactHeader } from "@/components/compact-header"
import { MetricsTable } from "@/components/metrics-table"
import { BestAccuracyChart } from "@/components/best-accuracy-chart"
import { ConfusionMatrixGrid } from "@/components/confusion-matrix-grid"
import { ROCCurveAnalysis } from "@/components/roc-curve-analysis"
import { RFFeatureImportance } from "@/components/rf-feature-importance"
import { AlgorithmComparison } from "@/components/algorithm-comparison"

export default function Home() {
  const [selectedDataset, setSelectedDataset] = useState("dataset1")
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("all")

  const datasets = [
    { value: "dataset1", label: "Dataset 1 (6,128 samples)" },
    { value: "dataset2", label: "Dataset 2 (38,517 samples)" },
  ]

  const algorithms = [
    { value: "all", label: "All Algorithms" },
    { value: "rf", label: "Random Forest" },
    { value: "svm", label: "Support Vector Machine" },
    { value: "knn", label: "K-Nearest Neighbors" },
  ]

  const getAlgorithmColor = (algorithm: string) => {
    switch (algorithm) {
      case "RF":
        return "bg-green-100 text-green-800"
      case "SVM":
        return "bg-blue-100 text-blue-800"
      case "KNN":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4">
        {/* Compact Header */}
        <CompactHeader />

        {/* Main Layout - Mobile First Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 sm:gap-4">
          {/* Left Sidebar - Controls */}
          <div className="xl:col-span-1 space-y-3">
            {/* Dataset Selection */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Dataset
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Select value={selectedDataset} onValueChange={setSelectedDataset}>
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {datasets.map((dataset) => (
                      <SelectItem key={dataset.value} value={dataset.value}>
                        {dataset.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Algorithm Filter */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Algorithm
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Select value={selectedAlgorithm} onValueChange={setSelectedAlgorithm}>
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {algorithms.map((algorithm) => (
                      <SelectItem key={algorithm.value} value={algorithm.value}>
                        {algorithm.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Best Accuracy:</span>
                  <span className="font-semibold text-green-600">
                    {selectedDataset === "dataset1" ? "99.48%" : "99.78%"}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Best Algorithm:</span>
                  <Badge className={getAlgorithmColor(selectedDataset === "dataset1" ? "RF" : "SVM")} size="sm">
                    {selectedDataset === "dataset1" ? "RF" : "SVM"}
                  </Badge>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Total Samples:</span>
                  <span className="font-semibold">
                    {selectedDataset === "dataset1" ? "6,128" : "38,517"}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Models Tested:</span>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature Importance - Only for RF */}
            {selectedAlgorithm === "rf" || selectedAlgorithm === "all" ? (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">RF Feature Importance</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <RFFeatureImportance dataset={selectedDataset} />
                </CardContent>
              </Card>
            ) : null}
          </div>

          {/* Main Content Area */}
          <div className="xl:col-span-4">
            {/* Best Performance - Compact */}
            <Card className="mb-3 sm:mb-4">
              <CardHeader className="pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
                <CardTitle className="text-base sm:text-lg font-lato">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-3 sm:px-6 pb-3 sm:pb-6">
                <BestAccuracyChart />
              </CardContent>
            </Card>

            {/* Results Tabs - Compact */}
            <Card>
              <CardContent className="p-3 sm:p-4">
                <Tabs defaultValue="metrics" className="space-y-3">
                  <TabsList className="grid w-full grid-cols-3 h-auto">
                    <TabsTrigger value="metrics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">Metrics</span>
                      <span className="sm:hidden">Met</span>
                    </TabsTrigger>
                    <TabsTrigger value="confusion" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <Grid3X3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">Matrix</span>
                      <span className="sm:hidden">Mat</span>
                    </TabsTrigger>
                    <TabsTrigger value="roc" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">ROC Analysis</span>
                      <span className="sm:hidden">ROC</span>
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