import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const dataset1Results = [
  { algorithm: "RF", parameter: "100 trees", accuracy: 0.9943, fpr: 0.0026, recall: 0.9892 },
  { algorithm: "RF", parameter: "300 trees", accuracy: 0.9948, fpr: 0.0026, recall: 0.9905 },
  { algorithm: "RF", parameter: "500 trees", accuracy: 0.9945, fpr: 0.0029, recall: 0.99 },
  { algorithm: "RF", parameter: "700 trees", accuracy: 0.9946, fpr: 0.0028, recall: 0.9903 },
  { algorithm: "SVM", parameter: "Linear", accuracy: 0.947, fpr: 0.0272, recall: 0.9041 },
  { algorithm: "SVM", parameter: "RBF", accuracy: 0.9347, fpr: 0.0298, recall: 0.8759 },
  { algorithm: "SVM", parameter: "Poly", accuracy: 0.8458, fpr: 0.0222, recall: 0.6269 },
  { algorithm: "SVM", parameter: "Sigmoid", accuracy: 0.555, fpr: 0.3414, recall: 0.3831 },
  { algorithm: "KNN", parameter: "k=3", accuracy: 0.9861, fpr: 0.012, recall: 0.9831 },
  { algorithm: "KNN", parameter: "k=5", accuracy: 0.9858, fpr: 0.0128, recall: 0.9835 },
  { algorithm: "KNN", parameter: "k=7", accuracy: 0.9834, fpr: 0.0133, recall: 0.9779 },
  { algorithm: "KNN", parameter: "k=9", accuracy: 0.9814, fpr: 0.0123, recall: 0.9709 },
]

const dataset2Results = [
  { algorithm: "RF", parameter: "100 trees", accuracy: 0.9971, fpr: 0.003, recall: 0.9971 },
  { algorithm: "RF", parameter: "300 trees", accuracy: 0.997, fpr: 0.003, recall: 0.997 },
  { algorithm: "RF", parameter: "500 trees", accuracy: 0.9971, fpr: 0.0027, recall: 0.997 },
  { algorithm: "RF", parameter: "700 trees", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
  { algorithm: "KNN", parameter: "k=3", accuracy: 0.666, fpr: 0.7008, recall: 0.7665 },
  { algorithm: "KNN", parameter: "k=5", accuracy: 0.848, fpr: 0.6888, recall: 0.995 },
  { algorithm: "KNN", parameter: "k=7", accuracy: 0.8561, fpr: 0.6586, recall: 0.9971 },
  { algorithm: "KNN", parameter: "k=9", accuracy: 0.8605, fpr: 0.6423, recall: 0.9983 },
  { algorithm: "SVM", parameter: "Linear", accuracy: 0.9967, fpr: 0.0007, recall: 0.996 },
  { algorithm: "SVM", parameter: "RBF", accuracy: 0.6449, fpr: 0.6589, recall: 0.7281 },
  { algorithm: "SVM", parameter: "Poly", accuracy: 0.9978, fpr: 0.0027, recall: 0.9979 },
  { algorithm: "SVM", parameter: "Sigmoid", accuracy: 0.0096, fpr: 0.9801, recall: 0.0068 },
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

interface MetricsTableProps {
  dataset: string
}

export function MetricsTable({ dataset }: MetricsTableProps) {
  const results = dataset === "dataset1" ? dataset1Results : dataset2Results
  const bestAccuracy = Math.max(...results.map((r) => r.accuracy))

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">
        Performance Results - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="h-8">
              <TableHead className="text-xs">Algorithm</TableHead>
              <TableHead className="text-xs">Config</TableHead>
              <TableHead className="text-xs">Accuracy</TableHead>
              <TableHead className="text-xs">FPR</TableHead>
              <TableHead className="text-xs">Recall</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result, index) => (
              <TableRow key={index} className={`h-8 ${result.accuracy === bestAccuracy ? "bg-green-50" : ""}`}>
                <TableCell className="py-1">
                  <Badge className={`${getAlgorithmColor(result.algorithm)} text-xs`}>{result.algorithm}</Badge>
                </TableCell>
                <TableCell className="text-xs font-mono py-1">{result.parameter}</TableCell>
                <TableCell className="py-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold">{(result.accuracy * 100).toFixed(1)}%</span>
                    {result.accuracy === bestAccuracy && <span className="text-xs">🏆</span>}
                  </div>
                </TableCell>
                <TableCell className="text-xs py-1">
                  <span
                    className={
                      result.fpr < 0.05 ? "text-green-600" : result.fpr < 0.1 ? "text-yellow-600" : "text-red-600"
                    }
                  >
                    {(result.fpr * 100).toFixed(1)}%
                  </span>
                </TableCell>
                <TableCell className="text-xs py-1">
                  <span
                    className={
                      result.recall > 0.9 ? "text-green-600" : result.recall > 0.8 ? "text-yellow-600" : "text-red-600"
                    }
                  >
                    {(result.recall * 100).toFixed(1)}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Compact Summary */}
      <div className="grid grid-cols-4 gap-2">
        <div className="text-center p-2 bg-green-50 rounded text-xs">
          <div className="font-semibold text-green-600">{(bestAccuracy * 100).toFixed(1)}%</div>
          <div className="text-green-700">Best</div>
        </div>
        <div className="text-center p-2 bg-blue-50 rounded text-xs">
          <div className="font-semibold text-blue-600">
            {((results.reduce((sum, r) => sum + r.accuracy, 0) / results.length) * 100).toFixed(1)}%
          </div>
          <div className="text-blue-700">Average</div>
        </div>
        <div className="text-center p-2 bg-purple-50 rounded text-xs">
          <div className="font-semibold text-purple-600">{results.length}</div>
          <div className="text-purple-700">Models</div>
        </div>
        <div className="text-center p-2 bg-orange-50 rounded text-xs">
          <div className="font-semibold text-orange-600">{results.filter((r) => r.accuracy >= 0.99).length}</div>
          <div className="text-orange-700">Excellent</div>
        </div>
      </div>
    </div>
  )
}