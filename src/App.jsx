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
  const [showWebsite, setShowWebsite] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const lenis = new Lenis()

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove()
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (showWebsite) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showWebsite])

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
