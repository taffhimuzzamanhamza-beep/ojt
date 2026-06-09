import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">🐾 Pet<em>Nest</em></Link>
          <p>Your trusted companion in pet & bird care. We help every feather and paw live their best life.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👥</a>
            <a href="#" aria-label="YouTube">▶️</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/care">Care Tips</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/adopt">Adopt a Pet</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Pet Types */}
        <div className="footer-col">
          <h4>Pet Categories</h4>
          <ul>
            <li><a href="#">Dogs 🐕</a></li>
            <li><a href="#">Cats 🐈</a></li>
            <li><a href="#">Parrots 🦜</a></li>
            <li><a href="#">Canaries 🐤</a></li>
            <li><a href="#">Rabbits 🐇</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get weekly pet care tips in your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 PetNest. Made with 💚 for every pet lover.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
