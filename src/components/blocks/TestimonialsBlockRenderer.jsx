import { useState, useEffect } from 'react'
import { fetchTestimonials, getImageUrl } from '../../lib/sanityClient'

/**
 * TestimonialsBlockRenderer Component
 * Renders testimonials section from Sanity CMS data
 */
export default function TestimonialsBlockRenderer({ data, blockIndex }) {
  const {
    scriptAccent = 'Love Letters',
    title = 'What Couples Say',
    sectionStyle = 'section-cream',
    testimonials: featuredTestimonials,
    maxTestimonials = 3,
    showStarRating = true,
    starCount = 5,
    layout = 'grid'
  } = data

  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        let testimonialData = []
        
        // Use specified testimonials or fetch automatically
        if (featuredTestimonials && featuredTestimonials.length > 0) {
          testimonialData = featuredTestimonials.slice(0, maxTestimonials)
        } else {
          testimonialData = await fetchTestimonials(maxTestimonials)
        }

        setTestimonials(testimonialData)
        setLoading(false)
      } catch (error) {
        console.error('Error loading testimonials:', error)
        setLoading(false)
      }
    }

    loadTestimonials()
  }, [featuredTestimonials, maxTestimonials])

  if (loading) {
    return (
      <section className={`testimonials-section section ${sectionStyle}`}>
        <div className="content-wrapper">
          <div className="testimonials-content center">
            <div className="script-accent">{scriptAccent}</div>
            <h2 className="section-title">{title}</h2>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading testimonials...
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className={`testimonials-section section ${sectionStyle}`}>
      <div className="content-wrapper">
        {/* Header Content */}
        <div className="testimonials-content center">
          <div className="script-accent">{scriptAccent}</div>
          <h2 className="section-title">{title}</h2>
        </div>

        {/* Testimonials Grid/Carousel */}
        <div className={`testimonials-${layout}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              showStarRating={showStarRating}
              starCount={starCount}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Testimonial Card Component
 */
function TestimonialCard({ testimonial, showStarRating, starCount }) {
  const {
    quote,
    authorName,
    authorDetail,
    authorImage,
    rating = 5
  } = testimonial

  // Get optimized author image URL
  const authorImageUrl = authorImage 
    ? getImageUrl(authorImage, { width: 100, height: 100 }) 
    : null

  // Generate star rating
  const renderStars = () => {
    if (!showStarRating) return null
    
    const starsToShow = Math.min(rating || starCount, starCount)
    return (
      <div className="five-star-rating">
        {'★'.repeat(starsToShow)}
      </div>
    )
  }

  return (
    <div className="testimonial-card">
      {renderStars()}
      
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      
      <div className="testimonial-author">
        {authorImageUrl && (
          <div className="author-image">
            <img 
              src={authorImageUrl}
              alt={authorName}
              width="50"
              height="50"
            />
          </div>
        )}
        <div className="author-info">
          <div className="author-name">{authorName}</div>
          {authorDetail && (
            <div className="author-detail">{authorDetail}</div>
          )}
        </div>
      </div>
    </div>
  )
}