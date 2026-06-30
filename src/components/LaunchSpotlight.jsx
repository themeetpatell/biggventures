import { motion } from 'framer-motion'
import { LAUNCH, launchCopy } from '../data/launch'

// Featured launch card for the Home page. Custom dark treatment (not the raw
// white Product Hunt embed) so it sits cleanly inside the BiggVentures theme,
// accented blue -> violet to read as useDan's brand moment.
const LaunchSpotlight = () => {
  if (!LAUNCH.enabled) return null

  return (
    <section className="relative overflow-hidden border-b border-white/8 py-20 sm:py-28">
      {/* ambient blue/violet glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(13,14,22,0.6)] p-8 backdrop-blur-2xl sm:p-10"
          style={{
            boxShadow:
              '0 30px 90px -30px rgba(56,138,255,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* top hairline + corner sheens */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

          {/* badge row */}
          <div className="relative flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400/15 to-violet-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-200 ring-1 ring-inset ring-sky-300/25">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-300" />
              </span>
              {launchCopy.badge}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Portfolio launch
            </span>
          </div>

          {/* logo + headline */}
          <div className="relative mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={LAUNCH.logo}
              alt={`${LAUNCH.product} by ${LAUNCH.company} logo`}
              className="h-16 w-16 shrink-0 rounded-2xl ring-1 ring-white/10 sm:h-20 sm:w-20"
              loading="lazy"
            />
            <div className="min-w-0">
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                {LAUNCH.product}
                <span className="ml-2 text-base font-semibold text-slate-400 sm:text-lg">
                  by {LAUNCH.company}
                </span>
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                {LAUNCH.tagline}
              </p>
            </div>
          </div>

          {/* offer + CTA */}
          <div className="relative mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-200">
              <span aria-hidden>🎁</span> {LAUNCH.offer} for the community
            </span>
            <a
              href={LAUNCH.productHuntUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,138,255,0.35)] transition-all hover:-translate-y-px hover:shadow-[0_14px_40px_rgba(56,138,255,0.5)]"
            >
              {launchCopy.cardCta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LaunchSpotlight
