"use client"

import { motion } from "framer-motion"
import Accordion from "@/components/ui/Accordion"

const faqItems = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced natural language processing and machine learning algorithms trained on millions of high-performing marketing materials. Simply input your brand guidelines, target audience, and campaign goals, and our AI will generate compelling, on-brand content tailored to your specific needs.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "ADmyBRAND AI Suite integrates seamlessly with over 50+ popular marketing platforms including Facebook Ads, Google Ads, HubSpot, Mailchimp, Hootsuite, and many more. Our API also allows for custom integrations with your proprietary systems.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support for Professional and Enterprise plans, extensive documentation, video tutorials, and webinar training sessions. Enterprise customers also get a dedicated account manager and priority support with guaranteed response times.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is never shared with third parties, and you maintain full ownership of all content and insights generated.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before the account closes.",
  },
  {
    question: "Do you offer custom AI model training?",
    answer:
      "Yes, our Enterprise plan includes custom AI model training where we can fine-tune our algorithms specifically for your brand, industry, and unique requirements. This ensures even more accurate and relevant content generation tailored to your specific use case.",
  },
  {
    question: "What languages does ADmyBRAND support?",
    answer:
      "ADmyBRAND currently supports content generation in 25+ languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, and Korean. We're continuously adding support for more languages based on user demand.",
  },
  {
    question: "How accurate are the analytics and predictions?",
    answer:
      "Our AI-powered analytics have shown 85-92% accuracy in performance predictions based on historical data analysis. The system continuously learns from your campaign results to improve prediction accuracy over time, helping you make more informed marketing decisions.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about ADmyBRAND AI Suite. Can't find what you're looking for?
            Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
