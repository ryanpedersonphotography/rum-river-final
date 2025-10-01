import { useState } from 'react'
import PageTemplate from '../components/PageTemplate'

export default function PropertyPage() {
  const [activeTab, setActiveTab] = useState('barn')

  const heroContent = (
    <>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: 'white'
      }}>
        Explore Our Property
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        Discover the stunning spaces and natural beauty that make Rum River Barn the perfect setting for your celebration.
      </p>
    </>
  )

  const propertyAreas = {
    barn: {
      title: "The Historic Barn",
      subtitle: "Rustic Elegance for Your Celebration",
      description: "Our crown jewel features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into historic charm. The barn can accommodate up to 300 guests for your reception with a spacious dance floor and elegant lighting.",
      features: [
        "Capacity: Up to 300 guests",
        "Climate controlled year-round", 
        "Professional lighting system",
        "Built-in bar area",
        "Bridal suite access",
        "Historic timber frame construction"
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600",
      details: "The barn dates back over 100 years and has been lovingly restored to maintain its historic character while providing modern comfort for your guests."
    },
    ceremony: {
      title: "Ceremony Sites",
      subtitle: "Picture-Perfect Outdoor Settings",
      description: "Choose from multiple breathtaking outdoor ceremony locations, each offering its own unique charm. From vineyard views to forest clearings, find the perfect backdrop for your vows.",
      features: [
        "Multiple ceremony site options",
        "Vineyard overlook location",
        "Forest clearing with natural arch",
        "Garden setting with pergola",
        "Weather backup plan available",
        "Professional sound system included"
      ],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600",
      details: "Each ceremony site can be customized with seating arrangements, altar decorations, and aisle treatments to match your vision."
    },
    grounds: {
      title: "The Grounds",
      subtitle: "400 Acres of Natural Beauty",
      description: "Sprawling across 400 acres of pristine Minnesota countryside, our grounds offer endless opportunities for photos and guest enjoyment. Explore vineyards, oak forests, and peaceful walking trails.",
      features: [
        "400 acres of manicured grounds",
        "Working vineyard with grape vines",
        "Mile-long oak forest trails",
        "Creek-side photo opportunities",
        "Vintage farm equipment displays",
        "Seasonal wildflower gardens"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600",
      details: "The property has been carefully developed over 100 years, creating a perfect blend of natural beauty and thoughtful landscaping."
    },
    bridal: {
      title: "Bridal Suite",
      subtitle: "Your Private Preparation Space",
      description: "A beautifully appointed bridal suite provides the perfect space for getting ready on your special day. Complete with natural lighting, seating areas, and all the amenities you need.",
      features: [
        "Private entrance and exit",
        "Large windows with natural light",
        "Comfortable seating for bridal party",
        "Full-length mirrors",
        "Refreshment station",
        "Climate controlled environment"
      ],
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600",
      details: "The suite is designed to be your peaceful retreat where you can relax and prepare with your closest friends and family."
    },
    reception: {
      title: "Reception Areas",
      subtitle: "Celebrate in Style",
      description: "Multiple reception areas allow for flexible event planning. From intimate gatherings to grand celebrations, we have the perfect space for your vision.",
      features: [
        "Indoor and outdoor options",
        "Full catering kitchen access",
        "Professional bar service area",
        "Dance floor with lighting",
        "Sound system throughout",
        "Flexible seating arrangements"
      ],
      image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1600",
      details: "Our reception areas can be configured to accommodate everything from plated dinners to cocktail receptions and everything in between."
    }
  }

  const tabs = [
    { id: 'barn', label: 'Historic Barn', icon: '🏛️' },
    { id: 'ceremony', label: 'Ceremony Sites', icon: '💒' },
    { id: 'grounds', label: 'The Grounds', icon: '🌳' },
    { id: 'bridal', label: 'Bridal Suite', icon: '👰' },
    { id: 'reception', label: 'Reception Areas', icon: '🎉' }
  ]

  return (
    <PageTemplate heroContent={heroContent}>
      
      {/* Interactive Property Gallery */}
      <section className="section">
        <div className="content-wrapper">
          
          {/* Tab Navigation */}
          <div className="property-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`property-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Area Content */}
          <div className="property-content">
            <div className="property-layout">
              <div className="property-image">
                <img 
                  src={propertyAreas[activeTab].image} 
                  alt={propertyAreas[activeTab].title}
                  style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
              
              <div className="property-info">
                <div className="script-accent">{propertyAreas[activeTab].subtitle}</div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '1.5rem'
                }}>
                  {propertyAreas[activeTab].title}
                </h2>
                
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: 'var(--sage-green)',
                  marginBottom: '2rem'
                }}>
                  {propertyAreas[activeTab].description}
                </p>

                <div className="property-features">
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: 'var(--warm-walnut)',
                    marginBottom: '1rem'
                  }}>
                    Features & Amenities
                  </h3>
                  <ul className="features-list">
                    {propertyAreas[activeTab].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="property-details">
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'var(--sage-green)',
                    fontStyle: 'italic',
                    marginTop: '2rem'
                  }}>
                    {propertyAreas[activeTab].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--warm-cream) 0%, var(--blush-pink) 100%)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div className="script-accent">Ready to Visit?</div>
            <h2 className="section-title">Schedule Your Property Tour</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Experience the beauty of Rum River Barn in person. Contact us to schedule a private tour of our property.
            </p>
            <a href="/contact" className="romantic-button primary">
              Book Your Tour
            </a>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}