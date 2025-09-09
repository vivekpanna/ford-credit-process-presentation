"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Building2,
  FileText,
  Target,
  Shield,
  Database,
  CreditCard,
  GitBranch,
  ArrowRight,
  Clock,
  Tag,
} from "lucide-react"

interface SearchableContent {
  id: string
  title: string
  description: string
  content: string
  type: "system" | "bureau" | "process" | "concept"
  category: string
  url: string
  icon: any
  tags: string[]
  lastUpdated: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

const searchableContent: SearchableContent[] = [
  {
    id: "esmo-overview",
    title: "ESMO System Overview",
    description: "Comprehensive guide to the dealer system and application entry point",
    content:
      "ESMO serves as the primary entry point for credit applications from dealers across our network. It handles the initial submission and routing of credit requests to the LPS system for processing. The system provides a user-friendly interface for dealers to submit customer information and credit applications.",
    type: "system",
    category: "Core Systems",
    url: "/systems/esmo",
    icon: Building2,
    tags: ["dealer", "application", "entry", "frontend", "submission", "interface"],
    lastUpdated: "2024-01-15",
    difficulty: "beginner",
  },
  {
    id: "lps-validation",
    title: "LPS Validation Process",
    description: "How LPS validates and processes credit applications",
    content:
      "LPS performs initial validation of credit applications, customer verification, and data enrichment. It checks existing customer records, adds Grifo numbers, and coordinates with PCO for external credit bureau inquiries. The system also implements referral rules and manages the flow between different processing stages.",
    type: "system",
    category: "Core Systems",
    url: "/systems/lps",
    icon: FileText,
    tags: ["validation", "processing", "customer", "verification", "enrichment"],
    lastUpdated: "2024-01-14",
    difficulty: "intermediate",
  },
  {
    id: "pco-scorecard",
    title: "PCO Commercial Scorecard",
    description: "Understanding the commercial scorecard calculation in PCO",
    content:
      "PCO calculates commercial scorecards using 6 key variables: inquiry counter, industry code, company age, credit rating index, payment behavior, and balance sheet total. The system uses Alpha and Beta coefficients to convert the total score into POP (Probability of Payment), which indicates the likelihood of successful repayment.",
    type: "system",
    category: "Core Systems",
    url: "/systems/pco",
    icon: Target,
    tags: ["scorecard", "commercial", "pop", "calculation", "variables", "alpha", "beta"],
    lastUpdated: "2024-01-13",
    difficulty: "advanced",
  },
  {
    id: "sds-decision-logic",
    title: "SDS Decision Logic",
    description: "How SDS makes automated credit decisions",
    content:
      "SDS serves as the final decision-making authority, applying sophisticated scoring models and business rules to determine credit outcomes. It evaluates data from PCO, applies risk assessment algorithms, and determines whether applications should be automatically approved, declined, or referred for manual review.",
    type: "system",
    category: "Core Systems",
    url: "/systems/sds",
    icon: Shield,
    tags: ["decision", "logic", "scoring", "risk", "assessment", "automation"],
    lastUpdated: "2024-01-12",
    difficulty: "advanced",
  },
  {
    id: "schufa-integration",
    title: "Schufa Integration Process",
    description: "How we integrate with Schufa for personal credit checks",
    content:
      "Schufa integration provides personal credit information and fraud detection. The process includes address matching, fraud list checking, and can trigger manual review for complex cases. Most inquiries receive immediate responses, but some may require 3-5 minutes for manual processing.",
    type: "bureau",
    category: "Credit Bureaus",
    url: "/bureaus/schufa",
    icon: Database,
    tags: ["schufa", "personal", "credit", "fraud", "detection", "integration"],
    lastUpdated: "2024-01-11",
    difficulty: "intermediate",
  },
  {
    id: "creditreform-process",
    title: "Creditreform Assessment Process",
    description: "Commercial credit assessment through Creditreform",
    content:
      "Creditreform provides comprehensive commercial credit assessment including company verification, beneficial ownership analysis, and financial capacity evaluation (DSCA). The process involves hit list generation, company selection, and detailed financial analysis.",
    type: "bureau",
    category: "Credit Bureaus",
    url: "/bureaus/creditreform",
    icon: CreditCard,
    tags: ["creditreform", "commercial", "assessment", "dsca", "beneficial", "ownership"],
    lastUpdated: "2024-01-10",
    difficulty: "advanced",
  },
  {
    id: "end-to-end-flow",
    title: "End-to-End Process Flow",
    description: "Complete workflow from application to decision",
    content:
      "The credit process flows from ESMO through LPS, PCO, and SDS, with each system performing specific functions. Applications move through validation, bureau checks, scoring, and final decision making, with multiple possible outcomes including approval, referral, or decline.",
    type: "process",
    category: "Process Flow",
    url: "/process-flow",
    icon: GitBranch,
    tags: ["workflow", "end-to-end", "process", "flow", "decision", "approval"],
    lastUpdated: "2024-01-09",
    difficulty: "beginner",
  },
  {
    id: "referral-rules",
    title: "Referral Rules and Logic",
    description: "Understanding when applications are referred for manual review",
    content:
      "Referral rules prevent automatic approval when risk factors are detected. Common triggers include blacklist matches, missing agreements, data quality issues, and complex ownership structures. Rules are managed in both PCO and LPS systems with plans for future consolidation.",
    type: "concept",
    category: "Business Logic",
    url: "/process-flow",
    icon: Shield,
    tags: ["referral", "rules", "manual", "review", "blacklist", "risk"],
    lastUpdated: "2024-01-08",
    difficulty: "intermediate",
  },
]

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"relevance" | "date" | "title">("relevance")

  const filterOptions = [
    { value: "system", label: "Systems", count: 4 },
    { value: "bureau", label: "Bureaus", count: 2 },
    { value: "process", label: "Processes", count: 1 },
    { value: "concept", label: "Concepts", count: 1 },
  ]

  const difficultyOptions = [
    { value: "beginner", label: "Beginner", count: 2 },
    { value: "intermediate", label: "Intermediate", count: 3 },
    { value: "advanced", label: "Advanced", count: 3 },
  ]

  const filteredResults = searchableContent.filter((item) => {
    const matchesQuery =
      query === "" ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))

    const matchesTypeFilter = selectedFilters.length === 0 || selectedFilters.includes(item.type)
    const matchesDifficultyFilter = selectedDifficulty.length === 0 || selectedDifficulty.includes(item.difficulty)

    return matchesQuery && matchesTypeFilter && matchesDifficultyFilter
  })

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      case "title":
        return a.title.localeCompare(b.title)
      default:
        return 0 // relevance - could implement scoring here
    }
  })

  const toggleFilter = (filter: string, type: "type" | "difficulty") => {
    if (type === "type") {
      setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    } else {
      setSelectedDifficulty((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Search & Explore</h1>
              <p className="text-xl text-muted-foreground">Find information across all systems and processes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Content Type Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Content Type</h4>
                  <div className="space-y-2">
                    {filterOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={selectedFilters.includes(option.value) ? "default" : "ghost"}
                        size="sm"
                        onClick={() => toggleFilter(option.value, "type")}
                        className="w-full justify-start"
                      >
                        {option.label} ({option.count})
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Difficulty Level</h4>
                  <div className="space-y-2">
                    {difficultyOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={selectedDifficulty.includes(option.value) ? "default" : "ghost"}
                        size="sm"
                        onClick={() => toggleFilter(option.value, "difficulty")}
                        className="w-full justify-start"
                      >
                        {option.label} ({option.count})
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedFilters.length > 0 || selectedDifficulty.length > 0) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedFilters([])
                      setSelectedDifficulty([])
                    }}
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Search Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Results</span>
                  <Badge variant="secondary">{sortedResults.length}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Systems</span>
                  <Badge variant="outline">4</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Bureaus</span>
                  <Badge variant="outline">2</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Processes</span>
                  <Badge variant="outline">2</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search for systems, processes, concepts..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 border rounded-md bg-background"
                  >
                    <option value="relevance">Sort by Relevance</option>
                    <option value="date">Sort by Date</option>
                    <option value="title">Sort by Title</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-4">
              {sortedResults.length > 0 ? (
                sortedResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <result.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{result.title}</h3>
                            <Badge variant="outline">{result.category}</Badge>
                            <Badge
                              variant={
                                result.difficulty === "beginner"
                                  ? "default"
                                  : result.difficulty === "intermediate"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {result.difficulty}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{result.description}</p>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{result.content}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {result.tags.slice(0, 4).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                              {result.tags.length > 4 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{result.tags.length - 4} more
                                </Badge>
                              )}
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {new Date(result.lastUpdated).toLocaleDateString()}
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <a href={result.url}>
                                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setQuery("")
                        setSelectedFilters([])
                        setSelectedDifficulty([])
                      }}
                    >
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
