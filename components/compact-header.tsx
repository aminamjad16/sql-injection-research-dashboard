import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export function CompactHeader() {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold">
                <span className="hidden sm:inline">SQL Injection Detection</span>
                <span className="sm:hidden">SQL Detection</span>
              </h1>
              <p className="text-xs sm:text-sm opacity-90">
                <span className="hidden sm:inline">Machine Learning Analysis Results</span>
                <span className="sm:hidden">ML Analysis</span>
              </p>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-2">
            <Badge className="bg-white/20 text-white text-xs px-2 py-1">
              <span className="hidden sm:inline">99.78% Best</span>
              <span className="sm:hidden">99.78%</span>
            </Badge>
            <Badge className="bg-white/20 text-white text-xs px-2 py-1 hidden sm:inline-flex">3 Algorithms</Badge>
            <Badge className="bg-white/20 text-white text-xs px-2 py-1 hidden md:inline-flex">44K+ Samples</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}