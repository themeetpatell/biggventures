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
    { to: '/expandos', label: 'ExpandOS' },
    { to: '/biggventures', label: 'BiggVentures' },
  ],
  'Founder Life': [
    { to: '/mealverse', label: 'Mealverse' },
    { to: '/healthos', label: 'HealthOS' },
    { to: '/biggdate', label: 'Biggdate' },
    { to: '/biggself', label: 'BiggSelf' },
    { to: '/biggfam', label: 'BiggFam' },
  ],
}

const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/biggventures-logo.png"
                alt="BiggVentures"
                className="h-12 w-12 shrink-0"
              />
              <span className="text-lg font-semibold tracking-[0.08em] text-white">
                BiggVentures
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-500">
              Founder infrastructure universe. Connected systems to start, scale, and stay in the game.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-slate-500 transition-colors hover:text-orange-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2025 BiggVentures Universe. All rights reserved.
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
                className="text-xs text-slate-600 transition-colors hover:text-orange-400"
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
