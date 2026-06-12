import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={`${center ? 'text-center' : ''} mb-14`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-gold' : 'text-gold-dark'}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-dark'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${light ? 'text-white/70' : 'text-text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full mt-5 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
