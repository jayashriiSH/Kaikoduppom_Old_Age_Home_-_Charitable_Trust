import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, Utensils, Stethoscope, HeartPulse, Ribbon, BedDouble, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const services = [
  {
    icon: Home,
    title: 'Residential Care',
    description: 'Full-time accommodation for abandoned and destitute elders in a warm, safe environment.',
    color: 'from-blue-500/10 to-blue-600/5',
    iconColor: 'text-blue-600',
  },
  {
    icon: Utensils,
    title: 'Food & Nutrition',
    description: 'Daily nutritious meals prepared with care, plus community food donation drives.',
    color: 'from-orange-500/10 to-orange-600/5',
    iconColor: 'text-orange-600',
  },
  {
    icon: Stethoscope,
    title: 'Medical Support',
    description: 'Coordinated healthcare and regular medical check-ups for all residents.',
    color: 'from-green-500/10 to-green-600/5',
    iconColor: 'text-green-600',
  },
  {
    icon: HeartPulse,
    title: 'Hospice Care',
    description: 'Compassionate palliative and end-of-life care delivered with dignity and love.',
    color: 'from-rose-500/10 to-rose-600/5',
    iconColor: 'text-rose-600',
  },
  {
    icon: Ribbon,
    title: 'Cancer Hospice',
    description: 'Specialized comfort care for elderly cancer patients with round-the-clock support.',
    color: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-600',
  },
  {
    icon: BedDouble,
    title: 'Bedridden Care',
    description: 'Dedicated 24/7 support for fully bedridden elderly persons with personal attention.',
    color: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-600',
  },
]

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="site-container">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="Comprehensive care services designed to provide comfort, dignity, and love to every elder in our home."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-[var(--card-padding-md)] shadow-sm hover:shadow-xl border border-border hover:border-gold/30 transition-all cursor-default overflow-hidden flex flex-col h-full"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-navy transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            View All Services
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
