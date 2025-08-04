"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const dataset1Comparison = [
  { algorithm: "RF", avgAccuracy: 99.45, bestConfig: "300 trees" },
  { algorithm: "SVM", avgAccuracy: 82.06, bestConfig: "Linear" },
  { algorithm: "KNN", avgAccuracy: 98.42, bestConfig: "k=3" },
]

const dataset2Comparison = [
  { algorithm: "RF", avgAccuracy: 99.71, bestConfig: "500 trees" },
  { algorithm: "SVM", avgAccuracy: 66.23, bestConfig: "Poly" },
  { algorithm: "KNN", avgAccuracy: 80.77, bestConfig: "k=9" },
]

const chartConfig = {
  avgAccuracy: { label: "Average Accuracy", color: "#10b981" },
}

interface AlgorithmComparisonProps {
  dataset: string
}

export function AlgorithmComparison({ dataset }: AlgorithmComparisonProps) {
  const data = dataset === "dataset1" ? dataset1Comparison : dataset2Comparison

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">
        Algorithm Comparison - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
      </div>

      <div className="h-48">
        <ChartContainer config={chartConfig} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <XAxis dataKey="algorithm" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="avgAccuracy" fill={chartConfig.avgAccuracy.color} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {data.map((algo, index) => (
          <div key={index} className="text-center p-2 bg-slate-50 rounded">
            <div className="font-semibold text-sm">{algo.algorithm}</div>
            <div className="text-xs text-muted-foreground">{algo.bestConfig}</div>
            <div className="text-sm font-bold text-green-600">{algo.avgAccuracy.toFixed(1)}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}