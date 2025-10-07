import Header from './Header'
import Footer from './Footer'

export default function PageTemplate({
  children,
  title = "Rum River Barn",
  heroContent = null,
  heroImage = "/images/venue/barn-exterior-full-view-landscape.jpg",
  className = ""
}) {
  return (
    <>
      <Header />

      {/* Hero Section - Optional */}
      {heroContent && (
        <section
          className="page-hero dark-section"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${heroImage}") center/cover no-repeat`,
            backgroundAttachment: 'fixed',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="content-wrapper">
            <div className="page-hero-content">
              {heroContent}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className={className}>
        {children}
      </main>

      <Footer />
    </>
  )
}
