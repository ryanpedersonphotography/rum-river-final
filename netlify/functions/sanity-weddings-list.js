import { createClient } from '@sanity/client'

export async function handler(event, context) {
  // Check authentication
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  const client = createClient({
    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: process.env.VITE_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
  });

  try {
    switch (event.httpMethod) {
      case 'GET':
        return await getWeddingBlogs(client);
      
      case 'POST':
        return await createWeddingBlog(client, JSON.parse(event.body));
      
      case 'PUT':
        return await updateWeddingBlog(client, JSON.parse(event.body));
      
      case 'DELETE':
        return await deleteWeddingBlog(client, JSON.parse(event.body));
      
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    console.error('Sanity function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
}

async function getWeddingBlogs(client) {
  try {
    const weddings = await client.fetch(`
      *[_type == "weddingBlog"] | order(date desc) {
        _id,
        title,
        slug,
        date,
        season,
        venue,
        excerpt,
        story,
        photographerCredit,
        featuredImage {
          asset-> {
            _id,
            url
          }
        },
        gallery[] {
          asset-> {
            _id,
            url
          },
          caption
        },
        featured,
        published,
        _createdAt,
        _updatedAt
      }
    `);

    // Transform the data to match the expected format
    const transformedWeddings = weddings.map(wedding => ({
      id: wedding._id,
      title: wedding.title || '',
      slug: wedding.slug?.current || '',
      date: wedding.date || new Date().toISOString(),
      season: wedding.season || '',
      excerpt: wedding.excerpt || '',
      story: wedding.story || '',
      photographerCredit: wedding.photographerCredit || '',
      venue: wedding.venue || 'Rum River Barn',
      featured: wedding.featured || false,
      featuredImage: wedding.featuredImage?.asset?.url || '',
      gallery: wedding.gallery?.map(img => ({
        url: img.asset?.url || '',
        caption: img.caption || '',
        title: img.caption || ''
      })) || [],
      published: wedding.published || false,
      createdAt: wedding._createdAt,
      updatedAt: wedding._updatedAt
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        count: transformedWeddings.length,
        weddings: transformedWeddings
      })
    };
  } catch (error) {
    console.error('Error fetching wedding blogs:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch wedding blogs' })
    };
  }
}

async function createWeddingBlog(client, data) {
  try {
    // Handle featured image upload if provided
    let featuredImageRef = null;
    if (data.featuredImage && data.featuredImage.file) {
      const imageAsset = await client.assets.upload('image', 
        Buffer.from(data.featuredImage.file, 'base64'), {
          filename: data.featuredImage.fileName
        }
      );
      featuredImageRef = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id
        }
      };
    }

    // Handle gallery images
    const galleryRefs = [];
    if (data.gallery && Array.isArray(data.gallery)) {
      for (const img of data.gallery) {
        if (img.file) {
          const imageAsset = await client.assets.upload('image',
            Buffer.from(img.file, 'base64'), {
              filename: img.fileName
            }
          );
          galleryRefs.push({
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id
            },
            caption: img.caption || ''
          });
        }
      }
    }

    const wedding = await client.create({
      _type: 'weddingBlog',
      title: data.title,
      slug: {
        _type: 'slug',
        current: data.slug
      },
      date: data.date,
      season: data.season,
      venue: data.venue || 'Rum River Barn',
      excerpt: data.excerpt,
      story: data.story,
      photographerCredit: data.photographerCredit,
      featuredImage: featuredImageRef,
      gallery: galleryRefs,
      featured: data.featured || false,
      published: data.published || false
    });

    return {
      statusCode: 201,
      body: JSON.stringify({ 
        success: true, 
        id: wedding._id 
      })
    };
  } catch (error) {
    console.error('Error creating wedding blog:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to create wedding blog',
        details: error.message 
      })
    };
  }
}

async function updateWeddingBlog(client, data) {
  try {
    const updates = {};
    
    if (data.title !== undefined) updates.title = data.title;
    if (data.slug !== undefined) updates.slug = { _type: 'slug', current: data.slug };
    if (data.date !== undefined) updates.date = data.date;
    if (data.season !== undefined) updates.season = data.season;
    if (data.venue !== undefined) updates.venue = data.venue;
    if (data.excerpt !== undefined) updates.excerpt = data.excerpt;
    if (data.story !== undefined) updates.story = data.story;
    if (data.photographerCredit !== undefined) updates.photographerCredit = data.photographerCredit;
    if (data.featured !== undefined) updates.featured = data.featured;
    if (data.published !== undefined) updates.published = data.published;

    // Handle featured image update
    if (data.featuredImage && data.featuredImage.file) {
      const imageAsset = await client.assets.upload('image',
        Buffer.from(data.featuredImage.file, 'base64'), {
          filename: data.featuredImage.fileName
        }
      );
      updates.featuredImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id
        }
      };
    }

    const updated = await client.patch(data.id).set(updates).commit();

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        id: updated._id 
      })
    };
  } catch (error) {
    console.error('Error updating wedding blog:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to update wedding blog',
        details: error.message 
      })
    };
  }
}

async function deleteWeddingBlog(client, data) {
  try {
    await client.delete(data.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Wedding blog deleted successfully' 
      })
    };
  } catch (error) {
    console.error('Error deleting wedding blog:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to delete wedding blog',
        details: error.message 
      })
    };
  }
}