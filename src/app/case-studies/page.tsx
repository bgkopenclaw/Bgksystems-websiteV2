import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Methodology in Practice
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              How We Approach Complex Automation Challenges
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              These scenarios illustrate our methodology and the projected outcomes we design for 
              businesses facing specific operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-24">
            {scenarios.map((scenario, index) => (
              <div 
                key={scenario.title}
                className="grid lg:grid-cols-2 gap-12 items-center pb-16 border-b border-slate-200 last:border-0"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-slate-100 text-slate-700 border-slate-200">
                      {scenario.industry}
                    </Badge>
                    <span className="text-sm text-slate-500">{scenario.timeline}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {scenario.title}
                  </h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {scenario.description}
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-amber-800">
                      <strong>Illustrative Scenario</strong> — This example demonstrates our methodology and expected outcomes based on our approach.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {scenario.projections.map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Our Approach:</h4>
                    <ul className="space-y-2">
                      {scenario.approach.map((step) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Explore This Methodology
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className={`bg-slate-100 rounded-2xl aspect-video flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-slate-400">Process Visualization</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projected Impact Across Industries
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Based on our methodology and comparable implementations, here's the expected range of outcomes 
              we design for organizations implementing our automation systems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {projections.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to See What These Results Look Like for Your Business?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Every organization has unique operational challenges. Let's discuss how our methodology 
            applies to your specific situation and what outcomes you can expect.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const scenarios = [
  {
    industry: "SaaS",
    timeline: "6-8 week implementation",
    title: "Reducing Support Response Time for High-Growth Software Companies",
    description: "A mid-size B2B SaaS company processing 2,000+ support tickets monthly faces scaling challenges. Their support team is overwhelmed, response times are slipping, and customer satisfaction is at risk as they approach their next growth phase.",
    projections: [
      { value: "85-90%", label: "Response Time Reduction" },
      { value: "70-80%", label: "Auto-Resolution Rate" },
      { value: "$40-60K", label: "Projected Annual Savings" }
    ],
    approach: [
      "Deploy intelligent triage system to categorize and prioritize incoming requests",
      "Implement AI agent trained on product documentation and historical resolutions",
      "Design escalation pathways for complex issues requiring human expertise",
      "Build analytics dashboard to monitor resolution quality and customer satisfaction"
    ]
  },
  {
    industry: "Logistics",
    timeline: "8-10 week implementation",
    title: "Automating Lead Qualification for Transportation & Logistics Firms",
    description: "A regional logistics company receives 500+ inbound leads monthly but lacks systematic qualification. Sales reps spend hours on unqualified prospects while high-value opportunities sit unattended in the CRM.",
    projections: [
      { value: "2.5-3.5x", label: "Conversion Rate Improvement" },
      { value: "50-65%", label: "Sales Time Reclaimed" },
      { value: "$100-150K", label: "Projected Revenue Impact" }
    ],
    approach: [
      "Design multi-factor scoring system based on company size, shipping volume, and urgency",
      "Deploy AI agent for initial outreach and qualification conversations",
      "Integrate with CRM for seamless handoff to sales team",
      "Implement follow-up sequences for nurture-stage prospects"
    ]
  },
  {
    industry: "Healthcare",
    timeline: "10-12 week implementation",
    title: "Streamlining Patient Intake for Specialty Medical Practices",
    description: "A multi-location specialty practice spends 15+ minutes per patient on manual intake, insurance verification, and scheduling. Administrative burden is high, errors are common, and patient experience suffers from lengthy check-in processes.",
    projections: [
      { value: "70-80%", label: "Processing Time Reduction" },
      { value: "99.5%+", label: "Accuracy Rate" },
      { value: "400-600", label: "Hours/Month Reclaimed" }
    ],
    approach: [
      "Build HIPAA-compliant intake system with intelligent form processing",
      "Implement automated insurance verification and eligibility checking",
      "Design scheduling optimization based on provider availability and patient needs",
      "Create audit trail and compliance reporting for regulatory requirements"
    ]
  }
];

const projections = [
  {
    value: "70-85%",
    label: "Time Reduction",
    description: "Typical decrease in manual processing time"
  },
  {
    value: "2.5-4x",
    label: "ROI Range",
    description: "Projected return within 6-12 months"
  },
  {
    value: "99%+",
    label: "Accuracy",
    description: "Expected error reduction vs. manual processes"
  },
  {
    value: "24/7",
    label: "Coverage",
    description: "Continuous automation availability"
  }
];
