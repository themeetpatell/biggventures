import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import SplitText from '../components/SplitText'
import CurtainDivider from '../components/CurtainDivider'

const contactMethods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3,7 12,13 21,7" />
      </svg>
    ),
    title: 'Email',
    handle: 'aarivbizz@gmail.com',
    link: 'mailto:aarivbizz@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    title: 'LinkedIn',
    handle: 'in/themeetpatel',
    link: 'https://www.linkedin.com/in/themeetpatel',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    title: 'X / Twitter',
    handle: '@themeetpatel',
    link: 'https://twitter.com/the_meetpatel',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Instagram',
    handle: '@the.meetpatell',
    link: 'https://instagram.com/the.meetpatell',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M21 7.2c0-1.1-1.1-1.8-2-1.3l-11 6a1.5 1.5 0 0 0 0 2.6l11 6c.9.5 2-.1 2-1.2V7.2Z" />
        <path d="M3 5a2 2 0 0 1 2-2h2v18H5a2 2 0 0 1-2-2V5Z" />
      </svg>
    ),
    title: 'YouTube',
    handle: '@themeetpatel',
    link: 'https://www.youtube.com/@themeetpatel',
  },
]

const faqs = [
  {
    question: 'How do I get started with BiggVentures?',
    answer: "Start by exploring our portfolio of systems. Each product is designed to work independently or together. Reach out via the form or email and we'll route you to the right entry point.",
  },
  {
    question: 'Do I need to use all systems?',
    answer: 'No. Each system works independently. Most founders start with BiggMate or StartupOS and expand as they grow. Use what you need, when you need it.',
  },
  {
    question: 'What makes BiggVentures different?',
    answer: 'We cover the complete founder journey — from finding co-founders to scaling globally, plus health, relationships, and legacy. Everything is AI-native and designed to share context across systems.',
  },
  {
    question: 'Where are you based?',
    answer: 'BiggVentures is headquartered in Dubai, UAE, and operates as a virtual-first company with global reach.',
  },
  {
    question: 'Can I invest or partner with BiggVentures?',
    answer: 'Yes — reach out via email or LinkedIn. We are open to conversations with operators, angels, and ecosystem partners who understand the founder infrastructure space.',
  },
]

const ParallaxHero = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 18 })
  const sy = useSpring(y, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 28
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
      className="text-[4rem] font-black leading-[0.86] tracking-tighter text-white sm:text-[6rem] lg:text-[9rem] xl:text-[11rem]"
    >
      <SplitText text="Let's" stagger={0.1} duration={0.85} />
      <span className="block bg-gradient-to-br from-violet-200 via-violet-500 to-[#e8c36a] bg-clip-text text-transparent">
        <SplitText text="talk." stagger={0.15} duration={1.05} delay={0.3} />
      </span>
    </motion.h1>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [activeFAQ, setActiveFAQ] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="relative pt-16 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Get in touch</p>
            <div className="mt-6">
              <ParallaxHero />
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_10px_rgba(155,139,255,0.8)]" />
                Dubai, UAE · GMT+4
              </span>
              <span className="h-px w-10 bg-white/15" />
              <span>Founder, operator, investor, or partner</span>
              <span className="h-px w-10 bg-white/15" />
              <span>We read every message</span>
            </div>
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="Reach us" />

      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Channels</p>
              <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
                Reach us anywhere.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Built by{' '}
                <a
                  href="https://themeetpatel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 underline-offset-4 transition-colors hover:text-violet-200 hover:underline"
                >
                  Meet Patel
                </a>
                . Respond within 24–48 hours.
              </p>
            </motion.div>

            <div className="mt-10 space-y-1">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 border-b border-white/10 py-6 transition-all hover:border-violet-400/30"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-500/[0.06] group-hover:text-violet-300 group-hover:shadow-[0_0_20px_rgba(155,139,255,0.25)]">
                    {method.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      {method.title}
                    </div>
                    <div className="mt-1 truncate text-base font-bold text-slate-100">
                      {method.handle}
                    </div>
                  </div>
                  <span className="text-slate-600 transition-all group-hover:translate-x-1.5 group-hover:text-violet-300">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Message us</p>
            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
              Send a message.
            </h2>

            {submitted ? (
              <div className="mt-10 overflow-hidden rounded-[28px] border border-violet-400/25 bg-violet-500/[0.06] px-10 py-16 text-center backdrop-blur-xl">
                <div className="relative mx-auto h-16 w-16">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-violet-400" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-300 via-violet-500 to-[#e8c36a] text-2xl font-black text-white shadow-[0_0_30px_rgba(155,139,255,0.55)]">
                    ✓
                  </div>
                </div>
                <p className="mt-8 text-2xl font-black text-white">Message sent.</p>
                <p className="mt-3 text-sm text-slate-400">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-xl sm:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { id: 'name', label: 'Name', type: 'text' },
                    { id: 'email', label: 'Email', type: 'email' },
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-700 transition-all focus:border-violet-400/50 focus:bg-black/60 focus:shadow-[0_0_0_4px_rgba(155,139,255,0.08)] focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-700 transition-all focus:border-violet-400/50 focus:bg-black/60 focus:shadow-[0_0_0_4px_rgba(155,139,255,0.08)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-700 transition-all focus:border-violet-400/50 focus:bg-black/60 focus:shadow-[0_0_0_4px_rgba(155,139,255,0.08)] focus:outline-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.012 }}
                  whileTap={{ scale: 0.988 }}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-6 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(155,139,255,0.3)] transition-shadow hover:shadow-[0_26px_70px_rgba(155,139,255,0.5)]"
                >
                  <span className="relative z-10">Send message →</span>
                  <span className="absolute inset-0 -translate-x-full animate-shimmer-x" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <CurtainDivider label="Common questions" accent="from-[#e8c36a] via-violet-500 to-violet-400" />

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">FAQ</p>
              <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
                Common questions.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Can't find what you're looking for? Send us a message directly.
              </p>
            </motion.div>

            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden border-b border-white/10"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-violet-100"
                  >
                    <span className="pr-8 text-base font-bold leading-relaxed text-slate-100 sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 text-violet-300"
                    >
                      ↓
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeFAQ === index ? 'auto' : 0,
                      opacity: activeFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-base leading-7 text-slate-400">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
