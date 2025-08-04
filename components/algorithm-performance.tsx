"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Legend } from "recharts"

const performanceData = {
  rf: {
    dataset1: [
      { name: "100 trees", accuracy: 99.43, fpr: 0.26, recall: 98.92 },
      { name: "300 trees", accuracy: 99.48, fpr: 0.26, recall: 99.05 },
      { name: "500 trees", accuracy: 99.45, fpr: 0.29, recall: 99.0 },
      { name: "700 trees", accuracy: 99.46, fpr: 0.28, recall: 99.03 },
    ],
    dataset2: [
      { name: "100 trees", accuracy: 99.71, fpr: 0.3, recall: 99.71 },
      { name: "300 trees", accuracy: 99.7, fpr: 0.3, recall: 99.7 },
      { name: "500 trees", accuracy: 99.71, fpr: 0.27, recall: 99.7 },
      { name: "700 trees", accuracy: 99.71, fpr: 0.27, recall: 99.71 },
    ],
  },
  svm: {
    dataset1: [
      { name: "Linear", accuracy: 94.7, fpr: 2.72, recall: 90.41 },
      { name: "RBF", accuracy: 93.47, fpr: 2.98, recall: 87.59 },
      { name: "Polynomial", accuracy: 84.58, fpr: 2.22, recall: 62.69 },
      { name: "Sigmoid", accuracy: 55.5, fpr: 34.14, recall: 38.31 },
    ],
    dataset2: [
      { name: "Linear", accuracy: 99.67, fpr: 0.07, recall: 99.6 },
      { name: "RBF", accuracy: 64.49, fpr: 65.89, recall: 72.81 },
      { name: "Polynomial", accuracy: 99.78, fpr: 0.27, recall: 99.79 },
      { name: "Sigmoid", accuracy: 0.96, fpr: 98.01, recall: 0.68 },
    ],
  },
  knn: {
    dataset1: [
      { name: "k=3", accuracy: 98.61, fpr: 1.2, recall: 98.31 },
      { name: "k=5", accuracy: 98.58, fpr: 1.28, recall: 98.35 },
      { name: "k=7", accuracy: 98.34, fpr: 1.33, recall: 97.79 },
      { name: "k=9", accuracy: 98.14, fpr: 1.23, recall: 97.09 },
    ],
    dataset2: [
      { name: "k=3", accuracy: 66.6, fpr: 70.08, recall: 76.65 },
      { name: "k=5", accuracy: 84.8, fpr: 68.88, recall: 99.5 },
      { name: "k=7", accuracy: 85.61, fpr: 65.86, recall: 99.71 },
      { name: "k=9", accuracy: 86.05, fpr: 64.23, recall: 99.83 },
    ],
  },
}

const algorithmNames = {
  rf: "Random Forest",
  svm: "Support Vector Machine",
  knn: "K-Nearest Neighbors",
}

const chartConfig = {
  accuracy: {
    label: "Accuracy (%)",
    color: "#10b981",
  },
  fpr: {
    label: "False Positive Rate (%)",
    color: "#ef4444",
  },
  recall: {
    label: "Recall (%)",
    color: "#3b82f6",
  },
}

interface AlgorithmPerformanceProps {
  algorithm: string
  dataset: string
}

export function AlgorithmPerformance({ algorithm, dataset }: AlgorithmPerformanceProps) {
  const data = performanceData[algorithm as keyof typeof performanceData]
  const chartData = data[dataset as keyof typeof data] || []
  const algorithmName = algorithmNames[algorithm as keyof typeof algorithmNames]
  const bestPerformer = chartData.reduce((best, current) => (current.accuracy > best.accuracy ? current : best))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {algorithmName} Performance Analysis - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
          </CardTitle>
          <CardDescription>Accuracy comparison across different parameter configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="accuracy" fill={chartConfig.accuracy.color} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multi-Metric Performance Trends</CardTitle>
          <CardDescription>Comprehensive view of Accuracy, False Positive Rate, and Recall</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke={chartConfig.accuracy.color}
                  strokeWidth={3}
                  name="Accuracy (%)"
                />
                <Line
                  type="monotone"
                  dataKey="recall"
                  stroke={chartConfig.recall.color}
                  strokeWidth={3}
                  name="Recall (%)"
                />
                <Line
                  type="monotone"
                  dataKey="fpr"
                  stroke={chartConfig.fpr.color}
                  strokeWidth={3}
                  name="False Positive Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Best Performing Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{bestPerformer.name}</div>
              <div className="text-sm text-gray-600">Configuration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{bestPerformer.accuracy.toFixed(2)}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{bestPerformer.recall.toFixed(2)}%</div>
              <div className="text-sm text-gray-600">Recall</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{bestPerformer.fpr.toFixed(2)}%</div>
              <div className="text-sm text-gray-600">False Positive Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}