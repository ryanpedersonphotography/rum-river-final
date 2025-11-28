import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes (if using React Router Link, but here using a tags so full reload closes it anyway. 
  // But good practice if we switch to Link later)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header id="header" className={`header-enhanced ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="content-wrapper">
        <div className="header-content">
          <a href="/" className="logo-wrapper" onClick={closeMenu}>
            <div className="logo-text">
              <div className="logo-line-1">Rum River</div>
              <div className="logo-line-2">Wedding Barn</div>
            </div>
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
              <li><a href="/" onClick={closeMenu}>Home</a></li>
              <li>
                <a href="/events" onClick={closeMenu}>Events</a>
              </li>
              <li><a href="/vendor-list" onClick={closeMenu}>Vendor List</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-trigger" onClick={(e) => e.preventDefault()}>The Property ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/property" onClick={closeMenu}>Overview</a></li>
                  <li><a href="/location" onClick={closeMenu}>Location</a></li>
                  <li><a href="/history" onClick={closeMenu}>History</a></li>
                </ul>
              </li>
              <li>
                <a href="/gallery" onClick={closeMenu}>Gallery</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-trigger" onClick={(e) => e.preventDefault()}>Testimonials & Features ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/testimonials" onClick={closeMenu}>Testimonials</a></li>
                  <li><a href="/real-weddings" onClick={closeMenu}>Real Weddings Blog</a></li>
                </ul>
              </li>
              <li>
                <a href="/contact" className="contact-link" onClick={closeMenu}>Contact</a>
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
              <a href="/" className="mobile-link" onClick={closeMenu}>Home</a>
              <a href="/events" className="mobile-link" onClick={closeMenu}>Events</a>
              <a href="/vendor-list" className="mobile-link" onClick={closeMenu}>Vendor List</a>
              
              <div className="mobile-group">
                <span className="mobile-group-title">The Property</span>
                <a href="/property" className="mobile-sublink" onClick={closeMenu}>Overview</a>
                <a href="/location" className="mobile-sublink" onClick={closeMenu}>Location</a>
                <a href="/history" className="mobile-sublink" onClick={closeMenu}>History</a>
              </div>

              <a href="/gallery" className="mobile-link" onClick={closeMenu}>Gallery</a>

              <div className="mobile-group">
                <span className="mobile-group-title">Testimonials & Features</span>
                <a href="/testimonials" className="mobile-sublink" onClick={closeMenu}>Testimonials</a>
                <a href="/real-weddings" className="mobile-sublink" onClick={closeMenu}>Real Weddings Blog</a>
              </div>

              <a href="/contact" className="mobile-link highlight" onClick={closeMenu}>Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
