import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: '#0c0c14' }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10"
          >
            <p className="font-display font-black gradient-text select-none" style={{ fontSize: '4.5rem', lineHeight: 1 }}>
              SK.
            </p>
          </motion.div>

          <div className="relative w-16 h-16 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{ border: '3px solid rgba(212,168,67,0.15)', borderTopColor: '#D4A843' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full"
              style={{ border: '2px solid rgba(107,29,58,0.2)', borderTopColor: '#6B1D3A' }}
            />
          </div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: '#4a3828', textTransform: 'uppercase' }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
