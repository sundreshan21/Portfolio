import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import DoodleMascot from './DoodleMascot'

const stats = [
  { icon: '🚀', label: 'Projects Built',  value: '5+' },
  { icon: '🎓', label: 'Always Learning', value: '∞' },
  { icon: '✍️', label: 'Content Created', value: '20+' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const imgScale   = useTransform(scrollYProgress, [0, 0.45], [0.85, 1])
  const { ref: textRef, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="relative overflow-hidden w-full">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 12% 50%, rgba(107,29,58,0.12) 0%, transparent 55%)' }} />

      <div className="section-inner sm:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="section-header">
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-bar" />
          <p className="section-subtitle" style={{ lineHeight: '2.2' }}>
            A passionate tech enthusiast who loves building and sharing knowledge from scratch.
          </p>
        </motion.div>

        <div className="split-row" style={{ marginBottom: '1rem' }}>
          <motion.div
            style={{ opacity: imgOpacity, scale: imgScale }}
            className="split-photo relative"
          >
            <div className="absolute -inset-6 rounded-3xl opacity-25 blur-3xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #6B1D3A, #D4A843)' }} />
            <div className="relative overflow-hidden"
              style={{ width: '260px', height: '330px', borderRadius: '22px', border: '2px solid rgba(212,168,67,0.3)', boxShadow: '0 20px 60px rgba(107,29,58,0.35)' }}>
              <img src="/profile.png" alt="Sundreshan K" className="w-full h-full object-cover object-top" />
            </div>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-lg pointer-events-none opacity-70"
              style={{ background: 'linear-gradient(135deg, #6B1D3A, #D4A843)' }} />
            <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-3 -left-3 w-5 h-5 rounded-lg pointer-events-none opacity-50"
              style={{ background: 'linear-gradient(135deg, #D4A843, #6B1D3A)' }} />
          </motion.div>

          <div ref={textRef} className="split-content wide">
            <motion.div initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }} className="w-full">
              <h3 className="font-display font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#e8ddd0', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                Passionate Tech Enthusiast &{' '}<span className="gradient-text">Aspiring Developer</span>
              </h3>

              <div className="rounded-2xl p-6 sm:p-7 w-full" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(212,168,67,0.1)', marginBottom: '2rem' }}>
                <p style={{ color: '#9a8a78', lineHeight: '2.2', fontSize: '0.95rem' }}>
                  I'm a passionate tech enthusiast and aspiring developer who loves building projects and learning new technologies.
                </p>
                <p style={{ color: '#9a8a78', lineHeight: '2.2', fontSize: '0.95rem', marginTop: '1.25rem' }}>
                  I enjoy web development, problem solving, and creating content that helps beginners start their tech journey from zero.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full" style={{ marginBottom: '1.75rem' }}>
                {stats.map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center p-4 sm:p-5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,168,67,0.08)' }}>
                    <span className="text-2xl mb-2">{s.icon}</span>
                    <span className="font-display font-bold text-lg sm:text-xl gradient-text">{s.value}</span>
                    <span className="text-[10px] mt-1.5 text-center" style={{ color: '#5a4a38', lineHeight: 1.6 }}>{s.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D4A843' }} />
                <span className="text-sm" style={{ color: '#9a8a78' }}>
                  Building &amp; sharing on{' '}
                  <a href="https://www.instagram.com/buildfromzero21" target="_blank" rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2" style={{ color: '#D4A843' }}>Build_From_Zero</a>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <DoodleMascot position="bottom-10 right-10" direction="left" delay={0.4} size={50} messageIndex={1} />
    </section>
  )
}
