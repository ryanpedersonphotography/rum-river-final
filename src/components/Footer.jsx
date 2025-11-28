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
            <Icon name="facebook" size="md" color="white" />
          </a>
          <a href="https://instagram.com/rumriverbarn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Icon name="instagram" size="md" color="white" />
          </a>
          <a href="https://pinterest.com/rumriverbarn" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <Icon name="pinterest" size="md" color="white" />
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
