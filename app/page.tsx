"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import {
  Users,
  Database,
  Shield,
  Building2,
  CreditCard,
  FileText,
  Target,
  ArrowRight,
  GitBranch,
  BarChart3,
} from "lucide-react"

const systemCards = [
  {
    name: "ESMO",
    description: "Dealer System",
    icon: Building2,
    href: "/systems/esmo",
    details: "Entry point for credit applications from dealers",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  },
  {
    name: "LPS",
    description: "Loan Processing System",
    icon: FileText,
    href: "/systems/lps",
    details: "Initial validation and customer verification",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
  },
  {
    name: "PCO",
    description: "Power Curve Origination",
    icon: Target,
    href: "/systems/pco",
    details: "Credit bureau data retrieval and processing",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
  },
  {
    name: "SDS",
    description: "Scoring & Decision System",
    icon: Shield,
    href: "/systems/sds",
    details: "Risk assessment and automated decision making",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
  },
]

const bureauCards = [
  {
    name: "Schufa",
    description: "German Credit Bureau",
    icon: Database,
    href: "/bureaus/schufa",
    details: "Personal credit information and fraud detection",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
  },
  {
    name: "Creditreform",
    description: "Commercial Credit Info",
    icon: CreditCard,
    href: "/bureaus/creditreform",
    details: "Business credit assessment and company data",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
  },
]

const quickLinks = [
  {
    title: "Process Flow",
    description: "End-to-end credit process workflow",
    icon: GitBranch,
    href: "/process-flow",
  },
  {
    title: "Analytics & Reporting",
    description: "Data management and reporting systems",
    icon: BarChart3,
    href: "/analytics",
  },
]

const stats = [
  { label: "Systems Integrated", value: "6+", icon: Database },
  { label: "Process Steps", value: "5", icon: GitBranch },
  { label: "Decision Points", value: "Multiple", icon: Shield },
  { label: "Data Sources", value: "2 Bureaus", icon: CreditCard },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4 mb-4">
              <Badge variant="secondary" className="text-lg px-4 py-2 text-slate-700">
                UK
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 text-slate-700">
                Germany
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Understanding Credit Processes</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A comprehensive knowledge transfer for Product Management teams covering credit system architecture, data
              flows, and decision processes.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>Knowledge Transfer Sessions with Carsten & Vera</span>
            </div>

            <div className="flex justify-center mt-8 mb-6">
              <SearchBar />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/process-flow">
                  View Process Flow <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/systems/esmo">Explore Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Systems Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Systems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the key systems that power our credit processing workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemCards.map((system) => (
              <Link key={system.name} href={system.href}>
                <Card className={`h-full transition-all duration-200 ${system.color} cursor-pointer`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <system.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{system.name}</CardTitle>
                        <p className="text-muted-foreground">{system.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{system.details}</p>
                    <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Bureaus Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Credit Bureaus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              External data sources for comprehensive credit assessment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bureauCards.map((bureau) => (
              <Link key={bureau.name} href={bureau.href}>
                <Card className={`h-full transition-all duration-200 ${bureau.color} cursor-pointer`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <bureau.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{bureau.name}</CardTitle>
                        <p className="text-muted-foreground">{bureau.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{bureau.details}</p>
                    <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-lg text-muted-foreground">Dive deeper into process flows and data management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <Card className="h-full transition-all duration-200 hover:shadow-lg cursor-pointer border-2 hover:border-primary/20">
                  <CardHeader className="text-center">
                    <link.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <p className="text-muted-foreground">{link.description}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary font-medium">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Process at a Glance</h2>
            <p className="text-lg text-muted-foreground">High-level overview of the credit decision workflow</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold">Application</h3>
                <p className="text-sm text-muted-foreground">Dealer submits via ESMO</p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold">Validation</h3>
                <p className="text-sm text-muted-foreground">LPS processes data</p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold">Assessment</h3>
                <p className="text-sm text-muted-foreground">PCO & SDS evaluate risk</p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold">Decision</h3>
                <p className="text-sm text-muted-foreground">Approve or refer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
