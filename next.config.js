const withCSS = require("@zeit/next-css")
const withTypescript = require("@zeit/next-typescript")

module.exports = [
  withCSS({
    cssModules: true, // means modules compile on develop
  }),
  withTypescript()
]
