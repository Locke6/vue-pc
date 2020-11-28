const { resolve } = require("path")
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@views": resolve(__dirname, 'src/views'),
        "@api": resolve(__dirname, 'src/api'),
        "@assets": resolve(__dirname, 'src/assets'),
        "@comps": resolve(__dirname, 'src/components'),
        "@store": resolve(__dirname, 'src/store'),
        "@utils": resolve(__dirname, 'src/utils')
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true
      }
    }
  }
}