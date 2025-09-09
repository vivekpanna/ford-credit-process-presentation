"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GitBranch,
  Building2,
  FileText,
  Target,
  Shield,
  Database,
  CreditCard,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  AlertTriangle,
  Users,
  Play,
  RotateCcw,
} from "lucide-react"

export default function ProcessFlowPage() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentAnimationStep, setCurrentAnimationStep] = useState(0)

  const SimplifiedWorkflow = () => {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            Simplified Credit Process Workflow
          </CardTitle>
          <p className="text-muted-foreground">
            High-level overview of the credit decision process from application to final outcome
          </p>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Main workflow container */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
              {/* Step 1: Application */}
              <div className="flex flex-col items-center text-center min-w-[140px]">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Application</h3>
                <p className="text-xs text-muted-foreground mb-2">Dealer submits via ESMO</p>
                <Badge variant="secondary" className="text-xs">
                  Start
                </Badge>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground hidden lg:block" />
              <ArrowDown className="h-6 w-6 text-muted-foreground lg:hidden" />

              {/* Step 2: Validation */}
              <div className="flex flex-col items-center text-center min-w-[140px]">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Validation</h3>
                <p className="text-xs text-muted-foreground mb-2">LPS checks & enriches data</p>
                <Badge variant="secondary" className="text-xs">
                  1-2 sec
                </Badge>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground hidden lg:block" />
              <ArrowDown className="h-6 w-6 text-muted-foreground lg:hidden" />

              {/* Step 3: Credit Check */}
              <div className="flex flex-col items-center text-center min-w-[140px]">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Credit Check</h3>
                <p className="text-xs text-muted-foreground mb-2">PCO queries bureaus</p>
                <Badge variant="secondary" className="text-xs">
                  2-5 sec
                </Badge>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground hidden lg:block" />
              <ArrowDown className="h-6 w-6 text-muted-foreground lg:hidden" />

              {/* Step 4: Risk Assessment */}
              <div className="flex flex-col items-center text-center min-w-[140px]">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Risk Assessment</h3>
                <p className="text-xs text-muted-foreground mb-2">SDS evaluates & scores</p>
                <Badge variant="secondary" className="text-xs">
                  1 sec
                </Badge>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground hidden lg:block" />
              <ArrowDown className="h-6 w-6 text-muted-foreground lg:hidden" />

              {/* Step 5: Decision */}
              <div className="flex flex-col items-center text-center min-w-[140px]">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Decision</h3>
                <p className="text-xs text-muted-foreground mb-2">Final outcome</p>
                <Badge variant="secondary" className="text-xs">
                  End
                </Badge>
              </div>
            </div>

            {/* Decision outcomes */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800">Approved</h4>
                  <p className="text-sm text-green-700">60-70% of cases</p>
                  <p className="text-xs text-green-600">Automatic processing</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <Users className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800">Manual Review</h4>
                  <p className="text-sm text-amber-700">20-25% of cases</p>
                  <p className="text-xs text-amber-600">Human assessment</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800">Declined</h4>
                  <p className="text-sm text-red-700">10-15% of cases</p>
                  <p className="text-xs text-red-600">Policy violation</p>
                </div>
              </div>
            </div>

            {/* Key systems involved */}
            <div className="mt-8 p-4 bg-slate-50 rounded-lg">
              <h4 className="font-semibold mb-3 text-center">Key Systems Involved</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  ESMO (Dealer System)
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  LPS (Processing)
                </Badge>
                <Badge variant="outline" className="bg-purple-100 text-purple-800">
                  PCO (Credit Bureau)
                </Badge>
                <Badge variant="outline" className="bg-orange-100 text-orange-800">
                  SDS (Decision Engine)
                </Badge>
                <Badge variant="outline" className="bg-teal-100 text-teal-800">
                  Schufa (Personal Credit)
                </Badge>
                <Badge variant="outline" className="bg-amber-100 text-amber-800">
                  Creditreform (Commercial)
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const processSteps = [
    {
      id: 1,
      title: "Application Submission",
      system: "ESMO",
      icon: Building2,
      description: "Dealer submits credit application with customer information",
      details: "Dealer enters customer data, financing details, and submits through ESMO interface",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      systemColor: "bg-blue-500",
      duration: "Immediate",
      nextStep: "Data validation and customer lookup",
    },
    {
      id: 2,
      title: "Initial Validation",
      system: "LPS",
      icon: FileText,
      description: "LPS validates application data and performs customer verification",
      details: "Checks existing customer records, enriches data with Grifo numbers, validates completeness",
      color: "bg-green-50 border-green-200 text-green-800",
      systemColor: "bg-green-500",
      duration: "1-2 seconds",
      nextStep: "Forward enriched data to PCO",
    },
    {
      id: 3,
      title: "Credit Bureau Query",
      system: "PCO",
      icon: Target,
      description: "PCO retrieves data from Schufa and/or Creditreform",
      details: "Formats bureau requests, handles responses, applies referral rules, calculates commercial scorecard",
      color: "bg-purple-50 border-purple-200 text-purple-800",
      systemColor: "bg-purple-500",
      duration: "2-5 seconds",
      nextStep: "Risk assessment and scoring",
    },
    {
      id: 4,
      title: "Risk Assessment",
      system: "SDS",
      icon: Shield,
      description: "SDS evaluates risk and makes credit decision",
      details: "Applies scoring models, evaluates bureau data, determines approval/referral/decline",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      systemColor: "bg-orange-500",
      duration: "1 second",
      nextStep: "Return decision to LPS",
    },
    {
      id: 5,
      title: "Decision Processing",
      system: "LPS",
      icon: FileText,
      description: "LPS processes final decision and communicates result",
      details: "Handles approval processing, contract generation, or referral routing",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
      systemColor: "bg-emerald-500",
      duration: "1-2 seconds",
      nextStep: "Customer notification",
    },
  ]

  const decisionOutcomes = [
    {
      type: "approved",
      title: "Automatic Approval",
      description: "Low risk, clean credit history",
      icon: CheckCircle,
      color: "text-green-600 bg-green-50 border-green-200",
      percentage: "60-70%",
      nextSteps: ["Contract generation", "Funding approval", "Customer notification"],
    },
    {
      type: "referred",
      title: "Manual Review",
      description: "Requires human assessment",
      icon: Users,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      percentage: "20-25%",
      nextSteps: ["Underwriter review", "Additional documentation", "Manual decision"],
    },
    {
      type: "declined",
      title: "Automatic Decline",
      description: "High risk or policy violation",
      icon: AlertTriangle,
      color: "text-red-600 bg-red-50 border-red-200",
      percentage: "10-15%",
      nextSteps: ["Decline notification", "Reason communication", "Appeal process"],
    },
  ]

  const bureauDetails = [
    {
      name: "Schufa",
      icon: Database,
      type: "Personal Credit",
      color: "bg-emerald-500",
      usedFor: ["Individual customers", "Personal guarantors", "Fraud checking"],
      dataPoints: ["Credit score", "Payment history", "Address validation", "Fraud indicators"],
      processingTime: "< 1 second (immediate) or 3-5 minutes (manual review)",
    },
    {
      name: "Creditreform",
      icon: CreditCard,
      type: "Commercial Credit",
      color: "bg-amber-500",
      usedFor: ["Business customers", "Company verification", "Financial capacity"],
      dataPoints: ["POP score", "Company age", "Industry risk", "Payment behavior", "Beneficial owners"],
      processingTime: "2-5 seconds (automatic) or manual for complex ownership",
    },
  ]

  const startAnimation = () => {
    setIsAnimating(true)
    setCurrentAnimationStep(0)

    const interval = setInterval(() => {
      setCurrentAnimationStep((prev) => {
        if (prev >= processSteps.length - 1) {
          setIsAnimating(false)
          clearInterval(interval)
          return 0
        }
        return prev + 1
      })
    }, 2000)
  }

  const resetAnimation = () => {
    setIsAnimating(false)
    setCurrentAnimationStep(0)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GitBranch className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Process Flow Visualization</h1>
              <p className="text-xl text-muted-foreground">End-to-End Credit Decision Workflow</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Interactive visualization of the complete credit processing workflow, from application submission through
            final decision. Explore each step, understand system interactions, and see how decisions are made.
          </p>
        </div>

        <SimplifiedWorkflow />

        <Tabs defaultValue="flow" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="flow">Interactive Flow</TabsTrigger>
            <TabsTrigger value="systems">System Details</TabsTrigger>
            <TabsTrigger value="bureaus">Credit Bureaus</TabsTrigger>
            <TabsTrigger value="decisions">Decision Logic</TabsTrigger>
          </TabsList>

          <TabsContent value="flow" className="space-y-8">
            {/* Animation Controls */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Process Animation
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={startAnimation} disabled={isAnimating}>
                      <Play className="h-4 w-4 mr-2" />
                      Start Animation
                    </Button>
                    <Button variant="outline" size="sm" onClick={resetAnimation}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Click "Start Animation" to see the credit application flow through each system step by step.
                </p>
              </CardContent>
            </Card>

            {/* Main Process Flow */}
            <Card>
              <CardHeader>
                <CardTitle>Credit Processing Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div
                        className={`transition-all duration-500 ${
                          isAnimating && currentAnimationStep === index
                            ? "scale-105 shadow-lg"
                            : isAnimating && currentAnimationStep > index
                              ? "opacity-75"
                              : ""
                        }`}
                      >
                        <Card
                          className={`cursor-pointer transition-all ${
                            selectedStep === step.id ? "ring-2 ring-primary" : "hover:shadow-md"
                          } ${step.color}`}
                          onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div
                                  className={`w-12 h-12 ${step.systemColor} text-white rounded-full flex items-center justify-center font-bold text-lg`}
                                >
                                  {step.id}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <step.icon className="h-6 w-6" />
                                  <h3 className="text-xl font-semibold">{step.title}</h3>
                                  <Badge variant="outline">{step.system}</Badge>
                                  <Badge variant="secondary">{step.duration}</Badge>
                                </div>
                                <p className="text-muted-foreground mb-3">{step.description}</p>

                                {selectedStep === step.id && (
                                  <div className="mt-4 p-4 bg-white/50 rounded-lg border">
                                    <h4 className="font-semibold mb-2">Detailed Process</h4>
                                    <p className="text-sm text-muted-foreground mb-3">{step.details}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                      <ArrowRight className="h-4 w-4 text-primary" />
                                      <span className="font-medium">Next: {step.nextStep}</span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {isAnimating && currentAnimationStep === index && (
                                <div className="flex-shrink-0">
                                  <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {index < processSteps.length - 1 && (
                        <div className="flex justify-center my-4">
                          <ArrowDown
                            className={`h-8 w-8 transition-colors ${
                              isAnimating && currentAnimationStep > index ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Decision Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  Possible Decision Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {decisionOutcomes.map((outcome) => (
                    <Card key={outcome.type} className={`${outcome.color} border-2`}>
                      <CardContent className="p-6 text-center">
                        <outcome.icon className={`h-12 w-12 mx-auto mb-4 ${outcome.color.split(" ")[0]}`} />
                        <h3 className="text-lg font-semibold mb-2">{outcome.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{outcome.description}</p>
                        <Badge variant="outline" className="mb-4">
                          {outcome.percentage} of cases
                        </Badge>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Next Steps:</h4>
                          {outcome.nextSteps.map((step, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="systems" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {processSteps.map((step) => (
                <Card key={step.id} className={step.color}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <step.icon className="h-6 w-6" />
                      {step.system}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Primary Function</h4>
                      <p className="text-sm">{step.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Process Details</h4>
                      <p className="text-sm">{step.details}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Processing Time:</span>
                      <Badge variant="secondary">{step.duration}</Badge>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/systems/${step.system.toLowerCase()}`}>
                          Learn More <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bureaus" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {bureauDetails.map((bureau) => (
                <Card key={bureau.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 ${bureau.color} text-white rounded-lg`}>
                        <bureau.icon className="h-6 w-6" />
                      </div>
                      {bureau.name}
                      <Badge variant="outline">{bureau.type}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Used For</h4>
                      <div className="space-y-1">
                        {bureau.usedFor.map((use, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Data Points</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {bureau.dataPoints.map((point, index) => (
                          <div key={index} className="text-xs bg-muted p-2 rounded">
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Processing Time</h4>
                      <p className="text-sm text-muted-foreground">{bureau.processingTime}</p>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/bureaus/${bureau.name.toLowerCase()}`}>
                          Explore {bureau.name} <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="decisions" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Decision Logic Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-600">Automatic Approval Criteria</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">High credit scores (Schufa/POP)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Clean payment history</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Existing customer with good record</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Low-risk industry/profile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">No referral rule triggers</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-600">Manual Referral Triggers</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Blacklist matches (sanctions, AML)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Missing Schufa agreements</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Negative credit indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Data quality issues</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Complex ownership structures</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Rule Management</h4>
                  <p className="text-sm text-blue-800">
                    Decision rules are managed in both PCO and LPS systems, with plans for future consolidation. Rules
                    are documented in Excel lists accessible through the document management system (SFO) and updated
                    only when business processes change.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
