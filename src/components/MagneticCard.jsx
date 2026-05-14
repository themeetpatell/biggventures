import { useRef, useState } from 'react'

const MagneticCard = ({ children, className = '', glowColor = '155, 139, 255', intensity = 12 }) => {
  const ref = useRef(null)
  const [transform, setTransform] = useState('')
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, visible: false })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rx = ((y - cy) / cy) * -intensity
    const ry = ((x - cx) / cx) * intensity

    setTransform(`perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`)
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      visible: true,
    })
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg)')
    setGlowPos((p) => ({ ...p, visible: false }))
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transform }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glowPos.visible ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(${glowColor}, 0.18), transparent 60%)`,
        }}
      />
      {children}
    </div>
  )
}

export default MagneticCard
