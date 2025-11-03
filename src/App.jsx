import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VendorsPageWithToggle from './pages/VendorsPageWithToggle'
import PropertyPage from './pages/PropertyPage'
import ComponentPage from './pages/ComponentPage'
import LocationPage from './pages/LocationPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import TestimonialsPage from './pages/TestimonialsPage'
import RealWeddingsPage from './pages/RealWeddingsPage'
import RealWeddingPost from './pages/RealWeddingPost'
import HistoryPage from './pages/HistoryPage'
import EventsPage from './pages/EventsPage'
import ThankYouPage from './pages/ThankYouPage'
import HeroStandalone from './pages/HeroStandalone'
import VenueStandalone from './pages/VenueStandalone'
import MenuStandalone from './pages/MenuStandalone'
import FooterStandalone from './pages/FooterStandalone'
import SpacesStandalone from './pages/SpacesStandalone'
import LoveStoriesStandalone from './pages/LoveStoriesStandalone'
import ScheduleTourStandalone from './pages/ScheduleTourStandalone'
import FeatureBlocksStandalone from './pages/FeatureBlocksStandalone'
import FAQAccordionStandalone from './pages/FAQAccordionStandalone'
import SocialProofStandalone from './pages/SocialProofStandalone'
import LoveLettersStandalone from './pages/LoveLettersStandalone'
import FindYourWayStandalone from './pages/FindYourWayStandalone'
import ScheduleVisitFormStandalone from './pages/ScheduleVisitFormStandalone'
import ButtonStandalone from './pages/ButtonStandalone'
import ButtonSandbox from './pages/ButtonSandbox'
import ScheduleTourDemo from './pages/ScheduleTourDemo'
import HeroDemoStandalone from './pages/HeroDemoStandalone'
import ButtonDemoStandalone from './pages/ButtonDemoStandalone'
import MainNavbarDemoStandalone from './pages/MainNavbarDemoStandalone'
import FloatingCTADemoStandalone from './pages/FloatingCTADemoStandalone'
import ScheduleTourButtonDemoStandalone from './pages/ScheduleTourButtonDemoStandalone'
import RumRiverExperienceDemoStandalone from './pages/RumRiverExperienceDemoStandalone'
import MenuDemoStandalone from './pages/MenuDemoStandalone'
import VenueDemoStandalone from './pages/VenueDemoStandalone'
import SpacesDemoStandalone from './pages/SpacesDemoStandalone'
import SpacesProfessionalStandalone from './pages/SpacesProfessionalStandalone'
import SpacesGalleryShowcase from './pages/SpacesGalleryShowcase'
import LoveStoriesDemoStandalone from './pages/LoveStoriesDemoStandalone'
import SocialProofDemoStandalone from './pages/SocialProofDemoStandalone'
import SocialProof001DemoStandalone from './pages/SocialProof001DemoStandalone'
import FooterDemoStandalone from './pages/FooterDemoStandalone'
import ScheduleTourDemoStandalone from './pages/ScheduleTourDemoStandalone'
import FAQAccordionDemoStandalone from './pages/FAQAccordionDemoStandalone'
import FindYourWayDemoStandalone from './pages/FindYourWayDemoStandalone'
import FindYourWayV2Demo from './pages/FindYourWayV2Demo'
import FindYourWayV2DemoStandalone from './pages/FindYourWayV2DemoStandalone'
import MapDirectionsStandalone from './pages/MapDirectionsStandalone'
import HistoryTimelineStandalone from './pages/HistoryTimelineStandalone'
import FAQStandaloneSingle from './pages/FAQStandaloneSingle'
import ComponentLibrary from './ComponentLibrary'
import CohesiveDesign from './CohesiveDesign'
import DemoNavbar from './components/DemoNavbar'
import AdminPanel from './pages/AdminPanel'
import AdminWeddings from './pages/AdminWeddings'
import SanityWeddingsTest from './pages/SanityWeddingsTest'
import './components/DemoNavbar.css'

export default function App() {
  // Check if we're in component library mode
  const isComponentLibrary = window.location.hash === '#components'
  const isCohesive = window.location.hash === '#cohesive'

  if (isComponentLibrary) {
    return <ComponentLibrary />
  }

  if (isCohesive) {
    return <CohesiveDesign />
  }

  return (
    <Router>
      <Routes>
        {/* Main site routes without DemoNavbar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/vendor-list" element={<VendorsPageWithToggle />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/component" element={<ComponentPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/real-weddings" element={<RealWeddingsPage />} />
        <Route path="/real-weddings/:slug" element={<RealWeddingPost />} />
        <Route path="/history" element={<HistoryPage />} />
        
        {/* Standalone demo routes (no navigation) */}
        <Route path="/hero-demo-standalone" element={<HeroDemoStandalone />} />
        <Route path="/button-demo-standalone" element={<ButtonDemoStandalone />} />
        <Route path="/main-navbar-demo-standalone" element={<MainNavbarDemoStandalone />} />
        <Route path="/floating-cta-demo-standalone" element={<FloatingCTADemoStandalone />} />
        <Route path="/schedule-tour-button-demo-standalone" element={<ScheduleTourButtonDemoStandalone />} />
        <Route path="/rum-river-experience-demo-standalone" element={<RumRiverExperienceDemoStandalone />} />
        <Route path="/menu-demo-standalone" element={<MenuDemoStandalone />} />
        <Route path="/venue-demo-standalone" element={<VenueDemoStandalone />} />
        <Route path="/spaces-demo-standalone" element={<SpacesDemoStandalone />} />
        <Route path="/spaces-professional-standalone" element={<SpacesProfessionalStandalone />} />
        <Route path="/spaces-gallery-showcase" element={<SpacesGalleryShowcase />} />
        <Route path="/love-stories-demo-standalone" element={<LoveStoriesDemoStandalone />} />
        <Route path="/social-proof-demo-standalone" element={<SocialProofDemoStandalone />} />
        <Route path="/social-proof-001-demo-standalone" element={<SocialProof001DemoStandalone />} />
        <Route path="/footer-demo-standalone" element={<FooterDemoStandalone />} />
        <Route path="/schedule-tour-demo-standalone" element={<ScheduleTourDemoStandalone />} />
        <Route path="/faq-accordion-demo-standalone" element={<FAQAccordionDemoStandalone />} />
        <Route path="/find-your-way-demo-standalone" element={<FindYourWayDemoStandalone />} />
        <Route path="/find-your-way-v2-demo-standalone" element={<FindYourWayV2DemoStandalone />} />
        <Route path="/map-directions-standalone" element={<MapDirectionsStandalone />} />
        <Route path="/history-timeline-standalone" element={<HistoryTimelineStandalone />} />
        <Route path="/faq-standalone-single" element={<FAQStandaloneSingle />} />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/weddings" element={<AdminWeddings />} />

        {/* Sanity Test Page */}
        <Route path="/sanity-weddings-test" element={<SanityWeddingsTest />} />

        {/* Demo routes with DemoNavbar */}
        <Route path="/hero-demo" element={<><DemoNavbar /><HeroStandalone /></>} />
        <Route path="/venue-demo" element={<><DemoNavbar /><VenueStandalone /></>} />
        <Route path="/menu-demo" element={<><DemoNavbar /><MenuStandalone /></>} />
        <Route path="/footer-demo" element={<><DemoNavbar /><FooterStandalone /></>} />
        <Route path="/spaces-demo" element={<><DemoNavbar /><SpacesStandalone /></>} />
        <Route path="/love-stories-demo" element={<><DemoNavbar /><LoveStoriesStandalone /></>} />
        <Route path="/schedule-tour-demo" element={<><DemoNavbar /><ScheduleTourStandalone /></>} />
        <Route path="/feature-blocks-demo" element={<><DemoNavbar /><FeatureBlocksStandalone /></>} />
        <Route path="/faq-accordion-demo" element={<><DemoNavbar /><FAQAccordionStandalone /></>} />
        <Route path="/social-proof-demo" element={<><DemoNavbar /><SocialProofStandalone /></>} />
        <Route path="/love-letters-demo" element={<><DemoNavbar /><LoveLettersStandalone /></>} />
        <Route path="/find-your-way-demo" element={<><DemoNavbar /><FindYourWayStandalone /></>} />
        <Route path="/find-your-way-v2-demo" element={<><DemoNavbar /><FindYourWayV2Demo /></>} />
        <Route path="/schedule-visit-form-demo" element={<><DemoNavbar /><ScheduleVisitFormStandalone /></>} />
        <Route path="/button-demo" element={<><DemoNavbar /><ButtonStandalone /></>} />
        <Route path="/button-sandbox" element={<><DemoNavbar /><ButtonSandbox /></>} />
        <Route path="/schedule-tour-demo" element={<><DemoNavbar /><ScheduleTourDemo /></>} />
        <Route path="/history-timeline-demo" element={<><DemoNavbar /><HistoryTimelineStandalone /></>} />
        <Route path="/blog" element={<div>Blog Archive</div>} />
        <Route path="/blog/:slug" element={<div>Blog Post</div>} />
      </Routes>
    </Router>
  )
}
