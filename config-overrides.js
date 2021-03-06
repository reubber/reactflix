const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/components'),
    '@reducers': path.resolve(__dirname, './src/redux-flow/reducers'),
    '@config': path.resolve(__dirname, './src/config'),
    '@utils': path.resolve(__dirname, './src/utils'),

  })
)