import Icon from '../Icon'
import { getImageUrl } from '../../lib/sanityClient'

/**
 * ExperienceBlockRenderer Component
 * Renders experience section from Sanity CMS data
 */
export default function ExperienceBlockRenderer({ data, blockIndex }) {
  const {
    scriptAccent = 'The Rum River Experience',
    title = 'More Than a Venue',
    description = 'We don\'t just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.',
    sectionStyle = 'section-blush',
    layout = 'content-left',
    features = [],
    image,
    imageAlt = 'Wedding Celebration'
  } = data

  // Get optimized image URL
  const imageUrl = image ? getImageUrl(image, { width: 800, height: 600 }) : null

  if (features.length === 0) {
    return null
  }

  const isImageLeft = layout === 'image-left'

  return (
    <section className={`experience-section section ${sectionStyle}`}>
      <div className="content-wrapper">
        <div className="content-grid">
          {/* Content Section */}
          <div className={`experience-content ${isImageLeft ? 'order-2' : 'order-1'}`}>
            <div className="script-accent">{scriptAccent}</div>
            <h2 className="section-title">{title}</h2>
            <p className="lead">{description}</p>

            <div className="experience-features">
              {features.map((feature, index) => (
                <ExperienceFeature key={index} feature={feature} />
              ))}
            </div>
          </div>

          {/* Image Section */}
          {imageUrl && (
            <div className={`experience-image image-reveal styled-image light no-link ${isImageLeft ? 'order-1' : 'order-2'}`}>
              <img 
                src={imageUrl}
                alt={imageAlt} 
                width="800" 
                height="600" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Experience Feature Component
 */
function ExperienceFeature({ feature }) {
  const {
    title,
    description,
    icon = 'check',
    iconColor = 'primary',
    iconSize = 'lg'
  } = feature

  if (!title || !description) {
    return null
  }

  return (
    <div className="feature-item">
      <div className="feature-icon">
        <Icon name={icon} size={iconSize} color={iconColor} />
      </div>
      <div className="feature-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}