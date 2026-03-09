import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Bot, 
  Workflow, 
  TrendingUp, 
  Building2,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              AI Solutions Tailored to Your Business
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From intelligent agents to complete workflow transformation, we deliver 
              end-to-end automation solutions that drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={`bg-slate-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">What's Included</h3>
                  <div className="grid gap-4">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven methodology that ensures every project delivers maximum value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Investment
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent pricing based on project scope and complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div 
                key={plan.name}
                className={`p-8 rounded-2xl border ${
                  plan.featured 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 bg-white'
                }`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-blue-600 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button 
                    className={`w-full ${
                      plan.featured 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation. We'll analyze your operations and recommend 
            the right solution for your specific challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
              Book a Free Consultation
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    fullDescription: "We build intelligent AI agents that handle complex tasks autonomously. From customer support to lead qualification, our agents work 24/7 to keep your business running smoothly.",
    benefits: [
      "Reduce response times from hours to seconds",
      "Handle unlimited concurrent conversations",
      "Integrate seamlessly with your existing tools",
      "Scale without adding headcount"
    ],
    deliverables: [
      "Custom-trained AI agent",
      "Integration with your CRM/help desk",
      "Knowledge base setup",
      "Performance monitoring dashboard",
      "Training and documentation"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    fullDescription: "Transform manual processes into automated workflows. We identify bottlenecks and build systems that move data and tasks through your organization automatically.",
    benefits: [
      "Eliminate manual data entry errors",
      "Process documents in seconds, not hours",
      "Ensure consistent quality and compliance",
      "Free up team time for higher-value work"
    ],
    deliverables: [
      "Process analysis and mapping",
      "Automated workflow design",
      "Integration with existing systems",
      "Error handling and validation",
      "Ongoing monitoring and optimization"
    ]
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    fullDescription: "Before automating, we optimize. Our systematic approach identifies waste, eliminates bottlenecks, and redesigns processes for maximum efficiency.",
    benefits: [
      "Identify hidden inefficiencies",
      "Reduce process cycle times",
      "Improve quality and consistency",
      "Build foundation for automation"
    ],
    deliverables: [
      "Comprehensive process audit",
      "Bottleneck analysis report",
      "Optimization recommendations",
      "Implementation roadmap",
      "ROI projections"
    ]
  },
  {
    icon: Building2,
    title: "AI Consulting",
    fullDescription: "Strategic guidance for organizations navigating AI adoption. We help you make informed decisions about technology, implementation, and organizational change.",
    benefits: [
      "Avoid costly implementation mistakes",
      "Choose the right tools for your needs",
      "Build internal AI capabilities",
      "Create sustainable competitive advantage"
    ],
    deliverables: [
      "Technology assessment",
      "AI readiness evaluation",
      "Implementation strategy",
      "Vendor selection support",
      "Change management plan"
    ]
  }
];

const process = [
  {
    title: "Discovery",
    description: "Deep dive into your operations, pain points, and goals."
  },
  {
    title: "Strategy",
    description: "Design the optimal solution architecture and roadmap."
  },
  {
    title: "Build",
    description: "Develop and test your custom AI automation system."
  },
  {
    title: "Deploy",
    description: "Launch with training, support, and optimization."
  }
];

const pricing = [
  {
    name: "Starter",
    description: "Perfect for small projects and proof-of-concepts",
    price: "$5,000+",
    features: [
      "Single workflow automation",
      "Basic AI agent setup",
      "2 weeks implementation",
      "30 days support",
      "Documentation"
    ],
    featured: false
  },
  {
    name: "Professional",
    description: "Complete automation solution for growing businesses",
    price: "$15,000+",
    features: [
      "Multiple integrated workflows",
      "Advanced AI agent with training",
      "4-6 weeks implementation",
      "90 days support",
      "Performance monitoring",
      "Team training"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for complex organizational needs",
    price: "Custom",
    features: [
      "Full-scale automation platform",
      "Multiple AI agents",
      "Custom integrations",
      "Ongoing optimization",
      "Dedicated support",
      "SLA guarantees"
    ],
    featured: false
  }
];
