import { useState, useEffect } from 'react'
import VenueTabs from './VenueTabs'
import CarouselControls from './CarouselControls'
import Icon from './Icon'

const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-interior-string-lights-ceiling-detail.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg',
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
      '/images/venue/barn-exterior-deck-stairs-trees.jpg',
      '/images/venue/barn-exterior-full-deck-view-evening.jpg',
      '/images/venue/barn-exterior-deck-swing-golden-hour.jpg'
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
      '/images/bridal-suite/1-large.jpeg',
      '/images/bridal-suite/dsc_1766-large.jpeg',
      '/images/bridal-suite/dsc_1768-large.jpeg',
      '/images/bridal-suite/dsc_1770-2-large.jpeg',
      '/images/bridal-suite/dsc_1773-large.jpeg',
      '/images/bridal-suite/dsc_1774-large.jpeg',
      '/images/bridal-suite/dsc_1776-large.jpeg'
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
      '/images/venue/barn-exterior-deck-stairs-trees.jpg',
      '/images/venue/barn-exterior-stone-wall-trees.jpg',
      '/images/venue/barn-exterior-landscaping-stone-border.jpg',
      '/images/venue/details-building-porch-architectural.jpg'
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
    title: 'Vineyard',
    images: [
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg',
      '/images/venue/property-vineyard-perspective-hills.jpg',
      '/images/venue/property-landscape-rural-vista.jpg',
      '/images/venue/barn-exterior-vintage-tractor-rustic.jpg',
      '/images/venue/details-swing-rustic-romance.jpg',
      '/images/venue/barn-exterior-welcome-sign-rustic-charm.jpg'
    ],
    description: 'Our working vineyard features 14 Minnesota hardy grape varieties, creating a stunning natural backdrop for ceremonies and celebrations among the vines.',
    features: [
      { label: 'Capacity', value: 'Up to 150 guests' },
      { label: 'Features', value: 'Natural canopy & string lights' },
      { label: 'Setting', value: 'Vineyard ceremony site' },
      { label: 'Backup', value: 'Weather protection available' }
    ]
  },
  reception: {
    title: 'Reception Area',
    images: [
      '/images/reception/dsc_1785-large.jpeg',
      '/images/reception/dsc_1786-enhanced-nr-large.jpeg',
      '/images/reception/dsc_1787-large.jpeg',
      '/images/reception/dsc_1788-large.jpeg',
      '/images/reception/dsc_1790-large.jpeg'
    ],
    description: 'A beautiful space thoughtfully designed for dining, dancing, and celebrating with your guests in style and comfort.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Features', value: 'Full service bar & dance floor' },
      { label: 'Lighting', value: 'Ambient & customizable' },
      { label: 'Setup', value: 'Flexible table arrangements' }
    ]
  }
}

/**
 * VenueDiscovery Component
 * Interactive venue showcase with tabbed navigation, image carousels, and feature highlights
 * Used on HomePage and PropertyPage
 */
export default function VenueDiscovery({ 
  className = '', 
  sectionClassName = 'section section-cream',
  title = 'Discover Our Spaces',
  subtitle = 'Your Perfect Setting',
  description = 'Every corner tells a story, every space creates memories'
}) {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)

  // Thumbnail carousel settings
  const thumbnailsPerView = 4
  const totalImages = venueData[activeVenue].images.length
  const showCarouselControls = totalImages > thumbnailsPerView

  const handleVenueChange = (venue) => {
    if (venue === activeVenue) return

    setIsTransitioning(true)

    setTimeout(() => {
      setActiveVenue(venue)
      setCurrentImageIndex(0)
      setThumbnailStartIndex(0)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 250)
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

  const nextThumbnails = () => {
    setThumbnailStartIndex(prev => 
      Math.min(prev + 1, totalImages - thumbnailsPerView)
    )
  }

  const prevThumbnails = () => {
    setThumbnailStartIndex(prev => Math.max(prev - 1, 0))
  }

  // Handle keyboard navigation in fullscreen
  useEffect(() => {
    if (!isFullscreen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsFullscreen(false)
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  return (
    <section className={`${sectionClassName} ${className}`}>
      <div className="content-wrapper venue-content">
        <div className="section-header center">
          <div className="script-accent">{subtitle}</div>
          <h2 className="section-title">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        
        <VenueTabs
          tabs={[
            { key: 'barn', label: 'The Barn' },
            { key: 'reception', label: 'Reception Area' },
            { key: 'bridal', label: 'Bridal Suite' },
            { key: 'groom', label: "Groom's Quarters" },
            { key: 'pavilion', label: 'Vineyard' }
          ]}
          activeTab={activeVenue}
          onChange={handleVenueChange}
        />
        
        <div className="venue-display-with-gallery">
          <div className="venue-top-section">
            <div className={`venue-main-image ${isTransitioning ? 'changing' : ''}`}>
              <img 
                src={venueData[activeVenue].images[currentImageIndex]} 
                alt={venueData[activeVenue].title} 
                width="800" 
                height="500" 
              />

              {/* Fullscreen Button */}
              <button
                className="fullscreen-button"
                onClick={() => setIsFullscreen(true)}
                aria-label="View fullscreen"
              >
                <Icon name="expand" size="md" color="white" />
              </button>

              <CarouselControls
                totalItems={venueData[activeVenue].images.length}
                currentIndex={currentImageIndex}
                onNext={nextImage}
                onPrev={prevImage}
                onDotClick={setCurrentImageIndex}
              />
            </div>
            
            <div className={`venue-details ${isTransitioning ? 'changing' : ''}`}>
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

          {/* Thumbnail Gallery - Carousel */}
          <div className="venue-thumbnail-carousel">
            <div className="venue-thumbnail-gallery">
              <div
                className="venue-thumbnail-track"
                style={{
                  transform: `translateX(-${thumbnailStartIndex * (160 + 16)}px)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                {venueData[activeVenue].images.map((image, index) => (
                  <div
                    key={index}
                    className={`venue-thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={image} alt={`${venueData[activeVenue].title} view ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* Thumbnail Navigation */}
              {showCarouselControls && thumbnailStartIndex > 0 && (
                <button
                  className="thumbnail-nav prev"
                  onClick={prevThumbnails}
                  aria-label="Previous thumbnails"
                >
                  ‹
                </button>
              )}
              {showCarouselControls && thumbnailStartIndex < totalImages - thumbnailsPerView && (
                <button
                  className="thumbnail-nav next"
                  onClick={nextThumbnails}
                  aria-label="Next thumbnails"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <button className="fullscreen-close" onClick={() => setIsFullscreen(false)}>
            <Icon name="close" size="lg" color="white" />
          </button>
          <img
            src={venueData[activeVenue].images[currentImageIndex]}
            alt={venueData[activeVenue].title}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="fullscreen-controls">
            <button
              className="fullscreen-nav prev"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              ‹
            </button>
            <button
              className="fullscreen-nav next"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  )
}