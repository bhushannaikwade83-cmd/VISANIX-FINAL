import { useScene } from './useScene.js'
import { Traveler, Consultant } from '../components/People.jsx'

export default function Scene4Processing() {
  const ref = useScene((tl) => {
    tl.from('.s4-copy', { y: 40, opacity: 0, duration: 0.6 })
    tl.from('.node', { scale: 0, stagger: 0.3, duration: 0.6, ease: 'back.out(1.6)' }, 0.2)
    tl.to('.pipe-1 .flow', { scaleX: 1, duration: 0.8, ease: 'none' }, 1.2)
    tl.to('.status-1', { opacity: 1, y: -6, duration: 0.4 }, '<0.3')
    tl.to('.pipe-2 .flow', { scaleX: 1, duration: 0.8, ease: 'none' }, 2.0)
    tl.to('.status-2', { opacity: 1, y: -6, duration: 0.4 }, '<0.3')
    // camera zoom into the embassy node
    tl.to('.s4-stage', { scale: 1.35, y: -20, duration: 1.2, ease: 'power2.in' }, 2.9)
    tl.to('.s4-copy', { opacity: 0, y: -30, duration: 0.6 }, '<')
    tl.to({}, { duration: 0.4 })
  })

  return (
    <section ref={ref} className="scene" aria-label="Visa processing">
      <div className="scene-inner" style={{ flexDirection: 'column' }}>
        <div className="scene-copy s4-copy" style={{ top: '12%' }}>
          <span className="scene-tag">Chapter 04 — Processing</span>
          <h2>Submitted. Secured. Tracked.</h2>
        </div>

        <div style={{ position: 'absolute', left: '8%', bottom: '12%', width: '90px', zIndex: 1 }}>
          <Consultant />
        </div>
        <div className="s4-stage" style={{ marginTop: '10vh' }}>
          {/* application */}
          <div className="node floaty" style={{ position: 'relative' }}>
            <span className="status-pill status-1" style={{ opacity: 0 }}>Application sent</span>
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <rect x="10" y="6" width="28" height="36" rx="5" fill="#dbeafe" />
              <rect x="15" y="14" width="18" height="3.5" rx="1.75" fill="#2563eb" />
              <rect x="15" y="21" width="18" height="3.5" rx="1.75" fill="#93c5fd" />
              <rect x="15" y="28" width="12" height="3.5" rx="1.75" fill="#93c5fd" />
            </svg>
          </div>

          <div className="pipe pipe-1"><div className="flow" /></div>

          {/* secure cloud */}
          <div className="node floaty" style={{ position: 'relative', animationDelay: '1s' }}>
            <span className="status-pill status-2" style={{ opacity: 0 }}>Securely processing</span>
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M14 34 a9 9 0 1 1 2-17.8 A11 11 0 0 1 37 20 a8 8 0 0 1-1 15.9z"
                fill="#ccfbf1"
                stroke="#14b8a6"
                strokeWidth="2.5"
              />
              <rect x="20" y="22" width="8" height="8" rx="2" fill="#0f766e" />
              <path d="M21.5 22 v-2.5 a2.5 2.5 0 0 1 5 0 V22" stroke="#0f766e" strokeWidth="2.2" fill="none" />
            </svg>
          </div>

          <div className="pipe pipe-2"><div className="flow" /></div>

          {/* embassy */}
          <div className="node floaty" style={{ animationDelay: '2s' }}>
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <rect x="8" y="20" width="32" height="20" rx="2" fill="#dbeafe" />
              <path d="M6 20 L24 8 L42 20 Z" fill="#2563eb" />
              <rect x="13" y="25" width="4.5" height="15" rx="1.5" fill="#2563eb" />
              <rect x="21.75" y="25" width="4.5" height="15" rx="1.5" fill="#2563eb" />
              <rect x="30.5" y="25" width="4.5" height="15" rx="1.5" fill="#2563eb" />
              <rect x="22" y="2" width="2.5" height="8" fill="#14b8a6" />
              <path d="M24.5 2.5 h7 l-2 2.5 2 2.5 h-7z" fill="#14b8a6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
