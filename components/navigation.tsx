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
} from "lucide-react"

const navigationItems = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/presentation", label: "Presentation", icon: Presentation, description: "Interactive Slides" },
  { href: "/key-pointers", label: "Key Pointers", icon: Lightbulb, description: "Critical Insights" },
  { href: "/faq", label: "FAQ", icon: HelpCircle, description: "Frequently Asked Questions" },
  { href: "/key-issues", label: "Key Issues", icon: AlertTriangle, description: "Critical Challenges" },
  { href: "/vera-role", label: "Vera's Role", icon: UserCheck, description: "System Expert Profile" },
  { href: "/systems/esmo", label: "ESMO", icon: Building2, description: "Dealer System" },
  { href: "/systems/lps", label: "LPS", icon: FileText, description: "Loan Processing System" },
  { href: "/systems/pco", label: "PCO", icon: Target, description: "Power Curve Origination" },
  { href: "/systems/sds", label: "SDS", icon: Shield, description: "Scoring & Decision System" },
  { href: "/bureaus/schufa", label: "Schufa", icon: Database, description: "German Credit Bureau" },
  { href: "/bureaus/creditreform", label: "Creditreform", icon: CreditCard, description: "Commercial Credit Info" },
  { href: "/process-flow", label: "Process Flow", icon: GitBranch, description: "End-to-End Workflow" },
  { href: "/analytics", label: "Analytics", icon: BarChart3, description: "Data & Reporting" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const NavItems = ({ mobile = false }) => (
    <div className={`${mobile ? "space-y-2" : "flex items-center space-x-1"}`}>
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => mobile && setIsOpen(false)}
            className={`${
              mobile
                ? "flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent"
                : "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            } ${isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Icon className={`${mobile ? "h-5 w-5" : "h-4 w-4"}`} />
            <span>{item.label}</span>
            {mobile && item.description && (
              <span className="text-xs text-muted-foreground ml-auto">{item.description}</span>
            )}
          </Link>
        )
      })}
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

        <nav className="hidden md:block">
          <NavItems />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setShowMobileSearch(!showMobileSearch)}>
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Credit Process Hub</span>
              </div>
              <div className="mb-6">
                <SearchBar />
              </div>
              <nav>
                <NavItems mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showMobileSearch && (
        <div className="md:hidden border-t bg-background p-4">
          <SearchBar />
        </div>
      )}
    </header>
  )
}
