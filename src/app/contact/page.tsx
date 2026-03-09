"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Calendar, Linkedin, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ready to explore how AI automation can transform your business? 
              We'd love to hear about your challenges and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How Can We Help? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project, challenges, or questions..."
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Ways to Connect</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Schedule a Call</h3>
                    <p className="text-slate-600 mb-3">
                      Book a free 30-minute consultation at a time that works for you.
                    </p>
                    <Link href="https://Calendly.com/Bgksystems" target="_blank">
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                        Book on Calendly
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600 mb-3">
                      Prefer email? Send us a message and we'll respond within 24 hours.
                    </p>
                    <a 
                      href="mailto:Bgk@Bgksystems.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Bgk@Bgksystems.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Connect on LinkedIn</h3>
                    <p className="text-slate-600 mb-3">
                      Follow us for insights on AI automation and business transformation.
                    </p>
                    <Link 
                      href="https://www.linkedin.com/in/benjamin-gruber-kohana-14399b3b4/"
                      target="_blank"
                    >
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                        View LinkedIn Profile
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">What to Expect</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    No obligation or pressure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Confidential discussion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const faqs = [
  {
    question: "How quickly can you start a project?",
    answer: "We typically begin discovery within 1 week of initial contact. Project kickoff depends on scope, but most engagements start within 2-3 weeks."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "We primarily work with mid-market companies (50-500 employees) and enterprise organizations. For smaller businesses, we recommend our consulting services to help you identify the right DIY solutions."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep experience in professional services, healthcare, real estate, logistics, and SaaS. However, our methodology applies across industries—we've yet to find a business that couldn't benefit from thoughtful automation."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into everything we do. We follow industry best practices, use enterprise-grade tools, and can work within your existing security frameworks. For healthcare clients, we ensure HIPAA compliance."
  },
  {
    question: "What if we don't see results?",
    answer: "We stand behind our work. If the agreed-upon metrics aren't met within the specified timeframe, we'll continue optimizing at no additional cost until they are."
  }
];
