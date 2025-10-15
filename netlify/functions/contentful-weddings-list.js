// Secure read-only function using Contentful Delivery API
import { createClient } from 'contentful';

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

  try {
    const space = process.env.VITE_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
    const environment = process.env.CONTENTFUL_ENV || 'master';

    // Check for required environment variables
    if (!space || !accessToken) {
      return { 
        statusCode: 500, 
        body: JSON.stringify({ 
          error: 'Missing Contentful configuration',
          details: 'Environment variables not set',
          debug: {
            hasSpace: !!space,
            hasToken: !!accessToken,
            environment: environment
          }
        }) 
      };
    }

    // Create Contentful Delivery API client (read-only)
    const client = createClient({ 
      space, 
      accessToken,
      environment 
    });

    // Fetch wedding blog entries
    const entries = await client.getEntries({
      content_type: 'weddingBlog',
      order: '-fields.date',
      limit: 100,
      include: 2 // Include linked assets
    });

    // Transform the data
    const weddings = (entries.items || []).map((entry) => {
      const fields = entry.fields;
      
      // Handle featured image
      let featuredImageUrl = null;
      if (fields.featuredImage?.fields?.file?.url) {
        featuredImageUrl = `https:${fields.featuredImage.fields.file.url}`;
      }

      // Handle gallery images
      const gallery = (fields.gallery || []).map(img => {
        if (img?.fields?.file?.url) {
          return {
            url: `https:${img.fields.file.url}`,
            title: img.fields.title || '',
            description: img.fields.description || ''
          };
        }
        return null;
      }).filter(Boolean);

      return {
        // System fields
        id: entry.sys.id,
        createdAt: entry.sys.createdAt,
        updatedAt: entry.sys.updatedAt,
        
        // Content fields
        title: fields.title || '',
        slug: fields.slug || '',
        date: fields.date || entry.sys.createdAt,
        season: fields.season || '',
        excerpt: fields.excerpt || '',
        story: fields.story || '',
        photographerCredit: fields.photographerCredit || '',
        venue: fields.venue || 'Rum River Barn',
        featured: fields.featured || false,
        featuredImage: featuredImageUrl,
        gallery: gallery
      };
    });

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

  } catch (err) {
    console.error('Contentful error:', err);
    
    // Return helpful error information without exposing secrets
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Contentful read error',
        details: err.message,
        debug: {
          space: process.env.VITE_CONTENTFUL_SPACE_ID,
          environment: process.env.CONTENTFUL_ENV || 'master',
          hasToken: !!process.env.VITE_CONTENTFUL_ACCESS_TOKEN
        }
      })
    };
  }
}