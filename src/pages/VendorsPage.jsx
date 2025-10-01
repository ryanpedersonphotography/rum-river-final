import PageTemplate from '../components/PageTemplate'

export default function VendorsPage() {
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
        Preferred Vendor Directory
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        Our carefully curated list of trusted wedding professionals who understand our venue and share our commitment to making your day perfect.
      </p>
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
          {vendorCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-pink-200">
                <span className="text-3xl opacity-80">{category.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  margin: 0,
                  letterSpacing: '-0.02em'
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Vendor List */}
              <div className="flex flex-col gap-8">
                {category.vendors.map((vendor, vendorIndex) => (
                  <div key={vendorIndex} className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0 py-6 border-b border-amber-100 last:border-b-0 transition-all duration-300 hover:bg-amber-50 hover:px-4 hover:-mx-4 hover:rounded-lg">
                    <div className="flex-1 md:mr-8">
                      <h4 className="text-xl md:text-2xl mb-2" style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        color: 'var(--warm-walnut)',
                        letterSpacing: '-0.01em'
                      }}>
                        {vendor.name}
                      </h4>
                      <p className="leading-relaxed text-base max-w-2xl" style={{
                        color: 'var(--sage-green)',
                        margin: 0
                      }}>
                        {vendor.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 md:text-right flex items-center">
                      <span className="inline-block px-4 py-2 bg-amber-50 border border-pink-200 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-pink-300 hover:text-white hover:scale-105" style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--warm-walnut)',
                        letterSpacing: '0.02em'
                      }}>
                        {vendor.phone}
                      </span>
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
        padding: '3.5rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div className="script-accent">Join Our Network</div>
            <h2 className="section-title">Are You a Wedding Professional?</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
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