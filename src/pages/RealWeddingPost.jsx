import { useParams, Link } from 'react-router-dom'
import { Masonry } from 'masonic'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { getWeddingBySlug } from '../data/realWeddings'
import SmartImageSimple from '../components/SmartImageSimple'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import CTAButton from '../components/CTAButton'

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
const PhotoCard = ({ data: photo, onClick }) => (
  <div onClick={onClick} className="wedding-photo-card">
    <img src={photo.src} alt={photo.alt} />
  </div>
)

export default function RealWeddingPost() {
  const { slug } = useParams()
  // Try real wedding data first, fall back to sample data
  const wedding = getWeddingBySlug(slug) || sampleWeddingData[slug]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!wedding) {
    return (
      <Section tone="cream">
        <div className="content-wrapper" style={{ textAlign: 'center' }}>
          <Card variant="soft" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <SectionHeader
              title="Wedding Not Found"
              description="We couldn't locate that love story. Browse our gallery to get inspired."
              align="center"
            />
            <CTAButton to="/real-weddings" variant="primary">
              ← Back to Real Weddings
            </CTAButton>
          </Card>
        </div>
      </Section>
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
    type: "enhanced-image",
    src: photo.src,
    alt: photo.alt
  }))

  return (
    <>
      {/* Full-Width Hero */}
      <section className="real-wedding-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${wedding.heroImage})` }}>
        <div className="real-wedding-hero__inner">
          <Link to="/real-weddings" className="real-wedding-hero__back">
            ← All Weddings
          </Link>
          <div className="real-wedding-hero__content">
            <h1>{wedding.coupleName}</h1>
            <div>{wedding.date} • {wedding.location}</div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      {wedding.intro && (
        <Section>
          <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Card variant="soft" tone="ivory" style={{ textAlign: 'center' }}>
              <p className="real-wedding-intro">{wedding.intro}</p>
              {wedding.photographer && (
                <p className="real-wedding-photographer">
                  Photography by {wedding.photographer}
                </p>
              )}
            </Card>
          </div>
        </Section>
      )}

      {/* Photo Gallery - Single continuous grid */}
      <Section className="real-wedding-gallery">
        <div className="content-wrapper" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {wedding.galleries && wedding.galleries.length > 1 && (
            <div className="real-wedding-gallery__titles">
              {wedding.galleries.map((gallery, idx) => (
                <span key={idx}>{gallery.title}</span>
              ))}
            </div>
          )}

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
        </div>
      </Section>

      {/* Vendor Credits */}
      {wedding.vendors && Object.keys(wedding.vendors).length > 0 && (
        <Section tone="cream">
          <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Card variant="soft" tone="ivory" style={{ textAlign: 'center' }}>
              <SectionHeader title="Vendor Credits" align="center" />
              <div className="real-wedding-vendors">
                {wedding.vendors.photography && <div><strong>Photography:</strong> {wedding.vendors.photography}</div>}
                {wedding.vendors.florals && <div><strong>Florals:</strong> {wedding.vendors.florals}</div>}
                {wedding.vendors.planning && <div><strong>Planning:</strong> {wedding.vendors.planning}</div>}
                {wedding.vendors.catering && <div><strong>Catering:</strong> {wedding.vendors.catering}</div>}
                {wedding.vendors.dj && <div><strong>DJ:</strong> {wedding.vendors.dj}</div>}
                {wedding.vendors.videography && <div><strong>Videography:</strong> {wedding.vendors.videography}</div>}
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <div className="content-wrapper">
          <Card
            variant="soft"
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <SectionHeader
              eyebrow="Ready to Create Your Story?"
              title="Let Your Love Story Unfold Here"
              description="Schedule a tour to see how we can help bring your wedding vision to life"
              align="center"
            />
            <CTAButton href="/contact" variant="primary">
              Schedule Your Tour
            </CTAButton>
          </Card>
        </div>
      </Section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        render={{
          slide: ({ slide }) =>
            slide.type === "enhanced-image" ? (
              <div style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <SmartImageSimple
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    minWidth: '35%',
                    minHeight: '35%',
                    maxWidth: '55%',
                    maxHeight: '55%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ) : undefined
        }}
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
