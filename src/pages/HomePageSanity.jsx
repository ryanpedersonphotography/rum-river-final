import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanityClient'
import { HOME_PAGE } from '../lib/pageQueries'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import HeroBlockRenderer from '../components/blocks/HeroBlockRenderer'
import VenueDiscoveryBlockRenderer from '../components/blocks/VenueDiscoveryBlockRenderer'
import FeatureBlocksBlockRenderer from '../components/blocks/FeatureBlocksBlockRenderer'
import GalleryBlockRenderer from '../components/blocks/GalleryBlockRenderer'
import ExperienceBlockRenderer from '../components/blocks/ExperienceBlockRenderer'
import TestimonialsBlockRenderer from '../components/blocks/TestimonialsBlockRenderer'
import FormBlockRenderer from '../components/blocks/FormBlockRenderer'

export default function HomePage() {
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    sanityClient.fetch(HOME_PAGE).then(data => {
      if (!mounted) return
      setPage(data)
      setLoading(false)
    }).catch(() => setLoading(false))
    return () => { mounted = false }
  }, [])

  if (loading) {
    return (
      <>
        <Header />
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
        <Footer />
      </>
    )
  }

  if (!page) {
    return (
      <>
        <Header />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '60vh',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--warm-walnut)' }}>Page not found</h2>
          <p style={{ color: '#666' }}>Please check the URL or try refreshing the page</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <SEO 
        title={page.seo?.metaTitle || page.title}
        description={page.seo?.metaDescription}
        keywords={page.seo?.keywords}
        image={page.seo?.openGraphImage}
        noIndex={page.seo?.noIndex}
      />
      
      <Header />

      {/* Render hero */}
      {page.hero && <HeroBlockRenderer data={page.hero} />}
      
      {/* Render other blocks */}
      {page.venueDiscovery && <VenueDiscoveryBlockRenderer data={page.venueDiscovery} />}
      {page.featureBlocks && <FeatureBlocksBlockRenderer data={page.featureBlocks} />}
      {page.loveStories && <GalleryBlockRenderer data={page.loveStories} />}
      {page.experience && <ExperienceBlockRenderer data={page.experience} />}
      {page.testimonials && <TestimonialsBlockRenderer data={page.testimonials} />}
      {page.scheduleTour && <FormBlockRenderer data={page.scheduleTour} />}

      <Footer />
    </>
  )
}