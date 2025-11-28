import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import VenueDiscovery from '../components/VenueDiscovery'
import VenueTabs from '../components/VenueTabs'
import ScheduleTourForm from '../components/ScheduleTourForm'
import VRTourButton from '../components/VRTourButton'
import Icon from '../components/Icon'
import { usePageContent } from '../hooks/usePageContent'

export default function PropertyPage() {
  // VR Tour data for property-specific venues
  const [activeVenue, setActiveVenue] = useState('whiteBarn')
  
  // Load page content from CMS
  const { content: pageContent, loading, error } = usePageContent('property')

  // Show loading state
  if (loading) {
    return (
      <PageTemplate 
        heroContent={
          <>
            <h1 className="page-hero-title">Loading...</h1>
            <p className="page-hero-lead">Please wait while we load the page content.</p>
          </>
        }
        heroImage="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
      >
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--sage-green)' }}>Loading page content...</p>
        </div>
      </PageTemplate>
    )
  }

  // Show error state
  if (error) {
    return (
      <PageTemplate 
        heroContent={
          <>
            <h1 className="page-hero-title">Error Loading Page</h1>
            <p className="page-hero-lead">We're having trouble loading this page. Please try again later.</p>
          </>
        }
        heroImage="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
      >
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--warm-walnut)' }}>Error: {error}</p>
        </div>
      </PageTemplate>
    )
  }

  const heroContent = (
    <>
      <h1 className="page-hero-title">
        {pageContent?.hero?.title || 'The Property'}
      </h1>
      <p className="page-hero-lead">
        {pageContent?.hero?.description || 'Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.'}
      </p>
    </>
  )

  return (
    <PageTemplate 
      heroContent={heroContent}
      heroImage="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
    >
      
      {/* Venue Discovery Section - Using Reusable Component */}
      <VenueDiscovery 
        sectionClassName={pageContent?.venueDiscovery?.sectionClassName || 'section-warm'}
        subtitle={pageContent?.venueDiscovery?.scriptAccent || 'Your Perfect Setting'}
        title={pageContent?.venueDiscovery?.title || 'Discover Our Spaces'}
        description={pageContent?.venueDiscovery?.description || 'Every corner tells a story, every space creates memories'}
      />

      {/* Detailed Features Section */}
      <section className="alternating-blocks">
        <div className="content-wrapper">
          <div className="blocks-container">
            
            {/* Block 1: The Historic Loft */}
            <div className="block-item">
              <div className="block-content">
                <h3>The Historic Loft</h3>
                <p className="lead">Main Event Space</p>
                <p>The white barn is the main event barn consisting of the large loft area and the lower level lounge. The original hay loft is spacious and open with tall ceilings and hardwood floors. The loft can accommodate guests for a ceremony, reception dinner, and/or a dance.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/barn-interior-exposed-beams-chandeliers.jpg" alt="Historic Barn Loft with Beams" width="800" height="500" />
              </div>
            </div>

            {/* Block 2: The Lounge & Bar */}
            <div className="block-item reverse">
              <div className="block-content">
                <h3>The Lounge & Bar</h3>
                <p className="lead">Cocktails & Intimate Gatherings</p>
                <p>Located on the main level of the white barn, the Lounge is a perfect place for an intimate dinner or cocktail hour. Complete with high top tables, low lighting, and a full size bar, guests can have a drink or appetizers before moving to dinner or dancing upstairs.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/lounge-interior.jpg" alt="Rustic Lounge and Bar" width="800" height="500" />
              </div>
            </div>

            {/* Block 3: The Frame Barn */}
            <div className="block-item">
              <div className="block-content">
                <h3>The Frame Barn</h3>
                <p className="lead">Outdoor Ceremony Pavilion</p>
                <p>This open timber frame barn is a rustic shelter just begging for white sheers hanging in the breeze with string lights overhead at an outdoor ceremony. Either as first choice or a rain back-up location, there is plenty of space for a wedding ceremony.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/frame-barn-side-view.jpg" alt="Frame Barn Ceremony Space" width="800" height="500" />
              </div>
            </div>

            {/* Block 4: The Grounds & Vineyard */}
            <div className="block-item reverse">
              <div className="block-content">
                <h3>The Grounds & Vineyard</h3>
                <p className="lead">Natural Beauty Everywhere</p>
                <p>With plenty of open space and grassy fields, the grounds offer many places for outdoor celebrations. The Vineyards boast 14 of the 22 Minnesota hardy grapes produced by the University of Minnesota for making wine. These grapevines make a beautiful natural backdrop for an outdoor ceremony or cocktails on the lawn.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/aerials/aerial-vineyard-view.jpg" alt="Vineyard Aerial View" width="800" height="500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Virtual Preview Section */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div className="venue-discovery-content center">
            <div className="script-accent">Take a Peek Inside</div>
            <h2 className="section-title">Virtual 3D Tours</h2>
            <p className="lead">Explore our beautiful spaces before your visit with immersive virtual tours</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {/* Wedding Barn VR Tour */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--warm-walnut) 0%, #8B4513 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                <Icon name="building" size="sm" color="muted" />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Wedding Barn
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--sage-green)',
                marginBottom: '2rem'
              }}>
                Step inside our historic barn and experience the soaring ceilings, original timber beams, and elegant lighting that creates the perfect atmosphere for your celebration.
              </p>
              <VRTourButton
                tourUrl="https://my.matterport.com/show/?m=P25ecLeSZdF"
                variant="primary"
                icon="🥽"
              >
                Explore Wedding Barn
              </VRTourButton>
            </div>

            {/* Bridal Suite VR Tour */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--blush-pink) 0%, #E6B8C2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                👰
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Bridal Suite
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--sage-green)',
                marginBottom: '2rem'
              }}>
                Tour the charming bridal suite where you and your wedding party can relax and prepare. This private sanctuary offers the perfect setting for getting ready photos.
              </p>
              <VRTourButton
                tourUrl="https://my.matterport.com/show/?m=sFjR96cKfqv"
                variant="primary"
                icon="🥽"
              >
                Explore Bridal Suite
              </VRTourButton>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(212, 165, 116, 0.1) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(212, 165, 116, 0.2)'
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--sage-green)',
              margin: '0 0 1.5rem 0',
              fontStyle: 'italic'
            }}>
              "Experience the magic before you visit. These virtual tours give you a true sense of our beautiful spaces."
            </p>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              color: 'var(--warm-walnut)',
              fontWeight: 500
            }}>
              Ready to see it in person? Schedule your tour below ↓
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Property Tour Form */}
      <ScheduleTourForm
        formName="schedule-tour"
        title={pageContent?.scheduleTour?.title || 'Schedule Your Property Tour'}
        subtitle={pageContent?.scheduleTour?.scriptAccent || 'Ready to Visit?'}
        description={pageContent?.scheduleTour?.description || 'Experience the beauty of Rum River Barn in person. Fill out the form below to schedule a private tour of our property.'}
        className=""
      />

    </PageTemplate>
  )
}
