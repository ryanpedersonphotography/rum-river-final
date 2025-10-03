import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import VenueTabs from '../components/VenueTabs'

const venueData = {
  whiteBarn: {
    title: 'White Barn Loft',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-interior-string-lights-ceiling-detail.jpg'
    ],
    description: 'The white barn is the main event barn consisting of the large loft area and the lower level lounge. The original hay loft is spacious and open with tall ceilings and hardwood floors. The loft can accommodate guests for a ceremony, reception dinner, and/or a dance.',
    features: [
      { label: 'Space', value: 'Large loft area & lower lounge' },
      { label: 'Features', value: 'Tall ceilings & hardwood floors' },
      { label: 'Capacity', value: 'Ceremony, reception & dancing' },
      { label: 'Style', value: 'Original hay loft charm' }
    ]
  },
  frameBarn: {
    title: 'Frame Barn',
    images: [
      '/images/venue/barn-exterior-stone-wall-trees.jpg',
      '/images/venue/barn-exterior-vintage-tractor-rustic.jpg',
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg'
    ],
    description: 'This open timber frame barn is a rustic shelter just begging for white sheers hanging in the breeze with string lights overhead at an outdoor ceremony. Either as first choice or a rain back-up location, there is plenty of space for a wedding ceremony.',
    features: [
      { label: 'Style', value: 'Open timber frame construction' },
      { label: 'Setting', value: 'Outdoor ceremony space' },
      { label: 'Backup', value: 'Weather protection available' },
      { label: 'Surroundings', value: 'Grassy fields for tents & games' }
    ]
  },
  grounds: {
    title: 'The Grounds',
    images: [
      '/images/venue/property-vineyard-rows-landscape.jpg',
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/property-landscape-rural-vista.jpg'
    ],
    description: 'With plenty of open space and grassy fields, the grounds offer many places for outdoor celebrations. The Vineyards boast 14 of the 22 Minnesota hardy grapes produced by the University of Minnesota for making wine.',
    features: [
      { label: 'Space', value: 'Open fields & grassy areas' },
      { label: 'Vineyard', value: '14 Minnesota hardy grape varieties' },
      { label: 'Backdrop', value: 'Natural setting for ceremonies' },
      { label: 'Activities', value: 'Perfect for cocktails on the lawn' }
    ]
  },
  lounge: {
    title: 'Lounge',
    images: [
      '/images/venue/barn-exterior-full-deck-view-evening.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg',
      '/images/venue/barn-exterior-deck-swing-golden-hour.jpg'
    ],
    description: 'Located on the main level of the white barn, the Lounge is a perfect place for an intimate dinner or cocktail hour. Complete with high top tables, low lighting, and a full size bar.',
    features: [
      { label: 'Location', value: 'Main level of white barn' },
      { label: 'Seating', value: 'High top tables' },
      { label: 'Ambiance', value: 'Low lighting atmosphere' },
      { label: 'Bar', value: 'Full size bar included' }
    ]
  },
  bridalRoom: {
    title: 'Bridal Room',
    images: [
      '/images/venue/details-building-facade-siding.jpg',
      '/images/venue/property-vineyard-perspective-hills.jpg',
      '/images/venue/details-building-corner-landscaping.jpg'
    ],
    description: 'As the original homestead of the property, this former one room house is a lovely little retreat for the Bride and bridal party to relax and get ready for the big day.',
    features: [
      { label: 'History', value: 'Original homestead building' },
      { label: 'Purpose', value: 'Bride & bridal party preparation' },
      { label: 'Atmosphere', value: 'Lovely retreat setting' },
      { label: 'Privacy', value: 'Private space for getting ready' }
    ]
  },
  bridalCourtyard: {
    title: 'Bridal Courtyard',
    images: [
      '/images/venue/barn-exterior-landscaping-stone-border.jpg',
      '/images/venue/barn-exterior-side-angle-landscaping.jpg',
      '/images/venue/details-antique-wheel-stone-wall.jpg'
    ],
    description: 'This outdoor courtyard is the perfect place for the Bride to enjoy the beauty of the day while remaining private before her walk down the isle.',
    features: [
      { label: 'Setting', value: 'Outdoor courtyard' },
      { label: 'Privacy', value: 'Private space for bride' },
      { label: 'Beauty', value: 'Natural surroundings' },
      { label: 'Purpose', value: 'Pre-ceremony relaxation' }
    ]
  }
}

export default function PropertyPage() {
  const [activeVenue, setActiveVenue] = useState('whiteBarn')
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

  const heroContent = (
    <>
      <h1 className="page-hero-title">
        The Property
      </h1>
      <p className="page-hero-lead">
        Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.
      </p>
    </>
  )

  return (
    <PageTemplate 
      currentPage="property"
      heroContent={heroContent}
      heroImage="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
    >
      
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
              { key: 'whiteBarn', label: 'White Barn Loft' },
              { key: 'frameBarn', label: 'Frame Barn' },
              { key: 'grounds', label: 'The Grounds' },
              { key: 'lounge', label: 'Lounge' },
              { key: 'bridalRoom', label: 'Bridal Room' },
              { key: 'bridalCourtyard', label: 'Bridal Courtyard' }
            ]}
            activeTab={activeVenue}
            onChange={handleVenueChange}
          />
          <div className="venue-display">
            <div className="venue-main-image">
              <button className="carousel-nav prev" onClick={prevImage} aria-label="Previous image">‹</button>
              <img src={venueData[activeVenue].images[currentImageIndex]} alt={venueData[activeVenue].title} width="800" height="500" />
              <button className="carousel-nav next" onClick={nextImage} aria-label="Next image">›</button>
              <div className="carousel-dots">
                {venueData[activeVenue].images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
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
              {(activeVenue === 'whiteBarn' || activeVenue === 'bridalRoom') && (
                <div className="venue-vr-tour" style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #f8f6f0 0%, #ede8dc 100%)',
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
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--warm-walnut)',
                      margin: 0
                    }}>
                      Virtual 3D Tour
                    </h4>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--sage-green)',
                    margin: '0 0 1.5rem 0'
                  }}>
                    Step inside and explore this {activeVenue === 'whiteBarn' ? 'stunning barn space' : 'charming bridal suite'} with our immersive Matterport tour. See every detail as if you were there.
                  </p>
                  <button 
                    onClick={() => {
                      const tourUrl = activeVenue === 'whiteBarn' 
                        ? 'https://my.matterport.com/show/?m=P25ecLeSZdF'
                        : 'https://my.matterport.com/show/?m=sFjR96cKfqv';
                      window.open(tourUrl, '_blank', 'width=1200,height=800');
                    }}
                    style={{
                      background: 'linear-gradient(135deg, var(--warm-walnut) 0%, #8B4513 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Explore in 3D
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--warm-cream) 0%, var(--blush-pink) 100%)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div className="script-accent">Ready to Visit?</div>
            <h2 className="section-title">Schedule Your Property Tour</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Experience the beauty of Rum River Barn in person. Contact us to schedule a private tour of our property.
            </p>
            <a href="/contact" className="romantic-button primary">
              Book Your Tour
            </a>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}