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


export default function HomePage() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)
  
  // Load page content from Contentful CMS (falls back to local if not configured)
  const { content: pageContent, loading: contentLoading, error: contentError } = useContentfulHomePage()
  const { testimonials, loading: testimonialsLoading, error: testimonialsError } = useTestimonials()


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
