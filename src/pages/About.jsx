import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Founder-first',
    description: 'Every decision starts with understanding what founders actually need. Not what investors want, not what looks good on a deck.',
  },
  {
    title: 'Systems over tools',
    description: 'Disconnected tools create disconnected founders. We build systems that share context, so momentum compounds instead of fragmenting.',
  },
  {
    title: 'Integrated by design',
    description: 'The BiggVentures stack is not a directory of products. It is one operating system with multiple entry points.',
  },
  {
    title: 'The long game',
    description: 'We build for founders who are in this for years, not quarters. Health, family, and life are not separate from the startup journey.',
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 },
}

const About = () => {
  return (
    <div className="relative bg-black pt-16 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/8 py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(249,115,22,0.12),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">About</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[7rem]">
              We are building
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                a universe.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              Not a suite of SaaS tools. A coordinated founder infrastructure designed to give builders an unfair advantage at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden border-b border-white/8 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.08),transparent_22%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Mission</p>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                From "I want to build"
                <span className="block text-orange-400">to "we scaled globally."</span>
              </h2>
            </div>
            <div className="space-y-6 text-slate-400">
              <p className="text-lg leading-8">
                BiggVentures is a coordinated stack of AI-native systems designed to take entrepreneurs from idea to global scale. We believe building a startup shouldn't require reinventing the wheel at every stage.
              </p>
              <p className="text-lg leading-8">
                Every brand in our universe is a chapter. Together they create compounding momentum—where context from one system feeds into the next, and the founder never has to start from scratch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we do vs approach */}
      <section className="relative overflow-hidden border-b border-white/8 py-24 sm:py-28">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              {...fadeIn}
              className="rounded-[28px] border border-white/8 bg-white/[0.025] p-8 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">What we do</p>
              <ul className="mt-6 space-y-5">
                {[
                  'Provide AI-native systems for every stage of startup growth',
                  'Connect founders with co-founders, investors, and the right operators',
                  'Automate operations from inception to compliance and beyond',
                  'Support founders beyond business — health, relationships, legacy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                    <span className="text-base leading-7 text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="rounded-[28px] border border-white/8 bg-white/[0.025] p-8 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Our approach</p>
              <ul className="mt-6 space-y-5">
                {[
                  'AI-first solutions that learn and adapt to each founder\'s context',
                  'Integrated ecosystem where tools share state and compound value',
                  'Human-centered design that respects intent, pace, and values',
                  'Continuous iteration based on what real founders actually face',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                    <span className="text-base leading-7 text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden border-b border-white/8 py-24 sm:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Principles</p>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              What we stand for
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl"
              >
                <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-orange-500" />
                <h3 className="mt-5 text-lg font-black text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden border-b border-white/8 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.08),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Team</p>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              The people building this
            </h2>
          </motion.div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
            {[
              {
                name: 'Meet Patel',
                role: 'CEO & Founder',
                linkedin: 'https://www.linkedin.com/in/themeetpatel/',
                accent: 'from-amber-400 to-orange-500',
                initial: 'M',
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-[28px] border border-white/8 bg-white/[0.025] p-8 text-center backdrop-blur-xl transition-all hover:border-orange-400/20 hover:bg-white/[0.04]"
              >
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-2xl font-black text-white shadow-lg`}>
                  {member.initial}
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-400">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-orange-400/30 hover:text-orange-400"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.08),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Ready to build with us?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Explore the portfolio or reach out directly.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-w-[200px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(249,115,22,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(249,115,22,0.36)]"
              >
                Get in touch →
              </Link>
              <Link
                to="/startups"
                className="inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.06]"
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
