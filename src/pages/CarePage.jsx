import { useState } from 'react'
import './CarePage.css'

const categories = ['All', 'Birds', 'Dogs', 'Cats', 'Small Pets']

const careArticles = [
  {
    category: 'Birds',
    emoji: '🦜',
    title: 'Parrot Diet & Nutrition Guide',
    desc: 'Parrots need a varied diet of fresh fruits, vegetables, pellets, and seeds. Avoid avocado, chocolate, caffeine, and onion — these are toxic to birds.',
    tips: ['Fresh water daily', 'Leafy greens 3x/week', 'Avoid avocado & chocolate', 'Pellets as main diet'],
    color: '#4A7C59',
  },
  {
    category: 'Birds',
    emoji: '🐤',
    title: 'Canary & Finch Care Basics',
    desc: 'Canaries are low-maintenance but need clean cages, fresh seeds, and social interaction. They thrive with a regular daily routine.',
    tips: ['Change cage liner weekly', 'Fresh cuttlebone for calcium', 'Cage size: min 24×18 inch', 'Sunlight 4–6 hrs/day'],
    color: '#D4813A',
  },
  {
    category: 'Birds',
    emoji: '🦚',
    title: 'Bird Cage Setup & Hygiene',
    desc: 'A clean cage is the foundation of bird health. Spot-clean daily, deep-clean weekly, and ensure proper ventilation and perch variety.',
    tips: ['Natural wood perches', 'Avoid Teflon cookware nearby', 'Deep clean monthly', 'Offer mineral block'],
    color: '#2D5A27',
  },
  {
    category: 'Dogs',
    emoji: '🐕',
    title: 'Dog Nutrition & Feeding',
    desc: 'Dogs need a balanced diet with proteins, fats, and carbohydrates. Feed age-appropriate food — puppies, adults, and seniors have different needs.',
    tips: ['2 meals/day for adults', 'Fresh water always available', 'Avoid grapes, onions, xylitol', 'Consult vet for portion size'],
    color: '#5C3A1E',
  },
  {
    category: 'Dogs',
    emoji: '🦴',
    title: 'Dog Exercise & Training',
    desc: 'Regular exercise prevents obesity and behavioral issues. Basic obedience training builds trust between you and your dog.',
    tips: ['30–60 min walk daily', 'Mental stimulation with toys', 'Positive reinforcement', 'Socialize from puppyhood'],
    color: '#8B4513',
  },
  {
    category: 'Cats',
    emoji: '🐈',
    title: 'Cat Health & Grooming',
    desc: 'Cats are self-groomers, but regular brushing, nail trimming, and dental care are essential especially for indoor cats.',
    tips: ['Brush coat weekly', 'Trim nails every 2 weeks', 'Annual vet checkup', 'Litter box: 1 per cat + 1 extra'],
    color: '#9B6B9B',
  },
  {
    category: 'Cats',
    emoji: '🐟',
    title: 'Cat Diet & Hydration',
    desc: 'Cats are obligate carnivores. They need high-protein food and adequate water. Many cats prefer running water — consider a pet fountain.',
    tips: ['High-protein wet food', 'Water fountain preferred', 'Avoid dairy products', 'No raw fish regularly'],
    color: '#4A90D9',
  },
  {
    category: 'Small Pets',
    emoji: '🐇',
    title: 'Rabbit Care Guide',
    desc: 'Rabbits need hay, fresh vegetables, and plenty of space to hop. They are social animals that thrive with companionship.',
    tips: ['Unlimited timothy hay', 'Fresh leafy greens daily', 'Avoid iceberg lettuce', 'Spay/neuter recommended'],
    color: '#C07878',
  },
]

const quickTips = [
  { icon: '💧', tip: 'Always provide fresh, clean water' },
  { icon: '🩺', tip: 'Annual vet visit, even if healthy' },
  { icon: '🌡️', tip: 'Watch for sudden behavior changes' },
  { icon: '🧼', tip: 'Clean food bowls daily' },
  { icon: '❤️', tip: 'Give daily attention & playtime' },
  { icon: '🌿', tip: 'Ensure species-appropriate diet' },
]

function CarePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeCategory === 'All'
    ? careArticles
    : careArticles.filter(a => a.category === activeCategory)

  return (
    <main className="care-page page-enter">

      {/* Hero */}
      <section className="care-hero">
        <div className="container care-hero-inner">
          <span className="section-label">🌿 Expert Advice</span>
          <h1 className="section-title">Pet & Bird Care Guide</h1>
          <p className="section-sub">
            Trusted, vet-reviewed tips to help your furry and feathered companions live long, healthy, and happy lives.
          </p>
        </div>
      </section>

      {/* Quick Tips Strip */}
      <section className="quick-tips-strip">
        <div className="container quick-tips-grid">
          {quickTips.map((t, i) => (
            <div key={i} className="quick-tip">
              <span>{t.icon}</span>
              <p>{t.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter & Articles */}
      <section className="care-articles-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat); setExpanded(null) }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="articles-grid">
            {filtered.map((article, i) => (
              <div key={i} className="article-card" style={{ '--card-color': article.color }}>
                <div className="article-header">
                  <span className="article-emoji">{article.emoji}</span>
                  <span className="article-category">{article.category}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.desc}</p>

                {expanded === i && (
                  <ul className="article-tips">
                    {article.tips.map((tip, j) => (
                      <li key={j}><span>✅</span>{tip}</li>
                    ))}
                  </ul>
                )}
                <button
                  className="article-toggle"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {expanded === i ? '▲ Show Less' : '▼ Quick Tips'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="emergency-section">
        <div className="container emergency-inner">
          <div className="emergency-icon">🚨</div>
          <div>
            <h2>Pet Emergency?</h2>
            <p>If your pet shows signs of distress — difficulty breathing, seizures, or won't eat for 24+ hours — contact a vet immediately.</p>
          </div>
          <a href="tel:+911800PETVET" className="btn-amber">📞 Emergency Vet Line</a>
        </div>
      </section>

    </main>
  )
}

export default CarePage
