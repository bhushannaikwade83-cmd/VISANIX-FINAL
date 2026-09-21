export default function Trouvaille() {
  return (
    <main id="trouvaille" className="page trouvaille-page">
      <section className="page-header">
        <div className="container">
          <h1>Trouvaille</h1>
          <p>Your Complete Travel Partner</p>
        </div>
      </section>

      <section className="trouvaille-intro">
        <div className="container">
          <p>Trouvaille is the broader travel-services brand, helping individuals, families, businesses and groups plan and manage their travel requirements.</p>
          <p>From holidays and flights to hotels, travel insurance and passport services & MICE, Trouvaille brings essential travel services together under one roof.</p>
        </div>
      </section>

      <section className="trouvaille-services">
        <div className="container">
          <h2>Trouvaille Services</h2>
          <div className="services-grid">
            <ServiceCard 
              title="Holiday Packages"
              description="Domestic and international holiday packages tailored to different travel preferences, schedules and budgets."
            />
            <ServiceCard 
              title="Flight Booking"
              description="Domestic and international flight booking assistance."
            />
            <ServiceCard 
              title="Hotel Booking"
              description="Accommodation booking for leisure, business and family travel."
            />
            <ServiceCard 
              title="Travel Insurance"
              description="Travel insurance assistance for domestic and international journeys."
            />
            <ServiceCard 
              title="Passport Services"
              description="Assistance with applicable passport-related services."
            />
            <ServiceCard 
              title="MICE"
              description="End-to-end MICE solutions for corporate meetings, incentive trips, conferences, exhibitions, and business events."
            />
          </div>
        </div>
      </section>

      <section className="visa-services-note">
        <div className="container">
          <h2>Visa Services</h2>
          <p>Visa-related services are handled by Trouvaille's dedicated specialist division — <strong>VisaNix</strong>.</p>
        </div>
      </section>

      <section className="brand-architecture">
        <div className="container">
          <h2>One Travel Ecosystem. Two Specialised Brands.</h2>
          
          <div className="architecture-box">
            <div className="trouvaille-box">
              <h3>Trouvaille = Travel</h3>
              <p>Holidays • Flights • Hotels • Travel Insurance • Passport Services • MICE</p>
            </div>
            <div className="visanix-box">
              <h3>VisaNix = Visa & Documentation</h3>
              <p>Visas • Apostille • Attestation • Documentation • Compliance Support</p>
            </div>
          </div>

          <p className="architecture-note">Travel planning and visa processing are connected, but they require different areas of expertise. Trouvaille and VisaNix therefore operate as specialised brands with a clear division of services.</p>
          <p><strong>Trouvaille plans your travel. VisaNix simplifies your visa journey.</strong></p>
        </div>
      </section>

      <section className="trouvaille-cta">
        <div className="container">
          <a href="#" className="btn btn-primary btn-large">Explore Trouvaille</a>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
