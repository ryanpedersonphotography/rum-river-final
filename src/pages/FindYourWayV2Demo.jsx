import React from 'react';
import Icon from '../components/Icon';

export default function FindYourWayV2Demo() {
  const handleDirectionsClick = () => {
    const address = "42618 78th Street, Hillman, MN 56338";
    const url = `https://www.google.com/maps/dir//${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Find Your Way V2 Demo */}
      <section className="contact-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Interactive Location</div>
            <h2 className="section-title">Find Your Way Version 2</h2>
            <p className="lead">A modern take on location discovery with heroicons and interactive map integration</p>
          </div>
          
          <div className="contact-grid">
            {/* Left side - Location Information */}
            <div className="contact-content">
              <div className="script-accent">Let's Start Planning</div>
              <h2 className="section-title">Visit Our Venue</h2>
              <p className="lead">
                Ready to see where your love story will unfold? Explore our location
                and discover why Rum River Wedding Barn is the perfect setting for your celebration.
              </p>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">
                    <Icon name="location" size="lg" color="primary" />
                  </div>
                  <div className="info-content">
                    <h4>Visit Us</h4>
                    <p>42618 78th Street<br />Hillman, MN 56338</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Icon name="phone" size="lg" color="primary" />
                  </div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>(320) 492-8584<br />Available 7 days a week</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Icon name="email" size="lg" color="primary" />
                  </div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>info@rumriverbarn.com<br />We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Icon name="clock" size="lg" color="primary" />
                  </div>
                  <div className="info-content">
                    <h4>Tour Hours</h4>
                    <p>By appointment only<br />7 days a week</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Icon name="map" size="lg" color="primary" />
                  </div>
                  <div className="info-content">
                    <h4>Driving Distance</h4>
                    <p>45 min from Minneapolis<br />30 min from St. Cloud</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="contact-actions">
                <button 
                  className="btn-primary"
                  onClick={handleDirectionsClick}
                >
                  <Icon name="location" size="sm" color="white" />
                  Get Directions
                </button>
                <a 
                  href="tel:(320) 492-8584" 
                  className="btn-outline"
                >
                  <Icon name="phone" size="sm" />
                  Call Now
                </a>
              </div>
            </div>
            
            {/* Right side - Interactive Map (replacing the form) */}
            <div className="contact-form-wrapper">
              <div className="map-container-v2">
                <div className="map-header">
                  <h3>
                    <Icon name="map" size="sm" color="primary" />
                    Interactive Location Map
                  </h3>
                  <p>Click and drag to explore the venue location and surrounding area.</p>
                </div>
                
                {/* Google Map Embed */}
                <div className="map-embed-v2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rum River Barn Location - Interactive Map"
                  />
                </div>
                
                {/* Map Features */}
                <div className="map-features">
                  <div className="feature-grid">
                    <div className="feature-item">
                      <Icon name="location" size="sm" color="accent" />
                      <span>Venue Location</span>
                    </div>
                    <div className="feature-item">
                      <Icon name="home" size="sm" color="accent" />
                      <span>400-Acre Property</span>
                    </div>
                    <div className="feature-item">
                      <Icon name="camera" size="sm" color="accent" />
                      <span>Photo Locations</span>
                    </div>
                    <div className="feature-item">
                      <Icon name="users" size="sm" color="accent" />
                      <span>Guest Parking</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="map-actions">
                  <button 
                    className="map-action-btn"
                    onClick={handleDirectionsClick}
                  >
                    <Icon name="location" size="sm" />
                    Directions
                  </button>
                  <button 
                    className="map-action-btn"
                    onClick={() => window.open('https://www.google.com/maps/place/42618+78th+St,+Hillman,+MN+56338', '_blank')}
                  >
                    <Icon name="expand" size="sm" />
                    Full Map
                  </button>
                  <button 
                    className="map-action-btn"
                    onClick={() => navigator.share ? navigator.share({
                      title: 'Rum River Barn Location',
                      text: 'Check out this beautiful wedding venue!',
                      url: 'https://www.google.com/maps/place/42618+78th+St,+Hillman,+MN+56338'
                    }) : navigator.clipboard.writeText('42618 78th Street, Hillman, MN 56338')}
                  >
                    <Icon name="share" size="sm" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Map Container V2 Styles */
        .map-container-v2 {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid var(--champagne-gold);
        }
        
        .map-header {
          padding: 2rem 2rem 1rem;
          text-align: center;
          background: linear-gradient(135deg, var(--blush-pink) 0%, var(--cream-pearl) 100%);
        }
        
        .map-header h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--warm-walnut);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .map-header p {
          color: var(--sage-green);
          font-size: 0.875rem;
          margin: 0;
        }
        
        .map-embed-v2 {
          position: relative;
          background: var(--sage-green);
        }
        
        .map-embed-v2 iframe {
          width: 100%;
          height: 450px;
          border: none;
          display: block;
        }
        
        /* Map Features */
        .map-features {
          padding: 1.5rem 2rem;
          background: var(--cream-pearl);
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--warm-walnut);
          font-weight: 500;
        }
        
        /* Map Actions */
        .map-actions {
          padding: 1.5rem 2rem 2rem;
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          background: white;
        }
        
        .map-action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: transparent;
          border: 2px solid var(--champagne-gold);
          border-radius: 50px;
          color: var(--warm-walnut);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .map-action-btn:hover {
          background: var(--champagne-gold);
          color: white;
          transform: translateY(-2px);
        }
        
        /* Contact Actions */
        .contact-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--champagne-gold);
          color: white;
          padding: 0.875rem 1.5rem;
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
        }
        
        .btn-primary:hover {
          background: var(--dusty-rose);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .btn-outline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--warm-walnut);
          padding: 0.875rem 1.5rem;
          border: 2px solid var(--champagne-gold);
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-outline:hover {
          background: var(--champagne-gold);
          color: white;
          transform: translateY(-2px);
        }
        
        /* Enhanced Info Items */
        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .info-item:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateX(5px);
        }
        
        .info-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--champagne-gold) 0%, var(--dusty-rose) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .info-content h4 {
          font-family: var(--font-display);
          color: var(--warm-walnut);
          margin-bottom: 0.25rem;
          font-size: 1.125rem;
          font-weight: 600;
        }
        
        .info-content p {
          color: var(--sage-green);
          line-height: 1.6;
          margin: 0;
          font-family: var(--font-body);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .map-header {
            padding: 1.5rem 1rem 1rem;
          }
          
          .map-features {
            padding: 1rem;
          }
          
          .feature-grid {
            grid-template-columns: 1fr;
          }
          
          .map-actions {
            padding: 1rem;
            flex-direction: column;
          }
          
          .map-action-btn {
            justify-content: center;
            width: 100%;
          }
          
          .contact-actions {
            flex-direction: column;
          }
          
          .btn-primary,
          .btn-outline {
            justify-content: center;
            width: 100%;
          }
        }
        
        /* Loading animation for map */
        .map-embed-v2::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid var(--champagne-gold);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          z-index: 1;
        }
        
        .map-embed-v2 iframe {
          position: relative;
          z-index: 2;
        }
        
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </>
  );
}