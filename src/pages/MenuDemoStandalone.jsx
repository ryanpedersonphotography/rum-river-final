import React, { useEffect } from 'react';

/**
 * MenuDemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the menu demo page.
 * Features:
 * - Scroll transition from transparent to white background
 * - Matches main site header functionality exactly
 * - Clean, readable structure
 * - All CSS inline for easy reading
 * - Complete menu/header implementation with documentation
 */
export default function MenuDemoStandalone() {
  useEffect(() => {
    let isHeaderSolid = false
    let isAnimating = false
    
    const handleScroll = () => {
      if (isAnimating) return
      
      const header = document.getElementById('header')
      if (!header) return
      
      const shouldShowSolid = window.scrollY > 100
      
      if (shouldShowSolid && !isHeaderSolid) {
        // Transition to solid background
        console.log('FLYING DOWN')
        isAnimating = true
        isHeaderSolid = true
        
        header.className = 'header-enhanced scrolled fly-down'
        
        setTimeout(() => {
          if (isHeaderSolid) {
            header.className = 'header-enhanced scrolled settled'
            isAnimating = false
          }
        }, 800)
        
      } else if (!shouldShowSolid && isHeaderSolid) {
        // Transition back to transparent
        console.log('FLYING UP')
        isAnimating = true
        isHeaderSolid = false
        
        header.className = 'header-enhanced scrolled fly-up'
        
        setTimeout(() => {
          if (!isHeaderSolid) {
            header.className = 'header-enhanced'
            isAnimating = false
          }
        }, 800)
      }
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Set initial state
    const header = document.getElementById('header')
    if (header) {
      if (window.scrollY <= 100) {
        header.className = 'header-enhanced'  // Transparent and visible
        isHeaderSolid = false
      } else {
        header.className = 'header-enhanced scrolled settled'  // Solid background
        isHeaderSolid = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])
  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0
    }}>
      
      {/* CSS Animations and Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes flyDown {
          0% {
            transform: translateY(0);
            opacity: 1;
            background: transparent;
          }
          30% {
            background: rgba(251, 247, 244, 0.3);
            backdrop-filter: blur(5px);
          }
          60% {
            transform: translateY(-10px);
            background: rgba(251, 247, 244, 0.7);
            backdrop-filter: blur(15px);
            box-shadow: 0 2px 10px rgba(31, 29, 26, 0.08);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            background: rgba(251, 247, 244, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
          }
        }
        
        @keyframes flyUp {
          0% {
            transform: translateY(0);
            opacity: 1;
            background: rgba(251, 247, 244, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
          }
          40% {
            transform: translateY(-10px);
            background: rgba(251, 247, 244, 0.7);
            backdrop-filter: blur(15px);
            box-shadow: 0 2px 10px rgba(31, 29, 26, 0.08);
          }
          70% {
            background: rgba(251, 247, 244, 0.3);
            backdrop-filter: blur(5px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            background: transparent;
            backdrop-filter: none;
            box-shadow: none;
          }
        }
        
        @keyframes smoothTextToWhite {
          0% { color: #FAF6F2; }
          100% { color: #4A3426; }
        }
        
        @keyframes smoothTextToTransparent {
          0% { color: #4A3426; }
          100% { color: #FAF6F2; }
        }
        
        @keyframes smoothLogo1ToWhite {
          0% { 
            color: #9D6B7B;
          }
          100% { 
            color: #4A3426;
          }
        }
        
        @keyframes smoothLogo1ToTransparent {
          0% { 
            color: #4A3426;
          }
          100% { 
            color: #9D6B7B;
          }
        }
        
        @keyframes smoothLogo2ToWhite {
          0% { 
            color: #D4A574;
          }
          100% { 
            color: #4A3426;
          }
        }
        
        @keyframes smoothLogo2ToTransparent {
          0% { 
            color: #4A3426;
          }
          100% { 
            color: #D4A574;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
          }
          50% {
            box-shadow: 0 6px 24px rgba(31, 29, 26, 0.18);
          }
        }
        
        /* Enhanced Header - Flying Animation */
        .header-enhanced {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: transparent;
          z-index: 900;
          padding: 2rem 0;
          transform: translateY(0);
          opacity: 1;
          transition: none;
        }
        
        .header-enhanced.scrolled {
          background: rgba(251, 247, 244, 0.98);
          backdrop-filter: blur(20px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
          transform: translateY(0);
          opacity: 1;
        }
        
        .header-enhanced.fly-down {
          animation: flyDown 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .header-enhanced.fly-down .nav-menu a {
          animation: smoothTextToWhite 0.8s ease-out forwards;
        }
        
        .header-enhanced.fly-down .logo-line-1 {
          animation: smoothLogo1ToWhite 0.8s ease-out forwards;
        }
        
        .header-enhanced.fly-down .logo-line-2 {
          animation: smoothLogo2ToWhite 0.8s ease-out forwards;
        }
        
        .header-enhanced.fly-up {
          animation: flyUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .header-enhanced.fly-up .nav-menu a {
          animation: smoothTextToTransparent 0.8s ease-out forwards;
        }
        
        .header-enhanced.fly-up .logo-line-1 {
          animation: smoothLogo1ToTransparent 0.8s ease-out forwards;
        }
        
        .header-enhanced.fly-up .logo-line-2 {
          animation: smoothLogo2ToTransparent 0.8s ease-out forwards;
        }
        
        .header-enhanced.scrolled.settled {
          animation: glow 3s ease-in-out infinite;
        }
        
        .header-enhanced.scrolled .nav-menu a {
          color: #4A3426;
          animation: fadeInUp 0.8s ease-out;
        }
        
        .header-enhanced.scrolled .logo-line-1 {
          color: #9D6B7B;
          animation: scaleIn 0.6s ease-out;
        }
        
        .header-enhanced.scrolled .logo-line-2 {
          color: #D4A574;
          animation: scaleIn 0.7s ease-out;
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
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-text {
          line-height: 1.2;
        }
        
        .logo-line-1 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #9D6B7B;
          letter-spacing: 0.02em;
        }
        
        .logo-line-2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #D4A574;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: nowrap;
          margin: 0;
          padding: 0;
        }
        
        .nav-menu a {
          color: #FAF6F2;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.5rem 0;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          transform: translateY(0);
        }
        
        .nav-menu li {
          animation: fadeInUp 1s ease-out;
        }
        
        .nav-menu li:nth-child(1) { animation-delay: 0.1s; }
        .nav-menu li:nth-child(2) { animation-delay: 0.2s; }
        .nav-menu li:nth-child(3) { animation-delay: 0.3s; }
        .nav-menu li:nth-child(4) { animation-delay: 0.4s; }
        .nav-menu li:nth-child(5) { animation-delay: 0.5s; }
        .nav-menu li:nth-child(6) { animation-delay: 0.6s; }
        .nav-menu li:nth-child(7) { animation-delay: 0.7s; }
        
        .nav-menu a::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #E4C896;
          transition: width 0.3s ease;
        }
        
        .nav-menu a:hover {
          color: #E4C896;
          transform: translateY(-2px);
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
          transform: translateY(-10px) scale(0.95);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          list-style: none;
          margin: 0;
          z-index: 1000;
        }
        
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          animation: scaleIn 0.4s ease-out;
        }
        
        .dropdown-menu li {
          padding: 0;
          margin: 0;
        }
        
        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #4A3426 !important;
          font-size: 0.875rem;
          text-transform: none;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        
        .dropdown-menu a::after {
          display: none;
        }
        
        .dropdown-menu a:hover {
          background: #9D6B7B;
          color: white !important;
          transform: translateX(5px);
        }
        
        /* Content wrapper */
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        /* Romantic overlay */
        .romantic-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, 
            rgba(157, 107, 123, 0.1) 0%, 
            rgba(157, 107, 123, 0.05) 50%, 
            transparent 100%
          );
          pointer-events: none;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
          
          .header-content {
            justify-content: center;
          }
          
          .logo-name {
            font-size: 1rem;
          }
          
          .logo-tagline {
            font-size: 0.75rem;
          }
        }
      `}</style>

      {/* Header/Navigation Section */}
      <header id="header" className="header-enhanced">
        <div className="content-wrapper">
          <div className="header-content">
            <a href="/" className="logo-wrapper">
              <div className="logo-text">
                <div className="logo-line-1">Rum River</div>
                <div className="logo-line-2">Wedding Barn</div>
              </div>
            </a>
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
      </header>

      {/* Dark Hero Background */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), url("/images/venue/barn-exterior-full-deck-view-evening.jpg") center/cover',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white'
      }}>
        <div className="romantic-overlay"></div>
        
        {/* Content Wrapper */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Hero Content */}
          <div style={{
            maxWidth: '800px',
            textAlign: 'center',
            margin: '0 auto',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            
            {/* Script Accent */}
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: '#E4C896',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              Navigation Demo
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '2rem'
            }}>
              Interactive Menu
              <br />
              <span style={{ color: '#E4C896' }}>System</span>
            </h1>

            {/* Lead Paragraph */}
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              opacity: 0.95,
              marginBottom: '3rem'
            }}>
              Experience the sophisticated navigation design with scroll-triggered background transitions, 
              elegant dropdown menus, and responsive hover effects that define the user experience.
            </p>

            {/* Interactive Features */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)',
              marginBottom: '3rem'
            }}>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: '#E4C896',
                fontFamily: "'Playfair Display', serif"
              }}>
                Interactive Features:
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem',
                textAlign: 'left',
                margin: 0,
                padding: 0
              }}>
                <li style={{ opacity: 0.9 }}>• Scroll transition from transparent to white</li>
                <li style={{ opacity: 0.9 }}>• Hover animations on menu items</li>
                <li style={{ opacity: 0.9 }}>• Dropdown menu interactions</li>
                <li style={{ opacity: 0.9 }}>• Responsive design adaptation</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#FFFCF8',
          animation: 'fadeInUp 1.8s ease-out'
        }}>
          <span style={{ 
            fontSize: '0.9rem', 
            opacity: 0.8,
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            Scroll to see background transition
          </span>
          <div style={{ 
            fontSize: '1.5rem', 
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>
      </section>

      {/* Additional Content to Enable Scrolling */}
      <section style={{
        background: 'linear-gradient(to bottom, #FEFDFB, #F4E4E1)',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            color: '#2C2416',
            marginBottom: '2rem'
          }}>
            Scroll Transition Demo
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6B4E3D',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            The header starts transparent and visible. Scroll down to see it transition to a solid white 
            background with elegant animations. Scroll back up to see it return to transparent!
          </p>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              ✨ Transition Features
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#6B4E3D'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>🔄 Smooth background fade from transparent to white</li>
              <li style={{ marginBottom: '0.5rem' }}>🌟 Backdrop blur effect when scrolled</li>
              <li style={{ marginBottom: '0.5rem' }}>📏 Padding reduction for compact scrolled state</li>
              <li style={{ marginBottom: '0.5rem' }}>🎨 Text color changes for readability</li>
              <li style={{ marginBottom: '0.5rem' }}>💫 Shadow appears on scroll for depth</li>
              <li style={{ marginBottom: '0.5rem' }}>🚁 Dramatic fly-down animation from above</li>
              <li style={{ marginBottom: '0.5rem' }}>🎭 Subtle glow pulsing effect when settled</li>
              <li style={{ marginBottom: '0.5rem' }}>⬆️ Smooth retraction maintaining background during exit</li>
              <li style={{ marginBottom: '0.5rem' }}>🚀 Menu items lift on hover</li>
              <li style={{ marginBottom: '0.5rem' }}>🎪 Enhanced dropdown scaling animation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{
        background: '#FEFDFB',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              color: '#2C2416',
              marginBottom: '1rem'
            }}>
              Navigation Menu Implementation
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6B4E3D',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Complete code and documentation for the scroll-transition navigation header above
            </p>
          </div>

          {/* HTML Structure */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              HTML Structure
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`<!-- Header/Navigation Section -->
<header id="header" className="header-enhanced">
  <div className="content-wrapper">
    <div className="header-content">
      <a href="/" className="logo-wrapper">
        <div className="logo-text">
          <div className="logo-line-1">Rum River</div>
          <div className="logo-line-2">Wedding Barn</div>
        </div>
      </a>
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

          {/* JavaScript Functionality */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              JavaScript Functionality
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`// Header Component with Flying Animation Scroll Transition
import React, { useEffect } from 'react'

export default function MenuDemoStandalone() {
  useEffect(() => {
    let isHeaderSolid = false
    let isAnimating = false
    
    const handleScroll = () => {
      if (isAnimating) return
      
      const header = document.getElementById('header')
      if (!header) return
      
      const shouldShowSolid = window.scrollY > 100
      
      if (shouldShowSolid && !isHeaderSolid) {
        // Transition to solid background with flying animation
        isAnimating = true
        isHeaderSolid = true
        
        header.className = 'header-enhanced scrolled fly-down'
        
        setTimeout(() => {
          if (isHeaderSolid) {
            header.className = 'header-enhanced scrolled settled'
            isAnimating = false
          }
        }, 800)
        
      } else if (!shouldShowSolid && isHeaderSolid) {
        // Transition back to transparent with flying animation
        isAnimating = true
        isHeaderSolid = false
        
        header.className = 'header-enhanced scrolled fly-up'
        
        setTimeout(() => {
          if (!isHeaderSolid) {
            header.className = 'header-enhanced'
            isAnimating = false
          }
        }, 800)
      }
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Set initial state based on current scroll position
    const header = document.getElementById('header')
    if (header) {
      if (window.scrollY <= 100) {
        header.className = 'header-enhanced'  // Transparent and visible
        isHeaderSolid = false
      } else {
        header.className = 'header-enhanced scrolled settled'  // Solid background
        isHeaderSolid = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  return (
    <header id="header" className="header-enhanced">
      <div className="content-wrapper">
        <div className="header-content">
          <a href="/" className="logo-wrapper">
            <div className="logo-text">
              <div className="logo-line-1">Rum River</div>
              <div className="logo-line-2">Wedding Barn</div>
            </div>
          </a>
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
    </header>
  )
}`}
            </pre>
          </div>

          {/* CSS Styles */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              CSS Styles
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`/* Flying Animation Keyframes */
@keyframes flyDown {
  0% {
    transform: translateY(0);
    opacity: 1;
    background: transparent;
  }
  30% {
    background: rgba(251, 247, 244, 0.3);
    backdrop-filter: blur(5px);
  }
  60% {
    transform: translateY(-10px);
    background: rgba(251, 247, 244, 0.7);
    backdrop-filter: blur(15px);
    box-shadow: 0 2px 10px rgba(31, 29, 26, 0.08);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    background: rgba(251, 247, 244, 0.98);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
  }
}

@keyframes flyUp {
  0% {
    transform: translateY(0);
    opacity: 1;
    background: rgba(251, 247, 244, 0.98);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
  }
  40% {
    transform: translateY(-10px);
    background: rgba(251, 247, 244, 0.7);
    backdrop-filter: blur(15px);
    box-shadow: 0 2px 10px rgba(31, 29, 26, 0.08);
  }
  70% {
    background: rgba(251, 247, 244, 0.3);
    backdrop-filter: blur(5px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }
}

/* Smooth Text Color Transitions */
@keyframes smoothTextToWhite {
  0% { color: #FAF6F2; }
  100% { color: #4A3426; }
}

@keyframes smoothTextToTransparent {
  0% { color: #4A3426; }
  100% { color: #FAF6F2; }
}

@keyframes smoothLogo1ToWhite {
  0% { color: #9D6B7B; }
  100% { color: #4A3426; }
}

@keyframes smoothLogo1ToTransparent {
  0% { color: #4A3426; }
  100% { color: #9D6B7B; }
}

@keyframes smoothLogo2ToWhite {
  0% { color: #D4A574; }
  100% { color: #4A3426; }
}

@keyframes smoothLogo2ToTransparent {
  0% { color: #4A3426; }
  100% { color: #D4A574; }
}

/* Enhanced Header - Flying Animation */
.header-enhanced {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  z-index: 900;
  padding: 2rem 0;
  transform: translateY(0);
  opacity: 1;
  transition: none;
}

.header-enhanced.scrolled {
  background: rgba(251, 247, 244, 0.98);
  backdrop-filter: blur(20px);
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(31, 29, 26, 0.12);
  transform: translateY(0);
  opacity: 1;
}

.header-enhanced.fly-down {
  animation: flyDown 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.header-enhanced.fly-down .nav-menu a {
  animation: smoothTextToWhite 0.8s ease-out forwards;
}

.header-enhanced.fly-down .logo-line-1 {
  animation: smoothLogo1ToWhite 0.8s ease-out forwards;
}

.header-enhanced.fly-down .logo-line-2 {
  animation: smoothLogo2ToWhite 0.8s ease-out forwards;
}

.header-enhanced.fly-up {
  animation: flyUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.header-enhanced.fly-up .nav-menu a {
  animation: smoothTextToTransparent 0.8s ease-out forwards;
}

.header-enhanced.fly-up .logo-line-1 {
  animation: smoothLogo1ToTransparent 0.8s ease-out forwards;
}

.header-enhanced.fly-up .logo-line-2 {
  animation: smoothLogo2ToTransparent 0.8s ease-out forwards;
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
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-text {
  line-height: 1.2;
}

.logo-line-1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #9D6B7B;
  letter-spacing: 0.02em;
}

.logo-line-2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #D4A574;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: #FAF6F2;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.nav-menu a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #E4C896;
  transition: width 0.3s ease;
}

.nav-menu a:hover {
  color: #E4C896;
  transform: translateY(-2px);
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
  transform: translateY(-10px) scale(0.95);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  list-style: none;
  margin: 0;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #4A3426 !important;
  font-size: 0.875rem;
  text-transform: none;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background: #9D6B7B;
  color: white !important;
  transform: translateX(5px);
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

          {/* Component Features */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              Key Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>🎨 Visual Design</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Scroll-triggered background transition</li>
                  <li>Elegant typography hierarchy</li>
                  <li>Smooth hover animations with micro-interactions</li>
                  <li>Clean logo and navigation layout</li>
                  <li>Staggered menu item animations</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>⚡ Performance</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Hardware-accelerated transforms</li>
                  <li>Optimized scroll event handling</li>
                  <li>Hardware-accelerated CSS transitions</li>
                  <li>Minimal JavaScript for scroll detection</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>📱 Responsive Design</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Mobile-first approach</li>
                  <li>Adaptive navigation collapse</li>
                  <li>Touch-friendly interactions</li>
                  <li>Flexible grid layouts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}