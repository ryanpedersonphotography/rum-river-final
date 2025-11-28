import { useState, useCallback, useRef, useEffect } from 'react'
import { Masonry } from 'masonic'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageTemplate from '../components/PageTemplate'
import VenueTabs from '../components/VenueTabs'

// Photo data with categories
const photos = [
  // The Historic Barn
  { id: 1, src: '/images/venue/barn-exterior-full-view-landscape.jpg', category: 'barn', alt: 'Historic Barn Exterior' },
  { id: 2, src: '/images/venue/barn-interior-exposed-beams-chandeliers.jpg', category: 'barn', alt: 'Grand Loft Interior' },
  { id: 3, src: '/images/venue/barn-interior-ceiling-beams-lighting.jpg', category: 'barn', alt: 'Ceiling Beams & Lighting' },
  { id: 4, src: '/images/venue/barn-interior-string-lights-ceiling-detail.jpg', category: 'barn', alt: 'String Lights Detail' },
  { id: 5, src: '/images/venue/barn-exterior-hero.jpg', category: 'barn', alt: 'Barn Entrance' },
  { id: 6, src: '/images/venue/barn-exterior-deck-stairs-trees.jpg', category: 'barn', alt: 'Deck & Stairs' },

  // The Lounge
  { id: 7, src: '/images/venue/lounge-interior.jpg', category: 'lounge', alt: 'Lounge Interior' },
  { id: 8, src: '/images/venue/reception-hall-wide.jpg', category: 'lounge', alt: 'Reception Hall Wide View' },
  { id: 9, src: '/images/reception/dsc_1786-enhanced-nr-large.jpeg', category: 'lounge', alt: 'Dining Setup' },
  { id: 10, src: '/images/reception/dsc_1788-large.jpeg', category: 'lounge', alt: 'Lounge Detail' },

  // Frame Barn
  { id: 11, src: '/images/venue/frame-barn-exterior.jpg', category: 'frame-barn', alt: 'Frame Barn Exterior' },
  { id: 12, src: '/images/venue/frame-barn-side-view.jpg', category: 'frame-barn', alt: 'Frame Barn Side View' },
  { id: 13, src: '/images/venue/frame-barn-ceremony.jpg', category: 'frame-barn', alt: 'Outdoor Ceremony Setup' },

  // Bridal Cottage
  { id: 14, src: '/images/venue/bridal-cottage-exterior.jpg', category: 'bridal-suite', alt: 'Bridal Cottage Exterior' },
  { id: 15, src: '/images/venue/bridal-cottage-getting-ready.jpg', category: 'bridal-suite', alt: 'Getting Ready Moment' },
  { id: 16, src: '/images/bridal-suite/1-large.jpeg', category: 'bridal-suite', alt: 'Bridal Suite Interior' },
  { id: 17, src: '/images/bridal-suite/dsc_1766-large.jpeg', category: 'bridal-suite', alt: 'Bridal Vanity' },

  // Grounds & Vineyard
  { id: 18, src: '/images/venue/aerials/aerial-full-estate.jpg', category: 'property', alt: 'Aerial Estate View' },
  { id: 19, src: '/images/venue/aerials/aerial-vineyard-view.jpg', category: 'property', alt: 'Vineyard Aerial' },
  { id: 20, src: '/images/venue/grounds-barn-context.jpg', category: 'property', alt: 'Barn & Grounds Context' },
  { id: 21, src: '/images/venue/grounds-ceremony-area.jpg', category: 'property', alt: 'Outdoor Ceremony Grounds' },
  { id: 22, src: '/images/venue/grounds-swing.jpg', category: 'property', alt: 'Romantic Swing' },
  { id: 23, src: '/images/venue/grounds-field.jpg', category: 'property', alt: 'Rolling Fields' },
  { id: 24, src: '/images/venue/property-parking-lot.jpg', category: 'property', alt: 'Ample Parking' },
  { id: 25, src: '/images/venue/property-camping.jpg', category: 'property', alt: 'Camping Area' },

  // Details
  { id: 26, src: '/images/venue/grounds-sign.jpg', category: 'details', alt: 'Rustic Signage' },
  { id: 27, src: '/images/venue/grounds-wheel-detail.jpg', category: 'details', alt: 'Antique Wheel' },
  { id: 28, src: '/images/venue/details-antique-windmill-rustic.jpg', category: 'details', alt: 'Antique Windmill' },
  { id: 29, src: '/images/venue/details-americana-flag-decor.jpg', category: 'details', alt: 'Americana Decor' },

  // Real Weddings Mix
  { id: 36, src: '/images/2014/05/Loria-Jason-wedding-1-0198.jpg', category: 'real-weddings', alt: 'Outdoor Ceremony' },
  { id: 37, src: '/images/2014/05/Loria-Jason-wedding-1-0365.jpg', category: 'real-weddings', alt: 'Barn Wedding Party' },
  { id: 38, src: '/images/2014/05/Loria-Jason-wedding-1-0205.jpg', category: 'real-weddings', alt: 'First Dance' },
  { id: 39, src: '/images/2014/05/LB1_6499.jpg', category: 'real-weddings', alt: 'Golden Hour Couple' },
  { id: 40, src: '/images/2014/05/Loria-Jason-wedding-1-0013.jpg', category: 'real-weddings', alt: 'Intimate Moment' }
]

// Lazy Image Component with Intersection Observer
const LazyImage = ({ src, alt, onLoad }) => {
  const imgRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoaded(true) 
  }, [])

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} style={{ position: 'relative', minHeight: '200px' }}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      {!isLoaded && isInView && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--warm-cream)',
          color: 'var(--sage-green)'
        }}>
          Loading...
        </div>
      )}
    </div>
  )
}

// Photo Card Component
const PhotoCard = ({ data: photo, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      className="gallery-photo-card"
    >
      <LazyImage
        src={photo.src}
        alt={photo.alt}
      />
    </div>
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('barn')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filter photos based on active category
  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory)

  // Handle photo click
  const handlePhotoClick = (photo) => {
    const index = filteredPhotos.findIndex(p => p.id === photo.id)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Prepare slides for lightbox
  const slides = filteredPhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    title: photo.alt,
    description: photo.alt
  }))

  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Venue & Gallery
      </h1>
      <p className="page-hero-lead">
        Tour our stunning property, historic barn, and beautiful grounds. See why Rum River Barn is Minnesota's premier wedding venue.
      </p>
    </>
  )

  return (
    <PageTemplate 
      heroContent={heroContent}
      heroImage="/images/venue/barn-interior-exposed-beams-chandeliers.jpg"
    >

      {/* Filter Tabs */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="content-wrapper">
          <VenueTabs
            tabs={[
              { key: 'barn', label: 'The Historic Barn' },
              { key: 'lounge', label: 'The Lounge' },
              { key: 'frame-barn', label: 'Frame Barn' },
              { key: 'bridal-suite', label: 'Bridal Cottage' },
              { key: 'property', label: 'Grounds & Vineyard' },
              { key: 'real-weddings', label: 'Real Weddings' },
              { key: 'details', label: 'Details' },
              { key: 'all', label: 'All' }
            ]}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />

        </div>
      </section>

      {/* Masonic Gallery */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '4rem' }}>
        <div className="content-wrapper">
          <Masonry
            key={activeCategory}
            items={filteredPhotos}
            render={({ data: photo }) => (
              <PhotoCard
                data={photo}
                onClick={() => handlePhotoClick(photo)}
              />
            )}
            columnGutter={20}
            columnWidth={300}
            overscanBy={2}
          />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />

      <style>{`
        .gallery-photo-card {
          animation: fadeInUp 0.4s ease-out;
        }

        .gallery-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Lightbox styling overrides */
        .yarl__slide_description {
          font-family: 'Playfair Display', serif !important;
          font-size: 1.5rem !important;
          color: #fff !important;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
        }
      `}</style>

    </PageTemplate>
  )
}