export default function Destinations() {
  return (
    <main id="destinations" className="page destinations-page">
      <section className="page-header">
        <div className="container">
          <h1>Worldwide Visa Assistance</h1>
          <p>VisaNix provides visa facilitation and documentation support for a wide range of international destinations. Requirements may vary based on nationality, purpose of travel, duration of stay and individual circumstances.</p>
        </div>
      </section>

      <section className="regions">
        <div className="container">
          <h2>Destinations By Region</h2>
          <div className="regions-grid">
            <RegionCard region="Europe" />
            <RegionCard region="North America" />
            <RegionCard region="South America" />
            <RegionCard region="Asia" />
            <RegionCard region="Middle East" />
            <RegionCard region="Australia & New Zealand" />
          </div>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="container">
          <h2>Featured Visa Destinations</h2>
          <p>We provide detailed visa assistance for high-demand destinations:</p>
          <div className="featured-grid">
            <FeaturedDestination name="USA" icon="🇺🇸" />
            <FeaturedDestination name="Canada" icon="🇨🇦" />
            <FeaturedDestination name="UK" icon="🇬🇧" />
            <FeaturedDestination name="Schengen Area" icon="🇪🇺" />
          </div>
          <p className="featured-note">Each destination has its own visa types, document requirements, process information and FAQ section.</p>
        </div>
      </section>

      <section className="destinations-cta">
        <div className="container">
          <h2>Can't Find Your Destination?</h2>
          <p>If you don't see your destination listed, please contact us and we'll help you.</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </main>
  )
}

function RegionCard({ region }) {
  return (
    <div className="region-card">
      <h3>{region}</h3>
      <p>Visa assistance for destinations in {region.toLowerCase()}</p>
    </div>
  )
}

function FeaturedDestination({ name, icon }) {
  return (
    <div className="featured-destination">
      <span className="destination-icon">{icon}</span>
      <h3>{name}</h3>
    </div>
  )
}
