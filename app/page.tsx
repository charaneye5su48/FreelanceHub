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
    <main className="relative min-h-screen bg-white">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
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
