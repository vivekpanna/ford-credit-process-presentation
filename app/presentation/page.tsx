"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Clock,
  Database,
  Shield,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight,
  ArrowDown,
} from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Credit Process Overview",
    subtitle: "Understanding Ford Credit's German Operations",
    type: "title",
    content: {
      overview: "Comprehensive learning presentation for Product Management teams in UK and Germany",
      objectives: [
        "Understand the complete credit decision workflow",
        "Learn about system integrations and data flows",
        "Explore risk assessment and scoring mechanisms",
        "Review reporting and analytics capabilities",
      ],
    },
  },
  {
    id: 2,
    title: "Process Workflow Overview",
    subtitle: "End-to-End Credit Decision Journey",
    type: "workflow",
    content: {
      steps: [
        {
          name: "Application",
          system: "ESMO",
          time: "0-1s",
          description: "Dealer submits application via ESMO system",
        },
        { name: "Validation", system: "LPS", time: "1-2s", description: "Data validation and customer verification" },
        { name: "Credit Check", system: "PCO", time: "2-4s", description: "Bureau queries and scorecard calculation" },
        { name: "Risk Assessment", system: "SDS", time: "4-6s", description: "Final scoring and decision logic" },
        { name: "Decision", system: "LPS", time: "6-8s", description: "Approval, decline, or manual review" },
      ],
      outcomes: {
        approved: "60-70%",
        manual: "20-25%",
        declined: "10-15%",
      },
    },
  },
  {
    id: 3,
    title: "System Architecture",
    subtitle: "Core Systems and Integration Points",
    type: "architecture",
    content: {
      systems: [
        {
          name: "ESMO",
          role: "Dealer System",
          description: "Application entry point and dealer interface",
          features: ["Application capture", "Dealer authentication", "Document management", "Status tracking"],
        },
        {
          name: "LPS",
          role: "Loan Processing System",
          description: "Central processing hub and orchestration",
          features: ["Data validation", "Customer verification", "Process coordination", "Decision routing"],
        },
        {
          name: "PCO",
          role: "Power Curve Origination",
          description: "Credit bureau integration and scoring",
          features: ["Bureau queries", "Scorecard calculation", "Risk indicators", "Data enrichment"],
        },
        {
          name: "SDS",
          role: "Scoring & Decision System",
          description: "Final risk assessment and decision engine",
          features: ["Decision logic", "Referral rules", "Risk scoring", "Approval criteria"],
        },
      ],
    },
  },
  {
    id: 4,
    title: "ESMO - Dealer System",
    subtitle: "Application Entry and Dealer Interface",
    type: "system-detail",
    content: {
      system: "ESMO",
      role: "Primary application entry point for dealers",
      keyFeatures: [
        "Secure dealer authentication and authorization",
        "Application form with validation and error handling",
        "Document upload and management capabilities",
        "Real-time status tracking and notifications",
      ],
      dataFlow: [
        "Dealer logs into ESMO portal",
        "Customer application data entered",
        "Documents uploaded and validated",
        "Application submitted to LPS for processing",
      ],
      integrations: ["LPS (application submission)", "Document management system", "Dealer authentication service"],
    },
  },
  {
    id: 5,
    title: "LPS - Loan Processing System",
    subtitle: "Central Processing Hub and Orchestration",
    type: "system-detail",
    content: {
      system: "LPS",
      role: "Central orchestration system coordinating the entire credit process",
      keyFeatures: [
        "Data validation and completeness checks",
        "Customer identity verification",
        "Process workflow coordination",
        "Decision routing and status management",
      ],
      dataFlow: [
        "Receives application from ESMO",
        "Validates data quality and completeness",
        "Coordinates with PCO for credit checks",
        "Routes to SDS for final decision",
        "Returns decision to dealer via ESMO",
      ],
      integrations: ["ESMO", "PCO", "SDS", "LA (contracts)", "MIS (reporting)"],
    },
  },
  {
    id: 6,
    title: "PCO - Power Curve Origination",
    subtitle: "Credit Bureau Integration and Scoring",
    type: "system-detail",
    content: {
      system: "PCO",
      role: "Credit bureau interface and scorecard calculation engine",
      keyFeatures: [
        "Real-time credit bureau queries",
        "Scorecard calculation and risk assessment",
        "Fraud detection and prevention",
        "Data enrichment and validation",
      ],
      dataFlow: [
        "Receives customer data from LPS",
        "Queries Schufa and Creditreform bureaus",
        "Calculates commercial and personal scorecards",
        "Returns enriched data and scores to SDS",
      ],
      integrations: ["Schufa (personal credit)", "Creditreform (commercial)", "SDS", "Fraud detection systems"],
    },
  },
  {
    id: 7,
    title: "SDS - Scoring & Decision System",
    subtitle: "Final Risk Assessment and Decision Engine",
    type: "system-detail",
    content: {
      system: "SDS",
      role: "Final decision engine applying business rules and risk criteria",
      keyFeatures: [
        "Advanced decision logic and referral rules",
        "Risk-based pricing calculations",
        "Automated approval criteria",
        "Manual review routing",
      ],
      dataFlow: [
        "Receives scored data from PCO",
        "Applies business rules and referral logic",
        "Calculates final risk score and pricing",
        "Makes approval/decline/refer decision",
        "Returns decision to LPS for processing",
      ],
      integrations: ["PCO", "LPS", "Risk management systems", "Pricing engines"],
    },
  },
  {
    id: 8,
    title: "Schufa Integration",
    subtitle: "Personal Credit Bureau and Fraud Detection",
    type: "bureau-detail",
    content: {
      bureau: "Schufa",
      role: "Personal credit information and fraud detection",
      dataTypes: [
        "Personal credit history and payment behavior",
        "Existing credit obligations and utilization",
        "Fraud indicators and identity verification",
        "Demographic and address validation",
      ],
      scorecards: [
        "Personal scorecard for individual applicants",
        "Fraud detection algorithms",
        "Identity verification checks",
        "Address and demographic validation",
      ],
      processing: "Real-time API integration with 1-2 second response time",
    },
  },
  {
    id: 9,
    title: "Creditreform Integration",
    subtitle: "Commercial Credit Assessment",
    type: "bureau-detail",
    content: {
      bureau: "Creditreform",
      role: "Commercial credit assessment and business intelligence",
      dataTypes: [
        "Company financial information and credit history",
        "Business registration and legal status",
        "Industry risk factors and market position",
        "Payment behavior and credit utilization",
      ],
      scorecards: [
        "6-variable commercial scorecard",
        "Alpha/Beta coefficient calculations",
        "POP (Probability of Payment) scoring",
        "Industry-specific risk adjustments",
      ],
      processing: "Batch and real-time processing with comprehensive business data",
    },
  },
  {
    id: 10,
    title: "Decision Logic & Referral Rules",
    subtitle: "Automated Decision Making Process",
    type: "decision-logic",
    content: {
      referralRules: [
        "Blacklist matches (customer or guarantor)",
        "Missing required agreements or consents",
        "Data quality issues or incomplete information",
        "High-risk indicators from bureau data",
        "Policy exceptions requiring manual review",
      ],
      scoringLogic: [
        "Personal scorecard from Schufa data",
        "Commercial scorecard with 6 variables",
        "Combined risk assessment",
        "Policy rule application",
        "Final approval/decline decision",
      ],
      outcomes: [
        { type: "Automatic Approval", percentage: "60-70%", criteria: "Low risk, complete data, policy compliance" },
        { type: "Manual Review", percentage: "20-25%", criteria: "Medium risk, referral triggers, policy exceptions" },
        { type: "Automatic Decline", percentage: "10-15%", criteria: "High risk, blacklist match, policy violation" },
      ],
    },
  },
  {
    id: 11,
    title: "Data Flow Architecture",
    subtitle: "Information Flow and System Integration",
    type: "data-flow",
    content: {
      layers: [
        {
          name: "Data Sources",
          systems: ["Schufa", "Creditreform", "ESMO"],
          description: "External bureaus and application entry",
        },
        {
          name: "Processing Layer",
          systems: ["LPS", "PCO", "SDS"],
          description: "Core processing and decision systems",
        },
        {
          name: "Storage & Analytics",
          systems: ["LA", "MIS", "EDW"],
          description: "Contract storage and reporting systems",
        },
      ],
      flows: [
        { from: "ESMO", to: "LPS", type: "Application Data", timing: "Real-time" },
        { from: "LPS", to: "PCO", type: "Customer Data", timing: "Real-time" },
        { from: "PCO", to: "Bureaus", type: "Credit Queries", timing: "Real-time" },
        { from: "PCO", to: "SDS", type: "Scored Data", timing: "Real-time" },
        { from: "SDS", to: "LPS", type: "Decision", timing: "Real-time" },
        { from: "LPS", to: "LA/MIS", type: "Contract Data", timing: "Batch" },
      ],
    },
  },
  {
    id: 12,
    title: "Analytics & Reporting",
    subtitle: "Performance Monitoring and Business Intelligence",
    type: "analytics",
    content: {
      kpis: [
        { metric: "Processing Time", target: "< 8 seconds", current: "6.2s avg" },
        { metric: "Approval Rate", target: "65-75%", current: "68%" },
        { metric: "Manual Review Rate", target: "< 25%", current: "22%" },
        { metric: "System Availability", target: "> 99.5%", current: "99.8%" },
      ],
      reports: [
        "Daily processing volumes and approval rates",
        "System performance and response times",
        "Risk distribution and scorecard performance",
        "Bureau data quality and coverage metrics",
      ],
      dataGovernance: [
        "GDPR compliance and data protection",
        "Audit trails and decision logging",
        "Data retention and archival policies",
        "Quality monitoring and validation",
      ],
    },
  },
  {
    id: 13,
    title: "Key Takeaways",
    subtitle: "Summary for Product Management",
    type: "summary",
    content: {
      processHighlights: [
        "Fully automated 8-second credit decision process",
        "Multi-system integration with real-time data flows",
        "Comprehensive risk assessment using multiple data sources",
        "High straight-through processing rate (60-70% auto-approval)",
      ],
      systemStrengths: [
        "Robust architecture with clear separation of concerns",
        "Real-time bureau integration for accurate risk assessment",
        "Flexible decision logic accommodating business rules",
        "Comprehensive reporting and analytics capabilities",
      ],
      businessValue: [
        "Improved customer experience with fast decisions",
        "Reduced operational costs through automation",
        "Enhanced risk management and portfolio quality",
        "Scalable platform supporting business growth",
      ],
    },
  },
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(((currentSlide + 1) / slides.length) * 100)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(((currentSlide - 1) / slides.length) * 100)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress((index / slides.length) * 100)
  }

  const resetPresentation = () => {
    setCurrentSlide(0)
    setProgress(0)
    setIsPlaying(false)
  }

  const slide = slides[currentSlide]

  const renderSlideContent = () => {
    switch (slide.type) {
      case "title":
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-emerald-600">{slide.title}</h1>
              <p className="text-2xl text-gray-600">{slide.subtitle}</p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">{slide.content.overview}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {slide.content.objectives.map((objective, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                    <span className="text-lg">{objective}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "workflow":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                {slide.content.steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {step.system}
                    </Badge>
                    <h3 className="font-semibold text-lg">{step.name}</h3>
                    <p className="text-sm text-gray-500 text-center max-w-32">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {step.time}
                    </Badge>
                    {index < slide.content.steps.length - 1 && (
                      <ArrowRight
                        className="h-6 w-6 text-emerald-400 absolute"
                        style={{ left: `${(index + 1) * 20 - 2}%` }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <Card className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-green-600">Approved</h3>
                <p className="text-2xl font-bold">{slide.content.outcomes.approved}</p>
              </Card>
              <Card className="p-6 text-center">
                <AlertCircle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow-600">Manual Review</h3>
                <p className="text-2xl font-bold">{slide.content.outcomes.manual}</p>
              </Card>
              <Card className="p-6 text-center">
                <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-red-600">Declined</h3>
                <p className="text-2xl font-bold">{slide.content.outcomes.declined}</p>
              </Card>
            </div>
          </div>
        )

      case "architecture":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.content.systems.map((system, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-emerald-600">{system.name}</CardTitle>
                      <Badge variant="secondary">{system.role}</Badge>
                    </div>
                    <p className="text-gray-600">{system.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "system-detail":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-600 mb-2">{slide.content.system}</h3>
                    <p className="text-lg text-gray-600">{slide.content.role}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slide.content.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Data Flow Process</h4>
                    <div className="space-y-3">
                      {slide.content.dataFlow.map((step, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-emerald-600">{index + 1}</span>
                          </div>
                          <span>{step}</span>
                          {index < slide.content.dataFlow.length - 1 && (
                            <ArrowDown className="h-4 w-4 text-emerald-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">System Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {slide.content.integrations.map((integration, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )

      case "bureau-detail":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-600 mb-2">{slide.content.bureau}</h3>
                    <p className="text-lg text-gray-600">{slide.content.role}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Data Types</h4>
                      <ul className="space-y-3">
                        {slide.content.dataTypes.map((type, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Database className="h-5 w-5 text-emerald-500 mt-0.5" />
                            <span>{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Scorecards & Analysis</h4>
                      <ul className="space-y-3">
                        {slide.content.scorecards.map((scorecard, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <TrendingUp className="h-5 w-5 text-emerald-500 mt-0.5" />
                            <span>{scorecard}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <span className="font-semibold">Processing:</span>
                      <span>{slide.content.processing}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )

      case "decision-logic":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-600">Referral Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.content.referralRules.map((rule, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-600">Scoring Logic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.content.scoringLogic.map((logic, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <TrendingUp className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span>{logic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-6 mt-8">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-600">Decision Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slide.content.outcomes.map((outcome, index) => (
                      <div key={index} className="text-center p-4 border rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">{outcome.type}</h4>
                        <p className="text-3xl font-bold text-emerald-600 mb-2">{outcome.percentage}</p>
                        <p className="text-sm text-gray-600">{outcome.criteria}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "data-flow":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {slide.content.layers.map((layer, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="text-lg text-emerald-600">{layer.name}</CardTitle>
                        <p className="text-sm text-gray-600">{layer.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {layer.systems.map((system, sIndex) => (
                            <Badge key={sIndex} variant="secondary" className="mr-2 mb-2">
                              {system}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-600">Data Flow Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slide.content.flows.map((flow, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                          <Badge variant="outline">{flow.from}</Badge>
                          <ArrowRight className="h-4 w-4 text-emerald-500" />
                          <Badge variant="outline">{flow.to}</Badge>
                          <div className="flex-1 text-right">
                            <p className="text-sm font-medium">{flow.type}</p>
                            <p className="text-xs text-gray-500">{flow.timing}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "analytics":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-600">Key Performance Indicators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {slide.content.kpis.map((kpi, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{kpi.metric}</span>
                            <span className="text-emerald-600 font-semibold">{kpi.current}</span>
                          </div>
                          <div className="text-sm text-gray-500">Target: {kpi.target}</div>
                          <Progress value={85} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-600">Reporting Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.content.reports.map((report, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <TrendingUp className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span>{report}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-6 mt-8">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-600">Data Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {slide.content.dataGovernance.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "summary":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-600">Process Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.content.processHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-600">System Strengths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.content.systemStrengths.map((strength, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-600">Business Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.content.businessValue.map((value, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span className="text-sm">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Thank You</h3>
                <p className="text-lg text-gray-600">Questions & Discussion</p>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Slide content not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-emerald-600">Credit Process Presentation</h1>
              <Badge variant="secondary">
                Slide {currentSlide + 1} of {slides.length}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Progress value={progress} className="w-32" />
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg min-h-[600px] p-8">{renderSlideContent()}</div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button onClick={resetPresentation} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button onClick={() => setIsPlaying(!isPlaying)} variant="outline" size="sm">
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button onClick={prevSlide} disabled={currentSlide === 0} variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-emerald-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1} variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
