"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
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

  const NavHoverMenu = ({ category, items, label }: { category: string; items: any[]; label: string }) => (
    <div className="relative group">
      <Button variant="ghost" className="flex items-center gap-1 h-9">
        {label}
        <ChevronDown className="h-3 w-3" />
      </Button>
      <div className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">{label}</div>
          <div className="border-t my-1"></div>
          {items.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-2 py-2 rounded-sm text-sm hover:bg-accent transition-colors ${
                  isActive ? "bg-accent" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  {item.description && <div className="text-xs text-muted-foreground">{item.description}</div>}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )

  const DownloadHoverMenu = () => (
    <div className="relative group">
      <Button variant="ghost" size="sm" className="flex items-center gap-1">
        <Download className="h-4 w-4" />
        <ChevronDown className="h-3 w-3" />
      </Button>
      <div className="absolute top-full right-0 mt-1 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Download PDF</div>
          <div className="border-t my-1"></div>
          <button
            onClick={() => handleDownloadPDF("current")}
            className="flex items-center gap-2 px-2 py-2 rounded-sm text-sm hover:bg-accent transition-colors w-full text-left"
          >
            <Download className="h-4 w-4" />
            Current Page
          </button>
          <button
            onClick={() => handleDownloadPDF("all")}
            className="flex items-center gap-2 px-2 py-2 rounded-sm text-sm hover:bg-accent transition-colors w-full text-left"
          >
            <Download className="h-4 w-4" />
            Complete Guide
          </button>
        </div>
      </div>
    </div>
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

        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
          >
            <Home className="h-4 w-4 inline mr-2" />
            Overview
          </Link>
          <NavHoverMenu category="knowledge" items={navigationCategories.knowledge} label="Knowledge" />
          <NavHoverMenu category="systems" items={navigationCategories.systems} label="Systems" />
          <NavHoverMenu category="bureaus" items={navigationCategories.bureaus} label="Bureaus" />
          <NavHoverMenu category="processes" items={navigationCategories.processes} label="Processes" />

          {pathname !== "/" && (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/search">
                <Search className="h-4 w-4" />
              </Link>
            </Button>
          )}

          <DownloadHoverMenu />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          {pathname !== "/" && (
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
          )}
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
    </header>
  )
}
