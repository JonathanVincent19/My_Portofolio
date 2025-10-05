import { useEffect, useRef } from 'react'

type WaveHeroProps = {
  height?: number
}

// Simple canvas waves with blur and gradient glow
export function WaveHero({ height = 420 }: WaveHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    let w = (canvas.width = Math.floor(window.innerWidth * dpr))
    let h = (canvas.height = Math.floor(height * dpr))
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    const colors = [
      'rgba(34,211,163,0.45)', // mint
      'rgba(99,102,241,0.35)', // indigo
      'rgba(56,189,248,0.35)', // sky
      'rgba(236,72,153,0.25)', // pink
    ]

    const waves = colors.map((c, i) => ({
      amp: 40 + i * 10,
      len: 0.008 + i * 0.002,
      speed: 0.004 + i * 0.0015,
      phase: i * 1.2,
      color: c,
    }))

    const draw = (t: number) => {
      // clear with slight fade for glow trail
      ctx.clearRect(0, 0, window.innerWidth, height)
      ctx.save()
      ctx.filter = 'blur(12px)'

      for (const wv of waves) {
        ctx.beginPath()
        for (let x = 0; x <= window.innerWidth; x += 2) {
          const y =
            height * 0.55 +
            Math.sin(x * wv.len + t * wv.speed + wv.phase) * wv.amp +
            Math.cos((x * wv.len) / 2 + t * (wv.speed * 0.8) + wv.phase) * (wv.amp * 0.4)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = wv.color
        ctx.lineWidth = 28
        ctx.stroke()
      }
      ctx.restore()
    }

    const tick = (ts: number) => {
      draw(ts)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const onResize = () => {
      const dpr2 = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      canvas.width = Math.floor(window.innerWidth * dpr2)
      canvas.height = Math.floor(height * dpr2)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr2, dpr2)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [height])

  return (
    <section className="relative w-full overflow-hidden" style={{ height }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="container h-full relative z-10 flex flex-col items-start justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Hero waves are cool</h1>
        <p className="mt-3 text-[--color-muted] text-lg">Leverage the power of canvas to create a beautiful hero section</p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[--color-bg]" />
      </div>
    </section>
  )
}


