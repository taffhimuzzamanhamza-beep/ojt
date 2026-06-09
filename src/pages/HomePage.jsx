import { Link } from 'react-router-dom'
import './HomePage.css'

// ---- DATA ----
const features = [
  { icon: '🦜', title: 'Bird Care',   desc: 'Expert tips for parrots, canaries, budgies & more. Keep your feathered friends happy.' },
  { icon: '🐕', title: 'Dog Care',    desc: 'From puppies to seniors — nutrition, training, grooming & vet advice all in one place.' },
  { icon: '🐈', title: 'Cat Care',    desc: 'Indoor & outdoor cat health, behavior tips, and enrichment ideas for your feline.' },
  { icon: '🐇', title: 'Small Pets',  desc: 'Rabbits, hamsters, guinea pigs & more. Small pets deserve great care too!' },
]

const stats = [
  { value: '10K+', label: 'Happy Pet Owners' },
  { value: '500+', label: 'Care Articles' },
  { value: '120+', label: 'Pets Adopted' },
  { value: '50+', label: 'Expert Vets' },
]

const testimonials = [
  { name: 'Priya Sharma',  pet: 'Parrot owner',   text: 'PetNest helped me understand my African Grey so much better. The care guides are detailed and actually useful!',  avatar: '👩' },
  { name: 'Rohit Verma',   pet: 'Dog owner',       text: 'I adopted Bruno through PetNest. The whole process was smooth and the post-adoption support is amazing.',          avatar: '👨' },
  { name: 'Sneha Joshi',   pet: 'Cat owner',       text: 'Found the best nutrition advice here for my diabetic cat. The vet Q&A section saved us many clinic trips!',      avatar: '👩‍🦱' },
]

// ---- COMPONENT ----
function HomePage() {
  return (
    <main className="home page-enter">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
        </div>
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="section-label">🌿 Welcome to PetNest</span>
            <h1>Every Paw & Feather<br /><em>Deserves the Best</em></h1>
            <p>
              Your one-stop guide for pet &amp; bird care — expert advice, adoption support,
              and a loving community of animal lovers across India.
            </p>
            <div className="hero-actions">
              <Link to="/care" className="btn-primary">Explore Care Tips →</Link>
              <Link to="/adopt" className="btn-secondary">Adopt a Pet 🐾</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <span>🦜</span>
              <p>Daily Bird Care</p>
            </div>
            <div className="hero-card hero-card-2">
              <span>🐕</span>
              <p>Dog Training Tips</p>
            </div>
            <div className="hero-card hero-card-3">
              <span>🐈</span>
              <p>Cat Health Guide</p>
            </div>
            <div className="hero-emoji-main">🐾</div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      
      <section className="features section-pad">
        <div className="container text-center">
          <span className="section-label">What We Cover</span>
          <h2 className="section-title">Care For Every Companion</h2>
          <p className="section-sub">Whether you have a singing canary or a loyal labrador, we have guides tailored just for them.</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to="/care" className="feature-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Give a Pet a Forever Home?</h2>
            <p>Browse our adoption listings and change a life today.</p>
          </div>
          <Link to="/adopt" className="btn-amber">View Adoptable Pets 🐾</Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials section-pad">
        <div className="container text-center">
          <span className="section-label">What People Say</span>
          <h2 className="section-title">Loved by Pet Parents</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar">{t.avatar}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.pet}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default HomePage
