import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticCard from './MagneticCard'
import SplitText from './SplitText'
import CurtainDivider from './CurtainDivider'

const categoryLabel = {
  Foundation: 'Foundation · Team, execution & systems',
  Growth: 'Growth · Distribution, capital & expansion',
  'Founder Life': 'Founder Life · Health, family & identity',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
})

const ParallaxTitle = ({ title }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 18 })
  const sy = useSpring(y, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 24
      const ny = (e.clientY / window.innerHeight - 0.5) * 18
      x.set(nx)
      y.set(ny)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.h1
      style={{ x: sx, y: sy }}
      className="mt-3 text-6xl font-black leading-[0.86] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem]"
    >
      {title}
    </motion.h1>
  )
}

const ProductPage = ({ title, tagline, description, accent, visitUrl, features, points, category }) => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <div className="relative min-h-screen text-white">
      <div className={`h-px w-full bg-gradient-to-r ${accent}`} />

      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-white/10 pt-16"
      >
        <div
          className={`absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-br ${accent} opacity-[0.07] blur-[140px]`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(155,139,255,0.08),transparent_60%)]" />

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:px-8"
        >
          <motion.div
            {...fadeUp(0)}
            className="mb-14 flex flex-wrap items-center justify-between gap-4"
          >
            <Link
              to="/startups"
              className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
              Startups
            </Link>
            <span className="rounded-full border border-violet-400/20 bg-violet-500/[0.05] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-violet-300/90 backdrop-blur-xl">
              {categoryLabel[category] || category}
            </span>
          </motion.div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.p
                {...fadeUp(0.06)}
                className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300"
              >
                {tagline}
              </motion.p>
              <motion.div {...fadeUp(0.1)}>
                <ParallaxTitle title={title} />
              </motion.div>
            </div>

            {visitUrl && (
              <motion.a
                {...fadeUp(0.18)}
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex flex-shrink-0 items-center justify-center gap-2 self-start overflow-hidden rounded-2xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(155,139,255,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(155,139,255,0.5)] lg:self-auto"
              >
                <span className="relative z-10">Visit site ↗</span>
                <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />
              </motion.a>
            )}
          </div>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-10 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl"
          >
            {description}
          </motion.p>

          <motion.div {...fadeUp(0.26)} className="mt-10 flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:text-violet-200"
              >
                {f}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <CurtainDivider label="Why it matters" />

      <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.06] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              Why it matters
            </p>
            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              <SplitText text="Built around how" stagger={0.07} duration={0.8} />
              <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                <SplitText text={`${title} earns its spot.`} stagger={0.07} duration={0.85} delay={0.3} />
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticCard
                  glowColor="155, 139, 255"
                  intensity={6}
                  className="h-full rounded-[28px]"
                >
                  <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 sm:p-10">
                    <div className="flex items-start gap-5">
                      <span
                        className={`text-5xl font-black leading-none bg-gradient-to-br ${accent} bg-clip-text text-transparent sm:text-6xl`}
                      >
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                          {point.title}
                        </h3>
                        <p className="mt-4 text-base leading-7 text-slate-400">
                          {point.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${accent}`}
                    />
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurtainDivider label="One node, one universe" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className={`mb-6 h-px w-16 bg-gradient-to-r ${accent}`} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              BiggVentures Universe
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              <SplitText text="One node in a constellation" stagger={0.06} duration={0.8} />
              <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                <SplitText text="that compounds for founders." stagger={0.06} duration={0.85} delay={0.3} />
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              {title} works alongside every other BiggVentures system — sharing context so founder data, decisions, and momentum flow across the entire stack.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/startups"
                className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-bold text-slate-200 backdrop-blur-xl transition-all hover:border-violet-400/40 hover:text-white"
              >
                ← All systems
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(155,139,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(155,139,255,0.5)]"
              >
                <span className="relative z-10">Talk to us →</span>
                <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
