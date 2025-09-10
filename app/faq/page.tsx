"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, HelpCircle, Database, Settings, AlertCircle } from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqCategories = [
    {
      id: "systems",
      title: "System Architecture",
      icon: Database,
      color: "bg-blue-500",
      questions: [
        {
          q: "What is the difference between LPS and PCO?",
          a: "LPS (Leasing Processing System) handles application processing, fleet management, and final credit decisions. PCO (Proposal Connector) manages risk assessment by interfacing with credit bureaus (Schufa, Creditreform) and contains the SDS decision engine for automated risk evaluation.",
        },
        {
          q: "How does the Fleet Management system work?",
          a: "Fleet Management in LPS tracks customer exposure by monitoring existing contracts and credit limits. It receives historical contract data from LA system and performs exposure calculations to determine if customers can receive additional financing based on their established credit lines.",
        },
        {
          q: "What role does LA system play in the credit process?",
          a: "LA (Leasing Administration) is the contract management system that handles post-approval contract administration. It sends contract data to Schufa via CBI interface and provides LPS with historical contract information through the Bad Customer File and contract data interfaces.",
        },
        {
          q: "How does SDS integrate with other systems?",
          a: "SDS (Strategy Design Studio) contains the decision rules and scorecards used by PCO for risk assessment. It processes bureau responses and applies business rules to generate risk decisions that are sent back to LPS for final approval processing.",
        },
      ],
    },
    {
      id: "processes",
      title: "Business Processes",
      icon: Settings,
      color: "bg-emerald-500",
      questions: [
        {
          q: "What happens after a contract is approved?",
          a: "After LPS approves a contract, LA system reports the contract details to Schufa via the CBI (Customer Bureau Interface). This includes contract type, value, duration, and ongoing payment status. The contract data is also fed back to LPS for future fleet management calculations.",
        },
        {
          q: "How are used car valuations handled?",
          a: "For used car financing, LPS sends parallel requests to both PCO (for credit assessment) and DAT (for vehicle valuation). DAT validates the dealer-provided vehicle value. If values don't match, the application goes to manual review. Process improvements have reduced these discrepancies significantly.",
        },
        {
          q: "What is the Bad Customer File process?",
          a: "LA system generates a daily Bad Customer File containing all customers with payment issues or delinquencies. This file is transmitted to PCO to ensure that risk assessments include the most current customer behavior information for future applications.",
        },
        {
          q: "How does Clock Customer processing work?",
          a: "Clock Customers are high-value fleet customers with pre-approved credit lines. While they still go through the standard credit check process (ESMO→LPS→PCO→Bureaus), LPS performs additional validation of their credit limits and exposure before final approval, even if bureau responses are positive.",
        },
      ],
    },
    {
      id: "data",
      title: "Data Management",
      icon: Database,
      color: "bg-purple-500",
      questions: [
        {
          q: "Why isn't the Schufa ID being stored?",
          a: "Currently, Schufa IDs are not systematically stored because no system previously required them. This creates challenges for customer tracking, especially when customers change names (marriage, etc.). Storing Schufa IDs would enable better customer identification and data comparison across time periods.",
        },
        {
          q: "What data does Agata need for risk management?",
          a: "Agata requires comprehensive customer development tracking including all Schufa attributes, customer timeline data, and regulatory compliance information. Currently, this data is scattered across systems and not centrally available, making risk analysis and regulatory reporting difficult.",
        },
        {
          q: "How much do bureau inquiries cost?",
          a: "Creditreform inquiries cost approximately €14.00 each, while Schufa inquiries cost €1.20-1.30 each. These costs add up significantly for scorecard reviews and repeated inquiries. Internal storage of bureau attributes could reduce these recurring costs.",
        },
        {
          q: "What is the Credarate system used for?",
          a: "Credarate is a separate system that performs regular Creditreform inquiries for large customers, independent of the main credit process. This creates duplicate costs since the data isn't shared with other systems. Integration opportunities exist to optimize these inquiries.",
        },
      ],
    },
    {
      id: "technical",
      title: "Technical Issues",
      icon: AlertCircle,
      color: "bg-orange-500",
      questions: [
        {
          q: "What are the main challenges with Alpha system implementation?",
          a: "Alpha faces several challenges: 1) Budget constraints after UK implementation, 2) Different regulatory requirements between UK and Germany, 3) Limited functionality transfer from UK version, 4) System remains inquiry-based rather than customer-centric, 5) Parallel operation with LPS creates complexity and duplicate processes.",
        },
        {
          q: "How should risk interfaces be consolidated in Feiko?",
          a: "Feiko should consolidate key risk interfaces including: Bad Customer File from LA, Fleet Exposure calculations currently in LPS, Used Car Validation (DAT integration), and bureau response processing. This would provide centralized risk control and eliminate duplicate risk assessments across systems.",
        },
        {
          q: "What is the PAL function project for Schufa?",
          a: "The PAL (Personal Attribute Lookup) function project aims to implement Schufa integration similar to the existing Creditreform PAL functionality. This would provide more efficient access to Schufa data and potentially reduce inquiry costs through optimized data retrieval.",
        },
        {
          q: "How can system interfaces be optimized?",
          a: "Interface optimization should focus on: 1) Eliminating duplicate data requests, 2) Centralizing risk-related processes in Feiko, 3) Implementing smart caching for bureau data, 4) Standardizing data formats across systems, 5) Creating comprehensive audit trails for regulatory compliance.",
        },
      ],
    },
  ]

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive answers to common questions about credit process systems and workflows
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-8">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                    <Badge variant="secondary">{category.questions.length} questions</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-start gap-2">
                            <HelpCircle className="h-4 w-4 text-slate-500 mt-1 flex-shrink-0" />
                            {item.q}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-6 text-slate-600 leading-relaxed">{item.a}</div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredCategories.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600 mb-2">No results found</h3>
              <p className="text-slate-500">Try adjusting your search terms or browse all categories above.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
