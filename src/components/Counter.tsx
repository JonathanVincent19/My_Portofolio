import { useEffect, useRef, useState } from 'react'

type CounterProps = {
  from?: number
  to: number
  duration?: number // ms
  easing?: (t: number) => number
  className?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function Counter({ from = 0, to, duration = 5500, easing = easeOutCubic, className }: CounterProps) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLSpanElement | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const current = Math.round(from + (to - from) * easing(t))
              setValue(current)
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [from, to, duration, easing])

  return (
    <span ref={ref} className={className}>{value}</span>
  )
}


