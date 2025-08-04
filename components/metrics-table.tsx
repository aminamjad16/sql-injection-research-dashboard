import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const dataset1Results = [
  { algorithm: "RF", parameter: "n=100", accuracy: 0.9936, fpr: 0.0026, recall: 0.9904 },
  { algorithm: "RF", parameter: "n=300", accuracy: 0.9948, fpr: 0.0026, recall: 0.9905 },
  { algorithm: "RF", parameter: "n=500", accuracy: 0.9943, fpr: 0.0026, recall: 0.9905 },
  { algorithm: "RF", parameter: "n=700", accuracy: 0.9948, fpr: 0.0026, recall: 0.9905 },
  { algorithm: "SVM", parameter: "Linear", accuracy: 0.9470, fpr: 0.0272, recall: 0.9041 },
  { algorithm: "SVM", parameter: "RBF", accuracy: 0.9372, fpr: 0.0272, recall: 0.9041 },
  { algorithm: "SVM", parameter: "Poly", accuracy: 0.9372, fpr: 0.0272, recall: 0.9041 },
  { algorithm: "SVM", parameter: "Sigmoid", accuracy: 0.6244, fpr: 0.0000, recall: 0.0000 },
  { algorithm: "KNN", parameter: "k=3", accuracy: 0.9861, fpr: 0.0120, recall: 0.9831 },
  { algorithm: "KNN", parameter: "k=5", accuracy: 0.9856, fpr: 0.0131, recall: 0.9822 },
  { algorithm: "KNN", parameter: "k=7", accuracy: 0.9851, fpr: 0.0141, recall: 0.9813 },
  { algorithm: "KNN", parameter: "k=9", accuracy: 0.9846, fpr: 0.0152, recall: 0.9804 },
]

const dataset2Results = [
  { algorithm: "RF", parameter: "n=100", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
  { algorithm: "RF", parameter: "n=300", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
  { algorithm: "RF", parameter: "n=500", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
  { algorithm: "RF", parameter: "n=700", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
  { algorithm: "SVM", parameter: "Linear", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
  { algorithm: "SVM", parameter: "RBF", accuracy: 0.7821, fpr: 0.0000, recall: 0.0000 },
  { algorithm: "SVM", parameter: "Poly", accuracy: 0.9978, fpr: 0.0027, recall: 0.9979 },
  { algorithm: "SVM", parameter: "Sigmoid", accuracy: 0.7821, fpr: 0.0000, recall: 0.0000 },
  { algorithm: "KNN", parameter: "k=3", accuracy: 0.8605, fpr: 0.6423, recall: 0.9983 },
  { algorithm: "KNN", parameter: "k=5", accuracy: 0.8605, fpr: 0.6423, recall: 0.9983 },
  { algorithm: "KNN", parameter: "k=7", accuracy: 0.8605, fpr: 0.6423, recall: 0.9983 },
  { algorithm: "KNN", parameter: "k=9", accuracy: 0.8605, fpr: 0.6423, recall: 0.9983 },
]

function getAlgorithmColor(algorithm: string) {
  switch (algorithm) {
    case "RF":
      return "bg-green-100 text-green-800 border-green-300"
    case "SVM":
      return "bg-blue-100 text-blue-800 border-blue-300"
    case "KNN":
      return "bg-purple-100 text-purple-800 border-purple-300"
    default:
      return "bg-gray-100 text-gray-800 border-gray-300"
  }
}

interface MetricsTableProps {
  dataset: string
}

export function MetricsTable({ dataset }: MetricsTableProps) {
  const results = dataset === "dataset1" ? dataset1Results : dataset2Results
  const bestAccuracy = Math.max(...results.map((r) => r.accuracy))

  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="text-sm font-semibold">
        Performance Results - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
      </div>

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <div className="min-w-full inline-block align-middle">
          <Table className="min-w-[500px] sm:min-w-full">
            <TableHeader>
              <TableRow className="h-8">
                <TableHead className="text-xs px-2 sm:px-4">Algo</TableHead>
                <TableHead className="text-xs px-2 sm:px-4">Config</TableHead>
                <TableHead className="text-xs px-2 sm:px-4">Acc</TableHead>
                <TableHead className="text-xs px-2 sm:px-4">FPR</TableHead>
                <TableHead className="text-xs px-2 sm:px-4">Recall</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index} className={`h-8 ${result.accuracy === bestAccuracy ? "bg-green-50" : ""}`}>
                  <TableCell className="py-1 px-2 sm:px-4">
                    <Badge className={`${getAlgorithmColor(result.algorithm)} text-xs px-1.5 py-0.5`}>{result.algorithm}</Badge>
                  </TableCell>
                  <TableCell className="text-xs font-mono py-1 px-2 sm:px-4">{result.parameter}</TableCell>
                  <TableCell className="py-1 px-2 sm:px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold">{(result.accuracy * 100).toFixed(1)}%</span>
                      {result.accuracy === bestAccuracy && <span className="text-xs">🏆</span>}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs py-1 px-2 sm:px-4">
                    <span
                      className={
                        result.fpr < 0.05 ? "text-green-600" : result.fpr < 0.1 ? "text-yellow-600" : "text-red-600"
                      }
                    >
                      {(result.fpr * 100).toFixed(1)}%
                    </span>
                  </TableCell>
                  <TableCell className="text-xs py-1 px-2 sm:px-4">
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
      </div>

      <div className="text-xs text-gray-600 text-center mt-2">
        🏆 indicates best accuracy for this dataset
      </div>
    </div>
  )
}