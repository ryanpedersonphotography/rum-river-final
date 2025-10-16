import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from '@sanity/presentation'

// Import schemas
import page from './schemas/page'
import siteSettings from './schemas/siteSettings'
import seoSettings from './schemas/seoSettings'
import richText from './schemas/richText'

// Block schemas
import heroBlock from './schemas/blocks/heroBlock'
import venueDiscoveryBlock from './schemas/blocks/venueDiscoveryBlock'
import featureBlocksBlock from './schemas/blocks/featureBlocksBlock'
import galleryBlock from './schemas/blocks/galleryBlock'
import experienceBlock from './schemas/blocks/experienceBlock'
import testimonialsBlock from './schemas/blocks/testimonialsBlock'
import formBlock from './schemas/blocks/formBlock'

// Supporting document schemas
import venue from './schemas/venue'
import testimonial from './schemas/testimonial'
import weddingBlog from './schemas/weddingBlog'
import featureBlock from './schemas/featureBlock'
import experienceFeature from './schemas/experienceFeature'
import wedding from './schemas/wedding'
import galleryImage from './schemas/gallery'
import customImage from './schemas/image'

const projectId = 'vicw6cgb'
const dataset = 'production'

export default defineConfig({
  name: 'rum-river-wedding-barn',
  title: 'Rum River Wedding Barn',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Pages section
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Homepage')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('homepage')
                      ),
                    S.listItem()
                      .title('Events Page')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('events-page')
                      ),
                    S.listItem()
                      .title('Contact Page')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('contact-page')
                      ),
                    S.divider(),
                    ...S.documentTypeListItems()
                      .filter(listItem => ['page'].includes(listItem.getId()))
                  ])
              ),
            
            // Content sections
            S.divider(),
            S.listItem()
              .title('Wedding Blogs')
              .child(S.documentTypeList('weddingBlog').title('Wedding Blogs')),
            
            S.listItem()
              .title('Venues')
              .child(S.documentTypeList('venue').title('Venues')),
            
            S.listItem()
              .title('Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            
            S.listItem()
              .title('Feature Blocks')
              .child(S.documentTypeList('featureBlock').title('Feature Blocks')),
            
            S.listItem()
              .title('Experience Features')
              .child(S.documentTypeList('experienceFeature').title('Experience Features')),
            
            S.listItem()
              .title('Weddings')
              .child(S.documentTypeList('wedding').title('Real Weddings')),
            
            S.listItem()
              .title('Gallery Images')
              .child(S.documentTypeList('galleryImage').title('Gallery Images')),
            
            // Settings
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('site-settings')
              ),
          ])
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: import.meta.env.DEV ? 'http://localhost:5173' : 'https://rum-river-final.netlify.app',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable'
        }
      }
    }),
  ],
  schema: {
    types: [
      // Main documents
      page,
      siteSettings,
      
      // Object types
      seoSettings,
      richText,
      
      // Block types
      heroBlock,
      venueDiscoveryBlock,
      featureBlocksBlock,
      galleryBlock,
      experienceBlock,
      testimonialsBlock,
      formBlock,
      
      // Supporting documents
      venue,
      testimonial,
      weddingBlog,
      featureBlock,
      experienceFeature,
      wedding,
      galleryImage,
      
      // Custom types
      customImage,
    ],
  },
})