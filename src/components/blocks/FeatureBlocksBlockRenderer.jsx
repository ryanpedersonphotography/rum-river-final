import { getImageUrl } from '../../lib/sanityClient'

/**
 * FeatureBlocksBlockRenderer Component
 * Renders feature blocks section from Sanity CMS data
 */
export default function FeatureBlocksBlockRenderer({ data, blockIndex }) {
  const {
    scriptAccent = 'Your Perfect Venue',
    title = 'Why Choose Rum River Barn',
    lead = 'Discover what makes our venue the perfect setting for your unforgettable celebration',
    sectionStyle = 'alternating-blocks',
    centerContent = true,
    blocks = []
  } = data

  if (!blocks || blocks.length === 0) {
    return null
  }

  const sectionClasses = `${sectionStyle} ${sectionStyle === 'alternating-blocks' ? '' : 'section'}`

  return (
    <section className={sectionClasses}>
      <div className="content-wrapper">
        {/* Header Content */}
        <div className={`feature-blocks-content ${centerContent ? 'center' : ''}`}>
          <div className="script-accent">{scriptAccent}</div>
          <h2 className="section-title">{title}</h2>
          <p className="lead">{lead}</p>
        </div>

        {/* Blocks Container */}
        <div className="blocks-container">
          {blocks.map((block, index) => (
            <FeatureBlock key={index} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Feature Block Component
 */
function FeatureBlock({ block }) {
  const {
    number,
    title,
    lead,
    content,
    image,
    imageAlt,
    reverse = false,
    ctaButton,
    highlights = []
  } = block

  // Get optimized image URL
  const imageUrl = image ? getImageUrl(image, { width: 800, height: 500 }) : null

  // Process content to highlight specific terms
  const processContent = (text) => {
    if (!text || !highlights || highlights.length === 0) {
      return text
    }

    let processedText = text
    highlights.forEach(highlight => {
      const regex = new RegExp(`\\b${highlight}\\b`, 'gi')
      processedText = processedText.replace(regex, `<strong>${highlight}</strong>`)
    })

    return processedText
  }

  // Handle rich text content from Sanity
  const renderContent = () => {
    if (Array.isArray(content)) {
      // Rich text from Sanity
      return content.map((block, index) => {
        if (block._type === 'block') {
          const text = block.children?.map(child => child.text).join('') || ''
          const processedText = processContent(text)
          
          switch (block.style) {
            case 'h2':
              return <h2 key={index} dangerouslySetInnerHTML={{ __html: processedText }} />
            case 'h3':
              return <h3 key={index} dangerouslySetInnerHTML={{ __html: processedText }} />
            case 'h4':
              return <h4 key={index} dangerouslySetInnerHTML={{ __html: processedText }} />
            default:
              return <p key={index} dangerouslySetInnerHTML={{ __html: processedText }} />
          }
        }
        return null
      })
    } else if (typeof content === 'string') {
      // Plain text content
      return content.split('\n\n').map((paragraph, index) => (
        <p 
          key={index} 
          dangerouslySetInnerHTML={{ __html: processContent(paragraph) }} 
        />
      ))
    }
    
    return null
  }

  return (
    <div className={`block-item ${reverse ? 'reverse' : ''}`}>
      <div className="block-content">
        {number && <div className="number">{number}</div>}
        {title && <h3>{title}</h3>}
        {lead && <p className="lead">{lead}</p>}
        <div className="block-text">
          {renderContent()}
        </div>
        
        {/* CTA Button */}
        {ctaButton && ctaButton.text && ctaButton.link && (
          <div className="block-cta">
            <a 
              href={ctaButton.link} 
              className={`cta-button ${ctaButton.style || 'primary'}`}
            >
              {ctaButton.text}
            </a>
          </div>
        )}
      </div>
      
      {/* Block Image */}
      {imageUrl && (
        <div className="block-image styled-image light no-link">
          <img 
            src={imageUrl}
            alt={imageAlt || title || 'Feature image'} 
            width="800" 
            height="500" 
          />
        </div>
      )}
    </div>
  )
}