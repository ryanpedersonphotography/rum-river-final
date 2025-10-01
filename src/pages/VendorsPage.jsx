import PageTemplate from '../components/PageTemplate'

export default function VendorsPage() {
  const heroContent = (
    <>
      <div className="script-accent">Trusted Partners</div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: '1rem',
        color: 'white'
      }}>
        Preferred Vendor Directory
      </h1>
      <p className="lead" style={{
        fontSize: '1rem',
        lineHeight: 1.6,
        opacity: 0.9,
        marginBottom: '1.5rem'
      }}>
        Our carefully curated list of trusted wedding professionals who understand our venue and share our commitment to making your day perfect.
      </p>
      <a href="#vendors" className="romantic-button primary">
        Browse Vendors
      </a>
    </>
  )

  const vendorCategories = [
    {
      title: "DJ & Entertainment",
      icon: "🎵",
      vendors: [
        {
          name: "Sprunk Entertainment",
          phone: "612-440-0777",
          description: "Professional DJ and entertainment services for weddings and special events."
        },
        {
          name: "Impressions Mobile Music",
          phone: "320-237-7777",
          description: "Mobile DJ services with extensive music library and professional sound equipment."
        },
        {
          name: "DJCJ Global",
          phone: "612-770-2034",
          description: "Professional DJ services specializing in wedding celebrations and events."
        }
      ]
    },
    {
      title: "Catering and Bar Service",
      icon: "🍽️",
      vendors: [
        {
          name: "Northern Lights Ballroom",
          phone: "320-369-4622",
          description: "Full-service catering with experience in venue events and wedding celebrations."
        },
        {
          name: "Fable Catering",
          phone: "612-500-6838",
          description: "Creative catering services with custom menu options for special events."
        },
        {
          name: "Pit Happens",
          phone: "218-851-0003",
          description: "BBQ and outdoor catering specializing in rustic, farm-to-table dining experiences."
        },
        {
          name: "Minnesota School of Bartending",
          phone: "651-645-1252",
          description: "Professional bartending services with trained, certified bartenders for events."
        }
      ]
    },
    {
      title: "Florist",
      icon: "🌸",
      vendors: [
        {
          name: "Princeton Floral",
          phone: "763-389-3433",
          description: "Local florist specializing in wedding arrangements, bridal bouquets, and venue decorations."
        }
      ]
    },
    {
      title: "Shuttle Service",
      icon: "🚌",
      vendors: [
        {
          name: "Trobec's Bus Service",
          phone: "320-251-1202",
          description: "Transportation services for wedding parties and guest shuttle needs."
        }
      ]
    },
    {
      title: "Accommodations",
      icon: "🏨",
      vendors: [
        {
          name: "Grand Casino, Mille Lacs",
          phone: "800-626-5825",
          description: "Hotel accommodations with group rates available for wedding guests."
        },
        {
          name: "Phoenix Hotel, Milaca",
          phone: "320-982-2600",
          description: "Local hotel accommodations in nearby Milaca for wedding guests."
        },
        {
          name: "Hillbilly Haven Motel, Pierz",
          phone: "320-468-9993",
          description: "Affordable motel accommodations in Pierz area for wedding guests."
        }
      ]
    }
  ]

  return (
    <PageTemplate heroContent={heroContent}>
      
      {/* Vendor Categories Section */}
      <section id="vendors" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Our Network</div>
            <h2 className="section-title">Trusted Wedding Professionals</h2>
            <p className="lead">
              These are companies we have enjoyed working with and would recommend, but do not require you to use. 
              Each vendor has experience working at Rum River Barn and understands our venue.
            </p>
          </div>

          {vendorCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '4rem' }}>
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid var(--dusty-rose)'
              }}>
                <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: 'var(--warm-walnut)',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Vendor Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
              }}>
                {category.vendors.map((vendor, vendorIndex) => (
                  <div key={vendorIndex} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    border: '1px solid var(--blush-pink)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                  }}>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      color: 'var(--warm-walnut)',
                      marginBottom: '0.5rem'
                    }}>
                      {vendor.name}
                    </h4>
                    <p style={{
                      color: 'var(--sage-green)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}>
                      {vendor.description}
                    </p>
                    <div style={{
                      color: 'var(--warm-walnut)',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}>
                      📞 {vendor.phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vendor Application CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--warm-cream) 0%, var(--blush-pink) 100%)',
        padding: '5rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div className="script-accent">Join Our Network</div>
            <h2 className="section-title">Are You a Wedding Professional?</h2>
            <p className="lead" style={{ marginBottom: '2.5rem' }}>
              We're always looking for talented professionals to join our preferred vendor network. 
              If you're interested in working with couples at Rum River Barn, we'd love to hear from you.
            </p>
            <a href="/contact" className="romantic-button primary">
              Apply to Join
            </a>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}