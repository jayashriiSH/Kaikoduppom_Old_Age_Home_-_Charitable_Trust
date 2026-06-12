import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedCounter from './AnimatedCounter'
import { Star, MessageCircle, Clock, Shield } from 'lucide-react'

const stats = [
  { icon: Star,          value: 5,   suffix: '.0', label: 'Google Rating',    color: 'text-gold'        },
  { icon: MessageCircle, value: 521, suffix: '+',  label: 'Verified Reviews', color: 'text-navy'        },
  { icon: Clock,         value: 24,  suffix: 'hr', label: 'Always Open',      color: 'text-success'     },
  { icon: Shield,        value: 6,   suffix: '+',  label: 'Services Offered', color: 'text-navy-light'  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative z-10 bg-warm-white section-padding">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-border rounded-2xl shadow-xl shadow-navy/5 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white p-[var(--card-padding-md)] flex flex-col items-center justify-center text-center group hover:bg-cream transition-colors h-full"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color} opacity-50`} />
                <div className="text-3xl sm:text-4xl font-bold text-navy mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-text-muted uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}