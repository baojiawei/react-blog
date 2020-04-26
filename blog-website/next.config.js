const withLessExcludeAntd = require('./next-less.config.js')

// choose your own modifyVars
// const modifyVars = require('./utils/modifyVars')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => { }
}

module.exports = withLessExcludeAntd({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  }
})
