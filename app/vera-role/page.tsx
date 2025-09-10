"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, Brain, Wrench, Users, AlertTriangle, CheckCircle, Clock, MessageSquare } from "lucide-react"

export default function VeraRolePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Vera's Role in the Credit Ecosystem</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Understanding Vera's critical role as the central knowledge hub and system integration expert
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge Areas</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="succession">Succession Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-purple-600" />
                    Central Knowledge Hub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Vera serves as the single point of comprehensive knowledge across all credit process systems, from
                    ESMO through LPS, PCO, SDS, and bureau integrations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Coverage</span>
                      <Badge variant="secondary">100%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Process Knowledge</span>
                      <Badge variant="secondary">End-to-End</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cross-System Integration</span>
                      <Badge variant="secondary">Expert Level</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    Unique Position
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    As the only person with complete cross-system knowledge, Vera bridges gaps between different teams
                    and systems that operate in isolation.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Only person doing cross-system error analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Primary interface with external teams (SDS, Experian)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Detailed specification and requirement definition
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Process optimization and troubleshooting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    Critical Business Risk
                  </CardTitle>
                  <CardDescription>The concentration of knowledge creates significant operational risk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Knowledge Loss Risk</h4>
                      <p className="text-sm text-red-700">
                        No other person has the comprehensive understanding needed to maintain system operations
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Process Disruption</h4>
                      <p className="text-sm text-orange-700">
                        Error analysis and system troubleshooting would be severely impacted
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">External Relations</h4>
                      <p className="text-sm text-yellow-700">
                        Communication with external teams would lose critical context and expertise
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="responsibilities" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-emerald-600" />
                    System Error Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Vera is the only person performing comprehensive cross-system error analysis, comparing data across
                    LPS, PCO, and SDS to identify root causes.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-emerald-50 rounded">
                      <h5 className="font-medium text-emerald-800">Process</h5>
                      <p className="text-sm text-emerald-700">
                        Analyzes data discrepancies across systems, coordinates with respective teams, and identifies
                        systemic issues
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-medium text-blue-800">Tools Used</h5>
                      <p className="text-sm text-blue-700">
                        Direct system access, data comparison tools, team coordination
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    External Team Interface
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Primary contact for external teams (SDS, Experian) who lack internal process knowledge and require
                    detailed specifications and error interpretation.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Translates business requirements into technical specifications</li>
                    <li>• Interprets error messages and system responses</li>
                    <li>• Provides context for external team decisions</li>
                    <li>• Manages change requests and system modifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Interface Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Monitors critical interfaces including Bad Customer File, contract data transfers, and bureau
                    integrations for operational issues.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 bg-slate-50 rounded text-center">
                      <div className="text-sm font-medium">LA ↔ LPS</div>
                      <div className="text-xs text-slate-600">Contract Data</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded text-center">
                      <div className="text-sm font-medium">LA → PCO</div>
                      <div className="text-xs text-slate-600">Bad Customer File</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded text-center">
                      <div className="text-sm font-medium">LA → Schufa</div>
                      <div className="text-xs text-slate-600">CBI Interface</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded text-center">
                      <div className="text-sm font-medium">LPS ↔ DAT</div>
                      <div className="text-xs text-slate-600">Vehicle Validation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    Change Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Handles new change requests, system modifications, and process improvements across the entire credit
                    ecosystem.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-sm">Requirements Analysis</span>
                      <Badge variant="outline">Expert</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-sm">Impact Assessment</span>
                      <Badge variant="outline">Cross-System</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-sm">Implementation Coordination</span>
                      <Badge variant="outline">Multi-Team</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-emerald-600">System Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-slate-800">Complete System Map</h5>
                      <Progress value={100} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">ESMO, LPS, PCO, SDS, LA, bureaus</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">Interface Details</h5>
                      <Progress value={100} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Data flows, timing, dependencies</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">Error Patterns</h5>
                      <Progress value={95} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Common issues and resolutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Business Processes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-slate-800">Credit Decision Flow</h5>
                      <Progress value={100} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">End-to-end process knowledge</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">Fleet Management</h5>
                      <Progress value={90} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Exposure calculations, limits</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">Bureau Integration</h5>
                      <Progress value={100} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Schufa, Creditreform processes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Technical Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-slate-800">Data Structures</h5>
                      <Progress value={85} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Field mappings, formats</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">System Configurations</h5>
                      <Progress value={90} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Settings, parameters, rules</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">Troubleshooting</h5>
                      <Progress value={95} className="mt-1" />
                      <p className="text-xs text-slate-600 mt-1">Diagnostic procedures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Knowledge Distribution Across Teams</CardTitle>
                <CardDescription>Current knowledge gaps in different departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Risk Team</h4>
                    <div className="text-2xl font-bold text-red-600 my-2">30%</div>
                    <p className="text-xs text-red-700">Limited cross-system view</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">IT Team</h4>
                    <div className="text-2xl font-bold text-orange-600 my-2">40%</div>
                    <p className="text-xs text-orange-700">Technical but not process knowledge</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Operations</h4>
                    <div className="text-2xl font-bold text-yellow-600 my-2">25%</div>
                    <p className="text-xs text-yellow-700">System-specific knowledge only</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Vera</h4>
                    <div className="text-2xl font-bold text-purple-600 my-2">95%</div>
                    <p className="text-xs text-purple-700">Comprehensive knowledge</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Single Point of Failure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Vera's absence creates immediate operational challenges across multiple systems and processes.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                      <h5 className="font-medium text-red-800">Error Resolution</h5>
                      <p className="text-sm text-red-700">No one else can perform cross-system error analysis</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                      <h5 className="font-medium text-red-800">External Communication</h5>
                      <p className="text-sm text-red-700">External teams lose critical context and expertise</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                      <h5 className="font-medium text-red-800">Change Management</h5>
                      <p className="text-sm text-red-700">New requirements cannot be properly analyzed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Knowledge Transfer Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    The complexity and breadth of knowledge makes transfer extremely difficult.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      No comprehensive documentation exists
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Knowledge spans multiple technical domains
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Requires understanding of business and technical aspects
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Historical context and decision rationale not documented
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Organizational Structure Gap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    No department owns the complete end-to-end process, creating coordination challenges.
                  </p>
                  <div className="space-y-2">
                    <div className="p-2 bg-purple-50 rounded">
                      <span className="text-sm font-medium text-purple-800">Risk Team:</span>
                      <span className="text-sm text-purple-700 ml-2">Focuses on decision logic</span>
                    </div>
                    <div className="p-2 bg-purple-50 rounded">
                      <span className="text-sm font-medium text-purple-800">IT Team:</span>
                      <span className="text-sm text-purple-700 ml-2">Manages technical infrastructure</span>
                    </div>
                    <div className="p-2 bg-purple-50 rounded">
                      <span className="text-sm font-medium text-purple-800">Operations:</span>
                      <span className="text-sm text-purple-700 ml-2">Handles day-to-day processing</span>
                    </div>
                    <div className="p-2 bg-slate-100 rounded border-2 border-purple-500">
                      <span className="text-sm font-medium text-slate-800">Gap:</span>
                      <span className="text-sm text-slate-700 ml-2">No end-to-end process ownership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Scalability Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Current model doesn't scale with business growth or system complexity increases.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-lg font-bold text-blue-600">1</div>
                      <div className="text-xs text-blue-700">Expert Available</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-lg font-bold text-blue-600">∞</div>
                      <div className="text-xs text-blue-700">Systems to Manage</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    As systems grow and change, the knowledge burden becomes unsustainable for one person.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="succession" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-600">Succession Planning Strategy</CardTitle>
                <CardDescription>Comprehensive approach to knowledge transfer and risk mitigation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-emerald-700">Phase 1: Documentation</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <h4 className="font-medium text-emerald-800">System Architecture</h4>
                        <p className="text-sm text-emerald-700">Complete system map and interfaces</p>
                        <Badge variant="outline" className="mt-2">
                          3 months
                        </Badge>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <h4 className="font-medium text-emerald-800">Process Flows</h4>
                        <p className="text-sm text-emerald-700">End-to-end process documentation</p>
                        <Badge variant="outline" className="mt-2">
                          2 months
                        </Badge>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <h4 className="font-medium text-emerald-800">Error Procedures</h4>
                        <p className="text-sm text-emerald-700">Troubleshooting guides and procedures</p>
                        <Badge variant="outline" className="mt-2">
                          4 months
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-700">Phase 2: Knowledge Transfer</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800">Team Training</h4>
                        <p className="text-sm text-blue-700">Cross-functional team education</p>
                        <Badge variant="outline" className="mt-2">
                          6 months
                        </Badge>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800">Mentoring Program</h4>
                        <p className="text-sm text-blue-700">Direct knowledge transfer sessions</p>
                        <Badge variant="outline" className="mt-2">
                          9 months
                        </Badge>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800">Shadow Operations</h4>
                        <p className="text-sm text-blue-700">Hands-on experience with real issues</p>
                        <Badge variant="outline" className="mt-2">
                          6 months
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-purple-700">Phase 3: Transition</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-800">Gradual Handover</h4>
                        <p className="text-sm text-purple-700">Progressive responsibility transfer</p>
                        <Badge variant="outline" className="mt-2">
                          12 months
                        </Badge>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-800">Support Structure</h4>
                        <p className="text-sm text-purple-700">Ongoing consultation and support</p>
                        <Badge variant="outline" className="mt-2">
                          Ongoing
                        </Badge>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-800">Knowledge Validation</h4>
                        <p className="text-sm text-purple-700">Verify transfer completeness</p>
                        <Badge variant="outline" className="mt-2">
                          3 months
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Immediate Actions Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                      <h4 className="font-medium text-orange-800">Start Documentation</h4>
                      <p className="text-sm text-orange-700">Begin comprehensive system documentation immediately</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                      <h4 className="font-medium text-orange-800">Identify Successors</h4>
                      <p className="text-sm text-orange-700">Select and begin training potential successors</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                      <h4 className="font-medium text-orange-800">Create Backup Procedures</h4>
                      <p className="text-sm text-orange-700">Establish emergency procedures for Vera's absence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Success Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Documentation Coverage</span>
                      <Badge className="bg-green-600">Target: 90%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Team Knowledge Level</span>
                      <Badge className="bg-green-600">Target: 70%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Independent Problem Resolution</span>
                      <Badge className="bg-green-600">Target: 80%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Business Continuity</span>
                      <Badge className="bg-green-600">Target: 95%</Badge>
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
