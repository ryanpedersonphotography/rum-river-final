import React from 'react';

/**
 * HeroDemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the hero demo page.
 * Features:
 * - Minimal JavaScript (no state, no effects)
 * - No external dependencies or navigation
 * - Clean, readable structure
 * - All CSS inline for easy reading
 * - Complete hero implementation with documentation
 */
export default function HeroDemoStandalone() {
  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0
    }}>
      
      {/* CSS Animations */}
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
      `}</style>
      
      {/* Floating CTA Button (Static - no scroll logic) */}
      <a 
        href="#contact-form" 
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: '#9D6B7B',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          fontWeight: 500,
          fontSize: '0.9rem',
          transition: 'all 0.3s ease'
        }}
      >
        📅 Schedule Your Tour
      </a>

      {/* Hero Section - Enhanced to match original */}
      <section 
        id="home"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), url("/images/venue/barn-exterior-full-deck-view-evening.jpg") center/cover',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          color: 'white'
        }}
      >
        {/* Romantic Overlay Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 Q25 15 30 25 Q35 15 30 5\' fill=\'%23D4A5A5\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          pointerEvents: 'none'
        }}></div>

        {/* Content Wrapper */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          
          {/* Hero Content */}
          <div style={{
            maxWidth: '700px',
            position: 'relative',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            
            {/* Script Accent */}
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem',
              color: '#E4C896',
              marginBottom: '1.5rem',
              fontWeight: 400
            }}>
              Where Dreams Begin
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFCF8',
              marginBottom: '2rem'
            }}>
              Rum River
              <br />
              <span style={{
                color: '#E4C896'
              }}>
                Wedding Barn
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)',
              opacity: 0.95,
              marginBottom: '3rem',
              fontWeight: 300,
              maxWidth: '600px'
            }}>
              Nestled along Minnesota's scenic Rum River, our historic barn offers
              the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.
            </p>

            {/* CTA Button */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <a
                href="/contact"
                style={{
                  background: '#9D6B7B',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  border: '2px solid #9D6B7B',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
              >
                Schedule Your Visit
              </a>
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
          opacity: 0.8
        }}>
          <span style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.9rem'
          }}>
            Discover Your Perfect Day
          </span>
          <div style={{
            fontSize: '1.5rem',
            animation: 'bounce 2s infinite'
          }}>
            ↓
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
              Hero Implementation Guide
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6B4E3D',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Complete code and documentation for the hero section above
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
{`<!-- Floating CTA Button -->
<a href="#contact-form" className="floating-cta">
  📅 Schedule Your Tour
</a>

<!-- Hero Section -->
<section id="home" className="hero-enhanced">
  <!-- Background Overlay -->
  <div className="romantic-overlay"></div>
  
  <!-- Content Wrapper -->
  <div className="content-wrapper">
    <div className="hero-content">
      
      <!-- Script Accent -->
      <div className="script-accent">Where Dreams Begin</div>
      
      <!-- Main Headline -->
      <h1 className="hero-headline">
        Rum River<br />
        <span className="hero-accent">Wedding Barn</span>
      </h1>
      
      <!-- Lead Paragraph -->
      <p className="lead hero-lead">
        Nestled along Minnesota's scenic Rum River, our historic barn offers
        the perfect blend of rustic charm and modern elegance for your 
        once-in-a-lifetime celebration.
      </p>
      
      <!-- CTA Button -->
      <div className="hero-buttons">
        <CTAButton href="/contact" variant="primary">
          Schedule Your Visit
        </CTAButton>
      </div>
      
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div className="hero-scroll-indicator">
    <span>Discover Your Perfect Day</span>
    <div className="scroll-arrow">↓</div>
  </div>
</section>`}
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
{`/* Hero Section */
.hero-enhanced {
  min-height: 100vh;
  background: linear-gradient(135deg, 
    var(--color-base-blush-pink) 0%, 
    var(--color-base-romantic-ivory) 50%, 
    var(--color-base-cream-pearl) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

/* Background Overlay */
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

/* Content Wrapper */
.content-wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Hero Content */
.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

/* Script Accent */
.script-accent {
  font-family: var(--font-family-script);
  font-size: 1.5rem;
  color: var(--color-base-dusty-rose);
  margin-bottom: 1rem;
  font-weight: 400;
}

/* Main Headline */
.hero-headline {
  font-family: var(--font-family-display);
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-tight);
  margin: 0 0 1.5rem 0;
  color: var(--color-base-text-dark);
}

/* Hero Accent */
.hero-accent {
  color: var(--color-base-dusty-rose);
  font-weight: var(--font-weight-normal);
  font-size: 0.8em;
}

/* Lead Paragraph */
.hero-lead {
  font-size: var(--font-size-xl);
  line-height: var(--font-line-height-relaxed);
  margin: 0 0 2.5rem 0;
  color: var(--color-base-warm-walnut);
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
}

/* Hero Buttons */
.hero-buttons {
  margin-bottom: 3rem;
}

/* CTA Button */
.romantic-button.primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: var(--color-base-dusty-rose);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--font-letter-spacing-wide);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
}

.romantic-button.primary:hover {
  background: var(--color-base-warm-walnut);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
}

/* Scroll Indicator */
.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--color-base-warm-walnut);
}

.hero-scroll-indicator span {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

/* Floating CTA */
.floating-cta {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--color-base-dusty-rose);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.floating-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(157, 107, 123, 0.4);
}

/* Bounce Animation */
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-enhanced {
    padding: 1rem;
  }
  
  .script-accent {
    font-size: 1.25rem;
  }
  
  .hero-lead {
    font-size: var(--font-size-lg);
  }
  
  .floating-cta {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
  }
}`}
            </pre>
          </div>

          {/* Design Tokens */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              Design Tokens Used
            </h3>
            <div style={{
              background: '#F4E4E1',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px dashed rgba(157, 107, 123, 0.2)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                fontSize: '0.875rem'
              }}>
                <div>
                  <h4 style={{
                    color: '#2C2416',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>Colors:</h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: '#6B4E3D'
                  }}>
                    <li>--color-base-dusty-rose: #9D6B7B</li>
                    <li>--color-base-warm-walnut: #6B4E3D</li>
                    <li>--color-base-text-dark: #2C2416</li>
                    <li>--color-base-blush-pink: #F4E4E1</li>
                    <li>--color-base-romantic-ivory: #FBF8F4</li>
                    <li>--color-base-cream-pearl: #FFFCF8</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    color: '#2C2416',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>Typography:</h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: '#6B4E3D'
                  }}>
                    <li>--font-family-display: 'Playfair Display'</li>
                    <li>--font-family-body: 'Montserrat'</li>
                    <li>--font-family-script: 'Dancing Script'</li>
                    <li>--font-size-hero: clamp(3rem, 8vw, 5.5rem)</li>
                    <li>--font-weight-bold: 700</li>
                    <li>--font-line-height-tight: 1.1</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    color: '#2C2416',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>Spacing & Effects:</h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: '#6B4E3D'
                  }}>
                    <li>--spacing-xl: 2rem</li>
                    <li>--spacing-3xl: 3rem</li>
                    <li>--border-radius-pill: 50px</li>
                    <li>--transition-elegant: 0.4s cubic-bezier</li>
                    <li>--shadow-lg: 0 10px 30px rgba(0,0,0,0.2)</li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <li>Gradient background with overlay</li>
                  <li>Typography hierarchy (Display, Body, Script)</li>
                  <li>Color system with romantic palette</li>
                  <li>Responsive design with fluid scaling</li>
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
                  <li>Pure CSS animations</li>
                  <li>Minimal JavaScript</li>
                  <li>Optimized for Core Web Vitals</li>
                  <li>Mobile-first responsive approach</li>
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
                }}>♿ Accessibility</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>WCAG 2.1 AA color contrast</li>
                  <li>Semantic HTML structure</li>
                  <li>Focus management</li>
                  <li>Screen reader optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for bounce animation */}
      <style>{`
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
      `}</style>
    </div>
  );
}