import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize user from localStorage
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('petnest_session') || 'null')
    setUser(session)
    setIsLoading(false)

    // Listen for custom auth events
    const handleAuthChange = () => {
      const updatedSession = JSON.parse(localStorage.getItem('petnest_session') || 'null')
      setUser(updatedSession)
    }

    window.addEventListener('auth-change', handleAuthChange)
    return () => window.removeEventListener('auth-change', handleAuthChange)
  }, [])

  const login = (userData) => {
    localStorage.setItem('petnest_session', JSON.stringify(userData))
    setUser(userData)
    window.dispatchEvent(new Event('auth-change'))
  }

  const logout = () => {
    localStorage.removeItem('petnest_session')
    setUser(null)
    window.dispatchEvent(new Event('auth-change'))
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
