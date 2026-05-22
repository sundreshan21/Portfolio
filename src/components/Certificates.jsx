import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { certificates } from '../data/certificates'
import DoodleMascot from './DoodleMascot'

function CertCard({ cert }) {
  return (
    <div className="select-none rounded-2xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(212,168,67,0.15)', backdropFilter: 'blur(10px)' }}>
      <div className="relative overflow-hidden" style={{ height: '280px' }}>
        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(12,12,20,0.95) 100%)' }} />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: 'linear-gradient(135deg, #6B1D3A, #D4A843)', color: 'white' }}>{cert.year}</div>
      </div>
      <div className="p-7" style={{ textAlign: 'center' }}>
        <h3 className="font-display font-bold text-base" style={{ color: '#e8ddd0', lineHeight: 1.7, marginBottom: '0.75rem' }}>{cert.title}</h3>
        <p className="text-sm font-medium" style={{ color: '#D4A843', lineHeight: 1.8, marginBottom: '0.75rem' }}>🏛️ {cert.issuer}</p>
        <p className="text-xs" style={{ color: '#5a4a38', lineHeight: '2.2' }}>{cert.description}</p>
      </div>
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden w-full">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #6B1D3A 0%, transparent 65%)' }} />

      <div className="section-inner centered max-w-6xl w-full">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="section-header" style={{ marginBottom: '4rem' }}>
          <span className="section-label">ACHIEVEMENTS</span>
          <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
          <div className="section-bar" />
          <p className="section-subtitle" style={{ lineHeight: '2.2' }}>
            Awards and certifications that recognize my hard work and dedication.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="w-full flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow" grabCursor centeredSlides slidesPerView="auto"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={certificates.length > 1}
            style={{ paddingBottom: '52px' }}>
            {certificates.map(cert => (
              <SwiperSlide key={cert.id} style={{ width: '420px', maxWidth: '92vw' }}>
                <CertCard cert={cert} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <DoodleMascot position="bottom-16 right-14" direction="left" delay={0.35} size={48} messageIndex={5} />
    </section>
  )
}
