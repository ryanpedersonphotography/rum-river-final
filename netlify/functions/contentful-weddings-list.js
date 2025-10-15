// Secure server-side function to fetch wedding blogs from Contentful
import { createClient } from 'contentful-management';

export async function handler(event, context) {
  // Check authentication via Netlify Identity
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ 
        error: 'Unauthorized',
        message: 'You must be logged in to access this function'
      })
    };
  }

  // Only handle GET requests for now (read-only)
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ 
        error: 'Method not allowed',
        message: 'This endpoint only accepts GET requests'
      })
    };
  }

  try {
    // Initialize Contentful Management client with server-side token
    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
    });

    // Get space and environment
    const space = await client.getSpace(process.env.VITE_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');
    
    // Fetch wedding blog entries
    const response = await environment.getEntries({
      content_type: 'weddingBlog',
      order: '-fields.date',
      limit: 100
    });

    // Transform the data to match your existing format
    const weddings = await Promise.all(response.items.map(async (item) => {
      // Get the fields (they're stored with locale keys)
      const fields = item.fields;
      
      // Extract data from fields (handling the locale structure)
      const extractField = (field) => {
        if (!field) return undefined;
        return field['en-US'] !== undefined ? field['en-US'] : field;
      };

      // Get featured image URL if exists
      let featuredImage = extractField(fields.featuredImage);
      let featuredImageUrl = null;
      
      if (featuredImage && featuredImage.sys && featuredImage.sys.id) {
        try {
          const asset = await environment.getAsset(featuredImage.sys.id);
          if (asset.fields.file && asset.fields.file['en-US']) {
            featuredImageUrl = `https:${asset.fields.file['en-US'].url}`;
          }
        } catch (error) {
          console.error('Error fetching asset:', error);
        }
      }

      // Get gallery images
      const galleryField = extractField(fields.gallery) || [];
      const gallery = await Promise.all(galleryField.map(async (img) => {
        if (img && img.sys && img.sys.id) {
          try {
            const asset = await environment.getAsset(img.sys.id);
            if (asset.fields.file && asset.fields.file['en-US']) {
              return {
                url: `https:${asset.fields.file['en-US'].url}`,
                caption: asset.fields.description ? asset.fields.description['en-US'] : '',
                title: asset.fields.title ? asset.fields.title['en-US'] : ''
              };
            }
          } catch (error) {
            console.error('Error fetching gallery asset:', error);
          }
        }
        return null;
      }));

      return {
        // System fields
        id: item.sys.id,
        version: item.sys.version,
        published: item.sys.publishedVersion !== undefined,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
        
        // Content fields
        title: extractField(fields.title) || '',
        slug: extractField(fields.slug) || '',
        date: extractField(fields.date) || new Date().toISOString(),
        season: extractField(fields.season) || '',
        excerpt: extractField(fields.excerpt) || '',
        story: extractField(fields.story) || '',
        photographerCredit: extractField(fields.photographerCredit) || '',
        venue: extractField(fields.venue) || 'Rum River Barn',
        featured: extractField(fields.featured) || false,
        featuredImage: featuredImageUrl,
        gallery: gallery.filter(img => img !== null)
      };
    }));

    // Sort by date (newest first)
    weddings.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        count: weddings.length,
        weddings: weddings,
        user: context.clientContext.user.email
      })
    };

  } catch (error) {
    console.error('Error fetching weddings:', error);
    
    // Provide helpful error messages
    let errorMessage = 'Failed to fetch wedding blogs';
    let errorDetails = error.message;

    if (error.message.includes('accessToken')) {
      errorMessage = 'Contentful configuration error';
      errorDetails = 'Management token not configured in environment variables';
    } else if (error.message.includes('space')) {
      errorMessage = 'Contentful space error';
      errorDetails = 'Could not access Contentful space';
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: errorMessage,
        details: errorDetails,
        timestamp: new Date().toISOString()
      })
    };
  }
}