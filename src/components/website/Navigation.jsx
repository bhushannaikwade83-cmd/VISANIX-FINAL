import { useState } from 'react'
import './Navigation.css'

export default function Navigation({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Our Values', page: 'values' },
    { label: 'Visa Services', page: 'visa-services' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Apostille', page: 'apostille' },
    { label: 'Corporate', page: 'corporate' },
    { label: 'Trouvaille', page: 'trouvaille' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' }
  ]

  const handleNavClick = (page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="website-navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Visa<span className="logo-accent">Nix</span></h2>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.page}
              className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => handleNavClick(item.page)}
            >
              {item.label}
            </button>
          ))}
          <a href="/contact" className="nav-cta btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>
  )
}
