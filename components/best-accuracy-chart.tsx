"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Best accuracy data for each algorithm across both datasets
const bestAccuracyData = [
  {
    algorithm: "Random Forest",
    dataset1: 99.48,
    dataset2: 99.71,
    dataset1Config: "n=300/700",
    dataset2Config: "n=100-700",
  },
  {
    algorithm: "SVM",
    dataset1: 94.70,
    dataset2: 99.78,
    dataset1Config: "Linear",
    dataset2Config: "Polynomial",
  },
  {
    algorithm: "KNN",
    dataset1: 98.61,
    dataset2: 86.05,
    dataset1Config: "k=3",
    dataset2Config: "k=3-9",
  },
]

const chartConfig = {
  dataset1: {
    label: "Dataset 1",
    color: "#3b82f6",
  },
  dataset2: {
    label: "Dataset 2",
    color: "#10b981",
  },
}

export function BestAccuracyChart() {
  // Find overall best performer
  const overallBest = bestAccuracyData.reduce((best, current) => {
    const currentMax = Math.max(current.dataset1, current.dataset2)
    const bestMax = Math.max(best.dataset1, best.dataset2)
    return currentMax > bestMax ? current : best
  })

  const overallBestScore = Math.max(overallBest.dataset1, overallBest.dataset2)
  const overallBestDataset = overallBest.dataset1 > overallBest.dataset2 ? "Dataset 1" : "Dataset 2"
  const overallBestConfig = overallBest.dataset1 > overallBest.dataset2 ? overallBest.dataset1Config : overallBest.dataset2Config

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="border-2 border-slate-200">
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:inline">Best Accuracy Comparison Across Algorithms</span>
            <span className="sm:hidden">Algorithm Accuracy</span>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            <span className="hidden sm:inline">Highest accuracy achieved by each algorithm on both datasets with optimal parameters</span>
            <span className="sm:hidden">Best accuracy per algorithm</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 sm:pt-6">
          <ChartContainer config={chartConfig} className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bestAccuracyData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="algorithm"
                  tick={{ fontSize: 10 }}
                  interval={0}
                />
                <YAxis domain={[80, 100]} tick={{ fontSize: 10 }} />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-white p-3 border rounded shadow-lg">
                          <p className="font-medium text-sm">{label}</p>
                          <div className="space-y-1 mt-2">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-500 rounded"></div>
                              <span className="text-sm">Dataset 1: {data.dataset1}% ({data.dataset1Config})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded"></div>
                              <span className="text-sm">Dataset 2: {data.dataset2}% ({data.dataset2Config})</span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="dataset1" fill={chartConfig.dataset1.color} name="Dataset 1" />
                <Bar dataKey="dataset2" fill={chartConfig.dataset2.color} name="Dataset 2" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-4 text-center">
          <div className="text-lg font-bold text-green-700">
            🏆 Overall Best: {overallBest.algorithm}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {overallBestScore.toFixed(2)}% accuracy on {overallBestDataset} ({overallBestConfig})
          </div>
        </CardContent>
      </Card>
    </div>
  )
}