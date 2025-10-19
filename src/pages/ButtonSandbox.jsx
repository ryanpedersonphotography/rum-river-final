import React, { useState } from 'react';
import { CTAButton } from '../components/CTAButton';
import { VRTourButton } from '../components/VRTourButton';

export default function ButtonSandbox() {
  const [showCSS, setShowCSS] = useState(true);

  const ButtonDemo = ({ title, description, children, cssCode, htmlCode }) => (
    <div className="demo-section">
      <div className="demo-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="demo-content">
        <div className="demo-preview">
          {children}
        </div>
        {showCSS && (
          <div className="demo-code">
            {htmlCode && (
              <div className="code-block">
                <div className="code-header">HTML</div>
                <pre><code>{htmlCode}</code></pre>
              </div>
            )}
            {cssCode && (
              <div className="code-block">
                <div className="code-header">CSS</div>
                <pre><code>{cssCode}</code></pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="button-sandbox">
      <style>{`
        .button-sandbox {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Montserrat', sans-serif;
          background: var(--color-base-romantic-ivory, #FBF8F4);
          min-height: 100vh;
        }

        .sandbox-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, var(--color-base-dusty-rose, #9D6B7B), var(--color-base-sage-whisper, #9CAA9E));
          border-radius: 12px;
          color: white;
        }

        .sandbox-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          margin: 0 0 1rem 0;
          font-weight: 700;
        }

        .sandbox-header p {
          font-size: 1.125rem;
          margin: 0;
          opacity: 0.9;
        }

        .controls {
          margin-bottom: 2rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .toggle-button {
          background: var(--color-base-dusty-rose, #9D6B7B);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-button:hover {
          background: var(--color-base-warm-walnut, #6B4E3D);
          transform: translateY(-1px);
        }

        .demo-section {
          margin-bottom: 3rem;
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border: 1px solid rgba(157, 107, 123, 0.1);
        }

        .demo-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          color: var(--color-base-warm-walnut, #6B4E3D);
          margin: 0 0 0.5rem 0;
        }

        .demo-header p {
          color: var(--color-base-muted-mauve, #A08A85);
          margin: 0 0 1.5rem 0;
          font-size: 1rem;
        }

        .demo-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .demo-preview {
          padding: 2rem;
          background: var(--color-base-romantic-ivory, #FBF8F4);
          border-radius: 8px;
          border: 2px dashed rgba(157, 107, 123, 0.2);
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          justify-content: flex-start;
        }

        .demo-code {
          background: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-block {
          margin-bottom: 0;
        }

        .code-block + .code-block {
          border-top: 1px solid #333;
        }

        .code-header {
          background: #333;
          color: #fff;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .code-block pre {
          margin: 0;
          padding: 1rem;
          background: #1a1a1a;
          color: #e2e8f0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          overflow-x: auto;
        }

        .code-block code {
          color: #e2e8f0;
        }

        /* Dark section demo */
        .dark-demo {
          background: var(--color-base-deep-forest, #3A4A3C) !important;
          color: white;
        }

        /* CTAButton system styles */
        .romantic-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .romantic-button.primary {
          background: var(--color-base-dusty-rose, #9D6B7B);
          color: white;
        }

        .romantic-button.primary:hover {
          background: var(--color-base-warm-walnut, #6B4E3D);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
        }

        .romantic-button.outline {
          background: transparent;
          color: var(--color-base-dusty-rose, #9D6B7B);
          border: 2px solid var(--color-base-dusty-rose, #9D6B7B);
        }

        .romantic-button.outline:hover {
          background: var(--color-base-dusty-rose, #9D6B7B);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
        }

        .romantic-button.vr-special {
          background: linear-gradient(135deg, var(--color-base-champagne-gold, #E4C896), var(--color-base-accent-gold, #D4A574));
          color: var(--color-base-warm-walnut, #6B4E3D);
        }

        .romantic-button.vr-barn {
          background: var(--color-base-deep-forest, #3A4A3C);
          color: var(--color-base-champagne-gold, #E4C896);
        }

        .romantic-button.vr-bridal {
          background: var(--color-base-blush-pink, #F4E4E1);
          color: var(--color-base-dusty-rose, #9D6B7B);
        }

        .cta-submit-button {
          background: var(--color-base-sage-whisper, #9CAA9E);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-submit-button:hover {
          background: var(--color-base-deep-forest, #3A4A3C);
          transform: translateY(-2px);
        }

        .floating-cta {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: var(--color-base-dusty-rose, #9D6B7B);
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(157, 107, 123, 0.4);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .floating-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 30px rgba(157, 107, 123, 0.5);
        }

        .venue-tab {
          background: transparent;
          color: var(--color-base-warm-walnut, #6B4E3D);
          border: 2px solid var(--color-base-sage-whisper, #9CAA9E);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .venue-tab:hover,
        .venue-tab.active {
          background: var(--color-base-sage-whisper, #9CAA9E);
          color: white;
        }

        /* Dark mode variants */
        .romantic-button.primary.on-dark {
          background: var(--color-base-champagne-gold, #E4C896);
          color: var(--color-base-deep-forest, #3A4A3C);
        }

        .romantic-button.outline.on-dark {
          border-color: var(--color-base-champagne-gold, #E4C896);
          color: var(--color-base-champagne-gold, #E4C896);
        }

        .romantic-button.outline.on-dark:hover {
          background: var(--color-base-champagne-gold, #E4C896);
          color: var(--color-base-deep-forest, #3A4A3C);
        }

        .venue-tab.on-dark {
          border-color: var(--color-base-champagne-gold, #E4C896);
          color: var(--color-base-champagne-gold, #E4C896);
        }

        .venue-tab.on-dark:hover {
          background: var(--color-base-champagne-gold, #E4C896);
          color: var(--color-base-deep-forest, #3A4A3C);
        }

        @media (max-width: 768px) {
          .button-sandbox {
            padding: 1rem;
          }
          
          .sandbox-header h1 {
            font-size: 2rem;
          }
          
          .demo-preview {
            padding: 1rem;
          }
        }
      `}</style>

      {/* Header */}
      <div className="sandbox-header">
        <h1>Button Sandbox</h1>
        <p>Complete showcase of all button implementations across the site with CSS output</p>
      </div>

      {/* Controls */}
      <div className="controls">
        <button 
          className="toggle-button"
          onClick={() => setShowCSS(!showCSS)}
        >
          {showCSS ? 'Hide CSS Output' : 'Show CSS Output'}
        </button>
      </div>

      {/* CTAButton Variants */}
      <ButtonDemo
        title="CTAButton - Primary Variant"
        description="Main call-to-action button using the primary variant"
        htmlCode={`<CTAButton variant="primary">
  Get Started Today
</CTAButton>`}
        cssCode={`.romantic-button.primary {
  background: var(--color-base-dusty-rose, #9D6B7B);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.romantic-button.primary:hover {
  background: var(--color-base-warm-walnut, #6B4E3D);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
}`}
      >
        <CTAButton variant="primary">Get Started Today</CTAButton>
      </ButtonDemo>

      <ButtonDemo
        title="CTAButton - Outline Variant"
        description="Secondary call-to-action with outline styling"
        htmlCode={`<CTAButton variant="outline">
  Learn More
</CTAButton>`}
        cssCode={`.romantic-button.outline {
  background: transparent;
  color: var(--color-base-dusty-rose, #9D6B7B);
  border: 2px solid var(--color-base-dusty-rose, #9D6B7B);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.romantic-button.outline:hover {
  background: var(--color-base-dusty-rose, #9D6B7B);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
}`}
      >
        <CTAButton variant="outline">Learn More</CTAButton>
      </ButtonDemo>

      <ButtonDemo
        title="CTAButton - VR Special Variant"
        description="Special gold gradient button for VR tours and premium features"
        htmlCode={`<CTAButton variant="vr-special">
  Launch VR Tour
</CTAButton>`}
        cssCode={`.romantic-button.vr-special {
  background: linear-gradient(135deg, 
    var(--color-base-champagne-gold, #E4C896), 
    var(--color-base-accent-gold, #D4A574)
  );
  color: var(--color-base-warm-walnut, #6B4E3D);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}`}
      >
        <CTAButton variant="vr-special">Launch VR Tour</CTAButton>
      </ButtonDemo>

      <ButtonDemo
        title="CTAButton - VR Barn Variant"
        description="Dark forest green button for barn-specific content"
        htmlCode={`<CTAButton variant="vr-barn">
  Explore the Barn
</CTAButton>`}
        cssCode={`.romantic-button.vr-barn {
  background: var(--color-base-deep-forest, #3A4A3C);
  color: var(--color-base-champagne-gold, #E4C896);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}`}
      >
        <CTAButton variant="vr-barn">Explore the Barn</CTAButton>
      </ButtonDemo>

      <ButtonDemo
        title="CTAButton - VR Bridal Variant"
        description="Soft pink button for bridal suite content"
        htmlCode={`<CTAButton variant="vr-bridal">
  See Bridal Suite
</CTAButton>`}
        cssCode={`.romantic-button.vr-bridal {
  background: var(--color-base-blush-pink, #F4E4E1);
  color: var(--color-base-dusty-rose, #9D6B7B);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}`}
      >
        <CTAButton variant="vr-bridal">See Bridal Suite</CTAButton>
      </ButtonDemo>

      <ButtonDemo
        title="CTAButton - Submit Variant"
        description="Form submission button with distinct styling"
        htmlCode={`<CTAButton variant="submit" type="submit">
  Send Message
</CTAButton>`}
        cssCode={`.cta-submit-button {
  background: var(--color-base-sage-whisper, #9CAA9E);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-submit-button:hover {
  background: var(--color-base-deep-forest, #3A4A3C);
  transform: translateY(-2px);
}`}
      >
        <CTAButton variant="submit" type="submit">Send Message</CTAButton>
      </ButtonDemo>

      <ButtonDemo
        title="CTAButton - Floating Variant"
        description="Fixed position floating action button"
        htmlCode={`<CTAButton variant="floating">
  📅 Book Now
</CTAButton>`}
        cssCode={`.floating-cta {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--color-base-dusty-rose, #9D6B7B);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(157, 107, 123, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
}

.floating-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 30px rgba(157, 107, 123, 0.5);
}`}
      >
        <CTAButton variant="floating">📅 Book Now</CTAButton>
      </ButtonDemo>

      {/* VRTourButton */}
      <ButtonDemo
        title="VRTourButton Component"
        description="Specialized button for launching VR tours (wrapper around CTAButton)"
        htmlCode={`<VRTourButton 
  tourUrl="https://example.com/vr-tour"
  variant="vr-special"
>
  Launch Virtual Tour
</VRTourButton>`}
        cssCode={`/* VRTourButton uses CTAButton internally */
.romantic-button.vr-special {
  background: linear-gradient(135deg, 
    var(--color-base-champagne-gold, #E4C896), 
    var(--color-base-accent-gold, #D4A574)
  );
  color: var(--color-base-warm-walnut, #6B4E3D);
}

/* Icon spacing */
.vr-icon {
  margin-right: 0.5rem;
}`}
      >
        <VRTourButton 
          tourUrl="https://example.com/vr-tour"
          variant="vr-special"
        >
          Launch Virtual Tour
        </VRTourButton>
      </ButtonDemo>

      {/* Component Library Buttons */}
      <ButtonDemo
        title="Raw HTML - Romantic Button Primary"
        description="Direct HTML implementation from ComponentLibrary"
        htmlCode={`<button className="romantic-button primary">
  Primary Button
</button>`}
        cssCode={`.romantic-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.romantic-button.primary {
  background: var(--color-base-dusty-rose, #9D6B7B);
  color: white;
}`}
      >
        <button className="romantic-button primary">
          Primary Button
        </button>
      </ButtonDemo>

      <ButtonDemo
        title="Raw HTML - Romantic Button Outline"
        description="Direct HTML outline button from ComponentLibrary"
        htmlCode={`<button className="romantic-button outline">
  Outline Button
</button>`}
        cssCode={`.romantic-button.outline {
  background: transparent;
  color: var(--color-base-dusty-rose, #9D6B7B);
  border: 2px solid var(--color-base-dusty-rose, #9D6B7B);
}

.romantic-button.outline:hover {
  background: var(--color-base-dusty-rose, #9D6B7B);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(157, 107, 123, 0.3);
}`}
      >
        <button className="romantic-button outline">
          Outline Button
        </button>
      </ButtonDemo>

      <ButtonDemo
        title="Raw HTML - Venue Tab Button"
        description="Tab-style button for venue navigation"
        htmlCode={`<button className="venue-tab">
  Ceremony
</button>
<button className="venue-tab active">
  Reception
</button>`}
        cssCode={`.venue-tab {
  background: transparent;
  color: var(--color-base-warm-walnut, #6B4E3D);
  border: 2px solid var(--color-base-sage-whisper, #9CAA9E);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.venue-tab:hover,
.venue-tab.active {
  background: var(--color-base-sage-whisper, #9CAA9E);
  color: white;
}`}
      >
        <button className="venue-tab">Ceremony</button>
        <button className="venue-tab active">Reception</button>
      </ButtonDemo>

      <ButtonDemo
        title="Raw HTML - Submit Button"
        description="Form submission button with distinct styling"
        htmlCode={`<button type="submit" className="cta-submit-button">
  Submit Form
</button>`}
        cssCode={`.cta-submit-button {
  background: var(--color-base-sage-whisper, #9CAA9E);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-submit-button:hover {
  background: var(--color-base-deep-forest, #3A4A3C);
  transform: translateY(-2px);
}`}
      >
        <button type="submit" className="cta-submit-button">
          Submit Form
        </button>
      </ButtonDemo>

      {/* Dark Background Buttons */}
      <ButtonDemo
        title="Dark Background - Primary Button"
        description="Primary button adapted for dark sections"
        htmlCode={`<button className="romantic-button primary on-dark">
  Primary on Dark
</button>`}
        cssCode={`.romantic-button.primary.on-dark {
  background: var(--color-base-champagne-gold, #E4C896);
  color: var(--color-base-deep-forest, #3A4A3C);
}

.romantic-button.primary.on-dark:hover {
  background: var(--color-base-accent-gold, #D4A574);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(228, 200, 150, 0.3);
}`}
      >
        <div className="demo-preview dark-demo">
          <button className="romantic-button primary on-dark">
            Primary on Dark
          </button>
        </div>
      </ButtonDemo>

      <ButtonDemo
        title="Dark Background - Outline Button"
        description="Outline button adapted for dark sections"
        htmlCode={`<button className="romantic-button outline on-dark">
  Outline on Dark
</button>`}
        cssCode={`.romantic-button.outline.on-dark {
  border-color: var(--color-base-champagne-gold, #E4C896);
  color: var(--color-base-champagne-gold, #E4C896);
  background: transparent;
}

.romantic-button.outline.on-dark:hover {
  background: var(--color-base-champagne-gold, #E4C896);
  color: var(--color-base-deep-forest, #3A4A3C);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(228, 200, 150, 0.3);
}`}
      >
        <div className="demo-preview dark-demo">
          <button className="romantic-button outline on-dark">
            Outline on Dark
          </button>
        </div>
      </ButtonDemo>

      <ButtonDemo
        title="Dark Background - Venue Tab"
        description="Venue tab button adapted for dark sections"
        htmlCode={`<button className="venue-tab on-dark">
  Tab on Dark
</button>`}
        cssCode={`.venue-tab.on-dark {
  border-color: var(--color-base-champagne-gold, #E4C896);
  color: var(--color-base-champagne-gold, #E4C896);
  background: transparent;
}

.venue-tab.on-dark:hover {
  background: var(--color-base-champagne-gold, #E4C896);
  color: var(--color-base-deep-forest, #3A4A3C);
}`}
      >
        <div className="demo-preview dark-demo">
          <button className="venue-tab on-dark">
            Tab on Dark
          </button>
        </div>
      </ButtonDemo>

      {/* Inline Styled Buttons from Component Library */}
      <ButtonDemo
        title="Inline Styled - Navigation Arrow"
        description="Custom styled navigation button with inline styles"
        htmlCode={`<button style={{
  background: 'var(--color-base-dusty-rose, #9D6B7B)',
  color: 'white',
  border: 'none',
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  fontSize: '1.25rem',
  cursor: 'pointer'
}}>
  ‹
</button>`}
        cssCode={`/* Inline styles - not recommended for production */
background: var(--color-base-dusty-rose, #9D6B7B);
color: white;
border: none;
width: 3rem;
height: 3rem;
border-radius: 50%;
font-size: 1.25rem;
cursor: pointer;`}
      >
        <button style={{
          background: 'var(--color-base-dusty-rose, #9D6B7B)',
          color: 'white',
          border: 'none',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          fontSize: '1.25rem',
          cursor: 'pointer'
        }}>
          ‹
        </button>
      </ButtonDemo>

      {/* Button Sizes */}
      <ButtonDemo
        title="Button Size Variations"
        description="Different button sizes using CTAButton size prop"
        htmlCode={`<CTAButton variant="primary" size="small">Small</CTAButton>
<CTAButton variant="primary" size="normal">Normal</CTAButton>
<CTAButton variant="primary" size="large">Large</CTAButton>`}
        cssCode={`.romantic-button.size-small {
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
}

.romantic-button.size-large {
  padding: 1.25rem 3rem;
  font-size: 1rem;
}`}
      >
        <CTAButton variant="primary" size="small">Small</CTAButton>
        <CTAButton variant="primary" size="normal">Normal</CTAButton>
        <CTAButton variant="primary" size="large">Large</CTAButton>
      </ButtonDemo>

      {/* Link Buttons */}
      <ButtonDemo
        title="Link Buttons"
        description="CTAButton as links (external and React Router)"
        htmlCode={`<CTAButton 
  href="https://example.com" 
  target="_blank"
  variant="outline"
>
  External Link
</CTAButton>

<CTAButton 
  to="/contact" 
  variant="primary"
>
  Internal Link
</CTAButton>`}
        cssCode={`/* Same styles as buttons, but rendered as <a> or <Link> */
.romantic-button {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}`}
      >
        <CTAButton 
          href="https://example.com" 
          target="_blank"
          variant="outline"
        >
          External Link
        </CTAButton>
        <CTAButton 
          to="/contact" 
          variant="primary"
        >
          Internal Link
        </CTAButton>
      </ButtonDemo>

      {/* Summary */}
      <div className="demo-section">
        <div className="demo-header">
          <h3>Button System Summary</h3>
          <p>Complete overview of the button implementation across the site</p>
        </div>
        <div style={{ padding: '1rem', background: 'var(--color-base-romantic-ivory, #FBF8F4)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)', marginTop: 0 }}>CTAButton Component Variants:</h4>
          <ul style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>
            <li><strong>primary</strong> - Main call-to-action (dusty rose background)</li>
            <li><strong>outline</strong> - Secondary action (dusty rose border)</li>
            <li><strong>vr-special</strong> - Premium VR content (gold gradient)</li>
            <li><strong>vr-barn</strong> - Barn-specific content (forest green)</li>
            <li><strong>vr-bridal</strong> - Bridal suite content (blush pink)</li>
            <li><strong>submit</strong> - Form submissions (sage green)</li>
            <li><strong>floating</strong> - Fixed position CTA</li>
          </ul>
          
          <h4 style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>Raw HTML Classes:</h4>
          <ul style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>
            <li><strong>.romantic-button.primary</strong> - Direct HTML primary button</li>
            <li><strong>.romantic-button.outline</strong> - Direct HTML outline button</li>
            <li><strong>.venue-tab</strong> - Tab-style navigation buttons</li>
            <li><strong>.cta-submit-button</strong> - Form submission styling</li>
            <li><strong>.on-dark</strong> - Modifier for dark backgrounds</li>
          </ul>

          <h4 style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>Design Tokens Used:</h4>
          <ul style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)', fontSize: '0.875rem' }}>
            <li>--color-base-dusty-rose: #9D6B7B (primary button bg)</li>
            <li>--color-base-warm-walnut: #6B4E3D (hover states, text)</li>
            <li>--color-base-sage-whisper: #9CAA9E (submit buttons)</li>
            <li>--color-base-champagne-gold: #E4C896 (VR special, dark mode)</li>
            <li>--color-base-deep-forest: #3A4A3C (VR barn, dark backgrounds)</li>
            <li>--color-base-blush-pink: #F4E4E1 (VR bridal)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}