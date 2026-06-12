import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Copy, Check, QrCode, Building2, PhoneCall, Info, HelpCircle } from 'lucide-react'

const donationCategories = [
  {
    id: 'general',
    label: 'General Donation',
    amounts: [
      { value: '500', label: '₹500', note: 'Provides medicine for 1 elder for a month.' },
      { value: '1000', label: '₹1,000', note: 'Provides special nutrients and clothing.' },
      { value: '2500', label: '₹2,500', note: 'Covers electricity and clean water maintenance.' },
      { value: '5000', label: '₹5,000', note: 'Supports operations of hospice and cancer ward.' }
    ]
  },
  {
    id: 'sponsor',
    label: 'Sponsor an Elder',
    amounts: [
      { value: '3000', label: '₹3,000', note: 'Food, clothing, and shelter for 1 elder for 1 month.' },
      { value: '9000', label: '₹9,000', note: 'Food, clothing, and shelter for 1 elder for 3 months.' },
      { value: '18000', label: '₹18,000', note: 'Sponsor 1 elder for half a year.' },
      { value: '36000', label: '₹36,000', note: 'Sponsor 1 elder for an entire year.' }
    ]
  },
  {
    id: 'meals',
    label: 'Sponsor a Meal',
    amounts: [
      { value: '1500', label: '₹1,500', note: 'Sponsor Breakfast for all residents.' },
      { value: '2500', label: '₹2,500', note: 'Sponsor Dinner for all residents.' },
      { value: '3500', label: '₹3,500', note: 'Sponsor Lunch (Veg meals) for all residents.' },
      { value: '7500', label: '₹7,500', note: 'Sponsor Full Day Meals (Breakfast, Lunch, Tea, Dinner).' }
    ]
  }
]

export default function Donate() {
  const [activeTab, setActiveTab] = useState('general')
  const [selectedAmt, setSelectedAmt] = useState('')
  const [customAmt, setCustomAmt] = useState('')
  const [copiedField, setCopiedField] = useState('')
  const [showQr, setShowQr] = useState(false)

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(''), 2000)
  }

  const currentCategory = donationCategories.find(c => c.id === activeTab)
  const displayAmount = selectedAmt === 'custom' ? customAmt : selectedAmt

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
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Give Dignity</span>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Support Our Cause</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Your contributions keep the shelter running. Help us feed, clothe, and provide medical care to our elders.
          </p>
        </div>
      </div>

      <section className="section-padding bg-warm-white">
        <div className="site-container">
          {/* Tax Exemption Alert */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-saffron/10 border-l-4 border-saffron rounded-r-xl p-5 flex items-start gap-4"
          >
            <Info className="w-6 h-6 text-saffron shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-navy-dark text-sm sm:text-base">Tax Exemption under Section 80G</h4>
              <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                Kaikoduppom Old Age Home & Charitable Trust is officially registered as an NGO. All financial donations made to our trust qualify for tax exemption benefits under Section 80G of the Indian Income Tax Act. Please contact us for receipts.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            
            {/* Interactive Selector Column */}
            <div>
              <div className="bg-cream p-6 sm:p-8 rounded-2xl border border-border">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy-dark mb-6">Select Donation Category</h3>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-border pb-4 mb-6">
                  {donationCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveTab(cat.id)
                        setSelectedAmt('')
                        setCustomAmt('')
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        activeTab === cat.id
                          ? 'bg-navy text-white'
                          : 'text-text-muted hover:text-navy-dark hover:bg-cream-dark'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Quick Amounts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentCategory.amounts.map(amt => (
                    <button
                      key={amt.value}
                      onClick={() => {
                        setSelectedAmt(amt.value)
                        setCustomAmt('')
                      }}
                      className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-24 ${
                        selectedAmt === amt.value
                          ? 'border-gold bg-gold/5 shadow-xs'
                          : 'border-border bg-white hover:border-gold-light'
                      }`}
                    >
                      <span className="font-extrabold text-navy-dark text-lg sm:text-xl font-playfair">{amt.label}</span>
                      <span className="text-[10px] text-text-muted leading-tight mt-1">{amt.note}</span>
                    </button>
                  ))}

                  <button
                    onClick={() => setSelectedAmt('custom')}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-24 ${
                      selectedAmt === 'custom'
                        ? 'border-gold bg-gold/5 shadow-xs'
                        : 'border-border bg-white hover:border-gold-light'
                    }`}
                  >
                    <span className="font-extrabold text-navy-dark text-lg font-playfair">Custom</span>
                    <span className="text-[10px] text-text-muted leading-tight mt-1">Specify your own amount</span>
                  </button>
                </div>

                {/* Custom Input */}
                {selectedAmt === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6"
                  >
                    <label htmlFor="custom-amount" className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                      Enter Custom Amount (₹)
                    </label>
                    <input
                      type="number"
                      id="custom-amount"
                      value={customAmt}
                      onChange={(e) => setCustomAmt(e.target.value)}
                      placeholder="e.g. 15000"
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-gold"
                    />
                  </motion.div>
                )}

                {/* Submit Instruction */}
                {displayAmount && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 pt-6 border-t border-border"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-text-muted">Total Contribution:</span>
                      <span className="text-xl font-bold text-navy-dark font-playfair">₹{displayAmount}</span>
                    </div>
                    <p className="text-[11px] text-text-muted leading-relaxed mb-4">
                      To complete this transaction, please execute a Bank Transfer or scan the UPI QR Code shown on the right using your GPay/PhonePe application.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Account Details & UPI Column */}
            <div className="space-y-6">
              {/* Bank Transfer Details */}
              <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center text-gold-dark">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy-dark">Direct Bank Transfer</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Account Holder Name', val: 'Kaikoduppom Charitable Trust' },
                    { label: 'Bank Name', val: 'Indian Bank' },
                    { label: 'Account Number', val: '6824982631' },
                    { label: 'IFSC Code', val: 'IDIB000P092' },
                    { label: 'Branch Name', val: 'Puducherry Branch' }
                  ].map((field, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 border-b border-border/60 pb-2.5">
                      <div>
                        <p className="text-[10px] text-text-muted uppercase tracking-wider">{field.label}</p>
                        <p className="text-navy-dark font-bold text-sm mt-0.5 break-words">{field.val}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(field.val, field.label)}
                        className="text-text-muted hover:text-navy-dark p-1.5 rounded-md hover:bg-cream-dark transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedField === field.label ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* UPI Options */}
              <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy/15 flex items-center justify-center text-navy">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-navy-dark">UPI QR Code</h3>
                  </div>
                  <button
                    onClick={() => setShowQr(!showQr)}
                    className="text-xs font-bold text-gold-dark hover:underline"
                  >
                    {showQr ? 'Hide QR' : 'Show QR'}
                  </button>
                </div>

                <AnimatePresence>
                  {showQr ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-center py-4 border-t border-border flex flex-col items-center"
                    >
                      <div className="w-44 h-44 bg-cream border border-border rounded-xl flex items-center justify-center p-2 mb-4">
                        <div className="w-full h-full bg-navy-dark/10 border-2 border-dashed border-navy-dark/30 rounded flex flex-col items-center justify-center text-navy-dark/40 font-bold text-xs select-none">
                          <QrCode size={40} className="mb-2" />
                          <span>kaikoduppom@upi</span>
                        </div>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed max-w-xs">
                        Scan using GPay, BHIM, PhonePe, or Paytm. Specify your name or anniversary occasion in the transaction note.
                      </p>
                    </motion.div>
                  ) : (
                    <div className="text-center py-2 text-xs text-text-muted leading-relaxed flex items-center gap-2 bg-cream p-4 rounded-xl border border-border/80">
                      <Info className="w-4 h-4 text-gold-dark shrink-0" />
                      <span>Click <strong>Show QR</strong> to reveal the simulated mobile payment scanner.</span>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Assistance */}
              <div className="bg-gradient-to-r from-cream to-cream-dark p-6 rounded-2xl border border-border flex items-start gap-4">
                <PhoneCall className="w-6 h-6 text-gold-dark mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-navy-dark text-sm sm:text-base">Need Receipt / Assistance?</h4>
                  <p className="text-text-muted text-xs leading-relaxed mt-1">
                    Once you complete a transaction, please call us at <strong className="text-navy-dark">094444 41140</strong> or email your receipt to get your official tax exemption documentation.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <HelpCircle className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-playfair text-2xl font-bold text-navy-dark">Donation FAQs</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { q: 'Can I donate in memory of a family member?', a: 'Yes. You can sponsor meals or general maintenance on death anniversaries, birthdays, or memorials. We can put up their name on our notice board for the day and send you photographs.' },
                { q: 'How is my donation utilized?', a: 'We operate under strict accounts audits. 100% of direct sponsorships are spent on purchase of food grains, vegetables, LPG cylinder refills, doctor bills, medicines, and caretakers\' wages.' },
                { q: 'Will I get an 80G tax certificate?', a: 'Yes. Upon receiving your transfer confirmation details, we will issue a stamped official donation receipt containing our trust registration and tax exemption approval details.' }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-border rounded-xl p-5">
                  <h4 className="font-bold text-navy-dark text-sm sm:text-base">{faq.q}</h4>
                  <p className="text-text-muted text-xs sm:text-sm mt-2 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  )
}
