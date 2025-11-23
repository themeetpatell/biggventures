import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const values = [
    { title: 'Innovation First', description: 'We push boundaries and challenge the status quo. Every solution is built with cutting-edge AI and forward-thinking design.', icon: '💡' },
    { title: 'Founder-Centric', description: 'Every decision we make starts with understanding what founders actually need. Your success is our mission.', icon: '🎯' },
    { title: 'Integrated Excellence', description: 'Our systems don\'t just work—they work together. Seamless integration creates compounding value.', icon: '🔗' },
    { title: 'Global Vision', description: 'We build for the world. From local startups to global enterprises, our platform scales with your ambition.', icon: '🌐' },
  ]

  const testimonials = [
    { name: 'Sarah Chen', role: 'Founder, TechFlow', quote: 'BiggVentures transformed how we build. From finding co-founders to scaling globally—everything in one universe.', avatar: '👩‍💼' },
    { name: 'Marcus Rodriguez', role: 'CEO, GrowthLabs', quote: 'The integrated approach is game-changing. We went from idea to Series A in 18 months.', avatar: '👨‍💻' },
    { name: 'Priya Patel', role: 'Co-founder, HealthTech AI', quote: 'Finally, a platform that understands founders are human. Business, health, relationships—all covered.', avatar: '👩‍🔬' },
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,113,133,0.3),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-8"
          >
            <span className="text-gradient">About BiggVentures</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto mb-6"
          >
            The OS Universe for Startups
          </motion.p>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            From "I want to build" to "we scaled globally"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-8 text-gradient"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed mb-6"
            >
              BiggVentures is a coordinated stack of AI-native systems designed to take entrepreneurs from "I want to build" to "we scaled globally." 
              We believe that building a startup shouldn't require reinventing the wheel at every stage. Every brand in our universe is a chapter; 
              together they create compounding momentum.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              Our vision is to create a complete operating system for startups—from finding co-founders to scaling globally, from managing finances 
              to building relationships. We're not just tools; we're your partners in building something extraordinary.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">What We Do</h3>
            <ul className="space-y-4 text-slate-300">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Provide AI-native systems for every stage of startup growth</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Connect founders with co-founders, investors, and mentors</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Automate operations from incorporation to compliance</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Support founders beyond business—health, relationships, legacy</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">Our Approach</h3>
            <ul className="space-y-4 text-slate-300">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">AI-first solutions that learn and adapt</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Integrated ecosystem where tools work together</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Human-centered design that respects intent and values</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-3 text-xl">✓</span>
                <span className="text-lg">Continuous innovation based on real founder needs</span>
              </motion.li>
            </ul>
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
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gradient">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
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
            Team Behind It
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Meet Patel',
                role: 'CEO/Founder',
                linkedin: 'https://www.linkedin.com/in/themeetpatel/',
                gradient: 'from-purple-500 to-pink-500',
                initial: 'M',
              },
              {
                name: 'Drashty Soni',
                role: 'CTO/Co-founder',
                linkedin: 'https://www.linkedin.com/in/drashtykondhia/',
                gradient: 'from-blue-500 to-cyan-500',
                initial: 'D',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${member.gradient}`} />
                <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10 text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl font-black text-white shadow-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {member.initial}
                  </div>
                  <h3 className="text-3xl font-black mb-2 text-gradient">{member.name}</h3>
                  <p className="text-xl text-slate-400 mb-6">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${member.gradient} rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
                
                <div className={`absolute bottom-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} opacity-5 blur-xl group-hover:opacity-15 transition-opacity`} />
              </motion.div>
            ))}
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
            What Founders Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-slate-400">{testimonial.role}</div>
                </div>
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
            <h2 className="text-4xl font-bold mb-6 text-gradient">Ready to Build?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of founders who are building the future with BiggVentures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="px-8 py-4 glass-effect rounded-xl hover:bg-white/10 transition text-lg font-semibold"
              >
                Explore Universe
              </Link>
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  )
}

export default About
