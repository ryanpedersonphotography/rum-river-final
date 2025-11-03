import React, { useState, useEffect } from 'react';

/**
 * SpacesCompactStandalone Component
 * 
 * Compact variation of the spaces demo with smaller text area and image row below description
 * Features:
 * - Reduced text area for more compact layout
 * - Row of smaller images below description that integrate with carousel
 * - Clickable thumbnail row for enhanced user interaction
 * - All original functionality preserved
 */

const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg',
      '/images/venue/barn-exterior-entrance-lighting-view.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg'
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
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
      '/images/venue/details-swing-rustic-romance.jpg'
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
      '/images/venue/property-vineyard-rows-landscape.jpg',
      '/images/venue/barn-exterior-deck-swing-golden-hour.jpg'
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

export default function SpacesCompactStandalone() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0)
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
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
          padding: 80px 0;
        }
        
        .venue-content {
          padding: 0;
        }
        
        .venue-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .venue-header .script-accent {
          font-family: 'Dancing Script', cursive;
          font-size: 1.5rem;
          color: #9D6B7B;
          margin-bottom: 0.75rem;
          font-weight: 400;
        }
        
        .venue-header .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.75rem;
          color: #6B4E3D;
          margin-bottom: 1rem;
          font-weight: 400;
          line-height: 1.2;
        }
        
        .venue-header .lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #2C2416;
          opacity: 0.9;
          margin: 1rem auto 0;
          text-align: center;
          max-width: 550px;
        }
        
        /* Venue Tabs */
        .venue-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
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
        
        /* Venue Display - Compact Layout */
        .venue-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
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
          height: 450px;
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
        
        /* Venue Details - Compact */
        .venue-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .venue-details h3 {
          font-size: 1.875rem;
          color: #2C2416;
          margin-bottom: 0;
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          animation: slideIn 0.6s ease-out;
        }
        
        .venue-details > p {
          font-size: 1rem;
          color: #6B4E3D;
          line-height: 1.7;
          margin: 0;
          animation: slideIn 0.8s ease-out;
        }
        
        /* Image Thumbnails Row */
        .image-thumbnails {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        
        .thumbnail {
          flex-shrink: 0;
          width: 80px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
        }
        
        .thumbnail:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        
        .thumbnail.active {
          border-color: #9D6B7B;
          box-shadow: 0 4px 12px rgba(157, 107, 123, 0.3);
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .thumbnail:hover img {
          transform: scale(1.1);
        }
        
        /* Overlay for active state */
        .thumbnail.active::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(157, 107, 123, 0.2);
          pointer-events: none;
        }
        
        .venue-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
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
          font-size: 0.95rem;
          color: #9D6B7B;
          margin-bottom: 0.375rem;
          font-weight: 500;
        }
        
        .venue-feature p {
          font-size: 0.8rem;
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
            gap: 2rem;
          }
          
          .venue-tabs {
            gap: 0.625rem;
          }
          
          .venue-tab {
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
          }
          
          .venue-details h3 {
            font-size: 1.5rem;
          }
          
          .venue-features {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .venue-header .section-title {
            font-size: 2.25rem;
          }
          
          .section-warm {
            padding: 50px 0;
          }
          
          .venue-main-image img {
            height: 280px;
          }
          
          .image-thumbnails {
            gap: 0.5rem;
          }
          
          .thumbnail {
            width: 70px;
            height: 50px;
          }
        }
      `}</style>

      {/* Discover Our Spaces - Compact Tabbed Venue Display */}
      <section className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead" style={{ margin: '1rem auto 0', textAlign: 'center' }}>Every corner tells a story, every space creates memories</p>
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
                height="450" 
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
              
              {/* Image Thumbnails Row */}
              <div className="image-thumbnails">
                {venueData[activeVenue].images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${venueData[activeVenue].title} view ${index + 1}`}
                      width="80"
                      height="60"
                    />
                  </div>
                ))}
              </div>
              
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
      </section>

    </div>
  );
}