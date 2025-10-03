import { useParams, Link } from 'react-router-dom'
import { Masonry } from 'masonic'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Footer from '../components/Footer'

// Sample premier wedding data with magazine-style story blocks
const premierWeddingData = {
  'emma-james-summer-garden-wedding': {
    coupleName: 'Emma & James',
    heroImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920',
    date: 'June 15, 2024',
    location: 'Rum River Barn • Hillman, Minnesota',
    intro: 'A romantic summer celebration filled with golden hour magic, garden blooms, and dancing under the stars. Emma and James brought their dream wedding to life surrounded by 200 of their closest family and friends.',

    // Magazine-style story blocks (using FEATURE_BLOCKS_001 structure)
    storyBlocks: [
      {
        number: '01',
        title: 'The Love Story',
        description: 'Emma and James met on a hiking trail in Colorado five years ago. What started as a chance encounter over a shared love of adventure turned into a beautiful journey of love and partnership.',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
        badge: 'First Date',
        highlights: [
          'Met while hiking in Rocky Mountain National Park',
          'Engaged at the same trailhead where they first met',
          'Shared passion for outdoor adventures',
          'Travel enthusiasts with 15 countries visited together'
        ]
      },
      {
        number: '02',
        title: 'The Ceremony',
        description: 'Under a canopy of trees and surrounded by vineyard rows, Emma walked down an aisle lined with garden roses and wildflowers. The golden hour light created magic as they exchanged vows they had written themselves.',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
        badge: '200 Guests',
        highlights: [
          'Outdoor ceremony in the vineyard',
          'Live string quartet performing',
          'Handwritten vows read at sunset',
          'Unity ceremony with vintage wine'
        ]
      },
      {
        number: '03',
        title: 'The Celebration',
        description: 'The white barn transformed into a romantic haven with string lights, candlelit tables, and lush floral centerpieces. Guests danced until midnight under the stars to a live band playing their favorite songs.',
        image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
        badge: 'Till Midnight',
        highlights: [
          'Farm-to-table dinner by Fable Catering',
          'Live band with 12-piece ensemble',
          'Signature cocktails named after their travels',
          'Late-night s\'mores bar under the stars'
        ]
      }
    ],

    // All photos for masonry gallery
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

    // Vendor team (using team-section style)
    vendors: [
      {
        name: 'Sarah Johnson',
        role: 'Lead Photographer',
        company: 'Sarah Johnson Photography',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      {
        name: 'Michael Chen',
        role: 'Floral Designer',
        company: 'Princeton Floral',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      {
        name: 'Emily Rodriguez',
        role: 'Wedding Planner',
        company: 'Elegant Events MN',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
      },
      {
        name: 'David Thompson',
        role: 'Executive Chef',
        company: 'Fable Catering',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
      }
    ]
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

export default function RealWeddingPostPremier() {
  const { slug } = useParams()
  const wedding = premierWeddingData[slug]
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

  const handlePhotoClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const slides = wedding.photos.map(photo => ({
    src: photo.src.replace('w=1200', 'w=1920'),
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
        >
          ← All Weddings
        </Link>

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
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.35rem',
            lineHeight: 1.8,
            color: 'var(--sage-green)',
            fontStyle: 'italic'
          }}>
            {wedding.intro}
          </p>
        </section>
      )}

      {/* Magazine-Style Story Blocks (using FEATURE_BLOCKS_001 component) */}
      {wedding.storyBlocks && wedding.storyBlocks.length > 0 && (
        <section className="alternating-blocks">
          <div className="content-wrapper">
            <div className="blocks-container">
              {wedding.storyBlocks.map((block, index) => (
                <div key={index} className={`block-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="block-content">
                    <div className="number">{block.number}</div>
                    <h3>{block.title}</h3>
                    <p>{block.description}</p>
                    {block.highlights && (
                      <ul className="feature-list">
                        {block.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="block-image">
                    <img src={block.image} alt={block.title} width="800" height="500" />
                    {block.badge && <span className="image-badge">{block.badge}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div className="section-header center" style={{ marginBottom: '3rem' }}>
          <div className="script-accent">The Gallery</div>
          <h2 className="section-title">Moments Captured</h2>
        </div>
        <Masonry
          items={wedding.photos.map((photo, index) => ({ ...photo, index }))}
          render={({ data: photo }) => (
            <PhotoCard
              data={photo}
              onClick={() => handlePhotoClick(photo.index)}
            />
          )}
          columnGutter={20}
          columnWidth={350}
          overscanBy={2}
        />
      </section>

      {/* Vendor Team Section (inspired by "Family Behind the Farm") */}
      {wedding.vendors && wedding.vendors.length > 0 && (
        <section style={{
          padding: '4rem 2rem',
          background: 'var(--cream-pearl)'
        }}>
          <div className="content-wrapper">
            <div className="section-header center" style={{ marginBottom: '3rem' }}>
              <div className="script-accent">Dream Team</div>
              <h2 className="section-title">The Vendors Behind the Magic</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {wedding.vendors.map((vendor, index) => (
                <div key={index} style={{
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--warm-walnut)',
                    marginBottom: '0.5rem'
                  }}>
                    {vendor.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'var(--sage-green)',
                    marginBottom: '0.25rem'
                  }}>
                    {vendor.role}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--sage-green)',
                    fontStyle: 'italic',
                    opacity: 0.8
                  }}>
                    {vendor.company}
                  </p>
                </div>
              ))}
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

      <Footer />

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
