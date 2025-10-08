import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SEO from '../components/SEO'
import NetlifyForm from '../components/NetlifyForm'
import { realWeddings } from '../data/realWeddings'
import { pageConfigs } from '../data/seoDefaults'
import VenueTabs from '../components/VenueTabs'
import CarouselControls from '../components/CarouselControls'
import VRTourButton from '../components/VRTourButton'
import CTAButton from '../components/CTAButton'
import ScheduleTourForm from '../components/ScheduleTourForm'
import Icon from '../components/Icon'
import Footer from '../components/Footer'

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
    title: 'Garden Pavilion',
    images: [
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg',
      '/images/venue/property-vineyard-perspective-hills.jpg',
      '/images/venue/property-landscape-rural-vista.jpg',
      '/images/venue/barn-exterior-vintage-tractor-rustic.jpg',
      '/images/venue/details-swing-rustic-romance.jpg',
      '/images/venue/barn-exterior-welcome-sign-rustic-charm.jpg'
    ],
    description: 'An enchanting outdoor space surrounded by lush gardens, perfect for ceremonies or cocktail hours under the open sky.',
    features: [
      { label: 'Capacity', value: 'Up to 150 guests' },
      { label: 'Features', value: 'Natural canopy & string lights' },
      { label: 'Setting', value: 'Garden ceremony site' },
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

export default function HomePage() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)

  const handleVenueChange = (venue) => {
    if (venue === activeVenue) return // Don't animate if same venue

    setIsTransitioning(true)

    // Start fade out animation
    setTimeout(() => {
      setActiveVenue(venue)
      setCurrentImageIndex(0)
      setThumbnailStartIndex(0) // Reset thumbnail carousel

      // End animation after content change
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 250) // Half the animation duration
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

  const thumbnailsPerView = 5 // Number of thumbnails visible at once
  const totalImages = venueData[activeVenue]?.images.length || 0
  const showCarouselControls = totalImages > thumbnailsPerView

  const nextThumbnails = () => {
    setThumbnailStartIndex((prev) =>
      Math.min(prev + 1, Math.max(0, totalImages - thumbnailsPerView))
    )
  }

  const prevThumbnails = () => {
    setThumbnailStartIndex((prev) => Math.max(0, prev - 1))
  }

  // Show floating CTA after scrolling past 50% of hero
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroHalfway = heroSection.offsetHeight * 0.5
        setShowFloatingCTA(window.scrollY > heroHalfway)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <SEO 
        title={pageConfigs.home.title}
        description={pageConfigs.home.description}
        keywords={pageConfigs.home.keywords}
        image={pageConfigs.home.image}
        url="/"
      />
      <Header />

      {/* Floating CTA Button - only shows after scrolling past hero */}
      {showFloatingCTA && (
        <a href="#lets-connect-form" className="floating-cta">
          <Icon name="calendar" size="sm" color="white" />
          Schedule Your Tour
        </a>
      )}

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
              <CTAButton href="/contact" variant="primary">Schedule Your Visit</CTAButton>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover Your Perfect Day</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Discover Our Spaces - Tabbed Venue Display */}
      <section className="section section-cream">
        <div className="content-wrapper venue-content">
          <div className="section-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead">Every corner tells a story, every space creates memories</p>
          </div>
          <VenueTabs
            tabs={[
              { key: 'barn', label: 'The Barn' },
              { key: 'reception', label: 'Reception Area' },
              { key: 'bridal', label: 'Bridal Suite' },
              { key: 'groom', label: "Groom's Quarters" },
              { key: 'pavilion', label: 'Garden Pavilion' }
            ]}
            activeTab={activeVenue}
            onChange={handleVenueChange}
          />
          <div className="venue-display-with-gallery">
            <div className="venue-top-section">
              <div className={`venue-main-image ${isTransitioning ? 'changing' : ''}`}>
                <img src={venueData[activeVenue].images[currentImageIndex]} alt={venueData[activeVenue].title} width="800" height="500" />

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

                {/* Hidden carousel navigation - shows on hover only when needed */}
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
      </section>

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

      {/* Numbered Feature Blocks - MOVED UP */}
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

      {/* Love Stories Gallery - MOVED DOWN */}
      <section className="love-stories-section section section-cream">
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
            <CTAButton to="/real-weddings" variant="primary">View All Real Weddings</CTAButton>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section section-blush">
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

      {/* Testimonials */}
      <section className="testimonials-section section section-cream">
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

      <Footer />
    </>
  )
}
