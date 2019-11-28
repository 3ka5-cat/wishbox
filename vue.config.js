module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/wishbox/'
    : '/',
  pages: {
    'index': {
      entry: './src/pages/wishbox/main.js',
      template: 'public/index.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'ded_moroz': {
      entry: './src/pages/wishbox_new_year/main.js',
      template: 'public/ded_moroz.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'ded_moroz' ]
    },
    'forfeits': {
      entry: './src/pages/forfeits/main.js',
      template: 'public/forfeits.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'forfeits' ]
    }
  }
}
