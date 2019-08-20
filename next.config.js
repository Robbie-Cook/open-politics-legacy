const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true, // means modules compile on develop
})