import { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import './Navbar.css'

const navLinks = [
  { label: 'Home',    path: '/' },
  { label: 'Care Tips', path: '/care' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Adopt',   path: '/adopt' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🐾</span>
          <span className="logo-text">Pet<em>Nest</em></span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {user ? (
          <div className="profile-menu" style={{ position: 'relative' }}>
            <button
              className="profile-avatar"
              onClick={() => setProfileOpen(!profileOpen)}
              title={user.name}
            >
              {user.name.charAt(0).toUpperCase()}
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <div className="profile-avatar-large">{user.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                  </div>
                </div>
                <button
                  className="profile-logout"
                  onClick={() => {
                    logout()
                    setProfileOpen(false)
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="navbar-cta">
            Sign In
          </Link>
        )}

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        {user ? (
          <button
            className="btn-secondary"
            onClick={() => {
              logout()
              setMenuOpen(false)
            }}
            style={{ marginTop: '12px', justifyContent: 'center', width: '100%' }}
          >
            Sign Out ({user.name.charAt(0).toUpperCase()})
          </button>
        ) : (
          <Link to="/login" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
