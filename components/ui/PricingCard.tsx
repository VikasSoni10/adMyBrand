"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Button from "./Button"

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  onSelect: () => void
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText,
  onSelect,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-white/5 backdrop-blur-lg border rounded-2xl p-8 h-full ${
        popular ? "border-purple-500 shadow-2xl shadow-purple-500/20" : "border-white/10"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={popular ? "primary" : "secondary"} size="lg" className="w-full" onClick={onSelect}>
        {buttonText}
      </Button>
    </motion.div>
  )
}
