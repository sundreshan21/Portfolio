import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const messages = [
  '👋 Hi there!',
  '🚀 Let\'s build!',
  '💡 Keep going!',
  '🔥 You got this!',
  '✨ Stay curious!',
  '🎯 Dream big!',
  '💪 Never stop!',
  '🌟 Shine on!',
  '🤝 Let\'s connect!',
  '❤️ Love coding!',
]

/**
 * DoodleMascot — small cartoon of Sundreshan that appears in each section.
 * Now with rotating positive messages!
 */
export default function DoodleMascot({
  position = 'bottom-10 right-10',
  direction = 'left',
  delay = 0,
  size = 52,
  messageIndex = 0,
}) {
  // Pick a random starting message and cycle
  const [msgIdx, setMsgIdx] = useState(messageIndex % messages.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx(prev => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
      className={`absolute z-20 pointer-events-none select-none ${position}`}
      style={{
        filter: 'drop-shadow(0 4px 12px rgba(107,29,58,0.45))',
      }}
    >
      <motion.img
        src="/doodle.png"
        alt="Sundreshan mascot"
        width={size}
        style={{
          width: `${size}px`,
          height: 'auto',
          transform: direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)',
        }}
        animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
      />

      {/* Rotating speech bubble with positive messages */}
      <motion.div
        key={msgIdx}
        initial={{ opacity: 0, scale: 0.5, y: 5 }}
        animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.5, 1, 1, 1, 0.5] }}
        transition={{ duration: 4.5, ease: 'easeInOut' }}
        className="absolute -top-9 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
        style={{
          background: 'rgba(212,168,67,0.18)',
          border: '1px solid rgba(212,168,67,0.45)',
          color: '#D4A843',
          lineHeight: 1.4,
        }}
      >
        {messages[msgIdx]}
      </motion.div>
    </motion.div>
  )
}
