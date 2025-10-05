import { useEffect, useRef, useState } from 'react'
import { createNoise3D } from 'simplex-noise'

type WavyBackgroundProps = {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'fast'
  waveOpacity?: number
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
}: WavyBackgroundProps) {
  const noise = createNoise3D()
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001
      case 'fast':
        return 0.002
      default:
        return 0.001
    }
  }

  const waveColors =
    colors ?? ['#34D399', '#10B981', '#14B8A6', '#10A58A', '#0EA5E9']

  let animationId = 0

  const init = () => {
    canvas = canvasRef.current as HTMLCanvasElement
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    w = (ctx.canvas.width = window.innerWidth)
    h = (ctx.canvas.height = window.innerHeight)
    ctx.filter = `blur(${blur}px)`
    nt = 0
    window.onresize = function () {
      w = (ctx.canvas.width = window.innerWidth)
      h = (ctx.canvas.height = window.innerHeight)
      ctx.filter = `blur(${blur}px)`
    }
    render()
  }

  const drawWave = (n: number) => {
    nt += getSpeed()
    for (i = 0; i < n; i++) {
      ctx.beginPath()
      ctx.lineWidth = waveWidth || 50
      ctx.strokeStyle = waveColors[i % waveColors.length]
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100
        ctx.lineTo(x, y + h * 0.55)
      }
      ctx.stroke()
      ctx.closePath()
    }
  }

  const render = () => {
    ctx.fillStyle = backgroundFill || 'black'
    ctx.globalAlpha = waveOpacity || 0.5
    ctx.fillRect(0, 0, w, h)
    drawWave(5)
    animationId = requestAnimationFrame(render)
  }

  useEffect(() => {
    init()
    return () => cancelAnimationFrame(animationId)
  }, [])

  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome')
    )
  }, [])

  return (
    <div className={[
      'h-screen flex flex-col items-center justify-center relative',
      containerClassName || '',
    ].join(' ')}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={["relative z-10", className || ''].join(' ')}>{children}</div>
    </div>
  )
}
