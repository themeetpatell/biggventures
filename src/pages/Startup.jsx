import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticCard from '../components/MagneticCard'
import SplitText from '../components/SplitText'
import CurtainDivider from '../components/CurtainDivider'

const startups = [
  {
    path: '/biggmate',
    visitUrl: 'https://www.biggmate.com',
    title: 'BiggMate',
    tagline: 'The spark',
    category: 'Foundation',
    description: 'Co-foundership engine. Match by intent, values, and complementary skills. Start building on day one with aligned partners.',
    accent: 'from-amber-400 to-orange-500',
    features: ['AI-powered matching', 'Shared startup room', 'Values alignment', 'Complementary skills'],
  },
  {
    path: '/startupos',
    visitUrl: 'https://www.startupos.in',
    title: 'StartupOS',
    tagline: 'The growth core',
    category: 'Foundation',
    description: 'AI Co-Builders + execution systems. Strategy engines, IMPACTS model, growth playbooks, revenue acceleration, and data intelligence.',
    accent: 'from-yellow-400 to-orange-500',
    features: ['AI Co-Builders', 'Strategy engines', 'Growth playbooks', 'Data intelligence'],
  },
  {
    path: '/biggwork',
    visitUrl: 'https://biggwork.com',
    title: 'BiggWork',
    tagline: 'The talent engine',
    category: 'Foundation',
    description: "Predictive hiring powered by StartupOS intelligence. Understands your startup's stage, team DNA, and culture—then scores candidates across six dimensions.",
    accent: 'from-orange-400 to-rose-500',
    features: ['Six-dimension scoring', 'Context model building', 'Predictive success', 'Stage-aware hiring'],
  },
  {
    path: '/zerohuman',
    visitUrl: 'https://www.zerohuman.co',
    title: 'Zerohuman',
    tagline: 'The distribution power',
    category: 'Growth',
    description: 'AI-driven audience growth. Creative generation, multichannel orchestration, and performance insights that compound reach.',
    accent: 'from-orange-500 to-red-500',
    features: ['Creative generation', 'Multichannel orchestration', 'Performance insights', 'Audience growth'],
  },
  {
    path: '/expandos',
    visitUrl: 'https://velora-sooty-seven.vercel.app/',
    title: 'Velora',
    tagline: 'The expansion layer',
    category: 'Growth',
    description: 'Capital, M&A, and strategic growth. Fundraising command, cap table, investor network, and acquisition workflows engineered for founder speed.',
    accent: 'from-violet-400 to-fuchsia-500',
    features: ['Fundraising command', 'Cap table management', 'Investor network', 'M&A workflows'],
  },
  {
    path: '/mealverse',
    visitUrl: 'https://mealverse.in',
    title: 'Mealverse',
    tagline: "The team's fuel supply",
    category: 'Founder Life',
    description: 'Healthy, homemade food at work. Predictive meal planning, nutrition dashboards, and seamless ops for offices.',
    accent: 'from-lime-400 to-green-500',
    features: ['Predictive meal planning', 'Nutrition dashboards', 'Seamless operations', 'Healthy meals'],
  },
  {
    path: '/biggdate',
    visitUrl: 'https://www.biggdate.com',
    title: 'Biggdate',
    tagline: 'Because builders are human',
    category: 'Founder Life',
    description: 'AI for real relationships. Dating and marriage support that respects intent, values, and long-term compatibility.',
    accent: 'from-rose-400 to-pink-500',
    features: ['Intent-based matching', 'Values alignment', 'Long-term compatibility', 'Relationship support'],
  },
  {
    path: '/healthos',
    visitUrl: 'https://gettulsi.com',
    title: 'GetTulsi',
    tagline: 'Stay in the game',
    category: 'Founder Life',
    description: 'Preventive health and longevity infrastructure. Continuous monitoring, early warnings, and personalized protocols for founders playing the long game.',
    accent: 'from-emerald-400 to-teal-500',
    features: ['Continuous monitoring', 'Early warnings', 'Personalized protocols', 'Longevity focus'],
  },
  {
    path: '/biggself',
    title: 'BiggSelf',
    tagline: 'Your legacy vault',
    category: 'Founder Life',
    description: 'A Swiss-style home for memories, identity, and intangible assets. Preserve, prove, and pass on what matters.',
    accent: 'from-slate-400 to-zinc-500',
    features: ['Memory preservation', 'Identity protection', 'Intangible assets', 'Legacy transfer'],
  },
  {
    path: '/biggfam',
    visitUrl: 'https://biggfam.com',
    title: 'BiggFam',
    tagline: 'Family OS',
    category: 'Founder Life',
    description: 'Family operating system for communication, rituals, and long-term wellbeing. The life behind the company.',
    accent: 'from-amber-300 to-orange-400',
    features: ['Family rituals', 'Wellbeing prompts', 'Legacy planning', 'Family comms'],
  },
]

const categories = ['All', 'Foundation', 'Growth', 'Founder Life']

const ParallaxHero = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 18 })
  const sy = useSpring(y, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 22
      const ny = (e.clientY / window.innerHeight - 0.5) * 16
      x.set(nx)
      y.set(ny)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.h1
      style={{ x: sx, y: sy }}
      className="text-5xl font-black leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[8rem]"
    >
      <SplitText text="The BiggVentures" stagger={0.08} duration={0.85} />
      <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
        <SplitText text="universe of systems." stagger={0.08} duration={1} delay={0.3} />
      </span>
    </motion.h1>
  )
}

const StartupCard = ({ startup, index }) => {
  const inner = (
    <MagneticCard
      glowColor="155, 139, 255"
      intensity={7}
      className="group h-full rounded-[28px]"
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.55, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-7 backdrop-blur-xl transition-all duration-500 group-hover:border-violet-400/30"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${startup.accent} text-lg font-black text-white shadow-[0_10px_30px_rgba(155,139,255,0.25)]`}
          >
            {startup.title[0]}
          </div>
          <div>
            <h3 className="text-lg font-black leading-tight text-white">
              {startup.title}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300/90">
              {startup.tagline}
            </p>
          </div>
        </div>

        <div className={`mt-6 h-px w-full bg-gradient-to-r ${startup.accent} opacity-30`} />

        <p className="mt-5 text-sm leading-7 text-slate-400">{startup.description}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {startup.features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-7 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          {startup.visitUrl ? 'Visit site' : 'Learn more'}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>

        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${startup.accent}`}
        />
      </motion.div>
    </MagneticCard>
  )

  if (startup.visitUrl) {
    return (
      <a href={startup.visitUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    )
  }
  return (
    <Link to={startup.path} className="block h-full">
      {inner}
    </Link>
  )
}

const Startup = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? startups
    : startups.filter((s) => s.category === activeCategory)

  return (
    <div className="relative pt-16 text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-28 sm:py-32">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Portfolio</p>
            <div className="mt-8">
              <ParallaxHero />
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              Ten interconnected products across three builder verticals. Each one solves a specific founder problem. Together, they form a complete operating system.
            </p>
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="The Portfolio" />

      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => {
            const count =
              cat === 'All' ? startups.length : startups.filter((s) => s.category === cat).length
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                  active
                    ? 'bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 text-white shadow-[0_10px_30px_rgba(155,139,255,0.35)]'
                    : 'border border-white/12 bg-white/[0.03] text-slate-300 backdrop-blur-xl hover:border-violet-400/40 hover:text-violet-200'
                }`}
              >
                <span className="relative z-10">
                  {cat}
                  <span className="ml-2 text-[10px] opacity-70">{count}</span>
                </span>
                {active && <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />}
              </button>
            )
          })}
        </motion.div>

        {activeCategory !== 'All' && (
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-500"
          >
            {activeCategory} ·{' '}
            {activeCategory === 'Foundation' && 'Team, execution, and operating systems'}
            {activeCategory === 'Growth' && 'Distribution, capital, and expansion'}
            {activeCategory === 'Founder Life' && 'Health, food, relationships, and family'}
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((startup, index) => (
              <StartupCard key={startup.title} startup={startup} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-bold text-slate-200 backdrop-blur-xl transition-all hover:border-violet-400/40 hover:text-white"
          >
            ← Back to universe
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Startup
