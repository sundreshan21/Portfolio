import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import DoodleMascot from './DoodleMascot'

const milestones = [
  { id: 1, year: '2022', icon: '🌱', color: '#4CAF50', title: 'The Beginning',
    description: 'Discovered my passion for programming. Started with the basics of web development — HTML, CSS, and JavaScript. Curiosity turned into commitment.' },
  { id: 2, year: '2023', icon: '🛠️', color: '#D4A843', title: 'Building Projects',
    description: 'Developed multiple real-world projects and deepened my skills in React, Python, and Firebase. Problem-solving became my daily habit.' },
  { id: 3, year: '2023', icon: '🎤', color: '#E91E63', title: 'Technical Events',
    description: 'Competed and organized technical symposiums. Won the Paper Presentation competition at Ramco Institute, gaining confidence on stage.' },
  { id: 4, year: '2024', icon: '✍️', color: '#9C27B0', title: 'Build_From_Zero',
    description: 'Launched my content creation journey on Instagram — helping beginners navigate the tech world from absolute scratch.' },
  { id: 5, year: '2024', icon: '🚀', color: '#6B1D3A', title: 'Smart Learn',
    description: 'Created Smart Learn — a personalized AI-powered learning platform that adapts to each user\'s skill level and learning style.' },
  { id: 6, year: '2025', icon: '🎯', color: '#D4A843', title: "What's Next",
    description: 'Continuing to explore advanced technologies, build meaningful projects, and grow my community. The journey from zero never stops.' },
]

function TimelineCard({ milestone, inView, index, side }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`timeline-card-wrap ${side}`}
    >
      <div className="timeline-card">
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full inline-block"
          style={{
            background: `${milestone.color}18`,
            border: `1px solid ${milestone.color}40`,
            color: milestone.color,
            marginBottom: '0.75rem',
          }}
        >
          {milestone.year}
        </span>
        <h3
          className="font-display font-bold"
          style={{ fontSize: '1.1rem', color: '#e8ddd0', lineHeight: 1.6, marginBottom: '0.65rem' }}
        >
          {milestone.title}
        </h3>
        <p style={{ color: '#7a6a58', lineHeight: 2.1, fontSize: '0.875rem' }}>
          {milestone.description}
        </p>
      </div>
    </motion.div>
  )
}

function TimelineNode({ milestone, inView, index }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ delay: index * 0.1 + 0.05, type: 'spring', stiffness: 280 }}
      className="timeline-node w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg"
      style={{
        background: `linear-gradient(135deg, ${milestone.color}, #0c0c14)`,
        border: `2.5px solid ${milestone.color}`,
        boxShadow: `0 0 22px ${milestone.color}55`,
      }}
    >
      {milestone.icon}
    </motion.div>
  )
}

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="timeline" className="relative overflow-hidden w-full">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(107,29,58,0.08) 0%, transparent 65%)' }}
      />

      <div className="section-inner centered max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">MY STORY</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-bar" />
          <p className="section-subtitle" style={{ lineHeight: '2.2' }}>
            From zero to building real-world projects — every milestone shaped who I am.
          </p>
        </motion.div>

        <div ref={ref} className="timeline-zigzag w-full">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={m.id} className="timeline-item">
                {isLeft ? (
                  <>
                    <TimelineCard milestone={m} inView={inView} index={i} side="left" />
                    <TimelineNode milestone={m} inView={inView} index={i} />
                    <div className="timeline-empty" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <div className="timeline-empty" aria-hidden="true" />
                    <TimelineNode milestone={m} inView={inView} index={i} />
                    <TimelineCard milestone={m} inView={inView} index={i} side="right" />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <DoodleMascot position="bottom-10 right-12" direction="left" delay={0.4} size={50} messageIndex={4} />
    </section>
  )
}
