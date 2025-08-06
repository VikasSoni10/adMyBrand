"use client"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import PricingSection from "@/components/sections/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
