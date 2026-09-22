import { NavLink } from '../utils/navLink'

export default function VisaServices({ onNavigate }) {
  return (
    <main id="visa-services" className="page visa-services-page">
      <section className="page-header">
        <div className="container">
          <h1>Professional Visa Facilitation</h1>
          <p>A visa application involves more than completing a form. It requires understanding the applicable requirements, preparing supporting documentation and ensuring that the information presented throughout the application is clear and consistent. VisaNix provides structured assistance throughout the process.</p>
        </div>
      </section>

      <section className="visa-types">
        <div className="container">
          <h2>Visa Categories</h2>
          <div className="visa-types-grid">
            <VisaTypeCard 
              title="Tourist Visa"
              description="Planning an international holiday? We assist with documentation and application guidance for travellers visiting destinations for tourism and leisure."
            />
            <VisaTypeCard 
              title="Business Visa"
              description="Documentation and application support for eligible business travel, including meetings, conferences, exhibitions, training and corporate visits."
            />
            <VisaTypeCard 
              title="Student Visa"
              description="Documentation and application guidance for students preparing to pursue education overseas."
            />
            <VisaTypeCard 
              title="Visa Reapplication Support"
              description="Support in reviewing available refusal information and documentation and preparing for a potential future application where appropriate."
            />
          </div>
        </div>
      </section>

      <section className="visa-support">
        <div className="container">
          <h2>Our Visa Support Can Include</h2>
          <ul className="support-list">
            <li>Visa category and requirement guidance</li>
            <li>Personalised document checklist</li>
            <li>Application form assistance</li>
            <li>Supporting document review</li>
            <li>Travel and accommodation documentation guidance</li>
            <li>Financial and employment/business documentation guidance</li>
            <li>Invitation and sponsorship documentation guidance</li>
            <li>Appointment and biometric guidance, where applicable</li>
            <li>Application tracking and status communication</li>
            <li>Visa reapplication documentation support</li>
          </ul>
        </div>
      </section>

      <section className="important-disclaimer">
        <div className="container">
          <div className="disclaimer-box">
            <h3>Important</h3>
            <p>Visa approval is solely at the discretion of the relevant embassy, consulate or immigration authority. VisaNix does not guarantee visa approval, appointment availability or processing timelines.</p>
          </div>
        </div>
      </section>

      <section className="visa-cta">
        <div className="container">
          <NavLink href="/contact" onClick={onNavigate} className="btn btn-primary btn-large">Start Your Visa Journey</NavLink>
        </div>
      </section>
    </main>
  )
}

function VisaTypeCard({ title, description }) {
  return (
    <div className="visa-type-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
