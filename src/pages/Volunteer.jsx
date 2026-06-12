import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Clock, Send, Users, Activity, Palette, CheckCircle2 } from 'lucide-react'

const roles = [
  {
    icon: Users,
    title: 'Elder Companionship',
    desc: 'Spend quality hours conversing, listening to stories, playing light board games (chess, carrom), and walking with residents who feel lonely.'
  },
  {
    icon: Activity,
    title: 'Medical & Therapy Care',
    desc: 'Professional doctors, nursing graduates, pharmacists, or physiotherapists helping administer healthcare and mobility therapy to bedridden elders.'
  },
  {
    icon: Palette,
    title: 'Recreation & Music events',
    desc: 'Organize festival songs, devotional bhajan sessions, art workshops, or help coordinate birthdays and festival celebration events.'
  },
  {
    icon: Heart,
    title: 'Daily Help & Kitchen Care',
    desc: 'Assist in kitchen operations, clean vegetables, help distribute food packages, and organize clothes and bedding wardrobes.'
  }
]

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', role: 'Companionship', availability: 'Weekends', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', role: 'Companionship', availability: 'Weekends', message: '' })
      setSubmitted(false)
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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Give Your Time</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Join Our Volunteer Family</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Your presence can brighten an elder's day. Use your skills, time, or companionship to support our residents.
          </p>
        </div>
      </div>

      {/* Volunteer Roles */}
      <section className="section-padding bg-warm-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Opportunities"
            title="How You Can Assist"
            subtitle="Choose a channel that matches your schedule and skillset. Every effort counts."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {roles.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border shadow-xs hover:shadow-md transition-shadow group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-5 mx-auto group-hover:scale-105 transition-transform">
                  <r.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-bold text-navy-dark text-base mb-2 font-playfair">{r.title}</h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form & Impact Statement */}
      <section className="section-padding bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left side text / quote */}
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-3 block">Make a Connection</span>
              <h3 className="font-playfair text-3xl font-bold text-navy-dark mb-6">Why Volunteer at Kaikoduppom?</h3>
              
              <ul className="space-y-4">
                {[
                  { title: 'Reduce Loneliness', desc: 'Many resident elders feel isolated due to abandonment. Conversing with volunteers offers a vital emotional outlet.' },
                  { title: 'Support Care Workers', desc: 'Our dedicated staff work around the clock. Your support helps ease kitchen, administration, and clean up duties.' },
                  { title: 'Flexible Schedules', desc: 'Whether you have 2 hours on Sunday or a day during weekdays, you are welcome to schedule visits in advance.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-dark text-sm sm:text-base">{item.title}</h4>
                      <p className="text-text-muted text-xs sm:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-white border border-border p-5 rounded-xl flex items-center gap-3">
                <Clock className="w-6 h-6 text-gold-dark shrink-0" />
                <p className="text-xs text-text-muted">
                  Visiting hours for volunteers are daily between <strong className="text-navy-dark">9:00 AM to 12:00 PM</strong> and <strong className="text-navy-dark">4:00 PM to 6:30 PM</strong>.
                </p>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-xs">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy-dark mb-6">Volunteer Application</h3>
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="vol-name" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Full Name</label>
                        <input
                          type="text"
                          id="vol-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-cream/30 border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                          placeholder="Anand"
                        />
                      </div>
                      <div>
                        <label htmlFor="vol-phone" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="vol-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-cream/30 border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                          placeholder="094444 41140"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="vol-email" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        id="vol-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-cream/30 border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                        placeholder="anand@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="vol-role" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Preferred Role</label>
                        <select
                          id="vol-role"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full bg-cream/30 border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                        >
                          <option value="Companionship">Elder Companionship</option>
                          <option value="Medical">Medical Care Support</option>
                          <option value="Recreation">Music & Festivals</option>
                          <option value="General">Kitchen & Help</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="vol-avail" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Availability</label>
                        <select
                          id="vol-avail"
                          value={formData.availability}
                          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                          className="w-full bg-cream/30 border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                        >
                          <option value="Weekends">Weekends Only</option>
                          <option value="Weekdays">Weekdays Only</option>
                          <option value="Flexible">Flexible / On Call</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="vol-msg" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Brief Message</label>
                      <textarea
                        id="vol-msg"
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-cream/30 border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold resize-none"
                        placeholder="Tell us why you want to volunteer or list special skills..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      Submit Application
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="text-center py-10"
                  >
                    <CheckCircle2 className="w-14 h-14 text-success mx-auto mb-4" />
                    <h4 className="font-bold text-navy-dark mb-2">Application Received!</h4>
                    <p className="text-text-muted text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you for your willingness to serve. Our volunteer coordinator will contact you via email or phone shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  )
}
