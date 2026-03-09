import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Insights on AI & Automation
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Practical guides, industry analysis, and thought leadership on leveraging 
              AI to transform business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="bg-slate-200 rounded-xl aspect-video flex items-center justify-center">
              <span className="text-slate-400">Featured Image</span>
            </div>
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Featured
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                The Complete Guide to AI Agents for Business
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Everything you need to know about implementing AI agents in your organization—from 
                use case identification to deployment and optimization.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 5, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Read Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.title}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-200 aspect-video flex items-center justify-center">
                  <span className="text-slate-400">Article Image</span>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-slate-100 text-slate-700 border-slate-200">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI automation delivered to your inbox. 
            No spam, just valuable content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const categories = [
  "All",
  "AI Strategy",
  "Implementation",
  "Case Studies",
  "Industry Insights",
  "Best Practices"
];

const posts = [
  {
    title: "5 Signs Your Business is Ready for AI Automation",
    excerpt: "Not every process should be automated. Learn the key indicators that suggest AI will deliver real ROI for your organization.",
    category: "AI Strategy",
    readTime: "6 min",
    date: "Mar 3, 2026"
  },
  {
    title: "How to Calculate the ROI of AI Agents",
    excerpt: "A practical framework for measuring the financial impact of AI automation on your business operations.",
    category: "Implementation",
    readTime: "8 min",
    date: "Feb 28, 2026"
  },
  {
    title: "Real Estate Automation: A Complete Guide",
    excerpt: "How brokerages and property managers are using AI to handle leads, schedule showings, and manage documentation.",
    category: "Industry Insights",
    readTime: "10 min",
    date: "Feb 25, 2026"
  },
  {
    title: "The Hidden Costs of Manual Processes",
    excerpt: "Why the true cost of doing things manually is much higher than you think—and how to identify the biggest opportunities.",
    category: "Best Practices",
    readTime: "7 min",
    date: "Feb 20, 2026"
  },
  {
    title: "AI Agent vs. Traditional Automation: What's the Difference?",
    excerpt: "Understanding when to use AI agents versus traditional workflow automation tools like Zapier or Make.",
    category: "AI Strategy",
    readTime: "5 min",
    date: "Feb 15, 2026"
  },
  {
    title: "Building Your First AI Agent: A Step-by-Step Guide",
    excerpt: "A technical walkthrough of creating a customer support AI agent from initial design to deployment.",
    category: "Implementation",
    readTime: "15 min",
    date: "Feb 10, 2026"
  }
];
