import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Heart } from 'lucide-react'
import logo from '../assets/images.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <>
      {/* Top Marquee Strip */}
      <div className="bg-navy-dark py-1.5 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap" style={{ width: 'max-content', animation: 'marquee 30s linear infinite' }}>
          {[0, 1].map(i => (
            <div key={i} className="flex gap-12 text-xs text-text-light">
              <span><span className="text-gold">●</span> Registered Charitable Trust · Puducherry, India</span>
              <span><span className="text-gold">●</span> Open 24 Hours · Call: 094444 41140</span>
              <span><span className="text-gold">●</span> 5.0 ★ on Google · 521 Reviews</span>
              <span><span className="text-gold">●</span> State & Central Govt. Recognized NGO</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-dark/95 backdrop-blur-xl shadow-2xl shadow-navy-dark/20'
            : 'bg-navy'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="site-container">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-6 h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src={logo}
                alt="Kaikoduppom Trust Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-gold/50 group-hover:border-gold transition-colors"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <div className="hidden sm:block">
                <h1 className="text-white font-semibold text-sm leading-tight">
                  Kaikoduppom Old Age Home
                </h1>
                <p className="text-text-light text-xs">& Charitable Trust</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center gap-1 min-w-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold rounded-full"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center justify-end gap-3">
              <a
                href="tel:09444441140"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                <span className="hidden xl:inline">094444 41140</span>
              </a>
              <Link
                to="/donate"
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
              >
                <Heart size={16} />
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors justify-self-end"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-dark/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="site-container py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-gold/10 text-gold border-l-2 border-gold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="tel:09444441140"
                    className="flex items-center justify-center gap-2 text-white bg-white/10 py-3 rounded-xl text-sm font-medium"
                  >
                    <Phone size={16} /> 094444 41140
                  </a>
                  <Link
                    to="/donate"
                    className="flex items-center justify-center gap-2 bg-gold text-navy-dark py-3 rounded-xl text-sm font-bold"
                  >
                    <Heart size={16} /> Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
