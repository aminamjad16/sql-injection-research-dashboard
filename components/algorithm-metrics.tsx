import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const algorithmData = {
  rf: {
    dataset1: [
      { parameter: "n_estimators = 100", accuracy: 0.9943, fpr: 0.0026, recall: 0.9892 },
      { parameter: "n_estimators = 300", accuracy: 0.9948, fpr: 0.0026, recall: 0.9905 },
      { parameter: "n_estimators = 500", accuracy: 0.9945, fpr: 0.0029, recall: 0.99 },
      { parameter: "n_estimators = 700", accuracy: 0.9946, fpr: 0.0028, recall: 0.9903 },
    ],
    dataset2: [
      { parameter: "n_estimators = 100", accuracy: 0.9971, fpr: 0.003, recall: 0.9971 },
      { parameter: "n_estimators = 300", accuracy: 0.997, fpr: 0.003, recall: 0.997 },
      { parameter: "n_estimators = 500", accuracy: 0.9971, fpr: 0.0027, recall: 0.997 },
      { parameter: "n_estimators = 700", accuracy: 0.9971, fpr: 0.0027, recall: 0.9971 },
    ],
  },
  svm: {
    dataset1: [
      { parameter: "kernel = linear", accuracy: 0.947, fpr: 0.0272, recall: 0.9041 },
      { parameter: "kernel = rbf", accuracy: 0.9347, fpr: 0.0298, recall: 0.8759 },
      { parameter: "kernel = poly", accuracy: 0.8458, fpr: 0.0222, recall: 0.6269 },
      { parameter: "kernel = sigmoid", accuracy: 0.555, fpr: 0.3414, recall: 0.3831 },
    ],
    dataset2: [
      { parameter: "kernel = linear", accuracy: 0.9967, fpr: 0.0007, recall: 0.996 },
      { parameter: "kernel = rbf", accuracy: 0.6449, fpr: 0.6589, recall: 0.7281 },
      { parameter: "kernel = poly", accuracy: 0.9978, fpr: 0.0027, recall: 0.9979 },
      { parameter: "kernel = sigmoid", accuracy: 0.0096, fpr: 0.9801, recall: 0.0068 },
    ],
  },
  knn: {
    dataset1: [
      { parameter: "k = 3", accuracy: 0.9861, fpr: 0.012, recall: 0.9831 },
      { parameter: "k = 5", accuracy: 0.9858, fpr: 0.0128, recall: 0.9835 },
      { parameter: "k = 7", accuracy: 0.9834, fpr: 0.0133, recall: 0.9779 },
      { parameter: "k = 9", accuracy: 0.9814, fpr: 0.0123, recall: 0.9709 },
    ],
    dataset2: [
      { parameter: "k = 3", accuracy: 0.666, fpr: 0.7008, recall: 0.7665 },
      { parameter: "k = 5", accuracy: 0.848, fpr: 0.6888, recall: 0.995 },
      { parameter: "k = 7", accuracy: 0.8561, fpr: 0.6586, recall: 0.9971 },
      { parameter: "k = 9", accuracy: 0.8605, fpr: 0.6423, recall: 0.9983 },
    ],
  },
}

const algorithmNames = {
  rf: "Random Forest",
  svm: "Support Vector Machine",
  knn: "K-Nearest Neighbors",
}

interface AlgorithmMetricsProps {
  algorithm: string
  dataset: string
}

export function AlgorithmMetrics({ algorithm, dataset }: AlgorithmMetricsProps) {
  const data = algorithmData[algorithm as keyof typeof algorithmData]
  const results = data[dataset as keyof typeof data] || []
  const bestAccuracy = Math.max(...results.map((r) => r.accuracy))
  const algorithmName = algorithmNames[algorithm as keyof typeof algorithmNames]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {algorithmName} Performance Metrics - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
          </CardTitle>
          <CardDescription>
            Detailed performance analysis for different {algorithmName.toLowerCase()} configurations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parameters</TableHead>
                <TableHead>Accuracy</TableHead>
                <TableHead>False Positive Rate</TableHead>
                <TableHead>Recall</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index} className={result.accuracy === bestAccuracy ? "bg-green-50" : ""}>
                  <TableCell className="font-mono text-sm font-semibold">{result.parameter}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{(result.accuracy * 100).toFixed(2)}%</span>
                      {result.accuracy === bestAccuracy && (
                        <Badge variant="default" className="text-xs">
                          Best
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        result.fpr < 0.05 ? "text-green-600" : result.fpr < 0.1 ? "text-yellow-600" : "text-red-600"
                      }
                    >
                      {(result.fpr * 100).toFixed(2)}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        result.recall > 0.9
                          ? "text-green-600"
                          : result.recall > 0.8
                            ? "text-yellow-600"
                            : "text-red-600"
                      }
                    >
                      {(result.recall * 100).toFixed(2)}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Progress value={result.accuracy * 100} className="w-20" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Best Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const best = results.find((r) => r.accuracy === bestAccuracy)
              return best ? (
                <div className="space-y-2">
                  <div className="font-mono text-sm font-semibold">{best.parameter}</div>
                  <div className="text-2xl font-bold text-green-600">{(best.accuracy * 100).toFixed(2)}%</div>
                  <div className="text-sm text-green-700">Accuracy</div>
                </div>
              ) : null
            })()} 
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Average Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">
                {((results.reduce((sum, r) => sum + r.accuracy, 0) / results.length) * 100).toFixed(2)}%
              </div>
              <div className="text-sm text-blue-700">Average Accuracy</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">Configurations Tested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">{results.length}</div>
              <div className="text-sm text-purple-700">Parameter Combinations</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}