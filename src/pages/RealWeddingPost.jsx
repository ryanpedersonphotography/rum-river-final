import { useParams, Link } from 'react-router-dom'
import { Masonry } from 'masonic'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { getWeddingBySlug } from '../data/realWeddings'

// Sample wedding data (fallback for old URLs)
const sampleWeddingData = {
  'emma-james-summer-garden-wedding': {
    coupleName: 'Emma & James',
    heroImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920',
    date: 'June 15, 2024',
    location: 'Rum River Barn • Hillman, Minnesota',
    intro: 'A romantic summer celebration filled with golden hour magic, garden blooms, and dancing under the stars.',
    photographer: 'Sarah Johnson Photography',
    photos: [
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200', alt: 'Bridal preparations' },
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200', alt: 'Bride getting ready' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200', alt: 'Ceremony setup' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200', alt: 'Walking down aisle' },
      { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200', alt: 'Exchange of vows' },
      { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200', alt: 'First kiss' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200', alt: 'Golden hour couple' },
      { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200', alt: 'Romantic moment' },
      { src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200', alt: 'Reception details' },
      { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200', alt: 'Table settings' },
      { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200', alt: 'First dance' },
      { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1200', alt: 'Reception celebration' },
      { src: 'https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=1200', alt: 'Dancing' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200', alt: 'Sunset portraits' },
      { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200', alt: 'Wedding details' }
    ],
    vendors: {
      photography: 'Sarah Johnson Photography',
      florals: 'Princeton Floral',
      planning: 'Elegant Events MN',
      catering: 'Fable Catering'
    }
  },
  'sarah-michael-fall-barn-wedding': {
    coupleName: 'Sarah & Michael',
    heroImage: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920',
    date: 'October 12, 2024',
    location: 'Rum River Barn • Hillman, Minnesota',
    intro: 'Rustic elegance meets autumn colors in this cozy barn celebration.',
    photographer: 'Moments in Time Photography',
    photos: [
      { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200', alt: 'Fall wedding' },
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200', alt: 'Ceremony' },
      { src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200', alt: 'Reception' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200', alt: 'Couple portraits' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200', alt: 'Details' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200', alt: 'Ceremony moment' }
    ],
    vendors: {
      photography: 'Moments in Time Photography'
    }
  }
}

// Photo card for Masonic
const PhotoCard = ({ data: photo, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      className="wedding-photo-card"
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
    </div>
  )
}

export default function RealWeddingPost() {
  const { slug } = useParams()
  // Try real wedding data first, fall back to sample data
  const wedding = getWeddingBySlug(slug) || sampleWeddingData[slug]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!wedding) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Wedding Not Found</h1>
        <Link to="/real-weddings" className="romantic-button">← Back to Real Weddings</Link>
      </div>
    )
  }

  // Flatten all gallery photos into one array for lightbox
  const allPhotos = wedding.galleries
    ? wedding.galleries.flatMap(gallery => gallery.photos)
    : wedding.photos || []

  const handlePhotoClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const slides = allPhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt
  }))

  return (
    <>
      {/* Full-Width Hero */}
      <section style={{
        position: 'relative',
        height: '85vh',
        minHeight: '600px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${wedding.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        {/* Back Button */}
        <Link
          to="/real-weddings"
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '0.75rem 1.5rem',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.6)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
        >
          ← All Weddings
        </Link>

        {/* Hero Content */}
        <div style={{
          position: 'absolute',
          bottom: '4rem',
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'white',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 400,
            marginBottom: '1rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.1
          }}>
            {wedding.coupleName}
          </h1>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: 0.95,
            textShadow: '0 1px 10px rgba(0,0,0,0.3)'
          }}>
            {wedding.date} • {wedding.location}
          </div>
        </div>
      </section>

      {/* Intro Text */}
      {wedding.intro && (
        <section style={{
          padding: '4rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            lineHeight: 1.8,
            color: 'var(--sage-green)',
            fontStyle: 'italic'
          }}>
            {wedding.intro}
          </p>
          {wedding.photographer && (
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--warm-walnut)',
              marginTop: '1.5rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Photography by {wedding.photographer}
            </p>
          )}
        </section>
      )}

      {/* Photo Gallery - Single continuous grid */}
      <section style={{
        padding: '2rem 2rem 4rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Gallery section titles if multiple galleries */}
        {wedding.galleries && wedding.galleries.length > 1 && (
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            {wedding.galleries.map((gallery, idx) => (
              <span key={idx} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--sage-green)',
                margin: '0 1rem',
                opacity: 0.7
              }}>
                {gallery.title}
              </span>
            ))}
          </div>
        )}

        {/* Single Masonry instance for all photos */}
        <Masonry
          items={allPhotos.map((photo, index) => ({ ...photo, index }))}
          render={({ data: photo }) => (
            <PhotoCard
              data={photo}
              onClick={() => handlePhotoClick(photo.index)}
            />
          )}
          columnGutter={20}
          columnWidth={350}
          overscanBy={5}
        />
      </section>

      {/* Vendor Credits */}
      {wedding.vendors && Object.keys(wedding.vendors).length > 0 && (
        <section style={{
          padding: '3rem 2rem 4rem',
          background: 'var(--cream-pearl)',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: 'var(--warm-walnut)',
              marginBottom: '2rem'
            }}>
              Vendor Credits
            </h3>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              lineHeight: 2,
              color: 'var(--sage-green)'
            }}>
              {wedding.vendors.photography && <div><strong>Photography:</strong> {wedding.vendors.photography}</div>}
              {wedding.vendors.florals && <div><strong>Florals:</strong> {wedding.vendors.florals}</div>}
              {wedding.vendors.planning && <div><strong>Planning:</strong> {wedding.vendors.planning}</div>}
              {wedding.vendors.catering && <div><strong>Catering:</strong> {wedding.vendors.catering}</div>}
              {wedding.vendors.dj && <div><strong>DJ:</strong> {wedding.vendors.dj}</div>}
              {wedding.vendors.videography && <div><strong>Videography:</strong> {wedding.vendors.videography}</div>}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <div className="script-accent" style={{ marginBottom: '1rem' }}>Ready to Create Your Story?</div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Let Your Love Story Unfold Here
          </h2>
          <p className="lead" style={{ marginBottom: '2rem' }}>
            Schedule a tour to see how we can help bring your wedding vision to life
          </p>
          <a href="/contact" className="romantic-button">
            Schedule Your Tour
          </a>
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
        .wedding-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  )
}
