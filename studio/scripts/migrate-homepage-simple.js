// Simple script to output the migration data
// You can copy this JSON and paste it directly in Sanity Studio

const homepageData = {
  "_id": "homepage",
  "_type": "homePage",
  "title": "Homepage",
  
  // Hero Block
  "hero": {
    "_type": "heroBlock",
    "backgroundImage": {
      "_type": "image",
      "alt": "Barn Exterior Full Deck View Evening",
      "asset": {
        "_ref": "image-36a9e7766804bbe86f5302eaba42db14431fb39e-1280x854-jpg",
        "_type": "reference"
      }
    },
    "ctaLink": "/contact",
    "ctaText": "Schedule Your Visit",
    "description": "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
    "floatingCtaIcon": "calendar",
    "floatingCtaText": "Schedule Your Tour",
    "scriptAccent": "Where Dreams Begin",
    "scrollText": "Discover Your Perfect Day",
    "showFloatingCta": true,
    "titleLine1": "Rum River",
    "titleLine2": "Wedding Barn"
  },
  
  // Venue Discovery Block
  "venueDiscovery": {
    "_type": "venueDiscoveryBlock",
    "description": "Every corner tells a story, every space creates memories",
    "sectionClassName": "section section-cream",
    "subtitle": "Your Perfect Setting",
    "title": "Discover Our Spaces"
  },
  
  // Feature Blocks
  "featureBlocks": {
    "_type": "featureBlocksBlock",
    "blocks": [
      {
        "_ref": "feature-block-01",
        "_type": "reference"
      },
      {
        "_ref": "feature-block-02",
        "_type": "reference"
      }
    ],
    "centerContent": false,
    "lead": "Discover what makes our venue the perfect setting for your unforgettable celebration",
    "scriptAccent": "Your Perfect Venue",
    "sectionStyle": "section-white",
    "title": "Why Choose Rum River Barn"
  },
  
  // Gallery/Love Stories Block
  "loveStories": {
    "_type": "galleryBlock",
    "ctaLink": "/real-weddings",
    "ctaText": "View All Real Weddings",
    "galleryType": "auto",
    "lead": "Every celebration tells a unique story of love, laughter, and happily ever after.",
    "limit": 6,
    "scriptAccent": "Real Love Stories",
    "sectionClassName": "love-stories-section section section-cream",
    "title": "Weddings at the Barn"
  },
  
  // Experience Block
  "experience": {
    "_type": "experienceBlock",
    "description": "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
    "features": [
      {
        "_ref": "experience-feature-planning",
        "_type": "reference"
      },
      {
        "_ref": "experience-feature-packages",
        "_type": "reference"
      },
      {
        "_ref": "experience-feature-charm",
        "_type": "reference"
      }
    ],
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-c76221e6e25ca37fda8693e27e69d783559735e9-1280x854-jpg",
        "_type": "reference"
      }
    },
    "imageAlt": "Wedding Celebration",
    "layout": "content-left",
    "scriptAccent": "The Rum River Experience",
    "sectionStyle": "section-blush",
    "title": "More Than a Venue"
  },
  
  // Testimonials Block
  "testimonials": {
    "_type": "testimonialsBlock",
    "inlineTestimonials": [
      {
        "_key": "sarah-michael",
        "_type": "inlineTestimonial",
        "authorDetail": "Married October 2024",
        "authorName": "Sarah & Michael Johnson",
        "quote": "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was."
      },
      {
        "_key": "emma-james",
        "_type": "inlineTestimonial",
        "authorDetail": "Married June 2024",
        "authorName": "Emma & James Wilson",
        "quote": "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for."
      },
      {
        "_key": "amanda-chris",
        "_type": "inlineTestimonial",
        "authorDetail": "Married February 2024",
        "authorName": "Amanda & Chris Thompson",
        "quote": "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more."
      }
    ],
    "scriptAccent": "Love Letters",
    "sectionClassName": "testimonials-section section section-cream",
    "testimonialsType": "inline",
    "title": "What Couples Say"
  },
  
  // Schedule Tour Form
  "scheduleTour": {
    "_type": "formBlock",
    "description": "We'd love to show you around our beautiful venue and discuss your wedding vision.",
    "formName": "home-schedule-tour",
    "formType": "tour",
    "lightTheme": false,
    "loadingText": "SCHEDULING...",
    "redirectPath": "/thank-you",
    "showHeader": true,
    "submitText": "Schedule Tour",
    "subtitle": "Schedule Your Tour",
    "title": "Start Planning Your Perfect Day"
  },
  
  // SEO Settings
  "seo": {
    "_type": "seoSettings",
    "keywords": [
      "Minnesota wedding venue",
      "Milaca barn wedding",
      "rustic wedding Minnesota",
      "outdoor wedding venue MN", 
      "historic barn wedding",
      "countryside wedding venue",
      "Rum River wedding",
      "Minnesota barn venue",
      "wedding reception Minnesota",
      "rural wedding venue"
    ],
    "metaDescription": "Historic barn wedding venue in Milaca, Minnesota. Rustic elegance meets modern amenities for your perfect celebration. Indoor & outdoor spaces for up to 600 guests.",
    "metaTitle": "Rum River Wedding Barn - Premier Minnesota Wedding Venue | Milaca MN"
  }
}

console.log('Homepage migration data ready!')
console.log('Copy the following JSON to create the homepage in Sanity Studio:')
console.log(JSON.stringify(homepageData, null, 2))