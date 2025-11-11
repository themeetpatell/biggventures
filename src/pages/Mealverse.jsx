import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Mealverse = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-green-900/30 to-teal-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
          >
            M
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Mealverse</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-300"
          >
            The team's fuel supply
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Healthy, homemade food at work. Predictive meal planning, nutrition dashboards, and seamless ops for offices.
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
            <h3 className="text-2xl font-bold mb-6">This Week's Menu</h3>
            <div className="space-y-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                <div key={day} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <div className="font-semibold">{day}</div>
                    <div className="text-sm text-slate-400">Healthy balanced meal</div>
                  </div>
                  <div className="text-teal-400">✓</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Nutrition Intelligence</h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🍽️ Predictive Meal Planning</h3>
                <p className="text-slate-400">AI predicts team preferences and plans meals accordingly</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">📊 Nutrition Dashboards</h3>
                <p className="text-slate-400">Track team nutrition and health metrics</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">⚡ Seamless Operations</h3>
                <p className="text-slate-400">Automated ordering, delivery, and office management</p>
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

export default Mealverse

