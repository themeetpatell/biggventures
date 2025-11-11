import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LifeOS = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-gray-900/30 to-slate-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            L
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">LifeOS</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            Your legacy vault
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            A Swiss-style home for memories, identity, and intangible assets. Preserve, prove, and pass on what matters.
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
            <h2 className="text-4xl font-bold mb-6 text-gradient">Preserve What Matters</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">💾 Memories</h3>
                <p className="text-slate-400">Secure storage for life's most important moments</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🆔 Identity</h3>
                <p className="text-slate-400">Digital identity preservation and verification</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">💎 Intangible Assets</h3>
                <p className="text-slate-400">Protect intellectual property and digital assets</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Legacy Features</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-slate-400 mr-3 text-xl">🔒</span>
                <div>
                  <strong className="text-white">Swiss-Style Security</strong>
                  <p className="text-slate-400 text-sm">Bank-level encryption and privacy</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 mr-3 text-xl">✅</span>
                <div>
                  <strong className="text-white">Prove & Verify</strong>
                  <p className="text-slate-400 text-sm">Blockchain-backed verification</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 mr-3 text-xl">📜</span>
                <div>
                  <strong className="text-white">Pass It On</strong>
                  <p className="text-slate-400 text-sm">Secure inheritance and legacy transfer</p>
                </div>
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

export default LifeOS

