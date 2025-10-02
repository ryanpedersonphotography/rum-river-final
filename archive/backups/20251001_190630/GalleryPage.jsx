import { useState } from 'react'
import { Masonry } from 'masonic'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageTemplate from '../components/PageTemplate'

// Photo data with categories
const photos = [
  // Weddings
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'weddings', alt: 'Outdoor wedding ceremony' },
  { id: 2, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', category: 'weddings', alt: 'Summer barn wedding' },
  { id: 3, src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800', category: 'weddings', alt: 'Romantic first dance' },
  { id: 4, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', category: 'weddings', alt: 'Golden hour portraits' },
  { id: 5, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', category: 'weddings', alt: 'Intimate celebration' },
  { id: 6, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', category: 'weddings', alt: 'Bridal party' },

  // Ceremony
  { id: 7, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'ceremony', alt: 'Ceremony setup' },
  { id: 8, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800', category: 'ceremony', alt: 'Twilight ceremony' },
  { id: 9, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', category: 'ceremony', alt: 'Ceremony aisle' },
  { id: 10, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800', category: 'ceremony', alt: 'Ceremony arch' },

  // Reception
  { id: 11, src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=800', category: 'reception', alt: 'Reception details' },
  { id: 12, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', category: 'reception', alt: 'Reception tables' },
  { id: 13, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', category: 'reception', alt: 'Dance floor' },
  { id: 14, src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800', category: 'reception', alt: 'Barn reception' },

  // Details
  { id: 15, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600', category: 'details', alt: 'Wedding flowers' },
  { id: 16, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600', category: 'details', alt: 'Wedding rings' },
  { id: 17, src: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=600', category: 'details', alt: 'Table settings' },
  { id: 18, src: 'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?w=600', category: 'details', alt: 'Wedding cake' },

  // Property
  { id: 19, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'property', alt: 'Venue exterior' },
  { id: 20, src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800', category: 'property', alt: 'Barn interior' },
  { id: 21, src: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800', category: 'property', alt: 'Vineyard rows' },
  { id: 22, src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800', category: 'property', alt: 'Garden grounds' },
  { id: 23, src: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800', category: 'property', alt: 'Courtyard' },
  { id: 24, src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800', category: 'property', alt: 'Interior details' },

  // Videos (using thumbnail images with video badge)
  { id: 25, src: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=800', category: 'videos', alt: 'Wedding highlight video', isVideo: true },
  { id: 26, src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800', category: 'videos', alt: 'Venue tour video', isVideo: true },
  { id: 27, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', category: 'videos', alt: 'Ceremony video', isVideo: true },
  { id: 28, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', category: 'videos', alt: 'Reception video', isVideo: true },
]

// Photo Card Component for Masonic
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
      <img
        src={photo.src}
        alt={photo.alt}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
      {/* Video Badge */}
      {photo.isVideo && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '0.5rem 0.75rem',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          ▶ VIDEO
        </div>
      )}
    </div>
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
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
    src: photo.src.replace('w=800', 'w=1920'), // Higher res for lightbox
    alt: photo.alt,
    title: photo.alt
  }))

  const heroContent = (
    <>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: 'white'
      }}>
        Photo Gallery
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        Explore our beautiful venue through the lens of unforgettable moments captured at Rum River Barn
      </p>
    </>
  )

  return (
    <PageTemplate heroContent={heroContent}>

      {/* Filter Tabs */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="content-wrapper">
          <div className="venue-tabs">
            {[
              { key: 'all', label: 'All' },
              { key: 'weddings', label: 'Weddings' },
              { key: 'ceremony', label: 'Ceremonies' },
              { key: 'reception', label: 'Receptions' },
              { key: 'details', label: 'Details' },
              { key: 'property', label: 'Property' },
              { key: 'videos', label: 'Videos' }
            ].map(category => (
              <button
                key={category.key}
                type="button"
                className={`venue-tab ${activeCategory === category.key ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log('Clicked category:', category.key)
                  setActiveCategory(category.key)
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

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

        /* Stagger animation for items */
        .gallery-photo-card:nth-child(1) { animation-delay: 0s; }
        .gallery-photo-card:nth-child(2) { animation-delay: 0.05s; }
        .gallery-photo-card:nth-child(3) { animation-delay: 0.1s; }
        .gallery-photo-card:nth-child(4) { animation-delay: 0.15s; }
        .gallery-photo-card:nth-child(5) { animation-delay: 0.2s; }
        .gallery-photo-card:nth-child(6) { animation-delay: 0.25s; }
        .gallery-photo-card:nth-child(7) { animation-delay: 0.3s; }
        .gallery-photo-card:nth-child(8) { animation-delay: 0.35s; }
        .gallery-photo-card:nth-child(9) { animation-delay: 0.4s; }
        .gallery-photo-card:nth-child(10) { animation-delay: 0.45s; }

        /* Add active button animation */
        .venue-tab.active {
          animation: buttonPulse 0.3s ease-out;
        }

        @keyframes buttonPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Loading state for gallery container */
        .content-wrapper {
          position: relative;
        }
      `}</style>

    </PageTemplate>
  )
}
