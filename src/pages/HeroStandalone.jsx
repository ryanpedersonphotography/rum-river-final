import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

export default function HeroStandalone() {
  return (
    <>
      {/* Floating CTA Button */}
      <a href="#lets-connect-form" className="floating-cta">
        <Icon name="calendar" size="sm" color="white" />
        Schedule Your Tour
      </a>

      {/* Hero Section - Enhanced */}
      <section id="home" className="hero-enhanced">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="script-accent">Where Dreams Begin</div>
            <h1 className="hero-headline">
              Rum River<br />
              <span className="hero-accent">Wedding Barn</span>
            </h1>
            <p className="lead hero-lead">
              Nestled along Minnesota's scenic Rum River, our historic barn offers
              the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.
            </p>
            <div className="hero-buttons">
              <CTAButton href="/contact" variant="primary">Schedule Your Visit</CTAButton>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover Your Perfect Day</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Hero Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML and CSS implementation of the hero section above</p>
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
{`<!-- Floating CTA Button -->
<a href="#lets-connect-form" className="floating-cta">
  <Icon name="calendar" size="sm" color="white" />
  Schedule Your Tour
</a>

<!-- Hero Section - Enhanced -->
<section id="home" className="hero-enhanced">
  <div className="romantic-overlay"></div>
  <div className="content-wrapper">
    <div className="hero-content">
      <div className="script-accent">Where Dreams Begin</div>
      <h1 className="hero-headline">
        Rum River<br />
        <span className="hero-accent">Wedding Barn</span>
      </h1>
      <p className="lead hero-lead">
        Nestled along Minnesota's scenic Rum River, our historic barn offers
        the perfect blend of rustic charm and modern elegance for your 
        once-in-a-lifetime celebration.
      </p>
      <div className="hero-buttons">
        <CTAButton href="/contact" variant="primary">
          Schedule Your Visit
        </CTAButton>
      </div>
    </div>
  </div>
  <div className="hero-scroll-indicator">
    <span>Discover Your Perfect Day</span>
    <div className="scroll-arrow">↓</div>
  </div>
</section>`}
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
{`/* Hero Section Enhanced */
.hero-enhanced {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), 
              url('/images/venue/barn-exterior-full-deck-view-evening.jpg') center/cover;
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

.hero-content {
  animation: fadeInUp 1.2s ease-out;
  max-width: 700px;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
}

.script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--champagne-gold);
  margin-bottom: 1rem;
  font-weight: 400;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

.hero-accent {
  color: var(--champagne-gold);
}

.hero-lead {
  color: var(--cream-pearl);
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.8;
  font-size: 1.25rem;
}

.hero-buttons {
  display: flex;
  gap: var(--rhythm-sm);
  margin-top: 2rem;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--cream-pearl);
  animation: fadeInUp 1.8s ease-out;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

.floating-cta {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--dusty-rose);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  box-shadow: 0 10px 30px rgba(212, 165, 165, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.floating-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(212, 165, 165, 0.4);
}

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
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}