import { useState } from 'react'
import './GalleryPage.css'

const galleryItems = [
  { id: 1,  emoji: '🦜', name: 'Rio',     breed: 'Blue-fronted Amazon', type: 'Bird',      age: '4 years',  desc: 'Loves to sing and mimic voices. Knows 30 words!',    color: '#2D7A4A' },
  { id: 2,  emoji: '🐕', name: 'Bruno',   breed: 'Labrador Retriever',  type: 'Dog',       age: '2 years',  desc: 'Energetic and loves fetch. Best boy in the colony.',  color: '#C07A38' },
  { id: 3,  emoji: '🐈', name: 'Luna',    breed: 'Persian Cat',         type: 'Cat',       age: '3 years',  desc: 'Fluffy and regal. Loves lap cuddles after dinner.',   color: '#8B5A8B' },
  { id: 4,  emoji: '🐹', name: 'Coco',    breed: 'Syrian Hamster',      type: 'Small Pet', age: '1 year',   desc: 'Runs 5km on his wheel every night. Speed demon!',    color: '#C0784A' },
  { id: 5,  emoji: '🐇', name: 'Snowy',   breed: 'Holland Lop Rabbit',  type: 'Small Pet', age: '2 years',  desc: 'Floppy ears, big personality. Loves hay and pets.',  color: '#7A9B6A' },
  { id: 6,  emoji: '🦚', name: 'Peachy',  breed: 'Peach-faced Lovebird',type: 'Bird',      age: '1 year',   desc: 'Tiny but feisty! Sleeps in Amir\'s shirt pocket.',   color: '#D4813A' },
  { id: 7,  emoji: '🐕', name: 'Max',     breed: 'German Shepherd',     type: 'Dog',       age: '5 years',  desc: 'Trained guard dog who also loves belly rubs.',        color: '#5C3A1E' },
  { id: 8,  emoji: '🐈', name: 'Oreo',   breed: 'Domestic Shorthair',  type: 'Cat',       age: '6 years',  desc: 'Black and white. Master of stealing food quietly.',  color: '#333333' },
  { id: 9,  emoji: '🐤', name: 'Sunny',   breed: 'Yellow Canary',       type: 'Bird',      age: '2 years',  desc: 'Sings from 6am to sunset. Alarm clock we love.',     color: '#D4C030' },
]

const filters = ['All', 'Bird', 'Dog', 'Cat', 'Small Pet']

function GalleryPage() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.type === active)

  return (
    <main className="gallery-page page-enter">

      {/* Hero */}
      <section className="gallery-hero">
        <div className="container">
          <span className="section-label">📸 Community Gallery</span>
          <h1 className="section-title">Meet Our Furry & Feathered Stars</h1>
          <p className="section-sub">Real pets from the PetNest community. Submit yours and get featured!</p>
        </div>
      </section>

      {/* Filter */}
      <section className="gallery-section">
        <div className="container">
          <div className="filter-tabs">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-tab ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map(pet => (
              <div
                key={pet.id}
                className="gallery-card"
                style={{ '--pet-color': pet.color }}
                onClick={() => setSelected(pet)}
              >
                <div className="gallery-card-img">
                  <div className="pet-emoji-wrap">{pet.emoji}</div>
                </div>
                <div className="gallery-card-body">
                  <div className="gallery-card-top">
                    <h3>{pet.name}</h3>
                    <span className="pet-type-badge">{pet.type}</span>
                  </div>
                  <p className="pet-breed">{pet.breed} • {pet.age}</p>
                  <p className="pet-desc">{pet.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Banner */}
      <section className="gallery-submit">
        <div className="container gallery-submit-inner">
          <div>
            <h2>🌟 Feature Your Pet!</h2>
            <p>Submit a photo and short bio of your pet to be showcased in our community gallery.</p>
          </div>
          <button className="btn-amber">Submit Your Pet →</button>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-card" style={{ '--pet-color': selected.color }} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-emoji">{selected.emoji}</div>
            <h2>{selected.name}</h2>
            <span className="pet-type-badge">{selected.type}</span>
            <table className="modal-table">
              <tbody>
                <tr><td>Breed</td><td>{selected.breed}</td></tr>
                <tr><td>Age</td><td>{selected.age}</td></tr>
              </tbody>
            </table>
            <p className="modal-desc">{selected.desc}</p>
            <button className="btn-primary" onClick={() => setSelected(null)} style={{ width: '100%', justifyContent: 'center' }}>
              ❤️ Love this pet!
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default GalleryPage
