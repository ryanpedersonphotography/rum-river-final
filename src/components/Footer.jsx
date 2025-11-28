import CTAButton from './CTAButton'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer-contact">
      <div className="footer-container">
        <h2>Begin Your Love Story</h2>
        <p className="footer-contact-info">
          Let us help you create the wedding of your dreams<br />
          at Rum River Wedding Barn
        </p>
        <div className="footer-buttons" style={{ marginBottom: '2rem' }}>
          <CTAButton href="/contact" variant="primary">SCHEDULE A TOUR</CTAButton>
        </div>
<div className="footer-social">
          <a href="https://www.facebook.com/p/Rum-River-Barn-and-Vineyard-61550665682473/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
        <p className="footer-address">
          📍 42618 78th Street, Hillman, MN 56338<br />
          📞 320-492-8584
        </p>
      </div>
    </footer>
  )
}
