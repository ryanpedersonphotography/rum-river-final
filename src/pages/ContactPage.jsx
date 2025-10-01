import PageTemplate from '../components/PageTemplate'
import NetlifyForm from '../components/NetlifyForm'

export default function ContactPage() {
  const heroContent = (
    <>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: 'white'
      }}>
        Get in Touch
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        We'd love to hear from you! Reach out to schedule a tour, ask questions, or start planning your special day.
      </p>
    </>
  )

  return (
    <PageTemplate heroContent={heroContent}>

      {/* ID: CONTACT_FORM_001 - Let's Connect Form Section */}
      <section id="lets-connect-form" className="cta-contact-section">
        <div className="cta-contact-container">
          <NetlifyForm name="contact" action="/thank-you">
            {({ handleSubmit, submitting, error }) => (
              <form className="cta-contact-form" id="contactForm" onSubmit={handleSubmit}>
                {error && (
                  <div style={{
                    background: '#fee',
                    border: '1px solid #fcc',
                    color: '#c33',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem'
                  }}>
                    {error}
                  </div>
                )}
                <div className="cta-form-row">
                  <div className="cta-form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required disabled={submitting} />
                  </div>
                  <div className="cta-form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required disabled={submitting} />
                  </div>
                </div>
                <div className="cta-form-row">
                  <div className="cta-form-group">
                    <label htmlFor="email">Email Address</label>
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
                    <label htmlFor="guestCount">Estimated Guest Count</label>
                    <select id="guestCount" name="guestCount" disabled={submitting}>
                      <option value="">Select Range</option>
                      <option value="50-100">50-100 Guests</option>
                      <option value="100-150">100-150 Guests</option>
                      <option value="150-200">150-200 Guests</option>
                      <option value="200+">200+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="cta-form-group cta-full-width">
                  <label htmlFor="message">Tell Us About Your Dream Wedding</label>
                  <textarea id="message" name="message" placeholder="Share your vision with us..." disabled={submitting}></textarea>
                </div>
                <button type="submit" className="cta-submit-button" disabled={submitting}>
                  <span>{submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </NetlifyForm>
        </div>
      </section>

      {/* ID: MAP_DIRECTIONS_001 - Map & Directions Section */}
      <section id="map-directions" className="map-section">
        <div className="map-container">
          <div className="map-info">
            <h2>Find Your Way to Forever</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">📍</div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>42618 78th Street<br />Hillman, MN 56338</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🚗</div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">✈️</div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🏨</div>
                <div className="location-text">
                  <h4>Accommodations</h4>
                  <p>Partner hotels in Princeton & Milaca<br />Group rates available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Other Ways to Reach Us</div>
            <h2 className="section-title">Contact Information</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                📞 Phone
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Main Office</strong><br />
                (320) 555-0123<br /><br />
                <strong>Hours</strong><br />
                Mon-Fri: 9am - 5pm<br />
                Weekends: By appointment
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                ✉️ Email
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>General Inquiries</strong><br />
                info@rumriverbarn.com<br /><br />
                <strong>Bookings</strong><br />
                events@rumriverbarn.com
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                📱 Social Media
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Follow Us</strong><br />
                Instagram: @rumriverbarn<br />
                Facebook: /rumriverbarn<br />
                Pinterest: rumriverbarn
              </p>
            </div>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}
