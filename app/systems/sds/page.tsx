import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, ArrowRight, Database, CheckCircle, AlertTriangle, Target, FileText, GitBranch } from "lucide-react"

export default function SDSPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">SDS</h1>
              <p className="text-xl text-muted-foreground">Scoring & Decision System</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            SDS is the risk management and decision engine that determines whether credit applications should be
            automatically approved, declined, or referred for manual review based on comprehensive scoring and business
            rules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  System Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SDS (Scoring & Decision System) serves as the final decision-making authority in the credit process.
                  It receives enriched data from PCO, applies sophisticated scoring models, and determines the
                  appropriate action for each credit application.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Core Function</h4>
                    <p className="text-sm text-orange-800">
                      Risk assessment and automated decision making for credit applications
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Decision Authority</h4>
                    <p className="text-sm text-emerald-800">
                      Final determination of approval, decline, or manual referral
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision Logic */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  Decision Logic & Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Reception</h4>
                      <p className="text-sm text-muted-foreground">
                        Receives processed credit bureau data and scores from PCO system
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Bureau Selection Logic</h4>
                      <p className="text-sm text-muted-foreground">
                        Determines whether to query Schufa or Creditreform based on customer type and business rules
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Risk Scoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Applies scoring models and evaluates risk factors from bureau responses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Final Decision</h4>
                      <p className="text-sm text-muted-foreground">
                        Makes automatic approval/decline decision or refers complex cases for manual review
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SDS Table Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  SDS Table Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The SDS table contains the core logic for determining which credit bureau to query and how to process
                  different types of applications. This table is carefully managed and updated only when business
                  processes change.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Schufa Query Logic</h4>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>• Financing vs. Leasing applications</p>
                      <p>• Private vs. Commercial customers</p>
                      <p>• Specific inquiry types and parameters</p>
                      <p>• Address and demographic criteria</p>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Table Maintenance</h4>
                    <div className="space-y-2 text-sm text-amber-800">
                      <p>• Infrequent updates only for process changes</p>
                      <p>• New internet business types integration</p>
                      <p>• Business rule modifications from Schufa</p>
                      <p>• Risk management policy updates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Decision Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                    <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <h4 className="font-semibold text-green-900 mb-2">Automatic Approval</h4>
                    <p className="text-sm text-green-800">
                      Low-risk applications with clean credit history and good scores
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-center">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                    <h4 className="font-semibold text-amber-900 mb-2">Manual Referral</h4>
                    <p className="text-sm text-amber-800">Complex cases requiring human assessment and review</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-3 text-red-600" />
                    <h4 className="font-semibold text-red-900 mb-2">Automatic Decline</h4>
                    <p className="text-sm text-red-800">High-risk applications failing minimum acceptance criteria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Key Risk Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SDS evaluates multiple risk factors to make informed decisions. These factors are weighted and
                  combined to produce a comprehensive risk assessment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Personal Credit Factors</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Schufa credit score</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Payment history</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Address stability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Fraud indicators</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Commercial Credit Factors</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">POP (Probability of Payment)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">Company financial health</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">Industry risk profile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">Beneficial owner verification</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integration & Data Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Integration & Data Flow
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SDS serves as the final processing stage before decisions are returned to LPS for customer
                  communication and contract processing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Receives from PCO</h4>
                      <p className="text-sm text-muted-foreground">
                        Credit bureau data, commercial scores, and referral rule results
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">SDS Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Risk assessment, scoring, and decision logic application
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Returns to LPS</h4>
                      <p className="text-sm text-muted-foreground">
                        Final decision with reasoning and next steps for processing
                      </p>
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
                  <span className="text-sm text-muted-foreground">System Type</span>
                  <Badge variant="secondary">Decision Engine</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Primary Function</span>
                  <Badge variant="outline">Risk Assessment</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Receives From</span>
                  <Badge className="bg-purple-100 text-purple-800">PCO</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Returns To</span>
                  <Badge className="bg-green-100 text-green-800">LPS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Decision Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Decision Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Credit scores above threshold</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Clean payment history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Borderline risk factors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">High-risk indicators</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integration Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Integration Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">PCO</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Processes</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">SDS</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Returns to</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">LPS</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Systems */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="/systems/pco"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">PCO</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="/systems/lps"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">LPS</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
