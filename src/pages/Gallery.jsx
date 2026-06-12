import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

// Image imports
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'
import photo7 from '../assets/photo7.png'
import photo8 from '../assets/photo8.png'
import photo9 from '../assets/photo9.png'
import posterImg from '../assets/poster.png'
import hero1 from '../assets/hero1.avif'

const galleryItems = [
  { src: photo4, category: 'residents', title: 'Resident Care', desc: 'Daily smiles and companionship at Kaikoduppom' },
  { src: photo2, category: 'residents', title: 'Happy Moments', desc: 'Showering elders with the warmth they deserve' },
  { src: photo9, category: 'residents', title: 'Recreation Time', desc: 'Engaging in reading and quiet hobbies' },
  { src: photo5, category: 'activities', title: 'Daily Support', desc: 'Dedicated assistants tending to physical mobility' },
  { src: photo7, category: 'activities', title: 'Physiotherapy Unit', desc: 'Helping elders maintain movement and health' },
  { src: photo8, category: 'activities', title: 'Indoor Board Games', desc: 'Stimulating activities to keep minds active' },
  { src: photo6, category: 'festivals', title: 'Festival Celebration', desc: 'Celebrating Pongal with traditional meals and prayers' },
  { src: hero1, category: 'festivals', title: 'Community Feasts', desc: 'Sharing joy and light during deepavali' },
  { src: photo3, category: 'outreach', title: 'Outreach Donation', desc: 'Food distribution drives to needy elders in town' },
  { src: posterImg, category: 'outreach', title: 'Mission Awareness', desc: 'Public campaign poster detailing care options' }
]

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'residents', label: 'Our Residents' },
  { id: 'activities', label: 'Daily Activities' },
  { id: 'festivals', label: 'Festivals & Events' },
  { id: 'outreach', label: 'Outreach Drives' }
]

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter)

  const openLightbox = (index) => {
    const clickedItem = filteredItems[index]
    const globalIdx = galleryItems.indexOf(clickedItem)
    setLightboxIndex(globalIdx)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    setLightboxIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setLightboxIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Visual Journey</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Moments of Joy & Care</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Take a look into the daily lives, celebrations, and medical services at Kaikoduppom Old Age Home.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Gallery Grid */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  selectedFilter === cat.id
                    ? 'bg-gold text-navy-dark shadow-md shadow-gold/20'
                    : 'bg-cream text-text-muted hover:bg-cream-dark hover:text-navy-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer aspect-[4/3] bg-white border border-border"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" >
                    <span className="text-[10px] text-gold font-semibold tracking-widest uppercase mb-1">{item.category}</span>
                    <h3 className="text-white font-playfair font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xs p-2 rounded-full text-white">
                      <Eye size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Active Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[70vh] max-w-full rounded-2xl shadow-2xl border border-white/10 object-contain"
              />
              <div className="text-center text-white max-w-xl">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold mb-1 block">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h2 className="font-playfair text-xl font-bold mb-1">
                  {galleryItems[lightboxIndex].title}
                </h2>
                <p className="text-white/60 text-xs sm:text-sm">
                  {galleryItems[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
