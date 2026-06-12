import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  { year: 'Foundation', title: 'A Vision is Born', description: 'Mr. Jagadeesan Sellamuthu, driven by compassion after witnessing elder abandonment, establishes the trust.' },
  { year: 'Growth', title: 'Building a Home', description: 'The trust acquires a permanent facility in Puducherry to house and care for abandoned elders.' },
  { year: 'Recognition', title: 'Government Registration', description: 'Kaikoduppom Trust receives official recognition from both State and Central Government of India.' },
  { year: 'Expansion', title: 'Services Grow', description: 'Introduction of hospice care, cancer hospice, and bedridden care services for the most vulnerable.' },
  { year: 'Impact', title: 'Community Outreach', description: 'Launch of community food drives and volunteer programs reaching elders beyond the home.' },
  { year: 'Present', title: '5-Star Legacy', description: 'With 521+ reviews and a perfect 5.0 rating, the trust continues to serve with excellence and love.' },
]

export default function Timeline({ events = timelineEvents }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="relative">
      {/* Central line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-navy to-gold" />

      <div className="space-y-12">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-warm-white shadow-md z-10" />

            {/* Content Card */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%_-_2.5rem)] min-w-0 ${i % 2 === 0 ? 'md:text-right md:pr-0' : 'md:text-left md:pl-0'}`}>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold mb-2 bg-gold/10 px-3 py-1 rounded-full">
                {event.year}
              </span>
              <h4 className="font-playfair text-xl font-bold text-navy-dark mb-2">{event.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
