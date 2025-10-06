export default function ScheduleVisitFormStandalone() {
  return (
    <>
      {/* Schedule Your Visit Form */}
      <section className="contact-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Let's Start Planning</div>
            <h2 className="section-title">Schedule Your Visit</h2>
            <p className="lead">
              Ready to see where your love story will unfold? Schedule a private tour
              and let us show you why Rum River Wedding Barn is the perfect setting for your celebration.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-content">
              <div className="script-accent">Let's Start Planning</div>
              <h2 className="section-title">Schedule Your Visit</h2>
              <p className="lead">
                Ready to see where your love story will unfold? Schedule a private tour
                and let us show you why Rum River Wedding Barn is the perfect setting for your celebration.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Visit Us</h4>
                    <p>12500 Rum River Drive<br />Princeton, MN 55371</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>(763) 555-BARN<br />Available 7 days a week</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>hello@rumriverweddings.com<br />We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-header">
                  <h3>Book Your Tour</h3>
                  <p>Fill out the form below and we'll be in touch within 24 hours.</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Bride's Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Partner's Name</label>
                    <input type="text" placeholder="Partner's name" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(123) 456-7890" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Wedding Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Guest Count</label>
                    <select>
                      <option>Select guest count</option>
                      <option>50-100 guests</option>
                      <option>100-150 guests</option>
                      <option>150-200 guests</option>
                      <option>200+ guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Tell us about your dream wedding</label>
                  <textarea rows={4} placeholder="Share your vision with us..."></textarea>
                </div>

                <button type="submit" className="romantic-button primary full-width">
                  Schedule My Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Schedule Visit Form Code</h2>
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
{`<!-- Schedule Your Visit Form Section -->
<section className="contact-section section">
  <div className="content-wrapper">
    <div className="section-header center">
      <div className="script-accent">Let's Start Planning</div>
      <h2 className="section-title">Schedule Your Visit</h2>
      <p className="lead">
        Ready to see where your love story will unfold? Schedule a private tour
        and let us show you why Rum River Wedding Barn is the perfect setting for your celebration.
      </p>
    </div>
    
    <div className="contact-grid">
      <!-- Contact Information -->
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h4>Visit Us</h4>
              <p>12500 Rum River Drive<br />Princeton, MN 55371</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <h4>Call Us</h4>
              <p>(763) 555-BARN<br />Available 7 days a week</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div className="info-content">
              <h4>Email Us</h4>
              <p>hello@rumriverweddings.com<br />We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div className="contact-form-wrapper">
        <form className="contact-form">
          <div className="form-header">
            <h3>Book Your Tour</h3>
            <p>Fill out the form below and we'll be in touch within 24 hours.</p>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Bride's Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Partner's Name</label>
              <input type="text" placeholder="Partner's name" />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="(123) 456-7890" />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Wedding Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Guest Count</label>
              <select>
                <option>Select guest count</option>
                <option>50-100 guests</option>
                <option>100-150 guests</option>
                <option>150-200 guests</option>
                <option>200+ guests</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Tell us about your dream wedding</label>
            <textarea rows="4" placeholder="Share your vision with us..."></textarea>
          </div>

          <button type="submit" className="romantic-button primary full-width">
            Schedule My Tour
          </button>
        </form>
      </div>
    </div>
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
{`// Form Validation and Submission Handler
export default function ScheduleVisitForm() {
  const [formData, setFormData] = useState({
    brideName: '',
    partnerName: '',
    email: '',
    phone: '',
    weddingDate: '',
    guestCount: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const requiredFields = ['brideName', 'email', 'phone']
    const missingFields = requiredFields.filter(field => !formData[field].trim())
    
    if (missingFields.length > 0) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' })
      return false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' })
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Submit to Netlify Forms (or your preferred service)
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'schedule-visit',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! We\\'ll be in touch within 24 hours.' 
        })
        setFormData({
          brideName: '', partnerName: '', email: '', 
          phone: '', weddingDate: '', guestCount: '', message: ''
        })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or call us directly.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Form fields with value and onChange handlers */}
      <input 
        type="text" 
        name="brideName"
        value={formData.brideName}
        onChange={handleInputChange}
        placeholder="Your name" 
        required 
      />
      {/* ... other form fields ... */}
      
      <button 
        type="submit" 
        className="romantic-button primary full-width"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule My Tour'}
      </button>
      
      {submitStatus && (
        <div className={\`form-status \${submitStatus.type}\`}>
          {submitStatus.message}
        </div>
      )}
    </form>
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
{`/* Schedule Visit Form Section */
.contact-section {
  background: white;
  padding: 100px 0;
}

.contact-section .section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-section .script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
  display: block;
}

.contact-section .section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
}

.contact-section .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Contact Grid Layout */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

/* Contact Information */
.contact-content {
  padding: 2rem 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  margin-top: 0.25rem;
  min-width: 2rem;
}

.info-content h4 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--warm-walnut);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-content p {
  color: var(--text-dark);
  line-height: 1.6;
  margin: 0;
}

/* Contact Form */
.contact-form-wrapper {
  background: var(--romantic-ivory);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.contact-form .form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-form .form-header h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--warm-walnut);
  margin-bottom: 0.5rem;
}

.contact-form .form-header p {
  color: var(--text-dark);
  opacity: 0.8;
  margin: 0;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--warm-walnut);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem 1rem;
  border: 2px solid rgba(212, 165, 165, 0.2);
  border-radius: 6px;
  font-family: var(--font-body);
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--dusty-rose);
  box-shadow: 0 0 0 3px rgba(212, 165, 165, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
  line-height: 1.6;
}

/* Full Width Form Group */
.form-group.full-width {
  grid-column: 1 / -1;
}

/* Submit Button */
.romantic-button {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none;
  letter-spacing: 0.02em;
}

.romantic-button.primary {
  background: linear-gradient(135deg, var(--dusty-rose) 0%, var(--sage-green) 100%);
  color: white;
}

.romantic-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 165, 165, 0.3);
}

.romantic-button.primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.romantic-button.full-width {
  width: 100%;
  margin-top: 1rem;
}

/* Form Status Messages */
.form-status {
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}

.form-status.success {
  background: rgba(72, 187, 120, 0.1);
  color: #2f855a;
  border: 1px solid rgba(72, 187, 120, 0.2);
}

.form-status.error {
  background: rgba(245, 101, 101, 0.1);
  color: #c53030;
  border: 1px solid rgba(245, 101, 101, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-form-wrapper {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }
  
  .contact-section .section-title {
    font-size: 2.5rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-form-wrapper {
    padding: 1.5rem;
  }
  
  .romantic-button {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }
}

/* Animation States */
.contact-form-wrapper.submitting {
  opacity: 0.7;
  pointer-events: none;
}

.contact-form-wrapper.submitting::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

/* Form Field Validation States */
.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #e53e3e;
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
}

.form-group input.success,
.form-group select.success,
.form-group textarea.success {
  border-color: #38a169;
  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.1);
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}