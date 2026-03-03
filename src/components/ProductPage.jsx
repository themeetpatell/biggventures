import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categoryLabel = {
  Foundation: 'Foundation · Team, execution & systems',
  Growth: 'Growth · Distribution, capital & expansion',
  'Founder Life': 'Founder Life · Health, family & identity',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
})

const ProductPage = ({ title, tagline, description, accent, visitUrl, features, points, category }) => {
  return (
    <div className="relative min-h-screen bg-black pt-16 text-white">

      {/* Accent line at very top */}
      <div className={`h-px w-full bg-gradient-to-r ${accent}`} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.07),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">

          {/* Nav row */}
          <motion.div
            {...fadeUp(0)}
            className="mb-14 flex flex-wrap items-center justify-between gap-4"
          >
            <Link
              to="/startups"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-white"
            >
              ← Startups
            </Link>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/70">
              {categoryLabel[category] || category}
            </span>
          </motion.div>

          {/* Main title block */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.p {...fadeUp(0.05)} className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
                {tagline}
              </motion.p>
              <motion.h1
                {...fadeUp(0.08)}
                className="mt-3 text-6xl font-black leading-[0.88] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem]"
              >
                {title}
              </motion.h1>
            </div>

            {visitUrl && (
              <motion.a
                {...fadeUp(0.12)}
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(249,115,22,0.36)] lg:self-auto"
              >
                Visit site ↗
              </motion.a>
            )}
          </div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.14)}
            className="mt-8 max-w-3xl text-lg leading-9 text-slate-400 sm:text-xl"
          >
            {description}
          </motion.p>

          {/* Feature chips */}
          <motion.div
            {...fadeUp(0.18)}
            className="mt-8 flex flex-wrap gap-2"
          >
            {features.map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
              >
                {f}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Points 2×2 grid */}
      <section className="relative border-b border-white/8 py-20 sm:py-24">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="rounded-[28px] border border-white/8 bg-white/[0.025] p-8 backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-black text-white">{point.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universe CTA */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 h-px w-12 bg-gradient-to-r from-amber-400 to-orange-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
              BiggVentures Universe
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              One system in a connected stack.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              {title} works alongside every other BiggVentures product — sharing context so the founder stack moves with the work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/startups"
                className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-xl transition-all hover:border-white/20 hover:text-white"
              >
                ← All systems
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(249,115,22,0.2)] transition-all hover:-translate-y-px hover:shadow-[0_14px_34px_rgba(249,115,22,0.34)]"
              >
                Talk to us →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
