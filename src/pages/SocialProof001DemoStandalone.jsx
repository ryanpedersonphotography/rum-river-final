export default function SocialProof001DemoStandalone() {
  return (
    <>
      {/* SOCIAL_PROOF_001 - Brand Logos + Testimonial Quote Component */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(90deg, #7A8B7F 0%, #4A3426 100%)', // sage-green to deep-brown
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Star Pattern Background */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="90" cy="30" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="30" cy="80" r="1" fill="rgba(255, 255, 255, 0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>')`,
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: '1',
          textAlign: 'center'
        }}>
          {/* Brand Logos Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              color: 'white',
              fontSize: '0.875rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '500'
            }}>
              THE KNOT
            </span>
            <span style={{
              color: 'white',
              fontSize: '0.875rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '500'
            }}>
              WEDDINGWIRE
            </span>
            <span style={{
              color: 'white',
              fontSize: '0.875rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '500'
            }}>
              MARTHA STEWART
            </span>
            <span style={{
              color: 'white',
              fontSize: '0.875rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '500'
            }}>
              MINNESOTA BRIDE
            </span>
          </div>

          {/* Testimonial Quote */}
          <p style={{
            fontSize: '2rem',
            color: 'white',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.4',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '400'
          }}>
            "Rum River Barn isn't just a venue—it's{' '}
            <span style={{
              color: '#D4A574', // accent-gold
              fontStyle: 'italic'
            }}>
              where dreams come to life
            </span>
            . Their commitment to saying 'yes' to every couple's vision sets them apart as{' '}
            <span style={{
              color: '#D4A574', // accent-gold
              fontStyle: 'italic'
            }}>
              Minnesota's most accommodating wedding destination
            </span>
            ."
          </p>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{ 
        background: '#FFFCF8', // cream-pearl
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#2C2416', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Social Proof Brand Quote Component</h2>
            <p style={{ color: '#6B4E3D', fontFamily: "'Montserrat', sans-serif" }}>Brand logos with testimonial quote on gradient background with star pattern overlay</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`<!-- ID: SOCIAL_PROOF_001 - Brand Logos + Testimonial Quote -->
<section id="social-proof" className="social-proof">
  <!-- Star Pattern Background Overlay -->
  <div className="star-pattern-bg"></div>
  
  <div className="container social-content">
    <!-- Brand Logos Section -->
    <div className="social-logos">
      <span className="social-logo">THE KNOT</span>
      <span className="social-logo">WEDDINGWIRE</span>
      <span className="social-logo">MARTHA STEWART</span>
      <span className="social-logo">MINNESOTA BRIDE</span>
    </div>
    
    <!-- Testimonial Quote with Highlighted Text -->
    <p className="social-text">
      "Rum River Barn isn't just a venue—it's 
      <span className="highlight">where dreams come to life</span>.
      Their commitment to saying 'yes' to every couple's vision sets them apart as
      <span className="highlight">Minnesota's most accommodating wedding destination</span>."
    </p>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>JavaScript Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`// React Component for Social Proof Brand Quote
export default function SocialProofBrandQuote() {
  // Brand logos data
  const brandLogos = [
    "THE KNOT",
    "WEDDINGWIRE", 
    "MARTHA STEWART",
    "MINNESOTA BRIDE"
  ];

  // Testimonial quote data
  const testimonialData = {
    quote: "Rum River Barn isn't just a venue—it's",
    highlight1: "where dreams come to life",
    continuation: ". Their commitment to saying 'yes' to every couple's vision sets them apart as",
    highlight2: "Minnesota's most accommodating wedding destination",
    ending: "."
  };

  // Star pattern SVG for background
  const starPatternSVG = \`data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.1)"/>
        <circle cx="90" cy="30" r="1" fill="rgba(255, 255, 255, 0.1)"/>
        <circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.1)"/>
        <circle cx="30" cy="80" r="1" fill="rgba(255, 255, 255, 0.1)"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(%23stars)"/>
  </svg>\`;

  return (
    <section className="social-proof">
      {/* Star Pattern Background */}
      <div 
        className="star-pattern-bg"
        style={{ backgroundImage: \`url('\${starPatternSVG}')\` }}
      />
      
      <div className="container social-content">
        {/* Dynamic Brand Logos */}
        <div className="social-logos">
          {brandLogos.map((brand, index) => (
            <span key={index} className="social-logo">
              {brand}
            </span>
          ))}
        </div>
        
        {/* Testimonial Quote with Highlighted Segments */}
        <p className="social-text">
          "{testimonialData.quote}{' '}
          <span className="highlight">{testimonialData.highlight1}</span>
          {testimonialData.continuation}{' '}
          <span className="highlight">{testimonialData.highlight2}</span>
          {testimonialData.ending}"
        </p>
      </div>
    </section>
  );
}

// Alternative implementation with props
export function SocialProofBrandQuoteCustomizable({ 
  brands, 
  quote, 
  highlights,
  gradientColors = { start: '#7A8B7F', end: '#4A3426' },
  showStars = true 
}) {
  return (
    <section 
      className="social-proof"
      style={{
        background: \`linear-gradient(90deg, \${gradientColors.start} 0%, \${gradientColors.end} 100%)\`
      }}
    >
      {showStars && (
        <div className="star-pattern-bg" />
      )}
      
      <div className="container social-content">
        <div className="social-logos">
          {brands.map((brand, index) => (
            <span key={index} className="social-logo">
              {brand}
            </span>
          ))}
        </div>
        
        <p className="social-text">
          {quote.split(/\\[(.*?)\\]/).map((part, index) => {
            if (highlights.includes(part)) {
              return <span key={index} className="highlight">{part}</span>;
            }
            return part;
          })}
        </p>
      </div>
    </section>
  );
}

// Usage Examples
const SocialProofVariations = () => {
  const customBrands = ["VOGUE", "HARPER'S BAZAAR", "TOWN & COUNTRY", "BRIDES"];
  const customQuote = "Excellence isn't just our standard—it's [our obsession]. We transform ordinary moments into [extraordinary memories].";
  const customHighlights = ["our obsession", "extraordinary memories"];

  return (
    <>
      {/* Standard Implementation */}
      <SocialProofBrandQuote />
      
      {/* Custom Implementation */}
      <SocialProofBrandQuoteCustomizable 
        brands={customBrands}
        quote={customQuote}
        highlights={customHighlights}
        gradientColors={{ start: '#2D3748', end: '#1A202C' }}
        showStars={true}
      />
    </>
  );
};`}
            </pre>
          </div>

          {/* CSS Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>CSS Styling</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`/* Social Proof Brand Quote Component */
.social-proof {
  padding: 80px 0;
  background: linear-gradient(90deg, #7A8B7F 0%, #4A3426 100%); /* sage-green to deep-brown */
  position: relative;
  overflow: hidden;
}

/* Star Pattern Background Overlay */
.social-proof::before,
.star-pattern-bg {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="90" cy="30" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="30" cy="80" r="1" fill="rgba(255, 255, 255, 0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
  pointer-events: none;
  opacity: 0.6;
}

/* Content Container */
.social-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Brand Logos Container */
.social-logos {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

/* Individual Brand Logo Styling */
.social-logo {
  color: white;
  font-size: 0.875rem; /* 14px */
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.social-logo:hover {
  color: #D4A574; /* accent-gold */
  transform: translateY(-2px);
}

/* Testimonial Quote Text */
.social-text {
  font-size: 2rem; /* 32px */
  color: white;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  text-align: center;
}

/* Highlighted Text within Quote */
.social-text .highlight {
  color: #D4A574; /* accent-gold */
  font-style: italic;
  font-weight: 500;
  transition: all 0.3s ease;
}

.social-text .highlight:hover {
  color: #E4C896; /* champagne-gold */
  text-shadow: 0 0 10px rgba(212, 165, 116, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .social-logos {
    gap: 40px;
  }
  
  .social-text {
    font-size: 1.75rem; /* 28px */
  }
}

@media (max-width: 768px) {
  .social-proof {
    padding: 60px 0;
  }
  
  .social-logos {
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .social-logo {
    font-size: 0.75rem; /* 12px */
    letter-spacing: 1.5px;
  }
  
  .social-text {
    font-size: 1.5rem; /* 24px */
    line-height: 1.5;
    padding: 0 1rem;
  }
  
  .social-content {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .social-logos {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .social-text {
    font-size: 1.25rem; /* 20px */
    line-height: 1.6;
  }
}

/* Animation Variants */
.social-proof.animate-in .social-logo {
  animation: fadeInUp 0.6s ease forwards;
}

.social-proof.animate-in .social-text {
  animation: fadeInUp 0.8s ease 0.3s forwards;
  opacity: 0;
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

/* Alternative Color Schemes */
.social-proof.dark-theme {
  background: linear-gradient(90deg, #1A202C 0%, #2D3748 100%);
}

.social-proof.light-theme {
  background: linear-gradient(90deg, #F7FAFC 0%, #EDF2F7 100%);
}

.social-proof.light-theme .social-logo,
.social-proof.light-theme .social-text {
  color: #2D3748;
}

.social-proof.light-theme .social-text .highlight {
  color: #9D6B7B; /* dusty-rose */
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
  .social-logo,
  .social-text .highlight {
    transition: none;
  }
  
  .social-proof.animate-in .social-logo,
  .social-proof.animate-in .social-text {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Print Styles */
@media print {
  .social-proof {
    background: white !important;
    color: black !important;
  }
  
  .social-proof::before,
  .star-pattern-bg {
    display: none;
  }
  
  .social-logo,
  .social-text {
    color: black !important;
  }
  
  .social-text .highlight {
    color: #666 !important;
    font-weight: bold;
  }
}`}
            </pre>
          </div>

          {/* Key Features */}
          <div>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Key Features</h3>
            <div style={{
              background: '#F4E4E1',
              padding: '2rem',
              borderRadius: '8px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>Brand Logo Display:</strong> Horizontal flex layout showcasing trusted wedding industry publications</li>
                <li><strong>Gradient Background:</strong> Sophisticated sage-green to deep-brown linear gradient for premium feel</li>
                <li><strong>Star Pattern Overlay:</strong> Subtle SVG star pattern background for added visual texture</li>
                <li><strong>Highlighted Quote Text:</strong> Large testimonial quote with gold-highlighted key phrases</li>
                <li><strong>Responsive Brand Layout:</strong> Logos adapt from horizontal row to vertical stack on mobile</li>
                <li><strong>Typography Hierarchy:</strong> Playfair Display serif for quote, Montserrat sans-serif for logos</li>
                <li><strong>Interactive Hover Effects:</strong> Brand logos lift on hover with color transition to gold</li>
                <li><strong>Accessible Design:</strong> Proper contrast ratios, reduced motion support, print styles</li>
                <li><strong>Customizable Content:</strong> Easy to modify brand list and testimonial quote text</li>
                <li><strong>Mobile Optimized:</strong> Responsive text sizing and spacing adjustments for all screen sizes</li>
                <li><strong>Performance Optimized:</strong> Inline SVG pattern, efficient CSS transitions, minimal DOM</li>
                <li><strong>Brand Consistency:</strong> Uses design system color tokens and typography scales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}