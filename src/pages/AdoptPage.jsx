import { useState } from 'react'
import './AdoptPage.css'

const pets = [
  { id: 1, emoji: '🐕', name: 'Sheru',   breed: 'Indian Pariah Dog', age: '1 yr',  gender: 'Male',   city: 'Patna',   type: 'Dog',       vaccinated: true,  desc: 'Friendly street dog, loves children. Vaccinated & neutered.' },
  { id: 2, emoji: '🐈', name: 'Moti',    breed: 'Persian Mix',       age: '2 yrs', gender: 'Female', city: 'Delhi',   type: 'Cat',       vaccinated: true,  desc: 'Calm and loving. Ready for a cozy indoor home.' },
  { id: 3, emoji: '🦜', name: 'Mithu',   breed: 'Rose-ringed Parakeet', age: '8 mo', gender: 'Male', city: 'Mumbai',  type: 'Bird',      vaccinated: false, desc: 'Talks a little, eats a lot! Looking for patient owner.' },
  { id: 4, emoji: '🐇', name: 'Fluffy',  breed: 'New Zealand White', age: '6 mo',  gender: 'Female', city: 'Lucknow', type: 'Small Pet', vaccinated: false, desc: 'Super gentle. Loves to be held and petted. Ideal for kids.' },
  { id: 5, emoji: '🐕', name: 'Tommy',   breed: 'Labrador Mix',      age: '3 yrs', gender: 'Male',   city: 'Kanpur',  type: 'Dog',       vaccinated: true,  desc: 'Knows sit, stay, fetch. Fully trained and house-broken.' },
  { id: 6, emoji: '🐈', name: 'Bijli',   breed: 'Domestic Shorthair', age: '1 yr', gender: 'Female', city: 'Pune',    type: 'Cat',       vaccinated: true,  desc: 'Fast like lightning! Playful, mischievous, and very cuddly.' },
]

const typeFilters = ['All', 'Dog', 'Cat', 'Bird', 'Small Pet']

function AdoptPage() {
  const [filter, setFilter] = useState('All')
  const [applied, setApplied] = useState(null)

  const filtered = filter === 'All' ? pets : pets.filter(p => p.type === filter)

  return (
    <main className="adopt-page page-enter">

      {/* Hero */}
      <section className="adopt-hero">
        <div className="container adopt-hero-inner">
          <div className="adopt-hero-text">
            <span className="section-label">🐾 Adopt, Don't Shop</span>
            <h1 className="section-title" style={{ textAlign: 'left', margin: '8px 0 16px' }}>
              Give a Pet<br /><em>a Forever Home</em>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '420px', marginBottom: '28px' }}>
              Every animal on this page is looking for a loving family. Choose to adopt and change a life — yours and theirs.
            </p>
            <div className="adopt-hero-stats">
              <div><strong>120+</strong><span>Pets Adopted</span></div>
              <div><strong>6</strong><span>Cities Covered</span></div>
              <div><strong>100%</strong><span>Free Adoption</span></div>
            </div>
          </div>
          <div className="adopt-hero-visual">
            <div className="adopt-visual-card">🐕 <span>Waiting for you</span></div>
            <div className="adopt-visual-main">🏡</div>
            <div className="adopt-visual-card">🐈 <span>Ready to love</span></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="adopt-process">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>How Adoption Works</h2>
          <div className="process-steps">
            {[
              { step: '01', icon: '🔍', title: 'Browse Pets',        desc: 'Browse available pets and find one that fits your lifestyle.' },
              { step: '02', icon: '📝', title: 'Apply Online',        desc: 'Fill our simple adoption form. No lengthy paperwork.' },
              { step: '03', icon: '📞', title: 'Meet & Greet',        desc: 'We arrange a meeting with the pet and current caretaker.' },
              { step: '04', icon: '🏡', title: 'Welcome Home!',       desc: 'Finalize adoption and bring your new family member home.' },
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{s.step}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="adopt-listings">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '8px' }}>Available for Adoption</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>All pets are health-checked. Adoption is completely free.</p>

          <div className="filter-tabs">
            {typeFilters.map(f => (
              <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="adopt-grid">
            {filtered.map(pet => (
              <div key={pet.id} className="adopt-card">
                <div className="adopt-card-img">
                  <span className="adopt-emoji">{pet.emoji}</span>
                  {pet.vaccinated && <span className="vaccinated-badge">✅ Vaccinated</span>}
                </div>
                <div className="adopt-card-body">
                  <div className="adopt-card-head">
                    <h3>{pet.name}</h3>
                    <span className="adopt-city">📍 {pet.city}</span>
                  </div>
                  <p className="adopt-breed">{pet.breed} • {pet.age} • {pet.gender}</p>
                  <p className="adopt-desc">{pet.desc}</p>
                  <button
                    className="btn-primary adopt-btn"
                    onClick={() => setApplied(pet)}
                  >
                    Adopt {pet.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {applied && (
        <div className="modal-overlay" onClick={() => setApplied(null)}>
          <div className="adopt-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setApplied(null)}>✕</button>
            <div className="modal-emoji">{applied.emoji}</div>
            <h2>Apply to Adopt {applied.name}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Fill in your details and we'll connect you shortly.</p>
            <div className="adopt-form">
              <input type="text"  placeholder="Your full name" />
              <input type="email" placeholder="Email address" />
              <input type="tel"   placeholder="Phone number" />
              <input type="text"  placeholder="Your city" />
              <textarea placeholder="Why do you want to adopt this pet?" rows={3} />
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  alert(`🎉 Application submitted for ${applied.name}! We'll contact you within 48 hours.`)
                  setApplied(null)
                }}
              >
                Submit Application ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default AdoptPage
