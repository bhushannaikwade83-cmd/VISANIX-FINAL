import { useScene } from './useScene.js'
import { Traveler } from '../components/People.jsx'

const COLORS = ['#2563eb', '#14b8a6', '#fbbf24', '#f472b6', '#4ade80']
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  color: COLORS[i % COLORS.length],
  angle: (i / 18) * Math.PI * 2,
}))

export default function Scene5Approved() {
  const ref = useScene((tl) => {
    // stamp slams in
    tl.from('.stamp', { scale: 3.2, opacity: 0, duration: 0.7, ease: 'power4.in' })
    // camera flash + shake on impact
    tl.fromTo('.flash', { opacity: 0 }, { opacity: 0.85, duration: 0.05 }, 0.68)
    tl.to('.flash', { opacity: 0, duration: 0.3 }, 0.74)
    tl.fromTo('.s5-stage', { x: 0 }, { x: 9, duration: 0.045, repeat: 5, yoyo: true }, 0.7)
    tl.set('.s5-stage', { x: 0 }, 0.98)
    // particle burst radiating out
    PARTICLES.forEach((p) => {
      const dist = 150 + (p.id % 5) * 45
      tl.fromTo(
        `.particle-${p.id}`,
        { x: 0, y: 0, opacity: 1, scale: 1 },
        {
          x: Math.cos(p.angle) * dist,
          y: Math.sin(p.angle) * dist - 40,
          rotate: 220 + p.id * 25,
          opacity: 0,
          scale: 0.4,
          duration: 1.4,
          ease: 'power2.out',
        },
        0.7,
      )
    })
    // traveler celebrates
    tl.from('.s5-traveler', { y: 80, opacity: 0, duration: 0.6 }, 0.9)
    // arms up in celebration
    tl.to('.s5-traveler .arm-l', { rotate: 120, duration: 0.5, ease: 'back.out(2)' }, 1.2)
    tl.to('.s5-traveler .arm-r', { rotate: -120, duration: 0.5, ease: 'back.out(2)' }, 1.2)
    tl.fromTo(
      '.s5-passport',
      { y: -140, opacity: 0, rotate: -20 },
      { y: -60, opacity: 1, rotate: 6, duration: 0.7, ease: 'bounce.out' },
      1.5,
    )
    tl.from('.s5-copy', { y: 40, opacity: 0, duration: 0.7 }, 2.0)
    tl.to({}, { duration: 0.5 })
  })

  return (
    <section ref={ref} className="scene" aria-label="Visa approved">
      <div className="flash" />
      <div className="scene-inner" style={{ flexDirection: 'column' }}>
        <div className="s5-stage">
          <div className="stamp">
            VISA APPROVED
            {PARTICLES.map((p) => (
              <span
                key={p.id}
                className={`particle particle-${p.id}`}
                style={{ background: p.color, top: '50%', left: '50%' }}
              />
            ))}
          </div>
          <div className="s5-traveler" style={{ position: 'relative', marginTop: '2rem', width: '120px', height: '220px' }}>
            <Traveler mood="happy" />
            <div className="s5-passport" style={{ position: 'absolute', left: '88%', top: '50%', transform: 'translateY(-50%)' }}>
              PASSPORT
            </div>
          </div>
        </div>

        <div className="scene-copy s5-copy" style={{ bottom: '7%' }}>
          <span className="scene-tag">Chapter 05 — Approved</span>
          <h2>The Moment Everything Changes.</h2>
        </div>
      </div>
    </section>
  )
}
