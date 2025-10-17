import CTAButton from '../CTAButton'
import { urlFor } from '../../lib/sanityClient'

export default function HeroBlockRenderer({ data }) {
  const bgUrl = data?.backgroundImage ? urlFor(data.backgroundImage).width(2000).height(1200).fit('crop').auto('format').url() : null
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        {bgUrl && <img src={bgUrl} alt={data?.backgroundImage?.alt || 'Hero'} />}
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            {data?.scriptAccent && <span className="hero-script-accent">{data.scriptAccent}</span>}
            <h1 className="hero-title">
              <span>{data?.titleLine1 || 'Rum River'}</span>
              <span>{data?.titleLine2 || 'Wedding Barn'}</span>
            </h1>
            {data?.description && <p className="hero-lead">{data.description}</p>}
            <div className="hero-actions">
              {data?.ctaText && data?.ctaLink && (
                <CTAButton text={data.ctaText} href={data.ctaLink} variant="primary" size="large" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="floating-cta show">
        <CTAButton text="Schedule Your Tour" href="#lets-connect-form" variant="primary" size="medium" />
      </div>
    </section>
  )
}