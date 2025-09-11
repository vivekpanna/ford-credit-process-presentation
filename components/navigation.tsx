"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search-bar"
import {
  Menu,
  Home,
  Building2,
  FileText,
  Target,
  Shield,
  Database,
  CreditCard,
  GitBranch,
  BarChart3,
  Users,
  Search,
  Presentation,
  Lightbulb,
  HelpCircle,
  AlertTriangle,
  UserCheck,
  Download,
  ChevronDown,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigationCategories = {
  overview: [
    { href: "/", label: "Overview", icon: Home },
    { href: "/presentation", label: "Presentation", icon: Presentation, description: "Interactive Slides" },
  ],
  knowledge: [
    { href: "/key-pointers", label: "Key Pointers", icon: Lightbulb, description: "Critical Insights" },
    { href: "/faq", label: "FAQ", icon: HelpCircle, description: "Frequently Asked Questions" },
    { href: "/key-issues", label: "Key Issues", icon: AlertTriangle, description: "Critical Challenges" },
    { href: "/vera-role", label: "Vera's Role", icon: UserCheck, description: "System Expert Profile" },
  ],
  systems: [
    { href: "/systems/esmo", label: "ESMO", icon: Building2, description: "Dealer System" },
    { href: "/systems/lps", label: "LPS", icon: FileText, description: "Loan Processing System" },
    { href: "/systems/pco", label: "PCO", icon: Target, description: "Power Curve Origination" },
    { href: "/systems/sds", label: "SDS", icon: Shield, description: "Scoring & Decision System" },
  ],
  bureaus: [
    { href: "/bureaus/schufa", label: "Schufa", icon: Database, description: "German Credit Bureau" },
    { href: "/bureaus/creditreform", label: "Creditreform", icon: CreditCard, description: "Commercial Credit Info" },
  ],
  processes: [
    { href: "/process-flow", label: "Process Flow", icon: GitBranch, description: "End-to-End Workflow" },
    { href: "/analytics", label: "Analytics", icon: BarChart3, description: "Data & Reporting" },
  ],
}

const handleDownloadPDF = (pageType: "current" | "all") => {
  if (pageType === "current") {
    window.print()
  } else {
    // For all pages, we'll trigger a comprehensive PDF generation
    console.log("[v0] Generating comprehensive PDF of all pages")
    alert("Comprehensive PDF generation will be implemented with backend support")
  }
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const NavDropdown = ({ category, items, label }: { category: string; items: any[]; label: string }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          {label}
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className={`flex items-center gap-2 ${isActive ? "bg-accent" : ""}`}>
                <Icon className="h-4 w-4" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  {item.description && <div className="text-xs text-muted-foreground">{item.description}</div>}
                </div>
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const MobileNavItems = () => (
    <div className="space-y-4">
      {Object.entries(navigationCategories).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground px-3">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          {items.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent ${
                  isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <div>
                  <span className="font-medium">{item.label}</span>
                  {item.description && <div className="text-xs text-muted-foreground">{item.description}</div>}
                </div>
              </Link>
            )
          })}
        </div>
      ))}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Credit Process Hub</span>
          </Link>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Product Management Training
          </Badge>
        </div>

        <div className="hidden lg:flex flex-1 justify-center max-w-md mx-8">
          <SearchBar />
        </div>

        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
          >
            <Home className="h-4 w-4 inline mr-2" />
            Overview
          </Link>
          <NavDropdown category="knowledge" items={navigationCategories.knowledge} label="Knowledge" />
          <NavDropdown category="systems" items={navigationCategories.systems} label="Systems" />
          <NavDropdown category="bureaus" items={navigationCategories.bureaus} label="Bureaus" />
          <NavDropdown category="processes" items={navigationCategories.processes} label="Processes" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Download PDF</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleDownloadPDF("current")}>
                <Download className="h-4 w-4 mr-2" />
                Current Page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDownloadPDF("all")}>
                <Download className="h-4 w-4 mr-2" />
                Complete Guide
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setShowMobileSearch(!showMobileSearch)}>
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Credit Process Hub</span>
              </div>
              <div className="mb-6">
                <SearchBar />
              </div>

              <div className="mb-6 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start bg-transparent"
                  onClick={() => handleDownloadPDF("current")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Current Page
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start bg-transparent"
                  onClick={() => handleDownloadPDF("all")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Complete Guide
                </Button>
              </div>

              <nav>
                <MobileNavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showMobileSearch && (
        <div className="lg:hidden border-t bg-background p-4">
          <SearchBar />
        </div>
      )}
    </header>
  )
}
