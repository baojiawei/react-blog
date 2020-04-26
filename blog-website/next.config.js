const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => { }
}

module.exports = withPlugins([withCss, withLess], {
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]___[hash:base64:5]'
  }
})
