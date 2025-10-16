import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPageBySlug } from '../lib/sanityClient'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

// Block components
import HeroBlockRenderer from './blocks/HeroBlockRenderer'
import VenueDiscoveryBlockRenderer from './blocks/VenueDiscoveryBlockRenderer'
import FeatureBlocksBlockRenderer from './blocks/FeatureBlocksBlockRenderer'
import GalleryBlockRenderer from './blocks/GalleryBlockRenderer'
import ExperienceBlockRenderer from './blocks/ExperienceBlockRenderer'
import TestimonialsBlockRenderer from './blocks/TestimonialsBlockRenderer'
import FormBlockRenderer from './blocks/FormBlockRenderer'

// Block type mapping
const BLOCK_COMPONENTS = {
  heroBlock: HeroBlockRenderer,
  venueDiscoveryBlock: VenueDiscoveryBlockRenderer,
  featureBlocksBlock: FeatureBlocksBlockRenderer,
  galleryBlock: GalleryBlockRenderer,
  experienceBlock: ExperienceBlockRenderer,
  testimonialsBlock: TestimonialsBlockRenderer,
  formBlock: FormBlockRenderer,
}

/**
 * PageRenderer Component
 * Fetches page data from Sanity and renders blocks dynamically
 */
export default function PageRenderer({ 
  slug: propSlug, 
  fallbackContent = null,
  showHeader = true,
  showFooter = true
}) {
  const { slug: routeSlug } = useParams()
  const slug = propSlug || routeSlug
  
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    if (!slug) {
      setError('No page slug provided')
      setLoading(false)
      return
    }

    const fetchPage = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const data = await fetchPageBySlug(slug)
        
        if (data) {
          setPageData(data)
        } else {
          // If no Sanity data, use fallback content
          if (fallbackContent) {
            setPageData(fallbackContent)
          } else {
            setError('Page not found')
          }
        }
      } catch (err) {
        console.error('Error fetching page:', err)
        
        // Use fallback content on error
        if (fallbackContent) {
          setPageData(fallbackContent)
        } else {
          setError('Failed to load page content')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPage()
  }, [slug, fallbackContent])

  // Handle floating CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroHalfway = heroSection.offsetHeight * 0.5
        setShowFloatingCTA(window.scrollY > heroHalfway)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Loading state
  if (loading) {
    return (
      <>
        {showHeader && <Header />}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '60vh',
          fontSize: '1.2rem',
          color: 'var(--sage-green)'
        }}>
          Loading page content...
        </div>
        {showFooter && <Footer />}
      </>
    )
  }

  // Error state
  if (error || !pageData) {
    return (
      <>
        <SEO 
          title="Page Not Found"
          description="The requested page could not be found"
        />
        {showHeader && <Header />}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '60vh',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--warm-walnut)' }}>
            {error || 'Page not found'}
          </h2>
          <p style={{ color: '#666' }}>
            Please check the URL or try refreshing the page
          </p>
        </div>
        {showFooter && <Footer />}
      </>
    )
  }

  // Find hero block for floating CTA
  const heroBlock = pageData.contentBlocks?.find(block => block._type === 'heroBlock')
  const showFloatingCtaButton = heroBlock?.showFloatingCta && showFloatingCTA

  return (
    <>
      <SEO 
        title={pageData.seo?.metaTitle || pageData.title}
        description={pageData.seo?.metaDescription}
        keywords={pageData.seo?.keywords}
        image={pageData.seo?.openGraphImage}
        noIndex={pageData.seo?.noIndex}
      />
      
      {showHeader && <Header />}

      {/* Floating CTA Button */}
      {showFloatingCtaButton && (
        <a 
          href={heroBlock.floatingCtaText?.includes('tour') ? '#lets-connect-form' : '/contact'} 
          className="floating-cta"
        >
          <span className="icon">{heroBlock.floatingCtaIcon === 'calendar' ? '📅' : '📞'}</span>
          {heroBlock.floatingCtaText || 'Schedule Your Tour'}
        </a>
      )}

      {/* Render page blocks */}
      {pageData.contentBlocks?.map((block, index) => {
        const BlockComponent = BLOCK_COMPONENTS[block._type]
        
        if (!BlockComponent) {
          console.warn(`No component found for block type: ${block._type}`)
          return null
        }

        return (
          <BlockComponent 
            key={`${block._type}-${index}`} 
            data={block}
            blockIndex={index}
          />
        )
      })}

      {showFooter && <Footer />}
    </>
  )
}

// Helper hook for using PageRenderer in existing pages
export function usePageRenderer(slug, fallbackContent) {
  const [pageData, setPageData] = useState(fallbackContent)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const data = await fetchPageBySlug(slug)
        
        if (data) {
          setPageData(data)
        } else if (fallbackContent) {
          setPageData(fallbackContent)
        } else {
          setError('Page not found')
        }
      } catch (err) {
        console.error('Error fetching page:', err)
        if (fallbackContent) {
          setPageData(fallbackContent)
        } else {
          setError('Failed to load page content')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPage()
  }, [slug, fallbackContent])

  return { pageData, loading, error }
}