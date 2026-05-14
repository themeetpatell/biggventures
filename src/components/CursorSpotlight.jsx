import { useEffect, useRef, useState } from 'react'

const CursorSpotlight = () => {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    const onChange = (e) => setEnabled(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    let rafId = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      if (ref.current) {
        ref.current.style.transform = `translate3d(${currentX - 320}px, ${currentY - 320}px, 0)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[640px] w-[640px] will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(155, 139, 255, 0.20) 0%, rgba(155, 139, 255, 0.07) 30%, rgba(0,0,0,0) 65%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}

export default CursorSpotlight
