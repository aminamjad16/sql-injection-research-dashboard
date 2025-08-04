"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Legend } from "recharts"
import { Badge } from "@/components/ui/badge"

// Best accuracy for each algorithm on both datasets with their optimal parameters
const bestAccuracyData = [
  {
    algorithm: "RF",
    dataset1: 99.48,
    dataset2: 99.78,
    dataset1Param: "300 trees",
    dataset2Param: "500 trees"
  },
  {
    algorithm: "SVM",
    dataset1: 94.7,
    dataset2: 99.78,
    dataset1Param: "Linear kernel",
    dataset2Param: "Polynomial kernel"
  },
  {
    algorithm: "KNN",
    dataset1: 98.61,
    dataset2: 86.05,
    dataset1Param: "k=3",
    dataset2Param: "k=9"
  },
]

const chartConfig = {
  dataset1: { label: "Dataset 1 (30.6K samples)", color: "#10b981" },
  dataset2: { label: "Dataset 2 (14K samples)", color: "#3b82f6" },
}

export function BestAccuracyChart() {
  const overallBest = bestAccuracyData.reduce((best, current) => {
    const currentMax = Math.max(current.dataset1, current.dataset2)
    const bestMax = Math.max(best.dataset1, best.dataset2)
    return currentMax > bestMax ? current : best
  })

  return (
    <div className="space-y-6">
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            Best Accuracy Comparison Across Algorithms
          </CardTitle>
          <CardDescription>
            Highest accuracy achieved by each algorithm on both datasets with optimal parameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bestAccuracyData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="algorithm"
                  tick={{ fontSize: 12 }}
                  interval={0}
                />
                <YAxis domain={[80, 100]} tick={{ fontSize: 12 }} />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = bestAccuracyData.find(d => d.algorithm === label);
                      return (
                        <div className="bg-white p-3 border rounded shadow-lg">
                          <p className="font-semibold">{label}</p>
                          {payload.map((entry, index) => (
                            <div key={index} className="text-sm">
                              <span style={{ color: entry.color }}>
                                {entry.dataKey === 'dataset1' ? 'Dataset 1' : 'Dataset 2'}: {entry.value}%
                              </span>
                              <br />
                              <span className="text-gray-600 text-xs">
                                Best with: {entry.dataKey === 'dataset1' ? data?.dataset1Param : data?.dataset2Param}
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="dataset1" fill={chartConfig.dataset1.color} name="Dataset 1 (%)" />
                <Bar dataKey="dataset2" fill={chartConfig.dataset2.color} name="Dataset 2 (%)" />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle>Performance Trend Analysis</CardTitle>
          <CardDescription>Best accuracy trends across datasets for each algorithm</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bestAccuracyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="algorithm" />
                <YAxis domain={[80, 100]} />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = bestAccuracyData.find(d => d.algorithm === label);
                      return (
                        <div className="bg-white p-3 border rounded shadow-lg">
                          <p className="font-semibold">{label}</p>
                          {payload.map((entry, index) => (
                            <div key={index} className="text-sm">
                              <span style={{ color: entry.color }}>
                                {entry.dataKey === 'dataset1' ? 'Dataset 1' : 'Dataset 2'}: {entry.value}%
                              </span>
                              <br />
                              <span className="text-gray-600 text-xs">
                                Best with: {entry.dataKey === 'dataset1' ? data?.dataset1Param : data?.dataset2Param}
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="dataset1"
                  stroke={chartConfig.dataset1.color}
                  strokeWidth={3}
                  name="Dataset 1 (30.6K samples)"
                />
                <Line
                  type="monotone"
                  dataKey="dataset2"
                  stroke={chartConfig.dataset2.color}
                  strokeWidth={3}
                  name="Dataset 2 (14K samples)"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bestAccuracyData.map((algo, index) => (
          <Card
            key={index}
            className={`border-2 ${
              algo.algorithm === overallBest.algorithm ? "border-yellow-300 bg-yellow-50" : "border-slate-200"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {algo.algorithm}
                {algo.algorithm === overallBest.algorithm && (
                  <Badge className="bg-yellow-500 text-yellow-900">Best Overall</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-green-800">Dataset 1 (30.6K)</div>
                    <div className="text-sm text-green-600">{algo.dataset1Param}</div>
                  </div>
                  <div className="text-2xl font-bold text-green-700">{algo.dataset1.toFixed(2)}%</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-blue-800">Dataset 2 (14K)</div>
                    <div className="text-sm text-blue-600">{algo.dataset2Param}</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">{algo.dataset2.toFixed(2)}%</div>
                </div>
              </div>
              <div className="text-center pt-2 border-t">
                <div className="text-lg font-bold text-slate-700">
                  Avg: {((algo.dataset1 + algo.dataset2) / 2).toFixed(2)}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}