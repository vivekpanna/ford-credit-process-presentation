"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Info, TrendingUp } from "lucide-react"

export default function KeyPointersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Key Pointers & Insights</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Critical insights and key takeaways from system architecture discussions and process optimization sessions
          </p>
        </div>

        <Tabs defaultValue="system-insights" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="system-insights">System Insights</TabsTrigger>
            <TabsTrigger value="data-challenges">Data Challenges</TabsTrigger>
            <TabsTrigger value="process-optimization">Process Optimization</TabsTrigger>
            <TabsTrigger value="future-roadmap">Future Roadmap</TabsTrigger>
          </TabsList>

          <TabsContent value="system-insights" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    Contract Reporting to Schufa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    After LPS processes an application, contracts must be reported to Schufa via LA system using CBI
                    (Customer Bureau Interface).
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Contract Type</Badge>
                    <Badge variant="outline">Contract Value</Badge>
                    <Badge variant="outline">Contract Duration</Badge>
                    <Badge variant="outline">Delinquency Status</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Fleet Management System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    LPS performs fleet exposure calculations to determine customer limits and existing contract volumes.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Checks existing contracts per customer</li>
                    <li>• Validates credit lines and limits</li>
                    <li>• Manages both individual and fleet customers</li>
                    <li>• Integrates with LA for historical contract data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-purple-600" />
                    Bidirectional Data Flow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    LA and LPS maintain bidirectional interfaces for comprehensive risk assessment.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-slate-800">LA → LPS</h4>
                      <p className="text-sm text-slate-600">Contract data, Bad Customer File (daily)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">LPS → LA</h4>
                      <p className="text-sm text-slate-600">Application data, risk decisions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Multi-Layer Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Even after positive bureau responses, LPS performs additional checks before final approval.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Customer type validation (Clock customers)</li>
                    <li>• Credit limit verification</li>
                    <li>• Income sufficiency checks</li>
                    <li>• Manual review triggers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="data-challenges" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Missing Schufa ID Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Schufa IDs are not systematically stored, making customer tracking and data comparison difficult.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">Impact:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Difficult customer identification across systems</li>
                      <li>• Challenges with name changes (marriage, etc.)</li>
                      <li>• Limited historical data comparison</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Agata's Data Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Risk management needs comprehensive customer development tracking and detailed Schufa attributes.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-3 rounded">
                      <h4 className="font-medium text-orange-800">Current Gaps:</h4>
                      <p className="text-sm text-orange-700">No centralized customer development view</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-medium text-blue-800">Requirements:</h4>
                      <p className="text-sm text-blue-700">
                        All Schufa attributes, customer timeline, regulatory compliance
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Cost Optimization Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Current process involves expensive repeated bureau inquiries for scorecard reviews.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                      <span className="text-sm">Creditreform Inquiry</span>
                      <Badge variant="destructive">€14.00</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                      <span className="text-sm">Schufa Inquiry</span>
                      <Badge variant="destructive">€1.20-1.30</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    Internal storage of attributes could significantly reduce costs for scorecard reviews.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-indigo-600">System Integration Gaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Multiple systems operate independently, leading to data silos and inefficiencies.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>
                      • <strong>Credarate:</strong> Independent Creditreform inquiries for large customers
                    </li>
                    <li>
                      • <strong>LA System:</strong> Limited Schufa data visibility
                    </li>
                    <li>
                      • <strong>PCO/SDS:</strong> No historical customer development tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process-optimization" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-emerald-600">Proposed Feiko Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Consolidate risk-related interfaces and processes into Feiko system for better control and
                    visibility.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 p-3 rounded">
                      <h4 className="font-medium text-emerald-800">Target Interfaces:</h4>
                      <ul className="text-sm text-emerald-700 space-y-1">
                        <li>• Bad Customer File from LA</li>
                        <li>• Fleet Exposure calculations</li>
                        <li>• Used Car Validation (DAT)</li>
                        <li>• Bureau response consolidation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Alpha Project Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Alpha system implementation faces significant challenges in German market adaptation.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="destructive">Budget Constraints</Badge>
                    <Badge variant="secondary">Regulatory Differences</Badge>
                    <Badge variant="outline">Limited UK Functionality Transfer</Badge>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    System remains inquiry-based rather than customer-centric, limiting desired consolidation benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">DAT Integration Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Used car financing process includes parallel DAT validation to verify vehicle values.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">Process Flow:</h4>
                    <ol className="text-sm text-orange-700 space-y-1">
                      <li>1. LPS sends parallel requests to PCO and DAT</li>
                      <li>2. DAT validates dealer-provided vehicle value</li>
                      <li>3. Value discrepancies trigger manual review</li>
                      <li>4. Process optimization reduced manual interventions</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Schufa PAL Function Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Planned implementation of PAL (Personal Attribute Lookup) function similar to Creditreform
                    integration.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Project Planning Phase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Cost-Benefit Analysis Required</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="future-roadmap" className="space-y-6">
            <div className="grid md:grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Strategic Recommendations</CardTitle>
                  <CardDescription>
                    Key initiatives for system optimization and risk management enhancement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-emerald-700">Immediate Actions</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-emerald-50 rounded-lg">
                          <h4 className="font-medium text-emerald-800">Schufa ID Storage</h4>
                          <p className="text-sm text-emerald-700">Implement systematic storage and utilization</p>
                        </div>
                        <div className="p-3 bg-emerald-50 rounded-lg">
                          <h4 className="font-medium text-emerald-800">Interface Documentation</h4>
                          <p className="text-sm text-emerald-700">Complete system landscape mapping</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-blue-700">Medium Term</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800">Feiko Integration</h4>
                          <p className="text-sm text-blue-700">Consolidate risk interfaces and processes</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800">Data Centralization</h4>
                          <p className="text-sm text-blue-700">Implement comprehensive customer data storage</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-purple-700">Long Term</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800">Alpha Optimization</h4>
                          <p className="text-sm text-purple-700">Customer-centric system architecture</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800">Cost Optimization</h4>
                          <p className="text-sm text-purple-700">Reduce bureau inquiry costs through smart caching</p>
                        </div>
                      </div>
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
