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
              <li>
                <a href="/events">Events</a>
              </li>
              <li><a href="/vendor-list">Vendor List</a></li>
              <li className="dropdown">
                <a href="/property">The Property ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/location">Location</a></li>
                  <li><a href="/history">History</a></li>
                </ul>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li className="dropdown">
                <a href="/testimonials">Testimonials & Features ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/testimonials">Testimonials</a></li>
                  <li><a href="/real-weddings">Real Weddings Blog</a></li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
