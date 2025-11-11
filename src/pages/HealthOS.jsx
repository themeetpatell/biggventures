import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HealthOS = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-pink-900/30 to-red-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            H
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">HealthOS</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            Stay in the game
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Preventive health and longevity. Continuous monitoring, early warnings, and personalized protocols for founders and teams.
          </motion.p>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Health Dashboard</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Overall Health Score</span>
                  <span className="text-red-400 font-bold">87/100</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 w-[87%]"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-400">72 bpm</div>
                  <div className="text-xs text-slate-400 mt-1">Resting HR</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-400">7.5 hrs</div>
                  <div className="text-xs text-slate-400 mt-1">Avg Sleep</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Preventive Health</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">📊 Continuous Monitoring</h3>
                <p className="text-slate-400">24/7 health tracking and insights</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">⚠️ Early Warnings</h3>
                <p className="text-slate-400">Detect issues before they become problems</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🎯 Personalized Protocols</h3>
                <p className="text-slate-400">Custom health plans for founders and teams</p>
              </div>
            </div>
          </motion.div>
        </div>

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

export default HealthOS

