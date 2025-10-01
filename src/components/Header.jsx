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
              <li className="dropdown">
                <a href="/events">Events ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/events/weddings">Wedding Event Venue</a></li>
                  <li><a href="/events/holiday-parties">Holiday Party Event Venue</a></li>
                  <li><a href="/events/engagement-parties">Engagement Party Venue</a></li>
                  <li><a href="/events/birthday-parties">Birthday Party Venue</a></li>
                  <li><a href="/events/graduation">Graduation Event Venue</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/rental-info">Rental Info ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/rental-info/contracts">Rental Contracts</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/property">The Property ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/property/location">Location</a></li>
                  <li><a href="/property/history">History</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/gallery">Gallery ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/gallery/photos">Photo Gallery</a></li>
                  <li><a href="/gallery/videos">Videos</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/testimonials">Testimonials & Features ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/testimonials">Testimonials</a></li>
                  <li><a href="/testimonials/published-weddings">Published Weddings</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/contact">Contact ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/contact/schedule-tour">Schedule a Tour</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
