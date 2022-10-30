const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,

  pwa: {
    name: 'MadakaHeri',
    themeColor: '#FFDB00',
    iconPaths: {
      favicon32: 'favicon.ico',
    },
  },

  outputDir: 'dist',
})
