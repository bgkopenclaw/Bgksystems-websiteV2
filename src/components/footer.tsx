import { Linkedin, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">BGK</span>
              </div>
              <span className="text-lg font-semibold text-slate-900">BGK Systems</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Enterprise AI automation consulting. We build intelligent systems that scale.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/services" className="hover:text-slate-900">AI Agent Development</Link></li>
              <li><Link href="/services" className="hover:text-slate-900">Workflow Automation</Link></li>
              <li><Link href="/services" className="hover:text-slate-900">Process Optimization</Link></li>
              <li><Link href="/services" className="hover:text-slate-900">AI Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-slate-900">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
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
              <a href="https://Calendly.com/Bgksystems" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
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
  );
}
