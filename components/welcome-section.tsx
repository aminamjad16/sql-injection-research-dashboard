import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Users } from "lucide-react"

export function WelcomeSection() {
  return (
    <div className="text-center space-y-6">
      {/* Main Title */}
      <div className="space-y-4">
        <div className="flex justify-center">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
            🛡️ Cybersecurity Research
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
          SQL Injection Detection
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Advanced machine learning analysis for detecting SQL injection attacks with high accuracy and reliability
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-green-500 rounded-full">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-700">99.78%</div>
            <div className="text-sm text-green-600 font-medium">Best Accuracy Achieved</div>
            <div className="text-xs text-slate-500 mt-1">SVM Polynomial Kernel</div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-sky-50">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-700">3</div>
            <div className="text-sm text-blue-600 font-medium">AI Algorithms Tested</div>
            <div className="text-xs text-slate-500 mt-1">Random Forest, SVM, KNN</div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-700">44.6K</div>
            <div className="text-sm text-purple-600 font-medium">Total Samples</div>
            <div className="text-xs text-slate-500 mt-1">Across 2 Datasets</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}