'use client'

type GoldenSmokeProps = {
  height?: number
}

export default function GoldenSmoke({ height = 160 }: GoldenSmokeProps) {
  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height }}
    >
      <svg
        viewBox="0 0 1200 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldSmoke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a6a1f" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#8a6a1f" />
          </linearGradient>

          <filter id="smokeBlur">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        {/* Smoke Layer 1 */}
        <path
          d="M0 150 
             C200 60 400 240 600 150
             S1000 60 1200 150"
          fill="none"
          stroke="url(#goldSmoke)"
          strokeWidth="18"
          opacity="0.35"
          filter="url(#smokeBlur)"
          className="animate-smoke-slow"
        />

        {/* Smoke Layer 2 */}
        <path
          d="M0 170 
             C250 90 450 260 650 170
             S950 90 1200 170"
          fill="none"
          stroke="url(#goldSmoke)"
          strokeWidth="26"
          opacity="0.25"
          filter="url(#smokeBlur)"
          className="animate-smoke-medium"
        />

        {/* Smoke Layer 3 */}
        <path
          d="M0 140 
             C300 40 500 220 700 140
             S900 40 1200 140"
          fill="none"
          stroke="url(#goldSmoke)"
          strokeWidth="34"
          opacity="0.18"
          filter="url(#smokeBlur)"
          className="animate-smoke-fast"
        />
      </svg>
    </div>
  )
}