import { useEffect } from 'react'

export default function MenuStandalone() {
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
    <>
      {/* Header/Navigation Section */}
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

      {/* Demo Content to Show Scroll Behavior - Full Height */}
      <section style={{ 
        height: '100vh', 
        background: 'linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), url("/images/venue/barn-exterior-full-deck-view-evening.jpg") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white'
      }}>
        <div className="romantic-overlay"></div>
        <div className="content-wrapper" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}>
            <div style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: '1.75rem', 
              color: 'var(--champagne-gold)', 
              marginBottom: '1rem' 
            }}>
              Navigation Demo
            </div>
            <h1 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              lineHeight: '1.1', 
              marginBottom: '2rem',
              fontWeight: '400'
            }}>
              Interactive Menu<br />
              <span style={{ color: 'var(--champagne-gold)' }}>System</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.8', 
              opacity: '0.95',
              marginBottom: '3rem'
            }}>
              Experience the sophisticated navigation design with transparent-to-solid header transitions, 
              elegant dropdown menus, and responsive hover effects that define the user experience.
            </p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--champagne-gold)' }}>Interactive Features:</h3>
              <ul style={{ 
                listStyle: 'none', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem',
                textAlign: 'left'
              }}>
                <li style={{ opacity: 0.9 }}>• Scroll-triggered background change</li>
                <li style={{ opacity: 0.9 }}>• Hover animations on menu items</li>
                <li style={{ opacity: 0.9 }}>• Dropdown menu interactions</li>
                <li style={{ opacity: 0.9 }}>• Responsive design adaptation</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'var(--cream-pearl)',
          animation: 'fadeInUp 1.8s ease-out'
        }}>
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Scroll to see header transform</span>
          <div style={{ 
            fontSize: '1.5rem', 
            animation: 'bounce 2s infinite',
            marginTop: '0.5rem'
          }}>↓</div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Navigation Menu Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML and CSS implementation of the navigation header above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- Header/Navigation Section -->
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
          <li><a href="/events">Events</a></li>
          <li><a href="/vendor-list">Vendor List</a></li>
          <li className="dropdown">
            <a href="/property">The Property ▾</a>
            <ul className="dropdown-menu">
              <li><a href="/location">Location</a></li>
              <li><a href="/history">History</a></li>
            </ul>
          </li>
          <li><a href="/gallery">Gallery</a></li>
          <li className="dropdown">
            <a href="/testimonials">Testimonials & Features ▾</a>
            <ul className="dropdown-menu">
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/real-weddings">Real Weddings Blog</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>JavaScript Functionality</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Hook for Scroll Behavior
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

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function to remove listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // JSX header component here...
  )
}

// Vanilla JavaScript Alternative (for non-React projects)
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  
  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
});

// jQuery Alternative (if using jQuery)
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  });
});`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* Enhanced Header */
.header-enhanced {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  z-index: 900;
  transition: var(--transition);
  padding: 2rem 0;
}

.header-enhanced.scrolled {
  background: rgba(251, 247, 244, 0.98);
  backdrop-filter: blur(20px);
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
}

.header-enhanced.scrolled .nav-menu a {
  color: var(--deep-brown);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-circle {
  width: 50px;
  height: 50px;
  background: var(--dusty-rose);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.2rem;
}

.logo-text {
  line-height: 1.2;
}

.logo-name {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--warm-walnut);
}

.logo-tagline {
  font-family: var(--font-script);
  font-size: 0.875rem;
  color: var(--dusty-rose);
  font-style: italic;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: nowrap;
}

.nav-menu a {
  color: var(--warm-cream);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5rem 0;
  position: relative;
  transition: var(--transition);
  text-decoration: none;
}

.nav-menu a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--dusty-rose);
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}

/* Dropdown Navigation */
.nav-menu .dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(251, 247, 244, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  padding: 1rem 0;
  min-width: 220px;
  box-shadow: 0 8px 24px rgba(31, 29, 26, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  list-style: none;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: var(--deep-brown) !important;
  font-size: 0.875rem;
  text-transform: none;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.dropdown-menu a::after {
  display: none;
}

.dropdown-menu a:hover {
  background: var(--dusty-rose);
  color: white !important;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .header-content {
    justify-content: center;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}