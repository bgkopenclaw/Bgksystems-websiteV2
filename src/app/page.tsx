import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Bot, 
  Workflow, 
  TrendingUp, 
  CheckCircle2,
  Linkedin,
  Mail,
  Calendar,
  Building2,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">BGK</span>
            </div>
            <span className="text-lg font-semibold text-slate-900">BGK Systems</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
            <Link href="#process" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Process</Link>
            <Link href="#results" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Results</Link>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              Enterprise AI Automation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Build AI Systems That Scale Your Business
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              We help organizations reduce operational costs and eliminate repetitive work through 
              custom AI automation. From intelligent agents to complete workflow transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6">
                View Case Studies
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by teams at</p>
              <div className="flex flex-wrap gap-8 text-slate-400">
                <span className="font-semibold">TechFlow</span>
                <span className="font-semibold">GreenLeaf</span>
                <span className="font-semibold">MedCare Plus</span>
                <span className="font-semibold">CloudSync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              End-to-End AI Automation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              We design, build, and deploy intelligent systems tailored to your specific operational challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="group p-8 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                  <service.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A Proven Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Four phases from initial discovery to fully deployed AI systems delivering measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-slate-200" />
                )}
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Measurable Impact for Our Clients
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We focus on outcomes that matter: reduced operational costs, eliminated repetitive work, 
                and teams that can focus on high-value activities.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Read Case Studies
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 bg-slate-50 rounded-lg">
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-medium text-blue-400 mb-2 uppercase tracking-wide">Client Success</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Explore AI Automation?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary 30-minute consultation. We&apos;ll analyze your current operations 
            and identify the highest-impact automation opportunities for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-white px-8">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            No obligation. Typical response time: within 24 hours.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BGK</span>
                </div>
                <span className="text-lg font-semibold text-slate-900">BGK Systems</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enterprise AI automation consulting. We build intelligent systems that scale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-slate-900">AI Agent Development</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Workflow Automation</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Process Optimization</Link></li>
                <li><Link href="#" className="hover:text-slate-900">AI Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-slate-900">About</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Blog</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:Bgk@Bgksystems.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <Mail className="w-4 h-4" />
                  Bgk@Bgksystems.com
                </a>
                <a href="https://www.linkedin.com/in/benjamin-gruber-kohana-14399b3b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://calendly.com/bgkopenclaw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 BGK Systems. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Benjamin Gruber-Kohana
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Custom AI agents that handle customer interactions, qualify leads, and manage routine tasks autonomously.",
    features: [
      "24/7 customer support automation",
      "Intelligent lead qualification",
      "Natural language processing",
      "Integration with existing tools"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end automation of complex business processes, from document processing to data management.",
    features: [
      "Document processing & extraction",
      "Data entry automation",
      "Multi-step workflow design",
      "Error handling & validation"
    ]
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    description: "Systematic analysis and improvement of operational workflows to eliminate waste and maximize efficiency.",
    features: [
      "Process mapping & analysis",
      "Bottleneck identification",
      "Efficiency recommendations",
      "Performance monitoring"
    ]
  },
  {
    icon: Building2,
    title: "AI Consulting",
    description: "Strategic guidance on AI implementation, technology selection, and digital transformation roadmaps.",
    features: [
      "Technology assessment",
      "Implementation strategy",
      "ROI analysis & planning",
      "Change management support"
    ]
  }
];

const steps = [
  {
    title: "Discovery",
    description: "We analyze your operations, identify pain points, and quantify automation opportunities with detailed ROI projections."
  },
  {
    title: "Design",
    description: "We architect a custom AI solution tailored to your workflows, integrating seamlessly with your existing technology stack."
  },
  {
    title: "Deployment",
    description: "We build and implement your AI systems with comprehensive testing, training, and change management support."
  },
  {
    title: "Optimization",
    description: "We monitor performance, gather feedback, and continuously refine your systems to maximize long-term value."
  }
];

const stats = [
  {
    value: "75%",
    label: "Time Reduction",
    description: "Average decrease in manual task time"
  },
  {
    value: "3x",
    label: "ROI",
    description: "Typical return within 90 days"
  },
  {
    value: "40+",
    label: "Hours/Week",
    description: "Reclaimed per implementation"
  },
  {
    value: "24/7",
    label: "Operations",
    description: "Continuous automation coverage"
  }
];

const testimonials = [
  {
    quote: "BGK Systems delivered exactly what they promised. Our customer response time dropped from hours to minutes, and the system pays for itself every month.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Solutions"
  },
  {
    quote: "The ROI was clear within the first quarter. We've automated 80% of our lead qualification process, and our sales team is more productive than ever.",
    author: "David Park",
    role: "CEO, GreenLeaf Logistics"
  },
  {
    quote: "Professional, thorough, and results-driven. They understood our compliance requirements and built a system that exceeded our expectations.",
    author: "Dr. Emily Watson",
    role: "Director, MedCare Plus"
  }
];
