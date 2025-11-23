import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [activeFAQ, setActiveFAQ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
          <polyline points="3,7 12,13 21,7" />
        </svg>
      ),
      title: 'Email',
      description: 'aarivbizz@gmail.com',
      link: 'mailto:aarivbizz@gmail.com',
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.5v-7h2.3l.4-3h-2.7v-1.9c0-.9.3-1.5 1.6-1.5h1.2V4.4c-.6-.1-1.3-.2-2-.2-2 0-3.4 1.2-3.4 3.5V11H9v3h3.9v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'in/themeetpatel',
      link: 'https://www.linkedin.com/in/themeetpatel',
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v15a.5.5 0 0 1-.8.4l-3.9-3.1-2.6 3.1a.5.5 0 0 1-.8 0l-2.6-3.1-3.9 3.1a.5.5 0 0 1-.8-.4v-15ZM9 9.2c0 1.9 1.5 3.4 3.4 3.4 1.9 0 3.4-1.5 3.4-3.4S14.3 5.8 12.4 5.8 9 7.3 9 9.2Zm-.6 4.9a5.1 5.1 0 0 0 6.4 0l3.7 2.9V4.5c0-.8-.6-1.5-1.4-1.5h-11C5.7 3 5 3.7 5 4.5V17l3.4-2.9Z"/>
        </svg>
      ),
      title: 'Twitter / X',
      description: '@themeetpatel',
      link: 'https://twitter.com/the_meetpatel',
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      ),
      title: 'Instagram',
      description: '@themeetpatel',
      link: 'https://instagram.com/the.meetpatell',
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M21 7.2c0-1.1-1.1-1.8-2-1.3l-11 6a1.5 1.5 0 0 0 0 2.6l11 6c.9.5 2-.1 2-1.2V7.2Z"/>
          <path d="M3 5a2 2 0 0 1 2-2h2v18H5a2 2 0 0 1-2-2V5Z"/>
        </svg>
      ),
      title: 'YouTube',
      description: '@themeetpatel',
      link: 'https://www.youtube.com/@themeetpatel',
    }
  ]


  const faqs = [
    { question: 'How do I get started with BiggVentures?', answer: 'Start by exploring our universe of systems. Each system is designed to work independently or together. Sign up for the systems that match your startup stage and needs.' },
    { question: 'Do I need to use all systems?', answer: 'No! Each system works independently. Use what you need, when you need it. Many founders start with BiggMate or StartupOS and expand as they grow.' },
    { question: 'What makes BiggVentures different?', answer: 'We\'re the only platform that covers the complete founder journey—from finding co-founders to scaling globally, plus health, relationships, and legacy. Everything is AI-native and designed to work together.' },
    { question: 'Is there a free trial?', answer: 'Yes! Most of our systems offer free trials or free tiers. Check individual system pages for specific pricing and trial information.' },
    { question: 'Can I integrate BiggVentures with other tools?', answer: 'Absolutely! Our systems are built with integration in mind. We offer APIs and webhooks for most systems, and we\'re constantly adding new integrations.' },
    { question: 'What kind of support do you offer?', answer: 'We offer 24/7 AI support across all systems, plus human support during business hours. Premium plans include dedicated account managers and priority support.' },
  ]

  return (
    <div className="pt-16 min-h-screen overflow-hidden">
      <motion.section
        ref={ref}
        style={{ y, opacity }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-blue-900/40 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,113,133,0.4),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-8"
          >
            <span className="text-gradient">Get in Touch</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto mb-6"
          >
            Let's build the future together
          </motion.p>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We're here to help you on your startup journey
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gradient"
              >
                Connect With Us
              </motion.h2>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                Built by themeetpatel.com
              </div>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  aria-label={method.title}
                  className="text-white/85 hover:text-white transition"
                >
                  {method.icon}
                  <span className="sr-only">{method.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-100 transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-100 transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-100 transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-100 resize-none transition"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-center text-gradient"
          >
            Virtual Office
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden group border-2 border-white/10 hover:border-white/30 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500" />
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10 text-center">
                <div className="text-6xl md:text-7xl mb-6">🌐</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-gradient">
                  Virtual-First Universe
                </h3>
                <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed">
                  BiggVentures operates as a virtual-first company, connecting founders globally through our integrated platform.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl shadow-lg">
                      🏙️
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-white">Headquarters</div>
                      <div className="text-slate-400">Dubai, UAE</div>
                      <div className="text-sm text-slate-500">GMT+4</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
                      🌍
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-white">Global Reach</div>
                      <div className="text-slate-400">50+ Countries</div>
                      <div className="text-sm text-slate-500">24/7 Support</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/15 transition-opacity" />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-center text-gradient"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition"
                >
                  <span className="text-lg font-semibold text-slate-200">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    className="text-2xl text-purple-400"
                  >
                    ↓
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFAQ === index ? 'auto' : 0, opacity: activeFAQ === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-slate-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Ready to Start?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of founders building the future with BiggVentures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition text-lg"
              >
                Explore Universe
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 glass-effect rounded-xl hover:bg-white/10 transition text-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  )
}

export default Contact
