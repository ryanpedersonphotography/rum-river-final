import { useState } from 'react'
import VenueTabs from '../components/VenueTabs'
import CarouselControls from '../components/CarouselControls'

const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Built', value: '1920s architecture' },
      { label: 'Features', value: 'Climate controlled' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  },
  bridal: {
    title: 'Bridal Suite',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg'
    ],
    description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
    features: [
      { label: 'Capacity', value: 'Up to 8 people' },
      { label: 'Amenities', value: 'Full mirror, seating' },
      { label: 'Natural Light', value: 'Large windows' },
      { label: 'Privacy', value: 'Separate entrance' }
    ]
  },
  groom: {
    title: "Groom's Quarters",
    images: [
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
      '/images/venue/details-building-entrance-door.jpg'
    ],
    description: 'A comfortable retreat for the groom and groomsmen, offering a relaxed atmosphere to prepare and celebrate before the ceremony.',
    features: [
      { label: 'Capacity', value: 'Up to 6 people' },
      { label: 'Atmosphere', value: 'Relaxed and private' },
      { label: 'Facilities', value: 'Seating and storage' },
      { label: 'Location', value: 'Separate from bridal' }
    ]
  },
  pavilion: {
    title: 'Garden Pavilion',
    images: [
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg'
    ],
    description: 'An enchanting outdoor space perfect for ceremonies or cocktail hours, surrounded by lush gardens and natural beauty.',
    features: [
      { label: 'Setting', value: 'Outdoor garden' },
      { label: 'Use', value: 'Ceremonies, cocktails' },
      { label: 'Surroundings', value: 'Natural gardens' },
      { label: 'Season', value: 'Spring through fall' }
    ]
  }
}

export default function SpacesStandalone() {
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
      {/* Discover Our Spaces - Tabbed Venue Display */}
      <section className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>Every corner tells a story, every space creates memories</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Venue Spaces Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the tabbed venue display above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- Discover Our Spaces - Tabbed Venue Display -->
<section className="section-warm">
  <div className="content-wrapper venue-content">
    <div className="venue-header center">
      <div className="script-accent">Your Perfect Setting</div>
      <h2 className="section-title">Discover Our Spaces</h2>
      <p className="lead" style={{ textAlign: 'center' }}>
        Every corner tells a story, every space creates memories
      </p>
    </div>
    
    <!-- Tab Navigation -->
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
    
    <!-- Content Display -->
    <div className="venue-display">
      <div className="venue-main-image">
        <img src={venueData[activeVenue].images[currentImageIndex]} 
             alt={venueData[activeVenue].title} width="800" height="500" />
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
      </div>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>JavaScript Functionality</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Component with State Management
import { useState } from 'react'
import VenueTabs from '../components/VenueTabs'
import CarouselControls from '../components/CarouselControls'

// Venue Data Structure
const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn...',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Built', value: '1920s architecture' },
      { label: 'Features', value: 'Climate controlled' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  }
  // ... other venue objects
}

export default function SpacesComponent() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle tab switching
  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0) // Reset to first image
  }

  // Image carousel navigation
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
    // Component JSX here...
  )
}

// VenueTabs Component
export const VenueTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="venue-tabs">
      {tabs.map(tab => (
        <button
          key={tab.key}
          className={\`venue-tab \${activeTab === tab.key ? 'active' : ''}\`}
          onClick={() => onChange(tab.key)}
          aria-pressed={activeTab === tab.key}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* Discover Our Spaces Section */
.section-warm {
  background: var(--cream-pearl);
  padding: 100px 0;
}

.venue-content {
  padding: 0;
}

.venue-header {
  text-align: center;
  margin-bottom: 3rem;
}

.venue-header .script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
}

.venue-header .section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
}

.venue-header .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.9;
  margin: 1.5rem auto 0;
  text-align: center;
}

/* Venue Tabs */
.venue-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.venue-tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--dusty-rose);
  color: var(--dusty-rose);
  border-radius: 30px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.venue-tab:hover {
  background: var(--dusty-rose);
  color: white;
  transform: translateY(-2px);
}

.venue-tab.active {
  background: var(--dusty-rose);
  color: white;
}

/* Venue Display */
.venue-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.venue-main-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.venue-main-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
}

/* Venue Details */
.venue-details h3 {
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
}

.venue-details > p {
  font-size: 1.125rem;
  color: var(--deep-brown);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.venue-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.venue-feature {
  text-align: left;
}

.venue-feature h5 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--dusty-rose);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.venue-feature p {
  font-size: 0.875rem;
  color: var(--text-dark);
  opacity: 0.8;
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .venue-display {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .venue-tabs {
    gap: 0.625rem;
  }
  
  .venue-tab {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
  
  .venue-details h3 {
    font-size: 2rem;
  }
  
  .venue-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}