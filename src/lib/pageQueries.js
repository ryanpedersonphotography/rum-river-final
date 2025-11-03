import { groq } from 'groq'

export const HOME_PAGE = groq`*[_id=="homePage"][0]{
  title, seo,
  hero {
    scriptAccent,
    titleLine1,
    titleLine2,
    description,
    ctaText,
    ctaLink,
    backgroundImage,
    scrollText,
    showFloatingCta,
    floatingCtaText,
    floatingCtaIcon
  },
  venueDiscovery,
  featureBlocks,
  loveStories,
  experience,
  testimonials,
  scheduleTour
}`