"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CreditCard,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Calculator,
  FileText,
  TrendingUp,
  BarChart3,
} from "lucide-react"

export default function CreditreformPage() {
  const [selectedVariable, setSelectedVariable] = useState<string | null>(null)
  const [showCalculation, setShowCalculation] = useState(false)

  const scorecardVariables = [
    {
      id: "inquiry-counter",
      name: "Inquiry Counter (12 months)",
      description: "Number of bank inquiries in the last 12 months",
      impact: "High inquiry count may indicate multiple rejections",
      weight: "High",
      example: "0-2 inquiries = Good, 5+ inquiries = Risk",
    },
    {
      id: "industry-code",
      name: "Industry Code",
      description: "Business sector classification",
      impact: "Different industries have varying risk profiles",
      weight: "Medium",
      example: "Technology = Lower risk, Construction = Higher risk",
    },
    {
      id: "company-age",
      name: "Company Age",
      description: "Years and months since company establishment",
      impact: "Older companies generally show more stability",
      weight: "Medium",
      example: "< 2 years = High risk, > 10 years = Lower risk",
    },
    {
      id: "credit-rating",
      name: "Credit Rating Index",
      description: "Creditreform's internal rating (100-600 scale)",
      impact: "Direct indicator of creditworthiness",
      weight: "Very High",
      example: "100-200 = Excellent, 500-600 = Poor",
    },
    {
      id: "payment-behavior",
      name: "Payment Behavior",
      description: "Historical payment patterns and timeliness",
      impact: "Past payment behavior predicts future performance",
      weight: "High",
      example: "Always on time = Good, Frequent delays = Risk",
    },
    {
      id: "balance-sheet",
      name: "Balance Sheet Total",
      description: "Company's total assets and financial size",
      impact: "Larger companies may have more financial stability",
      weight: "Medium",
      example: "€1M+ = Stable, < €100K = Higher risk",
    },
  ]

  const processFlow = [
    {
      step: 1,
      title: "Company Data Submission",
      description: "Basic company information sent to Creditreform",
      status: "automatic",
    },
    {
      step: 2,
      title: "Hit List Generation",
      description: "Creditreform returns list of potential company matches",
      status: "automatic",
    },
    {
      step: 3,
      title: "Company Selection",
      description: "Correct company selected from hit list (manual for new customers)",
      status: "conditional",
    },
    {
      step: 4,
      title: "Beneficial Owner Check",
      description: "Verification of company ownership structure",
      status: "conditional",
    },
    {
      step: 5,
      title: "DSCA Assessment",
      description: "Debt Service Coverage Analysis performed",
      status: "automatic",
    },
    {
      step: 6,
      title: "Final Report",
      description: "Complete commercial credit assessment delivered",
      status: "automatic",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-amber-50 rounded-lg">
              <CreditCard className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Creditreform</h1>
              <p className="text-xl text-muted-foreground">Commercial Credit Information</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Creditreform provides comprehensive commercial credit assessment for business customers, including company
            verification, beneficial ownership analysis, and financial capacity evaluation.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* System Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Creditreform Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Creditreform is a leading commercial credit bureau providing comprehensive business credit
                      information, company verification, and financial assessment services for B2B credit decisions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-amber-50 rounded-lg">
                        <h4 className="font-semibold text-amber-900 mb-2">Commercial Focus</h4>
                        <p className="text-sm text-amber-800">
                          Specialized in business credit assessment and company financial analysis
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Comprehensive Data</h4>
                        <p className="text-sm text-blue-800">
                          Company structure, financial capacity, and payment behavior analysis
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Services */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Key Services & Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Building2 className="h-5 w-5 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Company Verification</h4>
                            <p className="text-sm text-muted-foreground">
                              Accurate company identification and business registration validation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-green-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Beneficial Ownership</h4>
                            <p className="text-sm text-muted-foreground">
                              Identification and verification of ultimate beneficial owners
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calculator className="h-5 w-5 text-purple-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Financial Capacity (DSCA)</h4>
                            <p className="text-sm text-muted-foreground">
                              Debt Service Coverage Analysis based on financial statements
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-emerald-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Commercial Scorecard</h4>
                            <p className="text-sm text-muted-foreground">
                              POP (Probability of Payment) calculation using 6 key variables
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <BarChart3 className="h-5 w-5 text-orange-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Industry Analysis</h4>
                            <p className="text-sm text-muted-foreground">
                              Sector-specific risk assessment and benchmarking
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-teal-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Payment Behavior</h4>
                            <p className="text-sm text-muted-foreground">
                              Historical payment patterns and creditworthiness indicators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Bureau Type</span>
                      <Badge variant="secondary">Commercial Credit</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Primary Output</span>
                      <Badge className="bg-amber-100 text-amber-800">POP Score</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Variables</span>
                      <Badge variant="outline">6 Factors</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Integration</span>
                      <Badge className="bg-purple-100 text-purple-800">PCO</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Assessment Types */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Assessment Types</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Company Identification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Credit Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Payment History</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Financial Capacity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Ownership Structure</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scorecard" className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Commercial Scorecard Variables
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setShowCalculation(!showCalculation)}>
                    {showCalculation ? "Hide" : "Show"} Calculation
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {scorecardVariables.map((variable) => (
                    <Card
                      key={variable.id}
                      className={`cursor-pointer transition-all ${
                        selectedVariable === variable.id ? "ring-2 ring-primary" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedVariable(selectedVariable === variable.id ? null : variable.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm">{variable.name}</h4>
                          <Badge
                            variant={
                              variable.weight === "Very High"
                                ? "default"
                                : variable.weight === "High"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {variable.weight}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{variable.description}</p>
                        <p className="text-xs text-blue-600">{variable.example}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {selectedVariable && (
                  <Card className="bg-blue-50 border-blue-200 mb-6">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Variable Impact</h4>
                      <p className="text-sm text-blue-800">
                        {scorecardVariables.find((v) => v.id === selectedVariable)?.impact}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {showCalculation && (
                  <Card className="bg-emerald-50 border-emerald-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-emerald-900">POP Calculation Formula</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-white rounded-lg border">
                        <h4 className="font-semibold mb-2">Step 1: Variable Scoring</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Each variable receives points based on predefined criteria and risk levels.
                        </p>
                        <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                          Total Score = Sum of all variable points
                        </div>
                      </div>
                      <div className="p-4 bg-white rounded-lg border">
                        <h4 className="font-semibold mb-2">Step 2: POP Conversion</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Total score converted to Probability of Payment using Alpha and Beta coefficients.
                        </p>
                        <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                          POP = Alpha + (Beta × Total Score)
                        </div>
                      </div>
                      <div className="p-4 bg-emerald-100 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Result Interpretation</h4>
                        <p className="text-sm text-emerald-800">
                          POP represents the probability that a customer will repay the credit over the entire contract
                          term. Higher POP values indicate lower risk and higher likelihood of successful repayment.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Creditreform Process Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {processFlow.map((step, index) => (
                    <div key={step.step} className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <Card className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="text-lg font-semibold">{step.title}</h4>
                                <p className="text-muted-foreground">{step.description}</p>
                              </div>
                              <Badge variant={step.status === "automatic" ? "default" : "secondary"}>
                                {step.status}
                              </Badge>
                            </div>
                            <Progress value={(step.step / processFlow.length) * 100} className="mt-3" />
                          </Card>
                        </div>
                      </div>
                      {index < processFlow.length - 1 && (
                        <div className="flex justify-start ml-5 mt-2">
                          <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integration" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Technical Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">PCO Processing</h4>
                      <p className="text-sm text-purple-800">
                        All Creditreform interactions managed through PCO system with automated request formatting and
                        response processing.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">Manual Fallback</h4>
                      <p className="text-sm text-amber-800">
                        Excel-based scorecard available for testing and system failure scenarios, maintaining identical
                        calculation logic.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">System Limitations</h4>
                      <p className="text-sm text-red-800">
                        Complex ownership structures may require manual processing when beneficial owner verification
                        fails.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Manual Processing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Beneficial Owner Tasks</h4>
                      <p className="text-sm text-blue-800">
                        When ownership cannot be automatically determined, manual tasks are created in the Crefo system
                        for human verification.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">DSCA Processing</h4>
                      <p className="text-sm text-green-800">
                        Debt Service Coverage Analysis performed automatically after complete company information is
                        obtained.
                      </p>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-2">Final Assessment</h4>
                      <p className="text-sm text-emerald-800">
                        Complete commercial scorecard calculated and forwarded to SDS for final credit decision
                        processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
