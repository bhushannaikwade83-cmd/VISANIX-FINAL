import { useScene } from './useScene.js'
import { Consultant } from '../components/People.jsx'

const CHECKS = ['Passport verified', 'Academic certificates', 'Financial statements', 'Application form']

export default function Scene3Documents() {
  const ref = useScene((tl) => {
    tl.from('.s3-copy', { y: 40, opacity: 0, duration: 0.6 })
    tl.from(
      '.doc',
      {
        y: -260,
        rotate: () => gsapRandom(),
        opacity: 0,
        stagger: 0.35,
        duration: 0.8,
        ease: 'bounce.out',
      },
      0.3,
    )
    tl.from('.checklist', { x: 90, opacity: 0, duration: 0.7 }, 1.2)
    CHECKS.forEach((_, i) => {
      tl.to(`.check-item:nth-child(${i + 2}) .box`, { background: '#dcfce7', duration: 0.2 }, 2 + i * 0.5)
      tl.to(
        `.check-item:nth-child(${i + 2}) .tick`,
        { strokeDashoffset: 0, duration: 0.35, ease: 'power2.out' },
        '<',
      )
      tl.to(`.check-item:nth-child(${i + 2})`, { color: '#16305e', duration: 0.2 }, '<')
    })
    tl.to({}, { duration: 0.5 })
  })

  return (
    <section ref={ref} className="scene" aria-label="Document verification">
      <div className="scene-inner" style={{ flexDirection: 'column', gap: '2.5rem' }}>
        <div className="scene-copy s3-copy" style={{ top: '9%' }}>
          <span className="scene-tag">Chapter 03 — Documents</span>
          <h2>Every Paper, Perfectly in Place.</h2>
        </div>

        <div className="s3-board" style={{ marginTop: '14vh' }}>
          <div style={{ position: 'absolute', left: '-12%', bottom: '10%', width: '100px' }}>
            <Consultant />
          </div>
          <div className="s3-desk">
            <div className="doc passport" style={{ left: '4%', top: '18%', zIndex: 2 }}>
              <span style={{ marginTop: 70 }}>PASSPORT</span>
            </div>
            <div className="doc" style={{ left: '36%', top: '6%', rotate: '4deg' }}>
              <div className="line" /><div className="line" /><div className="line short" />
              <div className="line" /><div className="line short" />
            </div>
            <div className="doc cert" style={{ left: '66%', top: '24%', rotate: '-5deg' }}>
              <div className="line short" style={{ margin: '0 auto 8px' }} />
              <div className="line" />
              <div className="seal" />
            </div>
          </div>

          <div className="checklist">
            <h3>Verification Checklist</h3>
            {CHECKS.map((label) => (
              <div className="check-item" key={label}>
                <span className="box">
                  <svg viewBox="0 0 20 20">
                    <path
                      className="tick"
                      d="M4 10.5 L8.5 15 L16 5.5"
                      strokeDasharray="22"
                      strokeDashoffset="22"
                    />
                  </svg>
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function gsapRandom() {
  return Math.random() * 30 - 15
}
