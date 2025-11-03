import React, { useState } from 'react';
import Icon from '../components/Icon';

export default function FindYourWayV2DemoStandalone() {
  const [activeVariant, setActiveVariant] = useState('original');

  const handleDirectionsClick = () => {
    const address = "42618 78th Street, Hillman, MN 56338";
    const url = `https://www.google.com/maps/dir//${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const handleShareLocation = () => {
    const locationData = {
      title: 'Rum River Barn Location',
      text: 'Check out this beautiful wedding venue!',
      url: 'https://www.google.com/maps/place/42618+78th+St,+Hillman,+MN+56338'
    };

    if (navigator.share) {
      navigator.share(locationData);
    } else {
      navigator.clipboard.writeText('42618 78th Street, Hillman, MN 56338');
      alert('Address copied to clipboard!');
    }
  };

  const variants = [
    { id: 'original', name: 'Original Design', description: 'Classic form-inspired layout with map' },
    { id: 'modern', name: 'Modern Cards', description: 'Enhanced card-based design' },
    { id: 'split', name: 'Split Layout', description: 'Full-width split design' },
    { id: 'compact', name: 'Compact Mobile', description: 'Mobile-optimized layout' }
  ];

  return (
    <>
      <style>{`
        .find-your-way-v2-demo {
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
          max-width: 700px;
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

        /* Original Variant - Form-inspired Layout */
        .variant-original .contact-section {
          background: white;
          padding: 4rem 0;
        }

        .variant-original .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .variant-original .contact-content {
          padding: 2rem;
        }

        .variant-original .contact-form-wrapper {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid var(--champagne-gold);
        }

        /* Modern Cards Variant */
        .variant-modern .contact-section {
          background: var(--blush-pink);
          padding: 4rem 0;
        }

        .variant-modern .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .variant-modern .contact-content {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .variant-modern .contact-form-wrapper {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        /* Split Layout Variant */
        .variant-split .contact-section {
          background: white;
          padding: 0;
        }

        .variant-split .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 80vh;
        }

        .variant-split .contact-content {
          background: var(--warm-walnut);
          color: white;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .variant-split .contact-form-wrapper {
          background: var(--cream-pearl);
          display: flex;
          align-items: center;
          padding: 2rem;
        }

        /* Compact Mobile Variant */
        .variant-compact .contact-section {
          background: var(--cream-pearl);
          padding: 2rem 0;
        }

        .variant-compact .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 500px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .variant-compact .contact-content {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
        }

        .variant-compact .contact-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 2rem 0;
        }

        .variant-compact .contact-form-wrapper {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        /* Common Styles */
        .script-accent {
          font-family: var(--font-script);
          font-size: 1.75rem;
          color: var(--dusty-rose);
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--warm-walnut);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .lead {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--sage-green);
          margin-bottom: 2rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
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

        .contact-actions {
          display: flex;
          gap: 1rem;
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

        /* Map Container Styles */
        .map-container-v2 {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
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

        /* Responsive Design */
        @media (max-width: 1024px) {
          .variant-original .contact-grid,
          .variant-modern .contact-grid,
          .variant-split .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .variant-split .contact-content {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .demo-controls h1 {
            font-size: 2rem;
          }

          .variant-tabs {
            flex-direction: column;
            align-items: center;
          }

          .variant-tab {
            width: 100%;
            max-width: 300px;
          }

          .section-title {
            font-size: 2rem;
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

          .variant-compact .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Demo Controls */}
      <div className="demo-controls">
        <h1>Find Your Way V2 Demo</h1>
        <p>Modern location component inspired by contact forms, featuring heroicons and interactive maps. Built to replace traditional booking forms with engaging location discovery.</p>
        
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
      <div className={`find-your-way-v2-demo variant-${activeVariant}`}>
        
        {/* Original Variant */}
        <section className="contact-section section">
          <div className="content-wrapper">
            {activeVariant === 'original' && (
              <div className="section-header center">
                <div className="script-accent">Interactive Location</div>
                <h2 className="section-title">Find Your Way Version 2</h2>
                <p className="lead">A modern take on location discovery with heroicons and interactive map integration</p>
              </div>
            )}
            
            <div className="contact-grid">
              {/* Left side - Location Information */}
              <div className="contact-content">
                <div className="script-accent">Let's Start Planning</div>
                <h2 className="section-title">
                  {activeVariant === 'compact' ? 'Visit Us' : 'Visit Our Venue'}
                </h2>
                <p className="lead">
                  {activeVariant === 'compact' 
                    ? 'Discover our beautiful venue location and plan your visit.'
                    : 'Ready to see where your love story will unfold? Explore our location and discover why Rum River Wedding Barn is the perfect setting for your celebration.'
                  }
                </p>
                
                <div className="contact-info">
                  <div className="info-item">
                    <div className="info-icon">
                      <Icon name="location" size="lg" color="white" />
                    </div>
                    <div className="info-content">
                      <h4>Visit Us</h4>
                      <p>42618 78th Street<br />Hillman, MN 56338</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <Icon name="phone" size="lg" color="white" />
                    </div>
                    <div className="info-content">
                      <h4>Call Us</h4>
                      <p>(320) 492-8584<br />Available 7 days a week</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <Icon name="email" size="lg" color="white" />
                    </div>
                    <div className="info-content">
                      <h4>Email Us</h4>
                      <p>info@rumriverbarn.com<br />We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  {activeVariant !== 'compact' && (
                    <>
                      <div className="info-item">
                        <div className="info-icon">
                          <Icon name="clock" size="lg" color="white" />
                        </div>
                        <div className="info-content">
                          <h4>Tour Hours</h4>
                          <p>By appointment only<br />7 days a week</p>
                        </div>
                      </div>
                      
                      <div className="info-item">
                        <div className="info-icon">
                          <Icon name="map" size="lg" color="white" />
                        </div>
                        <div className="info-content">
                          <h4>Driving Distance</h4>
                          <p>45 min from Minneapolis<br />30 min from St. Cloud</p>
                        </div>
                      </div>
                    </>
                  )}
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
              
              {/* Right side - Interactive Map */}
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
                      onClick={handleShareLocation}
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
      </div>

      {/* Code Documentation Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Find Your Way V2 Component Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>Complete implementation guide for the modern location component with heroicons and interactive maps</p>
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
{`<!-- Find Your Way V2 - Form-Inspired Layout with Map -->
<section className="contact-section section">
  <div className="content-wrapper">
    <!-- Section Header -->
    <div className="section-header center">
      <div className="script-accent">Interactive Location</div>
      <h2 className="section-title">Find Your Way Version 2</h2>
      <p className="lead">A modern take on location discovery with heroicons and interactive map integration</p>
    </div>
    
    <!-- Two-Column Grid Layout -->
    <div className="contact-grid">
      <!-- Left Panel - Contact Information -->
      <div className="contact-content">
        <div className="script-accent">Let's Start Planning</div>
        <h2 className="section-title">Visit Our Venue</h2>
        <p className="lead">Ready to see where your love story will unfold? Explore our location...</p>
        
        <!-- Contact Information with Heroicons -->
        <div className="contact-info">
          <!-- Address -->
          <div className="info-item">
            <div className="info-icon">
              <Icon name="location" size="lg" color="white" />
            </div>
            <div className="info-content">
              <h4>Visit Us</h4>
              <p>42618 78th Street<br />Hillman, MN 56338</p>
            </div>
          </div>
          
          <!-- Phone -->
          <div className="info-item">
            <div className="info-icon">
              <Icon name="phone" size="lg" color="white" />
            </div>
            <div className="info-content">
              <h4>Call Us</h4>
              <p>(320) 492-8584<br />Available 7 days a week</p>
            </div>
          </div>
          
          <!-- Email -->
          <div className="info-item">
            <div className="info-icon">
              <Icon name="email" size="lg" color="white" />
            </div>
            <div className="info-content">
              <h4>Email Us</h4>
              <p>info@rumriverbarn.com<br />We respond within 24 hours</p>
            </div>
          </div>
          
          <!-- Hours -->
          <div className="info-item">
            <div className="info-icon">
              <Icon name="clock" size="lg" color="white" />
            </div>
            <div className="info-content">
              <h4>Tour Hours</h4>
              <p>By appointment only<br />7 days a week</p>
            </div>
          </div>
          
          <!-- Driving Distance -->
          <div className="info-item">
            <div className="info-icon">
              <Icon name="map" size="lg" color="white" />
            </div>
            <div className="info-content">
              <h4>Driving Distance</h4>
              <p>45 min from Minneapolis<br />30 min from St. Cloud</p>
            </div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div className="contact-actions">
          <button className="btn-primary" onClick={handleDirectionsClick}>
            <Icon name="location" size="sm" color="white" />
            Get Directions
          </button>
          <a href="tel:(320) 492-8584" className="btn-outline">
            <Icon name="phone" size="sm" />
            Call Now
          </a>
        </div>
      </div>
      
      <!-- Right Panel - Interactive Map (replaces form) -->
      <div className="contact-form-wrapper">
        <div className="map-container-v2">
          <!-- Map Header -->
          <div className="map-header">
            <h3>
              <Icon name="map" size="sm" color="primary" />
              Interactive Location Map
            </h3>
            <p>Click and drag to explore the venue location and surrounding area.</p>
          </div>
          
          <!-- Google Maps Embed -->
          <div className="map-embed-v2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rum River Barn Location - Interactive Map"
            />
          </div>
          
          <!-- Map Features Grid -->
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
          
          <!-- Map Action Buttons -->
          <div className="map-actions">
            <button className="map-action-btn" onClick={handleDirectionsClick}>
              <Icon name="location" size="sm" />
              Directions
            </button>
            <button className="map-action-btn" onClick={handleExpandMap}>
              <Icon name="expand" size="sm" />
              Full Map
            </button>
            <button className="map-action-btn" onClick={handleShareLocation}>
              <Icon name="share" size="sm" />
              Share
            </button>
          </div>
        </div>
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
{`import React, { useState } from 'react';
import Icon from '../components/Icon';

export default function FindYourWayV2Component() {
  const [activeVariant, setActiveVariant] = useState('original');

  // Venue data configuration
  const venueData = {
    name: "Rum River Barn",
    address: "42618 78th Street",
    city: "Hillman",
    state: "MN",
    zipCode: "56338",
    phone: "(320) 492-8584",
    email: "info@rumriverbarn.com",
    coordinates: { lat: 45.8936111, lng: -93.7851842 },
    drivingTimes: [
      { city: "Minneapolis", time: "45 min" },
      { city: "St. Cloud", time: "30 min" },
      { city: "Brainerd", time: "1 hour" }
    ],
    features: [
      { icon: "location", label: "Venue Location" },
      { icon: "home", label: "400-Acre Property" },
      { icon: "camera", label: "Photo Locations" },
      { icon: "users", label: "Guest Parking" }
    ]
  };

  // Interactive functions
  const handleDirectionsClick = () => {
    const address = \`\${venueData.address}, \${venueData.city}, \${venueData.state} \${venueData.zipCode}\`;
    const url = \`https://www.google.com/maps/dir//\${encodeURIComponent(address)}\`;
    window.open(url, '_blank');
  };

  const handleExpandMap = () => {
    const address = \`\${venueData.address}, \${venueData.city}, \${venueData.state} \${venueData.zipCode}\`;
    const url = \`https://www.google.com/maps/place/\${encodeURIComponent(address)}\`;
    window.open(url, '_blank');
  };

  const handleShareLocation = () => {
    const locationData = {
      title: \`\${venueData.name} Location\`,
      text: 'Check out this beautiful wedding venue!',
      url: \`https://www.google.com/maps/place/\${encodeURIComponent(venueData.address + ', ' + venueData.city + ', ' + venueData.state)}\`
    };

    if (navigator.share) {
      navigator.share(locationData);
    } else {
      const fullAddress = \`\${venueData.address}, \${venueData.city}, \${venueData.state} \${venueData.zipCode}\`;
      navigator.clipboard.writeText(fullAddress);
      alert('Address copied to clipboard!');
    }
  };

  const handleCallVenue = () => {
    window.location.href = \`tel:\${venueData.phone}\`;
  };

  const handleEmailVenue = () => {
    window.location.href = \`mailto:\${venueData.email}\`;
  };

  return (
    <section className="contact-section section">
      <div className="content-wrapper">
        <div className="section-header center">
          <div className="script-accent">Interactive Location</div>
          <h2 className="section-title">Find Your Way Version 2</h2>
          <p className="lead">A modern take on location discovery with heroicons and interactive map integration</p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Information Panel */}
          <ContactInformation 
            venueData={venueData}
            onDirectionsClick={handleDirectionsClick}
            onCallClick={handleCallVenue}
          />
          
          {/* Interactive Map Panel */}
          <InteractiveMapPanel 
            venueData={venueData}
            onDirectionsClick={handleDirectionsClick}
            onExpandClick={handleExpandMap}
            onShareClick={handleShareLocation}
          />
        </div>
      </div>
    </section>
  );
}

// Contact Information Component
function ContactInformation({ venueData, onDirectionsClick, onCallClick }) {
  const contactItems = [
    {
      icon: "location",
      title: "Visit Us",
      content: \`\${venueData.address}\\n\${venueData.city}, \${venueData.state} \${venueData.zipCode}\`
    },
    {
      icon: "phone",
      title: "Call Us",
      content: \`\${venueData.phone}\\nAvailable 7 days a week\`
    },
    {
      icon: "email",
      title: "Email Us",
      content: \`\${venueData.email}\\nWe respond within 24 hours\`
    },
    {
      icon: "clock",
      title: "Tour Hours",
      content: "By appointment only\\n7 days a week"
    },
    {
      icon: "map",
      title: "Driving Distance",
      content: venueData.drivingTimes.map(item => \`\${item.time} from \${item.city}\`).join('\\n')
    }
  ];

  return (
    <div className="contact-content">
      <div className="script-accent">Let's Start Planning</div>
      <h2 className="section-title">Visit Our Venue</h2>
      <p className="lead">
        Ready to see where your love story will unfold? Explore our location
        and discover why Rum River Wedding Barn is the perfect setting for your celebration.
      </p>
      
      <div className="contact-info">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
      
      <div className="contact-actions">
        <button className="btn-primary" onClick={onDirectionsClick}>
          <Icon name="location" size="sm" color="white" />
          Get Directions
        </button>
        <button className="btn-outline" onClick={onCallClick}>
          <Icon name="phone" size="sm" />
          Call Now
        </button>
      </div>
    </div>
  );
}

// Contact Item Component
function ContactItem({ icon, title, content }) {
  return (
    <div className="info-item">
      <div className="info-icon">
        <Icon name={icon} size="lg" color="white" />
      </div>
      <div className="info-content">
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
function InteractiveMapPanel({ venueData, onDirectionsClick, onExpandClick, onShareClick }) {
  const mapSrc = \`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d\${venueData.coordinates.lng}!3d\${venueData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s\${encodeURIComponent(venueData.address + ', ' + venueData.city + ', ' + venueData.state)}!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus\`;

  return (
    <div className="contact-form-wrapper">
      <div className="map-container-v2">
        <div className="map-header">
          <h3>
            <Icon name="map" size="sm" color="primary" />
            Interactive Location Map
          </h3>
          <p>Click and drag to explore the venue location and surrounding area.</p>
        </div>
        
        <div className="map-embed-v2">
          <iframe
            src={mapSrc}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={\`\${venueData.name} Location - Interactive Map\`}
          />
        </div>
        
        <div className="map-features">
          <div className="feature-grid">
            {venueData.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <Icon name={feature.icon} size="sm" color="accent" />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="map-actions">
          <button className="map-action-btn" onClick={onDirectionsClick}>
            <Icon name="location" size="sm" />
            Directions
          </button>
          <button className="map-action-btn" onClick={onExpandClick}>
            <Icon name="expand" size="sm" />
            Full Map
          </button>
          <button className="map-action-btn" onClick={onShareClick}>
            <Icon name="share" size="sm" />
            Share
          </button>
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
{`/* Find Your Way V2 - Form-Inspired Layout */
.contact-section {
  background: white;
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Contact Content Panel */
.contact-content {
  padding: 2rem;
}

.script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--sage-green);
  margin-bottom: 2rem;
}

/* Contact Information Items */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
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

/* Action Buttons */
.contact-actions {
  display: flex;
  gap: 1rem;
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

/* Map Container - Replaces Form */
.contact-form-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid var(--champagne-gold);
}

.map-container-v2 {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}

/* Map Header */
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

/* Map Embed */
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

/* Variant Styles */

/* Modern Cards Variant */
.variant-modern .contact-section {
  background: var(--blush-pink);
  padding: 4rem 0;
}

.variant-modern .contact-content {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.variant-modern .contact-form-wrapper {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Split Layout Variant */
.variant-split .contact-section {
  background: white;
  padding: 0;
}

.variant-split .contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
}

.variant-split .contact-content {
  background: var(--warm-walnut);
  color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.variant-split .contact-form-wrapper {
  background: var(--cream-pearl);
  display: flex;
  align-items: center;
  padding: 2rem;
}

/* Compact Mobile Variant */
.variant-compact .contact-section {
  background: var(--cream-pearl);
  padding: 2rem 0;
}

.variant-compact .contact-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
}

.variant-compact .contact-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.variant-compact .contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .variant-split .contact-content {
    padding: 3rem 2rem;
  }
}

@media (max-width: 768px) {
  .contact-content {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
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
  
  .variant-compact .contact-info {
    grid-template-columns: 1fr;
  }
}

/* Loading Animation */
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

/* Accessibility Enhancements */
.info-item:focus-within .info-icon {
  transform: scale(1.1);
  background: var(--dusty-rose);
}

.map-action-btn:focus,
.btn-primary:focus,
.btn-outline:focus {
  outline: 2px solid var(--champagne-gold);
  outline-offset: 2px;
}

/* Print Styles */
@media print {
  .map-embed-v2 {
    background: white;
    color: black;
  }
  
  .map-embed-v2::after {
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
  );
}