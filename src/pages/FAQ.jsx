import { useState } from 'react'

const faqs = [
  {
    q: "What does VisaNix do?",
    a: "VisaNix provides visa facilitation, documentation assistance, application guidance, Apostille and Attestation support and related travel documentation services."
  },
  {
    q: "Does VisaNix guarantee visa approval?",
    a: "No. Visa approval is solely at the discretion of the relevant embassy, consulate or immigration authority. VisaNix does not guarantee visa approval."
  },
  {
    q: "Which countries does VisaNix handle?",
    a: "We provide support for a wide range of destinations worldwide, subject to the applicable visa category and service availability."
  },
  {
    q: "Can you help with visa documentation?",
    a: "Yes. We provide guidance regarding applicable documentation and assist with organising and reviewing documents."
  },
  {
    q: "Can you help with visa appointments?",
    a: "Where appointment procedures apply, we provide guidance and assistance with the relevant process."
  },
  {
    q: "Do you provide Apostille services?",
    a: "Yes. VisaNix provides Apostille assistance for applicable documents and destinations."
  },
  {
    q: "Do you provide Attestation services?",
    a: "Yes. We provide assistance with applicable document attestation and legalisation procedures."
  },
  {
    q: "Can you assist companies with employee visas?",
    a: "Yes. We provide corporate visa facilitation and documentation support for eligible business travellers and employees."
  },
  {
    q: "Can travel agencies partner with VisaNix?",
    a: "Yes. VisaNix provides specialised visa and documentation support for travel partners."
  },
  {
    q: "How long does visa processing take?",
    a: "Processing times vary by country, visa category, season, application volume and the relevant authority. Processing times are controlled by the respective embassy, consulate or immigration authority."
  },
  {
    q: "Does VisaNix guarantee expedited processing?",
    a: "No. Expedited processing is subject to the policies and availability of the relevant authority."
  },
  {
    q: "What happens if my visa is refused?",
    a: "We can help you understand the refusal communication and discuss possible next steps. A refusal does not automatically mean that a future application will be successful."
  }
]

export default function FAQ() {
  return (
    <main id="faq" className="page faq-page">
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our visa and documentation services.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Feel free to reach out to our team — we're here to help.</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </main>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
