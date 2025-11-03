import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CTAButton from '../CTAButton'
import { fetchFeaturedWeddings, fetchLatestWeddings, getImageUrl } from '../../lib/sanityClient'

/**
 * GalleryBlockRenderer Component
 * Renders gallery section from Sanity CMS data
 */
export default function GalleryBlockRenderer({ data, blockIndex }) {
  const {
    scriptAccent = 'Real Love Stories',
    title = 'Weddings at the Barn',
    lead = 'Every celebration tells a unique story of love, laughter, and happily ever after.',
    sectionStyle = 'section-cream',
    galleryType = 'weddings',
    featuredWeddings,
    maxWeddings = 6,
    customImages = [],
    ctaText = 'View All Real Weddings',
    ctaLink = '/real-weddings',
    showCta = true
  } = data

  const [galleryItems, setGalleryItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadGalleryItems = async () => {
      try {
        if (galleryType === 'weddings') {
          let weddingData = []
          
          // Use specified weddings or fetch automatically
          if (featuredWeddings && featuredWeddings.length > 0) {
            weddingData = featuredWeddings.slice(0, maxWeddings)
          } else {
            // Try featured first, then latest
            const featured = await fetchFeaturedWeddings(maxWeddings)
            if (featured.length >= maxWeddings) {
              weddingData = featured
            } else {
              const latest = await fetchLatestWeddings(maxWeddings)
              weddingData = [...featured, ...latest].slice(0, maxWeddings)
            }
          }

          // Transform wedding data for gallery
          const transformedItems = weddingData.map(wedding => ({
            type: 'wedding',
            slug: wedding.slug?.current || wedding.slug,
            title: wedding.coupleName || wedding.title,
            subtitle: wedding.season || 'Wedding',
            image: wedding.coverImage ? getImageUrl(wedding.coverImage, { width: 800, height: 800 }) : null,
            link: `/real-weddings/${wedding.slug?.current || wedding.slug}`,
            details: wedding.location?.split('•')[0]?.trim() || 'Rum River Barn',
            photoCount: wedding.gallery?.length || 20
          }))

          setGalleryItems(transformedItems)
        } else if (galleryType === 'images' && customImages.length > 0) {
          // Use custom images
          const transformedItems = customImages.map((image, index) => ({
            type: 'image',
            title: image.title || `Image ${index + 1}`,
            subtitle: image.caption || '',
            image: getImageUrl(image, { width: 800, height: 800 }),
            link: image.link || null
          }))

          setGalleryItems(transformedItems)
        }

        setLoading(false)
      } catch (error) {
        console.error('Error loading gallery items:', error)
        setLoading(false)
      }
    }

    loadGalleryItems()
  }, [galleryType, featuredWeddings, maxWeddings, customImages])

  if (loading) {
    return (
      <section className={`love-stories-section section ${sectionStyle}`}>
        <div className="content-wrapper">
          <div className="love-stories-content center">
            <div className="script-accent">{scriptAccent}</div>
            <h2 className="section-title">{title}</h2>
            <p className="lead">{lead}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading gallery...
          </div>
        </div>
      </section>
    )
  }

  if (galleryItems.length === 0) {
    return null
  }

  return (
    <section className={`love-stories-section section ${sectionStyle}`}>
      <div className="content-wrapper">
        {/* Header Content */}
        <div className="love-stories-content center">
          <div className="script-accent">{scriptAccent}</div>
          <h2 className="section-title">{title}</h2>
          <p className="lead">{lead}</p>
        </div>

        {/* Gallery Grid */}
        <div className="wedding-gallery">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} item={item} />
          ))}
        </div>

        {/* CTA Footer */}
        {showCta && ctaText && ctaLink && (
          <div className="gallery-footer">
            <CTAButton to={ctaLink} variant="primary">
              {ctaText}
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * Individual Gallery Item Component
 */
function GalleryItem({ item }) {
  const { type, slug, title, subtitle, image, link, details, photoCount } = item

  // Render as link or div based on whether it has a link
  const ItemWrapper = ({ children }) => {
    if (link) {
      if (link.startsWith('/')) {
        // Internal link - use React Router Link
        return (
          <Link to={link} className="gallery-item image-reveal">
            {children}
          </Link>
        )
      } else {
        // External link - use regular anchor
        return (
          <a 
            href={link} 
            className="gallery-item image-reveal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      }
    } else {
      return (
        <div className="gallery-item image-reveal">
          {children}
        </div>
      )
    }
  }

  return (
    <ItemWrapper>
      {image && (
        <img
          src={image}
          alt={`${title} ${type === 'wedding' ? 'Wedding' : ''}`}
          width="800"
          height="800"
        />
      )}
      <div className="gallery-overlay">
        <div className="gallery-couple-names">{title}</div>
        <div className="gallery-season">{subtitle}</div>
        {type === 'wedding' && (
          <div className="gallery-details">
            {photoCount} Photos • {details}
          </div>
        )}
      </div>
    </ItemWrapper>
  )
}