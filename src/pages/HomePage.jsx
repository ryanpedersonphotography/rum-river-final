import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import NetlifyForm from '../components/NetlifyForm'
import { realWeddings } from '../data/realWeddings'
import VenueTabs from '../components/VenueTabs'
import CarouselControls from '../components/CarouselControls'
import VRTourButton from '../components/VRTourButton'
import CTAButton from '../components/CTAButton'
import ScheduleTourForm from '../components/ScheduleTourForm'
import Icon from '../components/Icon'

const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-interior-string-lights-ceiling-detail.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Features', value: 'Built-in bar & dance floor' },
      { label: 'Lighting', value: 'Edison bulbs & chandeliers' },
      { label: 'Climate', value: 'Heated & air conditioned' }
    ]
  },
  bridal: {
    title: 'Bridal Suite',
    images: [
      '/images/venue/details-building-entrance-windows.jpg',
      '/images/venue/details-architectural-trim-windows.jpg',
      '/images/venue/details-building-porch-architectural.jpg'
    ],
    description: 'A private sanctuary for getting ready, complete with vintage furnishings, natural lighting, and peaceful garden views.',
    features: [
      { label: 'Capacity', value: 'Up to 12 people' },
      { label: 'Features', value: 'Professional lighting & mirrors' },
      { label: 'Amenities', value: 'Private bathroom & kitchenette' },
      { label: 'Style', value: 'Vintage charm meets modern comfort' }
    ]
  },
  groom: {
    title: "Groom's Quarters",
    images: [
      '/images/venue/barn-exterior-entrance-lighting-view.jpg',
      '/images/venue/details-building-entrance-door.jpg',
      '/images/venue/barn-exterior-deck-stairs-trees.jpg'
    ],
    description: 'A sophisticated space designed for the groom and groomsmen to prepare, relax, and enjoy the moments before the ceremony.',
    features: [
      { label: 'Capacity', value: 'Up to 10 people' },
      { label: 'Features', value: 'Pool table & lounge seating' },
      { label: 'Amenities', value: 'Private entrance & facilities' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  },
  pavilion: {
    title: 'Garden Pavilion',
    images: [
      '/images/venue/barn-exterior-welcome-sign-rustic-charm.jpg',
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg'
    ],
    description: 'An enchanting outdoor space surrounded by lush gardens, perfect for ceremonies or cocktail hours under the open sky.',
    features: [
      { label: 'Capacity', value: 'Up to 150 guests' },
      { label: 'Features', value: 'Natural canopy & string lights' },
      { label: 'Setting', value: 'Garden ceremony site' },
      { label: 'Backup', value: 'Weather protection available' }
    ]
  }
}

export default function HomePage() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }
  return (
    <>
      <Header />

      {/* Floating CTA Button */}
      <a href="#lets-connect-form" className="floating-cta">
        <Icon name="calendar" size="sm" color="white" />
        Schedule Your Tour
      </a>

      {/* Hero Section - Enhanced */}
      <section id="home" className="hero-enhanced">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="script-accent">Where Dreams Begin</div>
            <h1 className="hero-headline">
              Rum River<br />
              <span className="hero-accent">Wedding Barn</span>
            </h1>
            <p className="lead hero-lead">
              Nestled along Minnesota's scenic Rum River, our historic barn offers
              the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="romantic-button primary">Schedule Your Visit</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover Your Perfect Day</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Discover Our Spaces - Tabbed Venue Display */}
      <section className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead">Every corner tells a story, every space creates memories</p>
          </div>
          <VenueTabs
            tabs={[
              { key: 'barn', label: 'The Barn' },
              { key: 'bridal', label: 'Bridal Suite' },
              { key: 'groom', label: "Groom's Quarters" },
              { key: 'pavilion', label: 'Garden Pavilion' }
            ]}
            activeTab={activeVenue}
            onChange={handleVenueChange}
          />
          <div className="venue-display">
            <div className="venue-main-image">
              <img src={venueData[activeVenue].images[currentImageIndex]} alt={venueData[activeVenue].title} width="800" height="500" />
              <CarouselControls
                totalItems={venueData[activeVenue].images.length}
                currentIndex={currentImageIndex}
                onNext={nextImage}
                onPrev={prevImage}
                onDotClick={setCurrentImageIndex}
              />
            </div>
            <div className="venue-details">
              <h3>{venueData[activeVenue].title}</h3>
              <p>{venueData[activeVenue].description}</p>
              <div className="venue-features">
                {venueData[activeVenue].features.map((feature, index) => (
                  <div key={index} className="venue-feature">
                    <h5>{feature.label}</h5>
                    <p>{feature.value}</p>
                  </div>
                ))}
              </div>
              
              {/* VR Tour Buttons */}
              {(activeVenue === 'barn' || activeVenue === 'bridal') && (
                <div className="venue-vr-tour" style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, var(--cream-pearl) 0%, var(--blush-pink) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(212, 165, 116, 0.2)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      fontSize: '1.5rem'
                    }}>🥽</span>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: 'var(--warm-walnut)',
                      margin: 0
                    }}>
                      Take a Virtual Tour
                    </h4>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'var(--sage-green)',
                    margin: '0 0 1.5rem 0'
                  }}>
                    Experience this space in immersive 3D. Walk through and explore every detail from the comfort of your home.
                  </p>
                  <VRTourButton
                    tourUrl={activeVenue === 'barn' 
                      ? 'https://my.matterport.com/show/?m=P25ecLeSZdF'
                      : 'https://my.matterport.com/show/?m=sFjR96cKfqv'}
                    variant="special"
                    showIcon={false}
                  >
                    Launch Virtual Tour
                  </VRTourButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Love Stories Gallery */}
      <section className="love-stories-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Real Love Stories</div>
            <h2 className="section-title">Weddings at the Barn</h2>
            <p className="lead">Every celebration tells a unique story of love, laughter, and happily ever after.</p>
          </div>

          <div className="wedding-gallery">
            {realWeddings.slice(0, 6).map((wedding, index) => (
              <Link
                key={wedding.slug}
                to={`/real-weddings/${wedding.slug}`}
                className="gallery-item image-reveal"
              >
                <img
                  src={wedding.coverImage}
                  alt={`${wedding.coupleName} Wedding`}
                  width="800"
                  height="800"
                />
                <div className="gallery-overlay">
                  <div className="gallery-couple-names">{wedding.coupleName}</div>
                  <div className="gallery-season">{wedding.date}</div>
                  <div className="gallery-details">
                    {wedding.photoCount} Photos • {wedding.location.split('•')[0].trim()}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="gallery-footer">
            <Link to="/real-weddings" className="romantic-button outline">View All Real Weddings</Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section">
        <div className="content-wrapper">
          <div className="content-grid">
            <div className="experience-content">
              <div className="script-accent">The Rum River Experience</div>
              <h2 className="section-title">More Than a Venue</h2>
              <p className="lead">
                We don't just provide a space—we create an experience. From your first visit to your last dance,
                our dedicated team ensures every detail reflects your unique love story.
              </p>

              <div className="experience-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <Icon name="check" size="lg" color="primary" />
                  </div>
                  <div className="feature-content">
                    <h4>All-Inclusive Planning</h4>
                    <p>Our experienced coordinators handle every detail, so you can focus on what matters most—each other.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Icon name="sparkles" size="lg" color="primary" />
                  </div>
                  <div className="feature-content">
                    <h4>Customizable Packages</h4>
                    <p>From intimate gatherings to grand celebrations, we tailor every element to your vision and budget.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Icon name="home" size="lg" color="primary" />
                  </div>
                  <div className="feature-content">
                    <h4>Historic Charm</h4>
                    <p>Our lovingly restored 1920s barn combines century-old character with modern convenience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-image image-reveal styled-image light no-link">
              <img src="/images/2014/04/Loria-Jason-wedding-2-0026.jpg" alt="Wedding Celebration" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Feature Blocks */}
      <section className="alternating-blocks">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Your Perfect Venue</div>
            <h2 className="section-title">Why Choose Rum River Barn</h2>
            <p className="lead">Discover what makes our venue the perfect setting for your unforgettable celebration</p>
          </div>

          <div className="blocks-container">
            <div className="block-item">
              <div className="block-content">
                <div className="number">01</div>
                <h3>A Picturesque Location For Your Special Event</h3>
                <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
                <p>When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.</p>
                <p>Here at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.</p>
                <p>Our goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at <strong>612-801-0546</strong>!</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg" alt="Special event venue" width="800" height="500" />
              </div>
            </div>

            <div className="block-item reverse">
              <div className="block-content">
                <div className="number">02</div>
                <h3>Rum River Barn & Vineyard</h3>
                <p className="lead">Milaca, St. Cloud, Saint Paul, and Brainerd MN</p>
                <p>Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.</p>
                <p>Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/property-field-wildflowers-natural.jpg" alt="Rum River Barn and Vineyard" width="800" height="500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Love Letters</div>
            <h2 className="section-title">What Couples Say</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "From our first tour to our last dance, the team at Rum River made our dreams come true.
                The barn was absolutely magical, and our guests are still talking about how perfect everything was."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Sarah & Michael Johnson</div>
                <div className="author-detail">Married October 2024</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations.
                The historic charm combined with modern amenities was exactly what we were looking for."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Emma & James Wilson</div>
                <div className="author-detail">Married June 2024</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "The team went above and beyond to make our winter wedding absolutely magical.
                Even in February, the barn felt warm and romantic. We couldn't have asked for more."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Amanda & Chris Thompson</div>
                <div className="author-detail">Married February 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ID: CONTACT_FORM_001 - Let's Connect Form Section */}
      <ScheduleTourForm
        formName="home-schedule-tour"
        className="" 
      />

      {/* ID: MAP_DIRECTIONS_001 - Map & Directions Section */}
      <section id="map-directions" className="map-section">
        <div className="map-container">
          <div className="map-info">
            <h2>Find Your Way to Forever</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="location" size="lg" color="primary" />
                </div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>42618 78th Street<br />Hillman, MN 56338</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="map" size="lg" color="primary" />
                </div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="globe" size="lg" color="primary" />
                </div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="building" size="lg" color="primary" />
                </div>
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

      {/* ID: FOOTER_ENHANCED_001 - Enhanced 3-Column Footer */}
      <footer style={{
        padding: '4rem 2rem 2.5rem',
        background: 'var(--text-dark)',
        color: 'rgba(255,255,255,0.8)', // Standard secondary text opacity
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}>Rum River Barn</h4>
              <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
                Minnesota's premier wedding venue<br />
                where dreams come to life
              </p>
            </div>
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}>Visit Us</h4>
              <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
                42618 78th Street<br />
                Hillman, MN 56338<br />
                (320) 492-8584
              </p>
            </div>
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}>Follow Along</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Facebook</a>
                <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Instagram</a>
                <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Pinterest</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            <p>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
          </div>
        </div>
      </footer>
    </>
  )
}
