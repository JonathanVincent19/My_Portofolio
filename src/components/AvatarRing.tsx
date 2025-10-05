import { CSSProperties, memo, useMemo } from 'react'

type AvatarRingProps = {
  src: string
  size?: number // total size in px
  ringWidth?: number // stroke width
  segments?: number // number of dashes
  visibleRatio?: number // 0..1 portion of each segment that is visible
  className?: string
}

export const AvatarRing = memo(function AvatarRing({
  src,
  size = 320,
  ringWidth = 8,
  segments = 18,
  visibleRatio = 0.5,
  className,
}: AvatarRingProps) {
  const { radius, circumference, dashArray } = useMemo(() => {
    const r = size / 2 - ringWidth / 2
    const c = 2 * Math.PI * r
    const seg = c / segments
    const visible = seg * Math.min(Math.max(visibleRatio, 0.05), 0.9)
    const gap = Math.max(seg - visible, 1)
    return {
      radius: r,
      circumference: c,
      dashArray: `${visible} ${gap}`,
    }
  }, [size, ringWidth, segments, visibleRatio])

  const svgStyle = useMemo<CSSProperties>(() => ({
    filter: 'drop-shadow(0 0 10px var(--color-accent))',
  }), [])

  return (
    <div className={className} style={{ width: size, height: size }}>
      <div className="relative w-full h-full grid place-items-center">
        {/* Photo */}
        <div
          className="rounded-full overflow-hidden border border-white/5"
          style={{ width: size - ringWidth * 4, height: size - ringWidth * 4 }}
        >
          <img
            src={src}
            alt="Profile"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Segmented ring */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 animate-[spin_20s_linear_infinite]"
          style={svgStyle}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={ringWidth}
            strokeDasharray={dashArray}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
})


