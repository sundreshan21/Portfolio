import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/skills'
import DoodleMascot from './DoodleMascot'

function SkillChip({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -4 }}
      className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(212,168,67,0.1)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(107,29,58,0.1)'
        e.currentTarget.style.borderColor = 'rgba(107,29,58,0.45)'
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(107,29,58,0.18)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
        e.currentTarget.style.borderColor = 'rgba(212,168,67,0.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <span style={{ fontSize: '1.9rem', lineHeight: 1 }}>{skill.icon}</span>
      <p className="text-xs font-semibold text-center" style={{ color: '#b09878', lineHeight: 1.8 }}>
        {skill.name}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  const { ref: gridRef, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(#D4A843, transparent)' }} />

      <div className="section-inner sm:px-8">
        <div className="split-row items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="split-photo lg:sticky lg:top-28"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl opacity-20 blur-xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #6B1D3A, #D4A843)' }} />
              <div className="relative overflow-hidden"
                style={{ width: '220px', height: '268px', borderRadius: '18px', border: '2px solid rgba(212,168,67,0.25)', boxShadow: '0 16px 48px rgba(107,29,58,0.3)' }}>
                <img src="/profile.png" alt="Sundreshan K" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="mt-5 text-center lg:text-left">
              <p className="font-display font-bold text-lg" style={{ color: '#e8ddd0', lineHeight: 1.5 }}>Sundreshan K</p>
              <p className="text-xs mt-1" style={{ color: '#7a6a58', lineHeight: 1.8 }}>Web Dev · Content Creator</p>
            </div>
          </motion.div>

          <div className="split-content wide flex-1">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ marginBottom: '2.5rem' }}>
              <span className="section-label" style={{ textAlign: 'inherit', display: 'block' }}>WHAT I KNOW</span>
              <h2 className="section-title" style={{ textAlign: 'inherit', fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>
                My <span className="gradient-text">Skills</span>
              </h2>
              <div className="section-bar" style={{ margin: '0 0 1.25rem 0' }} />
              <p style={{ color: '#7a6a58', lineHeight: '2.2', fontSize: '0.92rem', maxWidth: '480px' }}>
                A blend of technical skills and creative abilities developed through hands-on projects,
                competitions, and continuous self-learning.
              </p>
            </motion.div>

            <div ref={gridRef} className="grid gap-4 w-full"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
              {skills.map((s, i) => (
                <SkillChip key={s.id} skill={s} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <DoodleMascot position="bottom-10 left-10" direction="right" delay={0.3} size={46} messageIndex={3} />
    </section>
  )
}
