import Icon from '../components/Icon'

export default function FindYourWayStandalone() {
  return (
    <>
      {/* Find Your Way to Forever - Map & Directions Section */}
      <section id="map-directions" className="map-section">
        <div className="map-container">
          <div className="map-info">
            <h2>Find Your Way to Forever</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon"><Icon name="location" size="lg" color="white" /></div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>42618 78th Street<br />Hillman, MN 56338</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon"><Icon name="truck" size="lg" color="white" /></div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon"><Icon name="rocket" size="lg" color="white" /></div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon"><Icon name="building" size="lg" color="white" /></div>
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
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
            ></iframe>
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
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Find Your Way Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the map and directions section above</p>
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
{`<!-- Find Your Way to Forever - Map & Directions Section -->
<section id="map-directions" className="map-section">
  <div className="map-container">
    <!-- Location Information -->
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
    
    <!-- Interactive Map -->
    <div className="map-embed">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '600px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
      ></iframe>
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
{`// React Component for Find Your Way Section
import React from 'react'
import Icon from '../components/Icon'

// Location data structure
const locationData = {
  venue: {
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
    }
  },
  travel: {
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
    }
  },
  accommodations: {
    description: "Partner hotels in Princeton & Milaca",
    details: "Group rates available",
    hotels: [
      {
        name: "AmericInn Princeton",
        distance: "15 miles",
        phone: "(763) 389-5577"
      },
      {
        name: "Country Inn & Suites Milaca",
        distance: "12 miles", 
        phone: "(320) 983-6600"
      }
    ]
  }
}

export default function FindYourWaySection() {
  const generateMapUrl = (address) => {
    const encodedAddress = encodeURIComponent(address)
    return \`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=\${encodedAddress}\`
  }

  const handleDirectionsClick = () => {
    const { address, city, state, zipCode } = locationData.venue
    const fullAddress = \`\${address}, \${city}, \${state} \${zipCode}\`
    const url = \`https://www.google.com/maps/dir//\${encodeURIComponent(fullAddress)}\`
    window.open(url, '_blank')
  }

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-info">
          <h2>Find Your Way to Forever</h2>
          <div className="location-details">
            {/* Address */}
            <div className="location-item">
              <div className="location-icon">
                <Icon name="location" size="lg" color="white" />
              </div>
              <div className="location-text">
                <h4>Address</h4>
                <p>
                  {locationData.venue.address}<br />
                  {locationData.venue.city}, {locationData.venue.state} {locationData.venue.zipCode}
                </p>
              </div>
            </div>
            
            {/* Travel Times */}
            <div className="location-item">
              <div className="location-icon">
                <Icon name="truck" size="lg" color="white" />
              </div>
              <div className="location-text">
                <h4>Easy Access From</h4>
                <p>
                  {locationData.travel.cities.map((city, index) => (
                    <span key={city.name}>
                      {city.time} from {city.name}
                      {index < locationData.travel.cities.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            
            {/* Airport */}
            <div className="location-item">
              <div className="location-icon">
                <Icon name="rocket" size="lg" color="white" />
              </div>
              <div className="location-text">
                <h4>Nearest Airport</h4>
                <p>
                  {locationData.travel.airport.name}<br />
                  {locationData.travel.airport.distance} ({locationData.travel.airport.time})
                </p>
              </div>
            </div>
            
            {/* Accommodations */}
            <div className="location-item">
              <div className="location-icon">
                <Icon name="building" size="lg" color="white" />
              </div>
              <div className="location-text">
                <h4>Accommodations</h4>
                <p>
                  {locationData.accommodations.description}<br />
                  {locationData.accommodations.details}
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="location-actions">
            <button 
              onClick={handleDirectionsClick}
              className="btn-primary"
            >
              Get Directions
            </button>
            <a 
              href={\`tel:\${locationData.venue.phone}\`}
              className="btn-outline"
            >
              Call Us
            </a>
          </div>
        </div>
        
        {/* Interactive Map */}
        <div className="map-embed">
          <iframe
            src={\`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d\${locationData.venue.coordinates.lng}!3d\${locationData.venue.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s\${encodeURIComponent(locationData.venue.address + ', ' + locationData.venue.city + ', ' + locationData.venue.state)}!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus\`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '600px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={\`\${locationData.venue.name} Location - \${locationData.venue.address}, \${locationData.venue.city}, \${locationData.venue.state} \${locationData.venue.zipCode}\`}
          />
        </div>
      </div>
    </section>
  )
}

// Enhanced version with Google Maps API integration
import { useEffect, useRef } from 'react'

export function FindYourWayWithGoogleMaps({ apiKey }) {
  const mapRef = useRef(null)
  
  useEffect(() => {
    if (!window.google || !mapRef.current) return
    
    const map = new window.google.maps.Map(mapRef.current, {
      center: locationData.venue.coordinates,
      zoom: 15,
      styles: [
        // Custom map styling for brand colors
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [{ color: '#4A3426' }]
        }
      ]
    })
    
    new window.google.maps.Marker({
      position: locationData.venue.coordinates,
      map,
      title: locationData.venue.name,
      icon: {
        url: '/images/custom-marker.png',
        scaledSize: new window.google.maps.Size(40, 40)
      }
    })
  }, [])
  
  return (
    <div className="map-embed">
      <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '600px' }} />
    </div>
  )
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
{`/* Find Your Way to Forever - Map Section */
.map-section {
  background: white;
  padding: 0;
}

.map-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
}

/* Map Information Panel */
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
  margin-bottom: 40px;
}

.location-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  color: white;
}

.location-item:last-child {
  margin-bottom: 0;
}

/* Location Icons */
.location-icon {
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
  transition: all 0.3s ease;
}

.location-item:hover .location-icon {
  transform: scale(1.1);
  background: var(--dusty-rose);
}

/* Location Text */
.location-text h4 {
  font-family: var(--font-display);
  color: white;
  margin-bottom: 5px;
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
.location-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
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
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-outline {
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
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
  background: white;
  color: var(--warm-walnut);
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

/* Map Placeholder (for component library) */
.map-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
}

.map-embed::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(122, 139, 127, 0.9) 0%, 
    rgba(74, 52, 38, 0.9) 100%);
  z-index: 0;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .map-container {
    grid-template-columns: 1fr;
  }
  
  .map-info {
    padding: 60px 40px;
  }
  
  .map-info h2 {
    font-size: 2.25rem;
  }
  
  .map-embed {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .map-info {
    padding: 40px 20px;
  }
  
  .map-info h2 {
    font-size: 2rem;
  }
  
  .location-item {
    margin-bottom: 20px;
  }
  
  .location-icon {
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
  
  .location-text h4 {
    font-size: 1rem;
  }
  
  .location-text p {
    font-size: 0.875rem;
  }
  
  .location-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-outline {
    width: 100%;
    text-align: center;
  }
}

/* Loading State for Map */
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
}

/* Accessibility Enhancements */
.location-item:focus-within .location-icon {
  transform: scale(1.1);
  background: var(--dusty-rose);
}

.location-text h4:focus {
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
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}