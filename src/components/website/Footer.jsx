import './Footer.css'

export default function Footer() {
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
              <li><a href="/">Home</a></li>
              <li><a href="/values">Our Values</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/visa-services">Visa Services</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/apostille">Apostille & Attestation</a></li>
              <li><a href="/corporate">Corporate & Partners</a></li>
              <li><a href="/trouvaille">Trouvaille</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/visa-services">Visa Facilitation</a></li>
              <li><a href="/visa-services">Visa Documentation</a></li>
              <li><a href="/visa-services">Visa Application Assistance</a></li>
              <li><a href="/apostille">Apostille</a></li>
              <li><a href="/apostille">Attestation</a></li>
              <li><a href="/corporate">Corporate Visa Services</a></li>
              <li><a href="/corporate">Travel Partner Support</a></li>
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
