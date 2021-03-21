module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify'
  ],

  outputDir: 'docs',

  pwa: {
    name: 'MadakaHeri',
    themeColor: '#F5A623'
  },

  pages: {
    index: {
      entry: "src/main.js",
      title: "MadakaHeri",
    }
  },
}
