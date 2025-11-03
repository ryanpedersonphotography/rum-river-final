import { useState, useEffect } from 'react'
import VenueTabs from '../VenueTabs'
import CarouselControls from '../CarouselControls'
import Icon from '../Icon'
import { fetchVenues, getImageUrl } from '../../lib/sanityClient'

/**
 * VenueDiscoveryBlockRenderer Component
 * Renders venue discovery section from Sanity CMS data
 */
export default function VenueDiscoveryBlockRenderer({ data, blockIndex }) {
  const {
    scriptAccent = 'Your Perfect Setting',
    title = 'Discover Our Spaces',
    description = 'Every corner tells a story, every space creates memories',
    sectionStyle = 'section-cream',
    venues: featuredVenues
  } = data

  const [venues, setVenues] = useState({})
  const [loading, setLoading] = useState(true)
  const [activeVenue, setActiveVenue] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)

  // Load venues from Sanity
  useEffect(() => {
    const loadVenues = async () => {
      try {
        let venueData = []
        
        // Use featured venues if specified, otherwise fetch all
        if (featuredVenues && featuredVenues.length > 0) {
          venueData = featuredVenues
        } else {
          venueData = await fetchVenues()
        }

        // Transform to match existing venue data structure
        const transformedVenues = {}
        venueData.forEach(venue => {
          const venueKey = venue.key?.current || venue.key
          transformedVenues[venueKey] = {
            ...venue,
            key: venueKey,
            images: venue.images?.map(img => ({
              src: getImageUrl(img, { width: 800, height: 600 }),
              alt: img.alt || venue.title,
              caption: img.caption
            })) || []
          }
        })

        setVenues(transformedVenues)
        
        // Set first venue as active
        const firstVenueKey = Object.keys(transformedVenues)[0]
        if (firstVenueKey) {
          setActiveVenue(firstVenueKey)
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error loading venues:', error)
        setLoading(false)
      }
    }

    loadVenues()
  }, [featuredVenues])

  // Thumbnail carousel settings
  const thumbnailsPerView = 4
  const totalImages = venues[activeVenue]?.images?.length || 0
  const showCarouselControls = totalImages > thumbnailsPerView
  
  // Generate tabs from venue data
  const venueTabs = Object.values(venues)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map(venue => ({
      key: venue.key,
      label: venue.title
    }))

  const nextImage = () => {
    if (!venues[activeVenue]) return
    setCurrentImageIndex((prev) =>
      (prev + 1) % venues[activeVenue].images.length
    )
  }

  const prevImage = () => {
    if (!venues[activeVenue]) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? venues[activeVenue].images.length - 1 : prev - 1
    )
  }

  const selectImage = (index) => {
    setCurrentImageIndex(index)
  }

  const handleVenueChange = (venueKey) => {
    if (venueKey === activeVenue) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveVenue(venueKey)
      setCurrentImageIndex(0)
      setThumbnailStartIndex(0)
      setIsTransitioning(false)
    }, 150)
  }

  const nextThumbnails = () => {
    const maxStart = Math.max(0, totalImages - thumbnailsPerView)
    setThumbnailStartIndex(prev => Math.min(prev + 1, maxStart))
  }

  const prevThumbnails = () => {
    setThumbnailStartIndex(prev => Math.max(prev - 1, 0))
  }

  if (loading) {
    return (
      <section className={`venue-discovery-section section ${sectionStyle}`}>
        <div className="content-wrapper">
          <div className="venue-discovery-content center">
            <div className="script-accent">{scriptAccent}</div>
            <h2 className="section-title">{title}</h2>
            <p className="lead">{description}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading venues...
          </div>
        </div>
      </section>
    )
  }

  const currentVenue = venues[activeVenue]
  if (!currentVenue) {
    return null
  }

  const currentImage = currentVenue.images?.[currentImageIndex]
  const visibleThumbnails = currentVenue.images?.slice(
    thumbnailStartIndex, 
    thumbnailStartIndex + thumbnailsPerView
  ) || []

  return (
    <section className={`venue-discovery-section section ${sectionStyle}`}>
      <div className="content-wrapper">
        <div className="venue-discovery-content center">
          <div className="script-accent">{scriptAccent}</div>
          <h2 className="section-title">{title}</h2>
          <p className="lead">{description}</p>
        </div>

        <div className="venue-showcase">
          {/* Venue Tabs */}
          <VenueTabs 
            tabs={venueTabs}
            activeTab={activeVenue}
            onTabChange={handleVenueChange}
          />

          {/* Main Content */}
          <div className={`venue-content ${isTransitioning ? 'transitioning' : ''}`}>
            {/* Image Gallery */}
            <div className="venue-gallery">
              <div className="main-image-container">
                {currentImage && (
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="main-image"
                    width="800"
                    height="600"
                  />
                )}
                
                {/* Navigation arrows */}
                {currentVenue.images && currentVenue.images.length > 1 && (
                  <>
                    <button className="nav-arrow prev" onClick={prevImage}>
                      <Icon name="chevron-left" size="lg" color="white" />
                    </button>
                    <button className="nav-arrow next" onClick={nextImage}>
                      <Icon name="chevron-right" size="lg" color="white" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {currentVenue.images && currentVenue.images.length > 1 && (
                <div className="thumbnail-gallery">
                  {showCarouselControls && (
                    <CarouselControls
                      onPrev={prevThumbnails}
                      onNext={nextThumbnails}
                      canPrev={thumbnailStartIndex > 0}
                      canNext={thumbnailStartIndex < totalImages - thumbnailsPerView}
                    />
                  )}
                  <div className="thumbnails-container">
                    {visibleThumbnails.map((image, index) => {
                      const actualIndex = thumbnailStartIndex + index
                      return (
                        <button
                          key={actualIndex}
                          className={`thumbnail ${actualIndex === currentImageIndex ? 'active' : ''}`}
                          onClick={() => selectImage(actualIndex)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            width="120"
                            height="80"
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Venue Details */}
            <div className="venue-details">
              <h3 className="venue-title">{currentVenue.title}</h3>
              
              {currentVenue.description && (
                <div className="venue-description">
                  {Array.isArray(currentVenue.description) ? (
                    // Handle rich text
                    currentVenue.description.map((block, index) => (
                      <p key={index}>{block.children?.[0]?.text || block}</p>
                    ))
                  ) : (
                    <p>{currentVenue.description}</p>
                  )}
                </div>
              )}

              <div className="venue-specs">
                {currentVenue.capacity && (
                  <div className="spec-item">
                    <Icon name="users" size="sm" color="primary" />
                    <span>{currentVenue.capacity}</span>
                  </div>
                )}
                
                {currentVenue.lighting && (
                  <div className="spec-item">
                    <Icon name="lightbulb" size="sm" color="primary" />
                    <span>{currentVenue.lighting}</span>
                  </div>
                )}
                
                {currentVenue.climate && (
                  <div className="spec-item">
                    <Icon name="sun" size="sm" color="primary" />
                    <span>{currentVenue.climate}</span>
                  </div>
                )}
              </div>

              {currentVenue.features && currentVenue.features.length > 0 && (
                <div className="venue-features">
                  <h4>Features & Amenities</h4>
                  <ul>
                    {currentVenue.features.map((feature, index) => (
                      <li key={index}>
                        <Icon name="check" size="sm" color="primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentVenue.vrTourUrl && (
                <div className="venue-cta">
                  <a 
                    href={currentVenue.vrTourUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="vr-tour-button"
                  >
                    <Icon name="eye" size="sm" color="white" />
                    Take Virtual Tour
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}