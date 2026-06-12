import { Link } from 'react-router-dom'
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight
} from "lucide-react";
import logo from '../assets/images.png'

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
]

const supportLinks = [
  { name: 'Donate', path: '/donate' },
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Founder Story', path: '/founder-story' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      {/* Main Footer */}
      <div className="site-container pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Kaikoduppom Logo" className="h-14 w-14 rounded-full border-2 border-gold/40 object-cover" />
              <div>
                <h3 className="font-semibold text-lg leading-tight">Kaikoduppom</h3>
                <p className="text-text-light text-xs">Old Age Home & Trust</p>
              </div>
            </Link>
            <p className="text-text-light text-sm leading-relaxed mb-5">
              A government-recognized shelter of love, care, and dignity for abandoned and destitute elders in Puducherry, India.
            </p>
            <div className="flex flex-wrap gap-3">
  {["Facebook", "Instagram", "YouTube"].map((name, i) => (
    <a
      key={i}
      href="#"
      className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-text-light hover:bg-gold hover:text-navy-dark hover:border-gold transition-all text-sm"
    >
      {name}
    </a>
  ))}
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="flex items-center gap-2 text-text-light hover:text-white text-sm py-1 transition-colors group">
                    <ChevronRight size={14} className="text-gold/50 group-hover:text-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="flex items-center gap-2 text-text-light hover:text-white text-sm py-1 transition-colors group">
                    <ChevronRight size={14} className="text-gold/50 group-hover:text-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider">Phone</p>
                  <a href="tel:09444441140" className="text-white font-medium text-sm hover:text-gold transition-colors">094444 41140</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider">Location</p>
                  <p className="text-white text-sm">Puducherry, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider">Hours</p>
                  <p className="text-white text-sm">Open 24 Hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="site-container py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-light">
          <p>© {new Date().getFullYear()} Kaikoduppom Old Age Home & Charitable Trust. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="px-2 py-1 bg-success/20 text-green-400 rounded text-[10px] font-medium">Govt. Registered NGO</span>
            <span className="px-2 py-1 bg-gold/20 text-gold rounded text-[10px] font-medium">★ 5.0 Rating</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
