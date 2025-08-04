"use client"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Simplified data to show only the best configuration for each algorithm
const dataset1Data = [
  { name: "RF (300)", algorithm: "Random Forest", accuracy: 99.48, fpr: 0.26, recall: 99.05 },
  { name: "SVM (linear)", algorithm: "SVM", accuracy: 94.7, fpr: 2.72, recall: 90.41 },
  { name: "KNN (3)", algorithm: "KNN", accuracy: 98.61, fpr: 1.2, recall: 98.31 },
]

const dataset2Data = [
  { name: "RF (700)", algorithm: "Random Forest", accuracy: 99.71, fpr: 0.27, recall: 99.71 },
  { name: "KNN (9)", algorithm: "KNN", accuracy: 86.05, fpr: 64.23, recall: 99.83 },
  { name: "SVM (poly)", algorithm: "SVM", accuracy: 99.78, fpr: 0.27, recall: 99.79 },
]

const chartConfig = {
  accuracy: {
    label: "Accuracy (%)",
    color: "#10b981",
  },
}

interface PerformanceChartProps {
  dataset: string
}

export function PerformanceChart({ dataset }: PerformanceChartProps) {
  const data = dataset === "dataset1" ? dataset1Data : dataset2Data
  const bestPerformer = data.reduce((best, current) => (current.accuracy > best.accuracy ? current : best))

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">
        Performance Overview - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
      </div>
      <div className="h-48">
        <ChartContainer config={chartConfig} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="accuracy" fill={chartConfig.accuracy.color} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="text-xs text-gray-600 text-center">
        Best performer: <span className="font-semibold text-green-600">{bestPerformer.name}</span> with{" "}
        <span className="font-semibold">{bestPerformer.accuracy.toFixed(2)}%</span> accuracy
      </div>
    </div>
  )
}