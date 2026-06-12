import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TestimonialsSlider from '../components/TestimonialsSlider'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Smile, MessageSquare, CheckCircle2 } from 'lucide-react'

const initialReviews = [
  {
    name: 'Dillibabu R.',
    date: '4 months ago',
    text: 'No one should be alone, helpless, or hungry — this organisation lives that mission every single day. The importance given to elder welfare under the leadership of Jagadeesan Sir is highly appreciable.',
    rating: 5
  },
  {
    name: 'Akshaya A.M.',
    date: '4 months ago',
    text: 'Properly registered, well-managed, and officially recognized. This trust was founded with integrity and is run with such dedication. A remarkable organization that reflects humanity at its best.',
    rating: 5
  },
  {
    name: 'Raja Sekar',
    date: '4 months ago',
    text: 'The staff treat everyone with kindness and respect — healthy food, medical care, and genuine support. They also help poor and abandoned elders outside the home.',
    rating: 5
  },
  {
    name: 'Daisy',
    date: '4 months ago',
    text: 'The old age home is well maintained, clean, and peaceful. You can see the care taken to provide a comfortable environment for the elders.',
    rating: 5
  },
  {
    name: 'Sivagurunathan K.',
    date: '6 months ago',
    text: 'Visiting this home was an eye-opener. The elders are kept clean and active. They are served nutritious food and medical help immediately. Great initiative in Puducherry.',
    rating: 5
  },
  {
    name: 'Meenakshi Sundaram',
    date: '8 months ago',
    text: 'We sponsored a full day of meals for my daughter\'s birthday. The team sent photos of the elders eating. It was transparent, emotional, and satisfying. Strongly recommend donating.',
    rating: 5
  }
]

export default function Testimonials() {
  const [reviews, setReviews] = useState(initialReviews)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', text: '', rating: 5 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.text) return

    const newReview = {
      name: formData.name,
      date: 'Just now',
      text: formData.text,
      rating: parseInt(formData.rating)
    }

    setReviews([newReview, ...reviews])
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', text: '', rating: 5 })
      setFormSubmitted(false)
    }, 4000)
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Testimonials</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Words of Encouragement</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover what donors, volunteers, and visitor families have to say about the care standards at Kaikoduppom Trust.
          </p>
        </div>
      </div>

      {/* TestimonialsSlider Block */}
      <TestimonialsSlider />

      {/* Expanded Grid & Leave Feedback Form */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] gap-10 lg:gap-12 items-start">
            
            {/* Reviews Column */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="All Feedback"
                title="Reviews & Ratings"
                subtitle="We are grateful for all recommendations. They motivate our team to serve better."
                center={false}
              />

              <div className="space-y-6 mt-8">
                {reviews.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 bg-white border border-border rounded-xl shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1">
                        {Array.from({ length: r.rating }).map((_, idx) => (
                          <Star key={idx} size={14} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <span className="text-xs text-text-muted">{r.date}</span>
                    </div>
                    <p className="text-text-primary text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cream text-gold-dark font-bold text-xs flex items-center justify-center">
                        {r.name[0]}
                      </div>
                      <span className="font-bold text-navy-dark text-xs sm:text-sm">{r.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial Form Column */}
            <div>
              <div className="bg-cream p-6 sm:p-8 rounded-2xl border border-border lg:sticky lg:top-28 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Smile className="w-5 h-5 text-gold-dark" />
                  <h3 className="font-playfair text-xl font-bold text-navy-dark">Share Your Experience</h3>
                </div>
                <p className="text-text-muted text-xs leading-relaxed mb-6">
                  Have you visited our home, volunteered, or sponsored a meal? Please share your thoughts.
                </p>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                          placeholder="e.g. Anand Kumar"
                        />
                      </div>

                      <div>
                        <label htmlFor="rating" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                          Rating
                        </label>
                        <select
                          id="rating"
                          value={formData.rating}
                          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                          className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                        >
                          <option value="5">5 Stars (Excellent)</option>
                          <option value="4">4 Stars (Very Good)</option>
                          <option value="3">3 Stars (Good)</option>
                          <option value="2">2 Stars (Average)</option>
                          <option value="1">1 Star (Poor)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="feedback" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                          Feedback / Comments
                        </label>
                        <textarea
                          id="feedback"
                          rows="4"
                          required
                          value={formData.text}
                          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                          className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold resize-none"
                          placeholder="What did you like about our facility or team?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageSquare size={16} />
                        Submit Testimonial
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="text-center py-8"
                    >
                      <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                      <h4 className="font-bold text-navy-dark mb-2">Thank you!</h4>
                      <p className="text-text-muted text-xs leading-relaxed">
                        Your review has been added to our list below. We truly appreciate your support.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  )
}
