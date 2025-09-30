import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
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
        <Route path="/rental-info" element={<div>Rental Info Page</div>} />
        <Route path="/property" element={<div>Property Page</div>} />
        <Route path="/history" element={<div>History Page</div>} />
        <Route path="/testimonials" element={<div>Testimonials Page</div>} />
        <Route path="/location" element={<div>Location Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/blog" element={<div>Blog Archive</div>} />
        <Route path="/blog/:slug" element={<div>Blog Post</div>} />
      </Routes>
    </Router>
  )
}
