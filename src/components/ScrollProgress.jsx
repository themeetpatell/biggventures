import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.3,
  })

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-violet-400 via-violet-500 to-[#e8c36a]"
      style={{ scaleX, boxShadow: '0 0 12px rgba(155,139,255,0.55)' }}
    />
  )
}

export default ScrollProgress
