import { useState } from 'react'
import { useScene } from './useScene.js'

const CONTACT_EMAIL = 'digitrixmedia05@gmail.com'

export default function Scene8CTA({ onExploreWebsite }) {
  const [showModal, setShowModal] = useState(false)

  const ref = useScene(
    (tl) => {
      tl.from('.s8-logo', { scale: 0, rotate: -30, duration: 0.8, ease: 'back.out(1.6)' })
      tl.from('.s8-copy h2', { y: 60, opacity: 0, duration: 0.8 }, 0.4)
      tl.from('.s8-copy p', { y: 40, opacity: 0, duration: 0.6 }, 0.7)
      // Animate buttons in WITHOUT changing opacity (they start visible)
      tl.from('.cta-buttons button, .cta-buttons a', { y: 50, duration: 0.6, ease: 'back.out(1.5)' }, 1)
      tl.to({}, { duration: 0.8 })
    },
    { end: '+=120%' },
  )

  function handleBookingSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Destination: ${data.get('destination')}`,
      '',
      data.get('message'),
    ].join('\n')
    window.location.href =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent('Consultation Request — VisaNex')}` +
      `&body=${encodeURIComponent(body)}`
    setShowModal(false)
  }

  return (
    <section ref={ref} id="cta" className="scene s8" aria-label="Start your journey">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="scene-inner">
        <div className="scene-copy s8-copy">
          <div className="s8-logo">VN</div>
          <h2>Start Your Global Journey Today</h2>
          <p>Book a free consultation and let our experts map your route abroad.</p>
          
          <div className="cta-buttons">
            <button 
              className="btn btn-primary" 
              type="button" 
              onClick={() => setShowModal(true)}
            >
              Book Consultation
            </button>

            <a
              className="btn btn-ghost"
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Visa Application — VisaNex')}`}
            >
              Apply Now
            </a>

            <button 
              className="btn btn-secondary" 
              type="button" 
              onClick={onExploreWebsite}
            >
              Explore Full Website
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <h3>Book a Free Consultation</h3>
            <p>Tell us about your plans — we'll get back within 24 hours.</p>
            <form onSubmit={handleBookingSubmit}>
              <label>
                Full Name
                <input name="name" type="text" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required placeholder="you@example.com" />
              </label>
              <label>
                Destination Country
                <select name="destination" defaultValue="Canada">
                  <option>Canada</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Germany</option>
                  <option>Australia</option>
                  <option>Europe (other)</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="3" placeholder="I want to study abroad…" />
              </label>
              <button className="btn btn-primary" type="submit">Send Request</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
