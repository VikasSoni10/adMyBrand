"use client"

import { motion } from "framer-motion"
import BlogCard from "@/components/ui/BlogCard"
import Button from "@/components/ui/Button"
import { BookOpen } from 'lucide-react'

const blogPosts = [
  {
    title: "The Future of AI-Powered Marketing: 2025 Trends and Predictions",
    summary:
      "Discover the latest AI marketing trends that will shape the industry in 2025 and how to prepare your brand for the future.",
    tag: "AI Strategy",
    publishedDate: "Jan 15, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_32_21%20AM-VgqiFdnB4IEUdkWFXplLoU8xCqAqkG.png",
    href: "/blog/ai-marketing-trends-2025",
  },
  {
    title: "How TechFlow Inc Increased ROI by 300% with AI Content Generation",
    summary:
      "A detailed case study showing how one company transformed their marketing strategy using ADmyBRAND AI Suite.",
    tag: "Case Study",
    publishedDate: "Jan 12, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_32_10%20AM-tZ8G3TIP9I6tVpiYBP0Wb682s4hjTc.png",
    href: "/blog/techflow-case-study",
  },
  {
    title: "Complete Guide to AI-Driven Social Media Automation",
    summary:
      "Learn how to automate your social media campaigns while maintaining authentic brand voice and engagement.",
    tag: "Guides",
    publishedDate: "Jan 10, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_31_19%20AM-3rgH0CQe99sKUaYjm7QvwHICpjkBPH.png",
    href: "/blog/social-media-automation-guide",
  },
  {
    title: "Understanding Marketing Analytics: Key Metrics That Matter",
    summary: "Master the essential marketing metrics and KPIs that drive business growth and campaign optimization.",
    tag: "Analytics",
    publishedDate: "Jan 8, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_31_54%20AM-qELSnq34b0AQp8cS4yhAWA1CJAODtq.png",
    href: "/blog/marketing-analytics-guide",
  },
  {
    title: "Building Your First AI Marketing Campaign in 10 Minutes",
    summary:
      "Step-by-step tutorial for creating high-converting marketing campaigns using AI-powered tools and automation.",
    tag: "Guides",
    publishedDate: "Jan 5, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_35_26%20AM-ePzsJciN4bgnEBUi5pwsP60czRp89h.png",
    href: "/blog/first-ai-campaign-tutorial",
  },
  {
    title: "The Rise of Conversational AI in Customer Engagement",
    summary:
      "Explore how conversational AI is revolutionizing customer interactions and driving higher engagement rates.",
    tag: "Trends",
    publishedDate: "Jan 3, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%206%2C%202025%2C%2011_32_03%20AM-FVz2wZUu3GPsI37xWSOxIfEaTSJwxC.png",
    href: "/blog/conversational-ai-trends",
  },
]

export default function BlogSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Blog &
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Resources
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn, Grow, and Stay Ahead with AI Marketing Insights
          </p>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Discover expert strategies, case studies, and actionable guides to master AI-powered marketing
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              summary={post.summary}
              tag={post.tag}
              publishedDate={post.publishedDate}
              image={post.image}
              href={post.href}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button variant="secondary" size="lg" className="group">
            View All Articles
            <BookOpen className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with AI Marketing Insights</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest AI marketing strategies, case studies, and industry insights delivered to your inbox
              weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              <Button className="whitespace-nowrap">Subscribe Now</Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">No spam, unsubscribe at any time. We respect your privacy.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
