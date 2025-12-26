'use client'

export default function SectionDividerDots() {
  return (
    <div className="relative w-full py-4 overflow-hidden">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-10"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="rgba(212,175,55,0.4)" />
          </pattern>
        </defs>

        <path
          d="M0,20 C150,10 300,30 450,25 600,20 750,30 900,25 1050,20 1150,25 1200,20 L1200,0 L0,0 Z"
          fill="url(#dotPattern)"
        />
      </svg>
    </div>
  )
}