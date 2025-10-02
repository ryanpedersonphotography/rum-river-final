import NetlifyForm from './NetlifyForm'
import FormSubmitButton from './FormSubmitButton'

/**
 * CTAFormSection - Reusable CTA section with form
 * 
 * Props:
 * - variant: 'light' | 'dark' (default: 'light')
 * - background: 'cream' | 'ivory' | 'blush' | 'walnut' | 'forest' | 'gradient' (default: based on variant)
 * - containerStyle: 'white' | 'transparent' | 'glass' (default: 'white')
 * - formSize: 'mini' | 'full' (default: 'full')
 * - scriptAccent: string (optional - shows cursive text above title)
 * - title: string (default: "Start Planning Your Perfect Day")
 * - description: string (default: "We'd love to show you around...")
 * - submitText: string (default: "Schedule Tour")
 * - formName: string (required for Netlify)
 * - redirectPath: string (default: '/thank-you')
 */
export default function CTAFormSection({
  variant = 'light',
  background = null,
  containerStyle = 'white',
  formSize = 'full',
  scriptAccent = '',
  title = "Start Planning Your Perfect Day",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  submitText = 'Schedule Tour',
  formName = 'cta-form',
  redirectPath = '/thank-you',
  className = ''
}) {
  // Determine background class based on variant if not explicitly set
  const getBackgroundClass = () => {
    if (background === 'gradient') return 'dark-gradient-section'
    if (background === 'walnut') return 'section-walnut'
    if (background === 'forest') return 'section-forest'
    if (background === 'cream') return 'section-cream'
    if (background === 'ivory') return 'section-ivory'
    if (background === 'blush') return 'section-blush'
    
    // Default based on variant
    return variant === 'dark' ? 'dark-section' : 'section'
  }

  const sectionClass = `${getBackgroundClass()} ${className}`.trim()
  
  // Determine container styles based on containerStyle prop
  const getContainerStyle = () => {
    if (containerStyle === 'transparent') {
      return {
        background: 'transparent',
        boxShadow: 'none',
        padding: 0
      }
    }
    if (containerStyle === 'glass') {
      return {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }
    }
    // Default 'white' style - use the CSS class styles
    return {}
  }

  const containerClass = containerStyle === 'white' ? 'cta-contact-container' : ''
  const containerInlineStyle = containerStyle !== 'white' ? getContainerStyle() : {}
  
  return (
    <section className="cta-contact-section" id="lets-connect-form">
      <div className={containerClass} style={containerInlineStyle}>
        <div className="cta-contact-header">
          {scriptAccent && (
            <p className="script-font">{scriptAccent}</p>
          )}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {/* Form */}
        <NetlifyForm name={formName} action={redirectPath}>
            {({ handleSubmit, submitting, error, honeypotField }) => (
              <form 
                className="cta-contact-form"
                onSubmit={handleSubmit}
              >
                {honeypotField}
                
                {error && (
                  <div style={{
                    background: formVariant === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(212, 165, 165, 0.1)',
                    border: '1px solid rgba(212, 165, 165, 0.3)',
                    color: formVariant === 'dark' ? 'white' : 'var(--warm-walnut)',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    {error}
                  </div>
                )}

                <div style={{
                  display: 'grid',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {/* Name Field - Always shown */}
                  <div>
                    <label htmlFor="name" style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                    }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={submitting}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        border: formVariant === 'dark' 
                          ? '1px solid rgba(255,255,255,0.2)'
                          : '1px solid rgba(212, 165, 116, 0.3)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        background: formVariant === 'dark' 
                          ? 'rgba(255,255,255,0.05)'
                          : 'white',
                        color: variant === 'dark' ? 'white' : 'var(--text-dark)'
                      }}
                    />
                  </div>

                  {/* Email Field - Always shown */}
                  <div>
                    <label htmlFor="email" style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={submitting}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        border: formVariant === 'dark' 
                          ? '1px solid rgba(255,255,255,0.2)'
                          : '1px solid rgba(212, 165, 116, 0.3)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        background: formVariant === 'dark' 
                          ? 'rgba(255,255,255,0.05)'
                          : 'white',
                        color: variant === 'dark' ? 'white' : 'var(--text-dark)'
                      }}
                    />
                  </div>

                  {/* Phone Field - Always shown for mini, shown for full */}
                  <div>
                    <label htmlFor="phone" style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                    }}>
                      Phone Number {formSize === 'mini' && '(Optional)'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={submitting}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        border: formVariant === 'dark' 
                          ? '1px solid rgba(255,255,255,0.2)'
                          : '1px solid rgba(212, 165, 116, 0.3)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        background: formVariant === 'dark' 
                          ? 'rgba(255,255,255,0.05)'
                          : 'white',
                        color: variant === 'dark' ? 'white' : 'var(--text-dark)'
                      }}
                    />
                  </div>

                  {/* Preferred Date - Always shown */}
                  <div>
                    <label htmlFor="preferred_date" style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                    }}>
                      Preferred {formSize === 'mini' ? 'Date & Time' : 'Event Date'}
                    </label>
                    <input
                      type={formSize === 'mini' ? 'text' : 'date'}
                      id="preferred_date"
                      name="preferred_date"
                      placeholder={formSize === 'mini' ? 'e.g., Next Saturday afternoon' : ''}
                      disabled={submitting}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        border: formVariant === 'dark' 
                          ? '1px solid rgba(255,255,255,0.2)'
                          : '1px solid rgba(212, 165, 116, 0.3)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        background: formVariant === 'dark' 
                          ? 'rgba(255,255,255,0.05)'
                          : 'white',
                        color: variant === 'dark' ? 'white' : 'var(--text-dark)'
                      }}
                    />
                  </div>

                  {/* Full Form Additional Fields */}
                  {formSize === 'full' && (
                    <>
                      {/* Event Type */}
                      <div>
                        <label htmlFor="event_type" style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                        }}>
                          Event Type
                        </label>
                        <select
                          id="event_type"
                          name="event_type"
                          disabled={submitting}
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: variant === 'dark' 
                              ? '1px solid rgba(255,255,255,0.2)'
                              : '1px solid rgba(212, 165, 116, 0.3)',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: variant === 'dark' 
                              ? 'rgba(255,255,255,0.05)'
                              : 'white',
                            color: variant === 'dark' ? 'white' : 'var(--text-dark)'
                          }}
                        >
                          <option value="">Select Type</option>
                          <option value="wedding">Wedding</option>
                          <option value="engagement">Engagement Party</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="other">Other Celebration</option>
                        </select>
                      </div>

                      {/* Guest Count */}
                      <div>
                        <label htmlFor="guest_count" style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                        }}>
                          Estimated Guest Count
                        </label>
                        <input
                          type="text"
                          id="guest_count"
                          name="guest_count"
                          placeholder="e.g., 150-200"
                          disabled={submitting}
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: variant === 'dark' 
                              ? '1px solid rgba(255,255,255,0.2)'
                              : '1px solid rgba(212, 165, 116, 0.3)',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: variant === 'dark' 
                              ? 'rgba(255,255,255,0.05)'
                              : 'white',
                            color: variant === 'dark' ? 'white' : 'var(--text-dark)'
                          }}
                        />
                      </div>

                      {/* Message */}
                      <div style={{ gridColumn: 'span 1' }}>
                        <label htmlFor="message" style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          color: formVariant === 'dark' ? 'rgba(255,255,255,0.9)' : 'var(--warm-walnut)'
                        }}>
                          Tell Us About Your Vision
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Share any special requests or questions..."
                          disabled={submitting}
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: variant === 'dark' 
                              ? '1px solid rgba(255,255,255,0.2)'
                              : '1px solid rgba(212, 165, 116, 0.3)',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: variant === 'dark' 
                              ? 'rgba(255,255,255,0.05)'
                              : 'white',
                            color: variant === 'dark' ? 'white' : 'var(--text-dark)',
                            resize: 'vertical'
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Submit Button */}
                <div style={{ textAlign: 'center' }}>
                  <FormSubmitButton
                    submitting={submitting}
                    submitText={submitText}
                    loadingText="SCHEDULING..."
                  />
                </div>
              </form>
            )}
          </NetlifyForm>
      </div>
    </section>
  )
}