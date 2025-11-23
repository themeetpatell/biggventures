import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BiggWork = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-violet-900/30 to-purple-900/30" />
        
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
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            B
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">BiggWork</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The talent engine
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Deep, real-time intelligence from StartupOS powers predictive hiring. Understands your startup's stage, team DNA, culture, and growth trajectory—then determines exactly who you should hire.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="https://biggwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl font-semibold text-white hover:opacity-90 transition"
            >
              Visit Website →
            </a>
          </motion.div>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Predictive Hiring Intelligence</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Real-Time StartupOS Intelligence</h3>
                <p className="text-slate-400">Deep insights into startup stage, team DNA, culture, founder psychology, product maturity, and growth trajectory</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Six-Dimensional Scoring</h3>
                <p className="text-slate-400">Scores candidates across stage fit, team fit, culture fit, growth fit, budget fit, and founder fit</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Context Model Building</h3>
                <p className="text-slate-400">Builds complete context model of your startup, identifies skill gaps, and generates adaptive job descriptions</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Predictive Success Matching</h3>
                <p className="text-slate-400">Recommends profiles most likely to thrive in your specific environment, not generic job titles</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 mb-4">BiggWork uses deep intelligence to understand your company's reality and predict hiring success.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">1</span>
                    <div>
                      <span className="text-slate-300 font-semibold">Context Analysis</span>
                      <p className="text-slate-400 text-sm">Analyzes startup stage, team DNA, culture, and growth trajectory</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">2</span>
                    <div>
                      <span className="text-slate-300 font-semibold">Gap Identification</span>
                      <p className="text-slate-400 text-sm">Identifies skill gaps and role priorities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">3</span>
                    <div>
                      <span className="text-slate-300 font-semibold">Candidate Scoring</span>
                      <p className="text-slate-400 text-sm">Scores across six dimensions for perfect fit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">4</span>
                    <div>
                      <span className="text-slate-300 font-semibold">Success Prediction</span>
                      <p className="text-slate-400 text-sm">Recommends profiles most likely to thrive</p>
                    </div>
                  </div>
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

export default BiggWork
