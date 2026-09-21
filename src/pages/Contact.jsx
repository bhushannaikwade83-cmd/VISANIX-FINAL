import { useState } from 'react'

const CONTACT_EMAIL = 'info@visanix.in'
const CONTACT_PHONE = '+91 XXXX XXXX XX' // Update with actual number
const OFFICE_ADDRESS = 'Office No 35, New Cine Prime Mall, Beverly Park, Kanakiya Road, Mira Road East, Thane, Maharashtra, 401107'
const WEBSITE = 'www.visanix.in'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    destination: 'Canada',
    purposeOfTravel: 'Tourism',
    expectedTravelDate: '',
    visaType: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const body = [
      `Name: ${formData.name}`,
      `Mobile: ${formData.mobileNumber}`,
      `Email: ${formData.email}`,
      `Destination: ${formData.destination}`,
      `Purpose of Travel: ${formData.purposeOfTravel}`,
      `Expected Travel Date: ${formData.expectedTravelDate}`,
      `Visa Type: ${formData.visaType}`,
      '',
      `Message: ${formData.message}`
    ].join('\n')

    window.location.href = 
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('VisaNix Enquiry')}&body=${encodeURIComponent(body)}`
  }

  return (
    <main id="contact" className="page contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Let's Make Your Visa Journey Easier</h1>
          <p>Have a destination in mind? Tell us where you're going, why you're travelling and when you plan to travel. Our team will help you understand the next steps.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* CONTACT FORM */}
            <div className="contact-form-section">
              <h2>Send us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number *</label>
                  <input 
                    type="tel" 
                    id="mobileNumber" 
                    name="mobileNumber" 
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required 
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="destination">Destination *</label>
                  <select 
                    id="destination" 
                    name="destination" 
                    value={formData.destination}
                    onChange={handleChange}
                  >
                    <option>Canada</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="purposeOfTravel">Purpose of Travel *</label>
                  <select 
                    id="purposeOfTravel" 
                    name="purposeOfTravel" 
                    value={formData.purposeOfTravel}
                    onChange={handleChange}
                  >
                    <option>Tourism</option>
                    <option>Business</option>
                    <option>Education</option>
                    <option>Work</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="expectedTravelDate">Expected Travel Date *</label>
                  <input 
                    type="date" 
                    id="expectedTravelDate" 
                    name="expectedTravelDate" 
                    value={formData.expectedTravelDate}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="visaType">Visa Type</label>
                  <input 
                    type="text" 
                    id="visaType" 
                    name="visaType" 
                    value={formData.visaType}
                    onChange={handleChange}
                    placeholder="e.g., Tourist, Business, Student"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Tell us more about your travel plans..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">Submit Enquiry</button>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="contact-info-section">
              <h2>Contact VisaNix</h2>
              
              <div className="contact-info">
                <div className="info-item">
                  <h3>Office</h3>
                  <p>{OFFICE_ADDRESS}</p>
                </div>

                <div className="info-item">
                  <h3>Phone</h3>
                  <p><a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a></p>
                </div>

                <div className="info-item">
                  <h3>Email</h3>
                  <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
                </div>

                <div className="info-item">
                  <h3>Website</h3>
                  <p><a href={`https://${WEBSITE}`}>{WEBSITE}</a></p>
                </div>
              </div>

              <div className="contact-message">
                <h3>Your Destination. Our Guidance.</h3>
                <p>From visa documentation to Apostille and Attestation, VisaNix helps simplify the documentation side of international travel.</p>
                <p className="tagline"><strong>Visa made effortless.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
