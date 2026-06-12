import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import ServicesGrid from '../components/ServicesGrid'
import TestimonialsSlider from '../components/TestimonialsSlider'
import DonationCTA from '../components/DonationCTA'
import { CheckCircle2, ShieldCheck, HeartHandshake, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesGrid />

      {/* Why Support Us Section */}
      <section className="section-padding bg-warm-white relative overflow-hidden">
        <div className="site-container">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-gold-dark block">
              Why Partner With Us
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-navy-dark">
              A Trust Built on Transparency & Care
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full mt-5 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "80G Tax Exemption",
                desc: "All donations made to Kaikoduppom Trust are eligible for tax deduction benefits under Section 80G."
              },
              {
                icon: CheckCircle2,
                title: "Govt. Recognized NGO",
                desc: "We are fully registered with State and Central governments, operating under strict compliance."
              },
              {
                icon: HeartHandshake,
                title: "100% Direct Impact",
                desc: "Your support goes directly to food, medicine, shelter, and end-of-life care for abandoned elders."
              },
              {
                icon: Award,
                title: "5-Star Trusted Care",
                desc: "Consistently rated 5.0 on Google with over 521+ reviews from donors, families, and visitors."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-[var(--card-padding-md)] rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-2 font-playfair">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSlider />
      <DonationCTA />
    </PageTransition>
  )
}
