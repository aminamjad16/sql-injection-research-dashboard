"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const parameterComparison = {
  rf: {
    dataset1: [
      { parameter: "100 trees", accuracy: 99.43, precision: 99.56, recall: 98.92, f1Score: 99.24 },
      { parameter: "300 trees", accuracy: 99.48, precision: 99.56, recall: 99.05, f1Score: 99.31 },
      { parameter: "500 trees", accuracy: 99.45, precision: 99.52, recall: 99.0, f1Score: 99.26 },
      { parameter: "700 trees", accuracy: 99.46, precision: 99.54, recall: 99.03, f1Score: 99.28 },
    ],
    dataset2: [
      { parameter: "100 trees", accuracy: 99.71, precision: 99.7, recall: 99.71, f1Score: 99.71 },
      { parameter: "300 trees", accuracy: 99.7, precision: 99.7, recall: 99.7, f1Score: 99.7 },
      { parameter: "500 trees", accuracy: 99.71, precision: 99.73, recall: 99.7, f1Score: 99.71 },
      { parameter: "700 trees", accuracy: 99.71, precision: 99.73, recall: 99.71, f1Score: 99.72 },
    ],
  },
  svm: {
    dataset1: [
      { parameter: "Linear", accuracy: 94.7, precision: 95.24, recall: 90.41, f1Score: 92.77 },
      { parameter: "RBF", accuracy: 93.47, precision: 94.66, recall: 87.59, f1Score: 90.98 },
      { parameter: "Polynomial", accuracy: 84.58, precision: 94.44, recall: 62.69, f1Score: 75.46 },
      { parameter: "Sigmoid", accuracy: 55.5, precision: 40.35, recall: 38.31, f1Score: 39.31 },
    ],
    dataset2: [
      { parameter: "Linear", accuracy: 99.67, precision: 99.93, recall: 99.6, f1Score: 99.76 },
      { parameter: "RBF", accuracy: 64.49, precision: 80.11, recall: 72.81, f1Score: 76.28 },
      { parameter: "Polynomial", accuracy: 99.78, precision: 99.73, recall: 99.79, f1Score: 99.76 },
      { parameter: "Sigmoid", accuracy: 0.96, precision: 2.48, recall: 0.68, f1Score: 1.05 },
    ],
  },
  knn: {
    dataset1: [
      { parameter: "k=3", accuracy: 98.61, precision: 98.0, recall: 98.31, f1Score: 98.15 },
      { parameter: "k=5", accuracy: 98.58, precision: 97.88, recall: 98.35, f1Score: 98.11 },
      { parameter: "k=7", accuracy: 98.34, precision: 97.78, recall: 97.79, f1Score: 97.78 },
      { parameter: "k=9", accuracy: 98.14, precision: 97.94, recall: 97.09, f1Score: 97.51 },
    ],
    dataset2: [
      { parameter: "k=3", accuracy: 66.6, precision: 76.65, recall: 76.65, f1Score: 76.65 },
      { parameter: "k=5", accuracy: 84.8, precision: 84.07, recall: 99.5, f1Score: 91.17 },
      { parameter: "k=7", accuracy: 85.61, precision: 84.69, recall: 99.71, f1Score: 91.61 },
      { parameter: "k=9", accuracy: 86.05, precision: 85.04, recall: 99.83, f1Score: 91.89 },
    ],
  },
}

const algorithmNames = {
  rf: "Random Forest",
  svm: "Support Vector Machine",
  knn: "K-Nearest Neighbors",
}

const chartConfig = {
  accuracy: { label: "Accuracy", color: "#10b981" },
  precision: { label: "Precision", color: "#3b82f6" },
  recall: { label: "Recall", color: "#8b5cf6" },
  f1Score: { label: "F1-Score", color: "#f59e0b" },
}

interface AlgorithmParameterComparisonProps {
  algorithm: string
  dataset: string
}

export function AlgorithmComparison({ algorithm, dataset }: AlgorithmParameterComparisonProps) {
  const data = parameterComparison[algorithm as keyof typeof parameterComparison]
  const comparisonData = data[dataset as keyof typeof data] || []
  const algorithmName = algorithmNames[algorithm as keyof typeof algorithmNames]

  // Prepare radar chart data
  const radarData = comparisonData.map((item) => ({
    parameter: item.parameter,
    Accuracy: item.accuracy,
    Precision: item.precision,
    Recall: item.recall,
    "F1-Score": item.f1Score,
  }))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {algorithmName} Parameter Comparison - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
          </CardTitle>
          <CardDescription>Comprehensive performance metrics across all parameter configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="parameter" />
                <YAxis domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="accuracy" fill={chartConfig.accuracy.color} name="Accuracy (%)" />
                <Bar dataKey="precision" fill={chartConfig.precision.color} name="Precision (%)" />
                <Bar dataKey="recall" fill={chartConfig.recall.color} name="Recall (%)" />
                <Bar dataKey="f1Score" fill={chartConfig.f1Score.color} name="F1-Score (%)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {comparisonData.map((config, index) => (
          <Card key={index} className="border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">{config.parameter}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="font-bold text-green-600">{config.accuracy.toFixed(2)}%</div>
                  <div className="text-green-700">Accuracy</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded">
                  <div className="font-bold text-blue-600">{config.precision.toFixed(2)}%</div>
                  <div className="text-blue-700">Precision</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded">
                  <div className="font-bold text-purple-600">{config.recall.toFixed(2)}%</div>
                  <div className="text-purple-700">Recall</div>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <div className="font-bold text-yellow-600">{config.f1Score.toFixed(2)}%</div>
                  <div className="text-yellow-700">F1-Score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}