import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const dataset1Matrices = [
  {
    algorithm: "RF",
    parameter: "300 trees",
    matrix: [
      [3813, 10],
      [22, 2283],
    ],
  },
  {
    algorithm: "SVM",
    parameter: "Linear",
    matrix: [
      [3719, 104],
      [221, 2084],
    ],
  },
  {
    algorithm: "KNN",
    parameter: "k=3",
    matrix: [
      [3777, 46],
      [39, 2266],
    ],
  },
]

const dataset2Matrices = [
  {
    algorithm: "RF",
    parameter: "500 trees",
    matrix: [
      [3003, 8],
      [33, 10961],
    ],
  },
  {
    algorithm: "SVM",
    parameter: "Poly",
    matrix: [
      [3003, 8],
      [23, 10971],
    ],
  },
  {
    algorithm: "KNN",
    parameter: "k=9",
    matrix: [
      [1077, 1934],
      [19, 10975],
    ],
  },
]

function ConfusionMatrix({ matrix }: { matrix: number[][] }) {
  return (
    <div className="grid grid-cols-2 gap-1 text-xs">
      <div className="bg-green-100 border p-2 text-center font-semibold text-green-800">{matrix[0][0]}</div>
      <div className="bg-red-100 border p-2 text-center font-semibold text-red-800">{matrix[0][1]}</div>
      <div className="bg-red-100 border p-2 text-center font-semibold text-red-800">{matrix[1][0]}</div>
      <div className="bg-green-100 border p-2 text-center font-semibold text-green-800">{matrix[1][1]}</div>
    </div>
  )
}

interface ConfusionMatrixGridProps {
  dataset: string
}

export function ConfusionMatrixGrid({ dataset }: ConfusionMatrixGridProps) {
  const matrices = dataset === "dataset1" ? dataset1Matrices : dataset2Matrices

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">
        Confusion Matrices - {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"} (Best Configs)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {matrices.map((item, index) => (
          <Card key={index} className="p-3">
            <div className="text-center mb-2">
              <Badge className="text-xs">{item.algorithm}</Badge>
              <div className="text-xs text-muted-foreground mt-1">{item.parameter}</div>
            </div>
            <ConfusionMatrix matrix={item.matrix} />
          </Card>
        ))}
      </div>
    </div>
  )
}