import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import VenueTabs from '../components/VenueTabs'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import FeatureList from '../components/FeatureList'
import Card from '../components/Card'
import CTAButton from '../components/CTAButton'
import VRTourCard from '../components/VRTourCard'

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
      <Section tone="cream">
        <div className="content-wrapper venue-content">
          <SectionHeader
            eyebrow="Your Perfect Setting"
            title="Discover Our Spaces"
            description="Every corner tells a story, every space creates memories"
            align="center"
            className="venue-header"
          />
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
              <FeatureList
                items={venueData[activeVenue].features.map((feature) => ({
                  label: feature.label,
                  value: feature.value,
                }))}
                className="venue-features"
                itemClassName="venue-feature"
                unstyled
              />
              
              {/* VR Tour Buttons */}
              {(activeVenue === 'whiteBarn' || activeVenue === 'bridalRoom') && (
                <VRTourCard
                  title="Virtual 3D Tour"
                  description={`Step inside and explore this ${activeVenue === 'whiteBarn' ? 'stunning barn space' : 'charming bridal suite'} with our immersive Matterport tour. See every detail as if you were there.`}
                  tourUrl={activeVenue === 'whiteBarn'
                    ? 'https://my.matterport.com/show/?m=P25ecLeSZdF'
                    : 'https://my.matterport.com/show/?m=sFjR96cKfqv'}
                  tone="goldGradient"
                  ctaLabel="Explore in 3D"
                  className="venue-vr-tour"
                />
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section tone="blushGradient" paddingY="3xl">
        <div className="content-wrapper">
          <Card
            variant="soft"
            style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
          >
            <SectionHeader
              eyebrow="Ready to Visit?"
              title="Schedule Your Property Tour"
              description="Experience the beauty of Rum River Barn in person. Contact us to schedule a private tour of our property."
              align="center"
            />
            <CTAButton to="/contact" variant="primary">
              Book Your Tour
            </CTAButton>
          </Card>
        </div>
      </Section>

    </PageTemplate>
  )
}
