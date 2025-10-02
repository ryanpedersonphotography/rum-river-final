import PageTemplate from '../components/PageTemplate'
import NetlifyForm from '../components/NetlifyForm'
import VRTourButton from '../components/VRTourButton'
import ScheduleTourForm from '../components/ScheduleTourForm'
import Icon from '../components/Icon'

export default function ContactPage() {
  return (
    <PageTemplate 
      currentPage="contact"
      heroTitle="Get in Touch"
      heroDescription="We'd love to hear from you! Reach out to schedule a tour, ask questions, or start planning your special day."
      heroImage="/images/venue/barn-exterior-entrance-lighting-view.jpg"
    >

      {/* Virtual Preview Section */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Take a Peek Inside</div>
            <h2 className="section-title">Virtual 3D Tours</h2>
            <p className="lead">Explore our beautiful spaces before your visit with immersive virtual tours</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {/* Wedding Barn VR Tour */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--warm-walnut) 0%, #8B4513 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                <Icon name="building" size="sm" color="muted" />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Wedding Barn
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--sage-green)',
                marginBottom: '2rem'
              }}>
                Step inside our historic barn and experience the soaring ceilings, original timber beams, and elegant lighting that creates the perfect atmosphere for your celebration.
              </p>
              <VRTourButton
                tourUrl="https://my.matterport.com/show/?m=P25ecLeSZdF"
                variant="primary"
                icon="🥽"
              >
                Explore Wedding Barn
              </VRTourButton>
            </div>

            {/* Bridal Suite VR Tour */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--blush-pink) 0%, #E6B8C2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                👰
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Bridal Suite
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--sage-green)',
                marginBottom: '2rem'
              }}>
                Tour the charming bridal suite where you and your wedding party can relax and prepare. This private sanctuary offers the perfect setting for getting ready photos.
              </p>
              <VRTourButton
                tourUrl="https://my.matterport.com/show/?m=sFjR96cKfqv"
                variant="primary"
                icon="🥽"
              >
                Explore Bridal Suite
              </VRTourButton>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(212, 165, 116, 0.1) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(212, 165, 116, 0.2)'
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--sage-green)',
              margin: '0 0 1.5rem 0',
              fontStyle: 'italic'
            }}>
              "Experience the magic before you visit. These virtual tours give you a true sense of our beautiful spaces."
            </p>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              color: 'var(--warm-walnut)',
              fontWeight: 500
            }}>
              Ready to see it in person? Schedule your tour below ↓
            </div>
          </div>
        </div>
      </section>

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
                <Icon name="email" size="sm" color="muted" style={{marginRight: '0.5rem'}} />Email
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
