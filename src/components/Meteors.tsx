import { memo, useMemo } from 'react'

type MeteorsProps = {
  count?: number
  className?: string
}

const random = (min: number, max: number) => Math.random() * (max - min) + min

function MeteorsBase({ count = 12, className }: MeteorsProps) {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => i), [count])
  return (
    <div className={className} aria-hidden style={{ position: 'fixed' as const }}>
      {items.map((i) => {
        const top = random(-10, 110)
        const right = random(-10, 110)
        const delay = random(0, 3)
        const duration = random(2.1, 3.3)
        const scale = random(0.8, 1.2)
        const angle = 45  // arah kanan-bawah atau kiri-atas
        const travel = 1000
        return (
          <span
            key={i}
            className="meteor"
            style={{
              top: `${top}%`,
              right: `${right}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${angle}deg) scale(${scale})`,
              // CSS variables to control keyframe direction and distance
              // @ts-ignore - CSS custom properties
              ['--angle' as any]: `${angle}deg`,
              ['--travel' as any]: `${travel}px`,
            }}
          />
        )
      })}
    </div>
  )
}

export const Meteors = memo(MeteorsBase)


