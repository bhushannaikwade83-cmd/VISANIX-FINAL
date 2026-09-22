import { NavLink } from '../utils/navLink'

export default function Corporate({ onNavigate }) {
  return (
    <main id="corporate" className="page corporate-page">
      <section className="page-header">
        <div className="container">
          <h1>Corporate & Travel Partners</h1>
        </div>
      </section>

      <section className="corporate-support">
        <div className="container">
          <h2>Corporate Visa Support</h2>
          <p>International business travel often requires careful planning and timely documentation. VisaNix provides structured visa facilitation support for companies and their employees travelling internationally.</p>
          
          <h3>Corporate Support Includes</h3>
          <ul className="support-list">
            <li>Corporate visit to understand your requirements</li>
            <li>Complete visa requirement guidance</li>
            <li>Document checklist</li>
            <li>Application assistance</li>
            <li>Document review</li>
            <li>Appointment guidance</li>
            <li>Application tracking</li>
            <li>Status communication</li>
            <li>Related documentation support</li>
          </ul>

          <NavLink href="/contact" onClick={onNavigate} className="btn btn-primary">Enquire for Corporate Visa Services</NavLink>
        </div>
      </section>

      <section className="travel-partner-support">
        <div className="container">
          <h2>Travel Partner Support</h2>
          <p>Travel agencies and tour operators often manage multiple aspects of a client's journey. VisaNix provides specialised visa and documentation support so travel partners can focus on their core travel business.</p>
          
          <h3>We Can Support Travel Partners With</h3>
          <ul className="support-list">
            <li>Visa requirement checks</li>
            <li>Customised document checklists</li>
            <li>Application preparation</li>
            <li>Document review</li>
            <li>Visa appointment guidance</li>
            <li>Application tracking</li>
            <li>Client documentation</li>
            <li>Apostille & Attestation</li>
            <li>Visa-related support</li>
          </ul>

          <div className="partnership-message">
            <h3>Partnership Message</h3>
            <p><strong>You manage the journey. We manage the visa process.</strong></p>
          </div>

          <NavLink href="/contact" onClick={onNavigate} className="btn btn-primary">Partner With VisaNix</NavLink>
        </div>
      </section>
    </main>
  )
}
