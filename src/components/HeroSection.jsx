import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ArrowDown, ChevronRight } from 'lucide-react'
import logo from '../assets/images.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'

const PARTICLES = [
  { w: 6, h: 4, l: 12, t: 20, dur: 18, delay: 0 },
  { w: 3, h: 3, l: 28, t: 65, dur: 14, delay: 2 },
  { w: 7, h: 7, l: 45, t: 10, dur: 20, delay: 5 },
  { w: 4, h: 4, l: 60, t: 80, dur: 16, delay: 1 },
  { w: 5, h: 3, l: 75, t: 35, dur: 12, delay: 7 },
  { w: 3, h: 5, l: 88, t: 55, dur: 19, delay: 3 },
  { w: 6, h: 6, l: 5,  t: 50, dur: 15, delay: 9 },
  { w: 4, h: 4, l: 92, t: 15, dur: 13, delay: 4 },
]

const heroImages = [
  { src: photo4, alt: 'Our residents', className: 'col-span-7 row-span-5 col-start-6 row-start-1' },
  { src: photo5, alt: 'Elder care', className: 'col-span-6 row-span-4 col-start-1 row-start-4' },
  { src: photo6, alt: 'Community', className: 'col-span-5 row-span-3 col-start-8 row-start-6' },
]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gold/20"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            animation: `float ${p.dur}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative bg-navy-dark overflow-hidden flex items-center pt-16 pb-[140px] md:pt-24 md:pb-[180px] lg:min-h-[880px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark/90" />
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-warm-white to-transparent pointer-events-none" />

      <FloatingParticles />

      <div className="relative z-10 site-container w-full mt-8 md:mt-0">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(400px,0.9fr)] gap-12 lg:gap-20 items-center">

          {/* ── Text Content ── */}
          <div className="max-w-2xl lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                className="mb-8"
              >
                <img
                  src={logo}
                  alt="Kaikoduppom Trust"
                  className="h-16 w-16 rounded-full border-2 border-gold/60 shadow-2xl shadow-gold/20 object-cover"
                />
              </motion.div>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap items-center gap-2 mb-5"
              >
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  Registered Charitable Trust · Puducherry
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance"
              >
                No Elder Should{' '}
                <br />
                <span className="italic">
                  Face Old Age{' '}
                  <span className="gradient-text">Alone</span>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
              >
                A government-recognized charitable trust providing shelter, dignity, medical care,
                and unconditional love to abandoned and destitute elders.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
              >
                <Link
                  to="/donate"
                  className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full text-sm transition-all hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
                >
                  <Heart size={18} />
                  Support Our Mission
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/90 hover:text-white hover:bg-white/5 hover:border-white/40 px-8 py-4 rounded-full text-sm font-medium transition-all"
                >
                  Learn About Us
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap gap-3 mt-10"
              >
                {[
                  { text: 'Govt. Registered',    color: 'bg-green-500/15 text-green-400 border-green-500/20' },
                  { text: '★ 5.0 · 521 Reviews', color: 'bg-gold/15 text-gold border-gold/20' },
                  { text: 'Open 24 Hours',        color: 'bg-white/10 text-white/70 border-white/10' },
                ].map((badge) => (
                  <span
                    key={badge.text}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${badge.color}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Image Collage ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block"
          >
            {/*
              Fixed-height container so images never overflow the section.
              Using absolute positioning anchored within this box only.
            */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="grid grid-cols-12 grid-rows-8 gap-4 aspect-[1.05/1]">
                {heroImages.map((image) => (
                  <motion.div
                    key={image.alt}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl ${image.className}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
                  </motion.div>
                ))}
              </div>
              {/* Decorative borders */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/20 rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/10 rounded-3xl pointer-events-none" />

              {/* Pulsing circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/10 z-0 pointer-events-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — positioned relative to section, clear of collage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
