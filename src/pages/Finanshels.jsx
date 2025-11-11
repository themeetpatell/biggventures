import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Finanshels = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-green-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            F
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Finanshels</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The financial backbone
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Accounting, tax, compliance—automated and monitored. Close books, file on time, monitor cash and VAT, see true runway in real time.
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
            <h3 className="text-2xl font-bold mb-6">Real-Time Financial Dashboard</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Cash Runway</span>
              <span className="text-green-400 font-bold">18 months</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Monthly Burn</span>
                  <span className="text-slate-300 font-semibold">$45K</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">VAT Status</span>
                  <span className="text-green-400 font-semibold">Up to date</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Automated Financial Operations</h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">Automated Accounting</strong>
                  <p className="text-slate-400 text-sm">Books close automatically every month</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">Tax Compliance</strong>
                  <p className="text-slate-400 text-sm">File on time, every time</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">Cash Monitoring</strong>
                  <p className="text-slate-400 text-sm">Real-time runway visibility</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-white">VAT Management</strong>
                  <p className="text-slate-400 text-sm">Track and file VAT automatically</p>
                </div>
              </li>
            </ul>
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

export default Finanshels

