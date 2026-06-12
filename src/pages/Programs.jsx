import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import DonationCTA from '../components/DonationCTA'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserCheck, Utensils, HeartPulse, Building2, ChevronRight, HelpCircle, Camera, ShieldCheck } from 'lucide-react'

const campaigns = [
  {
    icon: UserCheck,
    title: 'Sponsor an Elder',
    cost: '₹3,000 / month',
    desc: 'Covers absolute basic necessities including comfortable shelter, daily nutritious meals, toiletries, clothing, and basic medical support for one elder.',
    cta: 'Sponsor an Elder'
  },
  {
    icon: Utensils,
    title: 'Annadhanam (Meal Sponsorship)',
    cost: '₹7,500 / full day',
    desc: 'Provide food for all home residents (breakfast, lunch, tea/snacks, and dinner). Ideal for celebrating special family occasions, birthdays, or memorials.',
    cta: 'Sponsor a Day Meal'
  },
  {
    icon: HeartPulse,
    title: 'Palliative & Cancer Care',
    cost: '₹5,000 / month',
    desc: 'Finances specialized nursing, pain-relief medications, palliative medical visits, soft-food diet, and comfort tools for bedridden or terminally ill cancer patients.',
    cta: 'Support Care Unit'
  },
  {
    icon: Building2,
    title: 'Infrastructure & Home Maintenance',
    cost: 'Custom Contribution',
    desc: 'Supports structural repairs, clean drinking water filtration systems, generator power backup, cleaning supplies, and building maintenance for resident security.',
    cta: 'Contribute to Infrastructure'
  }
]

export default function Programs() {
  return (
    <PageTransition>
      {/* Banner Header */}
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Initiatives</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Sponsorship & Support Programs</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Choose a program that speaks to your heart and make a lasting difference in the lives of our residents today.
          </p>
        </div>
      </div>

      {/* Campaigns Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Active Campaigns"
            title="Sponsor Options"
            subtitle="Explore our donation channels. We ensure 100% of your contributions go directly to the respective causes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {campaigns.map((camp, i) => (
              <motion.div
                key={camp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center">
                      <camp.icon className="w-6 h-6 text-gold-dark" />
                    </div>
                    <span className="text-gold-dark font-extrabold text-base sm:text-xl font-playfair bg-gold/10 px-4 py-1 rounded-full">
                      {camp.cost}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy-dark mb-3">
                    {camp.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-8">
                    {camp.desc}
                  </p>
                </div>
                <Link
                  to="/donate"
                  className="group flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold py-3.5 rounded-full text-xs sm:text-sm transition-all"
                >
                  {camp.cta}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works & Transparency Roadmap */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="text-center mb-16">
            <span className="text-gold-dark text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Transparency Promise</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy-dark">Your Sponsorship Journey</h2>
            <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              We maintain full transparency with our donors. Here is what happens when you sponsor a program.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full mt-5 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HelpCircle,
                step: "Step 1",
                title: "Choose & Donate",
                desc: "Choose a program, execute a secure bank transfer or UPI payment, and share the receipt with us on phone."
              },
              {
                icon: ShieldCheck,
                step: "Step 2",
                title: "Funds Allocation",
                desc: "100% of your sponsored amount is allocated to purchase groceries, medicine, or direct maintenance for the elders."
              },
              {
                icon: Camera,
                step: "Step 3",
                title: "Feedback & Photos",
                desc: "For sponsored meals or dedicated sponsorships, we send you photographs, food distribution logs, and official tax receipts."
              }
            ].map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-8 pt-12 rounded-2xl border border-border shadow-xs text-center relative group"
              >
                <div className="absolute top-4 right-6 text-xs text-gold font-bold tracking-wider uppercase bg-gold/10 px-2 py-0.5 rounded">
                  {s.step}
                </div>
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <s.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DonationCTA />
    </PageTransition>
  )
}
