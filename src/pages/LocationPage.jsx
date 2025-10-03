import PageTemplate from '../components/PageTemplate'
import Icon from '../components/Icon'

export default function LocationPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Find Your Way to Forever
      </h1>
      <p className="page-hero-lead">
        Nestled in the heart of Minnesota, our venue is conveniently accessible from major cities while offering the peaceful charm of the countryside.
      </p>
    </>
  )

  return (
    <PageTemplate 
      currentPage="location"
      heroContent={heroContent}
      heroImage="/images/venue/property-field-wildflowers-natural.jpg"
    >

      {/* ID: MAP_DIRECTIONS_001 - Map & Directions Section */}
      <section id="map-directions" className="map-section">
        <div className="map-container">
          <div className="map-info">
            <h2>Getting Here</h2>
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

      {/* Surrounding Cities Section */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Easy to Reach</div>
            <h2 className="section-title">Surrounding Cities</h2>
            <p className="lead">Just an hour northwest of 494/694 Minneapolis/St. Paul</p>
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
                🏙️ Metro Area
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Minneapolis/St. Paul</strong><br />
                1 hour from 494/694<br /><br />
                <strong>Elk River/Rogers</strong><br />
                45 minutes
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
                🌲 Central Minnesota
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Saint Cloud</strong><br />
                35 minutes<br /><br />
                <strong>Little Falls</strong><br />
                45 minutes
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
                🌊 Lakes Region
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Brainerd Lakes Area</strong><br />
                1 hour<br /><br />
                <strong>Mille Lacs Lake</strong><br />
                30 minutes to Casino & Izaty's
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
                🏔️ North Shore
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Duluth</strong><br />
                2 hours to Lake Superior<br /><br />
                <strong>Hinckley</strong><br />
                1 hour
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
                🌾 Local Towns
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Milaca</strong><br />
                10 minutes - nearest town<br /><br />
                <strong>Princeton</strong><br />
                25 minutes
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
                🎰 Entertainment
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Grand Casino Mille Lacs</strong><br />
                30 minutes - gaming & dining<br /><br />
                <strong>Izaty's Resort</strong><br />
                30 minutes - golf & lakeside
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Amenities */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">On the Property</div>
            <h2 className="section-title">On-Site Amenities</h2>
            <p className="lead">Extend your stay and explore everything our property has to offer</p>
          </div>

          <div className="content-grid">
            <div className="experience-content">
              <div className="experience-features">
                <div className="feature-item">
                  <div className="feature-icon">🏕️</div>
                  <div className="feature-content">
                    <h4>Campground on the Brook</h4>
                    <p>Offering fishing and swimming holes, tent camping areas, and campfire sites for a rustic outdoor experience.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🏠</div>
                  <div className="feature-content">
                    <h4>Guest House</h4>
                    <p>On-site lodging available for wedding parties and overnight guests who want to stay close to the celebration.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🥏</div>
                  <div className="feature-content">
                    <h4>Frisbee Golf Course</h4>
                    <p>Enjoy our scenic disc golf course winding through the property's natural landscape.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🎣</div>
                  <div className="feature-content">
                    <h4>Fishing & Swimming</h4>
                    <p>Cast a line in the brook or cool off in our natural swimming holes during your visit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-image image-reveal">
              <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" alt="Outdoor camping" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Accommodations & Activities */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Local Area</div>
            <h2 className="section-title">Nearby Accommodations & Points of Interest</h2>
            <p className="lead">Lodging options and activities for your guests to enjoy</p>
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
                🏨 Lodging
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Phoenix Hotel</strong><br />
                Comfortable hotel in nearby Milaca<br /><br />
                <strong>Grand Casino Mille Lacs</strong><br />
                Full-service resort with hotel rooms<br /><br />
                <strong>Eddy's Lake Mille Lacs Resort</strong><br />
                Lakeside resort accommodations
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
                ⛳ Recreation
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Stones Throw Golf Club</strong><br />
                18-hole championship golf course<br /><br />
                <strong>Mille Lacs Fishing Launches</strong><br />
                World-class walleye fishing<br /><br />
                <strong>Skydive Minnesota</strong><br />
                Tandem skydiving experiences
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
                ✈️ Transportation
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                <strong>Milaca Municipal Airport</strong><br />
                Local airport for private aviation<br /><br />
                <strong>MSP International</strong><br />
                Major airport 1 hour away<br /><br />
                <strong>Shuttle Services</strong><br />
                Available through preferred vendors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Arrival Info */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Arrival Information</div>
            <h2 className="section-title">Parking & Access</h2>
          </div>

          <div className="content-grid">
            <div className="experience-content">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: 'var(--warm-walnut)',
                marginBottom: '1.5rem'
              }}>
                What to Expect
              </h3>
              <div className="experience-features">
                <div className="feature-item">
                  <div className="feature-icon">🚗</div>
                  <div className="feature-content">
                    <h4>Ample Parking</h4>
                    <p>On-site parking for up to 200 vehicles. Accessible parking available near main entrance.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">♿</div>
                  <div className="feature-content">
                    <h4>Accessibility</h4>
                    <p>Wheelchair accessible entrance and facilities. Please contact us for specific accessibility needs.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🚌</div>
                  <div className="feature-content">
                    <h4>Shuttle Service</h4>
                    <p>Complimentary shuttle service available from partner hotels. Ask us about transportation options.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🗺️</div>
                  <div className="feature-content">
                    <h4>Clear Signage</h4>
                    <p>Well-marked property entrance with directional signs to guide you from the main road.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-image image-reveal">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="Venue exterior" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}
