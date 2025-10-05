import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = "Rum River Wedding Barn | Historic Hillman MN Wedding Venue",
  description = "Elegant rustic wedding venue in Hillman, Minnesota. Historic barn with modern amenities, bridal suite, groom's quarters. Capacity up to 300 guests.",
  keywords = "wedding venue, rustic barn, Hillman Minnesota, wedding barn, historic venue, Minnesota weddings, barn wedding, rural wedding venue",
  image = "/images/venue/barn-exterior-full-view-landscape.jpg",
  url = "https://rumriverweddingbarn.com",
  type = "website",
  siteName = "Rum River Wedding Barn"
}) {
  const fullTitle = title.includes('Rum River') ? title : `${title} | Rum River Wedding Barn`
  const fullUrl = url.startsWith('http') ? url : `https://rumriverweddingbarn.com${url}`
  const fullImageUrl = image.startsWith('http') ? image : `https://rumriverweddingbarn.com${image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rum River Wedding Barn" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags for Facebook/Instagram */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Geographic Tags for Local SEO */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Hillman, Minnesota" />
      <meta name="geo.position" content="46.0441;-93.8842" />
      <meta name="ICBM" content="46.0441, -93.8842" />
      
      {/* Business Information */}
      <meta name="business:contact_data:locality" content="Hillman" />
      <meta name="business:contact_data:region" content="MN" />
      <meta name="business:contact_data:country_name" content="USA" />
    </Helmet>
  )
}