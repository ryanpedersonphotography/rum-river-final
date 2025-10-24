import { Link } from 'react-router-dom'
import { realWeddings } from '../data/realWeddings'
import CTAButton from '../components/CTAButton'
import LoveStoriesGalleryWithVariants from '../components/LoveStoriesGalleryWithVariants'
import LoveStoriesGalleryWithFilters from '../components/LoveStoriesGalleryWithFilters'
import LoveStoriesGalleryWithFiveFilters from '../components/LoveStoriesGalleryWithFiveFilters'

export default function LoveStoriesDemoStandalone() {
  return (
    <>
      {/* Love Stories Gallery with Five-Tier Filter System (NEW!) */}
      <LoveStoriesGalleryWithFiveFilters />
      
      {/* Love Stories Gallery with Three-Tier Filter System */}
      <LoveStoriesGalleryWithFilters />
      
      {/* Love Stories Gallery with Simple Color Variants (LOVE_STORIES_GALLERY_001) */}
      <LoveStoriesGalleryWithVariants />
      
      {/* Original Love Stories Gallery Component */}
      <section style={{
        background: '#F4E4E1', // blush-pink
        padding: '100px 0',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              Real Love Stories
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '3rem',
              color: '#6B4E3D',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              Weddings at the Barn
            </h2>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              color: '#2C2416',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '1.5rem auto 0',
              textAlign: 'center'
            }}>
              Every celebration tells a unique story of love, laughter, and happily ever after.
            </p>
          </div>

          {/* Wedding Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '300px',
            gap: '2px',
            marginBottom: '3rem'
          }}>
            {realWeddings.slice(0, 6).map((wedding, index) => (
              <Link
                key={wedding.slug}
                to={`/real-weddings/${wedding.slug}`}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  ...(index === 0 && {
                    gridColumn: 'span 2',
                    gridRow: 'span 2'
                  }),
                  ...(index === 5 && {
                    gridColumn: 'span 2'
                  })
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.gallery-overlay');
                  if (img) img.style.transform = 'scale(1.1)';
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.gallery-overlay');
                  if (img) img.style.transform = 'scale(1)';
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src={wedding.coverImage}
                  alt={`${wedding.coupleName} Wedding`}
                  width="800"
                  height="800"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                <div 
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(to top, rgba(107, 78, 61, 0.8), transparent)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem',
                    opacity: '0',
                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <div style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '1.75rem',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>
                    {wedding.coupleName}
                  </div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1rem',
                    color: '#E4C896',
                    marginBottom: '0.25rem',
                    fontWeight: '500'
                  }}>
                    {wedding.date}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '400'
                  }}>
                    {wedding.photoCount} Photos • {wedding.location.split('•')[0].trim()}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Gallery Footer */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <CTAButton to="/real-weddings" variant="primary">
              View All Real Weddings
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{ 
        background: '#FFFCF8', // cream-pearl
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#2C2416', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Love Stories Gallery Component</h2>
            <p style={{ color: '#6B4E3D', fontFamily: "'Montserrat', sans-serif" }}>Wedding gallery with dynamic grid layout and elegant hover overlays</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`<!-- Love Stories Gallery Component -->
<section className="love-stories-gallery">
  <div className="content-wrapper">
    <!-- Section Header -->
    <div className="section-header">
      <div className="script-accent">Real Love Stories</div>
      <h2 className="section-title">Weddings at the Barn</h2>
      <p className="lead">
        Every celebration tells a unique story of love, laughter, and happily ever after.
      </p>
    </div>

    <!-- Dynamic Wedding Gallery Grid -->
    <div className="wedding-gallery">
      {realWeddings.slice(0, 6).map((wedding, index) => (
        <Link 
          key={wedding.slug}
          to={\`/real-weddings/\${wedding.slug}\`}
          className="gallery-item"
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

    <!-- Call to Action -->
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
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>JavaScript Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`// React Component with Wedding Data Integration
import { Link } from 'react-router-dom'
import { realWeddings } from '../data/realWeddings'
import CTAButton from '../components/CTAButton'

export default function LoveStoriesGallery() {
  return (
    <section className="love-stories-gallery">
      <div className="content-wrapper">
        {/* Dynamic Header */}
        <div className="section-header">
          <div className="script-accent">Real Love Stories</div>
          <h2 className="section-title">Weddings at the Barn</h2>
          <p className="lead">
            Every celebration tells a unique story of love, laughter, and happily ever after.
          </p>
        </div>

        {/* Interactive Gallery Grid */}
        <div className="wedding-gallery">
          {realWeddings.slice(0, 6).map((wedding, index) => (
            <Link
              key={wedding.slug}
              to={\`/real-weddings/\${wedding.slug}\`}
              className="gallery-item"
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}
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
    </section>
  )
}

// Hover Interaction Handlers
const handleHoverEnter = (e) => {
  const img = e.currentTarget.querySelector('img');
  const overlay = e.currentTarget.querySelector('.gallery-overlay');
  if (img) img.style.transform = 'scale(1.1)';
  if (overlay) overlay.style.opacity = '1';
};

const handleHoverLeave = (e) => {
  const img = e.currentTarget.querySelector('img');
  const overlay = e.currentTarget.querySelector('.gallery-overlay');
  if (img) img.style.transform = 'scale(1)';
  if (overlay) overlay.style.opacity = '0';
};

// Wedding Data Structure
const weddingDataStructure = {
  "slug": "anthony-and-linnea",
  "coupleName": "Anthony & Linnea", 
  "coverImage": "/wedding-photos/anthony-and-linnea/015.jpg",
  "date": "Summer 2024",
  "location": "Rum River Barn • Hillman, Minnesota",
  "photoCount": 114,
  "intro": "Beautiful ceremony and celebration..."
};

// Grid Layout Logic
const gridItemStyles = (index) => ({
  ...(index === 0 && { gridColumn: 'span 2', gridRow: 'span 2' }), // First item larger
  ...(index === 5 && { gridColumn: 'span 2' }), // Last item wider
});`}
            </pre>
          </div>

          {/* CSS Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>CSS Styling</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`/* Love Stories Gallery Component */
.love-stories-gallery {
  background: #F4E4E1; /* blush-pink */
  padding: 100px 0;
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Header Styling */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.script-accent {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  color: #9D6B7B; /* dusty-rose */
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #6B4E3D; /* warm-walnut */
  margin: 0 0 1.5rem 0;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #2C2416; /* text-dark */
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
  margin-bottom: 3rem;
}

/* Dynamic Grid Item Sizing */
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
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Gallery Hover Overlay */
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(107, 78, 61, 0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Overlay Text Content */
.gallery-couple-names {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
}

.gallery-season {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #E4C896; /* champagne-gold */
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.gallery-details {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

/* Gallery Footer */
.gallery-footer {
  text-align: center;
  margin-top: 3rem;
}

/* Responsive Design */
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
  
  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .love-stories-gallery {
    padding: 60px 0;
  }
  
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}`}
            </pre>
          </div>

          {/* Key Features */}
          <div>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Key Features</h3>
            <div style={{
              background: '#F4E4E1',
              padding: '2rem',
              borderRadius: '8px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>Dynamic Wedding Data:</strong> Automatically pulls from realWeddings data array</li>
                <li><strong>Responsive Grid Layout:</strong> 4-column desktop, 2-column tablet, 1-column mobile</li>
                <li><strong>Smart Grid Sizing:</strong> First item spans 2x2, last item spans 2x1 for visual hierarchy</li>
                <li><strong>Elegant Hover Effects:</strong> Image zoom and overlay fade with smooth transitions</li>
                <li><strong>Rich Overlay Content:</strong> Couple names, date, photo count, and venue location</li>
                <li><strong>Typography Harmony:</strong> Three-font system (script, serif, sans-serif) for visual hierarchy</li>
                <li><strong>React Router Integration:</strong> Direct navigation to individual wedding pages</li>
                <li><strong>Accessibility Ready:</strong> Proper alt tags, semantic HTML, keyboard navigation</li>
                <li><strong>Performance Optimized:</strong> Image dimensions specified, efficient hover handlers</li>
                <li><strong>Design System Compliant:</strong> Uses consistent spacing, colors, and typography tokens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}