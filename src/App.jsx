import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Scene0Video from './scenes/Scene0Video.jsx'
import Scene1Dream from './scenes/Scene1Dream.jsx'
import Scene2Meet from './scenes/Scene2Meet.jsx'
import Scene3Documents from './scenes/Scene3Documents.jsx'
import Scene4Processing from './scenes/Scene4Processing.jsx'
import Scene5Approved from './scenes/Scene5Approved.jsx'
import Scene6Airport from './scenes/Scene6Airport.jsx'
import Scene7Abroad from './scenes/Scene7Abroad.jsx'
import Scene8CTA from './scenes/Scene8CTA.jsx'
import './story.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // top scroll-progress bar
    const progress = gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    })

    return () => {
      progress.scrollTrigger?.kill()
      progress.kill()
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" />
      <header className="site-header">
        <span className="site-logo">
          Visa<span className="logo-accent">Nex</span>
        </span>
        <nav>
          <a href="#story">Story</a>
          <a href="#cta">Apply</a>
        </nav>
      </header>
      <main id="story">
        <Scene0Video />
        <Scene1Dream />
        <Scene2Meet />
        <Scene3Documents />
        <Scene4Processing />
        <Scene5Approved />
        <Scene6Airport />
        <Scene7Abroad />
        <Scene8CTA />
      </main>
    </>
  )
}
