import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import VenueDiscovery from '../components/VenueDiscovery'
import VenueTabs from '../components/VenueTabs'
import ScheduleTourForm from '../components/ScheduleTourForm'
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