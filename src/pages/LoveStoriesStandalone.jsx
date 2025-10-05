import { Link } from 'react-router-dom'
import { realWeddings } from '../data/realWeddings'
import CTAButton from '../components/CTAButton'

export default function LoveStoriesStandalone() {
  return (
    <>
      {/* Love Stories Gallery */}
      <section className="love-stories-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Real Love Stories</div>
            <h2 className="section-title">Weddings at the Barn</h2>
            <p className="lead" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>Every celebration tells a unique story of love, laughter, and happily ever after.</p>
          </div>

          <div className="wedding-gallery">
            {realWeddings.slice(0, 6).map((wedding, index) => (
              <Link
                key={wedding.slug}
                to={`/real-weddings/${wedding.slug}`}
                className="gallery-item image-reveal"
              >
                <img
                  src={wedding.coverImage}
                  alt={`${wedding.coupleName} Wedding`}
                  width="800"
                  height="800"
                />
                <div className="gallery-overlay">
                  <div className="gallery-couple-names">{wedding.coupleName}</div>
                  <div className="gallery-season">{wedding.date}</div>
                  <div className="gallery-details">
                    {wedding.photoCount} Photos • {wedding.location.split('•')[0].trim()}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="gallery-footer">
            <CTAButton to="/real-weddings" variant="primary">View All Real Weddings</CTAButton>
          </div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Love Stories Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the wedding gallery above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- Love Stories Gallery -->
<section className="love-stories-section section">
  <div className="content-wrapper">
    <div className="section-header center">
      <div className="script-accent">Real Love Stories</div>
      <h2 className="section-title">Weddings at the Barn</h2>
      <p className="lead" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>
        Every celebration tells a unique story of love, laughter, and happily ever after.
      </p>
    </div>

    <div className="wedding-gallery">
      {realWeddings.slice(0, 6).map((wedding, index) => (
        <Link
          key={wedding.slug}
          to={\`/real-weddings/\${wedding.slug}\`}
          className="gallery-item image-reveal"
        >
          <img
            src={wedding.coverImage}
            alt={\`\${wedding.coupleName} Wedding\`}
            width="800"
            height="800"
          />
          <div className="gallery-overlay">
            <div className="gallery-couple-names">{wedding.coupleName}</div>
            <div className="gallery-season">{wedding.date}</div>
            <div className="gallery-details">
              {wedding.photoCount} Photos • {wedding.location.split('•')[0].trim()}
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="gallery-footer">
      <CTAButton to="/real-weddings" variant="primary">
        View All Real Weddings
      </CTAButton>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>JavaScript Functionality</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Component with Real Weddings Data
import { Link } from 'react-router-dom'
import { realWeddings } from '../data/realWeddings'
import CTAButton from '../components/CTAButton'

export default function LoveStoriesSection() {
  return (
    <section className="love-stories-section section">
      <div className="content-wrapper">
        {/* Header */}
        <div className="section-header center">
          <div className="script-accent">Real Love Stories</div>
          <h2 className="section-title">Weddings at the Barn</h2>
          <p className="lead">
            Every celebration tells a unique story of love, laughter, and happily ever after.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="wedding-gallery">
          {realWeddings.slice(0, 6).map((wedding, index) => (
            <Link
              key={wedding.slug}
              to={\`/real-weddings/\${wedding.slug}\`}
              className="gallery-item image-reveal"
            >
              <img
                src={wedding.coverImage}
                alt={\`\${wedding.coupleName} Wedding\`}
                width="800"
                height="800"
              />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">{wedding.coupleName}</div>
                <div className="gallery-season">{wedding.date}</div>
                <div className="gallery-details">
                  {wedding.photoCount} Photos • {wedding.location.split('•')[0].trim()}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="gallery-footer">
          <CTAButton to="/real-weddings" variant="primary">
            View All Real Weddings
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// Wedding Data Structure Example
const weddingDataExample = {
  "slug": "anthony-and-linnea",
  "coupleName": "Anthony & Linnea",
  "coverImage": "/wedding-photos/anthony-and-linnea/015.jpg",
  "date": "Summer 2024",
  "location": "Rum River Barn • Hillman, Minnesota",
  "photoCount": 114,
  "intro": "From the ceremony to the last dance..."
};

// Gallery Grid Logic
const galleryGrid = realWeddings.slice(0, 6).map((wedding, index) => {
  // Dynamic data binding for each wedding
  const photoInfo = \`\${wedding.photoCount} Photos\`;
  const venueInfo = wedding.location.split('•')[0].trim();
  
  return {
    image: wedding.coverImage,
    title: wedding.coupleName,
    subtitle: wedding.date,
    details: \`\${photoInfo} • \${venueInfo}\`,
    link: \`/real-weddings/\${wedding.slug}\`
  };
});`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* Love Stories Gallery Section */
.love-stories-section {
  background: var(--blush-pink);
  padding: 100px 0;
}

.section-header.center {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header.center .script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
}

.section-header.center .section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
}

.section-header.center .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.9;
  max-width: 600px;
  margin: 1.5rem auto 0;
  text-align: center;
}

/* Wedding Gallery Grid */
.wedding-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 2px;
  margin-bottom: var(--rhythm-lg);
}

/* Gallery Item Sizes */
.gallery-item:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item:nth-child(6) {
  grid-column: span 2;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-elegant);
}

/* Hover Overlay */
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(107, 78, 61, 0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: var(--transition-elegant);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Overlay Content */
.gallery-couple-names {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
}

.gallery-season {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--champagne-gold);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.gallery-details {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

/* Gallery Footer */
.gallery-footer {
  text-align: center;
  margin-top: 3rem;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .wedding-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
  }
  
  .gallery-item:nth-child(1),
  .gallery-item:nth-child(6) {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .wedding-gallery {
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
  }
  
  .gallery-overlay {
    padding: 1.5rem;
  }
  
  .gallery-couple-names {
    font-size: 1.5rem;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}