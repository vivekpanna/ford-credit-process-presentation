"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X, Filter, Building2, FileText, Target, Shield, Database, CreditCard } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "system" | "bureau" | "process" | "concept"
  category: string
  url: string
  icon: any
  tags: string[]
}

const searchData: SearchResult[] = [
  {
    id: "esmo",
    title: "ESMO - Dealer System",
    description: "Entry point for credit applications from dealers across our network",
    type: "system",
    category: "Core Systems",
    url: "/systems/esmo",
    icon: Building2,
    tags: ["dealer", "application", "entry", "frontend", "submission"],
  },
  {
    id: "lps",
    title: "LPS - Loan Processing System",
    description: "Central processing hub for credit applications with validation and routing",
    type: "system",
    category: "Core Systems",
    url: "/systems/lps",
    icon: FileText,
    tags: ["processing", "validation", "routing", "customer", "verification"],
  },
  {
    id: "pco",
    title: "PCO - Power Curve Origination",
    description: "Credit bureau interface system with scoring and referral rules",
    type: "system",
    category: "Core Systems",
    url: "/systems/pco",
    icon: Target,
    tags: ["bureau", "scoring", "referral", "rules", "commercial", "scorecard"],
  },
  {
    id: "sds",
    title: "SDS - Scoring & Decision System",
    description: "Risk assessment and automated decision making engine",
    type: "system",
    category: "Core Systems",
    url: "/systems/sds",
    icon: Shield,
    tags: ["risk", "decision", "scoring", "assessment", "automation"],
  },
  {
    id: "schufa",
    title: "Schufa - German Credit Bureau",
    description: "Personal credit information and fraud detection services",
    type: "bureau",
    category: "Credit Bureaus",
    url: "/bureaus/schufa",
    icon: Database,
    tags: ["personal", "credit", "fraud", "detection", "germany", "individual"],
  },
  {
    id: "creditreform",
    title: "Creditreform - Commercial Credit Info",
    description: "Business credit assessment and company verification services",
    type: "bureau",
    category: "Credit Bureaus",
    url: "/bureaus/creditreform",
    icon: CreditCard,
    tags: ["commercial", "business", "company", "verification", "pop", "scorecard"],
  },
  {
    id: "process-flow",
    title: "Credit Process Flow",
    description: "End-to-end workflow visualization from application to decision",
    type: "process",
    category: "Process Flow",
    url: "/process-flow",
    icon: Target,
    tags: ["workflow", "visualization", "end-to-end", "animation", "steps"],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Data management, reporting systems, and business intelligence",
    type: "process",
    category: "Analytics",
    url: "/analytics",
    icon: Database,
    tags: ["data", "reporting", "analytics", "intelligence", "compliance"],
  },
]

interface SearchBarProps {
  onResultSelect?: (result: SearchResult) => void
}

export function SearchBar({ onResultSelect }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filterOptions = [
    { value: "system", label: "Systems", count: 4 },
    { value: "bureau", label: "Bureaus", count: 2 },
    { value: "process", label: "Processes", count: 2 },
  ]

  const filteredResults = searchData.filter((item) => {
    const matchesQuery =
      query === "" ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))

    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(item.type)

    return matchesQuery && matchesFilter
  })

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearFilters = () => {
    setSelectedFilters([])
  }

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false)
    setQuery("")
    if (onResultSelect) {
      onResultSelect(result)
    } else {
      window.location.href = result.url
    }
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search systems, processes, or concepts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-4 py-2 w-full"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => {
              setQuery("")
              setIsOpen(false)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mt-3">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Filter by:</span>
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            variant={selectedFilters.includes(option.value) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleFilter(option.value)}
            className="h-7"
          >
            {option.label} ({option.count})
          </Button>
        ))}
        {selectedFilters.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-muted-foreground">
            Clear
          </Button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (query || selectedFilters.length > 0) && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {filteredResults.length > 0 ? (
              <div className="divide-y">
                {filteredResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-4 hover:bg-accent cursor-pointer transition-colors"
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <result.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm truncate">{result.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{result.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {result.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {result.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{result.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Search className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">No results found</p>
                <p className="text-xs text-muted-foreground mt-1">Try adjusting your search terms or filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Click outside to close */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
