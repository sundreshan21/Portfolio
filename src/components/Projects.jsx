import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi'
import { projects } from '../data/projects'
import DoodleMascot from './DoodleMascot'

const techColors = {
  React: '#61DAFB', JavaScript: '#F7DF1E', Firebase: '#FFA000',
  'Node.js': '#8CC84B', MongoDB: '#47A248', HTML: '#E34F26',
  CSS: '#1572B6', Python: '#3776AB',
}

function TechBadge({ tech }) {
  const c = techColors[tech] || '#D4A843'
  return (
    <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
      style={{ background: `${c}14`, border: `1px solid ${c}35`, color: c, lineHeight: 1 }}>
      {tech}
    </span>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden w-full"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(212,168,67,0.1)', maxWidth: '720px', margin: '0 auto' }}
    >
      {/* Image on top */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(220px, 30vw, 340px)' }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(12,12,20,0.7) 100%)' }} />
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-bold"
            style={{ background: 'linear-gradient(135deg, #6B1D3A, #D4A843)', color: '#fff8ee' }}>
            <FiTag size={10} />{project.tag}
          </span>
        </div>
      </div>

      {/* Content centered below */}
      <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center' }}>
        <p className="font-display font-black text-4xl" style={{ color: 'rgba(212,168,67,0.12)', marginBottom: '0.75rem' }}>
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="font-display font-black" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', color: '#e8ddd0', lineHeight: 1.5, marginBottom: '1rem' }}>
          {project.title}
        </h3>
        <div style={{ width: '48px', height: '2.5px', background: 'linear-gradient(90deg, #6B1D3A, #D4A843)', borderRadius: '2px', margin: '0 auto 1.5rem' }} />
        <p style={{ color: '#8a7a68', lineHeight: '2.2', fontSize: '0.9rem', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center" style={{ marginBottom: '2rem' }}>
          {project.technologies.map(t => <TechBadge key={t} tech={t} />)}
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-xs px-6 py-2.5">
              <FiExternalLink size={13} />Live Demo
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-xs px-6 py-2.5">
            <FiGithub size={13} />GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden w-full">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(#6B1D3A, transparent)' }} />

      <div className="section-inner centered max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="section-header" style={{ marginBottom: '5rem' }}>
          <span className="section-label">WHAT I'VE BUILT</span>
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <div className="section-bar" />
          <p className="section-subtitle" style={{ lineHeight: '2.2' }}>
            Real-world projects built with passion —<br />from learning platforms to digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col items-center" style={{ gap: '3.5rem' }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>

      <DoodleMascot position="top-24 right-10" direction="left" delay={0.5} size={48} messageIndex={2} />
    </section>
  )
}
