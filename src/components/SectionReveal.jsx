import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VARIANTS = {
  zoom: {
    enterScale: [0.88, 1],
    enterBlur: [12, 0],
    exitScale: [1, 0.94],
    exitBlur: [0, 8],
    yShift: [80, 0, 0, -40],
  },
  rise: {
    enterScale: [0.96, 1],
    enterBlur: [6, 0],
    exitScale: [1, 0.97],
    exitBlur: [0, 4],
    yShift: [120, 0, 0, -60],
  },
  drift: {
    enterScale: [0.98, 1],
    enterBlur: [4, 0],
    exitScale: [1, 0.98],
    exitBlur: [0, 3],
    yShift: [60, 0, 0, -30],
  },
  cinematic: {
    enterScale: [0.82, 1],
    enterBlur: [18, 0],
    exitScale: [1, 0.9],
    exitBlur: [0, 14],
    yShift: [140, 0, 0, -80],
  },
}

const SectionReveal = ({
  children,
  variant = 'rise',
  className = '',
  id,
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const v = VARIANTS[variant] ?? VARIANTS.rise

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [v.enterScale[0], v.enterScale[1], v.exitScale[0], v.exitScale[1]],
  )
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [v.enterBlur[0], v.enterBlur[1], v.exitBlur[0], v.exitBlur[1]],
  )
  const filter = useTransform(blurValue, (b) => `blur(${b}px)`)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], v.yShift)

  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          filter,
          y,
          willChange: 'transform, opacity, filter',
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionReveal
