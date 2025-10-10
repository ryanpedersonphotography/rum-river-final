module.exports = function (migration) {
  const weddingBlog = migration.editContentType('weddingBlog')
  
  // Increase photo limit to 35
  weddingBlog
    .editField('photos')
    .validations([
      {
        size: {
          min: 0,
          max: 35
        }
      }
    ])
}