export default {
  install(Vue, options){
    Vue.mixin({
      computed: {
        frame_isDarkMode: {
          get(){
            return this.$vuetify.theme.dark
          },
          set(val){
            this.$vuetify.theme.dark = val
            localStorage.setItem('isDarkMode', JSON.stringify(val))
          },
        },
        frame_isShowDrawer: {
          get(){
            return this.$root.frame.isShowDrawer
          },
          set(val){
            this.$root.frame.isShowDrawer = val
          },
        },
      },
    })
  }
}