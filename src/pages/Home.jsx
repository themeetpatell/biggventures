import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Constellation from '../components/Constellation'
import MagneticCard from '../components/MagneticCard'
import SectionReveal from '../components/SectionReveal'
import SplitText from '../components/SplitText'
import CurtainDivider from '../components/CurtainDivider'

const tickerItems = [
  'BiggMate', 'StartupOS', 'BiggWork', 'Zerohuman', 'Velora',
  'Mealverse', 'GetTulsi', 'BiggSelf', 'BiggFam', 'BiggVentures',
]

const stats = [
  { value: '10+', label: 'AI-native systems' },
  { value: '6+', label: 'Live products' },
  { value: '3', label: 'Builder verticals' },
  { value: '∞', label: 'Connected universe' },
]

const lanes = [
  {
    number: '01',
    title: 'Foundation',
    headline: 'The stack that prevents collapse.',
    description: 'Aligned co-founders, execution systems, and context-aware hiring — the load-bearing layer founders forget they need until it cracks.',
    items: ['BiggMate', 'StartupOS', 'BiggWork'],
    accent: 'from-amber-300 via-orange-400 to-orange-500',
  },
  {
    number: '02',
    title: 'Growth',
    headline: 'Compound momentum, not chaos.',
    description: 'Distribution, capital, and expansion infrastructure engineered to scale velocity without fragmenting what you have built.',
    items: ['Zerohuman', 'Velora', 'BiggVentures'],
    accent: 'from-violet-400 via-violet-500 to-[#e8c36a]',
  },
  {
    number: '03',
    title: 'Founder Life',
    headline: 'Humans first. Always.',
    description: 'Health, food, relationships, identity, and family — because the long game requires more than hustle and the company you build is downstream of the life you live.',
    items: ['Mealverse', 'GetTulsi', 'BiggSelf', 'BiggFam'],
    accent: 'from-rose-400 via-red-500 to-amber-500',
  },
]

const brands = [
  { title: 'BiggMate', path: '/biggmate', url: 'https://www.biggmate.com', isExternal: true, description: 'Find the right co-founder before the wrong one costs a year.', accent: 'from-amber-400 to-orange-500', glow: '251, 191, 36' },
  { title: 'StartupOS', path: '/startupos', url: 'https://www.startupos.in', isExternal: true, description: 'Execution systems for founders who need more than scattered tools.', accent: 'from-yellow-400 to-orange-500', glow: '245, 158, 11' },
  { title: 'BiggWork', path: '/biggwork', isExternal: false, description: 'Context-aware hiring built for startups at every stage.', accent: 'from-orange-400 to-rose-500', glow: '249, 115, 22' },
  { title: 'Zerohuman', path: '/zerohuman', url: 'https://www.zerohuman.co', isExternal: true, description: 'Distribution systems that compound attention, not just spend budget.', accent: 'from-orange-500 to-red-500', glow: '239, 68, 68' },
  { title: 'Velora', path: '/expandos', url: 'https://velora-sooty-seven.vercel.app/', isExternal: true, description: 'Capital, fundraising, and expansion workflows engineered for founder speed.', accent: 'from-violet-400 to-fuchsia-500', glow: '167, 139, 250' },
  { title: 'Mealverse', path: '/mealverse', url: 'https://mealverse.in', isExternal: true, description: 'Healthy food infrastructure so teams keep energy where it matters.', accent: 'from-lime-400 to-green-500', glow: '132, 204, 22' },
  { title: 'GetTulsi', path: '/healthos', url: 'https://gettulsi.com', isExternal: true, description: 'Preventive health and longevity infrastructure for founders playing the long game.', accent: 'from-emerald-400 to-teal-500', glow: '52, 211, 153' },
  { title: 'BiggSelf', path: '/biggself', isExternal: false, description: 'Swiss-style vault for memories, identity, and intangible assets.', accent: 'from-slate-400 to-zinc-500', glow: '203, 213, 225' },
  { title: 'BiggFam', path: '/biggfam', isExternal: false, description: 'A family operating system for the life behind the company.', accent: 'from-amber-300 to-orange-400', glow: '251, 191, 36' },
]

const partners = ['In5 Dubai', '24six9', 'Y Combinator', 'Headstart', 'Xartup', 'IIM-A']

const IntroLoader = ({ onDone }) => {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200)
    const t2 = setTimeout(() => onDone(), 1900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 1 ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mx-auto h-px w-40 overflow-hidden bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-violet-300 via-violet-500 to-[#e8c36a]"
            style={{ animation: 'intro-bar-grow 1.1s ease-out forwards' }}
          />
        </div>
        <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-violet-300/80">
          Entering BiggVentures
        </div>
      </motion.div>
    </motion.div>
  )
}

const HeroType = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 18 })
  const sy = useSpring(y, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 30
      const ny = (e.clientY / window.innerHeight - 0.5) * 24
      x.set(nx)
      y.set(ny)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.h1
      style={{ x: sx, y: sy }}
      className="text-[3.6rem] font-black leading-[0.86] tracking-tighter text-white sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem]"
    >
      <span className="block">Build founder</span>
      <span className="block bg-gradient-to-br from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
        momentum.
      </span>
    </motion.h1>
  )
}

const Counter = ({ to }) => {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        const numeric = parseFloat(String(to).replace(/[^0-9.]/g, '')) || 0
        if (numeric === 0) {
          setN(to)
          return
        }
        const dur = 1400
        const start = performance.now()
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(numeric * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  const suffix = typeof to === 'string' ? to.replace(/[0-9.]/g, '') : ''
  const display = typeof to === 'string' && to.match(/^[0-9]/) ? `${n}${suffix}` : to
  return <span ref={ref}>{display}</span>
}

const BrandCard = ({ brand, index }) => {
  const inner = (
    <MagneticCard
      glowColor={brand.glow}
      intensity={8}
      className="group h-full rounded-[24px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.04 }}
        className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-violet-400/35"
      >
        <div className={`h-px w-16 bg-gradient-to-r ${brand.accent}`} />

        <h3 className="mt-5 text-xl font-black tracking-tight text-white">
          {brand.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {brand.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300/85">
            Explore
          </p>
          <span className="text-violet-300 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        <div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(155,139,255,0.08) 100%)',
          }}
        />
      </motion.div>
    </MagneticCard>
  )

  if (brand.isExternal && brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    )
  }
  return (
    <Link to={brand.path} className="block h-full">
      {inner}
    </Link>
  )
}

const Home = () => {
  const [introDone, setIntroDone] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.88])
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0])
  const heroBlur = useTransform(heroProgress, [0, 1], [0, 8])
  const heroFilter = useTransform(heroBlur, (v) => `blur(${v}px)`)

  return (
    <div className="relative text-white">
      {!introDone && <IntroLoader onDone={() => setIntroDone(true)} />}

      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden border-b border-white/8 pt-16"
      >
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            filter: heroFilter,
          }}
          className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-500/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-200 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_10px_rgba(155,139,255,0.8)]" />
            BiggVentures Universe · v.2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <HeroType />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            Ten AI-native systems. One connected universe. Built for founders who refuse to assemble their stack from twenty broken pieces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#universe"
              className="group relative inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-8 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(155,139,255,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(155,139,255,0.5)]"
            >
              <span className="relative z-10">Enter the universe →</span>
              <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />
            </a>
            <Link
              to="/about"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]"
            >
              How it works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black/40 px-6 py-5 text-center backdrop-blur-xl">
                <div className="bg-gradient-to-b from-white to-violet-200 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                  <Counter to={stat.value} />
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introDone ? 0.6 : 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"
          >
            <span>Scroll</span>
            <span className="h-8 w-px animate-pulse bg-gradient-to-b from-violet-400/80 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <div className="relative overflow-hidden border-b border-white/8 bg-black py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((brand, i) => (
            <span key={i} className="mx-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
              {brand}
              <span className="ml-8 text-violet-400/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <CurtainDivider label="I · Manifesto" />

      <section className="relative overflow-hidden border-b border-white/8 py-32 sm:py-40">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              What we are
            </p>
            <h2 className="mt-8 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl md:text-8xl">
              <SplitText text="Not a toolset." stagger={0.08} duration={0.85} />
            </h2>
            <h2 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
              <SplitText text="Not a fund." stagger={0.08} duration={0.85} delay={0.15} />
            </h2>
            <h2 className="mt-2 text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
              <span className="bg-gradient-to-br from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                <SplitText text="A universe." stagger={0.12} duration={1} delay={0.35} />
              </span>
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-16">
              <p className="text-xl leading-9 text-slate-300">
                BiggVentures is a founder infrastructure universe — connected systems that share context so founders never rebuild from scratch.
              </p>
              <p className="text-xl leading-9 text-slate-400">
                Team formation. Execution. Hiring. Distribution. Capital. Health. Identity. Family. <span className="text-white">Every layer of the founder journey</span>, engineered to compound.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="II · The Universe" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section id="universe" className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              The universe
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              <SplitText text="One core." stagger={0.08} duration={0.8} />{' '}
              <span className="text-gradient-fire">
                <SplitText text="Ten orbits." stagger={0.08} duration={0.9} delay={0.25} />
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Hover the systems. Watch them breathe. Every node shares context with the core — so founder data, decisions, and momentum compound across the entire stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 sm:mt-20"
          >
            <Constellation />
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="III · The Verticals" />

      <section className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              Three verticals
            </p>
            <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              <SplitText text="One operating system." stagger={0.07} duration={0.8} />
              <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-amber-500 bg-clip-text text-transparent">
                <SplitText text="For the entire founder arc." stagger={0.06} duration={0.85} delay={0.3} />
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {lanes.map((lane, index) => (
              <motion.div
                key={lane.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 sm:p-12"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center md:gap-16">
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${lane.accent} bg-clip-text text-[5rem] font-black leading-none text-transparent sm:text-[7rem]`}>
                      {lane.number}
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
                      {lane.title}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
                      {lane.headline}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                      {lane.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {lane.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 transition-colors group-hover:border-violet-400/30 group-hover:text-violet-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${lane.accent}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurtainDivider label="IV · The Portfolio" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section id="portfolio" className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-violet-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              The portfolio
            </p>
            <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              <SplitText text="Ten systems." stagger={0.08} duration={0.8} />
              <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                <SplitText text="One signal." stagger={0.08} duration={0.9} delay={0.25} />
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {brands.map((brand, index) => (
              <BrandCard key={brand.title} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CurtainDivider label="V · The Path Forward" />

      <section className="relative overflow-hidden border-b border-white/8 py-32 sm:py-40">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              {[
                { line: 'Real founders.', color: 'text-white' },
                { line: 'Real systems.', color: 'text-white' },
                { line: 'Real compounding.', color: 'bg-gradient-to-r from-violet-300 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent' },
              ].map((item, index) => (
                <motion.p
                  key={item.line}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl ${item.color}`}
                >
                  {item.line}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
              <p className="text-lg leading-8 text-slate-400">
                BiggVentures doesn't promise answers to everything.
              </p>
              <p className="mt-6 text-3xl font-black leading-[1.1] text-white sm:text-4xl">
                It promises a{' '}
                <span className="bg-gradient-to-r from-violet-300 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                  path forward
                </span>{' '}
                through the founder journey.
              </p>
              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="mt-8 text-sm leading-7 text-slate-500">
                Guidance, systems, people, or execution — founders get routed to the right part of the stack, exactly when they need it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CurtainDivider label="VI · Start" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section className="relative overflow-hidden py-32 sm:py-40">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              Backed by founder networks and operators
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {partners.map((partner, index) => (
                <motion.span
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400 backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:text-violet-200"
                >
                  {partner}
                </motion.span>
              ))}
            </div>

            <h2 className="mt-20 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl md:text-8xl">
              <SplitText text="Build with a system" stagger={0.07} duration={0.8} />
              <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                <SplitText text="that compounds for founders." stagger={0.06} duration={0.9} delay={0.3} />
              </span>
            </h2>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group relative inline-flex min-w-[240px] items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-8 py-5 text-sm font-bold text-white shadow-[0_22px_60px_rgba(155,139,255,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(155,139,255,0.55)]"
              >
                <span className="relative z-10">Talk to BiggVentures →</span>
                <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />
              </Link>
              <Link
                to="/startups"
                className="inline-flex min-w-[240px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-8 py-5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]"
              >
                View all startups
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
