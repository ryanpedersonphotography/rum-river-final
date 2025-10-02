import NetlifyForm from './NetlifyForm'
import FormSubmitButton from './FormSubmitButton'

/**
 * ContactForm - Standalone contact form with layout variations
 * 
 * Props:
 * - layout: 'container' | 'inline' | 'minimal' (default: 'container')
 *   - 'container': White container with header (current design)
 *   - 'inline': No container, form fields only
 *   - 'minimal': Compact single-row layout
 * - scriptAccent: string (optional - cursive text above title)
 * - title: string (default: "Start Planning Your Perfect Day")
 * - description: string (default: "We'd love to show you around...")
 * - formName: string (required for Netlify)
 * - redirectPath: string (default: '/thank-you')
 */
export default function ContactForm({
  layout = 'container',
  scriptAccent = 'Schedule Your Tour',
  title = "Start Planning Your Perfect Day",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  formName = 'contact-form',
  redirectPath = '/thank-you'
}) {
  
  const renderHeader = () => {
    if (layout === 'minimal') return null
    
    return (
      <div className="cta-contact-header">
        {scriptAccent && <p className="script-font">{scriptAccent}</p>}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  }

  const renderForm = () => (
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
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          {layout === 'minimal' ? (
            // Minimal layout - single row
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              alignItems: 'end'
            }}>
              <div className="cta-form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required disabled={submitting} />
              </div>
              <div className="cta-form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required disabled={submitting} />
              </div>
              <div className="cta-form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" disabled={submitting} />
              </div>
              <div>
                <FormSubmitButton
                  submitting={submitting}
                  submitText="Schedule Tour"
                  loadingText="SENDING..."
                />
              </div>
            </div>
          ) : (
            // Container and Inline layouts - full form
            <>
              <div className="cta-form-row">
                <div className="cta-form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required disabled={submitting} />
                </div>
                <div className="cta-form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required disabled={submitting} />
                </div>
              </div>

              <div className="cta-form-row">
                <div className="cta-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required disabled={submitting} />
                </div>
                <div className="cta-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" disabled={submitting} />
                </div>
              </div>

              <div className="cta-form-row">
                <div className="cta-form-group">
                  <label htmlFor="eventDate">Preferred Event Date</label>
                  <input type="date" id="eventDate" name="eventDate" disabled={submitting} />
                </div>
                <div className="cta-form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select id="eventType" name="eventType" disabled={submitting}>
                    <option value="">Select Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>
              </div>

              <div className="cta-form-group cta-full-width">
                <label htmlFor="message">Tell Us About Your Vision</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Share any special requests or questions..."
                  disabled={submitting}
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <FormSubmitButton
                  submitting={submitting}
                  submitText="Schedule Your Tour"
                  loadingText="SCHEDULING..."
                />
              </div>
            </>
          )}
        </form>
      )}
    </NetlifyForm>
  )

  // Render based on layout
  if (layout === 'container') {
    return (
      <div className="cta-contact-container">
        {renderHeader()}
        {renderForm()}
      </div>
    )
  }

  if (layout === 'inline') {
    return (
      <div className="content-wrapper">
        {renderHeader()}
        {renderForm()}
      </div>
    )
  }

  // Minimal layout
  return (
    <div className="content-wrapper">
      {renderForm()}
    </div>
  )
}