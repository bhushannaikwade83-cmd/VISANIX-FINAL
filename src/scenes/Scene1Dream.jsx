import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useScene } from './useScene.js'
import { Traveler } from '../components/People.jsx'

gsap.registerPlugin(MotionPathPlugin)

const DESTINATIONS = [
  { label: 'Canada', top: '18%', left: '16%' },
  { label: 'UK', top: '12%', left: '46%' },
  { label: 'Germany', top: '22%', left: '64%' },
  { label: 'USA', top: '38%', left: '8%' },
  { label: 'Europe', top: '34%', left: '78%' },
  { label: 'Australia', top: '58%', left: '70%' },
]

export default function Scene1Dream() {
  const ref = useScene((tl, gsap) => {
    // hero entrance plays on load (not scroll-scrubbed)
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .from('.s1-map', { scale: 0.85, opacity: 0, duration: 1.1 })
      .from('.s1-traveler', { x: -120, opacity: 0, duration: 0.9 }, '-=0.7')
      .to('.route', { strokeDashoffset: 0, duration: 1.3, stagger: 0.25, ease: 'power2.inOut' }, '-=0.6')
      .from(
        '.dest-chip',
        { y: 40, opacity: 0, scale: 0.6, stagger: 0.12, duration: 0.7, ease: 'back.out(1.7)' },
        '-=1.1',
      )
      .from('.s1-copy', { y: 60, opacity: 0, duration: 0.9 }, '-=0.5')

    // scroll: plane flies along the route while everything parallaxes
    tl.to(
      '.s1-plane',
      {
        motionPath: {
          path: '.route-1',
          align: '.route-1',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        duration: 1,
        ease: 'none',
      },
      0,
    )
      .to('.s1-map', { scale: 1.06, y: -30, duration: 1, ease: 'none' }, 0)
      .to('.dest-chip', { y: -60, stagger: 0.05, duration: 1, ease: 'none' }, 0)
      .to('.s1-traveler .head', { rotate: -6, duration: 0.4 }, 0)
      .to('.s1-copy', { opacity: 0, y: -40, duration: 0.6 }, 0.5)
  }, { end: '+=100%' })

  return (
    <section ref={ref} className="scene" aria-label="Dream to travel">
      <div className="scene-inner">
        {/* simplified world map */}
        <svg className="s1-map" viewBox="0 0 700 380" aria-hidden="true">
          <ellipse cx="350" cy="190" rx="330" ry="170" fill="#e8f1ff" />
          <g fill="#c3d9fb">
            <path d="M120 120 q40 -30 90 -18 q30 8 24 40 q-8 34 -50 38 q-50 6 -70 -20 q-12 -22 6 -40z" />
            <path d="M300 90 q60 -24 120 -6 q40 14 30 48 q-12 36 -60 34 q-66 0 -96 -30 q-16 -24 6 -46z" />
            <path d="M480 160 q46 -10 70 16 q18 24 -4 46 q-28 24 -66 12 q-34 -12 -28 -42 q4 -22 28 -32z" />
            <path d="M180 220 q36 -8 54 14 q14 20 -2 40 q-22 24 -54 12 q-28 -12 -22 -38 q4 -18 24 -28z" />
            <path d="M380 250 q30 -8 48 10 q16 18 0 36 q-20 20 -48 10 q-24 -10 -20 -32 q4 -16 20 -24z" />
          </g>
          <g stroke="#5b8def" strokeWidth="2.5" fill="none" opacity="0.9" strokeLinecap="round">
            <path className="route route-1" pathLength="1" d="M160 140 Q350 40 540 180" />
            <path className="route route-2" pathLength="1" d="M200 240 Q360 160 520 250" />
          </g>
          {/* little plane that rides route-1 on scroll */}
          <g className="s1-plane">
            <circle r="11" fill="rgba(37, 99, 235, 0.15)" />
            <path d="M-7 -5 L9 0 L-7 5 L-3 0 Z" fill="#2563eb" />
          </g>
        </svg>

        {DESTINATIONS.map((d) => (
          <span
            key={d.label}
            className="dest-chip floaty-slow"
            style={{ top: d.top, left: d.left, animationDelay: `${Math.random() * 2}s` }}
          >
            <span className="dot" /> {d.label}
          </span>
        ))}

        <div className="s1-traveler" style={{ position: 'absolute', bottom: '30%', left: '6%', width: 'clamp(100px, 14vw, 150px)' }}>
          <Traveler mood="neutral" />
        </div>

        <div className="scene-copy s1-copy" style={{ bottom: '10%' }}>
          <span className="scene-tag">Chapter 01 — The Dream</span>
          <h2>Your Journey Starts Here.</h2>
          <p>Study, work, or travel abroad — the world is closer than you think.</p>
        </div>
      </div>
    </section>
  )
}
