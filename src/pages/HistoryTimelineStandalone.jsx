import React, { useEffect, useRef, useState } from 'react';
import { Timeline } from '@knight-lab/timelinejs';
import '@knight-lab/timelinejs/dist/css/timeline.css';
import Icon from '../components/Icon';
import { historyTimeline } from '../data/historyTimeline';

export default function HistoryTimelineStandalone() {
  const timelineRef = useRef(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Historical photos data with timeline years
  const historicalPhotos = [
    {
      year: 1914,
      image: "/images/historical/selmer-family-winter-woodpile-1940s.jpg",
      alt: "Selmer family on woodpile during Minnesota winter, 1940s",
      title: "Norwegian Settlers (1914-1959)",
      description: "Sigvart and Helga Selmer on their woodpile during a harsh Minnesota winter, showcasing the self-sufficient lifestyle of early Norwegian settlers."
    },
    {
      year: 1932,
      image: "/images/historical/lumber-preparation-white-pine-1930s.jpg",
      alt: "Processing giant white pine logs, 1930s",
      title: "Processing the Giant Pine (1932)",
      description: "Processing the massive white pine that would later become the lumber for the iconic White Barn. It took seven horses to haul this log to the farm."
    },
    {
      year: 1942,
      image: "/images/historical/early-barn-construction-1940s.jpg",
      alt: "White Barn construction, 1942-1952",
      title: "White Barn Construction (1942-1952)",
      description: "Construction of the historic White Barn using lumber from the giant white pine, dried and aged for over 20 years before use."
    },
    {
      year: 1959,
      image: "/images/historical/harold-selmer-dairy-cow-farming.jpg",
      alt: "Harold Selmer with dairy cow",
      title: "Harold's Farming Era (1959-2003)",
      description: "Harold Selmer with one of his dairy cows, continuing the family farming tradition for over 40 years until selling to the Buzzell family."
    },
    {
      year: 1940,
      image: "/images/historical/stone-clearing-farming-work-1940s.jpg",
      alt: "Stone clearing and farming work, 1940s",
      title: "Land Clearing & Preparation",
      description: "Family members clearing stones from fields - the backbreaking work required to transform wooded land into productive farmland."
    },
    {
      year: 1970,
      image: "/images/historical/dairy-cattle-operations-1970s.jpg",
      alt: "Dairy cattle operations, 1970s",
      title: "Dairy Operations (1970s)",
      description: "Harold's successful dairy operation at its peak, with Holstein cattle grazing the same fields where events are held today."
    }
  ];

  useEffect(() => {
    if (timelineRef.current) {
      // Initialize TimelineJS
      new Timeline(timelineRef.current, historyTimeline, {
        height: 650,
        start_at_slide: 0,
        default_bg_color: { r: 255, g: 255, b: 255 },
        timenav_height: 200,
        timenav_height_percentage: 30,
        scale_factor: 2,
        font: 'montserrat-playfair'
      });
    }
  }, []);

  // Carousel navigation functions
  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % historicalPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + historicalPhotos.length) % historicalPhotos.length);
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

  // Auto-advance carousel (only when not paused)
  useEffect(() => {
    if (isCarouselPaused) return;
    
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % historicalPhotos.length);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval);
  }, [historicalPhotos.length, isCarouselPaused]);

  return (
    <>
      <style>{`
        .history-section {
          background: white;
          padding: 0;
          min-height: 100vh;
        }

        .section {
          padding: 4rem 0;
        }

        .section-cream {
          background: var(--cream-pearl);
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .venue-discovery-content {
          text-align: center;
          margin-bottom: 3rem;
        }

        .venue-discovery-content.center {
          text-align: center;
        }

        .script-accent {
          font-family: var(--font-script);
          font-size: 1.75rem;
          color: var(--dusty-rose);
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 3rem;
          color: var(--warm-walnut);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .lead {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--warm-walnut);
          opacity: 0.8;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Timeline Styles */
        .timeline-container {
          width: 100%;
          height: 650px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          overflow: hidden;
          margin-bottom: 4rem;
        }

        /* Historical Photo Carousel */
        .carousel-container {
          position: relative;
          margin-bottom: 4rem;
        }


        /* Card Carousel */
        .photo-carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease;
          gap: 2rem;
          padding: 0 2rem;
        }

        .carousel-slide {
          flex: 0 0 320px;
          position: relative;
        }

        .photo-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 1px solid rgba(212, 165, 116, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        .photo-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .photo-card-content {
          padding: 1.5rem;
        }

        .photo-card h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          color: var(--warm-walnut);
          margin-bottom: 0.5rem;
        }

        .photo-card p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--sage-green);
          margin: 0;
        }

        /* Carousel Navigation */
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border: 2px solid var(--sage-green);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 3;
          color: var(--warm-walnut);
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .carousel-nav:hover {
          background: var(--dusty-rose);
          border-color: var(--dusty-rose);
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(157, 107, 123, 0.3);
        }

        .carousel-nav.prev {
          left: -30px;
        }

        .carousel-nav.next {
          right: -30px;
        }


        /* Carousel Indicators */
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .carousel-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--sage-green);
          opacity: 0.4;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-indicator.active {
          background: var(--dusty-rose);
          opacity: 1;
          transform: scale(1.2);
        }

        .carousel-indicator:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }

        /* Historic Remnants Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 1px solid rgba(212, 165, 116, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        .location-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .location-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--champagne-gold) 0%, var(--dusty-rose) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .location-icon {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .location-text h3 {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 400;
          color: var(--warm-walnut);
          margin-bottom: 1rem;
        }

        .location-text p {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.7;
          color: var(--sage-green);
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .script-accent {
            font-size: 1.5rem;
          }

          .lead {
            font-size: 1.125rem;
          }

          .timeline-container {
            height: 500px;
          }

          /* Mobile Carousel Styles */

          .carousel-track {
            padding: 0 1rem;
          }

          .carousel-slide {
            flex: 0 0 280px;
          }

          .photo-card img {
            height: 200px;
          }

          .photo-card-content {
            padding: 1.25rem;
          }

          .photo-card h3 {
            font-size: 1.125rem;
          }

          .photo-card p {
            font-size: 0.9rem;
          }

          .carousel-nav {
            width: 50px;
            height: 50px;
          }

          .carousel-nav.prev {
            left: -20px;
          }

          .carousel-nav.next {
            right: -20px;
          }


          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .testimonial-card {
            padding: 1.5rem;
          }

          .location-item {
            gap: 1rem;
          }

          .location-icon {
            width: 50px;
            height: 50px;
          }

          .location-text h3 {
            font-size: 1.5rem;
          }
        }

        /* Extra small screens */
        @media (max-width: 480px) {

          .carousel-track {
            padding: 0 0.5rem;
          }

          .carousel-slide {
            flex: 0 0 250px;
          }

          .photo-card img {
            height: 180px;
          }

          .photo-card-content {
            padding: 1rem;
          }

          .photo-card h3 {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="history-section">
        {/* Timeline Section */}
        <section className="section section-cream">
          <div className="content-wrapper">
            <div className="venue-discovery-content center">
              <div className="script-accent">Journey Through Time</div>
              <h2 className="section-title">The History of Rum River Barn & Vineyard</h2>
              <p className="lead">Explore our rich heritage from Norwegian settlers to Minnesota's premier venue</p>
            </div>

            {/* TimelineJS Container */}
            <div
              ref={timelineRef}
              className="timeline-container"
            ></div>
          </div>
        </section>

        {/* Historical Photo Gallery */}
        <section className="section">
          <div className="content-wrapper">
            <div className="venue-discovery-content center">
              <div className="script-accent">Through the Years</div>
              <h2 className="section-title">Historical Photo Gallery</h2>
              <p className="lead">Authentic photographs from the Selmer family archives spanning 100+ years</p>
            </div>

            <div className="carousel-container">
              {/* Photo Carousel */}
              <div 
                className="photo-carousel"
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
              >
                <div 
                  className="carousel-track"
                  style={{
                    transform: `translateX(calc(-${currentPhotoIndex * (320 + 32)}px + 50% - 160px))`
                  }}
                >
                  {historicalPhotos.map((photo, index) => (
                    <div key={index} className="carousel-slide">
                      <div className="photo-card">
                        <img
                          src={photo.image}
                          alt={photo.alt}
                        />
                        <div className="photo-card-content">
                          <h3>{photo.title}</h3>
                          <p>{photo.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                  className="carousel-nav prev" 
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                >
                  <Icon name="arrow-left" size="md" />
                </button>
                <button 
                  className="carousel-nav next" 
                  onClick={nextPhoto}
                  aria-label="Next photo"
                >
                  <Icon name="arrow-right" size="md" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                {historicalPhotos.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => goToPhoto(index)}
                    aria-label={`Go to photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Historical Highlights */}
        <section className="section section-cream">
          <div className="content-wrapper">
            <div className="venue-discovery-content center">
              <div className="script-accent">Living History</div>
              <h2 className="section-title">Historic Remnants</h2>
              <p className="lead">See pieces of history preserved throughout our property</p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="location-item">
                  <div className="location-icon"><Icon name="building" size="lg" color="white" /></div>
                  <div className="location-text">
                    <h3>The White Barn</h3>
                    <p>
                      Constructed from a virgin white pine found in 1932, the lumber was dried for 10 years,
                      hand-sawed, and aged another 10 years before construction. The west roof was sheeted entirely by one tree.
                    </p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="location-item">
                  <div className="location-icon"><Icon name="cog" size="lg" color="white" /></div>
                  <div className="location-text">
                    <h3>Norwegian Plow</h3>
                    <p>
                      At our entry sits the horse-driven plow the Selmers brought from Norway in 1914.
                      It was used to clear the vast wooded area to create open land for crops.
                    </p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="location-item">
                  <div className="location-icon"><Icon name="home" size="lg" color="white" /></div>
                  <div className="location-text">
                    <h3>Bridal Room</h3>
                    <p>
                      The original one-room house built by Sigvart and Helga Selmer in 1914 still remains on the property,
                      now serving as the bridal dressing room - a perfect blend of history and modern celebration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="location-item">
                  <div className="location-icon"><Icon name="globe" size="lg" color="white" /></div>
                  <div className="location-text">
                    <h3>Tibbett's Brook</h3>
                    <p>
                      Created by the Tibbett's Logging Company to transport pine logs to the Rum River and down to the Twin Cities.
                      Remnants of logging camps from over a century ago remain on the banks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="location-item">
                  <div className="location-icon"><Icon name="wrench" size="lg" color="white" /></div>
                  <div className="location-text">
                    <h3>Original Tools</h3>
                    <p>
                      Historic hand saws, hay sickles, the horse-drawn scoop shovel used for six weeks to dig the basement,
                      oil lamps, and wood-burning stoves tell the story of pioneer life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="location-item">
                  <div className="location-icon"><Icon name="sparkles" size="lg" color="white" /></div>
                  <div className="location-text">
                    <h3>The Vineyard</h3>
                    <p>
                      Planted in 2003, our three acres feature 14 grape varietals developed by the University of Minnesota,
                      bringing a new agricultural tradition to this historic farming land.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Code Documentation Section */}
      <section style={{ 
        background: 'var(--warm-cream)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem' }}>History Timeline Component Code</h2>
            <p style={{ color: 'var(--sage-green)' }}>Complete implementation guide for the Journey Through Time section with TimelineJS and historical galleries</p>
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
{`<!-- History Timeline Section - Journey Through Time -->
<section className="history-section">
  
  <!-- Interactive Timeline -->
  <section className="section section-cream">
    <div className="content-wrapper">
      <!-- Section Header -->
      <div className="venue-discovery-content center">
        <div className="script-accent">Journey Through Time</div>
        <h2 className="section-title">The History of Rum River Barn & Vineyard</h2>
        <p className="lead">Explore our rich heritage from Norwegian settlers to Minnesota's premier venue</p>
      </div>

      <!-- TimelineJS Container -->
      <div ref={timelineRef} className="timeline-container"></div>
    </div>
  </section>

  <!-- Historical Photo Gallery -->
  <section className="section">
    <div className="content-wrapper">
      <div className="venue-discovery-content center">
        <div className="script-accent">Through the Years</div>
        <h2 className="section-title">Historical Photo Gallery</h2>
        <p className="lead">Authentic photographs from the Selmer family archives spanning 100+ years</p>
      </div>

      <!-- Photo Grid -->
      <div className="photo-gallery">
        <!-- Photo Cards -->
        <div className="photo-card">
          <img src="/images/historical/selmer-family-winter-woodpile-1940s.jpg" 
               alt="Selmer family on woodpile during Minnesota winter, 1940s" />
          <div className="photo-card-content">
            <h3>Norwegian Settlers (1914-1959)</h3>
            <p>Sigvart and Helga Selmer on their woodpile during a harsh Minnesota winter...</p>
          </div>
        </div>
        
        <!-- More photo cards... -->
      </div>
    </div>
  </section>

  <!-- Historic Remnants -->
  <section className="section section-cream">
    <div className="content-wrapper">
      <div className="venue-discovery-content center">
        <div className="script-accent">Living History</div>
        <h2 className="section-title">Historic Remnants</h2>
        <p className="lead">See pieces of history preserved throughout our property</p>
      </div>

      <!-- Remnants Grid -->
      <div className="testimonials-grid">
        <!-- Historic Feature Cards -->
        <div className="testimonial-card">
          <div className="location-item">
            <div className="location-icon">
              <Icon name="building" size="lg" color="white" />
            </div>
            <div className="location-text">
              <h3>The White Barn</h3>
              <p>Constructed from a virgin white pine found in 1932...</p>
            </div>
          </div>
        </div>
        
        <!-- More historic feature cards... -->
      </div>
    </div>
  </section>
</section>`}
            </pre>
          </div>

          {/* React Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>React Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`import React, { useEffect, useRef } from 'react';
import { Timeline } from '@knight-lab/timelinejs';
import '@knight-lab/timelinejs/dist/css/timeline.css';
import Icon from '../components/Icon';
import { historyTimeline } from '../data/historyTimeline';

export default function HistoryTimelineComponent() {
  const timelineRef = useRef(null);

  // Initialize TimelineJS on component mount
  useEffect(() => {
    if (timelineRef.current) {
      new Timeline(timelineRef.current, historyTimeline, {
        height: 650,
        start_at_slide: 0,
        default_bg_color: { r: 255, g: 255, b: 255 },
        timenav_height: 200,
        timenav_height_percentage: 30,
        scale_factor: 2,
        font: 'montserrat-playfair'
      });
    }
  }, []);

  // Historical photo data
  const historicalPhotos = [
    {
      image: "/images/historical/selmer-family-winter-woodpile-1940s.jpg",
      alt: "Selmer family on woodpile during Minnesota winter, 1940s",
      title: "Norwegian Settlers (1914-1959)",
      description: "Sigvart and Helga Selmer on their woodpile during a harsh Minnesota winter, showcasing the self-sufficient lifestyle of early Norwegian settlers."
    },
    {
      image: "/images/historical/lumber-preparation-white-pine-1930s.jpg",
      alt: "Processing giant white pine logs, 1930s",
      title: "Processing the Giant Pine (1932)",
      description: "Processing the massive white pine that would later become the lumber for the iconic White Barn. It took seven horses to haul this log to the farm."
    },
    {
      image: "/images/historical/early-barn-construction-1940s.jpg",
      alt: "White Barn construction, 1942-1952",
      title: "White Barn Construction (1942-1952)",
      description: "Construction of the historic White Barn using lumber from the giant white pine, dried and aged for over 20 years before use."
    },
    // ... more photos
  ];

  // Historic remnants data
  const historicRemnants = [
    {
      icon: "building",
      title: "The White Barn",
      description: "Constructed from a virgin white pine found in 1932, the lumber was dried for 10 years, hand-sawed, and aged another 10 years before construction. The west roof was sheeted entirely by one tree."
    },
    {
      icon: "cog",
      title: "Norwegian Plow",
      description: "At our entry sits the horse-driven plow the Selmers brought from Norway in 1914. It was used to clear the vast wooded area to create open land for crops."
    },
    {
      icon: "home",
      title: "Bridal Room",
      description: "The original one-room house built by Sigvart and Helga Selmer in 1914 still remains on the property, now serving as the bridal dressing room - a perfect blend of history and modern celebration."
    },
    // ... more remnants
  ];

  return (
    <section className="history-section">
      {/* Timeline Section */}
      <TimelineSection timelineRef={timelineRef} />
      
      {/* Photo Gallery Section */}
      <PhotoGallerySection photos={historicalPhotos} />
      
      {/* Historic Remnants Section */}
      <HistoricRemnantsSection remnants={historicRemnants} />
    </section>
  );
}

// Timeline Section Component
function TimelineSection({ timelineRef }) {
  return (
    <section className="section section-cream">
      <div className="content-wrapper">
        <div className="venue-discovery-content center">
          <div className="script-accent">Journey Through Time</div>
          <h2 className="section-title">The History of Rum River Barn & Vineyard</h2>
          <p className="lead">Explore our rich heritage from Norwegian settlers to Minnesota's premier venue</p>
        </div>
        <div ref={timelineRef} className="timeline-container"></div>
      </div>
    </section>
  );
}

// Photo Gallery Section Component
function PhotoGallerySection({ photos }) {
  return (
    <section className="section">
      <div className="content-wrapper">
        <div className="venue-discovery-content center">
          <div className="script-accent">Through the Years</div>
          <h2 className="section-title">Historical Photo Gallery</h2>
          <p className="lead">Authentic photographs from the Selmer family archives spanning 100+ years</p>
        </div>
        
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <PhotoCard key={index} {...photo} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Photo Card Component
function PhotoCard({ image, alt, title, description }) {
  return (
    <div className="photo-card">
      <img src={image} alt={alt} />
      <div className="photo-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Historic Remnants Section Component
function HistoricRemnantsSection({ remnants }) {
  return (
    <section className="section section-cream">
      <div className="content-wrapper">
        <div className="venue-discovery-content center">
          <div className="script-accent">Living History</div>
          <h2 className="section-title">Historic Remnants</h2>
          <p className="lead">See pieces of history preserved throughout our property</p>
        </div>
        
        <div className="testimonials-grid">
          {remnants.map((remnant, index) => (
            <RemnantCard key={index} {...remnant} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Remnant Card Component
function RemnantCard({ icon, title, description }) {
  return (
    <div className="testimonial-card">
      <div className="location-item">
        <div className="location-icon">
          <Icon name={icon} size="lg" color="white" />
        </div>
        <div className="location-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}`}
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
{`/* History Timeline Section - Journey Through Time */
.history-section {
  background: white;
  padding: 0;
  min-height: 100vh;
}

.section {
  padding: 4rem 0;
}

.section-cream {
  background: var(--cream-pearl);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.venue-discovery-content {
  text-align: center;
  margin-bottom: 3rem;
}

.script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--warm-walnut);
  opacity: 0.8;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Timeline Styles */
.timeline-container {
  width: 100%;
  height: 650px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  margin-bottom: 4rem;
}

/* Historical Photo Gallery */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.photo-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(212, 165, 116, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.photo-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.photo-card-content {
  padding: 1.5rem;
}

.photo-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--warm-walnut);
  margin-bottom: 0.5rem;
}

.photo-card p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--sage-green);
  margin: 0;
}

/* Historic Remnants Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(212, 165, 116, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

/* Historic Feature Icons */
.location-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.location-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--champagne-gold) 0%, var(--dusty-rose) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.testimonial-card:hover .location-icon {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.location-text h3 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--warm-walnut);
  margin-bottom: 1rem;
}

.location-text p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--sage-green);
  margin: 0;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .script-accent {
    font-size: 1.5rem;
  }

  .lead {
    font-size: 1.125rem;
  }

  .timeline-container {
    height: 500px;
  }

  .photo-gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }

  .location-item {
    gap: 1rem;
  }

  .location-icon {
    width: 50px;
    height: 50px;
  }

  .location-text h3 {
    font-size: 1.5rem;
  }
}

/* Loading and Animation States */
.photo-card, .testimonial-card {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.photo-card:nth-child(1) { animation-delay: 0.1s; }
.photo-card:nth-child(2) { animation-delay: 0.2s; }
.photo-card:nth-child(3) { animation-delay: 0.3s; }

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

/* Timeline Customization */
.tl-timeline {
  font-family: var(--font-body) !important;
}

.tl-headline {
  font-family: var(--font-display) !important;
  color: var(--warm-walnut) !important;
}

.tl-text p {
  font-family: var(--font-body) !important;
  color: var(--sage-green) !important;
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}