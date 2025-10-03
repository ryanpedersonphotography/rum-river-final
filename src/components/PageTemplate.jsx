import Header from './Header'
import SiteFooter from './SiteFooter'
import HeroSection from './HeroSection'

export default function PageTemplate({ 
  children, 
  title = "Rum River Barn", 
  heroContent = null,
  heroImage = "/images/venue/barn-exterior-full-view-landscape.jpg",
  className = "",
  currentPage = ""
}) {
  return (
    <>
      <Header currentPage={currentPage} />
      
      {/* Hero Section - Optional */}
      {heroContent && (
        <HeroSection image={heroImage} tone="dark">
          {heroContent}
        </HeroSection>
      )}

      {/* Main Content Area */}
      <main className={className}>
        {children}
      </main>

      <SiteFooter />
    </>
  )
}
