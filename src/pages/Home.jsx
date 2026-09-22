import { useState } from 'react'
import { NavLink } from '../utils/navLink'

export default function Home({ onNavigate }) {
  return (
    <main id="home" className="page home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Visa Journey, Simplified.</h1>
          <p className="tagline">Professional visa facilitation and documentation support for destinations worldwide.</p>
          <p className="brand-message">Visa made effortless.</p>
          <div className="hero-buttons">
            <a href="#visa-services" className="btn btn-primary">Start Your Visa Journey</a>
            <a href="#services" className="btn btn-secondary">Explore Visa Services</a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="intro">
        <div className="container">
          <h2>International Travel Made Simple</h2>
          <p>International travel should be exciting — not complicated by paperwork.</p>
          <p>At VisaNix, we provide professional visa facilitation and documentation support to help travellers navigate the visa application process with greater clarity and confidence.</p>
          <p>From understanding visa requirements and preparing documents to application guidance, appointment support and application tracking, our team helps you through the important stages of your visa journey.</p>
          <p><strong>Your destination is yours to choose. We'll help simplify the journey there.</strong></p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p className="section-subtitle">Comprehensive visa solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            <ServiceCard
              icon="✈️"
              title="Visa Facilitation"
              description="Professional assistance throughout the visa application process, from understanding requirements to submission and tracking."
            />
            <ServiceCard
              icon="📋"
              title="Documentation Support"
              description="Guidance in preparing, organising and reviewing documents required for your visa application."
            />
            <ServiceCard
              icon="✍️"
              title="Visa Application Assistance"
              description="Support with application forms, supporting documents and applicable application requirements."
            />
            <ServiceCard
              icon="🔖"
              title="Apostille Services"
              description="Assistance with Apostille requirements for documents intended for use internationally."
            />
            <ServiceCard
              icon="🏛️"
              title="Attestation Services"
              description="Support with document attestation and applicable legalisation procedures."
            />
            <ServiceCard
              icon="🏢"
              title="Corporate Visa Services"
              description="Structured visa assistance for companies, employees, executives and business travellers."
            />
            <ServiceCard
              icon="🌍"
              title="Travel Partner Support"
              description="Specialised visa processing and documentation support for travel agencies, tour operators and other travel partners."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VISANIX */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose VisaNix?</h2>
          <ul className="features-list">
            <li>✓ Specialised visa focus — dedicated to visas and travel documentation.</li>
            <li>✓ Professional guidance — clear support through the application process.</li>
            <li>✓ Documentation focus — attention to completeness, consistency and relevance.</li>
            <li>✓ Structured process — a systematic approach to each stage.</li>
            <li>✓ Transparent communication — keeping clients informed.</li>
            <li>✓ Individual and corporate support — services for travellers, businesses and travel partners.</li>
          </ul>
        </div>
      </section>

      {/* CARES VALUES SECTION */}
      <section className="cares-section">
        <div className="container">
          <h2>At The Heart Of Everything We Do, You Come First</h2>
          <p className="cares-intro">At VisaNix, our clients are at the centre of everything we do. Our "CARES" values guide how we communicate, how we work and how we support you throughout your visa journey.</p>
          
          <div className="cares-grid">
            <CareCard 
              letter="C"
              title="Customer First"
              description="Your journey, your needs and your peace of mind come first."
            />
            <CareCard 
              letter="A"
              title="Accountable"
              description="We take ownership and keep our commitments."
            />
            <CareCard 
              letter="R"
              title="Reliable"
              description="Dependable guidance, consistent support and clear communication."
            />
            <CareCard 
              letter="E"
              title="Empathetic"
              description="We listen, understand and support you with care."
            />
            <CareCard 
              letter="S"
              title="Solution Driven"
              description="We look for practical, compliant and simpler ways forward."
            />
          </div>

          <NavLink href="/values" onClick={onNavigate} className="btn btn-primary">Discover Our Values</NavLink>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready To Start Your Visa Journey?</h2>
          <p>Don't let complicated paperwork stand between you and your destination. Let VisaNix simplify the process.</p>
          <NavLink href="/contact" onClick={onNavigate} className="btn btn-primary btn-large">Get Visa Assistance</NavLink>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function CareCard({ letter, title, description }) {
  return (
    <div className="care-card">
      <div className="care-header">
        <div className="care-letter">{letter}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  )
}
