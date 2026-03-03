import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const tickerItems = [
  'BiggMate', 'StartupOS', 'BiggWork', 'Zerohuman', 'ExpandOS',
  'Mealverse', 'HealthOS', 'Biggdate', 'BiggSelf', 'BiggFam',
]

const stats = [
  { value: '10+', label: 'AI-native systems' },
  { value: '6+', label: 'Live products' },
  { value: '3', label: 'Builder verticals' },
  { value: '1', label: 'Connected universe' },
]

const lanes = [
  {
    number: '01',
    title: 'Foundation',
    description: 'Aligned co-founders, execution systems, and context-aware hiring. The stack that prevents the company from collapsing under its own weight.',
    items: ['BiggMate', 'StartupOS', 'BiggWork'],
  },
  {
    number: '02',
    title: 'Growth',
    description: 'Distribution, capital, and expansion infrastructure. The layer that scales without fragmenting what you have built.',
    items: ['Zerohuman', 'ExpandOS', 'BiggVentures'],
  },
  {
    number: '03',
    title: 'Founder Life',
    description: 'Health, food, relationships, identity, and family. Because founders are humans first, and the long game requires more than hustle.',
    items: ['Mealverse', 'HealthOS', 'Biggdate', 'BiggSelf', 'BiggFam'],
  },
]

const brands = [
  { title: 'BiggMate', path: '/biggmate', url: 'https://www.biggmate.com', isExternal: true, description: 'Find the right co-founder before the wrong one costs a year.', accent: 'from-amber-400 to-orange-500' },
  { title: 'StartupOS', path: '/startupos', url: 'https://www.startupos.in', isExternal: true, description: 'Execution systems for founders who need more than scattered tools.', accent: 'from-yellow-400 to-orange-500' },
  { title: 'BiggWork', path: '/biggwork', isExternal: false, description: 'Context-aware hiring built for startups at every stage.', accent: 'from-orange-400 to-rose-500' },
  { title: 'Zerohuman', path: '/zerohuman', url: 'https://www.zerohuman.co', isExternal: true, description: 'Distribution systems that compound attention, not just spend budget.', accent: 'from-orange-500 to-red-500' },
  { title: 'ExpandOS', path: '/expandos', isExternal: false, description: 'Fundraising and expansion workflows built for founder speed.', accent: 'from-amber-400 to-yellow-500' },
  { title: 'Mealverse', path: '/mealverse', url: 'https://mealverse.in', isExternal: true, description: 'Healthy food infrastructure so teams keep energy where it matters.', accent: 'from-lime-400 to-green-500' },
  { title: 'HealthOS', path: '/healthos', isExternal: false, description: 'Preventive health systems for founders playing the long game.', accent: 'from-red-400 to-orange-500' },
  { title: 'Biggdate', path: '/biggdate', url: 'https://www.biggdate.com', isExternal: true, description: 'AI for real relationships. Intent-based matching for long-term compatibility.', accent: 'from-rose-400 to-pink-500' },
  { title: 'BiggSelf', path: '/biggself', isExternal: false, description: 'Swiss-style vault for memories, identity, and intangible assets.', accent: 'from-slate-400 to-zinc-500' },
  { title: 'BiggFam', path: '/biggfam', isExternal: false, description: 'A family operating system for the life behind the company.', accent: 'from-amber-300 to-orange-400' },
]

const partners = ['In5 Dubai', '24six9', 'Y Combinator', 'Headstart', 'Xartup', 'IIM-A']

const BrandCard = ({ brand, index }) => {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
      className="group h-full rounded-[24px] border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/25 hover:bg-white/[0.04] hover:shadow-[0_16px_60px_rgba(249,115,22,0.09)]"
    >
      <div className={`h-px w-12 bg-gradient-to-r ${brand.accent}`} />
      <h3 className="mt-5 text-lg font-black text-white transition-colors group-hover:text-orange-100">
        {brand.title}
      </h3>
      <p className="mt-2.5 text-sm leading-6 text-slate-500">
        {brand.description}
      </p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
        Explore →
      </p>
    </motion.div>
  )

  if (brand.isExternal && brand.url) {
    return <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">{card}</a>
  }
  return <Link to={brand.path} className="block h-full">{card}</Link>
}

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-black pt-16 text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-white/8">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/[0.055] blur-[130px]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-6xl"
          >
            <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              BiggVentures Universe
            </div>

            <h1 className="mt-10 text-[3.6rem] font-black leading-[0.88] tracking-tighter text-white sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem]">
              Build founder
              <span className="block bg-gradient-to-br from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                momentum.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
              We build and connect the systems founders need to start, scale, and stay in the game — without fragmentation, silos, or starting from scratch.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(249,115,22,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(249,115,22,0.38)]"
              >
                Enter the portfolio →
              </a>
              <Link
                to="/about"
                className="inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                How it works
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/[0.025] px-6 py-5 text-center backdrop-blur-xl">
                <div className="text-2xl font-black text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="relative overflow-hidden border-b border-white/8 bg-black py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((brand, i) => (
            <span key={i} className="mx-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-700">
              {brand}
              <span className="ml-8 text-orange-600/30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT IS BIGGVENTURES ── */}
      <section className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">What we are</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
                Not a toolset.
                <span className="block text-orange-400">A universe.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.06 }}
              className="flex flex-col justify-center space-y-6"
            >
              <p className="text-xl leading-9 text-slate-400">
                BiggVentures is a founder infrastructure universe — connected systems that share context so founders never rebuild from scratch as they move through team formation, execution, hiring, growth, health, and life.
              </p>
              <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-6">
                <p className="text-xl font-black text-white">You don't switch systems.</p>
                <p className="mt-2 text-xl font-black text-orange-400">The founder stack moves with the work.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THREE LANES ── */}
      <section className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Three verticals</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              One operating system.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {lanes.map((lane, index) => (
              <motion.div
                key={lane.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="rounded-[28px] border border-white/8 bg-white/[0.025] p-8 backdrop-blur-xl"
              >
                <p className="text-[2.5rem] font-black text-white/8">{lane.number}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">{lane.title}</p>
                <p className="mt-5 text-base leading-7 text-slate-400">{lane.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {lane.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/8 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/[0.05] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">The portfolio</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              Ten systems.
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Connected.
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {brands.map((brand, index) => (
              <BrandCard key={brand.title} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              {['Real founders.', 'Real systems.', 'Real momentum.'].map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: index * 0.1 }}
                  className={`text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl ${index === 2 ? 'text-orange-400' : 'text-white'}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="rounded-[28px] border border-white/8 bg-white/[0.025] p-8 backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-slate-500">
                BiggVentures doesn't promise answers to everything.
              </p>
              <p className="mt-5 text-2xl font-black text-white sm:text-3xl">
                It promises a{' '}
                <span className="text-orange-400">path forward</span>{' '}
                through the founder journey.
              </p>
              <div className="mt-8 h-px bg-white/8" />
              <p className="mt-8 text-sm leading-6 text-slate-600">
                Guidance, systems, people, or execution — founders get routed to the right part of the stack.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              Backed by founder networks and operators
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {partners.map((partner, index) => (
                <motion.span
                  key={partner}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-full border border-white/8 bg-white/[0.025] px-4 py-2 text-xs font-semibold text-slate-500 backdrop-blur-xl"
                >
                  {partner}
                </motion.span>
              ))}
            </div>

            <h2 className="mt-16 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              Build with a system
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                that compounds for founders.
              </span>
            </h2>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(249,115,22,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(249,115,22,0.38)]"
              >
                Talk to BiggVentures →
              </Link>
              <Link
                to="/startups"
                className="inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
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
