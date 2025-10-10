module.exports = function (migration) {
  const experienceFeature = migration
    .createContentType('experienceFeature')
    .name('Experience Feature')
    .displayField('title')
    .description('A feature item for the experience section')

  experienceFeature
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true)

  experienceFeature
    .createField('description')
    .name('Description')
    .type('Text')
    .required(true)
}