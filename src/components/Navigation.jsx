import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/startups', label: 'Startups' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ top: 'var(--launch-h, 0px)' }}
        className={`fixed left-0 right-0 z-50 border-b backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-black/75 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
            : 'border-transparent bg-black/40'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="group flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <span className="relative">
                <span className="absolute inset-0 -m-1 rounded-full bg-violet-500/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src="/biggventures-logo.png"
                  alt="BiggVentures"
                  className="relative h-10 w-10 shrink-0 transition-transform duration-500 group-hover:rotate-12"
                />
              </span>
              <span className="text-lg font-bold tracking-[0.08em] text-white">
                BiggVentures
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    location.pathname === item.path
                      ? 'text-violet-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 h-px w-4 -translate-x-1/2 rounded-full bg-violet-400"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(155,139,255,0.22)] transition-all hover:-translate-y-px hover:shadow-[0_10px_30px_rgba(155,139,255,0.35)] md:inline-flex"
            >
              Talk to us
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-6 bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{ top: 'calc(var(--launch-h, 0px) + 4rem)' }}
            className="fixed inset-x-0 z-40 border-b border-white/8 bg-black/96 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    location.pathname === item.path
                      ? 'bg-violet-500/10 text-violet-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-xl bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Talk to us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
