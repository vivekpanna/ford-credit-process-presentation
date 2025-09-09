import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, ArrowRight, Users, FileText, CheckCircle, AlertTriangle, Database } from "lucide-react"

export default function ESMOPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">ESMO</h1>
              <p className="text-xl text-muted-foreground">Dealer System</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            ESMO serves as the primary entry point for credit applications from dealers across our network. It handles
            the initial submission and routing of credit requests to the LPS system for processing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  System Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  ESMO (Dealer System) is the front-end application used by dealers to submit credit applications for
                  their customers. It serves as the gateway between dealers and our internal credit processing systems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Primary Function</h4>
                    <p className="text-sm text-blue-800">
                      Collects and validates credit application data from dealers before forwarding to LPS
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">User Base</h4>
                    <p className="text-sm text-green-800">Authorized dealers across UK and Germany operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Process Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Application Submission</h4>
                      <p className="text-sm text-muted-foreground">
                        Dealer enters customer information and credit request details into ESMO interface
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Initial Validation</h4>
                      <p className="text-sm text-muted-foreground">
                        ESMO performs basic data validation and completeness checks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Forward to LPS</h4>
                      <p className="text-sm text-muted-foreground">
                        Validated application is transmitted to LPS for comprehensive processing
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Dealer Interface</h4>
                      <p className="text-sm text-muted-foreground">User-friendly interface for dealer operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Data Collection</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive customer and application data capture
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Validation Rules</h4>
                      <p className="text-sm text-muted-foreground">Built-in validation to ensure data quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">System Integration</h4>
                      <p className="text-sm text-muted-foreground">Seamless connection to LPS processing system</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Considerations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Technical Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">System Dependencies</h4>
                  <p className="text-sm text-amber-800">
                    ESMO relies on stable connectivity to LPS. Any disruption in the connection can impact application
                    processing times.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Data Quality</h4>
                  <p className="text-sm text-blue-800">
                    The quality of data entered in ESMO directly impacts downstream processing efficiency and decision
                    accuracy.
                  </p>
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
                  <Badge variant="secondary">Frontend</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Primary Users</span>
                  <Badge variant="outline">Dealers</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Next System</span>
                  <Badge className="bg-green-100 text-green-800">LPS</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Function</span>
                  <Badge variant="outline">Data Entry</Badge>
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
                    <span className="text-sm text-muted-foreground">Sends to</span>
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
