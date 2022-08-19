const { defineConfig } = require('@vue/cli-service')
const { InjectManifest } = require('workbox-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true
})

const config = {}

if (process.env.NODE_ENV === 'production') {
  config['configureWebpack'] = {
    plugins: [
      new InjectManifest({
        swSrc: './service-worker.js',
      }),
    ],
  }
}

module.exports = config
