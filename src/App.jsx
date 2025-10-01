import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VendorsPage from './pages/VendorsPage'
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
import ComponentLibrary from './ComponentLibrary'
import CohesiveDesign from './CohesiveDesign'

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
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/vendor-list" element={<VendorsPage />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/component" element={<ComponentPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/real-weddings" element={<RealWeddingsPage />} />
        <Route path="/real-weddings/:slug" element={<RealWeddingPost />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/blog" element={<div>Blog Archive</div>} />
        <Route path="/blog/:slug" element={<div>Blog Post</div>} />
      </Routes>
    </Router>
  )
}
