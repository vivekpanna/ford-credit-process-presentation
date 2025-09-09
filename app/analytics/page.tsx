import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BarChart3, Database, FileText, TrendingUp, Clock, Users, Shield, Building2 } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Analytics & Reporting</h1>
              <p className="text-xl text-muted-foreground">Data Management & Business Intelligence</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive overview of data flows, storage systems, and reporting capabilities that support credit
            decision analytics, risk monitoring, and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Data Storage Systems */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Data Storage Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Credit process data flows through multiple specialized systems, each serving specific purposes in the
                  data lifecycle from application processing to long-term analytics.
                </p>
                <div className="space-y-4">
                  <Card className="p-4 bg-green-50 border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-900">LPS - Operational Data</h4>
                        <Badge variant="outline" className="text-green-700">
                          Primary System
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-green-800 mb-2">
                      Stores all application and decision data during active processing. Handles real-time operations
                      and immediate business needs.
                    </p>
                    <div className="text-xs text-green-700">
                      Retention: Operational lifecycle • Purpose: Active processing and decisions
                    </div>
                  </Card>

                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-blue-900">LA - Contract Management</h4>
                        <Badge variant="outline" className="text-blue-700">
                          Contract System
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-blue-800 mb-2">
                      Manages approved contracts, payment processing, and ongoing customer relationships. Provides
                      contract data back to LPS for risk monitoring.
                    </p>
                    <div className="text-xs text-blue-700">
                      Retention: Contract lifecycle • Purpose: Payment processing and contract management
                    </div>
                  </Card>

                  <Card className="p-4 bg-purple-50 border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                      <div>
                        <h4 className="font-semibold text-purple-900">MIS - Management Reporting</h4>
                        <Badge variant="outline" className="text-purple-700">
                          Reporting System
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-purple-800 mb-2">
                      Receives data from LPS for management reporting, scorecards, and business intelligence. Supports
                      operational reporting and performance monitoring.
                    </p>
                    <div className="text-xs text-purple-700">
                      Retention: Historical • Purpose: Management reporting and scorecards
                    </div>
                  </Card>

                  <Card className="p-4 bg-amber-50 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="h-6 w-6 text-amber-600" />
                      <div>
                        <h4 className="font-semibold text-amber-900">DDW - Data Warehouse</h4>
                        <Badge variant="outline" className="text-amber-700">
                          Analytics Platform
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-amber-800 mb-2">
                      Long-term data storage and analytics platform. Supports advanced analytics, trend analysis, and
                      regulatory reporting requirements.
                    </p>
                    <div className="text-xs text-amber-700">
                      Retention: Long-term • Purpose: Analytics, compliance, and historical analysis
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Reporting Capabilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Reporting & Analytics Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Operational Reports</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Daily Schufa Transmission</h5>
                          <p className="text-sm text-muted-foreground">
                            Daily reports on Schufa query volumes, response times, and processing status
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Credit Decision Analytics</h5>
                          <p className="text-sm text-muted-foreground">
                            Analysis of approval rates, referral patterns, and decision quality metrics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Strategic Reports</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Risk Monitoring Dashboards</h5>
                          <p className="text-sm text-muted-foreground">
                            Real-time risk metrics, portfolio performance, and early warning indicators
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Regulatory Compliance</h5>
                          <p className="text-sm text-muted-foreground">
                            GDPR compliance reports, audit trails, and regulatory submission data
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Flow Diagram */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Data Flow Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-900">LPS</h4>
                        <p className="text-sm text-green-700">Source System</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-12 bg-muted"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Building2 className="h-6 w-6 text-blue-600" />
                        <div>
                          <h5 className="font-medium text-blue-900">LA</h5>
                          <p className="text-xs text-blue-700">Contracts</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <TrendingUp className="h-6 w-6 text-purple-600" />
                        <div>
                          <h5 className="font-medium text-purple-900">MIS</h5>
                          <p className="text-xs text-purple-700">Reporting</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <Database className="h-6 w-6 text-amber-600" />
                        <div>
                          <h5 className="font-medium text-amber-900">DDW</h5>
                          <p className="text-xs text-amber-700">Analytics</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Bidirectional Flow:</strong> LA sends contract data back to LPS for customer exposure
                      monitoring and risk assessment updates
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
                <CardTitle className="text-lg">Data Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Storage Systems</span>
                  <Badge variant="secondary">4 Systems</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Data Sources</span>
                  <Badge variant="outline">Multiple</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Retention</span>
                  <Badge className="bg-blue-100 text-blue-800">Lifecycle-based</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Compliance</span>
                  <Badge className="bg-green-100 text-green-800">GDPR Ready</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Metrics Tracked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Approval Rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">Processing Times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">Risk Indicators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Customer Behavior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <span className="text-sm">Data Quality</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compliance & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">GDPR Compliance</h4>
                  <p className="text-sm text-green-800">
                    All data processing follows GDPR requirements with proper consent management and data retention
                    policies.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Audit Trail</h4>
                  <p className="text-sm text-blue-800">
                    Complete audit trails maintained for all credit decisions and data access for regulatory compliance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
