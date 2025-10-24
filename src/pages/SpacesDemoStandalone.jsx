import React, { useState, useEffect } from 'react';

/**
 * SpacesDemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the spaces demo page.
 * Features:
 * - Tabbed venue display with image carousel
 * - Interactive state management for tabs and images
 * - Clean, readable structure for easy component migration
 * - All CSS inline for easy reading
 * - Complete venue spaces implementation with documentation
 */

const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    expandedImages: [
      '/images/2014/04/Loria-Jason-wedding-2-0026.jpg',
      '/images/2014/04/Kliewer-6227225.jpg',
      '/images/2014/04/Kliewer-6226667.jpg',
      '/images/2014/04/Kage0213.jpg',
      '/images/2014/04/wedding-32.jpg',
      '/images/2014/04/Kliewer-6227075.jpg',
      '/images/2014/04/Kliewer-6227270.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0198.jpg',
      '/images/2014/05/LCB_6267.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0365.jpg',
      '/images/2014/05/LB1_6499.jpg',
      '/images/2014/05/LB1_6880.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Built', value: '1920s architecture' },
      { label: 'Features', value: 'Climate controlled' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  },
  bridal: {
    title: 'Bridal Suite',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg',
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg'
    ],
    expandedImages: [
      '/images/2014/05/Loria-Jason-wedding-1-0205.jpg',
      '/images/2014/05/IMG_7929-2.jpg',
      '/images/2014/05/Loria-and-Jason-XORDER-2-0030.jpg',
      '/images/2014/05/LB1_64311.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0007.jpg',
      '/images/2014/05/IMG_8298.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0012.jpg',
      '/images/2014/05/LB1_7342-2.jpg'
    ],
    description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
    features: [
      { label: 'Capacity', value: 'Up to 8 people' },
      { label: 'Amenities', value: 'Full mirror, seating' },
      { label: 'Natural Light', value: 'Large windows' },
      { label: 'Privacy', value: 'Separate entrance' }
    ]
  },
  groom: {
    title: "Groom's Quarters",
    images: [
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
      '/images/venue/details-building-entrance-door.jpg',
      '/images/venue/barn-exterior-front-entrance-concrete-pad.jpg'
    ],
    expandedImages: [
      '/images/2014/05/LB1_7023.jpg',
      '/images/2014/05/Kage0921.jpg',
      '/images/2014/05/Reins-Wedding_1-631.jpg',
      '/images/2014/05/LB1_6739.jpg',
      '/images/2014/05/Reins-Wedding_2-269.jpg',
      '/images/2014/05/LB1_6922.jpg',
      '/images/2014/05/Kage0937.jpg'
    ],
    description: 'A comfortable retreat for the groom and groomsmen, offering a relaxed atmosphere to prepare and celebrate before the ceremony.',
    features: [
      { label: 'Capacity', value: 'Up to 6 people' },
      { label: 'Atmosphere', value: 'Relaxed and private' },
      { label: 'Facilities', value: 'Seating and storage' },
      { label: 'Location', value: 'Separate from bridal' }
    ]
  },
  pavilion: {
    title: 'Garden Pavilion',
    images: [
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg',
      '/images/venue/property-vineyard-rows-landscape.jpg'
    ],
    expandedImages: [
      '/images/2014/05/LCB_6258.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0038.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0004.jpg',
      '/images/2014/05/Loria-Jason-wedding-1-0010.jpg',
      '/images/2014/05/IMG_8503.jpg',
      '/images/2014/05/LCB_6661.jpg',
      '/images/2014/05/LCB_6649.jpg',
      '/images/2014/05/LB2_6386.jpg',
      '/images/2014/05/LCB_6715.jpg'
    ],
    description: 'An enchanting outdoor space perfect for ceremonies or cocktail hours, surrounded by lush gardens and natural beauty.',
    features: [
      { label: 'Setting', value: 'Outdoor garden' },
      { label: 'Use', value: 'Ceremonies, cocktails' },
      { label: 'Surroundings', value: 'Natural gardens' },
      { label: 'Season', value: 'Spring through fall' }
    ]
  }
}

export default function SpacesDemoStandalone() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedGalleries, setExpandedGalleries] = useState({})

  // Safety check
  if (!venueData || !venueData[activeVenue]) {
    return <div>Loading...</div>
  }

  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0)
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  const toggleExpandedGallery = (venue) => {
    setExpandedGalleries(prev => ({
      ...prev,
      [venue]: !prev[venue]
    }))
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    // Add subtle animations for demo
    const venueDisplay = document.querySelector('.venue-display');
    if (venueDisplay) {
      venueDisplay.style.opacity = '0';
      venueDisplay.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        venueDisplay.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        venueDisplay.style.opacity = '1';
        venueDisplay.style.transform = 'translateY(0)';
      }, 100);
    }
  }, [activeVenue]);

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0
    }}>
      
      {/* CSS Animations and Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Discover Our Spaces Section */
        .section-warm {
          background: #FBF8F4;
          padding: 100px 0;
        }
        
        .venue-content {
          padding: 0;
        }
        
        .venue-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .venue-header .script-accent {
          font-family: 'Dancing Script', cursive;
          font-size: 1.75rem;
          color: #9D6B7B;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        
        .venue-header .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: #6B4E3D;
          margin-bottom: 1.5rem;
          font-weight: 400;
          line-height: 1.2;
        }
        
        .venue-header .lead {
          font-size: 1.25rem;
          line-height: 1.7;
          color: #2C2416;
          opacity: 0.9;
          margin: 1.5rem auto 0;
          text-align: center;
          max-width: 600px;
        }
        
        /* Venue Tabs */
        .venue-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .venue-tab {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid #9D6B7B;
          color: #9D6B7B;
          border-radius: 30px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .venue-tab::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .venue-tab:hover::before {
          transform: translateX(100%);
        }
        
        .venue-tab:hover {
          background: #9D6B7B;
          color: white;
          transform: translateY(-2px);
        }
        
        .venue-tab.active {
          background: #9D6B7B;
          color: white;
          box-shadow: 0 4px 12px rgba(157, 107, 123, 0.3);
        }
        
        /* Venue Display */
        .venue-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        
        .venue-main-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        
        .venue-main-image:hover {
          transform: scale(1.02);
        }
        
        .venue-main-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        
        /* Carousel Controls */
        .carousel-controls {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }
        
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .carousel-dot.active {
          background: white;
          transform: scale(1.2);
        }
        
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          opacity: 0;
          z-index: 20;
        }
        
        .venue-main-image:hover .carousel-arrow {
          opacity: 1;
        }
        
        .carousel-arrow:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-arrow.prev {
          left: 1rem;
        }
        
        .carousel-arrow.next {
          right: 1rem;
        }
        
        /* Venue Details */
        .venue-details h3 {
          font-size: 2.5rem;
          color: #2C2416;
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          animation: slideIn 0.6s ease-out;
        }
        
        .venue-details > p {
          font-size: 1.125rem;
          color: #6B4E3D;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          animation: slideIn 0.8s ease-out;
        }
        
        .venue-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .venue-feature {
          text-align: left;
          animation: fadeInUp 0.6s ease-out;
        }
        
        .venue-feature:nth-child(1) { animation-delay: 0.1s; }
        .venue-feature:nth-child(2) { animation-delay: 0.2s; }
        .venue-feature:nth-child(3) { animation-delay: 0.3s; }
        .venue-feature:nth-child(4) { animation-delay: 0.4s; }
        
        .venue-feature h5 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          color: #9D6B7B;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        .venue-feature p {
          font-size: 0.875rem;
          color: #2C2416;
          opacity: 0.8;
          margin: 0;
        }
        
        /* Content wrapper */
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .venue-display {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .venue-tabs {
            gap: 0.625rem;
          }
          
          .venue-tab {
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
          }
          
          .venue-details h3 {
            font-size: 2rem;
          }
          
          .venue-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .venue-header .section-title {
            font-size: 2.5rem;
          }
          
          .section-warm {
            padding: 60px 0;
          }
          
          .venue-main-image img {
            height: 300px;
          }
        }
      `}</style>

      {/* Discover Our Spaces - Tabbed Venue Display */}
      <section className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>Every corner tells a story, every space creates memories</p>
          </div>
          
          <div className="venue-tabs">
            {[
              { key: 'barn', label: 'The Barn' },
              { key: 'bridal', label: 'Bridal Suite' },
              { key: 'groom', label: "Groom's Quarters" },
              { key: 'pavilion', label: 'Garden Pavilion' }
            ].map(tab => (
              <button
                key={tab.key}
                className={`venue-tab ${activeVenue === tab.key ? 'active' : ''}`}
                onClick={() => handleVenueChange(tab.key)}
                aria-pressed={activeVenue === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="venue-display">
            <div className="venue-main-image">
              <img 
                src={venueData[activeVenue].images[currentImageIndex]} 
                alt={venueData[activeVenue].title} 
                width="800" 
                height="500" 
              />
              
              {/* Carousel Controls */}
              {venueData[activeVenue].images.length > 1 && (
                <>
                  <button 
                    className="carousel-arrow prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button 
                    className="carousel-arrow next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    →
                  </button>
                  
                  <div className="carousel-controls">
                    {venueData[activeVenue].images.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="venue-details">
              <h3>{venueData[activeVenue].title}</h3>
              <p>{venueData[activeVenue].description}</p>
              
              <div className="venue-features">
                {venueData[activeVenue].features.map((feature, index) => (
                  <div key={index} className="venue-feature">
                    <h5>{feature.label}</h5>
                    <p>{feature.value}</p>
                  </div>
                ))}
              </div>
              
              {/* Preview Gallery - 3 Images */}
              <div className="venue-preview-gallery">
                <div className="preview-thumbnail-track">
                  {venueData[activeVenue].images.slice(0, 3).map((image, index) => (
                    <div
                      key={`preview-${index}`}
                      className={`preview-thumbnail preview-${index} ${currentImageIndex === index ? 'active' : ''} ${expandedGalleries[activeVenue] ? 'morphing' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                      data-preview-index={index}
                    >
                      <img src={image} alt={`${venueData[activeVenue].title} view ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Expand Gallery Button */}
              <div className="gallery-expand-section">
                <button 
                  className="gallery-expand-button"
                  onClick={() => toggleExpandedGallery(activeVenue)}
                >
                  <span className="button-text">
                    {expandedGalleries[activeVenue] 
                      ? `Hide All ${venueData[activeVenue].title} Images` 
                      : `View All ${venueData[activeVenue].title} Images`
                    }
                  </span>
                  <span className="button-icon">{expandedGalleries[activeVenue] ? '↑' : '↓'}</span>
                </button>
              </div>
              
              {/* Expanded Masonry Gallery */}
              <div className={`expanded-gallery ${expandedGalleries[activeVenue] ? 'expanded' : ''}`}>
                <div className="masonry-gallery">
                  {/* First 3 images that morph from preview */}
                  {venueData[activeVenue].images.slice(0, 3).map((image, index) => (
                    <div 
                      key={`morph-${index}`} 
                      className={`masonry-item morph-item morph-${index} ${expandedGalleries[activeVenue] ? 'morphed' : ''}`}
                      data-morph-index={index}
                    >
                      <img src={image} alt={`${venueData[activeVenue].title} expanded ${index + 1}`} />
                    </div>
                  ))}
                  {/* Additional images that slide up */}
                  {venueData[activeVenue].expandedImages?.map((image, index) => (
                    <div 
                      key={`slide-${index}`} 
                      className={`masonry-item slide-item ${expandedGalleries[activeVenue] ? 'slid-up' : ''}`}
                      style={{animationDelay: `${0.4 + (index * 0.08)}s`}}
                    >
                      <img 
                        src={image} 
                        alt={`${venueData[activeVenue].title} additional ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{
        background: '#FEFDFB',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              color: '#2C2416',
              marginBottom: '1rem'
            }}>
              Spaces Layout Implementation
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6B4E3D',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Complete code and documentation for the tabbed venue spaces section above
            </p>
          </div>

          {/* HTML Structure */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              HTML Structure
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`<!-- Discover Our Spaces - Tabbed Venue Display -->
<section className="section-warm">
  <div className="content-wrapper venue-content">
    <div className="venue-header center">
      <div className="script-accent">Your Perfect Setting</div>
      <h2 className="section-title">Discover Our Spaces</h2>
      <p className="lead">
        Every corner tells a story, every space creates memories
      </p>
    </div>
    
    <!-- Tab Navigation -->
    <div className="venue-tabs">
      {tabs.map(tab => (
        <button
          key={tab.key}
          className={\`venue-tab \${activeVenue === tab.key ? 'active' : ''}\`}
          onClick={() => handleVenueChange(tab.key)}
          aria-pressed={activeVenue === tab.key}
        >
          {tab.label}
        </button>
      ))}
    </div>
    
    <!-- Content Display -->
    <div className="venue-display">
      <div className="venue-main-image">
        <img 
          src={venueData[activeVenue].images[currentImageIndex]} 
          alt={venueData[activeVenue].title} 
          width="800" 
          height="500" 
        />
        
        <!-- Carousel Controls -->
        <button className="carousel-arrow prev" onClick={prevImage}>←</button>
        <button className="carousel-arrow next" onClick={nextImage}>→</button>
        
        <div className="carousel-controls">
          {venueData[activeVenue].images.map((_, index) => (
            <button
              key={index}
              className={\`carousel-dot \${currentImageIndex === index ? 'active' : ''}\`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="venue-details">
        <h3>{venueData[activeVenue].title}</h3>
        <p>{venueData[activeVenue].description}</p>
        <div className="venue-features">
          {venueData[activeVenue].features.map((feature, index) => (
            <div key={index} className="venue-feature">
              <h5>{feature.label}</h5>
              <p>{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Functionality */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              JavaScript Functionality
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`// Spaces Component with State Management
import React, { useState, useEffect } from 'react'

// Venue Data Structure
const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Built', value: '1920s architecture' },
      { label: 'Features', value: 'Climate controlled' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  },
  bridal: {
    title: 'Bridal Suite',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg'
    ],
    description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
    features: [
      { label: 'Capacity', value: 'Up to 8 people' },
      { label: 'Amenities', value: 'Full mirror, seating' },
      { label: 'Natural Light', value: 'Large windows' },
      { label: 'Privacy', value: 'Separate entrance' }
    ]
  }
  // ... other venue objects
}

export default function SpacesDemoStandalone() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle tab switching with image reset
  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0) // Reset to first image
  }

  // Image carousel navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }

  // Add transition animations when venue changes
  useEffect(() => {
    const venueDisplay = document.querySelector('.venue-display');
    if (venueDisplay) {
      venueDisplay.style.opacity = '0';
      venueDisplay.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        venueDisplay.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        venueDisplay.style.opacity = '1';
        venueDisplay.style.transform = 'translateY(0)';
      }, 100);
    }
  }, [activeVenue]);

  return (
    // Component JSX here...
  )
}`}
            </pre>
          </div>

          {/* CSS Styles */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              CSS Styles
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`/* Discover Our Spaces Section */
.section-warm {
  background: #FBF8F4;
  padding: 100px 0;
}

.venue-content {
  padding: 0;
}

.venue-header {
  text-align: center;
  margin-bottom: 3rem;
}

.venue-header .script-accent {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  color: #9D6B7B;
  margin-bottom: 1rem;
  font-weight: 400;
}

.venue-header .section-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #6B4E3D;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
}

.venue-header .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #2C2416;
  opacity: 0.9;
  margin: 1.5rem auto 0;
  text-align: center;
  max-width: 600px;
}

/* Venue Tabs */
.venue-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.venue-tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid #9D6B7B;
  color: #9D6B7B;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.venue-tab::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.venue-tab:hover::before {
  transform: translateX(100%);
}

.venue-tab:hover {
  background: #9D6B7B;
  color: white;
  transform: translateY(-2px);
}

.venue-tab.active {
  background: #9D6B7B;
  color: white;
  box-shadow: 0 4px 12px rgba(157, 107, 123, 0.3);
}

/* Venue Display */
.venue-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.venue-main-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.venue-main-image:hover {
  transform: scale(1.02);
}

.venue-main-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

/* Carousel Controls */
.carousel-controls {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot.active {
  background: white;
  transform: scale(1.2);
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  opacity: 0;
  z-index: 20;
}

.venue-main-image:hover .carousel-arrow {
  opacity: 1;
}

.carousel-arrow:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow.prev {
  left: 1rem;
}

.carousel-arrow.next {
  right: 1rem;
}

/* Venue Details */
.venue-details h3 {
  font-size: 1.875rem;
  color: #2C2416;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}

.venue-details > p {
  font-size: 1.125rem;
  color: #6B4E3D;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.venue-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.venue-feature {
  text-align: left;
}

.venue-feature h5 {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #9D6B7B;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.venue-feature p {
  font-size: 0.875rem;
  color: #2C2416;
  opacity: 0.8;
  margin: 0;
}

/* Preview Gallery - Perfect Width Distribution */
.venue-preview-gallery {
  margin: 2.5rem 0 2rem 0;
  width: 100%;
}

.preview-thumbnail-track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.preview-thumbnail {
  position: relative;
  aspect-ratio: 16/10;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  background: #f8f8f8;
}

.preview-thumbnail.morphing {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
  pointer-events: none;
}

.preview-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(157, 107, 123, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.preview-thumbnail:hover::before {
  opacity: 1;
}

.preview-thumbnail.active {
  border-color: #9D6B7B;
  box-shadow: 0 12px 36px rgba(157, 107, 123, 0.3);
  transform: translateY(-4px) scale(1.02);
}

.preview-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-thumbnail:hover img {
  transform: scale(1.08);
}

/* Gallery Expand Section */
.gallery-expand-section {
  text-align: center;
  margin: 2rem 0 2.5rem 0;
}

.gallery-expand-button {
  background: linear-gradient(135deg, rgba(157, 107, 123, 0.05), transparent);
  border: 2px solid #9D6B7B;
  color: #9D6B7B;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.gallery-expand-button .button-icon {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 1.2rem;
  line-height: 1;
}

.gallery-expand-button::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #9D6B7B, #C899A3, #9D6B7B);
  border-radius: 50px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease;
  animation: shimmerGradient 3s linear infinite;
}

@keyframes shimmerGradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.gallery-expand-button:hover::before {
  opacity: 0.2;
}

.gallery-expand-button:hover {
  background: #9D6B7B;
  color: white;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 30px rgba(157, 107, 123, 0.3);
}

.gallery-expand-button:hover .button-icon {
  transform: translateY(3px);
}

/* Expanded Gallery - Dramatic Masonry */
.expanded-gallery {
  position: relative;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.5s ease;
}

.expanded-gallery.expanded {
  max-height: 3000px;
  opacity: 1;
}

.masonry-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
  position: relative;
}

/* Masonry Items */
.masonry-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background: #f8f8f8;
  transform-origin: center center;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Morph Animation for First 3 Images */
.morph-item {
  opacity: 0;
  transform: scale(0.3) translateY(-100px);
}

.morph-item.morph-0 {
  grid-column: span 2;
  grid-row: span 2;
  aspect-ratio: 4/3;
}

.morph-item.morph-1 {
  aspect-ratio: 3/4;
}

.morph-item.morph-2 {
  aspect-ratio: 1/1;
}

.morph-item.morphed {
  animation: morphExpand 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes morphExpand {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-100px) rotate(-10deg);
  }
  40% {
    opacity: 0.5;
    transform: scale(0.6) translateY(-50px) rotate(-5deg);
  }
  70% {
    opacity: 0.9;
    transform: scale(1.1) translateY(10px) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(0deg);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
  }
}

/* Slide Up Animation for Additional Images */
.slide-item {
  opacity: 0;
  transform: translateY(150px) scale(0.8);
  aspect-ratio: 16/10;
}

.slide-item:nth-child(odd) {
  aspect-ratio: 3/4;
}

.slide-item:nth-child(3n) {
  aspect-ratio: 1/1;
  grid-column: span 1;
}

.slide-item:nth-child(5n) {
  grid-column: span 2;
  aspect-ratio: 16/9;
}

.slide-item.slid-up {
  animation: slideUpBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes slideUpBounce {
  0% {
    opacity: 0;
    transform: translateY(150px) scale(0.8) rotate(5deg);
  }
  50% {
    opacity: 0.7;
    transform: translateY(50px) scale(0.9) rotate(-2deg);
  }
  75% {
    opacity: 0.9;
    transform: translateY(-10px) scale(1.02) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
}

/* Hover Effects for All Masonry Items */
.masonry-item:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 20px 50px rgba(157, 107, 123, 0.25);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 10;
}

.masonry-item:hover img {
  transform: scale(1.1);
}

.masonry-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(157, 107, 123, 0.1) 50%,
    rgba(157, 107, 123, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.masonry-item:hover::after {
  opacity: 1;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .venue-display {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .venue-tabs {
    gap: 0.625rem;
  }
  
  .venue-tab {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
  
  .venue-details h3 {
    font-size: 2rem;
  }
  
  .venue-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .venue-header .section-title {
    font-size: 2.5rem;
  }
  
  .section-warm {
    padding: 60px 0;
  }
  
  .venue-main-image img {
    height: 300px;
  }
  
  .preview-thumbnail-track {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
  
  .preview-thumbnail {
    aspect-ratio: 16/11;
  }
  
  .masonry-gallery {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }
  
  .gallery-expand-button {
    padding: 0.875rem 2rem;
    font-size: 0.8rem;
  }
  
  .gallery-expand-button .button-icon {
    font-size: 1rem;
  }
}`}
            </pre>
          </div>

          {/* Component Features */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              Key Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>🎯 Interactive Design</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Tabbed navigation with active state management</li>
                  <li>Image carousel with dots and arrow controls</li>
                  <li>Smooth transitions between venue content</li>
                  <li>Hover effects with shimmer animations</li>
                  <li>Feature grid with staggered animations</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>⚡ Performance</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>React state management for tabs and carousel</li>
                  <li>Efficient re-rendering with proper key usage</li>
                  <li>CSS transforms for smooth animations</li>
                  <li>Optimized image display and transitions</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>📱 Responsive Design</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Mobile-first grid system adaptation</li>
                  <li>Touch-friendly carousel controls</li>
                  <li>Responsive typography and spacing</li>
                  <li>Flexible tab layout with wrapping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}