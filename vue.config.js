const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,

  pwa: {
    name: 'MadakaHeri',
    themeColor: '#FFDB00',
  },
})
