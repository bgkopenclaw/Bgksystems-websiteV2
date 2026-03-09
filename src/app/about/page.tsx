import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Building the Future of Business Automation
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              BGK Systems helps organizations transform their operations through intelligent AI automation. 
              Founded by Benjamin Gruber-Kohana, we combine deep technical expertise with a focus on 
              measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that AI should work for people, not replace them. Our mission is to eliminate 
                the repetitive, soul-crushing work that drains teams and prevents businesses from reaching 
                their full potential.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                By automating the mundane, we free up human creativity and intelligence for what matters 
                most: strategy, innovation, and meaningful customer relationships.
              </p>
              <Link href="/contact">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  Work With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 bg-slate-50 rounded-lg">
                  <value.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img
                  src="/benjamin.jpg"
                  alt="Benjamin Gruber-Kohana"
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Founder
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Benjamin Gruber-Kohana
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                AI Automation Consultant & Founder
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                With a background in systems architecture and business operations, Benjamin founded 
                BGK Systems to bridge the gap between cutting-edge AI technology and practical business 
                applications.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                His approach combines technical rigor with a deep understanding of organizational 
                dynamics, ensuring that every automation solution delivers both immediate ROI and 
                long-term strategic value.
              </p>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/benjamin-gruber-kohana-14399b3b4/" target="_blank">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    LinkedIn Profile
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose BGK Systems
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver automation that actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Ready to explore how AI automation can transform your business? 
            We'd love to hear about your challenges and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the tangible impact on your business, not just technical implementation."
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "Technology should enhance human work, not replace it. We design systems that empower your team."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of AI developments to bring you cutting-edge solutions that work."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every project, from discovery to deployment."
  }
];

const differentiators = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "We start with your business goals and work backwards to the technology, ensuring every solution delivers measurable ROI."
  },
  {
    icon: Users,
    title: "Deep Technical Expertise",
    description: "Our methodology combines advanced AI capabilities with proven systems architecture principles for robust, scalable solutions."
  },
  {
    icon: Award,
    title: "End-to-End Service",
    description: "From initial discovery through deployment and ongoing optimization, we provide comprehensive support throughout your automation journey."
  }
];
