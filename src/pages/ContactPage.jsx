import PageTemplate from '../components/PageTemplate'
import NetlifyForm from '../components/NetlifyForm'
import ScheduleTourForm from '../components/ScheduleTourForm'
import Icon from '../components/Icon'

export default function ContactPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Get in Touch
      </h1>
      <p className="page-hero-lead">
        We'd love to hear from you! Reach out to schedule a tour, ask questions, or start planning your special day.
      </p>
    </>
  )

  return (
    <PageTemplate 
      heroContent={heroContent}
      heroImage="/images/venue/barn-exterior-entrance-lighting-view.jpg"
    >

      {/* ID: CONTACT_FORM_001 - Schedule a Tour Form Section */}
      <ScheduleTourForm
        formName="schedule-tour"
        title="Let's Start Planning Together"
        subtitle="Schedule Your Tour"
        description="Ready to see our beautiful venue in person? Let's find the perfect time for your visit."
      />

      {/* ID: MAP_DIRECTIONS_001 - Map & Directions Section */}
      <section id="map-directions" className="map-section">
        <div className="map-container">
          <div className="map-info">
            <h2>Find Your Way to Forever</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon"><Icon name="location" size="lg" color="primary" /></div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>42618 78th Street<br />Hillman, MN 56338</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon"><Icon name="truck" size="lg" color="primary" /></div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon"><Icon name="rocket" size="lg" color="primary" /></div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon"><Icon name="building" size="lg" color="primary" /></div>
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
          <div className="venue-discovery-content center">
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
                320-492-8584<br />
                612-801-0546 (Alternate)<br /><br />
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
                <Icon name="email" size="sm" color="muted" style={{marginRight: '0.5rem'}} />Email
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Email Us</strong><br />
                evelyn@rumrivermn.com
              </p>
            </div>

            {/* 
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
            */}
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}
