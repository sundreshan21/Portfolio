import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

const socials = [
  { id: 'li', icon: FiLinkedin, label: 'LinkedIn', color: '#0A66C2', href: 'https://www.linkedin.com/in/sundreshan-k444b14373?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'gh', icon: FiGithub, label: 'GitHub', color: '#D4A843', href: 'https://github.com/sundreshan21' },
  { id: 'ig', icon: FiInstagram, label: 'Instagram', color: '#E1306C', href: 'https://www.instagram.com/buildfromzero21?igsh=eGM3dHM5NWttejF5' },
]

const links = [
  { label: 'Home',         id: 'hero' },
  { label: 'About',        id: 'about' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Journey',      id: 'timeline' },
  { label: 'Contact',      id: 'contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ paddingTop: '4rem', paddingBottom: '3rem', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(107,29,58,0.08) 0%, transparent 60%)' }} />

      <div className="section-inner max-w-6xl px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          <div className="text-center md:text-left">
            <p className="font-display font-black text-2xl gradient-text" style={{ marginBottom: '0.5rem' }}>SK.</p>
            <p style={{ fontSize: '0.8rem', color: '#4a3828', lineHeight: '2' }}>
              Building skills and projects from scratch.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 justify-center">
            {links.map(l => (
              <button key={l.id} onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="nav-link text-xs">{l.label}</button>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map(s => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}30` }}>
                <s.icon size={15} color={s.color} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(212,168,67,0.06)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: '#3a2818', lineHeight: '2' }}>
            © {new Date().getFullYear()} Sundreshan K. Built with ❤️ and a lot of curiosity.
          </p>
        </div>
      </div>
    </footer>
  )
}
