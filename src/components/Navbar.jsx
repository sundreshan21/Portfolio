import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'Home',         id: 'hero' },
  { label: 'About',        id: 'about' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Journey',      id: 'timeline' },
  { label: 'Contact',      id: 'contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('hero')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50)
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.id)
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(l.id); break }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? (isDark ? 'rgba(12,12,20,0.9)' : 'rgba(247,244,240,0.9)') : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,67,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => go('hero')}
          className="font-display font-black text-xl gradient-text select-none"
        >
          SK.
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}
          >
            {isDark
              ? <FiSun size={15} color="#D4A843" />
              : <FiMoon size={15} color="#6B1D3A" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}
          >
            {open ? <FiX size={16} color="#D4A843" /> : <FiMenu size={16} color="#D4A843" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: isDark ? 'rgba(12,12,20,0.97)' : 'rgba(247,244,240,0.97)',
              borderTop: '1px solid rgba(212,168,67,0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => go(l.id)}
                className={`nav-link w-full text-left px-8 py-4 border-b block text-sm ${active === l.id ? 'active' : ''}`}
                style={{ borderColor: 'rgba(212,168,67,0.07)' }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
