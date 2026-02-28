import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ApplicationForm } from "@/components/application-form"
import { TipsSection } from "@/components/tips-section"
import { MotoSection } from "@/components/moto-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f8f9fa] flex flex-col gap-0">
      <Navbar />
      <MotoSection />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      <TipsSection />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
