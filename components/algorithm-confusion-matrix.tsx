import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const confusionMatrixData = {
  rf: {
    dataset1: [
      {
        parameter: "n_estimators = 100",
        matrix: [
          [3813, 10],
          [25, 2280],
        ],
      },
      {
        parameter: "n_estimators = 300",
        matrix: [
          [3813, 10],
          [22, 2283],
        ],
      },
      {
        parameter: "n_estimators = 500",
        matrix: [
          [3812, 11],
          [23, 2282],
        ],
      },
      {
        parameter: "n_estimators = 700",
        matrix: [
          [3812, 11],
          [24, 2281],
        ],
      },
    ],
    dataset2: [
      {
        parameter: "n_estimators = 100",
        matrix: [
          [3002, 9],
          [32, 10962],
        ],
      },
      {
        parameter: "n_estimators = 300",
        matrix: [
          [3002, 9],
          [33, 10961],
        ],
      },
      {
        parameter: "n_estimators = 500",
        matrix: [
          [3003, 8],
          [33, 10961],
        ],
      },
      {
        parameter: "n_estimators = 700",
        matrix: [
          [3003, 8],
          [32, 10962],
        ],
      },
    ],
  },
  svm: {
    dataset1: [
      {
        parameter: "kernel = linear",
        matrix: [
          [3719, 104],
          [221, 2084],
        ],
      },
      {
        parameter: "kernel = rbf",
        matrix: [
          [3709, 114],
          [286, 2019],
        ],
      },
      {
        parameter: "kernel = poly",
        matrix: [
          [3738, 85],
          [860, 1445],
        ],
      },
      {
        parameter: "kernel = sigmoid",
        matrix: [
          [2518, 1305],
          [1422, 883],
        ],
      },
    ],
    dataset2: [
      {
        parameter: "kernel = linear",
        matrix: [
          [3009, 2],
          [44, 10950],
        ],
      },
      {
        parameter: "kernel = rbf",
        matrix: [
          [1027, 1984],
          [2989, 8005],
        ],
      },
      {
        parameter: "kernel = poly",
        matrix: [
          [3003, 8],
          [23, 10971],
        ],
      },
      {
        parameter: "kernel = sigmoid",
        matrix: [
          [60, 2951],
          [10919, 75],
        ],
      },
    ],
  },
  knn: {
    dataset1: [
      {
        parameter: "k = 3",
        matrix: [
          [3777, 46],
          [39, 2266],
        ],
      },
      {
        parameter: "k = 5",
        matrix: [
          [3774, 49],
          [38, 2267],
        ],
      },
      {
        parameter: "k = 7",
        matrix: [
          [3772, 51],
          [51, 2254],
        ],
      },
      {
        parameter: "k = 9",
        matrix: [
          [3776, 47],
          [67, 2238],
        ],
      },
    ],
    dataset2: [
      {
        parameter: "k = 3",
        matrix: [
          [901, 2110],
          [2567, 8427],
        ],
      },
      {
        parameter: "k = 5",
        matrix: [
          [937, 2074],
          [55, 10939],
        ],
      },
      {
        parameter: "k = 7",
        matrix: [
          [1028, 1983],
          [32, 10962],
        ],
      },
      {
        parameter: "k = 9",
        matrix: [
          [1077, 1934],
          [19, 10975],
        ],
      },
    ],
  },
}

const algorithmNames = {
  rf: "Random Forest",
  svm: "Support Vector Machine",
  knn: "K-Nearest Neighbors",
}

function ConfusionMatrix({ matrix }: { matrix: number[][] }) {
  const total = matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1]

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-1 text-xs">
        <div></div>
        <div className="text-center font-semibold">Predicted</div>
        <div></div>
        <div className="text-center font-semibold">Normal</div>
        <div className="text-center font-semibold">Attack</div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="flex items-center justify-center text-xs font-semibold">
          <div className="transform -rotate-90">Actual</div>
        </div>
        <div className="space-y-1">
          <div className="text-xs text-center font-medium">Normal</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-green-100 border border-green-300 p-2 text-center text-sm font-semibold text-green-800">
              {matrix[0][0]}
            </div>
            <div className="bg-red-100 border border-red-300 p-2 text-center text-sm font-semibold text-red-800">
              {matrix[0][1]}
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="space-y-1">
          <div className="text-xs text-center font-medium">Attack</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-red-100 border border-red-300 p-2 text-center text-sm font-semibold text-red-800">
              {matrix[1][0]}
            </div>
            <div className="bg-green-100 border border-green-300 p-2 text-center text-sm font-semibold text-green-800">
              {matrix[1][1]}
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-xs text-center text-gray-600">Total Samples: {total.toLocaleString()}</div>
    </div>
  )
}

interface AlgorithmConfusionMatrixProps {
  algorithm: string
  dataset: string
}

export function AlgorithmConfusionMatrix({ algorithm, dataset }: AlgorithmConfusionMatrixProps) {
  const data = confusionMatrixData[algorithm as keyof typeof confusionMatrixData]
  const matrices = data[dataset as keyof typeof data] || []
  const algorithmName = algorithmNames[algorithm as keyof typeof algorithmNames]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {algorithmName} Confusion Matrices - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
        </h2>
        <p className="text-gray-600">Classification results for each parameter configuration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matrices.map((item, index) => (
          <Card key={index} className="border-2 border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{algorithmName}</Badge>
              </div>
              <CardTitle className="text-lg">{item.parameter}</CardTitle>
            </CardHeader>
            <CardContent>
              <ConfusionMatrix matrix={item.matrix} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}