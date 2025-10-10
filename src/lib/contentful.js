import { createClient } from 'contentful'

// Contentful configuration
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

// Create Contentful client
const client = SPACE_ID && ACCESS_TOKEN ? createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  host: import.meta.env.VITE_CONTENTFUL_HOST || 'cdn.contentful.com'
}) : null

// Helper function to get HomePage content
export async function getHomePageContent() {
  if (!client) {
    console.warn('Contentful client not configured. Using fallback content.')
    // Return fallback content structure that matches existing design
    return {
      hero: {
        scriptAccent: "Where Dreams Begin",
        titleLine1: "Rum River",
        titleLine2: "Wedding Barn",
        description: "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
        ctaText: "Schedule Your Visit",
        ctaLink: "/contact"
      },
      featureBlocks: {
        scriptAccent: "Your Perfect Venue",
        title: "Why Choose Rum River Barn",
        lead: "Discover what makes our venue the perfect setting for your unforgettable celebration",
        blocks: [
          {
            number: "01",
            title: "A Picturesque Location For Your Special Event",
            lead: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN",
            content: "When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at 612-801-0546!",
            imageAlt: "Special event venue"
          },
          {
            number: "02",
            title: "Rum River Barn & Vineyard",
            lead: "Milaca, St. Cloud, Saint Paul, and Brainerd MN",
            content: "Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.",
            imageAlt: "Rum River Barn and Vineyard"
          }
        ]
      },
      experience: {
        scriptAccent: "The Rum River Experience",
        title: "More Than a Venue",
        description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
        features: [
          {
            title: "All-Inclusive Planning",
            description: "Our experienced coordinators handle every detail, so you can focus on what matters most—each other."
          },
          {
            title: "Customizable Packages",
            description: "From intimate gatherings to grand celebrations, we tailor every element to your vision and budget."
          },
          {
            title: "Historic Charm",
            description: "Our lovingly restored 1920s barn combines century-old character with modern convenience."
          }
        ]
      },
      loveStories: {
        scriptAccent: "Real Love Stories",
        title: "Weddings at the Barn",
        lead: "Every celebration tells a unique story of love, laughter, and happily ever after."
      },
      testimonials: {
        scriptAccent: "Love Letters",
        title: "What Couples Say",
        items: [
          {
            quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
            authorName: "Sarah & Michael Johnson",
            authorDetail: "Married October 2024"
          },
          {
            quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
            authorName: "Emma & James Wilson",
            authorDetail: "Married June 2024"
          },
          {
            quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
            authorName: "Amanda & Chris Thompson",
            authorDetail: "Married February 2024"
          }
        ]
      }
    }
  }

  try {
    // Fetch HomePage entry from Contentful with linked entries resolved
    const entries = await client.getEntries({
      content_type: 'homePage',
      include: 3, // Include 3 levels of linked entries/assets
      limit: 1
    })

    if (entries.items.length === 0) {
      console.warn('No HomePage content found in Contentful. Using fallback.')
      // Return the fallback content
      const fallbackData = {
        hero: {
          scriptAccent: "Where Dreams Begin",
          titleLine1: "Rum River",
          titleLine2: "Wedding Barn",
          description: "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
          ctaText: "Schedule Your Visit",
          ctaLink: "/contact"
        },
        featureBlocks: {
          scriptAccent: "Your Perfect Venue",
          title: "Why Choose Rum River Barn",
          lead: "Discover what makes our venue the perfect setting for your unforgettable celebration",
          blocks: [
            {
              number: "01",
              title: "A Picturesque Location For Your Special Event",
              lead: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN",
              content: "When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at 612-801-0546!",
              imageAlt: "Special event venue"
            },
            {
              number: "02",
              title: "Rum River Barn & Vineyard",
              lead: "Milaca, St. Cloud, Saint Paul, and Brainerd MN",
              content: "Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.",
              imageAlt: "Rum River Barn and Vineyard"
            }
          ]
        },
        experience: {
          scriptAccent: "The Rum River Experience",
          title: "More Than a Venue",
          description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
          features: [
            {
              title: "All-Inclusive Planning",
              description: "Our experienced coordinators handle every detail, so you can focus on what matters most—each other."
            },
            {
              title: "Customizable Packages",
              description: "From intimate gatherings to grand celebrations, we tailor every element to your vision and budget."
            },
            {
              title: "Historic Charm",
              description: "Our lovingly restored 1920s barn combines century-old character with modern convenience."
            }
          ]
        },
        loveStories: {
          scriptAccent: "Real Love Stories",
          title: "Weddings at the Barn",
          lead: "Every celebration tells a unique story of love, laughter, and happily ever after."
        },
        testimonials: {
          scriptAccent: "Love Letters",
          title: "What Couples Say",
          items: [
            {
              quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
              authorName: "Sarah & Michael Johnson",
              authorDetail: "Married October 2024"
            },
            {
              quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
              authorName: "Emma & James Wilson",
              authorDetail: "Married June 2024"
            },
            {
              quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
              authorName: "Amanda & Chris Thompson",
              authorDetail: "Married February 2024"
            }
          ]
        }
      }
      return fallbackData
    }

    const entry = entries.items[0].fields
    
    // Debug hero background image
    if (entry.heroBackgroundImage) {
      console.log('Hero background image:', entry.heroBackgroundImage)
    }

    // Transform Contentful data to match existing structure
    // Properly handle linked entries and images
    const transformedData = {
      hero: {
        scriptAccent: entry.heroScriptAccent || "Where Dreams Begin",
        titleLine1: entry.heroTitleLine1 || "Rum River",
        titleLine2: entry.heroTitleLine2 || "Wedding Barn",
        description: entry.heroDescription || "Nestled along Minnesota's scenic Rum River...",
        ctaText: entry.heroCtaText || "Schedule Your Visit",
        ctaLink: entry.heroCtaLink || "/contact",
        backgroundImage: entry.heroBackgroundImage?.fields?.file?.url || 
                         entry.heroBackgroundImage?.fields?.file?.['en-US']?.url || 
                         null
      },
      featureBlocks: {
        scriptAccent: entry.featureScriptAccent || "Your Perfect Venue",
        title: entry.featureTitle || "Why Choose Rum River Barn",
        lead: entry.featureLead || "Discover what makes our venue the perfect setting...",
        blocks: entry.featureBlocks ? entry.featureBlocks.map((block, index) => {
          // Try different ways to access the image based on Contentful's response structure
          let imageUrl = null;
          if (block.fields.image) {
            imageUrl = block.fields.image.fields?.file?.url || 
                      block.fields.image.fields?.file?.['en-US']?.url ||
                      block.fields.image.file?.url ||
                      null;
          }
          return {
            number: block.fields.number,
            title: block.fields.title,
            lead: block.fields.lead,
            content: block.fields.content,
            imageAlt: block.fields.imageAlt,
            image: imageUrl,
            reverse: block.fields.reverse || false
          };
        }) : []
      },
      experience: {
        scriptAccent: entry.experienceScriptAccent || "The Rum River Experience",
        title: entry.experienceTitle || "More Than a Venue",
        description: entry.experienceDescription || "We don't just provide a space...",
        image: entry.experienceImage?.fields?.file?.url || 
               entry.experienceImage?.fields?.file?.['en-US']?.url ||
               entry.experienceImage?.file?.url || 
               null,
        features: entry.experienceFeatures ? entry.experienceFeatures.map(feature => ({
          title: feature.fields.title,
          description: feature.fields.description
        })) : []
      },
      loveStories: {
        scriptAccent: entry.loveStoriesScriptAccent || "Real Love Stories",
        title: entry.loveStoriesTitle || "Weddings at the Barn",
        lead: entry.loveStoriesLead || "Every celebration tells a unique story..."
      },
      testimonials: {
        scriptAccent: entry.testimonialsScriptAccent || "Love Letters",
        title: entry.testimonialsTitle || "What Couples Say",
        items: entry.testimonialItems ? entry.testimonialItems.map(item => ({
          quote: item.fields.quote,
          authorName: item.fields.authorName,
          authorDetail: item.fields.authorDetail
        })) : []
      }
    }
    
    return transformedData
  } catch (error) {
    console.error('Error fetching HomePage content from Contentful:', error)
    // Return fallback content on error
    return {
      hero: {
        scriptAccent: "Where Dreams Begin",
        titleLine1: "Rum River",
        titleLine2: "Wedding Barn",
        description: "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
        ctaText: "Schedule Your Visit",
        ctaLink: "/contact"
      },
      featureBlocks: {
        scriptAccent: "Your Perfect Venue",
        title: "Why Choose Rum River Barn",
        lead: "Discover what makes our venue the perfect setting for your unforgettable celebration",
        blocks: [
          {
            number: "01",
            title: "A Picturesque Location For Your Special Event",
            lead: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN",
            content: "When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at 612-801-0546!",
            imageAlt: "Special event venue"
          },
          {
            number: "02",
            title: "Rum River Barn & Vineyard",
            lead: "Milaca, St. Cloud, Saint Paul, and Brainerd MN",
            content: "Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.",
            imageAlt: "Rum River Barn and Vineyard"
          }
        ]
      },
      experience: {
        scriptAccent: "The Rum River Experience",
        title: "More Than a Venue",
        description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
        features: [
          {
            title: "All-Inclusive Planning",
            description: "Our experienced coordinators handle every detail, so you can focus on what matters most—each other."
          },
          {
            title: "Customizable Packages",
            description: "From intimate gatherings to grand celebrations, we tailor every element to your vision and budget."
          },
          {
            title: "Historic Charm",
            description: "Our lovingly restored 1920s barn combines century-old character with modern convenience."
          }
        ]
      },
      loveStories: {
        scriptAccent: "Real Love Stories",
        title: "Weddings at the Barn",
        lead: "Every celebration tells a unique story of love, laughter, and happily ever after."
      },
      testimonials: {
        scriptAccent: "Love Letters",
        title: "What Couples Say",
        items: [
          {
            quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
            authorName: "Sarah & Michael Johnson",
            authorDetail: "Married October 2024"
          },
          {
            quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
            authorName: "Emma & James Wilson",
            authorDetail: "Married June 2024"
          },
          {
            quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
            authorName: "Amanda & Chris Thompson",
            authorDetail: "Married February 2024"
          }
        ]
      }
    }
  }
}

export default client