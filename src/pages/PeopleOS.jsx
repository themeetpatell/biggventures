import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PeopleOS = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-violet-900/30 to-purple-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            P
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">PeopleOS</span>
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
            Hire fast, train faster. Role scorecards, AI interviews, onboarding blueprints, and continuous micro-learning tied to business outcomes.
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
            <h2 className="text-4xl font-bold mb-6 text-gradient">Talent Operations</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Role Scorecards</h3>
                <p className="text-slate-400">Define success metrics for every role</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">AI Interviews</h3>
                <p className="text-slate-400">Intelligent candidate screening and assessment</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Onboarding Blueprints</h3>
                <p className="text-slate-400">Get new hires productive from day one</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Continuous Learning</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Team Learning Score</span>
                  <span className="text-purple-400 font-bold">87%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-violet-500 w-[87%]"></div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-slate-300 mb-4">Micro-learning tied to business outcomes</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Sales Training</span>
                    <span className="text-green-400">✓ Complete</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Product Knowledge</span>
                    <span className="text-green-400">✓ Complete</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Leadership Skills</span>
                    <span className="text-yellow-400">In Progress</span>
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

export default PeopleOS

