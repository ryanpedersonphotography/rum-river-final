import ScheduleTourForm from '../components/ScheduleTourForm'

export default function ScheduleTourStandalone() {
  return (
    <>
      {/* Schedule Your Tour Form Section */}
      <ScheduleTourForm
        formName="schedule-tour-demo"
        title="Start Planning Your Perfect Day"
        subtitle="Schedule Your Tour"
        description="We'd love to show you around our beautiful venue and discuss your wedding vision."
      />

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Schedule Tour Form Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the contact form above</p>
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
{`<!-- Schedule Your Tour Form Section -->
<section className="cta-contact-section">
  <div className="cta-contact-container">
    <div className="cta-contact-header">
      <p className="script-font">Schedule Your Tour</p>
      <h2>Start Planning Your Perfect Day</h2>
      <p>We'd love to show you around our beautiful venue and discuss your wedding vision.</p>
    </div>
    
    <form className="cta-contact-form" onSubmit={handleSubmit}>
      <!-- Full Name -->
      <div className="cta-form-group cta-full-width">
        <label htmlFor="name">Your Name *</label>
        <input type="text" id="name" name="name" required />
      </div>
      
      <!-- Email & Phone Row -->
      <div className="cta-form-row">
        <div className="cta-form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="cta-form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
      </div>
      
      <!-- Event Date & Tour Date Row -->
      <div className="cta-form-row">
        <div className="cta-form-group">
          <label htmlFor="proposedEventDate">Proposed Event Date</label>
          <input type="date" id="proposedEventDate" name="proposedEventDate" />
        </div>
        <div className="cta-form-group">
          <label htmlFor="preferredTourDate">Preferred Tour Date *</label>
          <input type="date" id="preferredTourDate" name="preferredTourDate" required />
        </div>
      </div>
      
      <!-- Tour Time & Guest Count Row -->
      <div className="cta-form-row">
        <div className="cta-form-group">
          <label htmlFor="preferredTourTime">Preferred Tour Time</label>
          <select id="preferredTourTime" name="preferredTourTime">
            <option value="">Select Time</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
          </select>
        </div>
        <div className="cta-form-group">
          <label htmlFor="guestCount">Estimated Guest Count</label>
          <select id="guestCount" name="guestCount">
            <option value="">Select Range</option>
            <option value="50-100">50-100 Guests</option>
            <option value="100-150">100-150 Guests</option>
            <option value="150-200">150-200 Guests</option>
            <option value="200+">200+ Guests</option>
          </select>
        </div>
      </div>
      
      <!-- Message -->
      <div className="cta-form-group cta-full-width">
        <label htmlFor="message">Additional Information or Questions</label>
        <textarea id="message" name="message" 
                  placeholder="Tell us about your event plans or any specific questions...">
        </textarea>
      </div>
      
      <!-- Submit Button -->
      <button type="submit" className="cta-form-submit">
        Schedule Tour
      </button>
    </form>
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
{`// React Component with Form Handling
import React from 'react';
import NetlifyForm from '../components/NetlifyForm';
import FormSubmitButton from '../components/FormSubmitButton';

export const ScheduleTourForm = ({
  formName = 'schedule-tour',
  redirectPath = '/thank-you',
  title = "Start Planning Your Perfect Day",
  subtitle = "Schedule Your Tour",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  submitText = 'Schedule Tour',
  loadingText = 'SCHEDULING...',
  className = '',
  showHeader = true
}) => {
  return (
    <section className={\`cta-contact-section \${className}\`.trim()}>
      <div className="cta-contact-container">
        {showHeader && (
          <div className="cta-contact-header">
            <p className="script-font">{subtitle}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        )}
        
        {/* Netlify Form Integration */}
        <NetlifyForm name={formName} action={redirectPath}>
          {({ handleSubmit, submitting, error, honeypotField }) => (
            <form className="cta-contact-form" onSubmit={handleSubmit}>
              {honeypotField}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              {/* Form fields with validation */}
              <div className="cta-form-group cta-full-width">
                <label htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  disabled={submitting} 
                />
              </div>
              
              {/* More form fields... */}
              
              <FormSubmitButton
                submitting={submitting}
                submitText={submitText}
                loadingText={loadingText}
              />
            </form>
          )}
        </NetlifyForm>
      </div>
    </section>
  );
};

// Form Validation and Submission Logic
const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  }
  
  if (!formData.preferredTourDate) {
    errors.preferredTourDate = 'Preferred tour date is required';
  }
  
  return errors;
};

// Netlify Form Submission Handler
const handleFormSubmit = async (formData) => {
  const formBody = new FormData();
  formBody.append('form-name', 'schedule-tour');
  
  Object.keys(formData).forEach(key => {
    formBody.append(key, formData[key]);
  });
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formBody).toString()
    });
    
    if (response.ok) {
      window.location.href = '/thank-you';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return 'There was an error submitting your form. Please try again.';
  }
};`}
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
{`/* Schedule Tour Contact Section */
.cta-contact-section {
  background: linear-gradient(135deg, var(--warm-walnut) 0%, var(--deep-brown) 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.cta-contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/texture-overlay.png') repeat;
  opacity: 0.1;
  pointer-events: none;
}

.cta-contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Header Styling */
.cta-contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cta-contact-header .script-font {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--champagne-gold);
  margin-bottom: 1rem;
  display: block;
}

.cta-contact-header h2 {
  font-family: var(--font-display);
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.cta-contact-header p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
}

/* Form Styling */
.cta-contact-form {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.cta-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.cta-form-group {
  display: flex;
  flex-direction: column;
}

.cta-form-group.cta-full-width {
  grid-column: span 2;
  margin-bottom: 1.5rem;
}

.cta-form-group label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-form-group input,
.cta-form-group select,
.cta-form-group textarea {
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-dark);
  background: white;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.cta-form-group input:focus,
.cta-form-group select:focus,
.cta-form-group textarea:focus {
  outline: none;
  border-color: var(--dusty-rose);
  box-shadow: 0 0 0 3px rgba(212, 165, 165, 0.1);
}

.cta-form-group textarea {
  min-height: 120px;
  resize: vertical;
}

/* Submit Button */
.cta-form-submit {
  background: linear-gradient(135deg, var(--dusty-rose) 0%, var(--deep-rose) 100%);
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.cta-form-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(212, 165, 165, 0.4);
}

.cta-form-submit:active {
  transform: translateY(0);
}

.cta-form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Error Styling */
.error-message {
  background: rgba(212, 165, 165, 0.1);
  border: 1px solid rgba(212, 165, 165, 0.3);
  color: var(--warm-walnut);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .cta-contact-section {
    padding: 80px 0;
  }
  
  .cta-contact-container {
    padding: 0 1rem;
  }
  
  .cta-contact-header h2 {
    font-size: 2.5rem;
  }
  
  .cta-contact-form {
    padding: 2rem;
  }
  
  .cta-form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .cta-form-group.cta-full-width {
    grid-column: span 1;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}