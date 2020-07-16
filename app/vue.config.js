//https://programming.vip/docs/how-to-configure-vue-config.js-when-creating-a-project-with-vue-cli3.html
module.exports = {
  outputDir:'../heroku/dist',
  assetsDir: './assets/',
  filenameHashing: false,

  // Modify Webpack config
  // https://cli.vuejs.org/config/#chainwebpack
  chainWebpack: config => {
    // Not naming bundle 'app'
    config.entryPoints.delete('app');
  },

  // Overriding webpack config
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    // Naming bundle 'build'
    entry: {
      build: './src/main.js'
    }
  }

}
