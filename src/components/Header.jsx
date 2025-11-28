import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        const isHome = location.pathname === '/'
        // Trigger point: 90% of viewport for home (full hero), 50% for other pages (shorter hero)
        const triggerPoint = isHome ? window.innerHeight * 0.9 : window.innerHeight * 0.5
        
        if (window.scrollY > triggerPoint) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    // Check immediately on mount/route change
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Close mobile menu when route changes
  const closeMenu = () => setIsMobileMenuOpen(false)

  // Helper to determine active state
  const isActive = (path) => location.pathname === path ? 'active' : ''
  
  // Helper for dropdown parent active state
  const isGroupActive = (paths) => paths.includes(location.pathname) ? 'active' : ''

  return (
    <header id="header" className={`header-enhanced ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="content-wrapper">
        <div className="header-content">
          <a href="/" className="logo-wrapper" onClick={closeMenu}>
            <img src="/logo.svg" alt="Rum River Wedding Barn" className="logo-svg" />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              
              <li>
                <a href="/events" className={isActive('/events')} onClick={closeMenu}>Events</a>
              </li>
              <li><a href="/vendor-list" className={isActive('/vendor-list')} onClick={closeMenu}>Vendor List</a></li>
              <li className={`dropdown ${isGroupActive(['/property', '/location', '/history'])}`}>
                <a href="#" className="dropdown-trigger" onClick={(e) => e.preventDefault()}>The Property ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/property" className={isActive('/property')} onClick={closeMenu}>Overview</a></li>
                  <li><a href="/location" className={isActive('/location')} onClick={closeMenu}>Location</a></li>
                  <li><a href="/history" className={isActive('/history')} onClick={closeMenu}>History</a></li>
                </ul>
              </li>
              <li>
                <a href="/gallery" className={isActive('/gallery')} onClick={closeMenu}>Gallery</a>
              </li>
              <li className={`dropdown ${isGroupActive(['/testimonials', '/real-weddings'])}`}>
                <a href="#" className="dropdown-trigger" onClick={(e) => e.preventDefault()}>Testimonials & Features ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/testimonials" className={isActive('/testimonials')} onClick={closeMenu}>Testimonials</a></li>
                  <li><a href="/real-weddings" className={isActive('/real-weddings')} onClick={closeMenu}>Real Weddings Blog</a></li>
                </ul>
              </li>
              <li>
                <a href="/contact" className={`contact-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Overlay - Separate DOM structure */}
          <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-drawer-header">
              <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close menu">
                ✕
              </button>
            </div>
            <nav className="mobile-nav-content">
              
              <a href="/events" className={`mobile-link ${isActive('/events')}`} onClick={closeMenu}>Events</a>
              <a href="/vendor-list" className={`mobile-link ${isActive('/vendor-list')}`} onClick={closeMenu}>Vendor List</a>
              
              <div className="mobile-group">
                <span className="mobile-group-title">The Property</span>
                <a href="/property" className={`mobile-sublink ${isActive('/property')}`} onClick={closeMenu}>Overview</a>
                <a href="/location" className={`mobile-sublink ${isActive('/location')}`} onClick={closeMenu}>Location</a>
                <a href="/history" className={`mobile-sublink ${isActive('/history')}`} onClick={closeMenu}>History</a>
              </div>

              <a href="/gallery" className={`mobile-link ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</a>

              <div className="mobile-group">
                <span className="mobile-group-title">Testimonials & Features</span>
                <a href="/testimonials" className={`mobile-sublink ${isActive('/testimonials')}`} onClick={closeMenu}>Testimonials</a>
                <a href="/real-weddings" className={`mobile-sublink ${isActive('/real-weddings')}`} onClick={closeMenu}>Real Weddings Blog</a>
              </div>

              <a href="/contact" className={`mobile-link highlight ${isActive('/contact')}`} onClick={closeMenu}>Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
