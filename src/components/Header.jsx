import { useEffect } from 'react'

export default function Header({ currentPage = '' }) {
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

  return (
    <header id="header" className="header-enhanced">
      <div className="content-wrapper">
        <div className="header-content">
          <div className="logo-wrapper">
            <div className="logo-circle">RR</div>
            <div className="logo-text">
              <div className="logo-name">Rum River</div>
              <div className="logo-tagline">Wedding Barn</div>
            </div>
          </div>
          <nav>
            <ul className="nav-menu">
              <li><a href="/" className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
              <li>
                <a href="/events" className={currentPage === 'events' ? 'active' : ''}>Events</a>
              </li>
              <li><a href="/vendor-list" className={currentPage === 'vendors' ? 'active' : ''}>Vendor List</a></li>
              <li className="dropdown">
                <a href="/property" className={currentPage === 'property' ? 'active' : ''}>The Property ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/location" className={currentPage === 'location' ? 'active' : ''}>Location</a></li>
                  <li><a href="/history" className={currentPage === 'history' ? 'active' : ''}>History</a></li>
                </ul>
              </li>
              <li>
                <a href="/gallery" className={currentPage === 'gallery' ? 'active' : ''}>Gallery</a>
              </li>
              <li className="dropdown">
                <a href="/testimonials" className={currentPage === 'testimonials' ? 'active' : ''}>Testimonials & Features ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/testimonials" className={currentPage === 'testimonials' ? 'active' : ''}>Testimonials</a></li>
                  <li><a href="/real-weddings" className={currentPage === 'real-weddings' ? 'active' : ''}>Real Weddings Blog</a></li>
                </ul>
              </li>
              <li>
                <a href="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
