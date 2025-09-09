"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, ArrowRight, CheckCircle, Clock, Users, Shield, FileText, Eye, EyeOff } from "lucide-react"

export default function SchufaPage() {
  const [showProcessDetails, setShowProcessDetails] = useState(false)
  const [selectedExample, setSelectedExample] = useState<string | null>(null)

  const processSteps = [
    {
      id: "data-send",
      title: "Customer Data Transmission",
      description: "Address, birth date, and inquiry type sent to Schufa via PCO",
      details:
        "PCO formats the request with customer demographics and specific inquiry parameters based on SDS table logic.",
      status: "automatic",
    },
    {
      id: "address-check",
      title: "Address Matching & Validation",
      description: "Schufa checks for address changes and combines historical data",
      details: "If customer has moved, Schufa combines old and new addresses to provide comprehensive credit history.",
      status: "automatic",
    },
    {
      id: "fraud-check",
      title: "Fraud List Verification",
      description: "Automatic check against fraud databases",
      details: "If fraud match found, Fraud department receives email notification for manual review in Fraudpool 2.0.",
      status: "conditional",
    },
    {
      id: "response",
      title: "Credit Information Response",
      description: "Immediate response or manual processing trigger",
      details:
        "Most cases receive immediate response. Complex cases (multiple matches) trigger 3-5 minute manual review.",
      status: "variable",
    },
  ]

  const exampleScenarios = [
    {
      id: "clean-customer",
      title: "Clean Credit Customer",
      description: "Existing customer with good payment history",
      outcome: "Immediate positive response",
      processingTime: "< 1 second",
      riskLevel: "low",
    },
    {
      id: "address-change",
      title: "Recent Address Change",
      description: "Customer moved within last 6 months",
      outcome: "Address validation and history combination",
      processingTime: "1-2 seconds",
      riskLevel: "low",
    },
    {
      id: "multiple-matches",
      title: "Multiple Name Matches",
      description: "Father and son with same name scenario",
      outcome: "Manual review required",
      processingTime: "3-5 minutes",
      riskLevel: "medium",
    },
    {
      id: "fraud-hit",
      title: "Fraud List Match",
      description: "Customer appears on fraud database",
      outcome: "Fraud team notification and review",
      processingTime: "Manual review",
      riskLevel: "high",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-50 rounded-lg">
              <Database className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Schufa</h1>
              <p className="text-xl text-muted-foreground">German Credit Bureau</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Schufa provides personal credit information and fraud detection services for individual customers across
            Germany. It serves as the primary source for personal credit assessment in our decision process.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="process">Process Flow</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
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
                      <Database className="h-5 w-5" />
                      Schufa Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Schufa (Schutzgemeinschaft für allgemeine Kreditsicherung) is Germany's leading credit bureau,
                      providing comprehensive credit information for individuals. Our integration enables real-time
                      credit assessment and fraud detection.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Primary Data</h4>
                        <p className="text-sm text-emerald-800">
                          Personal credit history, payment behavior, and creditworthiness indicators
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Fraud Protection</h4>
                        <p className="text-sm text-blue-800">
                          Automated fraud list checking and identity verification services
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Key Features & Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Real-time Credit Scoring</h4>
                            <p className="text-sm text-muted-foreground">
                              Instant credit assessment based on comprehensive payment history
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Fraud Detection</h4>
                            <p className="text-sm text-muted-foreground">
                              Automatic checking against fraud databases and suspicious activity lists
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Database className="h-5 w-5 text-purple-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Address Validation</h4>
                            <p className="text-sm text-muted-foreground">
                              Historical address matching and validation for identity verification
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-amber-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Immediate Response</h4>
                            <p className="text-sm text-muted-foreground">
                              Most inquiries processed instantly with sub-second response times
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-orange-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Manual Review Capability</h4>
                            <p className="text-sm text-muted-foreground">
                              Complex cases automatically escalated for human review when needed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-teal-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Comprehensive Reporting</h4>
                            <p className="text-sm text-muted-foreground">
                              Detailed credit reports with scoring rationale and risk indicators
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
                      <Badge variant="secondary">Personal Credit</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <Badge className="bg-green-100 text-green-800">&lt; 1 second</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Coverage</span>
                      <Badge variant="outline">Germany</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Integration</span>
                      <Badge className="bg-purple-100 text-purple-800">PCO</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Types */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Data Provided</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Credit Score</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Payment History</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Address History</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Fraud Indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Identity Verification</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Schufa Process Flow
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setShowProcessDetails(!showProcessDetails)}>
                    {showProcessDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showProcessDetails ? "Hide Details" : "Show Details"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <Card className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-lg font-semibold">{step.title}</h4>
                                <p className="text-muted-foreground">{step.description}</p>
                              </div>
                              <Badge
                                variant={
                                  step.status === "automatic"
                                    ? "default"
                                    : step.status === "conditional"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {step.status}
                              </Badge>
                            </div>
                            {showProcessDetails && (
                              <div className="mt-3 p-3 bg-muted rounded-lg">
                                <p className="text-sm">{step.details}</p>
                              </div>
                            )}
                          </Card>
                        </div>
                      </div>
                      {index < processSteps.length - 1 && (
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

          <TabsContent value="scenarios" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Example Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exampleScenarios.map((scenario) => (
                    <Card
                      key={scenario.id}
                      className={`cursor-pointer transition-all ${
                        selectedExample === scenario.id ? "ring-2 ring-primary" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedExample(selectedExample === scenario.id ? null : scenario.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{scenario.title}</h4>
                          <Badge
                            variant={
                              scenario.riskLevel === "low"
                                ? "default"
                                : scenario.riskLevel === "medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {scenario.riskLevel} risk
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{scenario.description}</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Outcome:</span>
                            <span className="font-medium">{scenario.outcome}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Processing:</span>
                            <span className="font-medium">{scenario.processingTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {selectedExample && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Scenario Details</h4>
                      <p className="text-sm text-blue-800">
                        {selectedExample === "clean-customer" &&
                          "This represents the ideal scenario where a customer has an established credit history with Schufa, no negative indicators, and current address information. The system processes these requests immediately with minimal validation required."}
                        {selectedExample === "address-change" &&
                          "When customers have recently moved, Schufa's address matching algorithm combines historical and current address data to maintain credit history continuity. This ensures accurate assessment despite address changes."}
                        {selectedExample === "multiple-matches" &&
                          "Common in cases where family members share names (father/son scenarios). Schufa's manual review process uses additional demographic data to ensure correct customer identification before providing credit information."}
                        {selectedExample === "fraud-hit" &&
                          "When a customer matches fraud database entries, the system immediately flags the case and notifies our fraud team. Manual review in Fraudpool 2.0 determines if it's a false positive or legitimate concern."}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integration" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Technical Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">PCO Interface</h4>
                      <p className="text-sm text-purple-800">
                        All Schufa communications routed through PCO system for standardized processing and response
                        handling.
                      </p>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-2">SDS Logic Table</h4>
                      <p className="text-sm text-emerald-800">
                        SDS determines inquiry types (financing, leasing, private, commercial) based on application
                        characteristics.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">Response Processing</h4>
                      <p className="text-sm text-amber-800">
                        Automated processing of standard responses with manual escalation for complex cases requiring
                        human review.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Fraud Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Fraudpool 2.0</h4>
                      <p className="text-sm text-red-800">
                        Dedicated fraud review system where specialists manually assess flagged cases and determine
                        appropriate actions.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Email Notifications</h4>
                      <p className="text-sm text-blue-800">
                        Automatic alerts sent to fraud department when Schufa identifies potential fraud matches
                        requiring investigation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Re-inquiry Process</h4>
                      <p className="text-sm text-green-800">
                        After fraud review clearance, applications can be resubmitted to Schufa for standard processing.
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
