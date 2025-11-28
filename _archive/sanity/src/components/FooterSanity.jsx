import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanityClient'
import { Link } from 'react-router-dom'

const FOOTER_QUERY = `*[_type == "footerSettings" && (_id == "footerSettings" || _id == "drafts.footerSettings")] | order(_updatedAt desc)[0]{
  brandSection {
    title,
    tagline
  },
  contactSection {
    title,
    address {
      street,
      city,
      state,
      zip
    },
    phone,
    email
  },
  socialSection {
    title,
    links[] {
      platform,
      displayName,
      url
    }
  },
  quickLinksSection {
    enabled,
    title,
    links[] {
      text,
      url
    }
  },
  copyrightSection {
    copyrightText,
    additionalText,
    legalLinks[] {
      text,
      url
    }
  }
}`

export default function FooterSanity() {
  const [footerData, setFooterData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use a fresh client without CDN for immediate updates
    const freshClient = sanityClient.withConfig({ useCdn: false })
    
    freshClient
      .fetch(FOOTER_QUERY)
      .then(data => {
        console.log('Footer data fetched:', data?.brandSection?.title, data?.copyrightSection?.copyrightText)
        if (data) {
          setFooterData(data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching footer data:', err)
        setLoading(false)
      })
  }, [])

  // Fallback to hardcoded footer while loading or if no data
  if (loading || !footerData) {
    return <FooterFallback />
  }

  const { brandSection, contactSection, socialSection, quickLinksSection, copyrightSection } = footerData

  // Get current year for copyright
  const currentYear = new Date().getFullYear()
  const copyrightText = copyrightSection?.copyrightText?.replace(/\d{4}/, currentYear) || `© ${currentYear} Rum River Wedding Barn. All rights reserved.`

  return (
    <footer style={{
      padding: '4rem 2rem 2.5rem',
      background: 'var(--text-dark)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          textAlign: 'left'
        }}>
          {/* Brand Section */}
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>
              {brandSection?.title || 'Rum River Wedding Barn'}
            </h4>
            <p style={{ 
              lineHeight: 1.8, 
              fontFamily: 'var(--font-body)', 
              color: 'var(--accent-gold)',
              whiteSpace: 'pre-line'
            }}>
              {brandSection?.tagline || "Minnesota's premier wedding venue\nwhere dreams come to life"}
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>
              {contactSection?.title || 'Visit Us'}
            </h4>
            <p style={{ 
              lineHeight: 1.8, 
              fontFamily: 'var(--font-body)', 
              color: 'var(--accent-gold)' 
            }}>
              {contactSection?.address?.street && (
                <>
                  {contactSection.address.street}<br />
                  {contactSection.address.city}, {contactSection.address.state} {contactSection.address.zip}<br />
                </>
              )}
              {contactSection?.phone && (
                <a 
                  href={`tel:${contactSection.phone.replace(/\D/g, '')}`}
                  style={{ 
                    color: 'var(--accent-gold)',
                    textDecoration: 'none'
                  }}
                >
                  {contactSection.phone}
                </a>
              )}
              {contactSection?.email && (
                <>
                  <br />
                  <a 
                    href={`mailto:${contactSection.email}`}
                    style={{ 
                      color: 'var(--accent-gold)',
                      textDecoration: 'none'
                    }}
                  >
                    {contactSection.email}
                  </a>
                </>
              )}
            </p>
          </div>

          {/* Social Section */}
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>
              {socialSection?.title || 'Follow Along'}
            </h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {socialSection?.links?.length > 0 ? (
                socialSection.links.map((link, index) => (
                  <a 
                    key={link.platform || index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--accent-gold)', 
                      textDecoration: 'none', 
                      fontFamily: 'var(--font-body)' 
                    }}
                  >
                    {link.displayName || link.platform}
                  </a>
                ))
              ) : (
                <>
                  <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Facebook</a>
                  <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Instagram</a>
                  <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Pinterest</a>
                </>
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          {quickLinksSection?.enabled && quickLinksSection?.links?.length > 0 && (
            <div>
              <h4 style={{
                color: 'var(--accent-gold)',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}>
                {quickLinksSection.title || 'Quick Links'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {quickLinksSection.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    style={{ 
                      color: 'var(--accent-gold)', 
                      textDecoration: 'none', 
                      fontFamily: 'var(--font-body)' 
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Copyright Section */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--accent-gold)' }}>
            {copyrightText}
            {copyrightSection?.additionalText && (
              <> | {copyrightSection.additionalText}</>
            )}
            {copyrightSection?.legalLinks?.map((link, index) => (
              <span key={index}>
                {' | '}
                <Link 
                  to={link.url} 
                  style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}
                >
                  {link.text}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}

// Fallback component with hardcoded values
function FooterFallback() {
  return (
    <footer style={{
      padding: '4rem 2rem 2.5rem',
      background: 'var(--text-dark)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Rum River Barn</h4>
            <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'var(--accent-gold)' }}>
              Minnesota's premier wedding venue<br />
              where dreams come to life
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Visit Us</h4>
            <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'var(--accent-gold)' }}>
              42618 78th Street<br />
              Hillman, MN 56338<br />
              (320) 492-8584
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Follow Along</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Facebook</a>
              <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Instagram</a>
              <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Pinterest</a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--accent-gold)' }}>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
        </div>
      </div>
    </footer>
  )
}