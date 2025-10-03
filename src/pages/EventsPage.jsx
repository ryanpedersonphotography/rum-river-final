import PageTemplate from '../components/PageTemplate'
import ScheduleTourForm from '../components/ScheduleTourForm'
import CTAButton from '../components/CTAButton'

// Hero Strip Component using design system
function EventHeroStrip({ title, subtitle, image, ctaHref = "/contact", ctaLabel = "Check availability" }) {
  return (
    <div className="event-hero-strip">
      <div className="event-hero-content">
        <h1 className="event-hero-title">{title}</h1>
        <p className="event-hero-subtitle">{subtitle}</p>
        <div className="event-hero-cta">
          <CTAButton href={ctaHref} variant="primary" size="normal">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
      <div className="event-hero-image">
        <img src={image.src} alt={image.alt} width="800" height="500" />
      </div>
    </div>
  );
}

export default function EventsPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Events & Celebrations
      </h1>
      <p className="page-hero-lead">
        From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion
      </p>
    </>
  )

  return (
    <>
      <PageTemplate 
      currentPage="events"
      heroContent={heroContent}
        heroImage="/images/2014/05/Reins-Wedding_3-193.jpg"
      >

      {/* Wedding Events - Dark Section */}
      <section className="alternating-blocks dark-gradient-section">
        <div className="content-wrapper">
          <div className="block-item">
            <div className="block-content">
              <h3 className="block-title">Wedding Events</h3>
              <p className="block-description">
                Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces. 
                Our immaculate grounds provide the perfect backdrop for photography in every season, creating 
                memories that will last a lifetime.
              </p>
              <ul className="feature-list">
                <li>Indoor and outdoor ceremony spaces with flexible configurations</li>
                <li>Year-round venue availability with climate-controlled comfort</li>
                <li>Picturesque grounds perfect for wedding photography</li>
                <li>Capacity for up to 600 guests with authentic barn charm</li>
              </ul>
              <CTAButton href="/contact" variant="primary">
                Plan Your Wedding
              </CTAButton>
            </div>
            <div className="block-image styled-image light no-link">
              <img src="/images/2014/05/Reins-Wedding_3-193.jpg" alt="Wedding Events at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Parties - Light Section */}
      <section className="section-warm">
        <div className="content-wrapper">
          <div className="block-item reverse">
            <div className="block-content">
              <h3 className="block-title">Engagement Parties</h3>
              <p className="block-description">
                Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty and 
                picturesque vineyards. The perfect way to bring both sides of your family together before your 
                special day in an intimate, rustic setting.
              </p>
              <ul className="feature-list">
                <li>Bring both families together in a relaxed, beautiful setting</li>
                <li>Rustic venue setting with stunning vineyard views</li>
                <li>Flexible capacity arrangements for intimate gatherings</li>
                <li>Pre-wedding celebration planning with experienced staff</li>
              </ul>
              <CTAButton href="/contact" variant="primary">
                Plan Your Engagement
              </CTAButton>
            </div>
            <div className="block-image styled-image light no-link">
              <img src="/images/venue/details-swing-rustic-romance.jpg" alt="Engagement Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Parties - Dark Section */}
      <section className="alternating-blocks dark-gradient-section">
        <div className="content-wrapper">
          <div className="block-item">
            <div className="block-content">
              <h3 className="block-title">Birthday Parties</h3>
              <p className="block-description">
                Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space. 
                Our picturesque location provides the perfect setting for birthdays of all ages, with both indoor 
                comfort and outdoor charm.
              </p>
              <ul className="feature-list">
                <li>Recently renovated rustic space with modern amenities</li>
                <li>Suitable for milestone birthdays of all ages</li>
                <li>Seasonal outdoor mezzanine for additional space</li>
                <li>Capacity for up to 200 guests in picturesque setting</li>
              </ul>
              <CTAButton href="/contact" variant="primary">
                Book Birthday Party
              </CTAButton>
            </div>
            <div className="block-image styled-image light no-link">
              <img src="/images/2015/12/wedding-5.jpg" alt="Birthday Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Parties - Light Section */}
      <section className="section-warm">
        <div className="content-wrapper">
          <div className="block-item reverse">
            <div className="block-content">
              <h3 className="block-title">Graduation Parties</h3>
              <p className="block-description">
                Celebrate high school, college, or military graduations with plenty of space for eating, dancing, and games. 
                Warm summer sunlight creates an ideal backdrop for memorable photos, honoring achievements in a setting 
                that matches the significance of the milestone.
              </p>
              <ul className="feature-list">
                <li>Perfect for high school, college, and military graduations</li>
                <li>Spacious areas for dining, dancing, and celebration activities</li>
                <li>Ideal natural lighting for graduation photos and memories</li>
                <li>Large group capacity with flexible event arrangements</li>
              </ul>
              <CTAButton href="/contact" variant="primary">
                Celebrate Graduation
              </CTAButton>
            </div>
            <div className="block-image styled-image light no-link">
              <img src="/images/venue/barn-exterior-deck-swing-golden-hour.jpg" alt="Graduation Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Parties - Dark Section */}
      <section className="alternating-blocks dark-gradient-section">
        <div className="content-wrapper">
          <div className="block-item">
            <div className="block-content">
              <h3 className="block-title">Holiday Parties</h3>
              <p className="block-description">
                Host your holiday celebration with plenty of indoor and outdoor space for eating and dancing. 
                Perfect for Christmas parties, Valentine's Day celebrations, Fourth of July gatherings, and more. 
                Create magical holiday memories in our festive barn setting.
              </p>
              <ul className="feature-list">
                <li>Indoor and outdoor celebration spaces for any season</li>
                <li>Perfect venue for Christmas and winter holiday parties</li>
                <li>Beautiful setting for Valentine's Day and spring celebrations</li>
                <li>Preferred catering and alcohol vendors available for events</li>
              </ul>
              <CTAButton href="/contact" variant="primary">
                Plan Holiday Event
              </CTAButton>
            </div>
            <div className="block-image styled-image light no-link">
              <img src="/images/venue/barn-interior-exposed-beams-chandeliers.jpg" alt="Holiday Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section dark-section">
        <div className="content-wrapper">
          <div className="contact-info-content">
            <div className="script-accent on-dark">Ready to Plan Your Event?</div>
            <h2 className="section-title" style={{ color: 'white' }}>Let's Start Planning Together</h2>
            <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Contact us today to schedule a tour of our beautiful venue and discuss how we can make your special event unforgettable.
            </p>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-info-label">Call Us</div>
                <div className="contact-info-main">(320) 492-8584</div>
                <div className="contact-info-secondary">(612) 801-0546</div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-label">Visit Us</div>
                <div className="contact-info-main">
                  42618 78th Street<br />
                  Hillman, MN 56338
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-label">Service Area</div>
                <div className="contact-info-main">
                  Milaca, St. Cloud,<br />
                  St. Paul & Beyond
                </div>
              </div>
            </div>

            <CTAButton href="/contact" variant="primary">
              Schedule Your Tour
            </CTAButton>
          </div>
        </div>
      </section>

      </PageTemplate>
    </>
  )
}