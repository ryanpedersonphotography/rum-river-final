export default function SocialProofStandalone() {
  return (
    <>
      {/* ID: SOCIAL_PROOF_001 - Social Proof Quote */}
      <section id="social-proof" className="social-proof">
        <div className="container social-content">
          <div className="social-logos">
            <span className="social-logo">THE KNOT</span>
            <span className="social-logo">WEDDINGWIRE</span>
            <span className="social-logo">MARTHA STEWART</span>
            <span className="social-logo">MINNESOTA BRIDE</span>
          </div>
          <p className="social-text">
            "Rum River Barn isn't just a venue—it's <span className="highlight">where dreams come to life</span>.
            Their commitment to saying 'yes' to every couple's vision sets them apart as
            <span className="highlight"> Minnesota's most accommodating wedding destination</span>."
          </p>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Social Proof Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the social proof section above</p>
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
{`<!-- Social Proof Section -->
<section id="social-proof" className="social-proof">
  <div className="container social-content">
    <!-- Publication Logos -->
    <div className="social-logos">
      <span className="social-logo">THE KNOT</span>
      <span className="social-logo">WEDDINGWIRE</span>
      <span className="social-logo">MARTHA STEWART</span>
      <span className="social-logo">MINNESOTA BRIDE</span>
    </div>
    
    <!-- Testimonial Quote -->
    <p className="social-text">
      "Rum River Barn isn't just a venue—it's 
      <span className="highlight">where dreams come to life</span>.
      Their commitment to saying 'yes' to every couple's vision sets them apart as
      <span className="highlight"> Minnesota's most accommodating wedding destination</span>."
    </p>
  </div>
</section>`}
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
{`// React Component for Social Proof Section
import React from 'react'

// Social proof data structure
const socialProofData = {
  publications: [
    { name: "THE KNOT", url: "https://theknot.com" },
    { name: "WEDDINGWIRE", url: "https://weddingwire.com" },
    { name: "MARTHA STEWART", url: "https://marthastewartweddings.com" },
    { name: "MINNESOTA BRIDE", url: "https://minnesotabride.com" }
  ],
  testimonial: {
    quote: "Rum River Barn isn't just a venue—it's where dreams come to life. Their commitment to saying 'yes' to every couple's vision sets them apart as Minnesota's most accommodating wedding destination.",
    highlights: [
      "where dreams come to life",
      "Minnesota's most accommodating wedding destination"
    ],
    source: "Industry Recognition"
  }
}

export default function SocialProofSection() {
  const formatQuoteWithHighlights = (quote, highlights) => {
    let formattedQuote = quote
    
    highlights.forEach(highlight => {
      const regex = new RegExp(\`(\${highlight})\`, 'gi')
      formattedQuote = formattedQuote.replace(
        regex, 
        '<span class="highlight">$1</span>'
      )
    })
    
    return formattedQuote
  }

  return (
    <section className="social-proof">
      <div className="container social-content">
        {/* Publication Logos */}
        <div className="social-logos">
          {socialProofData.publications.map((publication, index) => (
            <span key={index} className="social-logo">
              {publication.name}
            </span>
          ))}
        </div>
        
        {/* Testimonial Quote */}
        <p 
          className="social-text"
          dangerouslySetInnerHTML={{
            __html: \`"\${formatQuoteWithHighlights(
              socialProofData.testimonial.quote, 
              socialProofData.testimonial.highlights
            )}"\`
          }}
        />
      </div>
    </section>
  )
}

// Alternative implementation with manual highlight spans
export function SocialProofAlternative() {
  return (
    <section className="social-proof">
      <div className="container social-content">
        <div className="social-logos">
          <span className="social-logo">THE KNOT</span>
          <span className="social-logo">WEDDINGWIRE</span>
          <span className="social-logo">MARTHA STEWART</span>
          <span className="social-logo">MINNESOTA BRIDE</span>
        </div>
        
        <p className="social-text">
          "Rum River Barn isn't just a venue—it's{' '}
          <span className="highlight">where dreams come to life</span>.
          Their commitment to saying 'yes' to every couple's vision sets them apart as{' '}
          <span className="highlight">Minnesota's most accommodating wedding destination</span>."
        </p>
      </div>
    </section>
  )
}

// Animation on scroll (optional enhancement)
import { useEffect } from 'react'

export function SocialProofWithAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.3 }
    )

    const socialSection = document.querySelector('.social-proof')
    if (socialSection) {
      observer.observe(socialSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="social-proof fade-up">
      <div className="container social-content">
        <div className="social-logos stagger-animation">
          <span className="social-logo" style={{ animationDelay: '0.1s' }}>THE KNOT</span>
          <span className="social-logo" style={{ animationDelay: '0.2s' }}>WEDDINGWIRE</span>
          <span className="social-logo" style={{ animationDelay: '0.3s' }}>MARTHA STEWART</span>
          <span className="social-logo" style={{ animationDelay: '0.4s' }}>MINNESOTA BRIDE</span>
        </div>
        
        <p className="social-text" style={{ animationDelay: '0.6s' }}>
          "Rum River Barn isn't just a venue—it's{' '}
          <span className="highlight">where dreams come to life</span>.
          Their commitment to saying 'yes' to every couple's vision sets them apart as{' '}
          <span className="highlight">Minnesota's most accommodating wedding destination</span>."
        </p>
      </div>
    </section>
  )
}

// Usage Examples
const SocialProofVariations = () => {
  return (
    <>
      {/* Basic Implementation */}
      <SocialProofSection />
      
      {/* With Custom Publications */}
      <SocialProofSection 
        publications={["BRIDES", "VOGUE", "STYLE ME PRETTY", "RUFFLED"]}
        testimonial="Custom testimonial text here..."
      />
      
      {/* With Animation */}
      <SocialProofWithAnimation />
    </>
  )
}`}
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
{`/* Social Proof Section */
.social-proof {
  background: var(--romantic-ivory);
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.social-content {
  max-width: 900px;
  margin: 0 auto;
}

/* Publication Logos */
.social-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.social-logo {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--sage-green);
  opacity: 0.7;
  transition: all 0.3s ease;
  position: relative;
}

.social-logo:hover {
  opacity: 1;
  transform: translateY(-2px);
}

/* Add decorative elements */
.social-logo::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--dusty-rose);
  transition: width 0.3s ease;
}

.social-logo:hover::after {
  width: 100%;
}

/* Testimonial Quote */
.social-text {
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1.6;
  color: var(--warm-walnut);
  font-style: italic;
  font-weight: 400;
  margin: 0;
  position: relative;
}

/* Quote Marks */
.social-text::before,
.social-text::after {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--dusty-rose);
  opacity: 0.3;
  position: absolute;
  line-height: 1;
}

.social-text::before {
  content: '"';
  top: -10px;
  left: -30px;
}

.social-text::after {
  content: '"';
  bottom: -40px;
  right: -30px;
}

/* Highlighted Text */
.highlight {
  color: var(--dusty-rose);
  font-weight: 500;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--dusty-rose) 20%, 
    var(--dusty-rose) 80%, 
    transparent 100%);
  opacity: 0.4;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .social-logos {
    gap: 2rem;
  }
  
  .social-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .social-proof {
    padding: 60px 0;
  }
  
  .social-logos {
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
  
  .social-logo {
    font-size: 0.75rem;
  }
  
  .social-text {
    font-size: 1.25rem;
    line-height: 1.7;
  }
  
  .social-text::before,
  .social-text::after {
    font-size: 2rem;
  }
  
  .social-text::before {
    top: -5px;
    left: -20px;
  }
  
  .social-text::after {
    bottom: -25px;
    right: -20px;
  }
}

@media (max-width: 480px) {
  .social-logos {
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-text {
    font-size: 1.125rem;
  }
}

/* Animation Enhancements */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stagger-animation .social-logo {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 0.7;
    transform: translateY(0);
  }
}

.social-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

/* Alternative Layouts */
.social-proof.compact {
  padding: 60px 0;
}

.social-proof.compact .social-logos {
  margin-bottom: 2rem;
  gap: 2rem;
}

.social-proof.compact .social-text {
  font-size: 1.5rem;
}

/* Dark Theme Variation */
.social-proof.dark {
  background: var(--warm-walnut);
}

.social-proof.dark .social-logo {
  color: rgba(255, 255, 255, 0.7);
}

.social-proof.dark .social-text {
  color: white;
}

.social-proof.dark .highlight {
  color: var(--champagne-gold);
}

/* Centered Logo Grid */
.social-logos.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto 3rem;
}

@media (max-width: 768px) {
  .social-logos.grid {
    grid-template-columns: 1fr;
    max-width: 200px;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}