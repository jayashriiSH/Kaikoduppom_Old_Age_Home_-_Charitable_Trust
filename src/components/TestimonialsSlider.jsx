import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    name: 'Dillibabu R.',
    date: '4 months ago',
    text: '"No one should be alone, helpless, or hungry — this organisation lives that mission every single day. The importance given to elder welfare under the leadership of Jagadeesan Sir is highly appreciable."',
    rating: 5,
  },
  {
    name: 'Akshaya A.M.',
    date: '4 months ago',
    text: '"Properly registered, well-managed, and officially recognized. This trust was founded with integrity and is run with such dedication. A remarkable organization that reflects humanity at its best."',
    rating: 5,
  },
  {
    name: 'Raja Sekar',
    date: '4 months ago',
    text: '"The staff treat everyone with kindness and respect — healthy food, medical care, and genuine support. They also help poor and abandoned elders outside the home."',
    rating: 5,
  },
  {
    name: 'Daisy',
    date: '4 months ago',
    text: '"The old age home is well maintained, clean, and peaceful. You can see the care taken to provide a comfortable environment for the elders."',
    rating: 5,
  },
]

export default function TestimonialsSlider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-playfair text-white">"</div>
        <div className="absolute bottom-20 right-10 text-[200px] font-playfair text-white rotate-180">"</div>
      </div>

      <div className="site-container relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words That Warm Our Hearts"
          subtitle="Real reviews from real people who have witnessed the love and care at Kaikoduppom."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-[var(--card-padding-md)] hover:bg-white/10 transition-all flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">{t.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <p className="text-white font-bold text-lg">5.0</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">521 Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
