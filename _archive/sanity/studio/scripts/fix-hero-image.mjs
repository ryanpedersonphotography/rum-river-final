import {createClient} from '@sanity/client'
const client = createClient({projectId:'vicw6cgb',dataset:'production',apiVersion:'2024-01-01',token:process.env.SANITY_AUTH_TOKEN})

async function run(){
  // The image reference from our previous analysis
  const imageRef = 'image-36a9e7766804bbe86f5302eaba42db14431fb39e-1280x854-jpg'
  
  // Check if the homepage exists and needs the background image
  const homepage = await client.fetch('*[_id=="homePage"][0]{ hero }')
  
  if (!homepage?.hero) {
    console.log('❌ No hero found on homepage')
    return
  }
  
  if (homepage.hero.backgroundImage) {
    console.log('✅ Hero already has background image')
    return
  }
  
  // Add the background image to the hero
  const result = await client
    .patch('homePage')
    .set({
      'hero.backgroundImage': {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageRef
        },
        alt: 'Barn Exterior Full Deck View Evening'
      }
    })
    .commit()
  
  console.log('✅ Added background image to hero')
  console.log('Image URL: https://cdn.sanity.io/images/vicw6cgb/production/36a9e7766804bbe86f5302eaba42db14431fb39e-1280x854.jpg')
}

run().catch(e=>{console.error(e);process.exit(1)})