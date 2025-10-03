import { useState } from 'react'
import { Masonry } from 'masonic'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageTemplate from '../components/PageTemplate'
import VenueTabs from '../components/VenueTabs'

// Photo data with categories
const photos = [
  // Property & Venue (DEFAULT CATEGORY)
  { id: 1, src: '/images/venue/barn-exterior-full-view-landscape.jpg', category: 'property', alt: 'Rum River Barn exterior view' },
  { id: 2, src: '/images/venue/barn-exterior-stone-wall-trees.jpg', category: 'property', alt: 'Barn with stone wall and trees' },
  { id: 3, src: '/images/venue/barn-exterior-welcome-sign-entrance.jpg', category: 'property', alt: 'Welcome sign at entrance' },
  { id: 4, src: '/images/venue/barn-exterior-front-entrance-concrete-pad.jpg', category: 'property', alt: 'Main entrance' },
  { id: 5, src: '/images/venue/barn-exterior-deck-stairs-trees.jpg', category: 'property', alt: 'Deck and stairs' },
  { id: 6, src: '/images/venue/barn-exterior-full-deck-view-evening.jpg', category: 'property', alt: 'Evening view of deck' },
  { id: 7, src: '/images/venue/barn-interior-exposed-beams-chandeliers.jpg', category: 'property', alt: 'Interior with exposed beams' },
  { id: 8, src: '/images/venue/barn-interior-ceiling-beams-lighting.jpg', category: 'property', alt: 'Ceiling beams and lighting' },
  { id: 9, src: '/images/venue/barn-interior-string-lights-ceiling-detail.jpg', category: 'property', alt: 'String lights detail' },
  { id: 10, src: '/images/venue/barn-exterior-deck-swing-golden-hour.jpg', category: 'property', alt: 'Golden hour at the barn' },
  { id: 11, src: '/images/venue/barn-exterior-landscaping-stone-border.jpg', category: 'property', alt: 'Landscaped grounds' },
  { id: 12, src: '/images/venue/property-vineyard-perspective-hills.jpg', category: 'property', alt: 'Vineyard hills view' },
  { id: 13, src: '/images/venue/property-landscape-rural-vista.jpg', category: 'property', alt: 'Rural landscape vista' },
  { id: 14, src: '/images/venue/property-field-wildflowers-natural.jpg', category: 'property', alt: 'Wildflower fields' },
  { id: 15, src: '/images/venue/barn-exterior-vintage-tractor-rustic.jpg', category: 'property', alt: 'Vintage tractor decor' },

  // Details & Decor
  { id: 16, src: '/images/venue/details-swing-rustic-romance.jpg', category: 'details', alt: 'Romantic swing' },
  { id: 17, src: '/images/venue/details-antique-windmill-rustic.jpg', category: 'details', alt: 'Antique windmill' },
  { id: 18, src: '/images/venue/details-americana-flag-decor.jpg', category: 'details', alt: 'Americana decor' },
  { id: 19, src: '/images/venue/details-vintage-tractor-rustic.jpg', category: 'details', alt: 'Vintage tractor' },
  { id: 20, src: '/images/venue/details-antique-wheel-stone-wall.jpg', category: 'details', alt: 'Antique wheel display' },
  { id: 21, src: '/images/venue/details-barn-sign-rustic-lettering.jpg', category: 'details', alt: 'Barn signage' },
  { id: 22, src: '/images/venue/details-rum-river-barn-vineyard-sign.jpg', category: 'details', alt: 'Rum River Barn sign' },
  { id: 23, src: '/images/venue/details-building-entrance-windows.jpg', category: 'details', alt: 'Building details' },
  { id: 24, src: '/images/venue/details-architectural-trim-windows.jpg', category: 'details', alt: 'Architectural details' },

  // Wedding Photos
  { id: 25, src: '/images/2014/05/Loria-Jason-wedding-1-0198.jpg', category: 'weddings', alt: 'Outdoor wedding ceremony' },
  { id: 26, src: '/images/2014/05/Loria-Jason-wedding-1-0365.jpg', category: 'weddings', alt: 'Summer barn wedding' },
  { id: 27, src: '/images/2014/05/Loria-Jason-wedding-1-0205.jpg', category: 'weddings', alt: 'Romantic first dance' },
  { id: 28, src: '/images/2014/05/LB1_6499.jpg', category: 'weddings', alt: 'Golden hour portraits' },
  { id: 29, src: '/images/2014/05/Loria-Jason-wedding-1-0013.jpg', category: 'weddings', alt: 'Intimate celebration' },
  { id: 30, src: '/images/2014/05/Loria-Jason-wedding-1-0007.jpg', category: 'weddings', alt: 'Bridal party' },
  { id: 31, src: '/images/2014/04/Loria-Jason-wedding-2-0026.jpg', category: 'weddings', alt: 'Wedding celebration' },
  { id: 32, src: '/images/2014/05/Loria-and-Jason-XORDER-2-0030.jpg', category: 'weddings', alt: 'Ceremony moments' },
  { id: 33, src: '/images/2014/05/Loria-and-Jason-XORDER-2-0031.jpg', category: 'weddings', alt: 'Wedding vows' },

  // Ceremonies
  { id: 34, src: '/images/2014/05/Loria-Jason-wedding-1-0006.jpg', category: 'ceremonies', alt: 'Ceremony setup' },
  { id: 35, src: '/images/2014/05/Loria-Jason-wedding-1-0012.jpg', category: 'ceremonies', alt: 'Twilight ceremony' },
  { id: 36, src: '/images/venue/barn-exterior-deck-swing-under-tree.jpg', category: 'ceremonies', alt: 'Outdoor ceremony space' },

  // Receptions
  { id: 37, src: '/images/2014/05/LB1_6880.jpg', category: 'receptions', alt: 'Reception details' },
  { id: 38, src: '/images/2014/05/LB1_7023.jpg', category: 'receptions', alt: 'Reception tables' },
  { id: 39, src: '/images/2014/05/LB1_7342-2.jpg', category: 'receptions', alt: 'Dance floor' },
  { id: 40, src: '/images/2014/05/Reins-Wedding_1-631.jpg', category: 'receptions', alt: 'Barn reception' },

  // Videos (using thumbnail images with video badge)
  { id: 41, src: '/images/2015/12/wedding-5.jpg', category: 'videos', alt: 'Wedding highlight video', isVideo: true },
  { id: 42, src: '/images/2014/05/Kage0921.jpg', category: 'videos', alt: 'Venue tour video', isVideo: true },
  { id: 43, src: '/images/2014/05/Reins-Wedding_3-287.jpg', category: 'videos', alt: 'Ceremony video', isVideo: true },
  { id: 44, src: '/images/2014/05/IMG_0029.jpg', category: 'videos', alt: 'Reception video', isVideo: true },
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
  const [activeCategory, setActiveCategory] = useState('property')
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
      currentPage="gallery"
      heroContent={heroContent}
      heroImage="/images/venue/barn-interior-exposed-beams-chandeliers.jpg"
    >

      {/* Filter Tabs */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="content-wrapper">
          <VenueTabs
            tabs={[
              { key: 'property', label: 'Venue & Property' },
              { key: 'weddings', label: 'Wedding Photos' },
              { key: 'ceremonies', label: 'Ceremonies' },
              { key: 'receptions', label: 'Receptions' },
              { key: 'details', label: 'Details' },
              { key: 'videos', label: 'Videos' },
              { key: 'all', label: 'All Photos' }
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
