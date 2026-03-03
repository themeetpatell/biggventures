import { motion } from 'framer-motion'
import { useState } from 'react'

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
    <div className="relative bg-black pt-16 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute left-0 top-0 h-[600px] w-[700px] rounded-full bg-orange-500/[0.05] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Get in touch</p>
            <h1 className="mt-6 text-[4rem] font-black leading-[0.88] tracking-tighter text-white sm:text-[6rem] lg:text-[9rem] xl:text-[10rem]">
              Let's talk.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-8 text-sm text-slate-500">
              <span>Dubai, UAE · GMT+4</span>
              <span className="h-px w-10 bg-white/10" />
              <span>Founder, operator, investor, or partner</span>
              <span className="h-px w-10 bg-white/10" />
              <span>We read every message</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reach section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">

          {/* Left: channels */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Channels</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white lg:text-4xl">
                Reach us anywhere.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Built by{' '}
                <a href="https://themeetpatel.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline-offset-4 hover:text-orange-400 transition-colors hover:underline">
                  Meet Patel
                </a>
                . Respond within 24–48 hours.
              </p>
            </motion.div>

            <div className="mt-10 space-y-2">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group flex items-center gap-5 border-b border-white/8 py-5 transition-all hover:border-orange-400/20"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-slate-500 transition-colors group-hover:border-orange-400/25 group-hover:text-orange-400">
                    {method.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">{method.title}</div>
                    <div className="mt-0.5 text-base font-medium text-slate-200 truncate">{method.handle}</div>
                  </div>
                  <span className="text-slate-700 transition-all group-hover:translate-x-1.5 group-hover:text-orange-400">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">Message us</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white lg:text-4xl">
              Send a message.
            </h2>

            {submitted ? (
              <div className="mt-10 rounded-[24px] border border-orange-400/15 bg-orange-500/[0.04] px-8 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-2xl font-black text-orange-400">✓</div>
                <p className="mt-5 text-xl font-black text-white">Message sent.</p>
                <p className="mt-2 text-sm text-slate-400">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { id: 'name', label: 'Name', type: 'text' },
                    { id: 'email', label: 'Email', type: 'email' },
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm text-slate-100 placeholder-slate-700 transition-all focus:border-orange-400/35 focus:bg-white/[0.05] focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm text-slate-100 placeholder-slate-700 transition-all focus:border-orange-400/35 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm text-slate-100 placeholder-slate-700 transition-all focus:border-orange-400/35 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.012 }}
                  whileTap={{ scale: 0.988 }}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(249,115,22,0.2)] transition-shadow hover:shadow-[0_12px_36px_rgba(249,115,22,0.34)]"
                >
                  Send message →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">FAQ</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white lg:text-4xl">
                Common questions.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Can't find what you're looking for? Send us a message directly.
              </p>
            </motion.div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="overflow-hidden border-b border-white/8"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="flex w-full items-center justify-between py-5 text-left transition-colors"
                  >
                    <span className="pr-8 text-base font-semibold text-slate-200 leading-relaxed">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-orange-400"
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
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-7 text-slate-400">{faq.answer}</p>
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
