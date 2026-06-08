import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticCard from '../components/MagneticCard'
import SplitText from '../components/SplitText'
import CurtainDivider from '../components/CurtainDivider'

const values = [
  {
    title: 'Founder-first',
    description: 'Every decision starts with understanding what founders actually need. Not what investors want, not what looks good on a deck.',
    accent: 'from-amber-300 to-orange-500',
  },
  {
    title: 'Systems over tools',
    description: 'Disconnected tools create disconnected founders. We build systems that share context, so momentum compounds instead of fragmenting.',
    accent: 'from-orange-400 to-red-500',
  },
  {
    title: 'Integrated by design',
    description: 'The BiggVentures stack is not a directory of products. It is one operating system with multiple entry points.',
    accent: 'from-red-400 to-rose-500',
  },
  {
    title: 'The long game',
    description: 'We build for founders who are in this for years, not quarters. Health, family, and life are not separate from the startup journey.',
    accent: 'from-amber-400 to-yellow-500',
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

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
      <SplitText text="We are building" stagger={0.08} duration={0.85} />
      <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
        <SplitText text="a universe." stagger={0.12} duration={1} delay={0.3} />
      </span>
    </motion.h1>
  )
}

const About = () => {
  return (
    <div className="relative pt-16 text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-32 sm:py-40">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">About</p>
            <div className="mt-8">
              <ParallaxHero />
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-300">
              Not a suite of SaaS tools. A coordinated founder infrastructure designed to give builders an unfair advantage at every stage of the journey.
            </p>
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="I · Mission" />

      <section className="relative overflow-hidden border-b border-white/10 py-28 sm:py-32">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Mission</p>
              <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
                <SplitText text='From "I want to build"' stagger={0.06} duration={0.75} />
                <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                  <SplitText text='to "we scaled globally."' stagger={0.06} duration={0.85} delay={0.25} />
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-9">
                BiggVentures is a coordinated stack of AI-native systems designed to take entrepreneurs from idea to global scale. We believe building a startup shouldn't require reinventing the wheel at every stage.
              </p>
              <p className="text-lg leading-9 text-slate-400">
                Every brand in our universe is a chapter. Together they create compounding momentum — where context from one system feeds into the next, and the founder never has to start from scratch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="II · Approach" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section className="relative overflow-hidden border-b border-white/10 py-28 sm:py-32">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...fadeIn}>
              <MagneticCard glowColor="155, 139, 255" intensity={6} className="h-full rounded-[28px]">
                <div className="h-full rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-10 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">What we do</p>
                  <ul className="mt-8 space-y-5">
                    {[
                      'Provide AI-native systems for every stage of startup growth',
                      'Connect founders with co-founders, investors, and the right operators',
                      'Automate operations from inception to compliance and beyond',
                      'Support founders beyond business — health, relationships, legacy',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(155,139,255,0.7)]" />
                        <span className="text-base leading-7 text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MagneticCard>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <MagneticCard glowColor="232, 195, 106" intensity={6} className="h-full rounded-[28px]">
                <div className="h-full rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-10 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Our approach</p>
                  <ul className="mt-8 space-y-5">
                    {[
                      'AI-first solutions that learn and adapt to each founder\'s context',
                      'Integrated ecosystem where tools share state and compound value',
                      'Human-centered design that respects intent, pace, and values',
                      'Continuous iteration based on what real founders actually face',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400 shadow-[0_0_10px_rgba(155,139,255,0.7)]" />
                        <span className="text-base leading-7 text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MagneticCard>
            </motion.div>
          </div>
        </div>
      </section>

      <CurtainDivider label="III · Principles" />

      <section className="relative overflow-hidden border-b border-white/10 py-28 sm:py-32">
        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Principles</p>
            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              What we stand for.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticCard glowColor="155, 139, 255" intensity={6} className="h-full rounded-[24px]">
                  <div className="h-full rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-6 backdrop-blur-xl">
                    <div className={`h-px w-16 bg-gradient-to-r ${value.accent}`} />
                    <h3 className="mt-6 text-lg font-black text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{value.description}</p>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurtainDivider label="IV · Team" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section className="relative overflow-hidden border-b border-white/10 py-28 sm:py-32">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Team</p>
            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              The people building this.
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-2">
            {[
              {
                name: 'Aariv Patel',
                role: 'CEO & Founder',
                accent: 'from-amber-400 to-orange-500',
                initial: 'A',
              },
              {
                name: 'Drashty Soni',
                role: 'CTO & Co-founder',
                linkedin: 'https://www.linkedin.com/in/drashtykondhia/',
                accent: 'from-orange-400 to-red-500',
                initial: 'D',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticCard glowColor="155, 139, 255" intensity={8} className="h-full rounded-[28px]">
                  <div className="group h-full rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-10 text-center backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30">
                    <div
                      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-3xl font-black text-white shadow-[0_18px_50px_rgba(155,139,255,0.35)]`}
                    >
                      {member.initial}
                    </div>
                    <h3 className="mt-6 text-2xl font-black text-white">{member.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-violet-300/85">{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-2.5 text-xs font-bold text-slate-200 transition-all hover:border-violet-400/40 hover:text-violet-300"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurtainDivider label="V · Build with us" />

      <section className="relative overflow-hidden py-32 sm:py-40">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl">
              Ready to build
              <span className="block bg-gradient-to-r from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
                with us?
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Explore the portfolio or reach out directly. We respond within 24-48 hours.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group relative inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-8 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(155,139,255,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(155,139,255,0.5)]"
              >
                <span className="relative z-10">Get in touch →</span>
                <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />
              </Link>
              <Link
                to="/startups"
                className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all hover:border-violet-400/40 hover:bg-white/[0.07]"
              >
                Explore startups
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
