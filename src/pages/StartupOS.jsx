import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const StartupOS = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 via-red-900/30 to-orange-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-start mb-6">
            <Link
              to="/startups"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition text-sm font-semibold"
            >
              ← Back to Startups
            </Link>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            S
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">StartupOS</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The growth core
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            AI Co-Builders + execution systems. Strategy engines, IMPACTS model, growth playbooks, revenue acceleration, customer success, and data intelligence.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="https://www.startupos.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white hover:opacity-90 transition"
            >
              Visit Website →
            </a>
          </motion.div>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'AI Co-Builders', desc: 'Intelligent partners for strategy and execution', icon: '🤖' },
            { title: 'Strategy Engines', desc: 'Data-driven strategic decision making', icon: '🎯' },
            { title: 'IMPACTS Model', desc: 'Framework for measurable growth', icon: '📊' },
            { title: 'Growth Playbooks', desc: 'Proven frameworks for scaling', icon: '📈' },
            { title: 'Revenue Acceleration', desc: 'Systems to accelerate revenue growth', icon: '💰' },
            { title: 'Customer Success', desc: 'Retention and expansion systems', icon: '🎉' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 mb-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Data Intelligence</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>
              <div className="text-slate-400 text-sm">Insights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Predictive</div>
              <div className="text-slate-400 text-sm">Analytics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Actionable</div>
              <div className="text-slate-400 text-sm">Recommendations</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-block px-8 py-4 glass-effect rounded-xl hover:bg-white/10 transition text-lg font-semibold"
          >
            ← Back to Universe
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default StartupOS
