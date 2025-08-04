import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export function CompactHeader() {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SQL Injection Detection</h1>
              <p className="text-sm opacity-90">Machine Learning Analysis Results</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-white/20 text-white">99.78% Best</Badge>
            <Badge className="bg-white/20 text-white">3 Algorithms</Badge>
            <Badge className="bg-white/20 text-white">44K+ Samples</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}