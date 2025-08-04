import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Info } from "lucide-react"

export function QuickInsights() {
  const insights = [
    {
      type: "success",
      icon: CheckCircle,
      title: "Best Performer",
      message: "SVM with Polynomial kernel achieved 99.78% accuracy on Dataset 2",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Performance Variation",
      message: "KNN shows significant performance difference between datasets",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      type: "info",
      icon: Info,
      title: "Large Scale Analysis",
      message: "44,645 total samples analyzed across both datasets for robust results",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ]

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg">
            <Info className="h-4 w-4 text-white" />
          </div>
          Key Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon
            return (
              <div key={index} className={`p-4 rounded-lg border-2 ${insight.bgColor} ${insight.borderColor}`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${insight.bgColor}`}>
                    <IconComponent className={`h-4 w-4 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm ${insight.color} mb-1`}>{insight.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{insight.message}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}