import { useEffect } from 'react'

export default function Header() {
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
              <li><a href="/">Home</a></li>
              <li><a href="/rental-info">Rental Info</a></li>
              <li><a href="/property">The Property</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-cta">
            <a href="/contact" className="romantic-button">Book Your Tour</a>
          </div>
        </div>
      </div>
    </header>
  )
}
