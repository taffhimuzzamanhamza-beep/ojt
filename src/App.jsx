import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CarePage from './pages/CarePage'
import GalleryPage from './pages/GalleryPage'
import AdoptPage from './pages/AdoptPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/login"   element={<LoginPage />} />
          <Route path="/care"    element={<CarePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/adopt"   element={<AdoptPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
