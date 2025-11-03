import React from 'react';
import Icon from '../components/Icon';

export default function MapDirectionsStandalone() {
  const handleDirectionsClick = () => {
    const address = "42618 78th Street, Hillman, MN 56338";
    const url = `https://www.google.com/maps/dir//${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <style>{`
        .map-section {
          background: white;
          padding: 0;
          min-height: 100vh;
        }

        .map-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        /* Left Panel - Information */
        .map-info {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--cream-pearl);
          color: var(--warm-walnut);
          position: relative;
        }

        .section-header {
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
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Location Details */
        .location-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .location-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          color: var(--warm-walnut);
        }

        .location-icon {
          width: 50px;
          height: 50px;
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

        .location-item:hover .location-icon {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .location-text h4 {
          font-family: var(--font-display);
          color: var(--warm-walnut);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .location-text p {
          color: var(--warm-walnut);
          opacity: 0.75;
          line-height: 1.6;
          margin: 0;
          font-family: var(--font-body);
          font-size: 1rem;
        }

        /* Right Panel - Map */
        .map-embed {
          position: relative;
          overflow: hidden;
          background: var(--sage-green);
        }

        .map-embed::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.1) 100%
          );
          z-index: 1;
          pointer-events: none;
        }

        .map-embed iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          position: relative;
          z-index: 0;
        }

        /* Map Overlay Actions */
        .map-overlay {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          z-index: 2;
          display: flex;
          gap: 1rem;
        }

        .map-action-btn {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          color: var(--warm-walnut);
          padding: 0.75rem 1.25rem;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .map-action-btn:hover {
          background: var(--champagne-gold);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .map-container {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .map-info {
            padding: 60px 40px;
            min-height: 70vh;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .map-embed {
            min-height: 500px;
          }

          .map-overlay {
            bottom: 1rem;
            right: 1rem;
            flex-direction: column;
          }

          .map-action-btn {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .map-info {
            padding: 40px 20px;
            text-align: center;
          }

          .section-title {
            font-size: 2rem;
          }

          .location-details {
            gap: 1.5rem;
          }

          .location-item {
            gap: 1rem;
          }

          .location-icon {
            width: 45px;
            height: 45px;
          }

          .location-text h4 {
            font-size: 1.125rem;
          }

          .location-text p {
            font-size: 0.9rem;
          }

          .map-embed {
            min-height: 400px;
          }
        }
      `}</style>

      <section className="map-section">
        <div className="map-container">
          {/* Left Panel - Location Information */}
          <div className="map-info">
            <div className="section-header">
              <div className="script-accent">Interactive Location</div>
              <h2 className="section-title">Find Your Way to Forever</h2>
              <p className="lead">
                Discover our beautiful venue nestled in the heart of Minnesota, 
                where your love story will unfold in perfect harmony with nature.
              </p>
            </div>
            
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="location" size="lg" color="white" />
                </div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>42618 78th Street<br />Hillman, MN 56338</p>
                </div>
              </div>
              
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="truck" size="lg" color="white" />
                </div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              
              <div className="location-item">
                <div className="location-icon">
                  <Icon name="rocket" size="lg" color="white" />
                </div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
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
          
          {/* Right Panel - Interactive Map */}
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
            />
            
            {/* Map Overlay Actions */}
            <div className="map-overlay">
              <button 
                className="map-action-btn"
                onClick={handleDirectionsClick}
              >
                <Icon name="location" size="sm" />
                Get Directions
              </button>
              <button 
                className="map-action-btn"
                onClick={() => window.open('https://www.google.com/maps/place/42618+78th+St,+Hillman,+MN+56338', '_blank')}
              >
                <Icon name="expand" size="sm" />
                Full Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Documentation Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Map Directions Component Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>Complete implementation guide for the clean map directions component with heroicons and interactive map</p>
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
{`<!-- Map Directions Section - Clean Split Layout -->
<section className="map-section">
  <div className="map-container">
    <!-- Left Panel - Location Information -->
    <div className="map-info">
      <!-- Section Header -->
      <div className="section-header">
        <div className="script-accent">Interactive Location</div>
        <h2 className="section-title">Find Your Way to Forever</h2>
        <p className="lead">
          Discover our beautiful venue nestled in the heart of Minnesota, 
          where your love story will unfold in perfect harmony with nature.
        </p>
      </div>
      
      <!-- Location Details with Heroicons -->
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
        
        <!-- Driving Distances -->
        <div className="location-item">
          <div className="location-icon">
            <Icon name="truck" size="lg" color="white" />
          </div>
          <div className="location-text">
            <h4>Easy Access From</h4>
            <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
          </div>
        </div>
        
        <!-- Airport Information -->
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
    
    <!-- Right Panel - Interactive Map -->
    <div className="map-embed">
      <!-- Google Maps Embed -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rum River Barn Location"
      />
      
      <!-- Floating Action Buttons -->
      <div className="map-overlay">
        <button className="map-action-btn" onClick={handleDirectionsClick}>
          <Icon name="location" size="sm" />
          Get Directions
        </button>
        <button className="map-action-btn" onClick={handleExpandMap}>
          <Icon name="expand" size="sm" />
          Full Map
        </button>
      </div>
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
{`import React from 'react';
import Icon from '../components/Icon';

export default function MapDirectionsComponent() {
  // Venue configuration
  const venueData = {
    name: "Rum River Barn",
    address: "42618 78th Street",
    city: "Hillman",
    state: "MN",
    zipCode: "56338",
    coordinates: { lat: 45.8936111, lng: -93.7851842 },
    drivingTimes: [
      { city: "Minneapolis", time: "45 min" },
      { city: "St. Cloud", time: "30 min" },
      { city: "Brainerd", time: "1 hour" }
    ],
    airport: {
      name: "Minneapolis-St. Paul International",
      distance: "55 miles",
      time: "1 hour drive"
    },
    accommodations: {
      description: "Partner hotels in Princeton & Milaca",
      details: "Group rates available"
    }
  };

  // Interactive functions
  const handleDirectionsClick = () => {
    const fullAddress = \`\${venueData.address}, \${venueData.city}, \${venueData.state} \${venueData.zipCode}\`;
    const url = \`https://www.google.com/maps/dir//\${encodeURIComponent(fullAddress)}\`;
    window.open(url, '_blank');
  };

  const handleExpandMap = () => {
    const fullAddress = \`\${venueData.address}, \${venueData.city}, \${venueData.state} \${venueData.zipCode}\`;
    const url = \`https://www.google.com/maps/place/\${encodeURIComponent(fullAddress)}\`;
    window.open(url, '_blank');
  };

  const handleCallVenue = () => {
    window.location.href = 'tel:(320) 492-8584';
  };

  return (
    <section className="map-section">
      <div className="map-container">
        {/* Location Information Panel */}
        <LocationInfoPanel 
          venueData={venueData}
          onDirectionsClick={handleDirectionsClick}
        />
        
        {/* Interactive Map Panel */}
        <InteractiveMapPanel 
          venueData={venueData}
          onDirectionsClick={handleDirectionsClick}
          onExpandClick={handleExpandMap}
        />
      </div>
    </section>
  );
}

// Location Information Component
function LocationInfoPanel({ venueData, onDirectionsClick }) {
  const locationItems = [
    {
      icon: "location",
      title: "Address",
      content: \`\${venueData.address}\\n\${venueData.city}, \${venueData.state} \${venueData.zipCode}\`
    },
    {
      icon: "truck",
      title: "Easy Access From",
      content: venueData.drivingTimes.map(item => \`\${item.time} from \${item.city}\`).join('\\n')
    },
    {
      icon: "rocket",
      title: "Nearest Airport",
      content: \`\${venueData.airport.name}\\n\${venueData.airport.distance} (\${venueData.airport.time})\`
    },
    {
      icon: "building",
      title: "Accommodations",
      content: \`\${venueData.accommodations.description}\\n\${venueData.accommodations.details}\`
    }
  ];

  return (
    <div className="map-info">
      <div className="section-header">
        <div className="script-accent">Interactive Location</div>
        <h2 className="section-title">Find Your Way to Forever</h2>
        <p className="lead">
          Discover our beautiful venue nestled in the heart of Minnesota, 
          where your love story will unfold in perfect harmony with nature.
        </p>
      </div>
      
      <div className="location-details">
        {locationItems.map((item, index) => (
          <LocationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

// Location Item Component
function LocationItem({ icon, title, content }) {
  return (
    <div className="location-item">
      <div className="location-icon">
        <Icon name={icon} size="lg" color="white" />
      </div>
      <div className="location-text">
        <h4>{title}</h4>
        <p>
          {content.split('\\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < content.split('\\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

// Interactive Map Panel Component
function InteractiveMapPanel({ venueData, onDirectionsClick, onExpandClick }) {
  const mapSrc = \`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d\${venueData.coordinates.lng}!3d\${venueData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s\${encodeURIComponent(venueData.address + ', ' + venueData.city + ', ' + venueData.state)}!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus\`;

  return (
    <div className="map-embed">
      <iframe
        src={mapSrc}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={\`\${venueData.name} Location\`}
      />
      
      <div className="map-overlay">
        <button className="map-action-btn" onClick={onDirectionsClick}>
          <Icon name="location" size="sm" />
          Get Directions
        </button>
        <button className="map-action-btn" onClick={onExpandClick}>
          <Icon name="expand" size="sm" />
          Full Map
        </button>
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
{`/* Map Directions Section - Clean Split Layout */
.map-section {
  background: white;
  padding: 0;
  min-height: 100vh;
}

.map-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

/* Left Panel - Information */
.map-info {
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--cream-pearl);
  color: var(--warm-walnut);
  position: relative;
}

/* Section Header Styling */
.section-header {
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Location Details */
.location-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  color: var(--warm-walnut);
}

.location-icon {
  width: 50px;
  height: 50px;
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

.location-item:hover .location-icon {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.location-text h4 {
  font-family: var(--font-display);
  color: var(--warm-walnut);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.location-text p {
  color: var(--warm-walnut);
  opacity: 0.75;
  line-height: 1.6;
  margin: 0;
  font-family: var(--font-body);
  font-size: 1rem;
}

/* Right Panel - Interactive Map */
.map-embed {
  position: relative;
  overflow: hidden;
  background: var(--sage-green);
}

/* Hero-style Overlay on Map */
.map-embed::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.map-embed iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  position: relative;
  z-index: 0;
}

/* Floating Action Buttons */
.map-overlay {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;
  display: flex;
  gap: 1rem;
}

.map-action-btn {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  color: var(--warm-walnut);
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.map-action-btn:hover {
  background: var(--champagne-gold);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

/* Mobile Responsive Design */
@media (max-width: 1024px) {
  .map-container {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .map-info {
    padding: 60px 40px;
    min-height: 70vh;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .map-embed {
    min-height: 500px;
  }

  .map-overlay {
    bottom: 1rem;
    right: 1rem;
    flex-direction: column;
  }

  .map-action-btn {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .map-info {
    padding: 40px 20px;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .location-details {
    gap: 1.5rem;
  }

  .location-item {
    gap: 1rem;
  }

  .location-icon {
    width: 45px;
    height: 45px;
  }

  .location-text h4 {
    font-size: 1.125rem;
  }

  .location-text p {
    font-size: 0.9rem;
  }

  .map-embed {
    min-height: 400px;
  }
}

/* Accessibility Enhancements */
.location-item:focus-within .location-icon {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.map-action-btn:focus {
  outline: 2px solid var(--champagne-gold);
  outline-offset: 2px;
}

/* Print Styles */
@media print {
  .map-embed {
    background: white;
    color: black;
  }
  
  .map-embed::after {
    content: 'Map: 42618 78th Street, Hillman, MN 56338';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-weight: bold;
  }
  
  .map-overlay {
    display: none;
  }
}

/* Loading State */
.map-embed iframe {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.map-embed iframe[src] {
  opacity: 1;
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}