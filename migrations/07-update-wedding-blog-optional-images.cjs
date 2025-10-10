module.exports = function (migration) {
  const weddingBlog = migration.editContentType('weddingBlog')
  
  // Make image fields optional
  weddingBlog
    .editField('heroImage')
    .required(false)
    
  weddingBlog
    .editField('coverImage')
    .required(false)
    
  weddingBlog
    .editField('featuredImage')
    .required(false)
    
  weddingBlog
    .editField('photos')
    .required(false)
    .validations([
      {
        size: {
          min: 0,
          max: 20
        }
      }
    ])
}