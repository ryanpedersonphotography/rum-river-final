import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { getClientConfig } from '../config/sanity.config'

// Use standardized configuration - frontend context with CDN
export const sanityClient = createClient(getClientConfig('frontend'))

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}

// Helper to get optimized image URL with defaults
export function getImageUrl(image, { width = 800, height = 600, quality = 80, format = 'webp' } = {}) {
  if (!image) return null
  
  return urlFor(image)
    .width(width)
    .height(height)
    .quality(quality)
    .format(format)
    .url()
}

// GROQ Queries
export const GROQ_QUERIES = {
  // Get page by slug
  PAGE_BY_SLUG: `
    *[_type == "page" && slug.current == $slug][0] {
      title,
      slug,
      seo,
      contentBlocks[] {
        _type,
        _type == "heroBlock" => {
          scriptAccent,
          titleLine1,
          titleLine2,
          description,
          ctaText,
          ctaLink,
          scrollText,
          backgroundImage,
          showFloatingCta,
          floatingCtaText,
          floatingCtaIcon
        },
        _type == "venueDiscoveryBlock" => {
          scriptAccent,
          title,
          description,
          sectionStyle,
          venues[]-> {
            title,
            key,
            description,
            capacity,
            features,
            lighting,
            climate,
            images[] {
              ...,
              alt,
              caption
            },
            order
          }
        },
        _type == "featureBlocksBlock" => {
          scriptAccent,
          title,
          lead,
          sectionStyle,
          centerContent,
          blocks[]-> {
            number,
            title,
            lead,
            content,
            image,
            imageAlt,
            reverse,
            ctaButton,
            highlights,
            order
          }
        },
        _type == "galleryBlock" => {
          scriptAccent,
          title,
          lead,
          sectionStyle,
          galleryType,
          maxWeddings,
          ctaText,
          ctaLink,
          showCta,
          featuredWeddings[]-> {
            title,
            slug,
            coupleName,
            weddingDate,
            season,
            location,
            coverImage,
            gallery
          },
          customImages[] {
            ...,
            title,
            caption,
            link
          }
        },
        _type == "experienceBlock" => {
          scriptAccent,
          title,
          description,
          sectionStyle,
          layout,
          image,
          imageAlt,
          features[]-> {
            title,
            description,
            icon,
            iconColor,
            iconSize,
            order
          }
        },
        _type == "testimonialsBlock" => {
          scriptAccent,
          title,
          sectionStyle,
          maxTestimonials,
          showStarRating,
          starCount,
          layout,
          testimonials[]-> {
            quote,
            authorName,
            authorDetail,
            authorImage,
            rating,
            eventType
          }
        },
        _type == "formBlock" => {
          title,
          subtitle,
          description,
          formType,
          formName,
          submitText,
          loadingText,
          redirectPath,
          sectionStyle,
          lightTheme,
          showHeader,
          customFields
        }
      }
    }
  `,

  // Get all venues for venue discovery
  ALL_VENUES: `
    *[_type == "venue"] | order(order asc) {
      title,
      key,
      description,
      capacity,
      features,
      lighting,
      climate,
      images[] {
        ...,
        alt,
        caption
      },
      order,
      vrTourUrl
    }
  `,

  // Get featured wedding blogs
  FEATURED_WEDDINGS: `
    *[_type == "weddingBlog" && published == true && featured == true] | order(publishedDate desc) [0...$limit] {
      title,
      slug,
      coupleName,
      weddingDate,
      season,
      location,
      excerpt,
      coverImage,
      gallery[0..4]
    }
  `,

  // Get latest wedding blogs
  LATEST_WEDDINGS: `
    *[_type == "weddingBlog" && published == true] | order(publishedDate desc) [0...$limit] {
      title,
      slug,
      coupleName,
      weddingDate,
      season,
      location,
      excerpt,
      coverImage,
      gallery[0..4]
    }
  `,

  // Get testimonials
  TESTIMONIALS: `
    *[_type == "testimonial" && approved == true] | order(featured desc, eventDate desc) [0...$limit] {
      quote,
      authorName,
      authorDetail,
      authorImage,
      rating,
      eventType,
      featured
    }
  `,

  // Get feature blocks
  FEATURE_BLOCKS: `
    *[_type == "featureBlock"] | order(order asc) {
      number,
      title,
      lead,
      content,
      image,
      imageAlt,
      reverse,
      ctaButton,
      highlights,
      order
    }
  `,

  // Get experience features
  EXPERIENCE_FEATURES: `
    *[_type == "experienceFeature"] | order(order asc) {
      title,
      description,
      icon,
      iconColor,
      iconSize,
      order,
      featured
    }
  `,

  // Get site settings
  SITE_SETTINGS: `
    *[_type == "siteSettings" && _id == "site-settings"][0] {
      title,
      description,
      url,
      logo,
      favicon,
      defaultSeo,
      contactInfo,
      socialMedia
    }
  `,

  // Get wedding blog by slug
  WEDDING_BY_SLUG: `
    *[_type == "weddingBlog" && slug.current == $slug && published == true][0] {
      title,
      slug,
      coupleName,
      weddingDate,
      publishedDate,
      season,
      venue,
      location,
      excerpt,
      story,
      photographerCredit,
      heroImage,
      coverImage,
      featuredImage,
      gallery[] {
        ...,
        alt,
        caption
      },
      details,
      tags,
      seo
    }
  `
}

// Fetch functions
export async function fetchPageBySlug(slug) {
  try {
    const page = await sanityClient.fetch(GROQ_QUERIES.PAGE_BY_SLUG, { slug })
    return page
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function fetchVenues() {
  try {
    const venues = await sanityClient.fetch(GROQ_QUERIES.ALL_VENUES)
    return venues
  } catch (error) {
    console.error('Error fetching venues:', error)
    return []
  }
}

export async function fetchFeaturedWeddings(limit = 6) {
  try {
    const weddings = await sanityClient.fetch(GROQ_QUERIES.FEATURED_WEDDINGS, { limit })
    return weddings
  } catch (error) {
    console.error('Error fetching featured weddings:', error)
    return []
  }
}

export async function fetchLatestWeddings(limit = 6) {
  try {
    const weddings = await sanityClient.fetch(GROQ_QUERIES.LATEST_WEDDINGS, { limit })
    return weddings
  } catch (error) {
    console.error('Error fetching latest weddings:', error)
    return []
  }
}

export async function fetchTestimonials(limit = 3) {
  try {
    const testimonials = await sanityClient.fetch(GROQ_QUERIES.TESTIMONIALS, { limit })
    return testimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function fetchSiteSettings() {
  try {
    const settings = await sanityClient.fetch(GROQ_QUERIES.SITE_SETTINGS)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export async function fetchWeddingBySlug(slug) {
  try {
    const wedding = await sanityClient.fetch(GROQ_QUERIES.WEDDING_BY_SLUG, { slug })
    return wedding
  } catch (error) {
    console.error('Error fetching wedding:', error)
    return null
  }
}