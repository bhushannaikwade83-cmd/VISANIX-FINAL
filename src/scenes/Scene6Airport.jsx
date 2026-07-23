import { useScene } from './useScene.js'
import { Traveler, Consultant } from '../components/People.jsx'
import WalkingCharacter from '../components/WalkingCharacter.jsx'

export default function Scene6Airport() {
  const ref = useScene((tl) => {
    // parallax: three cloud layers drift at different speeds
    tl.to('.cloud-far', { x: -60, duration: 4, ease: 'none' }, 0)
    tl.to('.cloud-mid', { x: -140, duration: 4, ease: 'none' }, 0)
    tl.to('.cloud-near', { x: -260, duration: 4, ease: 'none' }, 0)

    // traveler rolls luggage across the floor, walk cycle synced
    tl.to('.s6-walker', { left: '68%', duration: 3, ease: 'none' }, 0)
    for (const [sel, rot] of [
      ['.s6-traveler .leg-l', 16],
      ['.s6-traveler .leg-r', -16],
      ['.s6-traveler .arm-l', -12],
    ]) {
      tl.to(sel, { rotate: rot, duration: 0.33, yoyo: true, repeat: 7, ease: 'sine.inOut' }, 0)
    }

    // plane takes off diagonally
    tl.fromTo(
      '.plane',
      { left: '-12%', bottom: '18%', rotate: 0 },
      { left: '78%', bottom: '72%', rotate: -14, duration: 2.6, ease: 'power1.in' },
      0.4,
    )

    // departure rows flip in
    tl.from('.dep-row', { y: 18, opacity: 0, stagger: 0.25, duration: 0.5 }, 0.6)
    tl.from('.s6-copy', { y: 40, opacity: 0, duration: 0.8 }, 2.6)
    tl.to({}, { duration: 0.5 })
  })

  return (
    <section ref={ref} className="scene" aria-label="Airport journey">
      <div className="s6-sky" />

      <div className="cloud cloud-far" style={{ top: '10%', left: '65%', transform: 'scale(0.6)', opacity: 0.7 }} />
      <div className="cloud cloud-mid" style={{ top: '24%', left: '30%', transform: 'scale(0.85)', opacity: 0.85 }} />
      <div className="cloud cloud-near" style={{ top: '6%', left: '12%' }} />

      <svg className="plane" viewBox="0 0 140 60" aria-hidden="true">
        <path d="M6 34 Q60 22 108 26 L128 30 Q134 32 128 36 L108 38 Q60 44 6 38 Q0 36 6 34z" fill="#2563eb" />
        <path d="M60 26 L46 8 L58 8 L76 25z" fill="#93c5fd" />
        <path d="M62 40 L52 54 L62 54 L74 41z" fill="#93c5fd" />
        <path d="M108 26 L120 14 L126 14 L118 28z" fill="#1d4ed8" />
        <g fill="#fff">
          <circle cx="34" cy="32" r="2.6" />
          <circle cx="46" cy="31" r="2.6" />
          <circle cx="58" cy="30.5" r="2.6" />
          <circle cx="70" cy="30.5" r="2.6" />
        </g>
      </svg>

      <div className="departure-board">
        <h4>DEPARTURES</h4>
        <div className="dep-row"><span>YYZ Toronto</span><span className="ok">On&nbsp;Time</span></div>
        <div className="dep-row"><span>LHR London</span><span className="ok">Boarding</span></div>
        <div className="dep-row"><span>SYD Sydney</span><span>18:40</span></div>
        <div className="dep-row"><span>FRA Frankfurt</span><span className="ok">On&nbsp;Time</span></div>
      </div>

      <div className="s6-floor" />

      <div style={{ position: 'absolute', left: '-8%', bottom: '10%', width: '80px' }}>
        <Consultant />
      </div>

      <div style={{ position: 'absolute', right: '8%', bottom: '8%', width: '400px', height: '400px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <WalkingCharacter scale={0.8} speed={0.02} />
      </div>

      <div className="s6-walker s6-traveler" style={{ position: 'absolute', bottom: '6%', left: '6%' }}>
        <Traveler mood="happy" />
        <div className="s6-luggage" style={{ position: 'absolute', left: '-44px', bottom: '0' }} />
      </div>

      <div className="scene-copy s6-copy" style={{ bottom: '42%' }}>
        <span className="scene-tag">Chapter 06 — Departure</span>
        <h2>Wheels Up.</h2>
      </div>
    </section>
  )
}
