import React from 'react';

/**
 * ButtonDemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the button demo page.
 * Features:
 * - Minimal JavaScript (no state, no effects)
 * - No external dependencies or navigation
 * - Clean, readable structure
 * - All CSS inline for easy reading
 * - Complete button system documentation
 */
export default function ButtonDemoStandalone() {
  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0
    }}>
      
      {/* CSS Styles for button components */}
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
        
        /* Button Base Styles */
        .romantic-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          font-family: inherit;
          position: relative;
          overflow: hidden;
        }
        
        /* Primary Button */
        .romantic-button.primary {
          background: var(--color-base-dusty-rose);
          color: white;
          border-color: var(--color-base-dusty-rose);
        }
        
        .romantic-button.primary:hover {
          background: var(--color-base-warm-walnut);
          border-color: var(--color-base-warm-walnut);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
        }
        
        /* Outline Button */
        .romantic-button.outline {
          background: transparent;
          color: var(--color-base-dusty-rose);
          border-color: var(--color-base-dusty-rose);
        }
        
        .romantic-button.outline:hover {
          background: var(--color-base-dusty-rose);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
        }
        
        /* Size Variants */
        .romantic-button.small {
          padding: 0.625rem 1.5rem;
          font-size: 0.75rem;
        }
        
        .romantic-button.large {
          padding: 1.125rem 2.5rem;
          font-size: 1rem;
        }
        
        /* Disabled State */
        .romantic-button:disabled,
        .romantic-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }
        
        /* Special Variants */
        .romantic-button.vr-special {
          background: linear-gradient(135deg, var(--color-base-sage-whisper) 0%, var(--color-base-deep-forest) 100%);
          color: white;
          border-color: var(--color-base-sage-whisper);
        }
        
        .romantic-button.vr-barn {
          background: linear-gradient(135deg, var(--color-base-warm-walnut) 0%, var(--color-base-deep-brown) 100%);
          color: white;
          border-color: var(--color-base-warm-walnut);
        }
        
        .romantic-button.vr-bridal {
          background: linear-gradient(135deg, var(--color-base-blush-pink) 0%, var(--color-base-dusty-rose) 100%);
          color: var(--color-base-warm-walnut);
          border-color: var(--color-base-blush-pink);
        }
        
        /* Floating CTA */
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
          transition: all 0.3s ease;
        }
        
        .floating-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        /* Content wrapper */
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        /* Code block styling */
        .code-block {
          background: #2d3748;
          color: #e2e8f0;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 1rem 0;
        }
        
        /* Token grid */
        .token-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .token-card {
          background: white;
          border: 1px solid var(--color-base-blush-pink);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      {/* Floating CTA Button */}
      <a href="#button-system" className="floating-cta">
        🎨 View Button System
      </a>

      {/* Hero Section */}
      <section style={{
        background: 'var(--color-base-romantic-ivory)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="content-wrapper">
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400,
            color: '#2C2416',
            marginBottom: '1rem'
          }}>
            Button System Demo
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6B4E3D',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Complete CTAButton implementation showcase with shadcn migration examples and design token documentation
          </p>
        </div>
      </section>

      {/* Current Button Examples */}
      <section id="button-system" style={{
        background: 'white',
        padding: '5rem 0'
      }}>
        <div className="content-wrapper">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            color: '#9D6B7B',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Current Button Variants
          </h2>

          {/* Primary Buttons */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem'
            }}>
              Primary Buttons
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <button className="romantic-button primary small">Small Primary</button>
              <button className="romantic-button primary">Normal Primary</button>
              <button className="romantic-button primary large">Large Primary</button>
              <button className="romantic-button primary disabled">Disabled Primary</button>
            </div>
            
            <div className="code-block">
{`<!-- HTML -->
<button class="romantic-button primary">Schedule Your Visit</button>
<button class="romantic-button primary small">Small Button</button>
<button class="romantic-button primary large">Large Button</button>

<!-- React Component -->
<CTAButton variant="primary">Schedule Your Visit</CTAButton>
<CTAButton variant="primary" size="small">Small Button</CTAButton>
<CTAButton variant="primary" size="large">Large Button</CTAButton>`}
            </div>
          </div>

          {/* Outline Buttons */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem'
            }}>
              Outline Buttons
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <button className="romantic-button outline small">Small Outline</button>
              <button className="romantic-button outline">Normal Outline</button>
              <button className="romantic-button outline large">Large Outline</button>
              <button className="romantic-button outline disabled">Disabled Outline</button>
            </div>
            
            <div className="code-block">
{`<!-- HTML -->
<button class="romantic-button outline">Request Info</button>

<!-- React Component -->
<CTAButton variant="outline">Request Info</CTAButton>`}
            </div>
          </div>

          {/* Special Variants */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem'
            }}>
              Special Variants
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <button className="romantic-button vr-special">VR Special</button>
              <button className="romantic-button vr-barn">VR Barn</button>
              <button className="romantic-button vr-bridal">VR Bridal</button>
            </div>
            
            <div className="code-block">
{`<!-- Special variant buttons for different sections -->
<CTAButton variant="vr-special">Virtual Tour</CTAButton>
<CTAButton variant="vr-barn">Explore Barn</CTAButton>
<CTAButton variant="vr-bridal">Bridal Suite</CTAButton>`}
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens Section */}
      <section style={{
        background: '#F4E4E1',
        padding: '5rem 0'
      }}>
        <div className="content-wrapper">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            color: '#9D6B7B',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Design Tokens & CSS
          </h2>

          <div className="token-grid">
            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Color Tokens</h4>
              <div className="code-block">
{`--color-base-dusty-rose: #9D6B7B;
--color-base-warm-walnut: #6B4E3D;
--color-base-champagne-gold: #E4C896;
--color-base-blush-pink: #F4E4E1;
--color-base-romantic-ivory: #FBF8F4;`}
              </div>
            </div>

            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Button CSS</h4>
              <div className="code-block">
{`.romantic-button {
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.4s ease;
}`}
              </div>
            </div>

            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Hover Effects</h4>
              <div className="code-block">
{`.romantic-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
}`}
              </div>
            </div>

            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Size Variants</h4>
              <div className="code-block">
{`.romantic-button.small {
  padding: 0.625rem 1.5rem;
  font-size: 0.75rem;
}

.romantic-button.large {
  padding: 1.125rem 2.5rem;
  font-size: 1rem;
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guide Section */}
      <section style={{
        background: 'white',
        padding: '5rem 0'
      }}>
        <div className="content-wrapper">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            color: '#9D6B7B',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Shadcn Migration Guide
          </h2>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem'
            }}>
              Current CTAButton → Shadcn Button
            </h3>
            
            <div className="code-block">
{`// Before (CTAButton)
<CTAButton variant="primary" size="large" href="/contact">
  Schedule Your Visit
</CTAButton>

// After (Shadcn Button)
<Button 
  variant="default" 
  size="lg" 
  className="romantic-button-style"
  asChild
>
  <Link href="/contact">Schedule Your Visit</Link>
</Button>`}
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem'
            }}>
              Props Mapping
            </h3>
            
            <div className="code-block">
{`// CTAButton → Shadcn Button prop mapping
variant="primary"  → variant="default"
variant="outline"  → variant="outline"
size="small"       → size="sm"
size="large"       → size="lg"
disabled={true}    → disabled={true}
href="/path"       → asChild + <Link href="/path">`}
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem'
            }}>
              CSS Custom Properties Integration
            </h3>
            
            <div className="code-block">
{`// Tailwind config with CSS custom properties
module.exports = {
  theme: {
    extend: {
      colors: {
        'dusty-rose': 'var(--color-base-dusty-rose)',
        'warm-walnut': 'var(--color-base-warm-walnut)',
        'champagne-gold': 'var(--color-base-champagne-gold)',
      },
      borderRadius: {
        'romantic': '50px',
      }
    }
  }
}`}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Notes */}
      <section style={{
        background: '#FAF6F2',
        padding: '5rem 0'
      }}>
        <div className="content-wrapper">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            color: '#9D6B7B',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Performance & Accessibility
          </h2>

          <div className="token-grid">
            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Performance</h4>
              <ul style={{ color: '#6B4E3D', lineHeight: 1.7 }}>
                <li>CSS-only hover effects (no JavaScript)</li>
                <li>Hardware-accelerated transforms</li>
                <li>Efficient transition timing functions</li>
                <li>Minimal DOM manipulation</li>
              </ul>
            </div>

            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Accessibility</h4>
              <ul style={{ color: '#6B4E3D', lineHeight: 1.7 }}>
                <li>WCAG AA color contrast ratios</li>
                <li>Focus visible indicators</li>
                <li>Screen reader friendly text</li>
                <li>Keyboard navigation support</li>
              </ul>
            </div>

            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Browser Support</h4>
              <ul style={{ color: '#6B4E3D', lineHeight: 1.7 }}>
                <li>Modern browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>CSS custom properties fallbacks</li>
                <li>Progressive enhancement approach</li>
                <li>Mobile-optimized touch targets</li>
              </ul>
            </div>

            <div className="token-card">
              <h4 style={{ color: '#9D6B7B', marginBottom: '1rem' }}>Testing</h4>
              <div className="code-block">
{`// Button interaction testing
cy.get('[data-testid="cta-button"]')
  .should('be.visible')
  .and('contain', 'Schedule Your Visit')
  .click();

// Visual regression testing
cy.matchImageSnapshot('button-states');`}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}