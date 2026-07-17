import { useScene } from './useScene.js'
import { Traveler, Consultant } from '../components/People.jsx'

export default function Scene2Meet() {
  const ref = useScene((tl) => {
    // walk in: body slides while legs/arms swing in counter-phase
    tl.to('.s2-traveler', { left: '24%', duration: 2.4, ease: 'none' })
    tl.to(
      '.s2-traveler .leg-l',
      { rotate: 24, duration: 0.3, yoyo: true, repeat: 7, ease: 'sine.inOut' },
      0,
    )
    tl.to(
      '.s2-traveler .leg-r',
      { rotate: -24, duration: 0.3, yoyo: true, repeat: 7, ease: 'sine.inOut' },
      0,
    )
    tl.to(
      '.s2-traveler .arm-l',
      { rotate: -20, duration: 0.3, yoyo: true, repeat: 7, ease: 'sine.inOut' },
      0,
    )
    tl.to(
      '.s2-traveler .arm-r',
      { rotate: 20, duration: 0.3, yoyo: true, repeat: 7, ease: 'sine.inOut' },
      0,
    )
    // consultant waves
    tl.to('.s2-consultant .arm-r', { rotate: -130, duration: 0.5, ease: 'back.out(2)' }, 1.6)
    tl.to('.s2-consultant .arm-r', { rotate: -110, duration: 0.25, yoyo: true, repeat: 3 }, 2.1)
    // bubbles pop in sequence
    tl.to('.bubble-1', { opacity: 1, y: -10, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 2.6)
    tl.to('.bubble-2', { opacity: 1, y: -10, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 3.2)
    tl.from('.s2-copy', { y: 50, opacity: 0, duration: 0.8 }, 3.5)
    tl.to({}, { duration: 0.5 })
  })

  return (
    <section ref={ref} className="scene" aria-label="Meet VisaNex">
      <div className="scene-inner">
        <div className="s2-office">
          <div className="s2-window floaty-slow" style={{ left: '10%' }} />
          <div className="s2-window floaty-slow" style={{ right: '10%', animationDelay: '1.5s' }} />
          <div className="s2-desk" />
          <div className="s2-consultant">
            <Consultant />
          </div>
          <div className="s2-traveler">
            <Traveler />
          </div>
          <div className="bubble bubble-1" style={{ top: '18%', right: '14%', transform: 'scale(0.7)' }}>
            Welcome to VisaNex! 👋
          </div>
          <div className="bubble teal bubble-2" style={{ top: '34%', left: '20%', transform: 'scale(0.7)' }}>
            I want to study in Canada…
          </div>
        </div>

        <div className="scene-copy s2-copy" style={{ bottom: '4%' }}>
          <span className="scene-tag">Chapter 02 — Meet VisaNex</span>
          <h2>Expert Guidance, From Hello.</h2>
        </div>
      </div>
    </section>
  )
}
