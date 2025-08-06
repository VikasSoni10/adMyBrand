"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import PricingCard from "@/components/ui/PricingCard"
import Modal from "@/components/ui/Modal"

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "AI Content Generation (100 pieces/month)",
      "Basic Analytics Dashboard",
      "Social Media Integration (3 platforms)",
      "Email Support",
      "Brand Voice Analysis",
      "Campaign Templates",
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$79",
    period: "month",
    description: "Ideal for growing businesses and agencies",
    features: [
      "AI Content Generation (500 pieces/month)",
      "Advanced Analytics & Reporting",
      "Social Media Integration (All platforms)",
      "Priority Support",
      "Advanced Targeting Tools",
      "A/B Testing Suite",
      "Custom Brand Guidelines",
      "Team Collaboration (5 users)",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "month",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited AI Content Generation",
      "Enterprise Analytics Suite",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "Advanced API Access",
      "Unlimited Team Members",
      "Custom Integrations",
      "SLA Guarantee",
    ],
    buttonText: "Contact Sales",
  },
]

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }

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
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start with a 14-day free trial. No credit card required. Upgrade or downgrade at any time to match your
            growing needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
              onSelect={() => handlePlanSelect(plan.name)}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`${selectedPlan} Plan Selected`}>
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            You've selected the {selectedPlan} plan. Ready to transform your marketing with AI?
          </p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
              Start Free Trial
            </button>
            <button
              className="w-full text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </Modal>
    </section>
  )
}
