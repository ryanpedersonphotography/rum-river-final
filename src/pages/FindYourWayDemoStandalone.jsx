import React, { useState } from 'react';
import Icon from '../components/Icon';

export default function FindYourWayDemoStandalone() {
  const [activeVariant, setActiveVariant] = useState('original');

  // Venue data
  const venueData = {
    name: "Rum River Barn",
    address: "42618 78th Street",
    city: "Hillman",
    state: "MN",
    zipCode: "56338",
    phone: "(320) 492-8584",
    email: "info@rumriverbarn.com",
    coordinates: {
      lat: 45.8936111,
      lng: -93.7851842
    },
    cities: [
      { name: "Minneapolis", time: "45 min", distance: "40 miles" },
      { name: "St. Cloud", time: "30 min", distance: "25 miles" },
      { name: "Brainerd", time: "1 hour", distance: "50 miles" }
    ],
    airport: {
      name: "Minneapolis-St. Paul International",
      distance: "55 miles",
      time: "1 hour drive",
      code: "MSP"
    },
    hotels: [
      { name: "AmericInn Princeton", distance: "15 miles", phone: "(763) 389-5577" },
      { name: "Country Inn & Suites Milaca", distance: "12 miles", phone: "(320) 983-6600" }
    ]
  };

  const variants = [
    { id: 'original', name: 'MAP_DIRECTIONS_001', description: 'Exact replica from component library' },
    { id: 'classic', name: 'Classic Layout', description: 'Traditional split-screen design' },
    { id: 'modern', name: 'Modern Cards', description: 'Card-based information layout' },
    { id: 'minimal', name: 'Minimal Clean', description: 'Simple, focused design' },
    { id: 'interactive', name: 'Interactive Map', description: 'Enhanced with interactive features' },
    { id: 'mobile-first', name: 'Mobile First', description: 'Optimized for mobile experience' }
  ];

  const handleDirectionsClick = () => {
    const fullAddress = `${venueData.address}, ${venueData.city}, ${venueData.state} ${venueData.zipCode}`;
    const url = `https://www.google.com/maps/dir//${encodeURIComponent(fullAddress)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <style>{`
        .find-your-way-demo {
          padding: 2rem 0;
          background: white;
        }

        .demo-controls {
          text-align: center;
          padding: 2rem;
          background: var(--cream-pearl);
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .demo-controls h1 {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--warm-walnut);
          margin-bottom: 1rem;
        }

        .demo-controls p {
          font-family: var(--font-body);
          font-size: 1.125rem;
          color: var(--sage-green);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .variant-tabs {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .variant-tab {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--champagne-gold);
          background: white;
          color: var(--warm-walnut);
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .variant-tab:hover {
          background: var(--champagne-gold);
          color: white;
          transform: translateY(-2px);
        }

        .variant-tab.active {
          background: var(--champagne-gold);
          color: white;
        }

        .variant-info {
          text-align: center;
          margin-top: 1rem;
          font-style: italic;
          color: var(--sage-green);
        }

        /* Original MAP_DIRECTIONS_001 Variant */
        .variant-original .map-section {
          background: white;
          padding: 0;
        }

        .variant-original .map-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }

        .variant-original .map-info {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--warm-walnut);
          color: white;
        }

        .variant-original .map-info h2 {
          font-family: var(--font-display);
          font-size: 2.625rem;
          line-height: 1.25;
          color: white;
          margin-bottom: 30px;
        }

        .variant-original .location-details {
          margin-bottom: 40px;
        }

        .variant-original .location-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 25px;
          color: white;
        }

        .variant-original .location-item:last-child {
          margin-bottom: 0;
        }

        .variant-original .location-icon {
          width: 40px;
          height: 40px;
          background: var(--champagne-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-right: 20px;
          flex-shrink: 0;
          font-size: 1.25rem;
        }

        .variant-original .location-text h4 {
          font-family: var(--font-display);
          color: white;
          margin-bottom: 5px;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .variant-original .location-text p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          font-family: var(--font-body);
        }

        .variant-original .map-embed {
          background: var(--sage-green);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .variant-original .map-placeholder {
          text-align: center;
          color: white;
        }

        .variant-original .map-placeholder p {
          font-family: var(--font-body);
          font-size: 1.125rem;
          margin: 0;
        }

        /* Classic Variant */
        .variant-classic .map-section {
          background: white;
          padding: 0;
        }

        .variant-classic .map-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }

        .variant-classic .map-info {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--warm-walnut);
          color: white;
        }

        .variant-classic .map-info h2 {
          font-family: var(--font-display);
          font-size: 2.625rem;
          line-height: 1.25;
          color: white;
          margin-bottom: 30px;
        }

        /* Modern Cards Variant */
        .variant-modern .map-section {
          background: var(--blush-pink);
          padding: 4rem 0;
        }

        .variant-modern .map-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .variant-modern .map-info {
          display: grid;
          gap: 1.5rem;
        }

        .variant-modern .info-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .variant-modern .info-card:hover {
          transform: translateY(-5px);
        }

        .variant-modern .map-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--warm-walnut);
          text-align: center;
          margin-bottom: 2rem;
        }

        /* Minimal Variant */
        .variant-minimal .map-section {
          background: white;
          padding: 6rem 0;
        }

        .variant-minimal .map-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .variant-minimal .map-title {
          font-family: var(--font-display);
          font-size: 3rem;
          color: var(--warm-walnut);
          margin-bottom: 3rem;
        }

        .variant-minimal .location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .variant-minimal .location-simple {
          padding: 1.5rem;
          border: 1px solid var(--champagne-gold);
          border-radius: 8px;
        }

        /* Interactive Variant */
        .variant-interactive .map-section {
          background: linear-gradient(135deg, var(--sage-green) 0%, var(--warm-walnut) 100%);
          padding: 4rem 0;
          color: white;
        }

        .variant-interactive .map-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .variant-interactive .interactive-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .variant-interactive .map-title {
          font-family: var(--font-display);
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
        }

        .variant-interactive .interactive-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .variant-interactive .feature-card {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
        }

        /* Mobile First Variant */
        .variant-mobile-first .map-section {
          background: var(--cream-pearl);
          padding: 2rem 0;
        }

        .variant-mobile-first .map-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .variant-mobile-first .mobile-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .variant-mobile-first .mobile-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        /* Common Location Styles */
        .location-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .location-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .location-icon {
          width: 40px;
          height: 40px;
          background: var(--champagne-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .location-text h4 {
          font-family: var(--font-display);
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
        }

        .location-text p {
          line-height: 1.6;
          margin: 0;
          opacity: 0.9;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
          justify-content: center;
        }

        .btn-primary {
          background: var(--champagne-gold);
          color: var(--warm-walnut);
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          background: var(--dusty-rose);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-outline {
          background: transparent;
          color: currentColor;
          padding: 0.75rem 1.5rem;
          border: 2px solid currentColor;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-outline:hover {
          background: currentColor;
          color: white;
          transform: translateY(-2px);
        }

        .map-embed {
          background: var(--sage-green);
          border-radius: 8px;
          overflow: hidden;
          height: 400px;
          position: relative;
        }

        .map-embed iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .map-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sage-green);
          color: white;
          font-family: var(--font-body);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .variant-original .map-container,
          .variant-classic .map-container,
          .variant-modern .map-container {
            grid-template-columns: 1fr;
          }

          .variant-original .map-info,
          .variant-classic .map-info {
            padding: 40px 20px;
          }

          .variant-tabs {
            flex-direction: column;
            align-items: center;
          }

          .variant-tab {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* Demo Controls */}
      <div className="demo-controls">
        <h1>Find Your Way Demo</h1>
        <p>Interactive map and location components with multiple design variants. Perfect for venue websites, event locations, and business directories.</p>
        
        <div className="variant-tabs">
          {variants.map((variant) => (
            <button
              key={variant.id}
              className={`variant-tab ${activeVariant === variant.id ? 'active' : ''}`}
              onClick={() => setActiveVariant(variant.id)}
            >
              {variant.name}
            </button>
          ))}
        </div>
        
        <div className="variant-info">
          {variants.find(v => v.id === activeVariant)?.description}
        </div>
      </div>

      {/* Demo Section */}
      <div className={`find-your-way-demo variant-${activeVariant}`}>
        
        {/* Original MAP_DIRECTIONS_001 - Exact Replica */}
        {activeVariant === 'original' && (
          <section id="map-directions" className="map-section">
            <div className="map-container">
              <div className="map-info">
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: MAP_DIRECTIONS_001</div>
                <h2>Find Your Way to Forever</h2>
                <div className="location-details">
                  <div className="location-item">
                    <div className="location-icon">📍</div>
                    <div className="location-text">
                      <h4>Address</h4>
                      <p>12500 Rum River Drive<br />Princeton, MN 55371</p>
                    </div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">🚗</div>
                    <div className="location-text">
                      <h4>Easy Access From</h4>
                      <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                    </div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">✈️</div>
                    <div className="location-text">
                      <h4>Nearest Airport</h4>
                      <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                    </div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">🏨</div>
                    <div className="location-text">
                      <h4>Accommodations</h4>
                      <p>Partner hotels in Princeton & Milaca<br />Group rates available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-embed">
                <div className="map-placeholder">
                  <p>Interactive Map</p>
                  <p style={{fontSize: '16px', marginTop: '10px'}}>Click to view on Google Maps</p>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Classic Variant */}
        {activeVariant === 'classic' && (
          <section className="map-section">
            <div className="map-container">
              <div className="map-info">
                <h2>Find Your Way to Forever</h2>
                <div className="location-details">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="location" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Address</h4>
                      <p>{venueData.address}<br />{venueData.city}, {venueData.state} {venueData.zipCode}</p>
                    </div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="truck" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Easy Access From</h4>
                      <p>
                        {venueData.cities.map((city, index) => (
                          <span key={city.name}>
                            {city.time} from {city.name}
                            {index < venueData.cities.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="rocket" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Nearest Airport</h4>
                      <p>{venueData.airport.name}<br />{venueData.airport.distance} ({venueData.airport.time})</p>
                    </div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="building" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Accommodations</h4>
                      <p>Partner hotels in Princeton & Milaca<br />Group rates available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rum River Barn Location"
                />
              </div>
            </div>
          </section>
        )}

        {/* Modern Cards Variant */}
        {activeVariant === 'modern' && (
          <section className="map-section">
            <div className="map-container">
              <div className="map-info">
                <h2 className="map-title">Find Your Way to Forever</h2>
                <div className="info-card">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="location" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Venue Address</h4>
                      <p>{venueData.address}<br />{venueData.city}, {venueData.state} {venueData.zipCode}</p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="truck" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Travel Times</h4>
                      <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="rocket" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Airport & Hotels</h4>
                      <p>MSP Airport: 1 hour drive<br />Partner hotels available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rum River Barn Location"
                />
              </div>
            </div>
          </section>
        )}

        {/* Minimal Variant */}
        {activeVariant === 'minimal' && (
          <section className="map-section">
            <div className="map-container">
              <h2 className="map-title">Find Your Way</h2>
              <div className="location-grid">
                <div className="location-simple">
                  <h4>📍 Address</h4>
                  <p>{venueData.address}<br />{venueData.city}, {venueData.state} {venueData.zipCode}</p>
                </div>
                <div className="location-simple">
                  <h4>🚗 Driving</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud</p>
                </div>
                <div className="location-simple">
                  <h4>✈️ Airport</h4>
                  <p>MSP International<br />55 miles (1 hour)</p>
                </div>
                <div className="location-simple">
                  <h4>🏨 Hotels</h4>
                  <p>Princeton & Milaca<br />Group rates available</p>
                </div>
              </div>
              <div className="action-buttons">
                <button className="btn-primary" onClick={handleDirectionsClick}>
                  Get Directions
                </button>
                <a href={`tel:${venueData.phone}`} className="btn-outline">
                  Call Venue
                </a>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rum River Barn Location"
                />
              </div>
            </div>
          </section>
        )}

        {/* Interactive Variant */}
        {activeVariant === 'interactive' && (
          <section className="map-section">
            <div className="map-container">
              <div className="interactive-header">
                <h2 className="map-title">Find Your Way to Forever</h2>
                <p>Interactive location guide with enhanced features</p>
              </div>
              <div className="interactive-features">
                <div className="feature-card">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="location" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Venue Location</h4>
                      <p>{venueData.address}<br />{venueData.city}, {venueData.state} {venueData.zipCode}</p>
                      <div className="action-buttons">
                        <button className="btn-primary" onClick={handleDirectionsClick}>
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="truck" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Travel Information</h4>
                      <p>Multiple access routes available<br />Easy highway connections</p>
                      <div className="action-buttons">
                        <a href="https://www.google.com/maps/dir//42618+78th+Street,+Hillman,+MN+56338" target="_blank" rel="noopener noreferrer" className="btn-outline">
                          Route Planner
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="location-item">
                    <div className="location-icon">
                      <Icon name="building" size="lg" color="white" />
                    </div>
                    <div className="location-text">
                      <h4>Accommodations</h4>
                      <p>Partner hotels with group rates<br />15 minutes from venue</p>
                      <div className="action-buttons">
                        <a href="/contact" className="btn-outline">
                          Book Rooms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rum River Barn Location"
                />
              </div>
            </div>
          </section>
        )}

        {/* Mobile First Variant */}
        {activeVariant === 'mobile-first' && (
          <section className="map-section">
            <div className="map-container">
              <div className="mobile-stack">
                <div className="mobile-card">
                  <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>📍 Find Your Way</h3>
                  <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{venueData.address}<br />{venueData.city}, {venueData.state} {venueData.zipCode}</p>
                  <div className="action-buttons">
                    <button className="btn-primary" onClick={handleDirectionsClick} style={{ width: '100%' }}>
                      Get Directions
                    </button>
                  </div>
                </div>
                <div className="mobile-card">
                  <h4>🚗 Driving Times</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {venueData.cities.map(city => (
                      <li key={city.name} style={{ padding: '0.25rem 0' }}>
                        {city.time} from {city.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mobile-card">
                  <h4>✈️ Airport & Hotels</h4>
                  <p>{venueData.airport.name}<br />{venueData.airport.distance} ({venueData.airport.time})</p>
                  <p style={{ marginTop: '1rem' }}>Partner hotels available in Princeton & Milaca</p>
                </div>
                <div className="mobile-card">
                  <div className="map-embed">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Rum River Barn Location"
                    />
                  </div>
                </div>
                <div className="mobile-card">
                  <div className="action-buttons">
                    <a href={`tel:${venueData.phone}`} className="btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                      📞 Call Venue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Code Documentation Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Find Your Way Component Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>Complete implementation guide for map and location components</p>
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
{`<!-- Find Your Way Section - Classic Layout -->
<section className="map-section">
  <div className="map-container">
    <!-- Information Panel -->
    <div className="map-info">
      <h2>Find Your Way to Forever</h2>
      <div className="location-details">
        <!-- Address -->
        <div className="location-item">
          <div className="location-icon">
            <Icon name="location" size="lg" color="white" />
          </div>
          <div className="location-text">
            <h4>Address</h4>
            <p>42618 78th Street<br />Hillman, MN 56338</p>
          </div>
        </div>
        
        <!-- Travel Times -->
        <div className="location-item">
          <div className="location-icon">
            <Icon name="truck" size="lg" color="white" />
          </div>
          <div className="location-text">
            <h4>Easy Access From</h4>
            <p>45 min from Minneapolis<br />30 min from St. Cloud</p>
          </div>
        </div>
        
        <!-- Airport -->
        <div className="location-item">
          <div className="location-icon">
            <Icon name="rocket" size="lg" color="white" />
          </div>
          <div className="location-text">
            <h4>Nearest Airport</h4>
            <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
          </div>
        </div>
        
        <!-- Accommodations -->
        <div className="location-item">
          <div className="location-icon">
            <Icon name="building" size="lg" color="white" />
          </div>
          <div className="location-text">
            <h4>Accommodations</h4>
            <p>Partner hotels in Princeton & Milaca<br />Group rates available</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Interactive Map -->
    <div className="map-embed">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Venue Location Map"
      />
    </div>
  </div>
</section>

<!-- Modern Cards Layout -->
<section className="map-section">
  <div className="map-container">
    <div className="map-info">
      <h2 className="map-title">Find Your Way to Forever</h2>
      <div className="info-card">
        <div className="location-item">
          <!-- Card content -->
        </div>
      </div>
    </div>
    <div className="map-embed">
      <!-- Map iframe -->
    </div>
  </div>
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
{`import React, { useState } from 'react';
import Icon from '../components/Icon';

export default function FindYourWayComponent() {
  const [activeVariant, setActiveVariant] = useState('classic');

  // Venue configuration
  const venueData = {
    name: "Rum River Barn",
    address: "42618 78th Street",
    city: "Hillman",
    state: "MN",
    zipCode: "56338",
    phone: "(320) 492-8584",
    coordinates: { lat: 45.8936111, lng: -93.7851842 },
    cities: [
      { name: "Minneapolis", time: "45 min", distance: "40 miles" },
      { name: "St. Cloud", time: "30 min", distance: "25 miles" },
      { name: "Brainerd", time: "1 hour", distance: "50 miles" }
    ],
    airport: {
      name: "Minneapolis-St. Paul International",
      distance: "55 miles",
      time: "1 hour drive"
    }
  };

  // Interactive functions
  const handleDirectionsClick = () => {
    const fullAddress = \`\${venueData.address}, \${venueData.city}, \${venueData.state} \${venueData.zipCode}\`;
    const url = \`https://www.google.com/maps/dir//\${encodeURIComponent(fullAddress)}\`;
    window.open(url, '_blank');
  };

  const handleCallVenue = () => {
    window.location.href = \`tel:\${venueData.phone}\`;
  };

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-info">
          <h2>Find Your Way to Forever</h2>
          <div className="location-details">
            {/* Address */}
            <LocationItem
              icon="location"
              title="Address"
              content={\`\${venueData.address}\\n\${venueData.city}, \${venueData.state} \${venueData.zipCode}\`}
            />
            
            {/* Travel Times */}
            <LocationItem
              icon="truck"
              title="Easy Access From"
              content={venueData.cities.map(city => 
                \`\${city.time} from \${city.name}\`
              ).join('\\n')}
            />
            
            {/* Airport */}
            <LocationItem
              icon="rocket"
              title="Nearest Airport"
              content={\`\${venueData.airport.name}\\n\${venueData.airport.distance} (\${venueData.airport.time})\`}
            />
            
            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn-primary" onClick={handleDirectionsClick}>
                Get Directions
              </button>
              <button className="btn-outline" onClick={handleCallVenue}>
                Call Venue
              </button>
            </div>
          </div>
        </div>
        
        <MapEmbed venue={venueData} />
      </div>
    </section>
  );
}

// Reusable Location Item Component
function LocationItem({ icon, title, content }) {
  return (
    <div className="location-item">
      <div className="location-icon">
        <Icon name={icon} size="lg" color="white" />
      </div>
      <div className="location-text">
        <h4>{title}</h4>
        <p>{content.split('\\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < content.split('\\n').length - 1 && <br />}
          </React.Fragment>
        ))}</p>
      </div>
    </div>
  );
}

// Map Embed Component
function MapEmbed({ venue }) {
  const mapSrc = \`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d\${venue.coordinates.lng}!3d\${venue.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s\${encodeURIComponent(venue.address + ', ' + venue.city + ', ' + venue.state)}!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus\`;
  
  return (
    <div className="map-embed">
      <iframe
        src={mapSrc}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={\`\${venue.name} Location\`}
      />
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
{`/* Find Your Way Section - Base Styles */
.map-section {
  background: white;
  padding: 0;
  position: relative;
}

.map-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
}

/* Information Panel */
.map-info {
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--warm-walnut);
  color: white;
}

.map-info h2 {
  font-family: var(--font-display);
  font-size: 2.625rem;
  line-height: 1.25;
  color: white;
  margin-bottom: 30px;
}

/* Location Details */
.location-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: white;
}

.location-icon {
  width: 40px;
  height: 40px;
  background: var(--champagne-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.location-item:hover .location-icon {
  transform: scale(1.1);
  background: var(--dusty-rose);
}

.location-text h4 {
  font-family: var(--font-display);
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.location-text p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
  font-family: var(--font-body);
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
}

.btn-primary {
  background: var(--champagne-gold);
  color: var(--warm-walnut);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: var(--dusty-rose);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-outline {
  background: transparent;
  color: currentColor;
  padding: 0.75rem 1.5rem;
  border: 2px solid currentColor;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-outline:hover {
  background: currentColor;
  color: white;
  transform: translateY(-2px);
}

/* Map Embed */
.map-embed {
  background: var(--sage-green);
  position: relative;
  overflow: hidden;
}

.map-embed iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Modern Cards Variant */
.variant-modern .map-section {
  background: var(--blush-pink);
  padding: 4rem 0;
}

.variant-modern .map-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.variant-modern .info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.variant-modern .info-card:hover {
  transform: translateY(-5px);
}

/* Interactive Variant */
.variant-interactive .map-section {
  background: linear-gradient(135deg, var(--sage-green) 0%, var(--warm-walnut) 100%);
  padding: 4rem 0;
  color: white;
}

.variant-interactive .feature-card {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .map-container {
    grid-template-columns: 1fr;
  }
  
  .map-info {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .map-info {
    padding: 40px 20px;
  }
  
  .map-info h2 {
    font-size: 2rem;
  }
  
  .location-icon {
    width: 35px;
    height: 35px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-outline {
    width: 100%;
    text-align: center;
  }
}

/* Loading States */
.map-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--sage-green);
  color: white;
}

.map-loading::after {
  content: '';
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}