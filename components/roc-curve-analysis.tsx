"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// ROC curve data points for each algorithm configuration
const rocCurveData = {
  dataset1: [
    { fpr: 0, tpr: 0, rf_100: 0, rf_300: 0, rf_500: 0, rf_700: 0, svm_linear: 0, svm_rbf: 0, svm_poly: 0, svm_sigmoid: 0, knn_3: 0, knn_5: 0, knn_7: 0, knn_9: 0, diagonal: 0 },
    { fpr: 0.005, tpr: 0.6, rf_100: 0.72, rf_300: 0.74, rf_500: 0.73, rf_700: 0.74, svm_linear: 0.59, svm_rbf: 0.58, svm_poly: 0.60, svm_sigmoid: 0.59, knn_3: 0.65, knn_5: 0.66, knn_7: 0.67, knn_9: 0.68, diagonal: 0.005 },
    { fpr: 0.01, tpr: 0.75, rf_100: 0.85, rf_300: 0.87, rf_500: 0.86, rf_700: 0.87, svm_linear: 0.72, svm_rbf: 0.70, svm_poly: 0.73, svm_sigmoid: 0.60, knn_3: 0.78, knn_5: 0.79, knn_7: 0.80, knn_9: 0.81, diagonal: 0.01 },
    { fpr: 0.02, tpr: 0.76, rf_100: 0.92, rf_300: 0.94, rf_500: 0.93, rf_700: 0.94, svm_linear: 0.75, svm_rbf: 0.73, svm_poly: 0.74, svm_sigmoid: 0.61, knn_3: 0.85, knn_5: 0.86, knn_7: 0.87, knn_9: 0.88, diagonal: 0.02 },
    { fpr: 0.05, tpr: 0.76, rf_100: 0.98, rf_300: 0.99, rf_500: 0.98, rf_700: 0.99, svm_linear: 0.76, svm_rbf: 0.75, svm_poly: 0.75, svm_sigmoid: 0.62, knn_3: 0.95, knn_5: 0.96, knn_7: 0.97, knn_9: 0.98, diagonal: 0.05 },
    { fpr: 0.1, tpr: 0.76, rf_100: 0.995, rf_300: 0.998, rf_500: 0.996, rf_700: 0.998, svm_linear: 0.76, svm_rbf: 0.76, svm_poly: 0.76, svm_sigmoid: 0.63, knn_3: 0.98, knn_5: 0.985, knn_7: 0.99, knn_9: 0.995, diagonal: 0.1 },
    { fpr: 0.2, tpr: 0.76, rf_100: 0.999, rf_300: 0.9995, rf_500: 0.999, rf_700: 0.9995, svm_linear: 0.76, svm_rbf: 0.76, svm_poly: 0.76, svm_sigmoid: 0.65, knn_3: 0.995, knn_5: 0.996, knn_7: 0.997, knn_9: 0.998, diagonal: 0.2 },
    { fpr: 0.5, tpr: 0.76, rf_100: 1.0, rf_300: 1.0, rf_500: 1.0, rf_700: 1.0, svm_linear: 0.76, svm_rbf: 0.76, svm_poly: 0.76, svm_sigmoid: 0.70, knn_3: 0.999, knn_5: 0.999, knn_7: 0.999, knn_9: 0.999, diagonal: 0.5 },
    { fpr: 1, tpr: 1, rf_100: 1, rf_300: 1, rf_500: 1, rf_700: 1, svm_linear: 1, svm_rbf: 1, svm_poly: 1, svm_sigmoid: 1, knn_3: 1, knn_5: 1, knn_7: 1, knn_9: 1, diagonal: 1 },
  ],
  dataset2: [
    { fpr: 0, tpr: 0, rf_100: 0, rf_300: 0, rf_500: 0, rf_700: 0, svm_linear: 0, svm_rbf: 0, svm_poly: 0, svm_sigmoid: 0, knn_3: 0, knn_5: 0, knn_7: 0, knn_9: 0, diagonal: 0 },
    { fpr: 0.005, tpr: 0.6, rf_100: 0.72, rf_300: 0.74, rf_500: 0.73, rf_700: 0.74, svm_linear: 0.72, svm_rbf: 0.35, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.35, knn_5: 0.38, knn_7: 0.40, knn_9: 0.42, diagonal: 0.005 },
    { fpr: 0.01, tpr: 0.75, rf_100: 0.85, rf_300: 0.87, rf_500: 0.86, rf_700: 0.87, svm_linear: 0.85, svm_rbf: 0.40, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.40, knn_5: 0.43, knn_7: 0.45, knn_9: 0.47, diagonal: 0.01 },
    { fpr: 0.02, tpr: 0.76, rf_100: 0.92, rf_300: 0.94, rf_500: 0.93, rf_700: 0.94, svm_linear: 0.92, svm_rbf: 0.45, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.45, knn_5: 0.48, knn_7: 0.50, knn_9: 0.52, diagonal: 0.02 },
    { fpr: 0.05, tpr: 0.76, rf_100: 0.98, rf_300: 0.99, rf_500: 0.98, rf_700: 0.99, svm_linear: 0.98, svm_rbf: 0.50, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.50, knn_5: 0.53, knn_7: 0.55, knn_9: 0.57, diagonal: 0.05 },
    { fpr: 0.1, tpr: 0.76, rf_100: 0.995, rf_300: 0.998, rf_500: 0.996, rf_700: 0.998, svm_linear: 0.995, svm_rbf: 0.55, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.55, knn_5: 0.58, knn_7: 0.60, knn_9: 0.62, diagonal: 0.1 },
    { fpr: 0.2, tpr: 0.76, rf_100: 0.999, rf_300: 0.9995, rf_500: 0.999, rf_700: 0.9995, svm_linear: 0.999, svm_rbf: 0.60, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.60, knn_5: 0.63, knn_7: 0.65, knn_9: 0.67, diagonal: 0.2 },
    { fpr: 0.5, tpr: 0.76, rf_100: 1.0, rf_300: 1.0, rf_500: 1.0, rf_700: 1.0, svm_linear: 1.0, svm_rbf: 0.70, svm_poly: 0.001, svm_sigmoid: 0.001, knn_3: 0.70, knn_5: 0.73, knn_7: 0.75, knn_9: 0.77, diagonal: 0.5 },
    { fpr: 1, tpr: 1, rf_100: 1, rf_300: 1, rf_500: 1, rf_700: 1, svm_linear: 1, svm_rbf: 1, svm_poly: 1, svm_sigmoid: 1, knn_3: 1, knn_5: 1, knn_7: 1, knn_9: 1, diagonal: 1 },
  ]
}

// AUC scores and predictions based on the provided data
const aucData = {
  dataset1: [
    { algorithm: "Random Forest", parameter: "n=100", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "Random Forest", parameter: "n=300", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "Random Forest", parameter: "n=500", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "Random Forest", parameter: "n=700", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "SVM", parameter: "Linear", auc: 0.9882, prediction: "Excellent Prediction" },
    { algorithm: "SVM", parameter: "RBF", auc: 0.9780, prediction: "Very Good Prediction" },
    { algorithm: "SVM", parameter: "Polynomial", auc: 0.9611, prediction: "Good Prediction" },
    { algorithm: "SVM", parameter: "Sigmoid", auc: 0.5495, prediction: "Poor Prediction" },
    { algorithm: "KNN", parameter: "k=3", auc: 0.9931, prediction: "Excellent Prediction" },
    { algorithm: "KNN", parameter: "k=5", auc: 0.9944, prediction: "Excellent Prediction" },
    { algorithm: "KNN", parameter: "k=7", auc: 0.9952, prediction: "Excellent Prediction" },
    { algorithm: "KNN", parameter: "k=9", auc: 0.9957, prediction: "Excellent Prediction" },
  ],
  dataset2: [
    { algorithm: "Random Forest", parameter: "n=100", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "Random Forest", parameter: "n=300", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "Random Forest", parameter: "n=500", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "Random Forest", parameter: "n=700", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "SVM", parameter: "Linear", auc: 0.9994, prediction: "Excellent Prediction" },
    { algorithm: "SVM", parameter: "RBF", auc: 0.5000, prediction: "Poor Prediction" },
    { algorithm: "SVM", parameter: "Polynomial", auc: 0.9995, prediction: "Excellent Prediction" },
    { algorithm: "SVM", parameter: "Sigmoid", auc: 0.5000, prediction: "Poor Prediction" },
    { algorithm: "KNN", parameter: "k=3", auc: 0.6790, prediction: "Fair Prediction" },
    { algorithm: "KNN", parameter: "k=5", auc: 0.6790, prediction: "Fair Prediction" },
    { algorithm: "KNN", parameter: "k=7", auc: 0.6790, prediction: "Fair Prediction" },
    { algorithm: "KNN", parameter: "k=9", auc: 0.6790, prediction: "Fair Prediction" },
  ]
}

// Algorithm configurations for the legend
const algorithmConfigs = {
  dataset1: [
    { key: "rf_300", name: "RF (n=300)", color: "#10b981", strokeWidth: 3 },
    { key: "svm_linear", name: "SVM Linear", color: "#3b82f6", strokeWidth: 2 },
    { key: "knn_3", name: "KNN (k=3)", color: "#8b5cf6", strokeWidth: 2 },
    { key: "diagonal", name: "Random Classifier", color: "#ef4444", strokeWidth: 1, strokeDasharray: "5 5" },
  ],
  dataset2: [
    { key: "rf_700", name: "RF (n=700)", color: "#10b981", strokeWidth: 3 },
    { key: "svm_poly", name: "SVM Polynomial", color: "#3b82f6", strokeWidth: 3 },
    { key: "svm_linear", name: "SVM Linear", color: "#06b6d4", strokeWidth: 2 },
    { key: "knn_9", name: "KNN (k=9)", color: "#8b5cf6", strokeWidth: 2 },
    { key: "diagonal", name: "Random Classifier", color: "#ef4444", strokeWidth: 1, strokeDasharray: "5 5" },
  ]
}

const chartConfig = {
  rf_100: { label: "RF (n=100)", color: "#059669" },
  rf_300: { label: "RF (n=300)", color: "#10b981" },
  rf_500: { label: "RF (n=500)", color: "#34d399" },
  rf_700: { label: "RF (n=700)", color: "#6ee7b7" },
  svm_linear: { label: "SVM Linear", color: "#3b82f6" },
  svm_rbf: { label: "SVM RBF", color: "#1d4ed8" },
  svm_poly: { label: "SVM Polynomial", color: "#2563eb" },
  svm_sigmoid: { label: "SVM Sigmoid", color: "#1e40af" },
  knn_3: { label: "KNN (k=3)", color: "#8b5cf6" },
  knn_5: { label: "KNN (k=5)", color: "#7c3aed" },
  knn_7: { label: "KNN (k=7)", color: "#6d28d9" },
  knn_9: { label: "KNN (k=9)", color: "#5b21b6" },
  diagonal: { label: "Random Classifier", color: "#ef4444" },
}

function getAlgorithmColor(algorithm: string) {
  switch (algorithm) {
    case "Random Forest":
      return "bg-green-100 text-green-800 border-green-300"
    case "SVM":
      return "bg-blue-100 text-blue-800 border-blue-300"
    case "KNN":
      return "bg-purple-100 text-purple-800 border-purple-300"
    default:
      return "bg-gray-100 text-gray-800 border-gray-300"
  }
}

function getPredictionColor(prediction: string) {
  switch (prediction) {
    case "Excellent Prediction":
      return "text-green-600 bg-green-50"
    case "Very Good Prediction":
      return "text-blue-600 bg-blue-50"
    case "Good Prediction":
      return "text-yellow-600 bg-yellow-50"
    case "Fair Prediction":
      return "text-orange-600 bg-orange-50"
    case "Poor Prediction":
      return "text-red-600 bg-red-50"
    default:
      return "text-gray-600 bg-gray-50"
  }
}

interface ROCCurveAnalysisProps {
  dataset: string
}

export function ROCCurveAnalysis({ dataset }: ROCCurveAnalysisProps) {
  const rocData = rocCurveData[dataset as keyof typeof rocCurveData] || []
  const auc = aucData[dataset as keyof typeof aucData] || []
  const algorithms = algorithmConfigs[dataset as keyof typeof algorithmConfigs] || []

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:inline">ROC Curve for All Models</span>
            <span className="sm:hidden">ROC Curves</span>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            <span className="hidden sm:inline">Receiver Operating Characteristic curve showing model performance across all algorithms</span>
            <span className="sm:hidden">Model performance curves</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 sm:pt-6">
          <ChartContainer config={chartConfig} className="h-[400px] sm:h-[500px] lg:h-[600px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rocData} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="fpr"
                  type="number"
                  domain={[0, 1]}
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => value.toFixed(1)}
                  label={{ value: 'FPR', position: 'insideBottom', offset: -5, style: { fontSize: '12px' } }}
                />
                <YAxis
                  domain={[0, 1]}
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => value.toFixed(1)}
                  label={{ value: 'TPR', angle: -90, position: 'insideLeft', style: { fontSize: '12px' } }}
                />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border rounded shadow-lg">
                          <p className="text-sm font-medium">
                            FPR: {Number(label).toFixed(3)}
                          </p>
                          {payload.map((entry, index) => (
                            <p key={index} className="text-sm" style={{ color: entry.color }}>
                              {entry.name}: {entry.value?.toFixed(3)}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                {algorithms.map((algo) => (
                  <Line
                    key={algo.key}
                    type="monotone"
                    dataKey={algo.key}
                    stroke={algo.color}
                    strokeWidth={algo.strokeWidth}
                    strokeDasharray={algo.strokeDasharray}
                    dot={false}
                    name={algo.name}
                  />
                ))}
                <Legend 
                  wrapperStyle={{ fontSize: '12px' }}
                  iconType="line"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* AUC Scores Table */}
      <Card>
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">AUC Scores and Performance Predictions</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Area Under the Curve scores for all algorithm configurations
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 sm:pt-6">
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <Table className="min-w-[600px] sm:min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs px-2 sm:px-4">Algorithm</TableHead>
                    <TableHead className="text-xs px-2 sm:px-4">Parameter</TableHead>
                    <TableHead className="text-xs px-2 sm:px-4">AUC Score</TableHead>
                    <TableHead className="text-xs px-2 sm:px-4">Prediction Quality</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auc.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="px-2 sm:px-4">
                        <Badge className={`${getAlgorithmColor(item.algorithm)} text-xs px-1.5 py-0.5`}>
                          {item.algorithm}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs font-mono px-2 sm:px-4">{item.parameter}</TableCell>
                      <TableCell className="text-xs font-semibold px-2 sm:px-4">{item.auc.toFixed(4)}</TableCell>
                      <TableCell className="px-2 sm:px-4">
                        <Badge className={`${getPredictionColor(item.prediction)} text-xs px-1.5 py-0.5`}>
                          {item.prediction}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
            <CardTitle className="text-green-800 text-xs sm:text-sm">
              <span className="hidden sm:inline">Best AUC Score</span>
              <span className="sm:hidden">Best AUC</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
            <div className="text-lg sm:text-2xl font-bold text-green-600">
              {Math.max(...auc.map(a => a.auc)).toFixed(4)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
            <CardTitle className="text-blue-800 text-xs sm:text-sm">
              <span className="hidden sm:inline">Excellent Models</span>
              <span className="sm:hidden">Excellent</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
            <div className="text-lg sm:text-2xl font-bold text-blue-600">
              {auc.filter(a => a.prediction === "Excellent Prediction").length}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
            <CardTitle className="text-purple-800 text-xs sm:text-sm">
              <span className="hidden sm:inline">Average AUC</span>
              <span className="sm:hidden">Avg AUC</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
            <div className="text-lg sm:text-2xl font-bold text-purple-600">
              {(auc.reduce((sum, a) => sum + a.auc, 0) / auc.length).toFixed(4)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
            <CardTitle className="text-orange-800 text-xs sm:text-sm">
              <span className="hidden sm:inline">Total Models</span>
              <span className="sm:hidden">Total</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
            <div className="text-lg sm:text-2xl font-bold text-orange-600">
              {auc.length}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}