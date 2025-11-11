import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/startups', label: 'Startups' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">Biggbizz</span>
            <span className="text-xs text-slate-400">Universe</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  location.pathname === item.path
                    ? 'text-purple-300'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-purple-500/20 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300"
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

