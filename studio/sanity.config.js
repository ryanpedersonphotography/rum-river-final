import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'

// Import page schemas
import homePage from './schemas/pages/homePage'
import eventsPage from './schemas/pages/eventsPage'
import propertyPage from './schemas/pages/propertyPage'
import galleryPage from './schemas/pages/galleryPage'
import contactPage from './schemas/pages/contactPage'
import vendorsPage from './schemas/pages/vendorsPage'
import locationPage from './schemas/pages/locationPage'
import testimonialsPage from './schemas/pages/testimonialsPage'
import historyPage from './schemas/pages/historyPage'
import thankYouPage from './schemas/pages/thankYouPage'
import faqPage from './schemas/pages/faqPage'

// Import old page schema (for migration)
import page from './schemas/page'
import siteSettings from './schemas/siteSettings'
import seoSettings from './schemas/seoSettings'
import richText from './schemas/richText'

// Import global/layout schemas
import headerSettings from './schemas/global/headerSettings'
import footerSettings from './schemas/global/footerSettings'
import globalSettings from './schemas/global/globalSettings'

// Block schemas
import heroBlock from './schemas/blocks/heroBlock'
import venueDiscoveryBlock from './schemas/blocks/venueDiscoveryBlock'
import featureBlocksBlock from './schemas/blocks/featureBlocksBlock'
import galleryBlock from './schemas/blocks/galleryBlock'
import experienceBlock from './schemas/blocks/experienceBlock'
import testimonialsBlock from './schemas/blocks/testimonialsBlock'
import formBlock from './schemas/blocks/formBlock'
import eventBlock from './schemas/blocks/eventBlock'

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
  
  // Disable comments globally
  document: {
    comments: {
      enabled: false
    }
  },
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // 📄 Main Pages
            S.listItem()
              .title('📄 Main Pages')
              .child(
                S.list()
                  .title('Main Pages')
                  .items([
                    S.listItem()
                      .title('🏠 Homepage')
                      .child(
                        S.document()
                          .schemaType('homePage')
                          .documentId('homepage')
                      ),
                    S.listItem()
                      .title('🎉 Events')
                      .child(
                        S.document()
                          .schemaType('eventsPage')
                          .documentId('eventsPage')
                      ),
                    S.listItem()
                      .title('🏡 Property')
                      .child(
                        S.document()
                          .schemaType('propertyPage')
                          .documentId('propertyPage')
                      ),
                    S.listItem()
                      .title('📸 Gallery')
                      .child(
                        S.document()
                          .schemaType('galleryPage')
                          .documentId('galleryPage')
                      ),
                    S.listItem()
                      .title('📧 Contact')
                      .child(
                        S.document()
                          .schemaType('contactPage')
                          .documentId('contactPage')
                      ),
                    S.listItem()
                      .title('❓ FAQ')
                      .child(
                        S.document()
                          .schemaType('faqPage')
                          .documentId('faqPage')
                      ),
                    S.listItem()
                      .title('🤝 Vendors')
                      .child(
                        S.document()
                          .schemaType('vendorsPage')
                          .documentId('vendorsPage')
                      ),
                    S.listItem()
                      .title('📍 Location')
                      .child(
                        S.document()
                          .schemaType('locationPage')
                          .documentId('locationPage')
                      ),
                    S.listItem()
                      .title('💬 Testimonials')
                      .child(
                        S.document()
                          .schemaType('testimonialsPage')
                          .documentId('testimonialsPage')
                      ),
                    S.listItem()
                      .title('📜 History')
                      .child(
                        S.document()
                          .schemaType('historyPage')
                          .documentId('historyPage')
                      ),
                    S.listItem()
                      .title('🙏 Thank You')
                      .child(
                        S.document()
                          .schemaType('thankYouPage')
                          .documentId('thank-you-page')
                      ),
                  ])
              ),
            
            S.divider(),
            
            // 📝 Dynamic Content
            S.listItem()
              .title('📝 Dynamic Content')
              .child(
                S.list()
                  .title('Dynamic Content')
                  .items([
                    S.listItem()
                      .title('💑 Real Weddings')
                      .child(S.documentTypeList('wedding').title('Real Weddings')),
                    S.listItem()
                      .title('📰 Wedding Blogs')
                      .child(S.documentTypeList('weddingBlog').title('Wedding Blogs')),
                    S.listItem()
                      .title('🖼️ Gallery Images')
                      .child(S.documentTypeList('galleryImage').title('Gallery Images')),
                  ])
              ),
            
            S.divider(),
            
            // 🧩 Reusable Content
            S.listItem()
              .title('🧩 Reusable Content')
              .child(
                S.list()
                  .title('Reusable Content')
                  .items([
                    S.listItem()
                      .title('🏛️ Venues')
                      .child(S.documentTypeList('venue').title('Venues')),
                    S.listItem()
                      .title('💬 Testimonials')
                      .child(S.documentTypeList('testimonial').title('Testimonials')),
                  ])
              ),
            
            
            S.divider(),
            
            // 🌐 Global Layout & Settings
            S.listItem()
              .title('🌐 Global Layout & Settings')
              .child(
                S.list()
                  .title('Global Layout & Settings')
                  .items([
                    S.listItem()
                      .title('🎛️ Global Settings')
                      .child(
                        S.document()
                          .schemaType('globalSettings')
                          .documentId('globalSettings')
                      ),
                    S.listItem()
                      .title('🧭 Header Settings')
                      .child(
                        S.document()
                          .schemaType('headerSettings')
                          .documentId('headerSettings')
                      ),
                    S.listItem()
                      .title('🦶 Footer Settings')
                      .child(
                        S.document()
                          .schemaType('footerSettings')
                          .documentId('footerSettings')
                      ),
                    
                    S.divider(),
                    
                    S.listItem()
                      .title('⚙️ Legacy Site Settings')
                      .child(
                        S.document()
                          .schemaType('siteSettings')
                          .documentId('siteSettings')
                      ),
                  ])
              ),
          ])
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.NODE_ENV === 'development' ? 'http://localhost:5173' : 'https://rum-river-final.netlify.app',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable'
        }
      }
    }),
  ],
  schema: {
    types: [
      // Page documents
      homePage,
      eventsPage,
      propertyPage,
      galleryPage,
      contactPage,
      vendorsPage,
      locationPage,
      testimonialsPage,
      historyPage,
      thankYouPage,
      faqPage,
      
      // Dynamic content documents
      wedding,
      weddingBlog,
      galleryImage,
      
      // Reusable content documents
      venue,
      testimonial,
      
      // Settings and Global Layout
      globalSettings,
      headerSettings,
      footerSettings,
      siteSettings,
      
      // Object types (not shown in menu)
      seoSettings,
      richText,
      customImage,
      
      // Block types (not shown in menu)
      heroBlock,
      venueDiscoveryBlock,
      featureBlocksBlock,
      galleryBlock,
      experienceBlock,
      testimonialsBlock,
      formBlock,
      eventBlock,
      
      // Reference-only documents (not shown in menu)
      featureBlock,
      experienceFeature,
      
      // Legacy page type (for migration only, hidden)
      page,
    ],
  },
})