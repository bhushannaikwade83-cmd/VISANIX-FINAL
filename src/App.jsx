import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import ScrollVideoMain from './components/ScrollVideoMain.jsx'
import Scene8CTA from './scenes/Scene8CTA.jsx'
import Navigation from './components/website/Navigation.jsx'
import Footer from './components/website/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Values from './pages/Values.jsx'
import VisaServices from './pages/VisaServices.jsx'
import Destinations from './pages/Destinations.jsx'
import Apostille from './pages/Apostille.jsx'
import Corporate from './pages/Corporate.jsx'
import Trouvaille from './pages/Trouvaille.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import './story.css'
import './website-pages.css'

gsap.registerPlugin(ScrollTrigger)

function usePreloadAll() {
  const [pct, setPct] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const urls = allFrameUrls()
    let loaded = 0
    let cancelled = false
    urls.forEach((src) => {
      const img = new Image()
      img.onload = img.onerror = () => {
        if (cancelled) return
        loaded++
        setPct(Math.round((loaded / urls.length) * 100))
        if (loaded === urls.length) setReady(true)
      }
      img.src = src
    })
    return () => {
      cancelled = true
    }
  }, [])

  return { pct, ready }
}

function allFrameUrls() {
  const urls = []
  const sequences = { main: 438 }
  for (const [dir, count] of Object.entries(sequences)) {
    for (let i = 1; i <= count; i++) {
      urls.push(`/frames/${dir}/f_${String(i).padStart(3, '0')}.jpg`)
    }
  }
  return urls
}

function LoadingScreen({ pct }) {
  return (
    <div className="app-loading">
      <span className="app-loading-logo">
        Visa<span className="logo-accent">Nex</span>
      </span>
      <div className="app-loading-bar">
        <div className="app-loading-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="app-loading-pct">{pct}%</span>
    </div>
  )
}

function ScrollStory({ onExploreWebsite }) {
  return (
    <div className="scroll-story-container">
      <ScrollVideoMain />
      <Scene8CTA onExploreWebsite={onExploreWebsite} />
    </div>
  )
}

function WebsiteApp({ currentPage, onNavigate }) {
  const pages = {
    'home': Home,
    'about': About,
    'values': Values,
    'visa-services': VisaServices,
    'destinations': Destinations,
    'apostille': Apostille,
    'corporate': Corporate,
    'trouvaille': Trouvaille,
    'faq': FAQ,
    'contact': Contact
  }

  const PageComponent = pages[currentPage] || Home

  return (
    <div className="website-container">
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      <PageComponent />
      <Footer />
    </div>
  )
}

export default function App() {
  const { pct, ready } = usePreloadAll()
  const [showWebsite, setShowWebsite] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    if (!ready) return

    const lenis = new Lenis()

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove()
      lenis.destroy()
    }
  }, [ready])

  useEffect(() => {
    if (showWebsite) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showWebsite])

  if (!ready) {
    return <LoadingScreen pct={pct} />
  }

  return (
    <div className="app">
      {!showWebsite ? (
        <ScrollStory onExploreWebsite={() => setShowWebsite(true)} />
      ) : (
        <WebsiteApp currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </div>
  )
}
