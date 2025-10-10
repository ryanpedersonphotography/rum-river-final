module.exports = function (migration) {
  const testimonial = migration
    .createContentType('testimonial')
    .name('Testimonial')
    .displayField('authorName')
    .description('A customer testimonial')

  testimonial
    .createField('quote')
    .name('Quote')
    .type('Text')
    .required(true)

  testimonial
    .createField('authorName')
    .name('Author Name')
    .type('Symbol')
    .required(true)

  testimonial
    .createField('authorDetail')
    .name('Author Detail')
    .type('Symbol')
    .required(false)
}