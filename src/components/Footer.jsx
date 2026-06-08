import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { to: '/about', label: 'About' },
    { to: '/startups', label: 'Startups' },
    { to: '/contact', label: 'Contact' },
  ],
  Foundation: [
    { to: '/biggmate', label: 'BiggMate' },
    { to: '/startupos', label: 'StartupOS' },
    { to: '/biggwork', label: 'BiggWork' },
  ],
  Growth: [
    { to: '/zerohuman', label: 'Zerohuman' },
    { to: '/expandos', label: 'Velora' },
    { to: '/biggventures', label: 'BiggVentures' },
  ],
  'Founder Life': [
    { to: '/mealverse', label: 'Mealverse' },
    { to: '/healthos', label: 'GetTulsi' },
    { to: '/biggdate', label: 'Biggdate' },
    { to: '/biggself', label: 'BiggSelf' },
    { to: '/biggfam', label: 'BiggFam' },
  ],
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="group mb-5 flex items-center gap-3">
              <span className="relative">
                <span className="absolute inset-0 -m-1 rounded-full bg-violet-500/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src="/biggventures-logo.png"
                  alt="BiggVentures"
                  className="relative h-12 w-12 shrink-0"
                />
              </span>
              <span className="text-lg font-bold tracking-[0.08em] text-white">BiggVentures</span>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Founder infrastructure universe. Connected systems to start, scale, and stay in the game.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-300/90">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ to, label }) => (
                  <li key={`${category}-${label}`}>
                    <Link
                      to={to}
                      className="group relative inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <span className="mr-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
            © 2026 BiggVentures Universe · All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { to: '/about', label: 'Privacy' },
              { to: '/contact', label: 'Terms' },
              { to: '/contact', label: 'Support' },
            ].map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-violet-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
