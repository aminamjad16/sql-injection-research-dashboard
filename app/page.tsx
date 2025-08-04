"use client"

import { useState } from "react"

const datasets = [
  { id: "dataset1", name: "Dataset 1", samples: "30.6K" },
  { id: "dataset2", name: "Dataset 2", samples: "14K" },
]

const algorithms = [
  { id: "rf", name: "Random Forest", short: "RF", accuracy: "99.78%" },
  { id: "svm", name: "Support Vector Machine", short: "SVM", accuracy: "99.78%" },
  { id: "knn", name: "K-Nearest Neighbors", short: "KNN", accuracy: "98.61%" },
]

export default function ResearchDashboard() {
  const [selectedDataset, setSelectedDataset] = useState("dataset1")

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            SQL Injection Research Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Machine Learning Algorithm Comparison for SQL Injection Detection
          </p>
        </div>

        {/* Dataset Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Select Dataset</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {datasets.map((dataset) => (
              <button
                key={dataset.id}
                onClick={() => setSelectedDataset(dataset.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedDataset === dataset.id
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-green-300"
                }`}
              >
                <div className="text-lg font-semibold">{dataset.name}</div>
                <div className="text-sm opacity-75">{dataset.samples} samples</div>
              </button>
            ))}
          </div>
        </div>

        {/* Algorithm Results */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Algorithm Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {algorithms.map((algo) => (
              <div
                key={algo.id}
                className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-semibold text-gray-800">
                  {algo.name}
                </div>
                <div className="text-2xl font-bold text-green-600 mt-2">
                  {algo.accuracy}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Best Accuracy
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">More Features Coming Soon</h2>
          <p className="text-gray-600">
            Detailed metrics, confusion matrices, ROC curves, and feature importance analysis
          </p>
        </div>
      </div>
    </div>
  )
}