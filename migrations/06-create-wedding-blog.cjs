module.exports = function (migration) {
  const weddingBlog = migration
    .createContentType('weddingBlog')
    .name('Wedding Blog')
    .description('Wedding blog posts with photos and vendor credits')
    .displayField('title')

  // Required Fields
  weddingBlog
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          max: 200
        }
      }
    ])

  weddingBlog
    .createField('slug')
    .name('URL Slug')
    .type('Symbol')
    .required(true)
    .validations([
      {
        unique: true
      },
      {
        regexp: {
          pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$',
          flags: null
        },
        message: 'URL slug must be lowercase letters, numbers, and hyphens only'
      }
    ])

  weddingBlog
    .createField('coupleName')
    .name('Couple Name')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          max: 100
        }
      }
    ])

  weddingBlog
    .createField('weddingDate')
    .name('Wedding Date')
    .type('Date')
    .required(true)

  weddingBlog
    .createField('publishedDate')
    .name('Published Date')
    .type('Date')
    .required(true)

  // Image Fields
  weddingBlog
    .createField('heroImage')
    .name('Hero Image')
    .type('Link')
    .linkType('Asset')
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])

  weddingBlog
    .createField('coverImage')
    .name('Cover Image (Grid Thumbnail)')
    .type('Link')
    .linkType('Asset')
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])

  weddingBlog
    .createField('featuredImage')
    .name('Featured Image (Best Shot)')
    .type('Link')
    .linkType('Asset')
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ['image']
      }
    ])

  // Location and Basic Info
  weddingBlog
    .createField('location')
    .name('Location')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          max: 200
        }
      }
    ])

  weddingBlog
    .createField('season')
    .name('Season/Period')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          max: 50
        }
      }
    ])

  weddingBlog
    .createField('introText')
    .name('Introduction Text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: {
          max: 500
        }
      }
    ])

  // Photo Gallery
  weddingBlog
    .createField('photos')
    .name('Photo Gallery')
    .type('Array')
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Asset',
      validations: [
        {
          linkMimetypeGroup: ['image']
        }
      ]
    })
    .validations([
      {
        size: {
          min: 1,
          max: 20
        }
      }
    ])

  // Optional Fields
  weddingBlog
    .createField('featured')
    .name('Featured on Homepage')
    .type('Boolean')

  weddingBlog
    .createField('storyContent')
    .name('Wedding Story')
    .type('RichText')

  weddingBlog
    .createField('testimonial')
    .name('Couple Testimonial')
    .type('Text')
    .validations([
      {
        size: {
          max: 1000
        }
      }
    ])

  weddingBlog
    .createField('featuredImageCaption')
    .name('Featured Image Caption')
    .type('Symbol')
    .validations([
      {
        size: {
          max: 200
        }
      }
    ])

  weddingBlog
    .createField('photoCredits')
    .name('Photography Credits')
    .type('Symbol')
    .validations([
      {
        size: {
          max: 200
        }
      }
    ])

  weddingBlog
    .createField('guestCount')
    .name('Guest Count')
    .type('Integer')
    .validations([
      {
        range: {
          min: 1,
          max: 1000
        }
      }
    ])

  weddingBlog
    .createField('tags')
    .name('Tags')
    .type('Array')
    .items({
      type: 'Symbol',
      validations: [
        {
          size: {
            max: 30
          }
        }
      ]
    })

  // Vendor Credits (as JSON object)
  weddingBlog
    .createField('vendors')
    .name('Vendor Credits')
    .type('Object')

  // SEO Fields
  weddingBlog
    .createField('seoTitle')
    .name('SEO Title')
    .type('Symbol')
    .validations([
      {
        size: {
          max: 70
        }
      }
    ])

  weddingBlog
    .createField('seoDescription')
    .name('SEO Description')
    .type('Text')
    .validations([
      {
        size: {
          max: 160
        }
      }
    ])

  // Configure entry editor
  weddingBlog.changeFieldControl('slug', 'builtin', 'slugEditor')
  weddingBlog.changeFieldControl('introText', 'builtin', 'textarea')
  weddingBlog.changeFieldControl('testimonial', 'builtin', 'textarea')
  weddingBlog.changeFieldControl('storyContent', 'builtin', 'richTextEditor')
  weddingBlog.changeFieldControl('vendors', 'builtin', 'objectEditor')
  weddingBlog.changeFieldControl('photos', 'builtin', 'assetLinksEditor')
}