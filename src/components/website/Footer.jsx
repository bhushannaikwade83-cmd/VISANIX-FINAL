import './Footer.css'

export default function Footer({ onNavigate }) {
  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <footer className="website-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VisaNix</h3>
            <p>Visa made effortless.</p>
            <p className="footer-tagline">Professional visa facilitation and travel documentation support.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => handleNavClick('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => handleNavClick('values')} className="footer-link">Our Values</button></li>
              <li><button onClick={() => handleNavClick('about')} className="footer-link">About Us</button></li>
              <li><button onClick={() => handleNavClick('visa-services')} className="footer-link">Visa Services</button></li>
              <li><button onClick={() => handleNavClick('destinations')} className="footer-link">Destinations</button></li>
              <li><button onClick={() => handleNavClick('apostille')} className="footer-link">Apostille & Attestation</button></li>
              <li><button onClick={() => handleNavClick('corporate')} className="footer-link">Corporate & Partners</button></li>
              <li><button onClick={() => handleNavClick('trouvaille')} className="footer-link">Trouvaille</button></li>
              <li><button onClick={() => handleNavClick('faq')} className="footer-link">FAQ</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="footer-link">Contact Us</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><button onClick={() => handleNavClick('visa-services')} className="footer-link">Visa Facilitation</button></li>
              <li><button onClick={() => handleNavClick('visa-services')} className="footer-link">Visa Documentation</button></li>
              <li><button onClick={() => handleNavClick('visa-services')} className="footer-link">Visa Application Assistance</button></li>
              <li><button onClick={() => handleNavClick('apostille')} className="footer-link">Apostille</button></li>
              <li><button onClick={() => handleNavClick('apostille')} className="footer-link">Attestation</button></li>
              <li><button onClick={() => handleNavClick('corporate')} className="footer-link">Corporate Visa Services</button></li>
              <li><button onClick={() => handleNavClick('corporate')} className="footer-link">Travel Partner Support</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Travel Partner</h4>
            <p><strong>Trouvaille — Your Complete Travel Partner</strong></p>
            <p>Holidays | Tickets | Hotels | Insurance | Passport Services | MICE</p>
          </div>
        </div>

        <div className="footer-disclaimer">
          <h4>Website Disclaimer</h4>
          <p>VisaNix provides visa facilitation, documentation support and application guidance services.</p>
          <p>VisaNix is not an Embassy, consulate, immigration authority or government agency.</p>
          <p>Visa decisions are made solely by the relevant embassy, consulate or immigration authority.</p>
          <p>Visa requirements, processing times, fees, appointment availability and procedures may change without prior notice.</p>
          <p>Applicants are responsible for providing complete, accurate and truthful information and documentation.</p>
          <p>VisaNix does not guarantee visa approval, visa issuance, appointment availability or processing timelines.</p>
          <p>Any guidance provided by VisaNix is based on the information and documentation available at the time of service and does not guarantee a particular visa outcome.</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 VisaNix. All rights reserved. | Visa made effortless.</p>
        </div>
      </div>
    </footer>
  )
}
