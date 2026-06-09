import { useState } from 'react'
import './ContactPage.css'

const faqs = [
  { q: 'Is pet adoption free on PetNest?', a: 'Yes! We never charge for adoption listings. The process is completely free for both adopters and caretakers.' },
  { q: 'How do I submit my pet to the gallery?', a: 'Click "Submit Your Pet" on the Gallery page and fill in your pet\'s details. We feature new pets every week.' },
  { q: 'Are your care guides vet-reviewed?', a: 'Yes! All our articles are reviewed by certified veterinarians before being published.' },
  { q: 'Do you cover all cities in India?', a: 'Currently we serve 6 major cities, but we are expanding. You can still browse guides from anywhere in India.' },
]

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className="contact-page page-enter">

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">💌 Get In Touch</span>
          <h1 className="section-title">We'd Love to Hear From You</h1>
          <p className="section-sub">Questions, feedback, adoption inquiries — we respond within 24 hours.</p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* Left: Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Reach out through any channel — or just use the form. Our team is friendly and always happy to help!</p>

            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Office Address</strong>
                  <p>bakergnaj,muharrampur, Patna, Bihar – 800001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 6201140848</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@petnest.in</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon–Sat, 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="social-link">📸 Instagram</a>
              <a href="#" className="social-link">👥 Facebook</a>
              <a href="#" className="social-link">▶️ YouTube</a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <>
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's it about?" />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." rows={5} required />
                  </div>
                  <button type="submit" className="btn-primary contact-submit">
                    Send Message 💌
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container faq-inner">
          <div>
            <span className="section-label">❓ Common Questions</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '8px' }}>FAQs</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default ContactPage
