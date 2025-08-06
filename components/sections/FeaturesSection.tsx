"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Target, Zap, Users, Globe, MessageSquare, TrendingUp } from "lucide-react"
import FeatureItem from "@/components/ui/FeatureItem"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling ad copy, social media posts, and marketing materials with advanced AI algorithms.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into campaign performance with real-time analytics and predictive modeling.",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Identify and reach your ideal audience with AI-powered demographic and behavioral analysis.",
  },
  {
    icon: Zap,
    title: "Automation Tools",
    description: "Streamline your marketing workflow with intelligent automation and scheduling features.",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Understand your customers better with comprehensive audience analysis and segmentation.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Integration",
    description: "Connect and manage campaigns across all major social media and advertising platforms.",
  },
  {
    icon: MessageSquare,
    title: "Brand Voice Optimization",
    description: "Maintain consistent brand messaging across all channels with AI-powered voice analysis.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuously improve campaign performance with machine learning recommendations.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of AI-powered tools designed to elevate your marketing strategy and drive
            unprecedented growth for your brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
