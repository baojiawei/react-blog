const withLess = require('@zeit/next-less');
const WithCss = require('@zeit/next-css');
const WithSass = require('@zeit/next-sass');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = WithSass(withLess(
  WithCss({
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  })
));