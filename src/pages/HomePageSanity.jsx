import PageRenderer from '../components/PageRenderer'
import { localHomePageContent } from '../lib/localContent'

/**
 * HomePage with Sanity CMS Integration
 * Uses PageRenderer to fetch and display content from Sanity
 * Falls back to local content if Sanity is unavailable
 */
export default function HomePage() {
  // Create fallback content structure for PageRenderer
  const fallbackContent = {
    title: 'Homepage',
    slug: { current: 'homepage' },
    seo: {
      metaTitle: 'Rum River Wedding Barn - Minnesota\'s Premier Wedding Venue',
      metaDescription: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
      keywords: ['wedding venue', 'Minnesota wedding', 'barn wedding', 'rustic wedding', 'Rum River']
    },
    contentBlocks: [
      // Hero Block
      {
        _type: 'heroBlock',
        ...localHomePageContent.hero,
        scrollText: 'Discover Your Perfect Day',
        showFloatingCta: true,
        floatingCtaText: 'Schedule Your Tour',
        floatingCtaIcon: 'calendar'
      },
      
      // Venue Discovery Block
      {
        _type: 'venueDiscoveryBlock',
        scriptAccent: 'Your Perfect Setting',
        title: 'Discover Our Spaces',
        description: 'Every corner tells a story, every space creates memories',
        sectionStyle: 'section-cream'
      },
      
      // Feature Blocks
      {
        _type: 'featureBlocksBlock',
        ...localHomePageContent.featureBlocks,
        sectionStyle: 'alternating-blocks',
        centerContent: true,
        blocks: localHomePageContent.featureBlocks.blocks
      },
      
      // Gallery Block (Love Stories)
      {
        _type: 'galleryBlock',
        ...localHomePageContent.loveStories,
        sectionStyle: 'section-cream',
        galleryType: 'weddings',
        maxWeddings: 6,
        ctaText: 'View All Real Weddings',
        ctaLink: '/real-weddings',
        showCta: true
      },
      
      // Experience Block
      {
        _type: 'experienceBlock',
        ...localHomePageContent.experience,
        sectionStyle: 'section-blush',
        layout: 'content-left',
        features: localHomePageContent.experience.features.map(feature => ({
          ...feature,
          icon: feature.title === 'All-Inclusive Planning' ? 'check' :
                feature.title === 'Customizable Packages' ? 'sparkles' : 'home',
          iconColor: 'primary',
          iconSize: 'lg'
        })),
        imageAlt: 'Wedding Celebration'
      },
      
      // Testimonials Block
      {
        _type: 'testimonialsBlock',
        ...localHomePageContent.testimonials,
        sectionStyle: 'section-cream',
        testimonials: localHomePageContent.testimonials.items,
        maxTestimonials: 3,
        showStarRating: true,
        starCount: 5,
        layout: 'grid'
      },
      
      // Form Block
      {
        _type: 'formBlock',
        title: 'Start Planning Your Perfect Day',
        subtitle: 'Schedule Your Tour',
        description: 'We\'d love to show you around our beautiful venue and discuss your wedding vision.',
        formType: 'tour',
        formName: 'home-schedule-tour',
        submitText: 'Schedule Tour',
        loadingText: 'SCHEDULING...',
        redirectPath: '/thank-you',
        sectionStyle: 'cta-contact-section',
        lightTheme: false,
        showHeader: true
      }
    ]
  }

  return (
    <PageRenderer 
      slug="homepage"
      fallbackContent={fallbackContent}
      showHeader={true}
      showFooter={true}
    />
  )
}