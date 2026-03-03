import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    description: 'Predictive hiring powered by StartupOS intelligence. Understands your startup\'s stage, team DNA, and culture—then scores candidates across six dimensions.',
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
    title: 'ExpandOS',
    tagline: 'The expansion layer',
    category: 'Growth',
    description: 'Capital, M&A, and strategic growth. Fundraising command, cap table, investor network, and acquisition workflows.',
    accent: 'from-amber-400 to-yellow-500',
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
    title: 'HealthOS',
    tagline: 'Stay in the game',
    category: 'Founder Life',
    description: 'Preventive health and longevity. Continuous monitoring, early warnings, and personalized protocols for founders.',
    accent: 'from-red-400 to-orange-500',
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

const StartupCard = ({ startup, index }) => {
  const inner = (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
      className="group h-full rounded-[28px] border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/25 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)]"
    >
      {/* Accent + letter */}
      <div className="flex items-center gap-4">
        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${startup.accent} text-lg font-black text-white shadow-lg`}>
          {startup.title[0]}
        </div>
        <div>
          <h3 className="text-lg font-black text-white leading-tight group-hover:text-orange-100 transition-colors">
            {startup.title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-400/80">
            {startup.tagline}
          </p>
        </div>
      </div>

      <div className={`mt-5 h-px w-full bg-gradient-to-r ${startup.accent} opacity-20`} />

      <p className="mt-5 text-sm leading-7 text-slate-400">
        {startup.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {startup.features.map((f) => (
          <span
            key={f}
            className="rounded-full border border-white/8 bg-black/50 px-2.5 py-1 text-xs font-medium text-slate-400"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
        {startup.visitUrl ? 'Visit site' : 'Learn more'}
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </motion.div>
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
    <div className="relative bg-black pt-16 text-white">

      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/8 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(249,115,22,0.12),transparent_28%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Portfolio</p>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              The BiggVentures
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                universe of systems
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Ten interconnected products across three builder verticals. Each one solves a specific founder problem. Together, they form a complete operating system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        {/* Category tabs */}
        <motion.div
          {...fadeIn}
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 text-white shadow-[0_6px_20px_rgba(249,115,22,0.3)]'
                  : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
              {cat === 'All' && (
                <span className="ml-2 text-[10px] opacity-60">{startups.length}</span>
              )}
              {cat !== 'All' && (
                <span className="ml-2 text-[10px] opacity-60">
                  {startups.filter((s) => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Category label */}
        {activeCategory !== 'All' && (
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
          >
            {activeCategory} ·{' '}
            {activeCategory === 'Foundation' && 'Team, execution, and operating systems'}
            {activeCategory === 'Growth' && 'Distribution, capital, and expansion'}
            {activeCategory === 'Founder Life' && 'Health, food, relationships, and family'}
          </motion.p>
        )}

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((startup, index) => (
              <StartupCard key={startup.title} startup={startup} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Back link */}
        <motion.div
          {...fadeIn}
          className="mt-20 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-xl transition-all hover:border-white/16 hover:text-white"
          >
            ← Back to universe
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Startup
