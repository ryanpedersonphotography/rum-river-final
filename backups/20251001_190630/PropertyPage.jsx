import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'

const venueData = {
  whiteBarn: {
    title: 'White Barn Loft',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=800'
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
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=800',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800'
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
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800'
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
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800'
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
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800'
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
      'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=800'
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
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: 'white'
      }}>
        The Property
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.
      </p>
    </>
  )

  return (
    <PageTemplate heroContent={heroContent}>
      
      {/* Discover Our Spaces - Tabbed Venue Display */}
      <section className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead">Every corner tells a story, every space creates memories</p>
          </div>
          <div className="venue-tabs">
            <button
              className={`venue-tab ${activeVenue === 'whiteBarn' ? 'active' : ''}`}
              onClick={() => handleVenueChange('whiteBarn')}
            >
              White Barn Loft
            </button>
            <button
              className={`venue-tab ${activeVenue === 'frameBarn' ? 'active' : ''}`}
              onClick={() => handleVenueChange('frameBarn')}
            >
              Frame Barn
            </button>
            <button
              className={`venue-tab ${activeVenue === 'grounds' ? 'active' : ''}`}
              onClick={() => handleVenueChange('grounds')}
            >
              The Grounds
            </button>
            <button
              className={`venue-tab ${activeVenue === 'lounge' ? 'active' : ''}`}
              onClick={() => handleVenueChange('lounge')}
            >
              Lounge
            </button>
            <button
              className={`venue-tab ${activeVenue === 'bridalRoom' ? 'active' : ''}`}
              onClick={() => handleVenueChange('bridalRoom')}
            >
              Bridal Room
            </button>
            <button
              className={`venue-tab ${activeVenue === 'bridalCourtyard' ? 'active' : ''}`}
              onClick={() => handleVenueChange('bridalCourtyard')}
            >
              Bridal Courtyard
            </button>
          </div>
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