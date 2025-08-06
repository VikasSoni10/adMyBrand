"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export default function Card({ children, className, hover = true, glass = true }: CardProps) {
  const baseClasses = "rounded-2xl p-6 transition-all duration-300"
  const glassClasses = glass ? "bg-white/5 backdrop-blur-lg border border-white/10" : "bg-white shadow-lg"
  const hoverClasses = hover ? "hover:bg-white/10 hover:border-white/20 hover:shadow-2xl" : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(baseClasses, glassClasses, hoverClasses, className)}
    >
      {children}
    </motion.div>
  )
}
