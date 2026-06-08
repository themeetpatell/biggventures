import { useState } from 'react'
import { motion } from 'framer-motion'

const RINGS = [
  {
    radius: 130,
    color: '#9b8bff',
    duration: 60,
    nodes: [
      { name: 'BiggMate', accent: '#fbbf24' },
      { name: 'StartupOS', accent: '#e8c36a' },
      { name: 'BiggWork', accent: '#c4b6ff' },
    ],
  },
  {
    radius: 220,
    color: '#a78bfa',
    duration: 90,
    reverse: true,
    nodes: [
      { name: 'Zerohuman', accent: '#9b8bff' },
      { name: 'Velora', accent: '#a78bfa' },
      { name: 'BiggVentures', accent: '#e8c36a' },
    ],
  },
  {
    radius: 320,
    color: '#e8c36a',
    duration: 130,
    nodes: [
      { name: 'Mealverse', accent: '#84cc16' },
      { name: 'GetTulsi', accent: '#34d399' },
      { name: 'BiggSelf', accent: '#cbd5e1' },
      { name: 'BiggFam', accent: '#fbbf24' },
    ],
  },
]

const Constellation = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[760px] items-center justify-center">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="-400 -400 800 800"
        aria-hidden="true"
      >
        {RINGS.map((r) => (
          <circle
            key={`ring-${r.radius}`}
            cx="0"
            cy="0"
            r={r.radius}
            fill="none"
            stroke={r.color}
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="3 8"
          />
        ))}

        {RINGS.flatMap((r) =>
          r.nodes.map((_, i) => {
            const angle = (i / r.nodes.length) * Math.PI * 2 - Math.PI / 2
            const x2 = Math.cos(angle) * r.radius
            const y2 = Math.sin(angle) * r.radius
            return (
              <line
                key={`line-${r.radius}-${i}`}
                x1="0"
                y1="0"
                x2={x2}
                y2={y2}
                stroke={r.color}
                strokeOpacity="0.08"
                strokeWidth="1"
              />
            )
          }),
        )}
      </svg>

      <div className="absolute z-30 flex flex-col items-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-300 via-violet-500 to-[#e8c36a] shadow-[0_0_60px_rgba(155,139,255,0.7)]">
          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-violet-300" />
          <span
            className="absolute inset-0 animate-pulse-ring rounded-full border border-violet-300"
            style={{ animationDelay: '1.3s' }}
          />
          <div className="z-10 text-center">
            <div className="text-2xl font-black tracking-tight text-white">BV</div>
            <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-white/90">
              Core
            </div>
          </div>
        </div>
        <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-violet-300/85">
          BiggVentures
        </div>
      </div>

      {RINGS.map((ring, ringIdx) => (
        <div
          key={`ring-rotor-${ring.radius}`}
          className={`absolute h-full w-full ${
            ring.reverse ? 'animate-orbit-rev' : 'animate-orbit-slow'
          }`}
          style={{ animationDuration: `${ring.duration}s` }}
        >
          {ring.nodes.map((node, i) => {
            const angle = (i / ring.nodes.length) * 360 - 90
            return (
              <div
                key={node.name}
                className="absolute left-1/2 top-1/2 z-20"
                style={{
                  transform: `rotate(${angle}deg) translateX(${ring.radius}px) rotate(${-angle}deg)`,
                }}
              >
                <NodeChip
                  node={node}
                  ringIdx={ringIdx}
                  isHovered={hovered === node.name}
                  onHover={() => setHovered(node.name)}
                  onLeave={() => setHovered(null)}
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

const NodeChip = ({ node, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ scale: 1.15 }}
      className="-translate-x-1/2 -translate-y-1/2 cursor-pointer"
    >
      <div
        className="relative flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 backdrop-blur-xl transition-all"
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${node.accent}, 0 0 60px ${node.accent}55`
            : `0 0 15px ${node.accent}33`,
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: node.accent,
            boxShadow: `0 0 8px ${node.accent}`,
          }}
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          {node.name}
        </span>
      </div>
    </motion.div>
  )
}

export default Constellation
