"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "@/components/ui/TestimonialCard"
import Button from "@/components/ui/Button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content:
      "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in engagement within the first month. The AI-generated content is incredibly sophisticated and on-brand.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupLab",
    content:
      "As a startup, we needed powerful marketing tools without the enterprise price tag. ADmyBRAND delivered exactly that. The automation features saved us 20+ hours per week.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Creative Studios",
    content:
      "The brand voice optimization feature is a game-changer. Our messaging is now consistent across all platforms, and our brand recognition has improved dramatically.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "David Park",
    role: "CMO",
    company: "GrowthCorp",
    content:
      "The analytics and insights provided by ADmyBRAND are unparalleled. We can now make data-driven decisions that have resulted in a 250% ROI improvement.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Lead",
    company: "InnovateCo",
    content:
      "The multi-platform integration is seamless. Managing campaigns across all our channels has never been easier. The AI recommendations are spot-on every time.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
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
            Trusted by
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful businesses that have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={`${currentIndex}-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="sm" onClick={prevTestimonial}>
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-purple-500" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <Button variant="ghost" size="sm" onClick={nextTestimonial}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
