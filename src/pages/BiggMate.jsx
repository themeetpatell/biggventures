import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BiggMate = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 via-rose-900/30 to-pink-900/30" />
        
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
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            B
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">BiggMate</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The spark
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Co-foundership engine. Match by intent, values, and complementary skills. Start building on day one with aligned partners and a shared startup room.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="https://www.biggmate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl font-semibold text-white hover:opacity-90 transition"
            >
              Visit Website →
            </a>
          </motion.div>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Find Your Co-Founder</h2>
            <p className="text-slate-300 text-lg mb-4">
              Building alone is hard. BiggMate connects you with co-founders who share your vision, complement your skills, and align with your values.
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>AI-powered matching by intent, values, and skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>Shared startup room from day one</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>Aligned partners ready to build</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <div className="h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-slate-700 rounded w-24"></div>
                </div>
              </div>
              <div className="h-px bg-white/10"></div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  B
                </div>
                <div>
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-slate-700 rounded w-24"></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg text-white font-semibold">
                  92% Match
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

export default BiggMate
