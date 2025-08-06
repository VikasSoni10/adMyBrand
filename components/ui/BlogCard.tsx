"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  summary: string
  tag: string
  publishedDate: string
  image: string
  href: string
  index: number
}

export default function BlogCard({ title, summary, tag, publishedDate, image, href, index }: BlogCardProps) {
  const tagColors = {
    "AI Strategy": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Case Study": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Guides: "bg-green-500/20 text-green-300 border-green-500/30",
    Analytics: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    Automation: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    Trends: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  }

  const tagStyle = tagColors[tag as keyof typeof tagColors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
          {/* Featured Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${tagStyle}`}>
                {tag}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
              {title}
            </h3>

            <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">{summary}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{publishedDate}</span>
              </div>

              <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
