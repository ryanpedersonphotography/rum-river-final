import CTAButton from './CTAButton'

export default function Footer() {
  return (
    <footer className="footer-contact">
      <div className="footer-container">
        <h2>Begin Your Love Story</h2>
        <p className="footer-contact-info">
          Let us help you create the wedding of your dreams<br />
          at Rum River Wedding Barn
        </p>
        <div className="footer-buttons">
          <CTAButton href="/contact" variant="primary">SCHEDULE A TOUR</CTAButton>
          <CTAButton href="/rental-info" variant="primary">REQUEST PRICING</CTAButton>
        </div>
        <p className="footer-address">
          📍 42618 78th Street, Hillman, MN 56338<br />
          📞 612-801-0546 | 320-492-8584
        </p>
      </div>
    </footer>
  )
}
