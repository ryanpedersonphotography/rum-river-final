import React from 'react';

/**
 * FloatingCTADemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the floating CTA button demo.
 * Features:
 * - Minimal JavaScript (working scroll detection for animations)
 * - No external dependencies or navigation
 * - Clean, readable structure
 * - All CSS inline for easy reading
 * - Complete floating CTA system with working animations
 * - Matches hero-demo-standalone format exactly
 */
export default function FloatingCTADemoStandalone() {
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
        /* Design Tokens */
        :root {
          --color-base-romantic-ivory: #FBF8F4;
          --color-base-dusty-rose: #9D6B7B;
          --color-base-sage-whisper: #9CAA9E;
          --color-base-warm-walnut: #6B4E3D;
          --color-base-champagne-gold: #E4C896;
          --color-base-blush-pink: #F4E4E1;
          --color-base-deep-forest: #3A4A3C;
          --color-base-cream-pearl: #FFFCF8;
          --color-base-muted-mauve: #A08A85;
          --color-base-copper-glow: #C97D60;
          --color-base-warm-cream: #FAF6F2;
          --color-base-accent-gold: #D4A574;
          --color-base-deep-brown: #4A3426;
          --color-base-text-dark: #2C2416;
          --color-base-sage-green: #7A8B7F;
          --color-base-soft-white: #FEFDFB;
        }
        
        /* Floating CTA Base Styles */
        .floating-cta {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: var(--color-base-dusty-rose);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          font-family: inherit;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
        }
        
        /* Floating CTA Visible State */
        .floating-cta.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        
        /* Floating CTA Hover Effect */
        .floating-cta:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 35px rgba(157, 107, 123, 0.4);
          background: var(--color-base-warm-walnut);
        }
        
        .floating-cta.visible:hover {
          transform: translateY(-2px) scale(1.05);
        }
        
        /* Additional Floating CTAs for Demo */
        .floating-cta.secondary {
          background: var(--color-base-sage-whisper);
          bottom: 5.5rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
        }
        
        .floating-cta.accent {
          background: var(--color-base-champagne-gold);
          color: var(--color-base-warm-walnut);
          bottom: 9rem;
          padding: 1.25rem 2rem;
          font-size: 1.1rem;
        }
        
        /* Pulse Animation */
        .floating-cta.pulse {
          animation: ctaPulse 2s infinite;
        }
        
        @keyframes ctaPulse {
          0% { box-shadow: 0 10px 30px rgba(157, 107, 123, 0.3); }
          50% { box-shadow: 0 15px 40px rgba(157, 107, 123, 0.5); }
          100% { box-shadow: 0 10px 30px rgba(157, 107, 123, 0.3); }
        }
        
        /* Bounce Animation */
        .floating-cta.bounce {
          animation: ctaBounce 1s ease-in-out infinite;
        }
        
        @keyframes ctaBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        /* Fade In Animation */
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
        
        /* Hero Section Styles */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), url('/images/venue/barn-exterior-full-deck-view-evening.jpg') center/cover;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
        }
        
        .romantic-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q25 15 30 25 Q35 15 30 5' fill='%23D4A5A5' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        
        .hero-content {
          animation: fadeInUp 1.2s ease-out;
          max-width: 700px;
          position: relative;
        }
        
        .script-accent {
          font-family: 'Dancing Script', cursive;
          font-size: 1.5rem;
          color: var(--color-base-champagne-gold);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        
        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--color-base-cream-pearl);
          margin-bottom: 2rem;
        }
        
        .hero-accent {
          color: var(--color-base-champagne-gold);
        }
        
        .hero-lead {
          color: var(--color-base-cream-pearl);
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.8;
          font-size: 1.25rem;
          font-weight: 300;
          max-width: 600px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .romantic-button {
          background: var(--color-base-dusty-rose);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          border: 2px solid var(--color-base-dusty-rose);
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .romantic-button:hover {
          background: var(--color-base-champagne-gold);
          border-color: var(--color-base-champagne-gold);
          color: var(--color-base-warm-walnut);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
        }
        
        /* Documentation Sections */
        .doc-section {
          padding: 5rem 0;
        }
        
        .doc-section.light {
          background: var(--color-base-romantic-ivory);
        }
        
        .doc-section.medium {
          background: var(--color-base-blush-pink);
        }
        
        .doc-section.white {
          background: white;
        }
        
        /* Code Block Styling */
        .code-block {
          background: #2d3748;
          color: #e2e8f0;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 1.5rem 0;
        }
        
        /* Section Headers */
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: var(--color-base-dusty-rose);
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-subtitle {
          font-size: 1.5rem;
          color: var(--color-base-warm-walnut);
          margin-bottom: 1.5rem;
        }
        
        /* Demo Content */
        .demo-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        /* Scroll Demo Areas */
        .scroll-demo-area {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }
        
        .scroll-indicator {
          position: fixed;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          z-index: 999;
        }
      `}</style>

      {/* Live Floating CTA Buttons - With Working Animations */}
      <a href="#schedule-tour" className="floating-cta" id="primary-cta">
        📅 Schedule Your Tour
      </a>
      
      <a href="#request-info" className="floating-cta secondary" id="secondary-cta">
        📞 Request Info
      </a>
      
      <a href="#download-guide" className="floating-cta accent pulse" id="accent-cta">
        📋 Download Guide
      </a>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        📜 Scroll down to see floating CTAs appear and animate • CTAs show after scrolling 200px
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="script-accent">Where Calls-to-Action Come Alive</div>
            <h1 className="hero-headline">
              Floating CTA<br />
              <span className="hero-accent">Button System</span>
            </h1>
            <p className="hero-lead">
              Scroll-triggered floating call-to-action buttons with smooth animations, smart positioning, and elegant user experience design patterns.
            </p>
            <div className="hero-buttons">
              <a href="#scroll-demo" className="romantic-button">See Animations</a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Trigger Implementation */}
      <section className="doc-section light" id="scroll-demo">
        <div className="content-wrapper">
          <div className="demo-content">
            <h2 className="section-title">Scroll-Triggered Animation</h2>
            
            <h3 className="section-subtitle">React Implementation</h3>
            <div className="code-block">
{`// HomePage.jsx - Floating CTA with Scroll Detection
import { useState, useEffect } from 'react'
import Icon from '../components/Icon'

export default function HomePage() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        // Show CTA after scrolling past 50% of hero section
        const heroHalfway = heroSection.offsetHeight * 0.5
        setShowFloatingCTA(window.scrollY > heroHalfway)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating CTA Button */}
      <a 
        href="#lets-connect-form" 
        className={\`floating-cta \${showFloatingCTA ? 'visible' : 'hidden'}\`}
      >
        <Icon name="calendar" size="sm" color="white" />
        Schedule Your Tour
      </a>
      
      {/* Page content */}
      <section id="home" className="hero-enhanced">
        {/* Hero content */}
      </section>
    </>
  )
}`}
            </div>

            <h3 className="section-subtitle">CSS Animation System</h3>
            <div className="code-block">
{`/* Floating CTA Base Styles */
.floating-cta {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--color-base-dusty-rose);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Hidden by default */
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  pointer-events: none;
}

/* Visible State */
.floating-cta.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

/* Hover Effects */
.floating-cta:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 15px 35px rgba(157, 107, 123, 0.4);
  background: var(--color-base-warm-walnut);
}`}
            </div>
          </div>
        </div>
      </section>

      {/* Animation Variants */}
      <section className="doc-section white">
        <div className="content-wrapper">
          <div className="demo-content">
            <h2 className="section-title">Animation Variants</h2>
            
            <h3 className="section-subtitle">Pulse Effect</h3>
            <div className="code-block">
{`/* Pulse Animation for Attention */
.floating-cta.pulse {
  animation: ctaPulse 2s infinite;
}

@keyframes ctaPulse {
  0% { box-shadow: 0 10px 30px rgba(157, 107, 123, 0.3); }
  50% { box-shadow: 0 15px 40px rgba(157, 107, 123, 0.5); }
  100% { box-shadow: 0 10px 30px rgba(157, 107, 123, 0.3); }
}

/* Usage */
<a href="#action" class="floating-cta pulse">Download Guide</a>`}
            </div>

            <h3 className="section-subtitle">Bounce Animation</h3>
            <div className="code-block">
{`/* Bounce Animation for Playful Effect */
.floating-cta.bounce {
  animation: ctaBounce 1s ease-in-out infinite;
}

@keyframes ctaBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Combined with Visible State */
.floating-cta.visible.bounce {
  animation: ctaBounce 1s ease-in-out infinite;
}`}
            </div>

            <h3 className="section-subtitle">Stacked Positioning</h3>
            <div className="code-block">
{`/* Multiple CTAs Stacked Vertically */
.floating-cta.primary {
  bottom: 2rem;         /* Main CTA */
}

.floating-cta.secondary {
  bottom: 5.5rem;       /* Secondary CTA */
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  background: var(--color-base-sage-whisper);
}

.floating-cta.accent {
  bottom: 9rem;         /* Accent CTA */
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  background: var(--color-base-champagne-gold);
  color: var(--color-base-warm-walnut);
}`}
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Best Practices */}
      <section className="doc-section medium">
        <div className="content-wrapper">
          <div className="demo-content">
            <h2 className="section-title">Performance & Best Practices</h2>
            
            <h3 className="section-subtitle">Optimized Scroll Handling</h3>
            <div className="code-block">
{`// Throttled scroll events for better performance
import { throttle } from 'lodash'

useEffect(() => {
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    
    // Show CTA after scrolling 200px
    setShowFloatingCTA(scrollY > 200)
    
    // Hide near footer to avoid overlap
    const footer = document.querySelector('footer')
    if (footer) {
      const footerRect = footer.getBoundingClientRect()
      if (footerRect.top < windowHeight) {
        setShowFloatingCTA(false)
      }
    }
  }, 100) // Throttle to 100ms
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])`}
            </div>

            <h3 className="section-subtitle">Accessibility Features</h3>
            <div className="code-block">
{`/* Accessibility enhancements */
.floating-cta {
  /* Keyboard focus indicator */
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.floating-cta:focus {
  outline-color: var(--color-base-champagne-gold);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .floating-cta {
    transition: opacity 0.2s ease;
    animation: none;
  }
  
  .floating-cta.pulse,
  .floating-cta.bounce {
    animation: none;
  }
}

/* Screen reader support */
<a 
  href="#contact-form" 
  className="floating-cta visible"
  aria-label="Schedule your wedding venue tour - opens contact form"
>
  📅 Schedule Your Tour
</a>`}
            </div>

            <h3 className="section-subtitle">Mobile Optimization</h3>
            <div className="code-block">
{`/* Mobile responsive positioning */
@media (max-width: 768px) {
  .floating-cta {
    bottom: 1rem;
    right: 1rem;
    padding: 0.875rem 1.25rem;
    font-size: 0.875rem;
    
    /* Larger touch target */
    min-width: 44px;
    min-height: 44px;
  }
  
  /* Stack vertically with smaller gaps */
  .floating-cta.secondary {
    bottom: 4rem;
  }
  
  .floating-cta.accent {
    bottom: 6.5rem;
  }
}

/* Safe area for devices with notches */
@supports (bottom: env(safe-area-inset-bottom)) {
  .floating-cta {
    bottom: calc(2rem + env(safe-area-inset-bottom));
  }
}`}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Integration */}
      <section className="doc-section light">
        <div className="content-wrapper">
          <div className="demo-content">
            <h2 className="section-title">Testing & Integration</h2>
            
            <h3 className="section-subtitle">Cypress Testing Examples</h3>
            <div className="code-block">
{`// Floating CTA behavior testing
describe('Floating CTA', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be hidden initially', () => {
    cy.get('.floating-cta').should('not.have.class', 'visible')
    cy.get('.floating-cta').should('have.css', 'opacity', '0')
  })

  it('should appear after scrolling', () => {
    cy.scrollTo(0, 300)
    cy.get('.floating-cta').should('have.class', 'visible')
    cy.get('.floating-cta').should('have.css', 'opacity', '1')
  })

  it('should navigate to contact form on click', () => {
    cy.scrollTo(0, 300)
    cy.get('.floating-cta').click()
    cy.url().should('include', '#contact-form')
  })

  it('should have pulse animation when specified', () => {
    cy.get('.floating-cta.pulse')
      .should('have.css', 'animation-name', 'ctaPulse')
  })
})`}
            </div>

            <h3 className="section-subtitle">Performance Monitoring</h3>
            <div className="code-block">
{`// Performance metrics to track
const performanceMetrics = {
  // Scroll event frequency
  scrollEvents: 0,
  
  // Animation frame drops
  frameDrops: 0,
  
  // Memory usage
  memoryUsage: performance.memory?.usedJSHeapSize || 0,
  
  // Paint timings
  paintTiming: performance.getEntriesByType('paint')
}

// Monitor scroll performance
let scrollEventCount = 0
window.addEventListener('scroll', () => {
  scrollEventCount++
  
  // Log every 100 scroll events
  if (scrollEventCount % 100 === 0) {
    console.log('Scroll events:', scrollEventCount)
    console.log('Memory usage:', performance.memory?.usedJSHeapSize)
  }
})`}
            </div>
          </div>
        </div>
      </section>

      {/* Large Scroll Demo Area */}
      <section className="scroll-demo-area" style={{ background: 'linear-gradient(135deg, #FAF6F2 0%, #F4E4E1 100%)' }}>
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            color: '#9D6B7B',
            marginBottom: '1rem'
          }}>
            Keep Scrolling!
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6B4E3D',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Notice how the floating CTAs on the right become visible and interactive as you scroll down the page. 
            Each has different styling and animation effects.
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="scroll-demo-area" style={{ background: 'linear-gradient(135deg, #E4C896 0%, #D4A574 100%)' }}>
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            color: '#4A3426',
            marginBottom: '1rem'
          }}>
            Floating CTAs Active!
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6B4E3D',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            The floating CTAs should now be fully visible and interactive. Try hovering over them to see the hover effects, 
            and notice the pulse animation on the bottom CTA.
          </p>
        </div>
      </section>

      {/* Working Scroll Detection Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Working scroll detection for floating CTAs
          document.addEventListener('DOMContentLoaded', function() {
            const primaryCTA = document.getElementById('primary-cta')
            const secondaryCTA = document.getElementById('secondary-cta') 
            const accentCTA = document.getElementById('accent-cta')
            
            const handleScroll = () => {
              const scrollY = window.scrollY
              
              // Show CTAs after scrolling 200px
              if (scrollY > 200) {
                if (primaryCTA) primaryCTA.classList.add('visible')
                if (secondaryCTA) secondaryCTA.classList.add('visible')
                if (accentCTA) accentCTA.classList.add('visible')
              } else {
                if (primaryCTA) primaryCTA.classList.remove('visible')
                if (secondaryCTA) secondaryCTA.classList.remove('visible')
                if (accentCTA) accentCTA.classList.remove('visible')
              }
            }
            
            // Throttle scroll events for better performance
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
            
            window.addEventListener('scroll', throttledScroll, { passive: true })
            
            // Initial check
            handleScroll()
          })
        `
      }} />
    </div>
  );
}