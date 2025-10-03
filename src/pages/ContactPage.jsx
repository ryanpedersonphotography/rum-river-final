import PageTemplate from '../components/PageTemplate'
import NetlifyForm from '../components/NetlifyForm'
import ScheduleTourForm from '../components/ScheduleTourForm'
import Icon from '../components/Icon'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import VRTourCard from '../components/VRTourCard'

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
      currentPage="contact"
      heroContent={heroContent}
      heroImage="/images/venue/barn-exterior-entrance-lighting-view.jpg"
    >

      {/* Virtual Preview Section */}
      <Section tone="cream">
        <div className="content-wrapper">
          <SectionHeader
            eyebrow="Take a Peek Inside"
            title="Virtual 3D Tours"
            description="Explore our beautiful spaces before your visit with immersive virtual tours"
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-2xl)',
              marginTop: 'var(--space-3xl)'
            }}
          >
            {/* Wedding Barn VR Tour */}
            <VRTourCard
              title="Wedding Barn"
              description="Step inside our historic barn and experience the soaring ceilings, original timber beams, and elegant lighting that creates the perfect atmosphere for your celebration."
              tourUrl="https://my.matterport.com/show/?m=P25ecLeSZdF"
              icon={<Icon name="building" size="sm" color="muted" />}
              tone="walnutGradient"
            />

            {/* Bridal Suite VR Tour */}
            <VRTourCard
              title="Bridal Suite"
              description="Tour the charming bridal suite where you and your wedding party can relax and prepare. This private sanctuary offers the perfect setting for getting ready photos."
              tourUrl="https://my.matterport.com/show/?m=sFjR96cKfqv"
              icon="👰"
              tone="blushGradient"
            />
          </div>

          <Card
            padding="xl"
            style={{
              textAlign: 'center',
              marginTop: 'var(--space-3xl)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(212, 165, 116, 0.1) 100%)',
              border: '1px solid var(--champagne-gold)'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'var(--sage-green)',
                margin: '0 0 var(--space-lg) 0',
                fontStyle: 'italic'
              }}
            >
              "Experience the magic before you visit. These virtual tours give you a true sense of our beautiful spaces."
            </p>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                color: 'var(--warm-walnut)',
                fontWeight: 500
              }}
            >
              Ready to see it in person? Schedule your tour below ↓
            </div>
          </Card>
        </div>
      </Section>

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
      <Section>
        <div className="content-wrapper">
          <SectionHeader
            eyebrow="Other Ways to Reach Us"
            title="Contact Information"
            align="center"
          />

          <div className="testimonials-grid">
            <Card variant="soft">
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                📞 Phone
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--sage-green)',
                  margin: 0,
                }}
              >
                <strong>Main Office</strong><br />
                (320) 555-0123<br /><br />
                <strong>Hours</strong><br />
                Mon-Fri: 9am - 5pm<br />
                Weekends: By appointment
              </p>
            </Card>

            <Card variant="soft">
              <h3
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <Icon name="email" size="sm" color="muted" />Email
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--sage-green)',
                  margin: 0,
                }}
              >
                <strong>General Inquiries</strong><br />
                info@rumriverbarn.com<br /><br />
                <strong>Bookings</strong><br />
                events@rumriverbarn.com
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--warm-walnut)',
                  marginTop: 'var(--space-md)',
                }}
              >
                We respond within 1 business day.
              </p>
            </Card>

            <Card variant="soft">
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                📱 Social Media
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--sage-green)',
                  margin: 0,
                }}
              >
                <strong>Follow Us</strong><br />
                Instagram: @rumriverbarn<br />
                Facebook: /rumriverbarn<br />
                Pinterest: rumriverbarn
              </p>
            </Card>
          </div>
        </div>
      </Section>

    </PageTemplate>
  )
}
