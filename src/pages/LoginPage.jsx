import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import './LoginPage.css'

// ─── localStorage helpers ───────────────────────────────────────────────────

// Sabhi registered users ko array ke roop mein laata hai
function getUsers() {
  return JSON.parse(localStorage.getItem('petnest_users') || '[]')
}

// Naye user ko save karta hai
function saveUser(user) {
  const users = getUsers()
  users.push(user)
  localStorage.setItem('petnest_users', JSON.stringify(users))
}

// Email se user dhundhta hai
function findUser(email) {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase())
}

// Login session save karta hai (sirf naam + email, password nahi)
function saveSession(user) {
  localStorage.setItem('petnest_session', JSON.stringify({ name: user.name, email: user.email }))
}

// Current logged-in user laata hai
export function getSession() {
  return JSON.parse(localStorage.getItem('petnest_session') || 'null')
}

// Logout karta hai
export function clearSession() {
  localStorage.removeItem('petnest_session')
}

// ─── Component ───────────────────────────────────────────────────────────────

function LoginPage() {
  const navigate = useNavigate()
  const { user: loggedIn, login, logout } = useContext(AuthContext)
  const [isLogin, setIsLogin]   = useState(true)
  const [form, setForm]         = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(''); setSuccess('')

    // ── SIGN IN ──
    if (isLogin) {
      if (!form.email || !form.password) {
        setError('Please fill in all fields.'); return
      }
      const user = findUser(form.email)
      if (!user) {
        setError('❌ No account found with this email. Please register first.'); return
      }
      if (user.password !== form.password) {
        setError('❌ Incorrect password. Please try again.'); return
      }
      login({ name: user.name, email: user.email })
      setSuccess(`✅ Welcome back, ${user.name}! Redirecting...`)
      setForm({ name: '', email: '', password: '', confirm: '' })
      setTimeout(() => navigate('/'), 1500)
    }

    // ── REGISTER ──
    else {
      if (!form.name || !form.email || !form.password || !form.confirm) {
        setError('Please fill in all fields.'); return
      }
      if (form.password !== form.confirm) {
        setError('❌ Passwords do not match!'); return
      }
      if (form.password.length < 6) {
        setError('❌ Password must be at least 6 characters.'); return
      }
      if (findUser(form.email)) {
        setError('❌ This email is already registered. Please sign in.'); return
      }

      const newUser = { name: form.name, email: form.email, password: form.password }
      saveUser(newUser)
      login({ name: newUser.name, email: newUser.email })
      setSuccess(`🎉 Account created! Welcome to PetNest, ${form.name}!`)
      setForm({ name: '', email: '', password: '', confirm: '' })
      setTimeout(() => navigate('/'), 1800)
    }
  }

  const handleLogout = () => {
    logout()
    setSuccess('')
    setError('')
  }

  // ── Already logged in view ──────────────────────────────────────────────────
  if (loggedIn) {
    return (
      <main className="login-page page-enter">
        <div className="login-bg">
          <div className="login-blob login-blob-1" />
          <div className="login-blob login-blob-2" />
        </div>
        <div className="login-container" style={{ gridTemplateColumns: '1fr' }}>
          <div className="login-right" style={{ textAlign: 'center', padding: '60px 48px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🐾</div>
            <h3 style={{ marginBottom: '8px' }}>You are logged in!</h3>
            <p className="auth-subtitle">
              Welcome, <strong style={{ color: 'var(--green-dark)' }}>{loggedIn.name}</strong>
              <br /><span style={{ fontSize: '0.85rem' }}>{loggedIn.email}</span>
            </p>

            <div className="logged-in-actions">
              <Link to="/" className="btn-primary">Go to Home →</Link>
              <button className="btn-secondary" onClick={handleLogout}>Sign Out</button>
            </div>

            {/* Show all registered users (for OJT demo) */}
            <div className="saved-users-box">
              <p className="saved-users-title">👥 Registered Users (localStorage)</p>
              <div className="saved-users-list">
                {getUsers().map((u, i) => (
                  <div key={i} className="saved-user-row">
                    <span className="user-avatar">👤</span>
                    <div>
                      <strong>{u.name}</strong>
                      <span>{u.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // ── Auth form view ──────────────────────────────────────────────────────────
  return (
    <main className="login-page page-enter">
      <div className="login-bg">
        <div className="login-blob login-blob-1" />
        <div className="login-blob login-blob-2" />
      </div>

      <div className="login-container">
        {/* Left Panel */}
        <div className="login-left">
          <Link to="/" className="login-logo">🐾 Pet<em>Nest</em></Link>
          <h2>Join our community of<br />pet lovers across India</h2>
          <div className="login-perks">
            <div className="perk"><span>🌿</span><p>Access 500+ expert care articles</p></div>
            <div className="perk"><span>🐾</span><p>Save your favourite pet profiles</p></div>
            <div className="perk"><span>🩺</span><p>Ask questions to our vet panel</p></div>
            <div className="perk"><span>💌</span><p>Weekly care tips in your inbox</p></div>
          </div>
          <div className="login-animals">🦜 🐕 🐈 🐇 🐹</div>
        </div>

        {/* Right Panel */}
        <div className="login-right">
          <div className="auth-tabs">
            <button className={isLogin ? 'active' : ''} onClick={() => { setIsLogin(true); setError(''); setSuccess('') }}>
              Sign In
            </button>
            <button className={!isLogin ? 'active' : ''} onClick={() => { setIsLogin(false); setError(''); setSuccess('') }}>
              Create Account
            </button>
          </div>

          <h3>{isLogin ? 'Welcome back! 👋' : 'Create your free account'}</h3>
          <p className="auth-subtitle">
            {isLogin
              ? 'Sign in with your registered email & password.'
              : 'Register once — your data is saved locally.'}
          </p>

          {error   && <div className="auth-alert auth-alert-error">{error}</div>}
          {success && <div className="auth-alert auth-alert-success">{success}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              </div>
            )}
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirm" value={form.confirm} onChange={handleChange} placeholder="••••••••" />
              </div>
            )}

            <button type="submit" className="btn-primary auth-submit">
              {isLogin ? 'Sign In' : 'Create Account'} →
            </button>
          </form>

          {/* localStorage info badge */}
          <div className="localstorage-badge">
            💾 Data saves in your browser's localStorage
          </div>

          <p className="auth-switch">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={() => { setIsLogin(!isLogin); setError(''); setSuccess('') }}>
              {isLogin ? ' Sign up' : ' Sign in'}
            </button>
          </p>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
