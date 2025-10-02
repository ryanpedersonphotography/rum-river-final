/**
 * Utility function to generate section classes based on props
 * Can be used by any component that needs section styling
 * 
 * @param {Object} props
 * @param {string} props.variant - 'default' | 'muted' | 'solid' (default: 'default')
 * @param {string} props.tone - 'brand' | 'brown' | 'walnut' | 'forest' | 'cream' | 'ivory' | 'sage' (default: null)
 * @param {string} props.container - 'fluid' | 'fixed' (default: 'fluid')
 * @param {string} props.align - 'left' | 'center' (default: 'left')
 * @param {string} props.py - 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' (default: 'lg')
 * @param {string} props.contrast - 'auto' | 'light' | 'dark' (default: 'auto')
 * @param {string} props.className - Additional custom classes
 * @returns {string} Combined class string for the section
 */
export function getSectionClasses({ 
  variant = 'default',
  tone = null,
  container = 'fluid',
  align = 'left',
  py = 'lg',
  contrast = 'auto',
  className = ''
}) {
  const classes = []

  // Special case: brand tone with solid variant uses the existing CTA section
  if (variant === 'solid' && tone === 'brand') {
    classes.push('cta-contact-section')
    // Don't add other variant/tone classes as cta-contact-section handles it all
  } else {
    // Base section class
    classes.push('section')

    // Variant classes
    if (variant === 'muted') {
      classes.push('section-muted')
    } else if (variant === 'solid') {
      classes.push('section-solid')
    }

    // Tone classes (color family)
    if (tone && tone !== 'brand') {
      const toneMap = {
        brown: 'tone-brown',
        walnut: 'tone-walnut',
        forest: 'tone-forest',
        cream: 'tone-cream',
        ivory: 'tone-ivory',
        sage: 'tone-sage',
        blush: 'tone-blush'
      }
      if (toneMap[tone]) {
        classes.push(toneMap[tone])
      }
    }
  }

  // Container width
  if (container === 'fixed') {
    classes.push('container-fixed')
  }
  // 'fluid' is the default and doesn't need a class

  // Alignment
  if (align === 'center') {
    classes.push('align-center')
  }
  // 'left' is the default

  // Padding scale
  const paddingMap = {
    xs: 'py-xs',    // 2rem / 32px
    sm: 'py-sm',    // 3rem / 48px
    md: 'py-md',    // 4rem / 64px
    lg: 'py-lg',    // 6rem / 96px
    xl: 'py-xl',    // 8rem / 128px
    '2xl': 'py-2xl' // 10rem / 160px
  }
  if (paddingMap[py]) {
    classes.push(paddingMap[py])
  }

  // Contrast (text color)
  if (contrast === 'dark') {
    classes.push('contrast-dark') // Force dark text
  } else if (contrast === 'light') {
    classes.push('contrast-light') // Force light text
  }
  // 'auto' lets CSS handle it based on background

  // Custom classes
  if (className) {
    classes.push(className)
  }

  return classes.join(' ').trim()
}

/**
 * Common section prop types that can be spread into any component
 */
export const sectionPropTypes = {
  // Layout & Style Props
  variant: 'default', // 'default' | 'muted' | 'solid'
  tone: null, // 'brand' | 'brown' | 'walnut' | etc.
  container: 'fluid', // 'fluid' | 'fixed'
  align: 'left', // 'left' | 'center'
  py: 'lg', // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  contrast: 'auto', // 'auto' | 'light' | 'dark'
  className: '', // additional classes
  
  // Content & Structure Props
  id: null, // for anchor links / hash navigation
  title: null, // main heading
  subtitle: null, // secondary explanatory text
  kicker: null, // small label above title (e.g. "About Us", "Featured")
  cta: null, // call-to-action node (button, link, etc.)
}

/**
 * Helper to render section header with kicker, title, subtitle
 */
export function renderSectionHeader({ kicker, title, subtitle, align = 'left' }) {
  if (!kicker && !title && !subtitle) return null
  
  const headerClass = align === 'center' ? 'section-header center' : 'section-header'
  
  return (
    <div className={headerClass}>
      {kicker && <div className="script-accent">{kicker}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  )
}

/**
 * Helper to render section content with proper container
 */
export function renderSectionContent(container, children) {
  if (container === 'fixed' || container === 'fluid') {
    return (
      <div className="content-wrapper">
        {children}
      </div>
    )
  }
  return children
}

/**
 * Helper to create a complete section element
 */
export function Section({ 
  // Layout & Style Props
  variant = 'default',
  tone = null,
  container = 'fluid',
  align = 'left',
  py = 'lg',
  contrast = 'auto',
  className = '',
  
  // Content & Structure Props
  id = null,
  title = null,
  subtitle = null,
  kicker = null,
  cta = null,
  children = null
}) {
  const sectionClasses = getSectionClasses({
    variant,
    tone,
    container,
    align,
    py,
    contrast,
    className
  })
  
  return (
    <section className={sectionClasses} id={id}>
      {renderSectionContent(container, 
        <>
          {renderSectionHeader({ kicker, title, subtitle, align })}
          {children}
          {cta && (
            <div className={align === 'center' ? 'section-cta center' : 'section-cta'}>
              {cta}
            </div>
          )}
        </>
      )}
    </section>
  )
}