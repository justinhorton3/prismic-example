const path = require('path')

module.exports = {
  target: 'serverless',
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
  },
  webpack (config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
}
