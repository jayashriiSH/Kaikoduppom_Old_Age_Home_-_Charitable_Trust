import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ChevronRight, Phone } from 'lucide-react'

export default function DonationCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold" />
      <div className="absolute inset-0 opacity-10">
        <div style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(26,58,107,0.4) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }} />
      </div>

      <div className="relative z-10 site-container text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8"
          >
            <Heart size={36} className="text-navy-dark" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark mb-5"
          >
            Your Hands Can Hold Theirs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-navy-dark/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Every contribution — no matter how small — helps us provide food, medicine, shelter, and dignity
            to abandoned elders who have no one to call their own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/donate"
              className="group flex items-center gap-2 bg-navy-dark hover:bg-navy text-white px-8 py-4 rounded-full text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Heart size={18} />
              Donate Now
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:09444441140"
              className="flex items-center gap-2 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-navy-dark px-8 py-4 rounded-full text-sm font-bold transition-all"
            >
              <Phone size={18} />
              Call: 094444 41140
            </a>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-14 max-w-md mx-auto"
          >
            {[
              { val: '₹500', desc: 'Feeds one elder for a month' },
              { val: '₹2000', desc: 'Medical care for a month' },
              { val: '₹5000', desc: 'Full care for a month' },
            ].map((item) => (
              <div key={item.val} className="text-center">
                <p className="text-2xl font-bold text-navy-dark">{item.val}</p>
                <p className="text-xs text-navy-dark/60 mt-1">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
