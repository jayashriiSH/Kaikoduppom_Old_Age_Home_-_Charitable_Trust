import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import DonationCTA from '../components/DonationCTA'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import posterImg from '../assets/poster.png'

const founderMilestones = [
  { year: '2015', title: 'The Encounter', description: 'Mr. Jagadeesan witnesses a terminally ill, homeless elderly man on the streets of Puducherry, leading to a deep urge to take action.' },
  { year: '2016', title: 'First Rented Space', description: 'Starting with his own personal savings, he leases a small house to accommodate and feed 5 abandoned senior citizens.' },
  { year: '2018', title: 'Official Registration', description: 'As word of the shelter spreads, Kaikoduppom Trust is officially registered as a charitable trust with State Govt.' },
  { year: '2020', title: 'Pandemic Response', description: 'Despite lockdowns, the home maintains 100% safety protocols and begins running outreach food drives for street elders.' },
  { year: '2022', title: 'Specialized Ward', description: 'Launches a dedicated medical unit and bedridden care services to support paralyzed and terminal cancer patients.' },
  { year: 'Present', title: 'A Legacy of Care', description: 'Now managing a fully recognized home with round-the-clock nursing staff, backed by 521+ positive reviews.' }
]

export default function FounderStory() {
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">The Heart Behind the Trust</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Founder\'s Story</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover the personal journey of Mr. Jagadeesan Sellamuthu and the spark that built Kaikoduppom Old Age Home.
          </p>
        </div>
      </div>

      {/* Biographical Content */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bio Photo Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-border bg-white hover:scale-[1.01] transition-transform">
                <img
                  src={posterImg}
                  alt="Mr. Jagadeesan Sellamuthu - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl text-navy-dark shadow-xl max-w-xs hidden sm:block">
                <Quote className="w-8 h-8 opacity-40 mb-2" />
                <p className="font-playfair text-sm italic font-bold leading-relaxed">
                  "No elder should face old age alone. That is the only purpose of my life."
                </p>
                <p className="text-[10px] uppercase font-bold tracking-wider mt-3 text-navy-dark/70">— Jagadeesan Sellamuthu</p>
              </div>
            </motion.div>

            {/* Narrative text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <span className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-3 block">Biography</span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy-dark mb-6">
                From a Humble Encounter to a Beacon of Hope
              </h3>
              
              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Before establishing Kaikoduppom Trust, <strong className="text-navy-dark">Mr. Jagadeesan Sellamuthu</strong> led a simple life. However, he was constantly troubled by the sight of fragile senior citizens sitting on street corners, begging for food, and sleeping under leaky plastic sheets.
                </p>
                <p>
                  The turning point came in 2015 when he encountered an elderly gentleman suffering from chronic illness, abandoned by his family at a bus terminus. Without thinking twice, Mr. Jagadeesan took the man to a clinic, paid for his treatments, and rented a safe room for him.
                </p>
                <p>
                  This single act of mercy blossomed into a larger calling. Mr. Jagadeesan realized that medical treatment was only half the solution — these seniors needed a home, family affection, and above all, dignity.
                </p>
                <p>
                  Using his personal savings and calling upon friends for aid, he rented a small tenement to house a few residents. The challenges were immense: food inflation, medicine shortages, and social indifference. Yet, his commitment never wavered.
                </p>
                <p>
                  Today, under his selfless leadership, Kaikoduppom Old Age Home has grown into a government-registered and highly respected charitable trust housing dozens of elders, providing them round-the-clock comfort and security.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/donate"
                  className="group flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-full text-xs font-semibold transition-all"
                >
                  Support the Founder's Mission
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/volunteer"
                  className="flex items-center gap-2 border-2 border-navy/20 hover:border-navy text-navy px-6 py-3 rounded-full text-xs font-semibold transition-all"
                >
                  Join as a Volunteer
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Chronology"
              title="Founder\'s Key Milestones"
              subtitle="The chronological achievements and growth of the trust under Mr. Jagadeesan Sellamuthu's leadership."
            />
            <Timeline events={founderMilestones} />
          </div>
        </div>
      </section>

      <DonationCTA />
    </PageTransition>
  )
}
