import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const RelationOS = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 via-purple-900/30 to-pink-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            R
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">RelationOS</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            Because builders are human
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            AI for real relationships. Dating and marriage support that respects intent, values, and long-term compatibility.
          </motion.p>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Meaningful Connections</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">💝 Intent-Based Matching</h3>
                <p className="text-slate-400">Match by genuine intent and relationship goals</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🎯 Values Alignment</h3>
                <p className="text-slate-400">Connect with people who share your core values</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">⏳ Long-Term Compatibility</h3>
                <p className="text-slate-400">AI that understands what makes relationships last</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Relationship Support</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="font-semibold mb-2">Dating Support</div>
                <p className="text-slate-400 text-sm">Navigate the dating world with AI guidance</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="font-semibold mb-2">Marriage Preparation</div>
                <p className="text-slate-400 text-sm">Build strong foundations for lasting partnerships</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="font-semibold mb-2">Compatibility Analysis</div>
                <p className="text-slate-400 text-sm">Deep insights into relationship dynamics</p>
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

export default RelationOS

