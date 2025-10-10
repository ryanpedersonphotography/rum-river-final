module.exports = function (migration) {
  const homePage = migration
    .createContentType('homePage')
    .name('Home Page')
    .displayField('heroTitleLine1')
    .description('Content for the website home page')

  // Hero Section Fields
  homePage
    .createField('heroScriptAccent')
    .name('Hero Script Accent')
    .type('Symbol')
    .required(false)

  homePage
    .createField('heroTitleLine1')
    .name('Hero Title Line 1')
    .type('Symbol')
    .required(true)

  homePage
    .createField('heroTitleLine2')
    .name('Hero Title Line 2')
    .type('Symbol')
    .required(false)

  homePage
    .createField('heroDescription')
    .name('Hero Description')
    .type('Text')
    .required(false)

  homePage
    .createField('heroCtaText')
    .name('Hero CTA Text')
    .type('Symbol')
    .required(false)

  homePage
    .createField('heroCtaLink')
    .name('Hero CTA Link')
    .type('Symbol')
    .required(false)

  // Feature Blocks Section
  homePage
    .createField('featureScriptAccent')
    .name('Feature Section Script Accent')
    .type('Symbol')
    .required(false)

  homePage
    .createField('featureTitle')
    .name('Feature Section Title')
    .type('Symbol')
    .required(false)

  homePage
    .createField('featureLead')
    .name('Feature Section Lead')
    .type('Text')
    .required(false)

  homePage
    .createField('featureBlocks')
    .name('Feature Blocks')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{
        linkContentType: ['featureBlock']
      }]
    })
    .required(false)

  // Experience Section
  homePage
    .createField('experienceScriptAccent')
    .name('Experience Script Accent')
    .type('Symbol')
    .required(false)

  homePage
    .createField('experienceTitle')
    .name('Experience Title')
    .type('Symbol')
    .required(false)

  homePage
    .createField('experienceDescription')
    .name('Experience Description')
    .type('Text')
    .required(false)

  homePage
    .createField('experienceFeatures')
    .name('Experience Features')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{
        linkContentType: ['experienceFeature']
      }]
    })
    .required(false)

  // Love Stories Section
  homePage
    .createField('loveStoriesScriptAccent')
    .name('Love Stories Script Accent')
    .type('Symbol')
    .required(false)

  homePage
    .createField('loveStoriesTitle')
    .name('Love Stories Title')
    .type('Symbol')
    .required(false)

  homePage
    .createField('loveStoriesLead')
    .name('Love Stories Lead')
    .type('Text')
    .required(false)

  // Testimonials Section
  homePage
    .createField('testimonialsScriptAccent')
    .name('Testimonials Script Accent')
    .type('Symbol')
    .required(false)

  homePage
    .createField('testimonialsTitle')
    .name('Testimonials Title')
    .type('Symbol')
    .required(false)

  homePage
    .createField('testimonialItems')
    .name('Testimonial Items')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{
        linkContentType: ['testimonial']
      }]
    })
    .required(false)
}