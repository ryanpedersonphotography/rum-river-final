import React, { useState } from 'react';
import { ScheduleTourForm } from '../components/ScheduleTourForm';
import NetlifyForm from '../components/NetlifyForm';
import FormSubmitButton from '../components/FormSubmitButton';

export default function ScheduleTourDemo() {
  const [showCode, setShowCode] = useState(true);

  const CodeBlock = ({ title, children, language = 'jsx' }) => (
    <div className="code-demo">
      <div className="code-header">
        <span className="code-title">{title}</span>
        <span className="code-language">{language}</span>
      </div>
      <pre className="code-content">
        <code>{children}</code>
      </pre>
    </div>
  );

  const DemoSection = ({ title, description, children, code, cssCode }) => (
    <div className="demo-section">
      <div className="demo-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="demo-content">
        <div className="demo-preview">
          {children}
        </div>
        {showCode && (
          <div className="demo-code">
            {code && (
              <CodeBlock title="React Component">
                {code}
              </CodeBlock>
            )}
            {cssCode && (
              <CodeBlock title="CSS Styles" language="css">
                {cssCode}
              </CodeBlock>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="schedule-tour-demo">
      <style>{`
        .schedule-tour-demo {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Montserrat', sans-serif;
          background: var(--color-base-romantic-ivory, #FBF8F4);
          min-height: 100vh;
        }

        .demo-header-section {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, var(--color-base-dusty-rose, #9D6B7B), var(--color-base-sage-whisper, #9CAA9E));
          border-radius: 12px;
          color: white;
        }

        .demo-header-section h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          margin: 0 0 1rem 0;
          font-weight: 700;
        }

        .demo-header-section p {
          font-size: 1.125rem;
          margin: 0;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .controls {
          margin-bottom: 2rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          text-align: center;
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
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border: 1px solid rgba(157, 107, 123, 0.1);
        }

        .demo-header {
          padding: 2rem;
          background: var(--color-base-romantic-ivory, #FBF8F4);
          border-bottom: 1px solid rgba(157, 107, 123, 0.1);
        }

        .demo-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          color: var(--color-base-warm-walnut, #6B4E3D);
          margin: 0 0 0.5rem 0;
        }

        .demo-header p {
          color: var(--color-base-muted-mauve, #A08A85);
          margin: 0;
          font-size: 1rem;
        }

        .demo-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .demo-preview {
          padding: 2rem;
          background: var(--color-base-soft-white, #FEFDFB);
        }

        .demo-code {
          background: #1a1a1a;
          border-top: 1px solid #333;
        }

        .code-demo {
          margin-bottom: 0;
        }

        .code-demo + .code-demo {
          border-top: 1px solid #333;
        }

        .code-header {
          background: #333;
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .code-title {
          color: #fff;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .code-language {
          color: #888;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .code-content {
          margin: 0;
          padding: 1.5rem;
          background: #1a1a1a;
          color: #e2e8f0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          overflow-x: auto;
        }

        .code-content code {
          color: #e2e8f0;
        }

        /* Form styling for demos */
        .demo-preview .cta-contact-section {
          background: var(--color-base-deep-forest, #3A4A3C);
          color: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          text-align: center;
        }

        .demo-preview .cta-contact-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .demo-preview .cta-contact-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-base-champagne-gold, #E4C896);
        }

        .demo-preview .cta-contact-header p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .demo-preview .cta-contact-form {
          display: grid;
          gap: 1.5rem;
          text-align: left;
        }

        .demo-preview .form-group {
          display: grid;
          gap: 0.5rem;
        }

        .demo-preview .form-group label {
          color: var(--color-base-champagne-gold, #E4C896);
          font-weight: 500;
        }

        .demo-preview .form-group input,
        .demo-preview .form-group select,
        .demo-preview .form-group textarea {
          padding: 0.875rem;
          border: 2px solid rgba(228, 200, 150, 0.3);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-family: 'Montserrat', sans-serif;
        }

        .demo-preview .form-group input::placeholder,
        .demo-preview .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .demo-preview .form-group input:focus,
        .demo-preview .form-group select:focus,
        .demo-preview .form-group textarea:focus {
          outline: none;
          border-color: var(--color-base-champagne-gold, #E4C896);
          background: rgba(255, 255, 255, 0.15);
        }

        .demo-preview .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .demo-variant {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--color-base-blush-pink, #F4E4E1);
          border-radius: 8px;
          border: 2px dashed rgba(157, 107, 123, 0.2);
        }

        .demo-variant h4 {
          color: var(--color-base-warm-walnut, #6B4E3D);
          margin: 0 0 1rem 0;
          font-family: 'Playfair Display', serif;
        }

        @media (max-width: 768px) {
          .schedule-tour-demo {
            padding: 1rem;
          }
          
          .demo-header-section h1 {
            font-size: 2rem;
          }
          
          .demo-preview {
            padding: 1rem;
          }

          .demo-preview .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <div className="demo-header-section">
        <h1>Schedule Tour Demo</h1>
        <p>Complete tour booking system with forms, validation, and Netlify integration. Showcasing all variants and implementation patterns used across the site.</p>
      </div>

      {/* Controls */}
      <div className="controls">
        <button 
          className="toggle-button"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code Examples' : 'Show Code Examples'}
        </button>
      </div>

      {/* Main ScheduleTourForm Component */}
      <DemoSection
        title="ScheduleTourForm Component (Default)"
        description="The main reusable component used across HomePage, ContactPage, and other pages"
        code={`import { ScheduleTourForm } from '../components/ScheduleTourForm';

<ScheduleTourForm 
  formName="schedule-tour"
  redirectPath="/thank-you"
  title="Start Planning Your Perfect Day"
  subtitle="Schedule Your Tour"
  description="We'd love to show you around our beautiful venue and discuss your wedding vision."
  submitText="Schedule Tour"
  loadingText="SCHEDULING..."
/>`}
        cssCode={`.cta-contact-section {
  background: var(--color-base-deep-forest, #3A4A3C);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
}

.cta-contact-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--color-base-champagne-gold, #E4C896);
}

.cta-contact-form {
  display: grid;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}`}
      >
        <ScheduleTourForm />
      </DemoSection>

      {/* Light Theme Variant */}
      <DemoSection
        title="Light Theme Variant"
        description="Alternative styling for light backgrounds and sections"
        code={`<ScheduleTourForm 
  lightTheme={true}
  title="Book Your Venue Tour"
  subtitle="Visit Our Venue"
  description="Experience the magic of Rum River Wedding Barn in person."
  className="light-section"
/>`}
        cssCode={`.cta-contact-section.light-theme {
  background: var(--color-base-romantic-ivory, #FBF8F4);
  color: var(--color-base-warm-walnut, #6B4E3D);
  border: 2px solid var(--color-base-dusty-rose, #9D6B7B);
}

.light-theme .cta-contact-header h2 {
  color: var(--color-base-dusty-rose, #9D6B7B);
}

.light-theme .form-group input,
.light-theme .form-group select,
.light-theme .form-group textarea {
  background: white;
  color: var(--color-base-warm-walnut, #6B4E3D);
  border-color: var(--color-base-dusty-rose, #9D6B7B);
}`}
      >
        <ScheduleTourForm 
          lightTheme={true}
          title="Book Your Venue Tour"
          subtitle="Visit Our Venue"
          description="Experience the magic of Rum River Wedding Barn in person."
          className="light-section"
        />
      </DemoSection>

      {/* Vendor Booking Form */}
      <DemoSection
        title="Vendor Booking Form"
        description="Specialized form for vendor inquiries and bookings"
        code={`<ScheduleTourForm 
  formType="vendor"
  formName="vendor-inquiry"
  title="Partner With Us"
  subtitle="Vendor Inquiry"
  description="Join our preferred vendor network and grow your wedding business."
  submitText="Submit Inquiry"
  loadingText="SENDING..."
/>`}
      >
        <ScheduleTourForm 
          formType="vendor"
          formName="vendor-inquiry"
          title="Partner With Us"
          subtitle="Vendor Inquiry"
          description="Join our preferred vendor network and grow your wedding business."
          submitText="Submit Inquiry"
          loadingText="SENDING..."
        />
      </DemoSection>

      {/* Custom NetlifyForm Implementation */}
      <DemoSection
        title="Custom NetlifyForm Component"
        description="Raw form implementation using the underlying NetlifyForm component"
        code={`import NetlifyForm from '../components/NetlifyForm';
import FormSubmitButton from '../components/FormSubmitButton';

<NetlifyForm name="custom-tour-form" action="/thank-you">
  {({ handleSubmit, submitting, error, honeypotField }) => (
    <form onSubmit={handleSubmit}>
      {honeypotField}
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input type="text" name="name" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input type="email" name="email" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" />
      </div>
      
      <div className="form-group">
        <label htmlFor="wedding-date">Preferred Wedding Date</label>
        <input type="date" name="wedding-date" />
      </div>
      
      <div className="form-group">
        <label htmlFor="guest-count">Expected Guest Count</label>
        <select name="guest-count">
          <option value="">Select guest count</option>
          <option value="50-75">50-75 guests</option>
          <option value="75-100">75-100 guests</option>
          <option value="100-125">100-125 guests</option>
          <option value="125-150">125-150 guests</option>
          <option value="150+">150+ guests</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Additional Information</label>
        <textarea 
          name="message" 
          rows="4" 
          placeholder="Tell us about your vision..."
        ></textarea>
      </div>
      
      <FormSubmitButton 
        submitting={submitting}
        submitText="Schedule My Tour"
        loadingText="SCHEDULING..."
        icon="📅"
        showIcon={true}
      />
    </form>
  )}
</NetlifyForm>`}
        cssCode={`.form-group {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.form-group label {
  color: var(--color-base-champagne-gold, #E4C896);
  font-weight: 500;
  font-size: 0.875rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem;
  border: 2px solid rgba(228, 200, 150, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-base-champagne-gold, #E4C896);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(228, 200, 150, 0.1);
}

.error-message {
  background: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.3);
  color: #dc3545;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}`}
      >
        <div style={{ background: 'var(--color-base-deep-forest, #3A4A3C)', padding: '2rem', borderRadius: '12px', color: 'white' }}>
          <NetlifyForm name="custom-tour-form" action="/thank-you">
            {({ handleSubmit, submitting, error, honeypotField }) => (
              <form className="cta-contact-form" onSubmit={handleSubmit}>
                {honeypotField}
                {error && (
                  <div style={{
                    background: 'rgba(220, 53, 69, 0.1)',
                    border: '1px solid rgba(220, 53, 69, 0.3)',
                    color: '#dc3545',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem'
                  }}>
                    {error}
                  </div>
                )}
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" name="email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="wedding-date">Preferred Wedding Date</label>
                    <input type="date" name="wedding-date" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="guest-count">Expected Guest Count</label>
                  <select name="guest-count">
                    <option value="">Select guest count</option>
                    <option value="50-75">50-75 guests</option>
                    <option value="75-100">75-100 guests</option>
                    <option value="100-125">100-125 guests</option>
                    <option value="125-150">125-150 guests</option>
                    <option value="150+">150+ guests</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>
                
                <FormSubmitButton 
                  submitting={submitting}
                  submitText="Schedule My Tour"
                  loadingText="SCHEDULING..."
                  icon="📅"
                  showIcon={true}
                />
              </form>
            )}
          </NetlifyForm>
        </div>
      </DemoSection>

      {/* Form Field Variations */}
      <DemoSection
        title="Form Field Variations & States"
        description="Different input types, validation states, and accessibility features"
        code={`/* Form field variations */
<div className="form-group">
  <label htmlFor="email">Email Address *</label>
  <input 
    type="email" 
    name="email" 
    required 
    aria-describedby="email-help"
  />
  <small id="email-help">We'll never share your email</small>
</div>

<div className="form-group error">
  <label htmlFor="phone">Phone Number</label>
  <input 
    type="tel" 
    name="phone" 
    className="error"
    aria-invalid="true"
    aria-describedby="phone-error"
  />
  <span id="phone-error" className="error-text">
    Please enter a valid phone number
  </span>
</div>

<div className="form-group success">
  <label htmlFor="name">Full Name ✓</label>
  <input 
    type="text" 
    name="name" 
    className="success"
    value="John & Sarah"
    readOnly
  />
</div>`}
        cssCode={`.form-group.error input {
  border-color: #dc3545;
  background: rgba(220, 53, 69, 0.1);
}

.form-group.success input {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.1);
}

.form-group small {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}

.error-text {
  color: #dc3545;
  font-size: 0.75rem;
  font-weight: 500;
}

.form-group label::after {
  content: " *";
  color: #dc3545;
}`}
      >
        <div style={{ display: 'grid', gap: '1.5rem', background: 'var(--color-base-deep-forest, #3A4A3C)', padding: '2rem', borderRadius: '12px', color: 'white' }}>
          <div className="form-group">
            <label htmlFor="demo-email" style={{ color: 'var(--color-base-champagne-gold, #E4C896)', fontWeight: 500 }}>Email Address *</label>
            <input 
              type="email" 
              id="demo-email"
              name="email" 
              required 
              placeholder="your@email.com"
              style={{
                padding: '0.875rem',
                border: '2px solid rgba(228, 200, 150, 0.3)',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontFamily: 'Montserrat, sans-serif'
              }}
              aria-describedby="email-help"
            />
            <small id="email-help" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem' }}>We'll never share your email</small>
          </div>

          <div className="form-group error">
            <label htmlFor="demo-phone" style={{ color: 'var(--color-base-champagne-gold, #E4C896)', fontWeight: 500 }}>Phone Number</label>
            <input 
              type="tel" 
              id="demo-phone"
              name="phone" 
              placeholder="(555) 123-4567"
              style={{
                padding: '0.875rem',
                border: '2px solid #dc3545',
                borderRadius: '8px',
                background: 'rgba(220, 53, 69, 0.1)',
                color: 'white',
                fontFamily: 'Montserrat, sans-serif'
              }}
              aria-invalid="true"
              aria-describedby="phone-error"
            />
            <span id="phone-error" style={{ color: '#dc3545', fontSize: '0.75rem', fontWeight: 500 }}>
              Please enter a valid phone number
            </span>
          </div>

          <div className="form-group success">
            <label htmlFor="demo-name" style={{ color: 'var(--color-base-champagne-gold, #E4C896)', fontWeight: 500 }}>Full Name ✓</label>
            <input 
              type="text" 
              id="demo-name"
              name="name" 
              value="John & Sarah"
              readOnly
              style={{
                padding: '0.875rem',
                border: '2px solid #28a745',
                borderRadius: '8px',
                background: 'rgba(40, 167, 69, 0.1)',
                color: 'white',
                fontFamily: 'Montserrat, sans-serif'
              }}
            />
          </div>
        </div>
      </DemoSection>

      {/* Integration Examples */}
      <DemoSection
        title="Integration Examples"
        description="How the ScheduleTourForm is used across different pages and contexts"
        code={`// HomePage integration
<ScheduleTourForm 
  formName="homepage-tour"
  title="Start Planning Your Perfect Day"
  subtitle="Schedule Your Tour"
  description="We'd love to show you around our beautiful venue and discuss your wedding vision."
/>

// ContactPage integration  
<ScheduleTourForm 
  lightTheme={true}
  formName="contact-tour"
  title="Visit Our Venue"
  subtitle="Book Your Tour"
  description="Experience the magic of Rum River Wedding Barn in person."
  className="contact-section"
/>

// Property page integration
<ScheduleTourForm 
  formName="property-tour"
  title="See It For Yourself"
  subtitle="Venue Tour"
  description="Walk through our beautiful spaces and envision your perfect day."
  showHeader={true}
  sectionStyle={{ background: 'var(--sage-green)' }}
/>`}
        cssCode={`/* Different page contexts */
.homepage-tour .cta-contact-section {
  background: var(--color-base-deep-forest, #3A4A3C);
  margin: 4rem 0;
}

.contact-section .cta-contact-section {
  background: var(--color-base-romantic-ivory, #FBF8F4);
  color: var(--color-base-warm-walnut, #6B4E3D);
  border: 2px solid var(--color-base-dusty-rose, #9D6B7B);
}

.property-tour .cta-contact-section {
  background: var(--color-base-sage-whisper, #9CAA9E);
  color: white;
}`}
      >
        <div className="demo-variant">
          <h4>HomePage Context</h4>
          <ScheduleTourForm 
            formName="homepage-tour"
            title="Start Planning Your Perfect Day"
            subtitle="Schedule Your Tour"
            description="We'd love to show you around our beautiful venue and discuss your wedding vision."
          />
        </div>

        <div className="demo-variant">
          <h4>ContactPage Context (Light Theme)</h4>
          <ScheduleTourForm 
            lightTheme={true}
            formName="contact-tour"
            title="Visit Our Venue"
            subtitle="Book Your Tour"
            description="Experience the magic of Rum River Wedding Barn in person."
            className="contact-section"
          />
        </div>
      </DemoSection>

      {/* Summary */}
      <div className="demo-section">
        <div className="demo-header">
          <h3>Schedule Tour System Summary</h3>
          <p>Complete overview of the tour booking implementation</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--color-base-romantic-ivory, #FBF8F4)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)', marginTop: 0 }}>Components:</h4>
          <ul style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>
            <li><strong>ScheduleTourForm</strong> - Main reusable component</li>
            <li><strong>NetlifyForm</strong> - Underlying form handler with validation</li>
            <li><strong>FormSubmitButton</strong> - Accessible submit button with loading states</li>
          </ul>
          
          <h4 style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>Features:</h4>
          <ul style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>
            <li><strong>Netlify Forms Integration</strong> - Automatic form handling and spam protection</li>
            <li><strong>Theme Variants</strong> - Dark and light theme support</li>
            <li><strong>Form Types</strong> - Tour booking and vendor inquiry variants</li>
            <li><strong>Validation</strong> - Client-side and server-side validation</li>
            <li><strong>Accessibility</strong> - WCAG 2.1 AA compliant form elements</li>
            <li><strong>Loading States</strong> - Visual feedback during submission</li>
            <li><strong>Error Handling</strong> - Graceful error messages and recovery</li>
          </ul>

          <h4 style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)' }}>Design Tokens Used:</h4>
          <ul style={{ color: 'var(--color-base-warm-walnut, #6B4E3D)', fontSize: '0.875rem' }}>
            <li>--color-base-deep-forest: #3A4A3C (dark theme background)</li>
            <li>--color-base-champagne-gold: #E4C896 (labels and accents)</li>
            <li>--color-base-dusty-rose: #9D6B7B (borders and focus states)</li>
            <li>--color-base-romantic-ivory: #FBF8F4 (light theme background)</li>
            <li>--font-family-display: 'Playfair Display', serif (headings)</li>
            <li>--font-family-body: 'Montserrat', sans-serif (form elements)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}