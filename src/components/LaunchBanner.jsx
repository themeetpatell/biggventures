import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LAUNCH, launchCopy } from '../data/launch'

const STORAGE_KEY = 'usedan-launch-banner-dismissed'
const BANNER_HEIGHT = '2.5rem' // keep in sync with `h-10` below

// The banner pushes the rest of the site down via a single CSS variable
// (`--launch-h`) read by App's root padding and the Navigation top offset.
const setBannerOffset = (value) => {
  if (typeof document === 'undefined') return
  document.documentElement.style.setProperty('--launch-h', value)
}

const LaunchBanner = () => {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  })

  const visible = LAUNCH.enabled && !dismissed

  useEffect(() => {
    setBannerOffset(visible ? BANNER_HEIGHT : '0px')
    return () => setBannerOffset('0px')
  }, [visible])

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, '1')
    }
    setDismissed(true)
  }

  if (!LAUNCH.enabled) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-[60] h-10 border-b border-white/10 bg-[#0a0b14]/90 backdrop-blur-xl"
        >
          {/* blue -> violet sheen bridging useDan's brand into the site */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-violet-500/15" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-10 sm:px-12">
            <a
              href={LAUNCH.productHuntUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs font-medium text-slate-200 sm:text-[13px]"
            >
              <span aria-hidden className="text-sm">🚀</span>
              <span className="font-semibold text-white">
                {launchCopy.bannerLead}
              </span>
              <span className="hidden text-sky-300 sm:inline">
                · {launchCopy.bannerMeta}
              </span>
              <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-400/20 to-violet-400/20 px-2.5 py-0.5 font-semibold text-sky-200 ring-1 ring-inset ring-sky-300/25 transition-colors group-hover:text-white group-hover:ring-sky-300/50">
                {launchCopy.bannerCta}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </a>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss launch announcement"
              className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <span aria-hidden className="text-sm leading-none">✕</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LaunchBanner
