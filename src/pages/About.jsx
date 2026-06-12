import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import DonationCTA from '../components/DonationCTA'
import { Target, Eye, Heart, ShieldAlert, Award, HelpingHand } from 'lucide-react'
import { motion } from 'framer-motion'
import logoImg from '../assets/images.png'
import posterImg from '../assets/poster.png'

export default function About() {
  return (
    <PageTransition>
      {/* Header Banner */}
      <div className="relative bg-navy-dark min-h-[50vh] flex flex-col justify-center items-center overflow-hidden text-center py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark/95" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />
        
        <div className="relative z-10 site-container w-full">
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Who We Are</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">A Shelter of Love & Dignity</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Registered charitable trust operating in Puducherry, dedicated to holding the hands of the most vulnerable and abandoned elders.
          </p>
        </div>
      </div>

      {/* Main Info Section */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] hover:scale-[1.02] transition-transform">
                  <img src={logoImg} alt="Kaikoduppom Trust" className="w-full h-full object-cover animate-fade-in" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] mt-8 hover:scale-[1.02] transition-transform">
                  <img src={posterImg} alt="Our Mission" className="w-full h-full object-cover animate-fade-in" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-5">
                Our Genesis & Mission
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Founded by <strong className="text-navy-dark">Mr. Jagadeesan Sellamuthu</strong>, Kaikoduppom (which translates to "Let us hold hands") was born out of a profound need to address the rising neglect of elderly parents. In today's fast-paced world, many senior citizens are left on streets, without shelter, food, or dignity.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                What began as a small initiative soon evolved into a government-recognized charitable trust. Today, the home provides shelter, healthcare, psychological support, and hospice care to destitute senior citizens free of charge.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Our residents are provided nutritious home-cooked meals, 24/7 personal care assistance, regular medical checkups, and above all, a family atmosphere where they are treated with absolute respect.
              </p>
              <div className="border-l-4 border-gold bg-cream p-5 rounded-r-xl">
                <p className="text-navy-dark font-playfair italic font-medium text-sm">
                  "No person who has contributed a lifetime to society should have to spend their twilight years in fear, hunger, or neglect. We exist to be their children when they have none."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">Our Mission</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                To rescue, rehabilitate, and nurture abandoned and destitute elders. We provide they receive hot meals, round-the-clock physical assistance, access to quality medical supervision, and hospice care with absolute dignity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">Our Vision</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                To build a compassionate society where elder neglect is eradicated. We envision expanding our specialized facilities for cancer palliative care, housing more residents in clean environments, and inspiring youth to protect their senior citizens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our Pillars"
            title="Values That Guide Us"
            subtitle="At the heart of Kaikoduppom lies a set of unwavering values that dictate how we run our home."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, name: "Unconditional Love", desc: "Treating residents as our own parents, showering them with warmth and affection." },
              { icon: Award, name: "Dignity", desc: "Ensuring every elder lives and leaves this world with respect and proper care." },
              { icon: HelpingHand, name: "Selfless Service", desc: "Working day and night to keep the home functional and clean without selfish motives." },
              { icon: ShieldAlert, name: "Tax Exemption (80G)", desc: "100% transparency in funds. Registered under Section 80G for taxpayer ease." }
            ].map((v, i) => (
              <div key={i} className="text-center p-6 bg-white border border-border rounded-xl shadow-xs">
                <v.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-navy-dark text-base mb-2 font-playfair">{v.name}</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History and Timeline */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones of Hope"
              subtitle="Tracing the history of Kaikoduppom Trust and how it grew from a humble dream into a lifeline for hundreds."
            />
            <Timeline />
          </div>
        </div>
      </section>

      <DonationCTA />
    </PageTransition>
  )
}
