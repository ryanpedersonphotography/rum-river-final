import CTAButton from '../CTAButton'
import { getImageUrl } from '../../lib/sanityClient'

/**
 * HeroBlockRenderer Component
 * Renders hero section from Sanity CMS data
 */
export default function HeroBlockRenderer({ data, blockIndex }) {
  const {
    scriptAccent = 'Where Dreams Begin',
    titleLine1 = 'Rum River',
    titleLine2 = 'Wedding Barn',
    description = 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
    ctaText = 'Schedule Your Visit',
    ctaLink = '/contact',
    scrollText = 'Discover Your Perfect Day',
    backgroundImage
  } = data

  // Get optimized background image URL
  const backgroundImageUrl = backgroundImage 
    ? getImageUrl(backgroundImage, { width: 1920, height: 1080, quality: 85 })
    : null

  const heroStyle = backgroundImageUrl 
    ? { backgroundImage: `url(${backgroundImageUrl})` }
    : {}

  return (
    <section 
      id="home" 
      className="hero-enhanced"
      style={heroStyle}
    >
      <div className="romantic-overlay"></div>
      <div className="content-wrapper">
        <div className="hero-content">
          <div className="script-accent">{scriptAccent}</div>
          <h1 className="hero-headline">
            {titleLine1}<br />
            <span className="hero-accent">{titleLine2}</span>
          </h1>
          <p className="lead hero-lead">
            {description}
          </p>
          <div className="hero-buttons">
            <CTAButton href={ctaLink} variant="primary">
              {ctaText}
            </CTAButton>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>{scrollText}</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}