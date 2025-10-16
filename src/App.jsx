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
import ComponentLibrary from './ComponentLibrary'
import CohesiveDesign from './CohesiveDesign'
import DemoNavbar from './components/DemoNavbar'
import AdminPanel from './pages/AdminPanel'
import AdminWeddings from './pages/AdminWeddings'
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
        
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/weddings" element={<AdminWeddings />} />
        
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
        <Route path="/schedule-visit-form-demo" element={<><DemoNavbar /><ScheduleVisitFormStandalone /></>} />
        <Route path="/blog" element={<div>Blog Archive</div>} />
        <Route path="/blog/:slug" element={<div>Blog Post</div>} />
      </Routes>
    </Router>
  )
}
