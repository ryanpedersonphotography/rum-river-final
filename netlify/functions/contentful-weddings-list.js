import contentful from 'contentful-management';

const weddingContentType = 'weddingBlog';

export async function handler(event, context) {
  // Check authentication
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
  });

  try {
    const space = await client.getSpace(process.env.VITE_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');

    switch (event.httpMethod) {
      case 'GET':
        return await getWeddingBlogs(environment);
      
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    console.error('Wedding function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
}

async function getWeddingBlogs(environment) {
  try {
    const entries = await environment.getEntries({
      content_type: weddingContentType,
      order: '-fields.date',
      include: 2
    });

    const weddings = await Promise.all(entries.items.map(async (item) => {
      // Get featured image details
      let featuredImageUrl = '';
      if (item.fields.featuredImage && item.fields.featuredImage['en-US']) {
        try {
          const asset = await environment.getAsset(item.fields.featuredImage['en-US'].sys.id);
          featuredImageUrl = asset.fields.file['en-US'].url;
          if (featuredImageUrl && !featuredImageUrl.startsWith('http')) {
            featuredImageUrl = `https:${featuredImageUrl}`;
          }
        } catch (err) {
          console.error('Error fetching featured image:', err);
        }
      }

      // Get gallery images
      const gallery = [];
      if (item.fields.gallery && item.fields.gallery['en-US']) {
        for (const imgRef of item.fields.gallery['en-US']) {
          try {
            const asset = await environment.getAsset(imgRef.sys.id);
            if (asset.fields.file && asset.fields.file['en-US']) {
              gallery.push({
                url: `https:${asset.fields.file['en-US'].url}`,
                title: asset.fields.title ? asset.fields.title['en-US'] : '',
                description: asset.fields.description ? asset.fields.description['en-US'] : ''
              });
            }
          } catch (err) {
            console.error('Error fetching gallery image:', err);
          }
        }
      }

      return {
        id: item.sys.id,
        title: item.fields.title ? item.fields.title['en-US'] : '',
        slug: item.fields.slug ? item.fields.slug['en-US'] : '',
        date: item.fields.date ? item.fields.date['en-US'] : new Date().toISOString(),
        season: item.fields.season ? item.fields.season['en-US'] : '',
        excerpt: item.fields.excerpt ? item.fields.excerpt['en-US'] : '',
        story: item.fields.story ? item.fields.story['en-US'] : '',
        photographerCredit: item.fields.photographerCredit ? item.fields.photographerCredit['en-US'] : '',
        venue: item.fields.venue ? item.fields.venue['en-US'] : 'Rum River Barn',
        featured: item.fields.featured ? item.fields.featured['en-US'] : false,
        featuredImage: featuredImageUrl,
        gallery: gallery,
        published: item.sys.publishedAt ? true : false,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt
      };
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        count: weddings.length,
        weddings: weddings
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