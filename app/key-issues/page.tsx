"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, DollarSign, Database, Users, Settings } from "lucide-react"

export default function KeyIssuesPage() {
  const criticalIssues = [
    {
      id: 1,
      title: "Missing Schufa ID Storage",
      description: "Schufa IDs are not systematically stored, creating customer identification and tracking challenges",
      impact: "High",
      urgency: "High",
      category: "Data Management",
      icon: Database,
      color: "bg-red-500",
      details: [
        "Customer tracking becomes difficult when names change (marriage, etc.)",
        "Data comparison across time periods is nearly impossible",
        "Regulatory reporting and compliance challenges",
        "Increased manual effort for customer identification",
      ],
      businessImpact: "Regulatory compliance risks, operational inefficiency, increased costs",
      estimatedCost: "Medium",
      timeline: "3-6 months",
    },
    {
      id: 2,
      title: "Duplicate Bureau Inquiry Costs",
      description: "Multiple systems independently query credit bureaus, leading to unnecessary costs",
      impact: "High",
      urgency: "Medium",
      category: "Cost Optimization",
      icon: DollarSign,
      color: "bg-orange-500",
      details: [
        "Credarate system operates independently from main process",
        "Repeated Creditreform inquiries (€14 each) for scorecard reviews",
        "No data sharing between systems for bureau responses",
        "Schufa inquiries (€1.20-1.30) multiply with system redundancy",
      ],
      businessImpact: "Significant annual cost increase, budget inefficiency",
      estimatedCost: "High annual savings potential",
      timeline: "6-12 months",
    },
    {
      id: 3,
      title: "Alpha System Implementation Challenges",
      description: "Alpha project faces budget constraints and limited functionality transfer from UK",
      impact: "High",
      urgency: "High",
      category: "System Migration",
      icon: Settings,
      color: "bg-purple-500",
      details: [
        "Budget largely consumed in UK implementation",
        "German regulatory requirements differ significantly from UK",
        "System remains inquiry-based rather than customer-centric",
        "Parallel operation with LPS creates complexity and costs",
      ],
      businessImpact: "Project delays, increased implementation costs, limited ROI",
      estimatedCost: "Very High",
      timeline: "12-24 months",
    },
    {
      id: 4,
      title: "Agata's Data Requirements Gap",
      description: "Risk management lacks comprehensive customer development tracking and detailed bureau attributes",
      impact: "Medium",
      urgency: "High",
      category: "Risk Management",
      icon: Users,
      color: "bg-blue-500",
      details: [
        "No centralized view of customer development over time",
        "Limited access to detailed Schufa attributes",
        "Regulatory compliance requirements not fully met",
        "Manual processes for risk analysis and reporting",
      ],
      businessImpact: "Regulatory compliance risks, inefficient risk management",
      estimatedCost: "Medium",
      timeline: "6-9 months",
    },
    {
      id: 5,
      title: "Knowledge Management Risk",
      description: "Critical system knowledge concentrated in single person (Vera), creating operational risk",
      impact: "Critical",
      urgency: "Critical",
      category: "Operational Risk",
      icon: AlertTriangle,
      color: "bg-red-600",
      details: [
        "Only one person has comprehensive cross-system knowledge",
        "No documented process ownership across departments",
        "Complex error analysis requires deep system understanding",
        "External team communication depends on single point of contact",
      ],
      businessImpact: "Business continuity risk, operational disruption potential",
      estimatedCost: "High (if knowledge is lost)",
      timeline: "Immediate action required",
    },
    {
      id: 6,
      title: "System Interface Fragmentation",
      description: "Risk-related processes scattered across multiple systems without centralized control",
      impact: "Medium",
      urgency: "Medium",
      category: "System Architecture",
      icon: Database,
      color: "bg-yellow-500",
      details: [
        "Fleet exposure calculations in LPS instead of risk system",
        "Bad Customer File processing not integrated with risk assessment",
        "Used car validation (DAT) separate from main risk process",
        "No unified risk decision audit trail",
      ],
      businessImpact: "Inconsistent risk assessment, audit trail gaps",
      estimatedCost: "Medium",
      timeline: "9-15 months",
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical":
        return "bg-red-600"
      case "High":
        return "bg-red-500"
      case "Medium":
        return "bg-yellow-500"
      case "Low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical":
        return "bg-red-600"
      case "High":
        return "bg-orange-500"
      case "Medium":
        return "bg-yellow-500"
      case "Low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Key Issues & Challenges</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Critical issues identified in the credit process system landscape requiring immediate attention and
            strategic planning
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Issue Priority Matrix</CardTitle>
              <CardDescription>Overview of critical issues by impact and urgency levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">2</div>
                  <div className="text-sm text-slate-600">Critical Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-slate-600">High Priority</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">1</div>
                  <div className="text-sm text-slate-600">Medium Priority</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {criticalIssues.map((issue) => {
            const IconComponent = issue.icon
            return (
              <Card key={issue.id} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${issue.color}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{issue.title}</CardTitle>
                        <CardDescription className="text-base">{issue.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={`${getImpactColor(issue.impact)} text-white`}>{issue.impact} Impact</Badge>
                      <Badge className={`${getUrgencyColor(issue.urgency)} text-white`}>{issue.urgency} Urgency</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Issue Details</h4>
                      <ul className="space-y-2">
                        {issue.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Business Impact</h4>
                        <p className="text-sm text-slate-600">{issue.businessImpact}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-slate-700 mb-1">Estimated Cost</h5>
                          <Badge variant="outline">{issue.estimatedCost}</Badge>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-700 mb-1">Timeline</h5>
                          <Badge variant="outline">{issue.timeline}</Badge>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-700 mb-2">Category</h5>
                        <Badge variant="secondary">{issue.category}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-emerald-600">Recommended Action Plan</CardTitle>
            <CardDescription>Prioritized approach to addressing critical issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">Immediate Actions (0-3 months)</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Implement knowledge transfer and documentation program</li>
                  <li>• Begin Schufa ID storage implementation</li>
                  <li>• Assess Alpha project budget and scope</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-800 mb-2">Short Term (3-6 months)</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Complete Schufa ID integration across systems</li>
                  <li>• Implement bureau inquiry optimization</li>
                  <li>• Address Agata's data requirements</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-800 mb-2">Medium Term (6-12 months)</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Consolidate risk interfaces in Feiko</li>
                  <li>• Optimize Alpha implementation strategy</li>
                  <li>• Implement comprehensive audit trails</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
