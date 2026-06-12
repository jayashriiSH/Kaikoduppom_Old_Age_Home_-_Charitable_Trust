import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import logoImg from '../assets/images.png'
import posterImg from '../assets/poster.png'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-warm-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="About Us"
          title="A Shelter of Love & Dignity"
          subtitle="Founded with compassion and run with dedication, Kaikoduppom Trust stands as a beacon of hope for abandoned elders."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
              >
                <img src={logoImg} alt="Kaikoduppom Trust" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] mt-8"
              >
                <img src={posterImg} alt="Our Mission" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h3 className="font-playfair text-2xl font-bold text-navy-dark mb-4">
              The Name Means <span className="text-gold italic">"Let Us Hold Hands"</span>
            </h3>
            <p className="text-text-muted leading-relaxed mb-4">
              <strong className="text-navy-dark">Kaikoduppom Old Age Home & Charitable Trust</strong> was founded by{' '}
              <strong className="text-navy-dark">Mr. Jagadeesan Sellamuthu</strong> — one individual guided by hope,
              compassion, and a deep concern for the suffering of the poor and abandoned elderly.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              What started as a humble effort soon became a shelter of love, care, and genuine humanity.
              The trust is <strong className="text-navy-dark">officially registered</strong> and recognized
              by both the State and Central Government of India.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Today it provides residential care, nutritious food, medical support, hospice services,
              and community outreach to destitute elders across Puducherry.
            </p>

            {/* Quote */}
            <div className="bg-gradient-to-r from-cream to-cream-dark border-l-4 border-gold rounded-r-xl p-5 mb-8">
              <p className="text-navy-dark italic font-medium">
                "What started as a humble effort by one man became a shelter of love, care, and dignity —
                a true reflection of humanity at its best."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Read Full Story
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/founder-story"
                className="flex items-center gap-2 border-2 border-navy/20 hover:border-navy text-navy px-6 py-3 rounded-full text-sm font-semibold transition-all"
              >
                Founder's Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
