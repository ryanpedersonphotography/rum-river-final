/**
 * CTASection - Simple section wrapper with background options
 * 
 * Props:
 * - variant: 'dark' | 'light' (default: 'dark')
 * - background: 'gradient' | 'solid' | 'transparent' (default: 'gradient' for dark, 'transparent' for light)
 * - color: 'brown' | 'walnut' | 'forest' | 'cream' | 'ivory' (optional - for solid backgrounds)
 * - children: React nodes to render inside the section
 * - className: Additional CSS classes
 */
export default function CTASection({ 
  variant = 'dark',
  background = null,
  color = null,
  children,
  className = '',
  id = ''
}) {
  const getBackgroundClass = () => {
    // If no background specified, use defaults
    if (!background) {
      background = variant === 'dark' ? 'gradient' : 'transparent'
    }

    // Handle gradient (brown gradient for CTA)
    if (background === 'gradient') {
      return 'cta-contact-section'
    }

    // Handle solid colors
    if (background === 'solid' && color) {
      const colorMap = {
        walnut: 'section-walnut',
        forest: 'section-forest',
        cream: 'section-cream',
        ivory: 'section-ivory',
        brown: 'section-brown'
      }
      const baseClass = variant === 'dark' ? 'dark-section' : 'section'
      return `${baseClass} ${colorMap[color] || ''}`
    }

    // Handle transparent
    return variant === 'dark' ? 'dark-section' : 'section'
  }

  return (
    <section className={`${getBackgroundClass()} ${className}`.trim()} id={id}>
      {children}
    </section>
  )
}