import { motion } from 'framer-motion'

const CurtainDivider = ({ label, accent = 'from-violet-400 via-violet-500 to-[#e8c36a]' }) => {
  return (
    <div className="relative mx-auto flex max-w-7xl items-center gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={`h-px flex-1 bg-gradient-to-r ${accent}`}
      />
      {label && (
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.32em' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] font-bold uppercase tracking-[0.32em] text-violet-300/80"
        >
          {label}
        </motion.span>
      )}
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`h-px flex-1 bg-gradient-to-r ${accent}`}
      />
    </div>
  )
}

export default CurtainDivider
