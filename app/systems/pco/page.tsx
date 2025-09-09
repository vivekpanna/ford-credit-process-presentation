import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Target,
  ArrowRight,
  Database,
  CheckCircle,
  AlertTriangle,
  FileText,
  Shield,
  CreditCard,
  Clock,
} from "lucide-react"

export default function PCOPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">PCO</h1>
              <p className="text-xl text-muted-foreground">Power Curve Origination</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            PCO serves as the credit bureau interface system, retrieving data from Schufa and Creditreform, calculating
            commercial scorecards, and applying referral rules to determine credit decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  System Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  PCO (Power Curve Origination) is the specialized system that interfaces with external credit bureaus
                  (Schufa and Creditreform) to retrieve credit information, calculate risk scores, and apply business
                  rules for credit decisions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Primary Function</h4>
                    <p className="text-sm text-purple-800">
                      Credit bureau data retrieval, scoring, and referral rule application
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Key Capability</h4>
                    <p className="text-sm text-emerald-800">
                      Commercial scorecard calculation and automated decision support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Functions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Core Functions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Credit Bureau Interface</h4>
                      <p className="text-sm text-muted-foreground">
                        Formats and sends requests to Schufa and Creditreform, receives and processes responses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Commercial Scorecard Calculation</h4>
                      <p className="text-sm text-muted-foreground">
                        Calculates POP (Probability of Payment) using 6 variables including inquiry counter, industry
                        code, and company age
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Referral Rules Application</h4>
                      <p className="text-sm text-muted-foreground">
                        Applies business rules that prevent automatic approval for high-risk or problematic applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Processing & Enrichment</h4>
                      <p className="text-sm text-muted-foreground">
                        Processes bureau responses and enriches data for downstream decision making in SDS
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Scorecard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Commercial Scorecard Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The commercial scorecard uses 6 key variables to calculate the POP (Probability of Payment), which
                  indicates the likelihood that a customer will repay the credit over the entire contract term.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Scorecard Variables</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Inquiry Counter (12 months)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Industry Code</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Company Age</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Credit Rating Index</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Payment Behavior</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Balance Sheet Total</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">POP Calculation</h4>
                    <p className="text-sm text-emerald-800 mb-3">
                      Each variable receives points based on defined criteria. The total score is converted to POP using
                      Alpha and Beta coefficients.
                    </p>
                    <div className="text-xs text-emerald-700 bg-emerald-100 p-2 rounded">
                      Formula: POP = Alpha + Beta × Total Score
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bureau Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Credit Bureau Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="h-6 w-6 text-blue-600" />
                      <h4 className="font-semibold text-blue-900">Schufa Integration</h4>
                    </div>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>• Personal credit information retrieval</p>
                      <p>• Fraud list checking and validation</p>
                      <p>• Address matching and history verification</p>
                      <p>• Automatic and manual inquiry processing</p>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="h-6 w-6 text-amber-600" />
                      <h4 className="font-semibold text-amber-900">Creditreform Integration</h4>
                    </div>
                    <div className="space-y-2 text-sm text-amber-800">
                      <p>• Commercial credit assessment</p>
                      <p>• Beneficial ownership verification</p>
                      <p>• Financial capacity assessment (DSCA)</p>
                      <p>• Company matching and hit list processing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Referral Rules & Decision Logic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  PCO implements comprehensive referral rules that prevent automatic credit approval when certain risk
                  factors are detected. These rules are managed in Excel lists and integrated into the decision process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-600">Automatic Referral Triggers</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                        <span className="text-sm">Blacklist matches (sanctions, AML)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                        <span className="text-sm">Missing Schufa agreements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                        <span className="text-sm">Negative credit indicators</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                        <span className="text-sm">Data quality issues</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Rule Management</h4>
                    <p className="text-sm text-amber-800 mb-3">
                      Rules are documented in Excel lists accessible through the document management system (SFO).
                    </p>
                    <div className="text-xs text-amber-700">
                      Future consolidation planned to centralize rule management between PCO and LPS systems.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Considerations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Technical Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">System Limitations</h4>
                    <p className="text-sm text-red-800">
                      Processing can fail when handling companies with many beneficial owners, requiring manual
                      calculation fallback.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Manual Backup</h4>
                    <p className="text-sm text-blue-800">
                      Excel-based scorecard available for testing and system failure scenarios, identical to PCO
                      implementation.
                    </p>
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
                  <Badge variant="secondary">Credit Interface</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Primary Function</span>
                  <Badge variant="outline">Bureau Integration</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Receives From</span>
                  <Badge className="bg-green-100 text-green-800">LPS</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sends To</span>
                  <Badge className="bg-orange-100 text-orange-800">SDS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* PCO Web Application */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">PCO Web Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Web interface for viewing all dealer inquiries, customer data, processing status, and bureau
                  responses.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Inquiry tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Audit trail access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Scorecard analysis</span>
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
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">LPS</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Processes</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">PCO</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <Database className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Queries Bureaus</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Forwards to</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">SDS</span>
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
                  href="/systems/lps"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">LPS</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="/systems/sds"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">SDS</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="/bureaus/schufa"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Database className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Schufa</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="/bureaus/creditreform"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Creditreform</span>
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
