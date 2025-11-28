import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import VenueDiscovery from '../components/VenueDiscovery'
import VenueTabs from '../components/VenueTabs'
import ScheduleTourForm from '../components/ScheduleTourForm'
import VRTourButton from '../components/VRTourButton'
import Icon from '../components/Icon'
import { usePageContent } from '../hooks/usePageContent'

export default function PropertyPage() {
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