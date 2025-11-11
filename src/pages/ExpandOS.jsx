import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ExpandOS = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/30 via-amber-900/30 to-yellow-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            E
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">ExpandOS</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The expansion layer
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Capital, M&A, and strategic growth. Fundraising command, cap table, investor network, and acquisition workflows.
          </motion.p>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">💰 Fundraising Command</h3>
              <p className="text-slate-400">Streamline your fundraising process with AI-powered tools</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📊 Cap Table Management</h3>
              <p className="text-slate-400">Track ownership, equity, and investor relationships</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🤝 Investor Network</h3>
              <p className="text-slate-400">Connect with the right investors at the right time</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">M&A Workflows</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">Acquisition Pipeline</strong>
                  <p className="text-slate-400 text-sm">Track and manage potential acquisitions</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">Due Diligence</strong>
                  <p className="text-slate-400 text-sm">Automated workflows for M&A processes</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">Integration Planning</strong>
                  <p className="text-slate-400 text-sm">Strategic growth through acquisitions</p>
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

export default ExpandOS

