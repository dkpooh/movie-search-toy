const path = require('path')
const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: config => {
    config.resolve = {
      alias: {
        '@': path.join(__dirname, 'src')
      },
      ...config.resolve
    }

    return config
  }
})