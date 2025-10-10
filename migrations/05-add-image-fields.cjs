module.exports = function (migration) {
  // Update Feature Block to add image field
  const featureBlock = migration.editContentType('featureBlock')
  
  featureBlock
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .required(false)

  // Update Experience section on HomePage to add image
  const homePage = migration.editContentType('homePage')
  
  homePage
    .createField('experienceImage')
    .name('Experience Section Image')
    .type('Link')
    .linkType('Asset')
    .required(false)

  // Add hero background image
  homePage
    .createField('heroBackgroundImage')
    .name('Hero Background Image')
    .type('Link')
    .linkType('Asset')
    .required(false)
}