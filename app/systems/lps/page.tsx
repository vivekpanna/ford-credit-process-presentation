import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, ArrowRight, Database, CheckCircle, AlertTriangle, Shield, Target, Building2 } from "lucide-react"

export default function LPSPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">LPS</h1>
              <p className="text-xl text-muted-foreground">Loan Processing System</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            LPS serves as the central processing hub for credit applications, performing initial validation, customer
            verification, and coordinating with external credit bureaus through PCO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  System Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  LPS (Loan Processing System) is the core system that receives credit applications from ESMO and
                  orchestrates the entire credit assessment process. It performs initial validations, manages customer
                  data, and coordinates with PCO for external credit bureau inquiries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Core Function</h4>
                    <p className="text-sm text-green-800">
                      Central processing and validation of credit applications with customer verification
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Integration Hub</h4>
                    <p className="text-sm text-blue-800">
                      Coordinates between ESMO, PCO, SDS, and downstream systems like LA and MIS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Key Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Customer Verification</h4>
                      <p className="text-sm text-muted-foreground">
                        Checks if customer is already known in the system and enriches data with existing information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Enrichment</h4>
                      <p className="text-sm text-muted-foreground">
                        Adds Grifo numbers and other reference data before forwarding to PCO
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Risk Assessment Coordination</h4>
                      <p className="text-sm text-muted-foreground">
                        Manages the flow between PCO credit bureau checks and SDS decision making
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Contract Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Handles application processing, billing, and delivery of final decisions
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Detailed Process Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Receives from ESMO</h4>
                      <p className="text-sm text-muted-foreground">Initial credit application data from dealers</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <Database className="h-6 w-6 text-green-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Customer Lookup & Validation</h4>
                      <p className="text-sm text-muted-foreground">
                        Performs initial checks and data enrichment, especially for commercial customers
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Forwards to PCO</h4>
                      <p className="text-sm text-muted-foreground">
                        Sends enriched data to PCO for credit bureau inquiries and scoring
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Receives Decision from SDS</h4>
                      <p className="text-sm text-muted-foreground">
                        Gets final credit decision and processes approval or referral
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Data Management & Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Contract Data to LA</h4>
                    <p className="text-sm text-emerald-800">
                      Sends approved contract data to LA system for payment processing and contract management
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Risk Data to MIS/DDW</h4>
                    <p className="text-sm text-blue-800">
                      Transmits application and decision data to MIS and DDW for reporting and analytics
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Customer Risk Monitoring</h4>
                    <p className="text-sm text-amber-800">
                      Receives contract data back from LA to monitor customer exposure and prevent over-financing
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Bad Customer Pool</h4>
                    <p className="text-sm text-red-800">
                      Maintains updated list of problematic customers from LA for immediate screening
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Business Rules & Referrals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  LPS implements its own set of referral rules alongside those in PCO. These rules ensure that certain
                  applications are flagged for manual review rather than automatic processing.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Data Quality Issues</h4>
                      <p className="text-sm text-muted-foreground">
                        Applications with incomplete or inconsistent data are referred for manual review
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Blacklist Matches</h4>
                      <p className="text-sm text-muted-foreground">
                        Customers matching sanctions or AML lists are automatically referred
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Missing Agreements</h4>
                      <p className="text-sm text-muted-foreground">
                        Cases where Schufa agreements are missing or incomplete
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
                  <Badge variant="secondary">Core Processing</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Primary Function</span>
                  <Badge variant="outline">Validation & Routing</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Receives From</span>
                  <Badge className="bg-blue-100 text-blue-800">ESMO</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sends To</span>
                  <Badge className="bg-purple-100 text-purple-800">PCO</Badge>
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
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">ESMO</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Processes</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">LPS</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Forwards to</span>
                  </div>
                  <div className="ml-1.5 border-l-2 border-muted h-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">PCO</span>
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
                  href="/systems/esmo"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">ESMO</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
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
                  href="/systems/sds"
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">SDS</span>
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
