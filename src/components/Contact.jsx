import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiSend, FiCheckCircle } from 'react-icons/fi'
import DoodleMascot from './DoodleMascot'

const contacts = [
  { id: 'mail',  icon: FiMail,  label: 'Email',  value: 'sundreshan21@gmail.com', href: 'mailto:sundreshan21@gmail.com', color: '#D4A843' },
  { id: 'phone', icon: FiPhone, label: 'Phone',  value: '+91 9025174327',          href: 'tel:+919025174327',            color: '#6B1D3A' },
]

const socials = [
  { id: 'li', icon: FiLinkedin,  label: 'LinkedIn',  color: '#0A66C2', href: 'https://www.linkedin.com/in/sundreshan-k444b14373?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'gh', icon: FiGithub,    label: 'GitHub',    color: '#D4A843', href: 'https://github.com/sundreshan21' },
  { id: 'ig', icon: FiInstagram, label: 'Instagram', color: '#E1306C', href: 'https://www.instagram.com/buildfromzero21?igsh=eGM3dHM5NWttejF5' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (form.message.trim().length < 10) e.message = 'Please write at least 10 characters'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({}); setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }) }, 4500)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', fontSize: '0.875rem',
    fontFamily: 'Inter, sans-serif', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(212,168,67,0.18)', borderRadius: '12px',
    color: '#e8ddd0', outline: 'none', transition: 'border-color 0.25s', lineHeight: '1.6',
    textAlign: 'center',
  }

  return (
    <section id="contact" className="relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(#D4A843, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(#6B1D3A, transparent)' }} />

      <div className="section-inner centered max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="section-bar" />
          <p className="section-subtitle" style={{ lineHeight: '2.3' }}>
            Have a project idea, an opportunity, or just want to say hi?<br />
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-centered w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="flex flex-col items-center gap-4 w-full"
            style={{ marginBottom: '2.5rem' }}
          >
            {contacts.map(c => (
              <a
                key={c.id}
                href={c.href}
                className="contact-tile px-6 py-4 rounded-2xl transition-all hover:scale-[1.02]"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(212,168,67,0.1)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}35` }}
                >
                  <c.icon size={17} color={c.color} />
                </div>
                <p className="text-[11px] font-semibold" style={{ color: '#5a4a38', lineHeight: 1.8 }}>{c.label}</p>
                <p className="text-sm font-medium mt-1" style={{ color: '#e8ddd0', lineHeight: 1.6 }}>{c.value}</p>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 w-full"
            style={{ marginBottom: '3.5rem' }}
          >
            {socials.map(s => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:scale-105"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}38` }}
              >
                <s.icon size={15} color={s.color} />
                <span className="text-xs font-semibold" style={{ color: s.color }}>{s.label}</span>
              </a>
            ))}
          </motion.div>

          <div className="flex items-center justify-center gap-4 w-full" style={{ marginBottom: '2.5rem' }}>
            <div className="flex-1 h-px max-w-[80px]" style={{ background: 'rgba(212,168,67,0.1)' }} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase shrink-0" style={{ color: '#3a2818' }}>
              SEND A MESSAGE
            </span>
            <div className="flex-1 h-px max-w-[80px]" style={{ background: 'rgba(212,168,67,0.1)' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="w-full"
          >
            <div
              className="rounded-2xl p-6 sm:p-8 w-full"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(212,168,67,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <FiCheckCircle size={52} color="#D4A843" className="mb-5" />
                  <h4 className="font-display font-bold text-xl mb-3" style={{ color: '#e8ddd0', lineHeight: 1.6 }}>
                    Message Sent! 🎉
                  </h4>
                  <p style={{ color: '#7a6a58', lineHeight: 1.9 }}>
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} noValidate className="w-full">
                  <div className="flex flex-col gap-6 w-full" style={{ marginBottom: '1.5rem' }}>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-2"
                        style={{ color: '#7a6a58', letterSpacing: '0.04em', lineHeight: 1.8 }}
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Sundreshan K"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : 'rgba(212,168,67,0.18)' }}
                        onFocus={e => (e.target.style.borderColor = '#6B1D3A')}
                        onBlur={e => (e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(212,168,67,0.18)')}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1.5 text-center" style={{ color: '#ef4444', lineHeight: 1.6 }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-2"
                        style={{ color: '#7a6a58', letterSpacing: '0.04em', lineHeight: 1.8 }}
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'rgba(212,168,67,0.18)' }}
                        onFocus={e => (e.target.style.borderColor = '#6B1D3A')}
                        onBlur={e => (e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(212,168,67,0.18)')}
                      />
                      {errors.email && (
                        <p className="text-xs mt-1.5 text-center" style={{ color: '#ef4444', lineHeight: 1.6 }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: '#7a6a58', letterSpacing: '0.04em', lineHeight: 1.8 }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        borderColor: errors.message ? '#ef4444' : 'rgba(212,168,67,0.18)',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#6B1D3A')}
                      onBlur={e =>
                        (e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(212,168,67,0.18)')
                      }
                    />
                    {errors.message && (
                      <p className="text-xs mt-1.5 text-center" style={{ color: '#ef4444', lineHeight: 1.6 }}>
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      id="contact-submit"
                      type="submit"
                      className="btn-primary flex items-center gap-2.5 px-10 py-3.5 text-sm"
                    >
                      Send Message
                      <FiSend size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <DoodleMascot position="top-20 left-10" direction="right" delay={0.5} size={46} messageIndex={6} />
    </section>
  )
}
