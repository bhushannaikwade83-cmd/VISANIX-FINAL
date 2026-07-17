import { useScene } from './useScene.js'
import { Traveler } from '../components/People.jsx'

const CONFETTI = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 41) % 100}%`,
  color: ['#2563eb', '#14b8a6', '#fbbf24', '#f472b6'][i % 4],
  delay: (i % 6) * 0.18,
}))

export default function Scene7Abroad() {
  const ref = useScene((tl) => {
    tl.from('.skyline', { y: 180, opacity: 0, duration: 1.2 })
    tl.from('.landmark', { y: 120, stagger: 0.25, duration: 0.8, ease: 'back.out(1.2)' }, 0.4)
    tl.from('.s7-traveler', { y: 140, opacity: 0, duration: 0.8 }, 1.2)
    tl.to('.s7-traveler .arm-r', { rotate: -140, duration: 0.5, ease: 'back.out(2)' }, 1.8)
    CONFETTI.forEach((c) => {
      tl.fromTo(
        `.confetto-${c.id}`,
        { y: -80, opacity: 0, rotate: 0 },
        { y: '82vh', opacity: 1, rotate: 340 + c.id * 20, duration: 2.2, ease: 'none' },
        1.6 + c.delay,
      )
    })
    tl.from('.s7-copy', { y: 40, opacity: 0, duration: 0.8 }, 2.2)
    tl.to({}, { duration: 0.6 })
  })

  return (
    <section ref={ref} className="scene" aria-label="Welcome abroad">
      <div className="s7-sky" />

      {CONFETTI.map((c) => (
        <span
          key={c.id}
          className={`confetto confetto-${c.id}`}
          style={{ left: c.left, top: 0, background: c.color, opacity: 0 }}
        />
      ))}

      <div className="skyline">
        <svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {/* back row */}
          <g fill="#c7dbf9">
            <rect x="60" y="120" width="90" height="240" rx="8" />
            <rect x="330" y="90" width="110" height="270" rx="8" />
            <rect x="640" y="130" width="80" height="230" rx="8" />
            <rect x="1000" y="100" width="100" height="260" rx="8" />
          </g>
          {/* landmarks */}
          <g className="landmark">
            {/* Eiffel-style tower */}
            <path d="M200 360 L232 150 L240 150 L272 360 L248 360 Q236 300 224 360 Z" fill="#8fb4ee" />
            <path d="M212 268 h48 M220 216 h32" stroke="#8fb4ee" strokeWidth="10" strokeLinecap="round" />
            <path d="M232 150 L236 118 L240 150" fill="#8fb4ee" />
          </g>
          <g className="landmark">
            {/* Big-Ben-style clock tower */}
            <rect x="480" y="140" width="64" height="220" rx="6" fill="#a5c4f3" />
            <path d="M478 140 L512 96 L546 140 Z" fill="#7fa8e8" />
            <circle cx="512" cy="190" r="22" fill="#fff" />
            <path d="M512 190 v-13 M512 190 h9" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          <g className="landmark">
            {/* CN-style tower */}
            <rect x="806" y="120" width="16" height="240" rx="8" fill="#a5c4f3" />
            <ellipse cx="814" cy="150" rx="38" ry="16" fill="#7fa8e8" />
            <rect x="810" y="60" width="8" height="60" rx="4" fill="#a5c4f3" />
          </g>
          {/* front row */}
          <g fill="#dde9fc">
            <rect x="0" y="220" width="140" height="140" rx="10" />
            <rect x="380" y="240" width="120" height="120" rx="10" />
            <rect x="700" y="230" width="90" height="130" rx="10" />
            <rect x="900" y="250" width="130" height="110" rx="10" />
            <rect x="1100" y="230" width="100" height="130" rx="10" />
          </g>
        </svg>
      </div>

      <div className="s7-traveler">
        <Traveler mood="happy" />
      </div>

      <div className="scene-copy s7-copy" style={{ top: '10%' }}>
        <span className="scene-tag">Chapter 07 — Arrival</span>
        <h2>Welcome Abroad.</h2>
        <p>A new city, a new chapter — and VisaNex got you here.</p>
      </div>
    </section>
  )
}
