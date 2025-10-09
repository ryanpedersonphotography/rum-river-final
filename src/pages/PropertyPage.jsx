import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import VenueDiscovery from '../components/VenueDiscovery'
import VenueTabs from '../components/VenueTabs'
import ScheduleTourForm from '../components/ScheduleTourForm'

export default function PropertyPage() {
  // VR Tour data for property-specific venues
  const [activeVenue, setActiveVenue] = useState('whiteBarn')

  const heroContent = (
    <>
      <h1 className="page-hero-title">
        The Property
      </h1>
      <p className="page-hero-lead">
        Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.
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
        sectionClassName="section-warm"
        subtitle="Your Perfect Setting"
        title="Discover Our Spaces"
        description="Every corner tells a story, every space creates memories"
      />

      {/* Schedule Property Tour Form */}
      <ScheduleTourForm
        formName="schedule-tour"
        title="Schedule Your Property Tour"
        subtitle="Ready to Visit?"
        description="Experience the beauty of Rum River Barn in person. Fill out the form below to schedule a private tour of our property."
        className=""
      />

    </PageTemplate>
  )
}