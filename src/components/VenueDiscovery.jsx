import { useState, useEffect } from 'react'
import VenueTabs from './VenueTabs'
import CarouselControls from './CarouselControls'
import Icon from './Icon'
import { useVenueData } from '../hooks/useVenueData'

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
  // Load venue data from CMS
  const { venues: venueData, loading, error } = useVenueData()
  
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)

  // Loading and error states
  if (loading) {
    return (
      <section className={`${sectionClassName} ${className}`}>
        <div className="content-wrapper venue-content">
          <div className="section-header center">
            <div className="script-accent">{subtitle}</div>
            <h2 className="section-title">{title}</h2>
            <p className="lead">{description}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--sage-green)' }}>Loading venue information...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error || !venueData || Object.keys(venueData).length === 0) {
    return (
      <section className={`${sectionClassName} ${className}`}>
        <div className="content-wrapper venue-content">
          <div className="section-header center">
            <div className="script-accent">{subtitle}</div>
            <h2 className="section-title">{title}</h2>
            <p className="lead">{description}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--warm-walnut)' }}>Unable to load venue information. Please try again later.</p>
            {error && <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>Error: {error}</p>}
          </div>
        </div>
      </section>
    )
  }

  // Thumbnail carousel settings
  const thumbnailsPerView = 4
  const totalImages = venueData[activeVenue]?.images?.length || 0
  const showCarouselControls = totalImages > thumbnailsPerView
  
  // Generate tabs from venue data sorted by order
  const venueTabs = Object.values(venueData)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map(venue => ({
      key: venue.key,
      label: venue.title
    }))

  // Set initial venue when data loads
  useEffect(() => {
    if (venueData && Object.keys(venueData).length > 0 && !venueData[activeVenue]) {
      const firstVenue = venueTabs[0]?.key || Object.keys(venueData)[0]
      setActiveVenue(firstVenue)
    }
  }, [venueData, activeVenue, venueTabs])

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
          tabs={venueTabs}
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