/**
 * Style Dictionary Configuration
 * Transforms design tokens into CSS custom properties and other formats
 */

export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            showFileHeader: true
          }
        }
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables'
        }
      ]
    }
  }
}
