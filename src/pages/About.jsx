import { NavLink } from '../utils/navLink'

export default function About({ onNavigate }) {
  return (
    <main id="about" className="page about-page">
      <section className="page-header">
        <div className="container">
          <h1>About VisaNix</h1>
          <p>Making Visa Processes Simpler</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <p>VisaNix is the dedicated visa facilitation and travel documentation arm of Trouvaille.</p>
          <p>VisaNix was created to focus exclusively on the visa side of international travel — helping clients navigate documentation, application procedures, compliance requirements and related formalities.</p>
          <p>Our services are designed for individual travellers, families, students, professionals, corporates and travel partners.</p>
        </div>
      </section>

      <section className="our-approach">
        <div className="container">
          <h2>Our Approach</h2>
          <p>We believe every visa application deserves attention to detail. Our approach is based on three principles:</p>
          
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Clarity</h3>
              <p>We simplify complex visa requirements and explain the process in a way that is easy to understand.</p>
            </div>
            <div className="approach-card">
              <h3>Accuracy</h3>
              <p>We focus on consistency and completeness across application forms and supporting documentation.</p>
            </div>
            <div className="approach-card">
              <h3>Support</h3>
              <p>We stay connected with our clients throughout the process and provide guidance whenever they need it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="what-sets-apart">
        <div className="container">
          <h2>What Sets Us Apart</h2>
          <p>VisaNix combines a specialist visa focus with a customer-service mindset. We aim to make a process that can feel complicated more organised, transparent and easier to navigate.</p>
          
          <ul className="features-list">
            <li>✓ Client-first service</li>
            <li>✓ Structured documentation process</li>
            <li>✓ Professional application guidance</li>
            <li>✓ Clear communication</li>
            <li>✓ Support for individuals, corporates and travel partners</li>
            <li>✓ Visa and related documentation under one specialist division</li>
          </ul>
        </div>
      </section>

      <section className="trouvaille-connection">
        <div className="container">
          <h2>Our Connection With Trouvaille</h2>
          <p>Trouvaille is the broader travel-services brand handling holidays, tickets, hotels, travel insurance, passport services, MICE and other travel requirements.</p>
          <p>VisaNix is the specialist division handling visas, Apostille, Attestation and related travel documentation.</p>
          
          <div className="connection-message">
            <p><strong>Two specialised brands. One seamless travel journey.</strong></p>
            <p>Trouvaille focuses on planning and arranging your travel. VisaNix focuses on your visa and documentation.</p>
          </div>

          <NavLink href="/trouvaille" onClick={onNavigate} className="btn btn-primary">Learn About Trouvaille</NavLink>
        </div>
      </section>
    </main>
  )
}
