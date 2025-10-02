import React from 'react';
import NetlifyForm from './NetlifyForm';
import FormSubmitButton from './FormSubmitButton';

/**
 * ScheduleTourForm Component
 * Reusable schedule tour form for "Let's Start Planning Together" sections
 * Used across HomePage, ContactPage, and other pages needing tour scheduling
 */
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
    <section className={`cta-contact-section ${className}`.trim()}>
      <div className="cta-contact-container">
        {showHeader && (
          <div className="cta-contact-header">
            <p className="script-font">{subtitle}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        )}
        
        <NetlifyForm name={formName} action={redirectPath}>
          {({ handleSubmit, submitting, error, honeypotField }) => (
            <form className="cta-contact-form" onSubmit={handleSubmit}>
              {honeypotField}
              {error && (
                <div style={{
                  background: 'rgba(212, 165, 165, 0.1)',
                  border: '1px solid rgba(212, 165, 165, 0.3)',
                  color: 'var(--warm-walnut)',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  {error}
                </div>
              )}
              
              {/* Full Name */}
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
              
              {/* Email & Phone Row */}
              <div className="cta-form-row">
                <div className="cta-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    disabled={submitting} 
                  />
                </div>
                <div className="cta-form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    disabled={submitting} 
                  />
                </div>
              </div>
              
              {/* Event Date & Tour Date Row */}
              <div className="cta-form-row">
                <div className="cta-form-group">
                  <label htmlFor="proposedEventDate">Proposed Event Date</label>
                  <input 
                    type="date" 
                    id="proposedEventDate" 
                    name="proposedEventDate" 
                    disabled={submitting} 
                  />
                </div>
                <div className="cta-form-group">
                  <label htmlFor="preferredTourDate">Preferred Tour Date *</label>
                  <input 
                    type="date" 
                    id="preferredTourDate" 
                    name="preferredTourDate" 
                    required 
                    disabled={submitting} 
                  />
                </div>
              </div>
              
              {/* Tour Time & Guest Count Row */}
              <div className="cta-form-row">
                <div className="cta-form-group">
                  <label htmlFor="preferredTourTime">Preferred Tour Time</label>
                  <select 
                    id="preferredTourTime" 
                    name="preferredTourTime" 
                    disabled={submitting}
                  >
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
                  <select 
                    id="guestCount" 
                    name="guestCount" 
                    disabled={submitting}
                  >
                    <option value="">Select Range</option>
                    <option value="50-100">50-100 Guests</option>
                    <option value="100-150">100-150 Guests</option>
                    <option value="150-200">150-200 Guests</option>
                    <option value="200+">200+ Guests</option>
                  </select>
                </div>
              </div>
              
              {/* Message */}
              <div className="cta-form-group cta-full-width">
                <label htmlFor="message">Additional Information or Questions</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your event plans or any specific questions..." 
                  disabled={submitting}
                ></textarea>
              </div>
              
              {/* Submit Button */}
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

export default ScheduleTourForm;