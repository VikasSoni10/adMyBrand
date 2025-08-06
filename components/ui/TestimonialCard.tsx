"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export default function TestimonialCard({ name, role, company, content, rating, avatar }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">"{content}"</p>
      <div className="flex items-center">
        <Image src={avatar || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
