import { useState, useEffect } from 'react'
import { createClient } from '@sanity/client'
import PageTemplate from '../components/PageTemplate'
import Icon from '../components/Icon'
import ScheduleTourForm from '../components/ScheduleTourForm'
import SanityDataToggle from '../components/SanityDataToggle'
import { getClientConfig } from '../config/sanity.config'

// Sanity client
const client = createClient(getClientConfig('frontend'))

export default function VendorsPageWithToggle() {
  const [useSanityData, setUseSanityData] = useState(false)
  const [sanityData, setSanityData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch Sanity data when toggle is turned on
  useEffect(() => {
    if (useSanityData && !sanityData) {
      setLoading(true)
      setError(null)
      
      client.fetch(`
        *[_id == "vendorsPage"][0]{
          title,
          hero,
          vendorCategories[] {
            title,
            iconName,
            vendors[] {
              name,
              phone,
              description,
              website
            }
          },
          contactCta,
          seo
        }
      `)
      .then(data => {
        setSanityData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching Sanity data:', err)
        setError(err.message)
        setLoading(false)
      })
    }
  }, [useSanityData, sanityData])

  // Hardcoded data (current implementation)
  const hardcodedHeroContent = (
    <>
      <h1 className="page-hero-title">
        Preferred Vendor Directory
        <span className="data-source-indicator hardcoded">Hardcoded</span>
      </h1>
      <p className="page-hero-lead">
        Our carefully curated list of trusted wedding professionals who understand our venue and share our commitment to making your day perfect.
      </p>
    </>
  )

  // Sanity hero content
  const sanityHeroContent = sanityData && (
    <>
      <h1 className="page-hero-title">
        {sanityData.hero?.title || sanityData.title || 'Preferred Vendors'}
        <span className="data-source-indicator sanity">Sanity CMS</span>
      </h1>
      <p className="page-hero-lead">
        {sanityData.hero?.lead || 'Loading...'}
      </p>
    </>
  )

  // Hardcoded vendor categories
  const hardcodedVendorCategories = [
    {
      title: "DJ & Entertainment",
      iconName: "music",
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
      iconName: "cake",
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
      iconName: "sparkles",
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
      iconName: "truck",
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
      iconName: "building",
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

  // Use Sanity data directly if available, otherwise use hardcoded
  const vendorCategories = useSanityData && sanityData?.vendorCategories 
    ? sanityData.vendorCategories 
    : hardcodedVendorCategories
  const heroContent = useSanityData ? sanityHeroContent : hardcodedHeroContent

  return (
    <>
      {/* Data Source Toggle */}
      <SanityDataToggle 
        onToggle={setUseSanityData}
        initialState={useSanityData}
      />

      <PageTemplate 
        heroContent={heroContent}
        heroImage="/images/venue/barn-exterior-welcome-sign-entrance.jpg"
      >
        
        {/* Loading/Error States */}
        {useSanityData && loading && (
          <div className="section">
            <div className="content-wrapper">
              <p style={{ textAlign: 'center', padding: '2rem' }}>Loading Sanity data...</p>
            </div>
          </div>
        )}

        {useSanityData && error && (
          <div className="section">
            <div className="content-wrapper">
              <p style={{ textAlign: 'center', color: 'red', padding: '2rem' }}>
                Error loading Sanity data: {error}
              </p>
            </div>
          </div>
        )}

        {/* Vendor Intro (Sanity only) */}
        {useSanityData && sanityData?.vendorIntro && (
          <section className="section section-cream">
            <div className="content-wrapper">
              <div className="section-header center">
                <h2 className="section-title">{sanityData.vendorIntro.title}</h2>
                <p className="section-lead">{sanityData.vendorIntro.content}</p>
                {sanityData.vendorIntro.benefits && (
                  <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '2rem auto' }}>
                    {sanityData.vendorIntro.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* Vendor Categories Section */}
        <section id="vendors" className="section">
          <div className="content-wrapper">
            {vendorCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} style={{ marginBottom: '5rem' }}>
                {/* Category Header */}
                <div className="section-header center" style={{ marginBottom: '3rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Icon name={category.iconName} size="lg" color="primary" />
                  </div>
                  <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0' }}>
                    {category.title}
                  </h2>
                  {useSanityData && category.description && (
                    <p className="section-lead">{category.description}</p>
                  )}
                  {useSanityData && category.vendorCount !== undefined && (
                    <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                      {category.vendorCount} vendors in this category
                    </p>
                  )}
                </div>

                {/* Vendor Cards Grid */}
                {!useSanityData && category.vendors.length > 0 ? (
                  <div className="testimonials-grid">
                    {category.vendors.map((vendor, vendorIndex) => (
                      <div key={vendorIndex} className="testimonial-card">
                        <h3 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.75rem',
                          fontWeight: 400,
                          color: 'var(--warm-walnut)',
                          marginBottom: '1rem'
                        }}>
                          {vendor.name}
                        </h3>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          color: 'var(--sage-green)',
                          marginBottom: '1.5rem'
                        }}>
                          {vendor.description}
                        </p>
                        <div style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: 'var(--warm-walnut)',
                          letterSpacing: '0.02em'
                        }}>
                          📞 {vendor.phone}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : useSanityData && (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '2rem', 
                    background: '#f5f5f5', 
                    borderRadius: '8px' 
                  }}>
                    <p style={{ color: '#666' }}>
                      Individual vendor details not yet added to Sanity CMS.
                    </p>
                    <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                      Category structure is set up with {category.vendorCount || 0} vendors expected.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Vendor Resources (Sanity only) */}
        {useSanityData && sanityData?.vendorResources && (
          <section className="section section-light">
            <div className="content-wrapper">
              <div className="section-header center">
                <h2 className="section-title">{sanityData.vendorResources.title}</h2>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
                  {sanityData.vendorResources.resources?.map((resource, idx) => (
                    <div key={idx} className="card" style={{ padding: '2rem', maxWidth: '300px' }}>
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      {resource.downloadUrl && (
                        <a href={resource.downloadUrl} className="button button-secondary">
                          Download
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Vendor Application Form */}
        <ScheduleTourForm
          formName="vendor-application"
          title={useSanityData && sanityData?.becomeVendor?.title || "Are You a Wedding Professional?"}
          subtitle="Join Our Network"
          description={useSanityData && sanityData?.becomeVendor?.description || "We're always looking for talented professionals to join our preferred vendor network. If you're interested in working with couples at Rum River Barn, we'd love to hear from you."}
          submitText={useSanityData && sanityData?.becomeVendor?.buttonText || "Apply to Join"}
          loadingText="SUBMITTING APPLICATION..."
          lightTheme={true}
          formType="vendor"
          sectionStyle={{
            background: 'linear-gradient(135deg, var(--warm-cream) 0%, var(--blush-pink) 100%)',
            padding: '3.5rem 0'
          }}
        />

      </PageTemplate>
    </>
  )
}