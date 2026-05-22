import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiInstagram, FiArrowDown } from 'react-icons/fi'
import DoodleMascot from './DoodleMascot'

const socials = [
  { id: 'li', icon: FiLinkedin,  label: 'LinkedIn',  color: '#0A66C2', href: 'https://www.linkedin.com/in/sundreshan-k444b14373?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'gh', icon: FiGithub,    label: 'GitHub',    color: '#D4A843', href: 'https://github.com/sundreshan21' },
  { id: 'ig', icon: FiInstagram, label: 'Instagram', color: '#E1306C', href: 'https://www.instagram.com/buildfromzero21?igsh=eGM3dHM5NWttejF5' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }

function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="split-photo relative"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full pointer-events-none"
        style={{ inset: '-22px', border: '1.5px dashed rgba(212,168,67,0.2)' }}
      />
      <div
        className="absolute rounded-2xl pointer-events-none animate-pulse-glow"
        style={{ inset: '-3px', borderRadius: '28px', background: 'linear-gradient(135deg, rgba(107,29,58,0.25), rgba(212,168,67,0.15))', filter: 'blur(6px)' }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden"
        style={{ width: 'clamp(240px, 28vw, 300px)', height: 'clamp(300px, 36vw, 380px)', borderRadius: '24px', border: '2px solid rgba(212,168,67,0.3)', boxShadow: '0 28px 72px rgba(107,29,58,0.4)' }}
      >
        <img src="/profile.png" alt="Sundreshan K" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 65%, rgba(12,12,20,0.5) 100%)' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="mesh-dark relative min-h-screen flex items-center overflow-hidden w-full"
    >
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,29,58,0.22) 0%, transparent 70%)', filter: 'blur(2px)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)', filter: 'blur(2px)' }}
      />

      <div className="section-inner pt-28 pb-24 sm:px-8">
        <div className="split-row">
          <HeroPhoto />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="split-content"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.22)', color: '#D4A843', marginBottom: '1.75rem' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Open to Work
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-black"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', color: '#e8ddd0', lineHeight: 1.12, marginBottom: '1.25rem' }}
            >
              Sundreshan <span className="gradient-text">K</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="font-display font-semibold text-lg sm:text-xl"
              style={{ color: '#D4A843', letterSpacing: '0.02em', lineHeight: 1.7, marginBottom: '1.25rem' }}
            >
              Web Development &amp; Content Creator
            </motion.p>

            <motion.p
              variants={item}
              className="text-base max-w-md"
              style={{ color: '#7a6a58', lineHeight: 2.1, marginBottom: '2rem' }}
            >
              Building skills and projects from scratch — one line of code at a time.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4 justify-center lg:justify-start" style={{ marginBottom: '2rem' }}>
              {socials.map(s => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}30` }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}22`; e.currentTarget.style.borderColor = s.color }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}12`; e.currentTarget.style.borderColor = `${s.color}30` }}
                >
                  <s.icon size={18} color={s.color} />
                </a>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                View Projects
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <DoodleMascot position="bottom-20 left-12" direction="right" delay={1.5} size={48} />

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label="Scroll"
      >
        <span className="text-[10px] tracking-[0.3em]" style={{ color: '#4a3828' }}>SCROLL</span>
        <FiArrowDown size={14} color="#6B1D3A" />
      </motion.button>
    </section>
  )
}
