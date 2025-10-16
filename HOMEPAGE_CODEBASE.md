# Rum River Wedding Barn - Complete Homepage Codebase

This document contains the complete React codebase for the Rum River Wedding Barn homepage, including all components, hooks, data structures, and CSS.

## Table of Contents
- [Main HomePage Component](#main-homepage-component)
- [Supporting Components](#supporting-components)
- [Data Hooks](#data-hooks)
- [Data Structures](#data-structures)
- [CSS Styles](#css-styles)

---

## Main HomePage Component

### `src/pages/HomePage.jsx`

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SEO from '../components/SEO'
import NetlifyForm from '../components/NetlifyForm'
import { realWeddings } from '../data/realWeddings'
import { pageConfigs } from '../data/seoDefaults'
import VenueDiscovery from '../components/VenueDiscovery'
import VRTourButton from '../components/VRTourButton'
import CTAButton from '../components/CTAButton'
import ScheduleTourForm from '../components/ScheduleTourForm'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { useContentfulHomePage } from '../hooks/useContentful'
import { useTestimonials } from '../hooks/useVenueData'
import { useFeaturedWeddings } from '../hooks/useWeddingBlogs'

export default function HomePage() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)
  
  // Load page content from Contentful CMS (falls back to local if not configured)
  const { content: pageContent, loading: contentLoading, error: contentError } = useContentfulHomePage()
  const { testimonials, loading: testimonialsLoading, error: testimonialsError } = useTestimonials()
  
  // Load featured weddings from Contentful
  const { blogs: featuredWeddings, loading: weddingsLoading } = useFeaturedWeddings(6)
  
  // Use fallback wedding data if Contentful not available
  const displayWeddings = featuredWeddings.length > 0 ? featuredWeddings.map(w => ({
    slug: w.slug,
    coupleName: w.coupleName,
    coverImage: w.coverImage?.url?.startsWith('//') ? `https:${w.coverImage.url}` : w.coverImage?.url,
    date: w.season,
    location: w.location,
    photoCount: w.photos?.length || 20
  })) : realWeddings.slice(0, 6)

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

  // Show loading state while content is being fetched
  if (contentLoading) {
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
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '60vh',
          fontSize: '1.2rem',
          color: 'var(--sage-green)'
        }}>
          Loading page content...
        </div>
        <Footer />
      </>
    )
  }

  // Show error state if content fails to load
  if (contentError) {
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
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '60vh',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--warm-walnut)' }}>Unable to load page content</h2>
          <p style={{ color: '#666' }}>Please try refreshing the page</p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Error: {contentError}</p>
        </div>
        <Footer />
      </>
    )
  }

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
            <div className="script-accent">{pageContent?.hero?.scriptAccent || 'Where Dreams Begin'}</div>
            <h1 className="hero-headline">
              {pageContent?.hero?.titleLine1 || 'Rum River'}<br />
              <span className="hero-accent">{pageContent?.hero?.titleLine2 || 'Wedding Barn'}</span>
            </h1>
            <p className="lead hero-lead">
              {pageContent?.hero?.description || 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.'}
            </p>
            <div className="hero-buttons">
              <CTAButton href={pageContent?.hero?.ctaLink || '/contact'} variant="primary">
                {pageContent?.hero?.ctaText || 'Schedule Your Visit'}
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover Your Perfect Day</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Discover Our Spaces - Tabbed Venue Display */}
      <VenueDiscovery />

      {/* Numbered Feature Blocks - MOVED UP */}
      <section className="alternating-blocks">
        <div className="content-wrapper">
          <div className="feature-blocks-content center">
            <div className="script-accent">{pageContent?.featureBlocks?.scriptAccent || 'Your Perfect Venue'}</div>
            <h2 className="section-title">{pageContent?.featureBlocks?.title || 'Why Choose Rum River Barn'}</h2>
            <p className="lead">{pageContent?.featureBlocks?.lead || 'Discover what makes our venue the perfect setting for your unforgettable celebration'}</p>
          </div>

          <div className="blocks-container">
            {pageContent?.featureBlocks?.blocks ? (
              pageContent.featureBlocks.blocks.map((block, index) => (
                <div key={index} className={`block-item ${block.reverse ? 'reverse' : ''}`}>
                  <div className="block-content">
                    <div className="number">{block.number}</div>
                    <h3>{block.title}</h3>
                    <p className="lead">{block.lead}</p>
                    {block.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} dangerouslySetInnerHTML={{ 
                        __html: paragraph.replace(/612-801-0546/g, '<strong>612-801-0546</strong>') 
                      }} />
                    ))}
                  </div>
                  <div className="block-image styled-image light no-link">
                    <img 
                      src={block.image ? `https:${block.image}` : (index === 0 ? "/images/venue/barn-interior-ceiling-beams-lighting.jpg" : "/images/venue/property-field-wildflowers-natural.jpg")} 
                      alt={block.imageAlt} 
                      width="800" 
                      height="500" 
                    />
                  </div>
                </div>
              ))
            ) : (
              // Fallback content if no data
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Love Stories Gallery - MOVED DOWN */}
      <section className="love-stories-section section section-cream">
        <div className="content-wrapper">
          <div className="love-stories-content center">
            <div className="script-accent">{pageContent?.loveStories?.scriptAccent || 'Real Love Stories'}</div>
            <h2 className="section-title">{pageContent?.loveStories?.title || 'Weddings at the Barn'}</h2>
            <p className="lead">{pageContent?.loveStories?.lead || 'Every celebration tells a unique story of love, laughter, and happily ever after.'}</p>
          </div>

          <div className="wedding-gallery">
            {displayWeddings.map((wedding, index) => (
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
              <div className="script-accent">{pageContent?.experience?.scriptAccent || 'The Rum River Experience'}</div>
              <h2 className="section-title">{pageContent?.experience?.title || 'More Than a Venue'}</h2>
              <p className="lead">
                {pageContent?.experience?.description || "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story."}
              </p>

              <div className="experience-features">
                {pageContent?.experience?.features ? (
                  pageContent.experience.features.map((feature, index) => {
                    // Map feature titles to icons
                    const iconMap = {
                      'All-Inclusive Planning': 'check',
                      'Customizable Packages': 'sparkles',
                      'Historic Charm': 'home'
                    }
                    const iconName = iconMap[feature.title] || 'check'
                    
                    return (
                      <div key={index} className="feature-item">
                        <div className="feature-icon">
                          <Icon name={iconName} size="lg" color="primary" />
                        </div>
                        <div className="feature-content">
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  // Fallback features
                  <>
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
                  </>
                )}
              </div>
            </div>

            <div className="experience-image image-reveal styled-image light no-link">
              <img src={pageContent?.experience?.image ? `https:${pageContent.experience.image}` : "/images/2014/04/Loria-Jason-wedding-2-0026.jpg"} alt="Wedding Celebration" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section section-cream">
        <div className="content-wrapper">
          <div className="testimonials-content center">
            <div className="script-accent">{pageContent?.testimonials?.scriptAccent || 'Love Letters'}</div>
            <h2 className="section-title">{pageContent?.testimonials?.title || 'What Couples Say'}</h2>
          </div>

          <div className="testimonials-grid">
            {pageContent?.testimonials?.items ? (
              pageContent.testimonials.items.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="five-star-rating">★★★★★</div>
                  <blockquote className="testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="author-name">{testimonial.authorName}</div>
                    <div className="author-detail">{testimonial.authorDetail}</div>
                  </div>
                </div>
              ))
            ) : (
              // Fallback testimonials
              <>
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
              </>
            )}
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
```

---

## Supporting Components

### `src/components/Header.jsx`

```jsx
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id="header" className="header-enhanced">
      <div className="content-wrapper">
        <div className="header-content">
          <a href="/" className="logo-wrapper">
            <div className="logo-text">
              <div className="logo-line-1">Rum River</div>
              <div className="logo-line-2">Wedding Barn</div>
            </div>
          </a>
          <nav>
            <ul className="nav-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/vendor-list">Vendor List</a></li>
              <li className="dropdown">
                <a href="/property">The Property ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/location">Location</a></li>
                  <li><a href="/history">History</a></li>
                </ul>
              </li>
              <li><a href="/gallery">Gallery</a></li>
              <li className="dropdown">
                <a href="/testimonials">Testimonials & Features ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="/testimonials">Testimonials</a></li>
                  <li><a href="/real-weddings">Real Weddings Blog</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
```

### `src/components/SEO.jsx`

```jsx
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = "Rum River Wedding Barn | Historic Hillman MN Wedding Venue",
  description = "Elegant rustic wedding venue in Hillman, Minnesota. Historic barn with modern amenities, bridal suite, groom's quarters. Capacity up to 300 guests.",
  keywords = "wedding venue, rustic barn, Hillman Minnesota, wedding barn, historic venue, Minnesota weddings, barn wedding, rural wedding venue",
  image = "/images/venue/barn-exterior-full-view-landscape.jpg",
  url = "https://rumriverweddingbarn.com",
  type = "website",
  siteName = "Rum River Wedding Barn"
}) {
  const fullTitle = title.includes('Rum River') ? title : `${title} | Rum River Wedding Barn`
  const fullUrl = url.startsWith('http') ? url : `https://rumriverweddingbarn.com${url}`
  const fullImageUrl = image.startsWith('http') ? image : `https://rumriverweddingbarn.com${image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rum River Wedding Barn" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags for Facebook/Instagram */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Geographic Tags for Local SEO */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Hillman, Minnesota" />
      <meta name="geo.position" content="46.0441;-93.8842" />
      <meta name="ICBM" content="46.0441, -93.8842" />
      
      {/* Business Information */}
      <meta name="business:contact_data:locality" content="Hillman" />
      <meta name="business:contact_data:region" content="MN" />
      <meta name="business:contact_data:country_name" content="USA" />
    </Helmet>
  )
}
```

### `src/components/VenueDiscovery.jsx`

```jsx
import { useState, useEffect } from 'react'
import VenueTabs from './VenueTabs'
import CarouselControls from './CarouselControls'
import Icon from './Icon'
import { useVenueData } from '../hooks/useVenueData'

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

  // Thumbnail carousel settings
  const thumbnailsPerView = 4
  const totalImages = venueData && venueData[activeVenue]?.images?.length || 0
  const showCarouselControls = totalImages > thumbnailsPerView
  
  // Generate tabs from venue data sorted by order
  const venueTabs = venueData ? Object.values(venueData)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map(venue => ({
      key: venue.key,
      label: venue.title
    })) : []

  const nextImage = () => {
    if (!venueData || !venueData[activeVenue]) return
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    if (!venueData || !venueData[activeVenue]) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }

  // Set initial venue when data loads
  useEffect(() => {
    if (venueData && Object.keys(venueData).length > 0 && !venueData[activeVenue]) {
      const firstVenue = venueTabs[0]?.key || Object.keys(venueData)[0]
      setActiveVenue(firstVenue)
    }
  }, [venueData, activeVenue, venueTabs])

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
  }, [isFullscreen, prevImage, nextImage])

  // Loading and error states
  if (loading) {
    return (
      <section className={`${sectionClassName} ${className}`}>
        <div className="content-wrapper venue-content">
          <div className="venue-discovery-content center">
            <div className="script-accent">{subtitle || 'Your Perfect Setting'}</div>
            <h2 className="section-title">{title || 'Discover Our Spaces'}</h2>
            <p className="lead">{description || 'Every corner tells a story, every space creates memories'}</p>
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
          <div className="venue-discovery-content center">
            <div className="script-accent">{subtitle || 'Your Perfect Setting'}</div>
            <h2 className="section-title">{title || 'Discover Our Spaces'}</h2>
            <p className="lead">{description || 'Every corner tells a story, every space creates memories'}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--warm-walnut)' }}>Unable to load venue information. Please try again later.</p>
            {error && <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>Error: {error}</p>}
          </div>
        </div>
      </section>
    )
  }

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

  const nextThumbnails = () => {
    setThumbnailStartIndex(prev => 
      Math.min(prev + 1, totalImages - thumbnailsPerView)
    )
  }

  const prevThumbnails = () => {
    setThumbnailStartIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <section className={`${sectionClassName} ${className}`}>
      <div className="content-wrapper venue-content">
        <div className="venue-discovery-content center">
          <div className="script-accent">{subtitle || 'Your Perfect Setting'}</div>
          <h2 className="section-title">{title || 'Discover Our Spaces'}</h2>
          <p className="lead">{description || 'Every corner tells a story, every space creates memories'}</p>
        </div>
        
        <VenueTabs
          tabs={venueTabs}
          activeTab={activeVenue}
          onChange={handleVenueChange}
        />
        
        <div className="venue-display-simple">
          <div className="venue-top-section">
            <div className="venue-main-image">
              <img 
                src={venueData[activeVenue].images[0]} 
                alt={venueData[activeVenue].title} 
                width="800" 
                height="500" 
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
              <div className="venue-thumbnail-track">
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
```

### `src/components/CTAButton.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const CTAButton = ({ 
  variant = 'primary', // primary, outline, vr-special, vr-barn, vr-bridal
  size = 'normal', // normal, large, small
  href,
  to, // For React Router links
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  target,
  rel
}) => {
  // Determine base class based on variant
  const getBaseClass = () => {
    if (variant === 'submit') {
      return 'cta-submit-button';
    } else if (variant === 'floating') {
      return 'floating-cta';
    } else if (variant.startsWith('vr-')) {
      return `romantic-button ${variant}`;
    } else {
      return `romantic-button ${variant}`;
    }
  };

  const baseClass = getBaseClass();
  const finalClassName = `${baseClass} ${size !== 'normal' ? `size-${size}` : ''} ${className}`.trim();

  // Common props
  const commonProps = {
    className: finalClassName,
    onClick,
    disabled,
    'aria-label': ariaLabel
  };

  // If it's a React Router link
  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a 
        href={href} 
        {...commonProps}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  // Default button
  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
};

export default CTAButton;
```

### `src/components/ScheduleTourForm.jsx`

```jsx
import React from 'react';
import NetlifyForm from './NetlifyForm';
import FormSubmitButton from './FormSubmitButton';

export const ScheduleTourForm = ({
  formName = 'schedule-tour',
  redirectPath = '/thank-you',
  title = "Start Planning Your Perfect Day",
  subtitle = "Schedule Your Tour",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  submitText = 'Schedule Tour',
  loadingText = 'SCHEDULING...',
  className = '',
  showHeader = true,
  sectionStyle = {},
  lightTheme = false,
  formType = 'tour' // 'tour' or 'vendor'
}) => {
  return (
    <section className={`cta-contact-section ${className}`.trim()} style={sectionStyle}>
      <div className="cta-contact-container">
        {showHeader && (
          <div className="cta-contact-header" style={lightTheme ? {
            color: 'var(--warm-walnut)'
          } : {}}>
            <p className="script-font" style={lightTheme ? {
              color: 'var(--dusty-rose)'
            } : {}}>{subtitle}</p>
            <h2 style={lightTheme ? {
              color: 'var(--warm-walnut)'
            } : {}}>{title}</h2>
            <p style={lightTheme ? {
              color: 'var(--warm-walnut)',
              opacity: 0.8
            } : {}}>{description}</p>
          </div>
        )}
        
        <NetlifyForm name={formName} action={redirectPath}>
          {({ handleSubmit, submitting, error, honeypotField }) => (
            <form className="cta-contact-form" onSubmit={handleSubmit}>
              {honeypotField}
              {error && (
                <div style={{
                  background: 'rgba(212, 165, 165, 0.1)',
                  border: '1px solid rgba(212, 165, 165, 0.3)',
                  color: 'var(--warm-walnut)',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  {error}
                </div>
              )}
              
              {formType === 'vendor' ? (
                // Vendor Application Form Fields
                <>
                  {/* Business Name & Contact Name */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="businessName">Business Name *</label>
                      <input 
                        type="text" 
                        id="businessName" 
                        name="businessName" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="contactName">Contact Name *</label>
                      <input 
                        type="text" 
                        id="contactName" 
                        name="contactName" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                  </div>
                  
                  {/* Email & Phone Row */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                  </div>
                  
                  {/* Service Category & Years in Business */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="serviceCategory">Service Category *</label>
                      <select 
                        id="serviceCategory" 
                        name="serviceCategory" 
                        required
                        disabled={submitting}
                      >
                        <option value="">Select Category</option>
                        <option value="Photography">Photography</option>
                        <option value="Videography">Videography</option>
                        <option value="DJ & Entertainment">DJ & Entertainment</option>
                        <option value="Catering">Catering</option>
                        <option value="Florist">Florist</option>
                        <option value="Hair & Makeup">Hair & Makeup</option>
                        <option value="Wedding Planning">Wedding Planning</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Officiants">Officiants</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="yearsInBusiness">Years in Business *</label>
                      <select 
                        id="yearsInBusiness" 
                        name="yearsInBusiness" 
                        required
                        disabled={submitting}
                      >
                        <option value="">Select Range</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Website & Service Area */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="website">Website URL</label>
                      <input 
                        type="url" 
                        id="website" 
                        name="website" 
                        placeholder="https://"
                        disabled={submitting} 
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="serviceArea">Service Area</label>
                      <input 
                        type="text" 
                        id="serviceArea" 
                        name="serviceArea" 
                        placeholder="e.g., Twin Cities, Central MN"
                        disabled={submitting} 
                      />
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="cta-form-group cta-full-width">
                    <label htmlFor="message">Tell us about your services *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Describe your services, experience, and why you'd like to join our vendor network..." 
                      required
                      disabled={submitting}
                    ></textarea>
                  </div>
                </>
              ) : (
                // Tour Scheduling Form Fields (Original)
                <>
                  {/* Full Name */}
                  <div className="cta-form-group cta-full-width">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      disabled={submitting} 
                    />
                  </div>
                  
                  {/* Email & Phone Row */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                  </div>
                  
                  {/* Event Date & Tour Date Row */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="proposedEventDate">Proposed Event Date</label>
                      <input 
                        type="date" 
                        id="proposedEventDate" 
                        name="proposedEventDate" 
                        disabled={submitting} 
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="preferredTourDate">Preferred Tour Date *</label>
                      <input 
                        type="date" 
                        id="preferredTourDate" 
                        name="preferredTourDate" 
                        required 
                        disabled={submitting} 
                      />
                    </div>
                  </div>
                  
                  {/* Tour Time & Guest Count Row */}
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label htmlFor="preferredTourTime">Preferred Tour Time</label>
                      <select 
                        id="preferredTourTime" 
                        name="preferredTourTime" 
                        disabled={submitting}
                      >
                        <option value="">Select Time</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="guestCount">Estimated Guest Count</label>
                      <select 
                        id="guestCount" 
                        name="guestCount" 
                        disabled={submitting}
                      >
                        <option value="">Select Range</option>
                        <option value="50-100">50-100 Guests</option>
                        <option value="100-150">100-150 Guests</option>
                        <option value="150-200">150-200 Guests</option>
                        <option value="200+">200+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="cta-form-group cta-full-width">
                    <label htmlFor="message">Additional Information or Questions</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your event plans or any specific questions..." 
                      disabled={submitting}
                    ></textarea>
                  </div>
                </>
              )}
              
              {/* Submit Button */}
              <FormSubmitButton
                submitting={submitting}
                submitText={submitText}
                loadingText={loadingText}
              />
            </form>
          )}
        </NetlifyForm>
      </div>
    </section>
  );
};

export default ScheduleTourForm;
```

### `src/components/NetlifyForm.jsx`

```jsx
import { useState } from 'react'

export default function NetlifyForm({
  name,
  action = '/thank-you',
  children
}) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  // Extract all form fields from the rendered children to create hidden form
  const getFormFields = () => {
    const fields = []
    const extractFields = (element) => {
      if (!element || !element.props) return

      // Check if this is an input, textarea, or select
      if (['input', 'textarea', 'select'].includes(element.type)) {
        const { name, type } = element.props
        if (name && type !== 'submit' && type !== 'button') {
          fields.push({ name, type: type || 'text' })
        }
      }

      // Recursively check children
      if (element.props.children) {
        const children = Array.isArray(element.props.children)
          ? element.props.children
          : [element.props.children]
        children.forEach(extractFields)
      }
    }

    // Render children to extract field structure
    const rendered = children({ handleSubmit: () => {}, submitting: false, success: false })
    extractFields(rendered)
    return fields
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.target)
    const data = {}

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      data[key] = value
    }

    // Add form-name for Netlify
    data['form-name'] = name

    console.log('Submitting form data:', data)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data)
      })

      console.log('Response status:', response.status)
      console.log('Response:', response)

      if (response.ok) {
        setSuccess(true)
        // Redirect to success page after a brief delay
        setTimeout(() => {
          window.location.href = action
        }, 500)
      } else {
        const responseText = await response.text()
        console.error('Response error:', responseText)
        throw new Error(`Form submission failed with status ${response.status}`)
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('There was an error submitting the form. Please try again.')
      setSubmitting(false)
    }
  }

  const formFields = getFormFields()

  return (
    <>
      {/* Hidden form for Netlify build-time detection */}
      <form
        name={name}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
        aria-hidden="true"
      >
        <input type="hidden" name="form-name" value={name} />
        <input type="hidden" name="bot-field" />
        {formFields.map(field => (
          field.type === 'textarea'
            ? <textarea key={field.name} name={field.name}></textarea>
            : field.type === 'select'
            ? <select key={field.name} name={field.name}><option value=""></option></select>
            : <input key={field.name} type={field.type} name={field.name} />
        ))}
      </form>

      {/* Render actual form via children render prop */}
      {children({
        handleSubmit,
        submitting,
        success,
        error,
        honeypotField: (
          <input 
            type="text"
            name="bot-field" 
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />
        )
      })}
    </>
  )
}
```

### `src/components/FormSubmitButton.jsx`

```jsx
import React from 'react';

export const FormSubmitButton = ({ 
  submitting = false,
  submitText = 'Submit',
  loadingText = 'Submitting...',
  icon,
  showIcon = false,
  className = '',
  disabled = false
}) => {
  const isDisabled = submitting || disabled;
  const displayText = submitting ? loadingText : submitText;

  return (
    <button 
      type="submit" 
      className={`romantic-button primary ${className}`.trim()}
      disabled={isDisabled}
      aria-busy={submitting}
      aria-disabled={isDisabled}
    >
      <span>
        {showIcon && icon && !submitting && (
          <span style={{ marginRight: '0.5rem' }}>{icon}</span>
        )}
        {displayText}
      </span>
    </button>
  );
};

export default FormSubmitButton;
```

### `src/components/VenueTabs.jsx`

```jsx
import React from 'react';

export const VenueTabs = ({ 
  tabs, 
  activeTab, 
  onChange,
  className = '' 
}) => {
  return (
    <div className={`venue-tabs ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          type="button"
          className={`venue-tab ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => onChange(tab.key)}
          aria-pressed={activeTab === tab.key}
          aria-label={`View ${tab.label}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default VenueTabs;
```

### `src/components/Footer.jsx`

```jsx
export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 2rem 2.5rem',
      background: 'var(--text-dark)',
      color: 'white',
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
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Rum River Barn</h4>
            <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'var(--accent-gold)' }}>
              Minnesota's premier wedding venue<br />
              where dreams come to life
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Visit Us</h4>
            <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'var(--accent-gold)' }}>
              42618 78th Street<br />
              Hillman, MN 56338<br />
              (320) 492-8584
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
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
          <p style={{ color: 'var(--accent-gold)' }}>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
        </div>
      </div>
    </footer>
  )
}
```

### `src/components/Icon.jsx`

```jsx
import {
  CalendarIcon,
  HomeIcon,
  SparklesIcon,
  HeartIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  CameraIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  TrophyIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  GiftIcon,
  CheckIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  PlayIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  SwatchIcon,
  BeakerIcon,
  BookOpenIcon,
  LightBulbIcon,
  FireIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  CakeIcon,
  TicketIcon,
  FlagIcon,
  BellIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  RectangleGroupIcon,
  FolderIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  HandThumbUpIcon,
  HandRaisedIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  TagIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  FingerPrintIcon,
  EyeIcon,
  EyeSlashIcon,
  ShareIcon,
  LinkIcon,
  PaperAirplaneIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PrinterIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  WifiIcon,
  SignalIcon,
  ServerIcon,
  CloudArrowUpIcon,
  TrashIcon,
  ArchiveBoxIcon,
  InboxIcon,
  PaperClipIcon,
  BookmarkIcon,
  HashtagIcon,
  AtSymbolIcon,
  ChatBubbleLeftIcon,
  UserIcon,
  UsersIcon,
  UserPlusIcon,
  IdentificationIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  NewspaperIcon,
  MicrophoneIcon,
  RadioIcon,
  FilmIcon,
  CalculatorIcon,
  CreditCardIcon,
  CubeIcon,
  PuzzlePieceIcon,
  LifebuoyIcon,
  RocketLaunchIcon,
  TruckIcon,
  MapIcon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  HomeModernIcon,
  ScaleIcon,
  BeakerIcon as ScienceIcon,
  CommandLineIcon,
  CpuChipIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ServerStackIcon,
  WindowIcon,
  GlobeAsiaAustraliaIcon,
  LanguageIcon,
  AcademicCapIcon as GraduationCapIcon,
  ArrowsPointingOutIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

import {
  CalendarIcon as CalendarIconSolid,
  HomeIcon as HomeIconSolid,
  SparklesIcon as SparklesIconSolid,
  HeartIcon as HeartIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  StarIcon as StarIconSolid,
  TrophyIcon as TrophyIconSolid,
  CakeIcon as CakeIconSolid,
  GiftIcon as GiftIconSolid,
  FireIcon as FireIconSolid,
  SunIcon as SunIconSolid,
  BellIcon as BellIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  HandThumbUpIcon as HandThumbUpIconSolid
} from '@heroicons/react/24/solid'

// Icon mapping for common uses
const iconMap = {
  // Schedule/Calendar
  calendar: CalendarIcon,
  schedule: CalendarIcon,
  date: CalendarIcon,
  calendarSolid: CalendarIconSolid,
  
  // Home/Building
  home: HomeIcon,
  house: HomeIcon,
  building: BuildingOfficeIcon,
  venue: HomeModernIcon,
  homeSolid: HomeIconSolid,
  
  // Decorative
  sparkles: SparklesIcon,
  sparkle: SparklesIcon,
  magic: SparklesIcon,
  sparklesSolid: SparklesIconSolid,
  
  // Love/Romance
  heart: HeartIcon,
  love: HeartIcon,
  wedding: HeartIcon,
  heartSolid: HeartIconSolid,
  
  // Status
  check: CheckCircleIcon,
  success: CheckCircleIcon,
  complete: CheckCircleIcon,
  checkSolid: CheckCircleIconSolid,
  error: XCircleIcon,
  cancel: XCircleIcon,
  close: XMarkIcon,
  x: XMarkIcon,
  warning: ExclamationTriangleIcon,
  alert: ExclamationTriangleIcon,
  
  // Media
  camera: CameraIcon,
  photo: PhotoIcon,
  gallery: PhotoIcon,
  video: VideoCameraIcon,
  music: MusicalNoteIcon,
  play: PlayIcon,
  
  // Documents
  document: DocumentTextIcon,
  file: DocumentTextIcon,
  clipboard: ClipboardDocumentCheckIcon,
  
  // Analytics
  chart: ChartBarIcon,
  analytics: ChartPieIcon,
  trending: ArrowTrendingUpIcon,
  
  // Creative
  paint: PaintBrushIcon,
  palette: SwatchIcon,
  design: PaintBrushIcon,
  
  // Tools
  wrench: WrenchScrewdriverIcon,
  tools: WrenchScrewdriverIcon,
  settings: CogIcon,
  adjust: AdjustmentsHorizontalIcon,
  
  // Achievement
  trophy: TrophyIcon,
  award: TrophyIcon,
  trophySolid: TrophyIconSolid,
  star: StarIcon,
  starSolid: StarIconSolid,
  
  // Communication
  phone: PhoneIcon,
  email: EnvelopeIcon,
  message: ChatBubbleLeftIcon,
  chat: ChatBubbleLeftRightIcon,
  megaphone: MegaphoneIcon,
  
  // Location
  map: MapIcon,
  location: MapPinIcon,
  pin: MapPinIcon,
  compass: MapIcon,
  
  // Time
  clock: ClockIcon,
  time: ClockIcon,
  
  // People
  user: UserIcon,
  users: UserGroupIcon,
  people: UsersIcon,
  
  // Special Events
  gift: GiftIcon,
  present: GiftIcon,
  giftSolid: GiftIconSolid,
  cake: CakeIcon,
  celebration: CakeIcon,
  cakeSolid: CakeIconSolid,
  party: GiftIcon,
  
  // Actions
  search: MagnifyingGlassIcon,
  edit: PencilSquareIcon,
  share: ShareIcon,
  link: LinkIcon,
  download: ArrowDownTrayIcon,
  upload: ArrowUpTrayIcon,
  send: PaperAirplaneIcon,
  expand: ArrowsPointingOutIcon,
  fullscreen: ArrowsPointingOutIcon,
  
  // UI Elements
  chevronDown: ChevronDownIcon,
  arrowRight: ArrowRightIcon,
  menu: Squares2X2Icon,
  grid: RectangleGroupIcon,
  
  // Info
  info: InformationCircleIcon,
  question: QuestionMarkCircleIcon,
  
  // Security
  shield: ShieldCheckIcon,
  shieldSolid: ShieldCheckIconSolid,
  lock: LockClosedIcon,
  key: KeyIcon,
  
  // Nature
  sun: SunIcon,
  sunSolid: SunIconSolid,
  moon: MoonIcon,
  cloud: CloudIcon,
  fire: FireIcon,
  fireSolid: FireIconSolid,
  
  // Commerce
  shop: ShoppingBagIcon,
  store: BuildingStorefrontIcon,
  dollar: CurrencyDollarIcon,
  money: BanknotesIcon,
  discount: ReceiptPercentIcon,
  tag: TagIcon,
  
  // Misc
  flag: FlagIcon,
  bell: BellIcon,
  bellSolid: BellIconSolid,
  bookmark: BookmarkIcon,
  bookmarkSolid: BookmarkIconSolid,
  thumbsUp: HandThumbUpIcon,
  thumbsUpSolid: HandThumbUpIconSolid,
  lightning: BoltIcon,
  rocket: RocketLaunchIcon,
  lifebuoy: LifebuoyIcon
}

/**
 * Universal Icon Component
 */
export default function Icon({ 
  name, 
  className = '', 
  size = 'md', 
  color = 'current',
  solid = false,
  style = {},
  ...props 
}) {
  // Try to get solid variant first if requested
  const solidName = solid ? `${name}Solid` : name
  const IconComponent = iconMap[solidName] || iconMap[name] || QuestionMarkCircleIcon
  
  // Size classes
  const sizeClasses = {
    xs: 'icon-xs',
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl'
  }
  
  // Color classes
  const colorClasses = {
    current: 'icon-current',
    primary: 'icon-primary',
    secondary: 'icon-secondary',
    accent: 'icon-accent',
    gold: 'icon-gold',
    success: 'icon-success',
    error: 'icon-error',
    warning: 'icon-warning',
    white: 'icon-white',
    muted: 'icon-muted'
  }
  
  const classes = [
    'icon',
    sizeClasses[size] || sizeClasses.md,
    colorClasses[color] || colorClasses.current,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <IconComponent 
      className={classes}
      style={style}
      aria-hidden="true"
      {...props}
    />
  )
}

// Export icon mapping for reference
export { iconMap }
```

---

## Data Hooks

### `src/hooks/useContentful.js`

```javascript
import { useState, useEffect } from 'react'
import { getHomePageContent } from '../lib/contentful'
import { localHomePageContent } from '../lib/localContent.js'

/**
 * Hook to fetch HomePage content from Contentful
 * Falls back to local content if Contentful is not configured or unavailable
 */
export function useContentfulHomePage() {
  // Start with local content immediately to avoid flash
  const [content, setContent] = useState(localHomePageContent)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Don't show loading state - we already have content
        setError(null)
        
        // Try Contentful in background
        const contentfulData = await getHomePageContent()
        
        if (contentfulData) {
          setContent(contentfulData)
        }
        // If no Contentful data, we're already showing local content
      } catch (err) {
        console.error('Error fetching HomePage content:', err)
        // Don't set error - we have fallback content
        // setError(err.message)
      }
    }

    fetchContent()
  }, [])

  return { content, loading, error }
}

export default useContentfulHomePage
```

### `src/hooks/useVenueData.js`

```javascript
import { useState, useEffect } from 'react'

/**
 * Custom hook to fetch and manage venue data from CMS
 */
export function useVenueData() {
  const [venues, setVenues] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        setLoading(true)
        setError(null)

        // List of venue files to fetch
        const venueFiles = ['barn', 'reception', 'bridal', 'groom', 'vineyard']
        
        const venuePromises = venueFiles.map(async (venueKey) => {
          const response = await fetch(`/content/venues/${venueKey}.json`)
          if (!response.ok) {
            throw new Error(`Failed to fetch ${venueKey} venue data`)
          }
          const data = await response.json()
          return { [data.key]: data }
        })

        const venueResults = await Promise.all(venuePromises)
        
        // Combine all venue data into a single object
        const combinedVenues = venueResults.reduce((acc, venue) => ({
          ...acc,
          ...venue
        }), {})

        setVenues(combinedVenues)
      } catch (err) {
        console.error('Error fetching venue data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVenueData()
  }, [])

  return { venues, loading, error }
}

/**
 * Custom hook to fetch testimonials data from CMS
 */
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        setError(null)

        // For now, we'll fetch the known testimonials
        const testimonialFiles = [
          'sarah-michael-johnson',
          'emma-james-wilson', 
          'amanda-chris-thompson'
        ]
        
        const testimonialPromises = testimonialFiles.map(async (fileName) => {
          const response = await fetch(`/content/testimonials/${fileName}.json`)
          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName} testimonial`)
          }
          return await response.json()
        })

        const results = await Promise.all(testimonialPromises)
        
        // Sort by order field
        const sortedTestimonials = results.sort((a, b) => a.order - b.order)
        
        setTestimonials(sortedTestimonials)
      } catch (err) {
        console.error('Error fetching testimonials:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}

export default useVenueData
```

### `src/hooks/useWeddingBlogs.js`

```javascript
import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

// Contentful configuration
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

// Create Contentful client
const client = SPACE_ID && ACCESS_TOKEN ? createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  host: import.meta.env.VITE_CONTENTFUL_HOST || 'cdn.contentful.com'
}) : null

/**
 * Hook to fetch wedding blog posts from Contentful
 */
export function useWeddingBlogs(options = {}) {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeddingBlogs = async () => {
      if (!client) {
        // Use fallback data from existing realWeddings
        const { realWeddings } = await import('../data/realWeddings')
        
        // Transform existing data to match new structure
        const transformedBlogs = realWeddings
          .slice(0, options.limit || realWeddings.length)
          .map(wedding => ({
            slug: wedding.slug,
            title: `${wedding.coupleName}'s Wedding`,
            coupleName: wedding.coupleName,
            weddingDate: new Date().toISOString(),
            publishedDate: new Date().toISOString(),
            heroImage: { url: wedding.heroImage },
            coverImage: { url: wedding.coverImage },
            featuredImage: { url: wedding.coverImage },
            location: wedding.location,
            season: wedding.date,
            introText: wedding.intro,
            photos: wedding.galleries?.[0]?.photos?.slice(0, 20).map(p => ({ url: p.src })) || [],
            featured: false,
            photoCredits: wedding.photographer,
            vendors: {}
          }))
        
        if (options.slug) {
          const blog = transformedBlogs.find(b => b.slug === options.slug)
          setBlogs(blog ? [blog] : [])
        } else {
          setBlogs(options.featured 
            ? transformedBlogs.slice(0, 6)
            : transformedBlogs
          )
        }
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // Build query
        const query = {
          content_type: 'weddingBlog',
          include: 2, // Include linked assets
          order: '-fields.publishedDate'
        }

        if (options.limit) {
          query.limit = options.limit
        }

        if (options.featured) {
          query['fields.featured'] = true
        }

        if (options.slug) {
          query['fields.slug'] = options.slug
          query.limit = 1
        }

        const response = await client.getEntries(query)
        
        // Transform Contentful response
        const transformedBlogs = response.items.map(item => {
          const fields = item.fields
          return {
            id: item.sys.id,
            slug: fields.slug,
            title: fields.title,
            coupleName: fields.coupleName,
            weddingDate: fields.weddingDate,
            publishedDate: fields.publishedDate,
            heroImage: {
              url: fields.heroImage?.fields?.file?.url,
              title: fields.heroImage?.fields?.title
            },
            coverImage: {
              url: fields.coverImage?.fields?.file?.url,
              title: fields.coverImage?.fields?.title
            },
            featuredImage: {
              url: fields.featuredImage?.fields?.file?.url,
              title: fields.featuredImage?.fields?.title,
              caption: fields.featuredImageCaption
            },
            location: fields.location,
            season: fields.season,
            introText: fields.introText,
            storyContent: fields.storyContent,
            testimonial: fields.testimonial,
            photos: fields.photos?.map(photo => ({
              url: photo.fields?.file?.url,
              title: photo.fields?.title
            })) || [],
            featured: fields.featured || false,
            photoCredits: fields.photoCredits,
            guestCount: fields.guestCount,
            tags: fields.tags || [],
            vendors: fields.vendors || {},
            seoTitle: fields.seoTitle || fields.title,
            seoDescription: fields.seoDescription || fields.introText
          }
        })

        setBlogs(transformedBlogs)
      } catch (err) {
        console.error('Error fetching wedding blogs:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeddingBlogs()
  }, [options.limit, options.featured, options.slug])

  return { blogs, loading, error }
}

/**
 * Hook to fetch a single wedding blog by slug
 */
export function useWeddingBlog(slug) {
  const result = useWeddingBlogs({ slug })
  return {
    blog: result.blogs[0] || null,
    loading: result.loading,
    error: result.error
  }
}

/**
 * Hook to fetch featured weddings for homepage
 */
export function useFeaturedWeddings(limit = 6) {
  return useWeddingBlogs({ featured: true, limit })
}

export default useWeddingBlogs
```

---

## Data Structures

### `src/lib/localContent.js`

```javascript
// Local fallback content for immediate rendering (prevents white flash)
export const localHomePageContent = {
  hero: {
    scriptAccent: "Where Dreams Begin",
    titleLine1: "Rum River",
    titleLine2: "Wedding Barn",
    description: "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
    ctaText: "Schedule Your Visit",
    ctaLink: "/contact"
  },
  featureBlocks: {
    scriptAccent: "Your Perfect Venue",
    title: "Why Choose Rum River Barn",
    lead: "Discover what makes our venue the perfect setting for your unforgettable celebration",
    blocks: [
      {
        number: "01",
        title: "A Picturesque Location For Your Special Event",
        lead: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN",
        content: "When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at 612-801-0546!",
        imageAlt: "Special event venue",
        reverse: false
      },
      {
        number: "02",
        title: "Rum River Barn & Vineyard",
        lead: "Milaca, St. Cloud, Saint Paul, and Brainerd MN",
        content: "Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.",
        imageAlt: "Rum River Barn and Vineyard",
        reverse: true
      }
    ]
  },
  experience: {
    scriptAccent: "The Rum River Experience",
    title: "More Than a Venue",
    description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
    features: [
      {
        title: "All-Inclusive Planning",
        description: "Our experienced coordinators handle every detail, so you can focus on what matters most—each other."
      },
      {
        title: "Customizable Packages",
        description: "From intimate gatherings to grand celebrations, we tailor every element to your vision and budget."
      },
      {
        title: "Historic Charm",
        description: "Our lovingly restored 1920s barn combines century-old character with modern convenience."
      }
    ]
  },
  loveStories: {
    scriptAccent: "Real Love Stories",
    title: "Weddings at the Barn",
    lead: "Every celebration tells a unique story of love, laughter, and happily ever after."
  },
  testimonials: {
    scriptAccent: "Love Letters",
    title: "What Couples Say",
    items: [
      {
        quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
        authorName: "Sarah & Michael Johnson",
        authorDetail: "Married October 2024"
      },
      {
        quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
        authorName: "Emma & James Wilson",
        authorDetail: "Married June 2024"
      },
      {
        quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
        authorName: "Amanda & Chris Thompson",
        authorDetail: "Married February 2024"
      }
    ]
  }
}
```

### `src/data/seoDefaults.js`

```javascript
// Default SEO configuration for Rum River Wedding Barn
export const seoDefaults = {
  siteName: "Rum River Wedding Barn",
  baseUrl: "https://rumriverweddingbarn.com",
  defaultImage: "/images/venue/barn-exterior-full-view-landscape.jpg",
  businessInfo: {
    name: "Rum River Wedding Barn",
    address: "Hillman, Minnesota",
    phone: "", // Add phone number when available
    email: "", // Add email when available
    coordinates: {
      lat: 46.0441,
      lng: -93.8842
    }
  },
  social: {
    facebook: "", // Add Facebook URL when available
    instagram: "", // Add Instagram URL when available
  }
}

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "Rum River Wedding Barn | Historic Hillman MN Wedding Venue",
    description: "Elegant rustic wedding venue in Hillman, Minnesota. Historic barn with modern amenities, bridal suite, groom's quarters. Capacity up to 300 guests.",
    keywords: "wedding venue, rustic barn, Hillman Minnesota, wedding barn, historic venue, Minnesota weddings, barn wedding, rural wedding venue",
    image: "/images/venue/barn-exterior-full-view-landscape.jpg"
  },
  
  property: {
    title: "Wedding Venue Property | Rum River Barn Hillman MN",
    description: "Explore our historic wedding venue property featuring a restored barn, bridal suite, groom's quarters, and beautiful gardens in Hillman, Minnesota.",
    keywords: "wedding venue property, barn venue, bridal suite, groom quarters, wedding grounds, Hillman MN venue",
    image: "/images/venue/barn-interior-exposed-beams-chandeliers.jpg"
  },
  
  gallery: {
    title: "Wedding Photo Gallery | Rum River Barn Minnesota",
    description: "Browse stunning wedding photos from Rum River Barn. See real weddings in our historic venue featuring rustic elegance in Hillman, Minnesota.",
    keywords: "wedding photos, wedding gallery, barn wedding photos, Minnesota wedding venue photos, rustic wedding images",
    image: "/images/2014/04/Loria-Jason-wedding-2-0026.jpg"
  },
  
  contact: {
    title: "Contact Rum River Wedding Barn | Schedule Your Venue Tour",
    description: "Contact Rum River Wedding Barn to schedule your venue tour. Get pricing information and availability for your wedding in Hillman, Minnesota.",
    keywords: "wedding venue contact, schedule venue tour, wedding booking, Hillman MN wedding venue, venue availability",
    image: "/images/venue/barn-exterior-welcome-sign-entrance.jpg"
  },
  
  events: {
    title: "Wedding Events & Celebrations | Rum River Barn Minnesota",
    description: "Host weddings, engagement parties, birthday celebrations and special events at Rum River Barn. Historic venue in Hillman, Minnesota.",
    keywords: "wedding events, engagement parties, birthday parties, special events, Minnesota event venue, barn celebrations",
    image: "/images/venue/barn-interior-string-lights-ceiling-detail.jpg"
  },
  
  testimonials: {
    title: "Wedding Testimonials & Reviews | Rum River Barn",
    description: "Read testimonials and reviews from couples who celebrated their weddings at Rum River Barn in Hillman, Minnesota.",
    keywords: "wedding testimonials, venue reviews, Minnesota wedding venue reviews, barn wedding reviews, couple testimonials",
    image: "/images/venue/barn-exterior-deck-swing-under-tree.jpg"
  },
  
  location: {
    title: "Wedding Venue Location | Hillman Minnesota | Rum River Barn",
    description: "Rum River Wedding Barn is located in beautiful Hillman, Minnesota. Find directions, local accommodations, and area information.",
    keywords: "wedding venue location, Hillman Minnesota, venue directions, Minnesota barn venue, central Minnesota weddings",
    image: "/images/venue/property-field-wildflowers-natural.jpg"
  },
  
  history: {
    title: "Historic Wedding Venue | Rum River Barn History",
    description: "Learn about the rich history of Rum River Barn, from its origins as a working farm to today's premier wedding venue in Hillman, Minnesota.",
    keywords: "historic wedding venue, barn history, Minnesota farm history, historic barn venue, Hillman history",
    image: "/images/venue/barn-exterior-deck-stairs-trees.jpg"
  },
  
  realWeddings: {
    title: "Real Weddings | Rum River Barn Minnesota Wedding Stories",
    description: "Explore real weddings at Rum River Barn. See how couples celebrated their special day at our historic venue in Hillman, Minnesota.",
    keywords: "real weddings, wedding stories, barn wedding inspiration, Minnesota wedding photos, venue inspiration",
    image: "/images/2014/04/Loria-Jason-wedding-2-0026.jpg"
  }
}
```

---

## CSS Styles

### Key CSS Classes from `src/CohesiveDesign.css`

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap');

/* COHESIVE DESIGN SYSTEM - ROMANTIC RUSTIC ELEGANCE */

:root {
  /* Romantic Earth Palette */
  --romantic-ivory: #FBF8F4;
  --dusty-rose: #9D6B7B;  /* WCAG AA Compliant: 4.8:1 contrast with white text */
  --sage-whisper: #9CAA9E;
  --warm-walnut: #6B4E3D;
  --champagne-gold: #E4C896;
  --blush-pink: #F4E4E1;
  --deep-forest: #3A4A3C;
  --cream-pearl: #FFFCF8;
  --muted-mauve: #A08A85;
  --copper-glow: #C97D60;

  /* Additional colors from globals */
  --warm-cream: #FAF6F2;
  --accent-gold: #D4A574;
  --deep-brown: #4A3426;
  --text-dark: #2C2416;
  --sage-green: #7A8B7F;
  --soft-white: #FEFDFB;

  /* Typography - TWO FONT SYSTEM */
  --font-display: 'Playfair Display', serif;  /* PRIMARY: Headings & Brand */
  --font-body: 'Montserrat', sans-serif;      /* SECONDARY: Body Text */
  --font-script: 'Dancing Script', cursive;   /* ACCENT: Special elements */

  /* Typography Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.75rem;   /* 28px */
  --text-4xl: 2rem;      /* 32px */
  --text-5xl: 2.5rem;    /* 40px */
  --text-6xl: 3rem;      /* 48px */
  --text-hero: clamp(3rem, 8vw, 5.5rem);

  /* STANDARDIZED SPACING SCALE */
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 2.5rem;
  --space-3xl: 3rem;
  --space-4xl: 4rem;
  --space-5xl: 5rem;
  --space-6xl: 8rem;

  /* Transitions */
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --transition-elegant: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Global Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--warm-walnut);
  background: var(--romantic-ivory);
  overflow-x: hidden;
}

/* Hero Section Enhanced */
.hero-enhanced {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--warm-cream) 0%,
    var(--blush-pink) 50%,
    var(--cream-pearl) 100%
  );
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('/images/venue/barn-exterior-full-view-landscape.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-enhanced .romantic-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(251, 248, 244, 0.85) 0%,
    rgba(244, 228, 225, 0.75) 50%,
    rgba(255, 252, 248, 0.85) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 700;
  line-height: 1.1;
  color: var(--warm-walnut);
  margin: var(--space-lg) 0;
  text-shadow: 0 2px 4px rgba(107, 78, 61, 0.1);
}

.hero-accent {
  color: var(--dusty-rose);
  font-style: italic;
}

.script-accent {
  font-family: var(--font-script);
  font-size: var(--text-2xl);
  color: var(--dusty-rose);
  margin-bottom: var(--space-md);
  font-weight: 600;
}

.lead {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--warm-walnut);
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

/* Floating CTA */
.floating-cta {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--dusty-rose);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 8px 32px rgba(157, 107, 123, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  backdrop-filter: blur(10px);
}

.floating-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(157, 107, 123, 0.4);
  background: var(--copper-glow);
}

/* Alternating Blocks */
.alternating-blocks {
  padding: var(--space-6xl) 0;
  background: var(--romantic-ivory);
}

.feature-blocks-content {
  text-align: center;
  margin-bottom: var(--space-5xl);
}

.blocks-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-5xl);
}

.block-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.block-item.reverse {
  direction: rtl;
}

.block-item.reverse > * {
  direction: ltr;
}

.block-content {
  padding: var(--space-xl);
}

.block-content .number {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: 700;
  color: var(--dusty-rose);
  opacity: 0.7;
  margin-bottom: var(--space-md);
}

.block-content h3 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  color: var(--warm-walnut);
  margin-bottom: var(--space-lg);
  line-height: 1.3;
}

.block-image {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 16px 64px rgba(107, 78, 61, 0.15);
}

.block-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: var(--transition-elegant);
}

.block-image:hover img {
  transform: scale(1.05);
}

/* Wedding Gallery */
.wedding-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
  margin: var(--space-4xl) 0;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 32px rgba(107, 78, 61, 0.12);
  transition: var(--transition);
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(107, 78, 61, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-elegant);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(107, 78, 61, 0.9));
  color: white;
  padding: var(--space-xl);
  transform: translateY(100%);
  transition: var(--transition);
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-couple-names {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.gallery-season {
  font-size: var(--text-sm);
  opacity: 0.9;
  margin-bottom: var(--space-xs);
}

.gallery-details {
  font-size: var(--text-xs);
  opacity: 0.8;
}

/* Experience Section */
.experience-section {
  padding: var(--space-6xl) 0;
  background: var(--blush-pink);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5xl);
  align-items: center;
}

.experience-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
}

.feature-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--dusty-rose);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.feature-content h4 {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--warm-walnut);
  margin-bottom: var(--space-sm);
}

/* Testimonials */
.testimonials-section {
  padding: var(--space-6xl) 0;
  background: var(--cream-pearl);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-4xl);
}

.testimonial-card {
  background: white;
  padding: var(--space-xl);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(107, 78, 61, 0.08);
  position: relative;
  transition: var(--transition);
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(107, 78, 61, 0.12);
}

.five-star-rating {
  color: var(--champagne-gold);
  font-size: var(--text-lg);
  margin-bottom: var(--space-lg);
}

.testimonial-quote {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--warm-walnut);
  margin-bottom: var(--space-lg);
  font-style: italic;
}

.testimonial-author {
  border-top: 1px solid var(--blush-pink);
  padding-top: var(--space-lg);
}

.author-name {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--warm-walnut);
  margin-bottom: var(--space-xs);
}

.author-detail {
  font-size: var(--text-sm);
  color: var(--sage-green);
}

/* Button System */
.romantic-button {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg) var(--space-2xl);
  border-radius: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: var(--transition);
  min-height: 48px;
  position: relative;
  overflow: hidden;
}

.romantic-button.primary {
  background: var(--dusty-rose);
  color: white;
  border-color: var(--dusty-rose);
}

.romantic-button.primary:hover {
  background: var(--copper-glow);
  border-color: var(--copper-glow);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(157, 107, 123, 0.3);
}

.romantic-button.outline {
  background: transparent;
  color: var(--dusty-rose);
  border-color: var(--dusty-rose);
}

.romantic-button.outline:hover {
  background: var(--dusty-rose);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(157, 107, 123, 0.2);
}

/* Form Styles */
.cta-contact-section {
  padding: var(--space-6xl) 0;
  background: var(--warm-walnut);
  color: white;
}

.cta-contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

.cta-contact-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.cta-contact-header h2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  margin: var(--space-lg) 0;
}

.cta-contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.cta-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.cta-form-group {
  display: flex;
  flex-direction: column;
}

.cta-form-group.cta-full-width {
  grid-column: 1 / -1;
}

.cta-form-group label {
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--champagne-gold);
}

.cta-form-group input,
.cta-form-group select,
.cta-form-group textarea {
  padding: var(--space-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: var(--font-body);
  font-size: var(--text-base);
  transition: var(--transition);
}

.cta-form-group input:focus,
.cta-form-group select:focus,
.cta-form-group textarea:focus {
  outline: none;
  border-color: var(--champagne-gold);
  background: rgba(255, 255, 255, 0.15);
}

.cta-form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.cta-form-group input::placeholder,
.cta-form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

/* Icon System */
.icon {
  display: inline-block;
  vertical-align: middle;
}

.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 40px; height: 40px; }

.icon-current { color: currentColor; }
.icon-primary { color: var(--dusty-rose); }
.icon-secondary { color: var(--sage-green); }
.icon-accent { color: var(--champagne-gold); }
.icon-gold { color: var(--accent-gold); }
.icon-success { color: #10B981; }
.icon-error { color: #EF4444; }
.icon-warning { color: #F59E0B; }
.icon-white { color: white; }
.icon-muted { color: var(--muted-mauve); }

/* Section Backgrounds */
.section {
  padding: var(--space-6xl) 0;
}

.section-cream {
  background: var(--cream-pearl);
}

.section-blush {
  background: var(--blush-pink);
}

.section-ivory {
  background: var(--romantic-ivory);
}

/* Content Wrapper */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

/* Section Titles */
.section-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  color: var(--warm-walnut);
  text-align: center;
  margin-bottom: var(--space-lg);
  line-height: 1.2;
}

/* Center Text */
.center {
  text-align: center;
}

/* Header */
.header-enhanced {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(107, 78, 61, 0.1);
  transition: var(--transition);
}

.header-enhanced.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(107, 78, 61, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg) 0;
}

.logo-text {
  font-family: var(--font-display);
  font-weight: 700;
  text-decoration: none;
  color: var(--warm-walnut);
}

.logo-line-1 {
  font-size: var(--text-xl);
  line-height: 1;
}

.logo-line-2 {
  font-size: var(--text-lg);
  color: var(--dusty-rose);
  line-height: 1;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--space-xl);
}

.nav-menu a {
  text-decoration: none;
  color: var(--warm-walnut);
  font-weight: 500;
  transition: var(--transition);
}

.nav-menu a:hover {
  color: var(--dusty-rose);
}

/* Venue Tabs */
.venue-tabs {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin: var(--space-4xl) 0;
}

.venue-tab {
  background: transparent;
  border: 2px solid var(--dusty-rose);
  color: var(--dusty-rose);
  padding: var(--space-lg) var(--space-xl);
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.venue-tab:hover,
.venue-tab.active {
  background: var(--dusty-rose);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-grid,
  .block-item {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .block-item.reverse {
    direction: ltr;
  }
  
  .cta-form-row {
    grid-template-columns: 1fr;
  }
  
  .nav-menu {
    display: none; /* Mobile menu implementation needed */
  }
  
  .hero-headline {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }
  
  .floating-cta {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: 0.8rem;
  }
}

/* Animation Classes */
.image-reveal {
  overflow: hidden;
}

.fadeInUp {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.flyInFromRight {
  animation: flyInFromRight 0.8s ease-out;
}

@keyframes flyInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
```

---

## Example Content Page: EventsPage

### `src/pages/EventsPage.jsx`

```jsx
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
        heroContent={heroContent}
        heroImage="/images/venue/barn-interior-exposed-beams-chandeliers.jpg"
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
              <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg" alt="Wedding Events at Rum River Barn" width="800" height="500" />
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
      <ScheduleTourForm
        formName="events-schedule-tour"
        title="Let's Start Planning Together"
        subtitle="Ready to Plan Your Event?"
        description="Contact us today to schedule a tour of our beautiful venue and discuss how we can make your special event unforgettable."
        submitText="Schedule Your Tour"
        loadingText="SCHEDULING..."
      />

      </PageTemplate>
    </>
  )
}
```

### `src/components/PageTemplate.jsx`

```jsx
import Header from './Header'
import Footer from './Footer'

export default function PageTemplate({
  children,
  title = "Rum River Barn",
  heroContent = null,
  heroImage = "/images/venue/barn-exterior-full-view-landscape.jpg",
  className = ""
}) {
  return (
    <>
      <Header />

      {/* Hero Section - Optional */}
      {heroContent && (
        <section
          className="page-hero dark-section"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${heroImage}") center/cover no-repeat`,
            backgroundAttachment: 'fixed',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="content-wrapper">
            <div className="page-hero-content">
              {heroContent}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className={className}>
        {children}
      </main>

      <Footer />
    </>
  )
}
```

### EventsPage Data Structure

The EventsPage demonstrates a typical content page pattern with:

**Static Content Structure:**
```javascript
const eventsPageContent = {
  hero: {
    title: "Events & Celebrations",
    description: "From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion",
    backgroundImage: "/images/venue/barn-interior-exposed-beams-chandeliers.jpg"
  },
  eventTypes: [
    {
      title: "Wedding Events",
      description: "Celebrate your love story in our tranquil, charming barn setting...",
      features: [
        "Indoor and outdoor ceremony spaces with flexible configurations",
        "Year-round venue availability with climate-controlled comfort",
        "Picturesque grounds perfect for wedding photography",
        "Capacity for up to 600 guests with authentic barn charm"
      ],
      ctaText: "Plan Your Wedding",
      ctaLink: "/contact",
      image: "/images/venue/barn-interior-ceiling-beams-lighting.jpg",
      imageAlt: "Wedding Events at Rum River Barn",
      reverse: false,
      sectionStyle: "dark-gradient-section"
    },
    {
      title: "Engagement Parties", 
      description: "Host your engagement celebration in our White Barn Loft...",
      features: [
        "Bring both families together in a relaxed, beautiful setting",
        "Rustic venue setting with stunning vineyard views",
        "Flexible capacity arrangements for intimate gatherings",
        "Pre-wedding celebration planning with experienced staff"
      ],
      ctaText: "Plan Your Engagement",
      ctaLink: "/contact", 
      image: "/images/venue/details-swing-rustic-romance.jpg",
      imageAlt: "Engagement Parties at Rum River Barn",
      reverse: true,
      sectionStyle: "section-warm"
    },
    // ... more event types
  ],
  contactForm: {
    formName: "events-schedule-tour",
    title: "Let's Start Planning Together", 
    subtitle: "Ready to Plan Your Event?",
    description: "Contact us today to schedule a tour of our beautiful venue...",
    submitText: "Schedule Your Tour",
    loadingText: "SCHEDULING..."
  }
}
```

**Key Patterns:**
- Uses `PageTemplate` wrapper with hero section
- Alternating light/dark sections with `reverse` layout
- Consistent `block-item` structure for each event type
- Feature lists with bullet points
- Individual CTAs for each event type
- Shared contact form at bottom
- Static content structure perfect for CMS migration

---

This comprehensive document contains all the React code, components, hooks, data structures, and CSS needed to build the Rum River Wedding Barn homepage and content pages. The code is production-ready and includes proper error handling, loading states, accessibility features, and responsive design.