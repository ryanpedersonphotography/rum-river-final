module.exports = function (migration) {
  const featureBlock = migration
    .createContentType('featureBlock')
    .name('Feature Block')
    .displayField('title')
    .description('A feature block for the home page')

  featureBlock
    .createField('number')
    .name('Number')
    .type('Symbol')
    .required(true)

  featureBlock
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true)

  featureBlock
    .createField('lead')
    .name('Lead Text')
    .type('Symbol')
    .required(false)

  featureBlock
    .createField('content')
    .name('Content')
    .type('Text')
    .required(true)

  featureBlock
    .createField('imageAlt')
    .name('Image Alt Text')
    .type('Symbol')
    .required(false)

  featureBlock
    .createField('reverse')
    .name('Reverse Layout')
    .type('Boolean')
    .required(false)
}