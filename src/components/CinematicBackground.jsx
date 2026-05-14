import { useMemo } from 'react'

const STAR_COUNT = 90

const CinematicBackground = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.4,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(20, 16, 40, 0.85) 0%, rgba(7, 7, 13, 1) 60%)',
        }}
      />

      <div
        className="absolute -left-32 top-1/4 h-[60vw] w-[60vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(155, 139, 255, 0.22) 0%, rgba(155, 139, 255, 0) 60%)',
          filter: 'blur(80px)',
          animation: 'aurora-drift 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -right-40 top-2/3 h-[55vw] w-[55vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(138, 120, 255, 0.16) 0%, rgba(138, 120, 255, 0) 60%)',
          filter: 'blur(90px)',
          animation: 'aurora-drift 28s ease-in-out infinite reverse',
          animationDelay: '-8s',
        }}
      />
      <div
        className="absolute left-1/3 top-[140%] h-[45vw] w-[45vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(232, 195, 106, 0.12) 0%, rgba(232, 195, 106, 0) 60%)',
          filter: 'blur(100px)',
          animation: 'aurora-drift 34s ease-in-out infinite',
          animationDelay: '-14s',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          animation: 'grid-drift 60s linear infinite',
        }}
      />

      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              boxShadow: '0 0 6px rgba(255,255,255,0.6)',
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}

export default CinematicBackground
