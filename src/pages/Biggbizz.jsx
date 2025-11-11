import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Biggbizz = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            B
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Biggbizz</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The connective tissue
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            The community that connects it all. Founders, operators, investors, mentors—programs, deals, and peer accountability.
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
            <h3 className="text-2xl font-bold mb-6">Community Stats</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Active Members</span>
                <span className="text-purple-400 font-bold text-2xl">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Founders</span>
                <span className="text-purple-400 font-bold text-2xl">1,203</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Investors</span>
                <span className="text-purple-400 font-bold text-2xl">342</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Mentors</span>
                <span className="text-purple-400 font-bold text-2xl">156</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Connect & Grow</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">👥 Peer Networks</h3>
                <p className="text-slate-400">Connect with founders, operators, and investors</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🎓 Programs</h3>
                <p className="text-slate-400">Structured learning and growth programs</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">💼 Exclusive Deals</h3>
                <p className="text-slate-400">Access to deals and opportunities</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">📊 Accountability</h3>
                <p className="text-slate-400">Peer accountability and support systems</p>
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

export default Biggbizz

