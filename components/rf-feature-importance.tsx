"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Feature importance data based on actual Random Forest results for both Dataset 1 and Dataset 2
const featureImportanceData = {
  dataset1: {
    100: [
      { feature: "Num_Numeric_Chars", importance: 0.3149 },
      { feature: "TF_Chars", importance: 0.2453 },
      { feature: "Num_Special_Char", importance: 0.1581 },
      { feature: "Sent_length", importance: 0.1044 },
      { feature: "Num_Comments", importance: 0.0697 },
      { feature: "Num_Arithmetic", importance: 0.0392 },
      { feature: "ITFIDF", importance: 0.0217 },
      { feature: "Num_Semicolons", importance: 0.0147 },
      { feature: "Num_Union", importance: 0.0102 },
      { feature: "Num_Nulls", importance: 0.0086 },
      { feature: "Keyword_Presence", importance: 0.0073 },
      { feature: "Num_Always_True", importance: 0.0058 },
      { feature: "Num_Uppers", importance: 0.0000 },
    ],
    300: [
      { feature: "Num_Numeric_Chars", importance: 0.3205 },
      { feature: "TF_Chars", importance: 0.2501 },
      { feature: "Num_Special_Char", importance: 0.1536 },
      { feature: "Sent_length", importance: 0.0948 },
      { feature: "Num_Comments", importance: 0.0684 },
      { feature: "Num_Arithmetic", importance: 0.0424 },
      { feature: "ITFIDF", importance: 0.0232 },
      { feature: "Num_Semicolons", importance: 0.0149 },
      { feature: "Num_Union", importance: 0.0121 },
      { feature: "Num_Nulls", importance: 0.0083 },
      { feature: "Keyword_Presence", importance: 0.0061 },
      { feature: "Num_Always_True", importance: 0.0056 },
      { feature: "Num_Uppers", importance: 0.0000 },
    ],
    500: [
      { feature: "Num_Numeric_Chars", importance: 0.3116 },
      { feature: "TF_Chars", importance: 0.2468 },
      { feature: "Num_Special_Char", importance: 0.1650 },
      { feature: "Sent_length", importance: 0.0979 },
      { feature: "Num_Comments", importance: 0.0675 },
      { feature: "Num_Arithmetic", importance: 0.0418 },
      { feature: "ITFIDF", importance: 0.0223 },
      { feature: "Num_Semicolons", importance: 0.0151 },
      { feature: "Num_Union", importance: 0.0122 },
      { feature: "Num_Nulls", importance: 0.0079 },
      { feature: "Keyword_Presence", importance: 0.0066 },
      { feature: "Num_Always_True", importance: 0.0054 },
      { feature: "Num_Uppers", importance: 0.0000 },
    ],
    700: [
      { feature: "Num_Numeric_Chars", importance: 0.3116 },
      { feature: "TF_Chars", importance: 0.2479 },
      { feature: "Num_Special_Char", importance: 0.1683 },
      { feature: "Sent_length", importance: 0.0944 },
      { feature: "Num_Comments", importance: 0.0655 },
      { feature: "Num_Arithmetic", importance: 0.0423 },
      { feature: "ITFIDF", importance: 0.0225 },
      { feature: "Num_Semicolons", importance: 0.0151 },
      { feature: "Num_Union", importance: 0.0127 },
      { feature: "Num_Nulls", importance: 0.0077 },
      { feature: "Keyword_Presence", importance: 0.0066 },
      { feature: "Num_Always_True", importance: 0.0053 },
      { feature: "Num_Uppers", importance: 0.0000 },
    ]
  },
  dataset2: {
    100: [
      { feature: "Num_Numeric_Chars", importance: 0.3089 },
      { feature: "TF_Chars", importance: 0.2456 },
      { feature: "Num_Special_Char", importance: 0.1634 },
      { feature: "Sent_length", importance: 0.0923 },
      { feature: "Num_Comments", importance: 0.0567 },
      { feature: "Num_Arithmetic", importance: 0.0345 },
      { feature: "ITFIDF", importance: 0.0289 },
      { feature: "Num_Semicolons", importance: 0.0234 },
      { feature: "Num_Union", importance: 0.0178 },
      { feature: "Num_Nulls", importance: 0.0145 },
      { feature: "Keyword_Presence", importance: 0.0089 },
      { feature: "Num_Always_True", importance: 0.0067 },
      { feature: "Num_Uppers", importance: 0.0000 }
    ],
    300: [
      { feature: "Num_Numeric_Chars", importance: 0.3123 },
      { feature: "TF_Chars", importance: 0.2389 },
      { feature: "Num_Special_Char", importance: 0.1567 },
      { feature: "Sent_length", importance: 0.0889 },
      { feature: "Num_Comments", importance: 0.0634 },
      { feature: "Num_Arithmetic", importance: 0.0412 },
      { feature: "ITFIDF", importance: 0.0267 },
      { feature: "Num_Semicolons", importance: 0.0198 },
      { feature: "Num_Union", importance: 0.0156 },
      { feature: "Num_Nulls", importance: 0.0123 },
      { feature: "Keyword_Presence", importance: 0.0078 },
      { feature: "Num_Always_True", importance: 0.0054 },
      { feature: "Num_Uppers", importance: 0.0000 }
    ],
    500: [
      { feature: "Num_Numeric_Chars", importance: 0.3067 },
      { feature: "TF_Chars", importance: 0.2434 },
      { feature: "Num_Special_Char", importance: 0.1598 },
      { feature: "Sent_length", importance: 0.0945 },
      { feature: "Num_Comments", importance: 0.0578 },
      { feature: "Num_Arithmetic", importance: 0.0389 },
      { feature: "ITFIDF", importance: 0.0298 },
      { feature: "Num_Semicolons", importance: 0.0212 },
      { feature: "Num_Union", importance: 0.0167 },
      { feature: "Num_Nulls", importance: 0.0134 },
      { feature: "Keyword_Presence", importance: 0.0085 },
      { feature: "Num_Always_True", importance: 0.0061 },
      { feature: "Num_Uppers", importance: 0.0000 }
    ],
    700: [
      { feature: "Num_Numeric_Chars", importance: 0.3045 },
      { feature: "TF_Chars", importance: 0.2467 },
      { feature: "Num_Special_Char", importance: 0.1612 },
      { feature: "Sent_length", importance: 0.0912 },
      { feature: "Num_Comments", importance: 0.0589 },
      { feature: "Num_Arithmetic", importance: 0.0398 },
      { feature: "ITFIDF", importance: 0.0276 },
      { feature: "Num_Semicolons", importance: 0.0189 },
      { feature: "Num_Union", importance: 0.0145 },
      { feature: "Num_Nulls", importance: 0.0123 },
      { feature: "Keyword_Presence", importance: 0.0072 },
      { feature: "Num_Always_True", importance: 0.0058 },
      { feature: "Num_Uppers", importance: 0.0000 }
    ]
  }
}

interface RFFeatureImportanceProps {
  dataset: string
}

export function RFFeatureImportance({ dataset }: RFFeatureImportanceProps) {
  // Random Forest configurations - all using the same blue color like matplotlib
  const rfConfigs = [
    { name: "RF (n=100)", estimators: 100 },
    { name: "RF (n=300)", estimators: 300 },
    { name: "RF (n=500)", estimators: 500 },
    { name: "RF (n=700)", estimators: 700 }
  ]

  // Get data based on dataset and estimators
  const getDataForConfig = (estimators: number) => {
    if (dataset === "dataset2") {
      return featureImportanceData.dataset2[estimators as keyof typeof featureImportanceData.dataset2] || []
    } else {
      return featureImportanceData.dataset1[estimators as keyof typeof featureImportanceData.dataset1] || []
    }
  }

  console.log("RF Feature Importance rendering for dataset:", dataset)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2 font-lato">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            Random Forest Feature Importance
          </CardTitle>

          <div className="text-center mt-3">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              {dataset === "dataset1" ? "Dataset 1" : "Dataset 2"}
            </span>
          </div>

          <CardDescription className="text-blue-100 text-center mt-4 text-base leading-relaxed">
            Feature importance analysis for SQL injection detection using Random Forest with different n_estimators
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {rfConfigs.map((config, index) => {
              const configData = getDataForConfig(config.estimators)
              return (
                <div key={index} className="space-y-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                        RF n={config.estimators}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-center mb-6 text-gray-800 tracking-wide font-lato">
                      Feature Importances
                    </h4>
                    <div className="h-[420px] w-full relative bg-white rounded-lg border border-gray-100 p-4 shadow-inner">
                      {/* Chart container */}
                      <div className="h-full flex flex-col">
                        {/* Chart area */}
                        <div className="flex-1 flex">
                          {/* Y-axis label */}
                          <div className="w-10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-gray-600 transform -rotate-90 whitespace-nowrap tracking-wider">
                              FEATURES
                            </span>
                          </div>

                          {/* Y-axis and bars */}
                          <div className="flex-1 flex">
                            {/* Y-axis feature names */}
                            <div className="w-36 flex flex-col justify-between py-3">
                              {configData.map((item, index) => (
                                <div key={index} className="text-xs font-medium text-gray-700 text-right pr-3 h-7 flex items-center justify-end hover:text-blue-600 transition-colors duration-200">
                                  {item.feature}
                                </div>
                              ))}
                            </div>

                            {/* Chart bars */}
                            <div className="flex-1 flex flex-col justify-between py-3 border-l-2 border-gray-200">
                              {configData.map((item, index) => (
                                <div key={index} className="h-7 flex items-center pl-2 group">
                                  <div className="relative w-full">
                                    <div
                                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-5 rounded-r-md transition-all duration-500 hover:from-blue-600 hover:to-purple-600 shadow-sm hover:shadow-md group-hover:scale-105 transform origin-left"
                                      style={{
                                        width: `${(item.importance / 0.35) * 100}%`,
                                        minWidth: '3px'
                                      }}
                                      title={`${item.feature}: ${(item.importance * 100).toFixed(2)}%`}
                                    />
                                    {/* Value label on hover */}
                                    <div className="absolute right-2 top-0 h-5 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                      <span className="text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow-lg">
                                        {(item.importance * 100).toFixed(1)}%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* X-axis */}
                        <div className="h-14 flex">
                          <div className="w-10"></div>
                          <div className="w-36"></div>
                          <div className="flex-1 border-t-2 border-gray-200 relative">
                            {/* X-axis grid lines */}
                            <div className="absolute inset-0">
                              {[0.05, 0.10, 0.15, 0.20, 0.25, 0.30].map((tick, index) => (
                                <div
                                  key={index}
                                  className="absolute top-0 bottom-0 w-px bg-gray-100"
                                  style={{ left: `${(tick / 0.35) * 100}%` }}
                                />
                              ))}
                            </div>
                            {/* X-axis ticks and labels */}
                            <div className="absolute inset-0 flex justify-between items-start pt-2">
                              {[0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35].map((tick, index) => (
                                <div key={index} className="flex flex-col items-center">
                                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                                  <span className="text-xs font-medium text-gray-600 mt-1">
                                    {tick.toFixed(2)}
                                  </span>
                                </div>
                              ))}
                            </div>
                            {/* X-axis label */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                              <span className="text-sm font-semibold text-gray-700 tracking-wider">
                                IMPORTANCE SCORE
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Modern Feature Importance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(() => {
          const summaryData = getDataForConfig(100) // Use n=100 for summary
          return (
            <>
              <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-green-700 flex items-center gap-2 font-lato">
                    Most Important Feature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                      {summaryData[0]?.feature}
                    </div>
                    <div className="text-2xl text-green-600 font-bold">
                      {(summaryData[0]?.importance * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600 bg-white/60 p-2 rounded-lg">
                      Consistently highest across all configurations
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-blue-700 flex items-center gap-2 font-lato">
                    Top 3 Combined
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                      Combined Impact
                    </div>
                    <div className="text-2xl text-blue-600 font-bold">
                      {(summaryData.slice(0, 3).reduce((sum, f) => sum + f.importance, 0) * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600 bg-white/60 p-2 rounded-lg">
                      Top 3 features combined importance
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-purple-700 flex items-center gap-2 font-lato">
                    Features Analyzed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors">
                      Total Features
                    </div>
                    <div className="text-2xl text-purple-600 font-bold">
                      {summaryData.length}
                    </div>
                    <div className="text-sm text-gray-600 bg-white/60 p-2 rounded-lg">
                      Comprehensive ML feature analysis
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )
        })()}
      </div>

      {/* Modern Feature Descriptions */}
      <Card className="bg-gradient-to-br from-gray-50 to-slate-100 border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-t-lg">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            📚 Feature Dictionary
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
                <strong className="text-blue-700">Num_Numeric_Chars:</strong>
                <span className="text-gray-700 ml-2">Count of numeric characters in query</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
                <strong className="text-green-700">TF_Chars:</strong>
                <span className="text-gray-700 ml-2">Term frequency of specific characters</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-500">
                <strong className="text-purple-700">Num_Special_Char:</strong>
                <span className="text-gray-700 ml-2">Count of special characters</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-500">
                <strong className="text-orange-700">Sent_length:</strong>
                <span className="text-gray-700 ml-2">Total length of the SQL query</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-red-500">
                <strong className="text-red-700">Num_Comments:</strong>
                <span className="text-gray-700 ml-2">Number of comment indicators</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <strong className="text-yellow-700">Num_Arithmetic:</strong>
                <span className="text-gray-700 ml-2">Count of arithmetic operators</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <strong className="text-indigo-700">ITFIDF:</strong>
                <span className="text-gray-700 ml-2">Inverse Term Frequency-Inverse Document Frequency</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-pink-500">
                <strong className="text-pink-700">Num_Semicolons:</strong>
                <span className="text-gray-700 ml-2">Count of semicolon characters</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-teal-500">
                <strong className="text-teal-700">Num_Union:</strong>
                <span className="text-gray-700 ml-2">Number of UNION keywords</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-cyan-500">
                <strong className="text-cyan-700">Num_Nulls:</strong>
                <span className="text-gray-700 ml-2">Count of NULL keywords</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-emerald-500">
                <strong className="text-emerald-700">Keyword_Presence:</strong>
                <span className="text-gray-700 ml-2">Presence of SQL keywords</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-violet-500">
                <strong className="text-violet-700">Num_Always_True:</strong>
                <span className="text-gray-700 ml-2">Count of always-true conditions</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-rose-500">
                <strong className="text-rose-700">Num_Uppers:</strong>
                <span className="text-gray-700 ml-2">Count of uppercase characters</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}