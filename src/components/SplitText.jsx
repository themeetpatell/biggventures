import { motion } from 'framer-motion'

const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.7,
  stagger = 0.06,
  once = true,
  as = 'span',
}) => {
  const words = String(text).split(/(\s+)/)

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: '110%', rotateX: -65 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const MotionTag = motion[as] ?? motion.span

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      className={`inline-block [perspective:800px] ${className}`}
    >
      {words.map((word, i) => {
        if (/^\s+$/.test(word)) {
          return <span key={`s-${i}`}>{word}</span>
        }
        return (
          <span
            key={`w-${i}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ verticalAlign: 'baseline' }}
          >
            <motion.span variants={child} className="inline-block will-change-transform">
              {word}
            </motion.span>
          </span>
        )
      })}
    </MotionTag>
  )
}

export default SplitText
